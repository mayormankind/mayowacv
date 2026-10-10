//components/ui/MermaidDiagram.tsx
"use client";

import React, {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { Expand, Minus, Network, Plus, X } from "lucide-react";
import Modal from "@/components/ui/Modal";

const MIN_SCALE = 0.15;
const MAX_SCALE = 3;
const ZOOM_STEP = 0.25;
const H_PADDING = 64; // matches p-8 on both sides of the viewport

const clamp = (v: number) => Math.min(MAX_SCALE, Math.max(MIN_SCALE, v));

interface MermaidDiagramProps {
  syntax: string;
  title?: string;
  description?: string;
}

interface ZoomControlsProps {
  scale: number;
  onScaleChange: (next: number) => void;
  onFit?: () => void;
  onExpand?: () => void;
}

function ZoomControls({
  scale,
  onScaleChange,
  onFit,
  onExpand,
}: ZoomControlsProps) {
  const btn =
    "size-8 flex items-center justify-center rounded text-white/60 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-30 disabled:pointer-events-none";
  return (
    <div className="flex items-center gap-0.5 rounded-lg border border-white/10 bg-black/50 p-1 backdrop-blur">
      <button
        type="button"
        className={btn}
        onClick={() => onScaleChange(clamp(scale - ZOOM_STEP))}
        disabled={scale <= MIN_SCALE}
        aria-label="Zoom out"
        title="Zoom out"
      >
        <Minus className="size-4" />
      </button>
      <button
        type="button"
        className="w-12 text-center text-[10px] font-bold tabular-nums text-white/50 hover:text-white transition-colors"
        onClick={() => onScaleChange(1)}
        title="Reset zoom"
      >
        {Math.round(scale * 100)}%
      </button>
      <button
        type="button"
        className={btn}
        onClick={() => onScaleChange(clamp(scale + ZOOM_STEP))}
        disabled={scale >= MAX_SCALE}
        aria-label="Zoom in"
        title="Zoom in"
      >
        <Plus className="size-4" />
      </button>
      {onFit && (
        <button
          type="button"
          className="px-2 text-[10px] font-bold uppercase tracking-wider text-white/50 hover:text-white transition-colors"
          onClick={onFit}
          title="Fit to width"
        >
          Fit
        </button>
      )}
      {onExpand && (
        <button
          type="button"
          className={btn}
          onClick={onExpand}
          aria-label="View full diagram"
          title="View full diagram"
        >
          <Expand className="size-4" />
        </button>
      )}
    </div>
  );
}

/** Applies map-style ctrl/cmd + wheel zoom to the referenced viewport. */
function useWheelZoom(
  ref: React.RefObject<HTMLDivElement | null>,
  onScaleChange: (updater: (s: number) => number) => void,
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      onScaleChange((s) => clamp(s + (e.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP)));
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [ref, onScaleChange]);
}

/** Reads the intrinsic SVG size from the rendered markup (viewBox first). */
function parseSvgSize(svg: string): { w: number; h: number } | null {
  const viewBox = svg.match(/viewBox="[^"]*?([\d.]+)\s+([\d.]+)\s*"/);
  if (viewBox) {
    const w = Number(viewBox[1]);
    const h = Number(viewBox[2]);
    if (w > 0 && h > 0) return { w, h };
  }
  const w = svg.match(/\bwidth="([\d.]+)"/);
  const h = svg.match(/\bheight="([\d.]+)"/);
  if (w && h) {
    const width = Number(w[1]);
    const height = Number(h[1]);
    if (width > 0 && height > 0) return { w: width, h: height };
  }
  return null;
}

let instanceId = 0;

export default function MermaidDiagram({
  syntax,
  title,
  description,
}: MermaidDiagramProps) {
  const [svg, setSvg] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [scale, setScale] = useState(1);
  const [fitScale, setFitScale] = useState(1);
  const [modalScale, setModalScale] = useState(1);
  const [open, setOpen] = useState(false);
  const [nearViewport, setNearViewport] = useState(false);
  const idRef = useRef(`mermaid-${++instanceId}`);
  const figureRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const modalViewportRef = useRef<HTMLDivElement>(null);
  const fitScaleRef = useRef(1);
  const captionId = useId();

  const dims = useMemo(() => (svg ? parseSvgSize(svg) : null), [svg]);

  const zoomViewport = useCallback(
    (updater: (s: number) => number) => setScale((s) => clamp(updater(s))),
    [],
  );
  const zoomModal = useCallback(
    (updater: (s: number) => number) =>
      setModalScale((s) => clamp(updater(s))),
    [],
  );
  useWheelZoom(viewportRef, zoomViewport);
  useWheelZoom(modalViewportRef, zoomModal);

  // Only pull in the (heavy) mermaid bundle when the diagram nears the viewport.
  useEffect(() => {
    const el = figureRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!nearViewport || !syntax?.trim()) return;

    let cancelled = false;

    async function render() {
      try {
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "strict", // syntax is database-authored content
          theme: "dark",
          themeVariables: {
            background: "transparent",
            primaryColor: "#de1b1b",
            primaryTextColor: "#ffffff",
            primaryBorderColor: "#de1b1b33",
            lineColor: "#de1b1b",
            secondaryColor: "#ffffff08",
            tertiaryColor: "#ffffff05",
            edgeLabelBackground: "#0d0d0d",
            clusterBkg: "#ffffff05",
            titleColor: "#ffffff80",
            nodeTextColor: "#ffffff",
            fontFamily: "Manrope, sans-serif",
          },
        });

        const { svg: rendered } = await mermaid.render(
          idRef.current,
          syntax!.trim(),
        );
        if (!cancelled) {
          setSvg(rendered);
          setError(false);
        }
      } catch {
        if (!cancelled) setError(true);
      }
    }

    render();
    return () => {
      cancelled = true;
    };
  }, [nearViewport, syntax]);

  // Fit-to-width: compute and keep a "fit" scale; snap back if the user is
  // still at the old fit when the container resizes.
  useEffect(() => {
    const el = viewportRef.current;
    if (!el || !dims) return;

    const computeFit = () => {
      const previousFit = fitScaleRef.current;
      const fit = clamp(
        Math.min(1, (el.clientWidth - H_PADDING) / dims.w),
      );
      fitScaleRef.current = fit;
      setFitScale(fit);
      setScale((s) => (Math.abs(s - previousFit) < 0.001 ? fit : s));
    };

    computeFit();
    const observer = new ResizeObserver(computeFit);
    observer.observe(el);
    return () => observer.disconnect();
  }, [dims]);

  const openModal = () => {
    setModalScale(1);
    setOpen(true);
  };

  // No syntax — show placeholder
  if (!syntax?.trim()) {
    return (
      <div className="bg-surface border border-white/10 rounded-xl p-8 mb-12">
        <div className="aspect-video bg-black/40 rounded border border-dashed border-white/20 flex flex-col items-center justify-center gap-4 text-center px-8">
          <Network className="text-white/20 size-16" aria-hidden />
          <div>
            <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-2">
              {title}
            </p>
            <p className="text-white/20 text-xs">{description}</p>
          </div>
        </div>
      </div>
    );
  }

  const renderDiagram = (zoom: number) => (
    <div className="flex min-h-full w-max min-w-full items-start justify-center p-8">
      {dims ? (
        <div
          style={{ width: dims.w * zoom, height: dims.h * zoom }}
          className="relative shrink-0 overflow-hidden"
        >
          <div
            style={{
              width: dims.w,
              height: dims.h,
              transform: `scale(${zoom})`,
              transformOrigin: "top left",
            }}
            className="[&_svg]:max-w-none [&_svg]:h-auto"
            dangerouslySetInnerHTML={{ __html: svg! }}
          />
        </div>
      ) : (
        <div
          className="[&_svg]:max-w-none [&_svg]:h-auto"
          dangerouslySetInnerHTML={{ __html: svg! }}
        />
      )}
    </div>
  );

  return (
    <figure ref={figureRef} className="mb-12 overflow-hidden rounded-xl border border-white/10 bg-surface">
      <div className="flex items-center justify-between gap-4 border-b border-white/5 bg-surface px-4 py-2.5">
        <div className="min-w-0">
          <p className="truncate text-xs font-bold uppercase tracking-widest text-white/60">
            {title}
          </p>
          <p className="hidden md:block text-[10px] text-white/25">
            Ctrl + scroll to zoom
          </p>
        </div>
        <ZoomControls
          scale={scale}
          onScaleChange={setScale}
          onFit={() => setScale(fitScale)}
          onExpand={openModal}
        />
      </div>

      <div
        ref={viewportRef}
        role="button"
        tabIndex={0}
        aria-label="Expand architecture diagram"
        aria-describedby={description ? captionId : undefined}
        title="Click to expand"
        onClick={openModal}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openModal();
          }
        }}
        className="relative max-h-[560px] cursor-zoom-in overflow-auto bg-black/40"
      >
        {error ? (
          <div className="aspect-video flex flex-col items-center justify-center gap-4 text-center px-8">
            <Network className="text-white/20 size-16" aria-hidden />
            <p className="text-white/30 text-xs">Diagram unavailable</p>
          </div>
        ) : svg ? (
          renderDiagram(scale)
        ) : (
          <div className="aspect-video animate-pulse" />
        )}
      </div>

      {description && (
        <figcaption
          id={captionId}
          className="border-t border-white/5 px-4 py-3 text-xs text-white/40 leading-relaxed"
        >
          {description}
        </figcaption>
      )}

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        ariaLabel={title ? `${title} — diagram viewer` : "Diagram viewer"}
        className="absolute inset-0 flex flex-col"
      >
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-6 py-4">
          <div className="min-w-0">
            <p className="truncate text-xs font-bold uppercase tracking-widest text-white/70">
              {title}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <ZoomControls
              scale={modalScale}
              onScaleChange={setModalScale}
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close diagram viewer"
              title="Close"
              className="flex size-9 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="size-5" aria-hidden />
            </button>
          </div>
        </div>
        <div ref={modalViewportRef} className="flex-1 overflow-auto">
          {svg && renderDiagram(modalScale)}
        </div>
      </Modal>
    </figure>
  );
}
