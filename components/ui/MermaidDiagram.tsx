"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Expand, Minus, Network, Plus, X } from "lucide-react";

const MIN_SCALE = 0.5;
const MAX_SCALE = 3;
const ZOOM_STEP = 0.25;

const clamp = (v: number) => Math.min(MAX_SCALE, Math.max(MIN_SCALE, v));

interface MermaidDiagramProps {
  syntax: string;
  title?: string;
  description?: string;
}

interface ZoomControlsProps {
  scale: number;
  onScaleChange: (next: number) => void;
  onExpand?: () => void;
}

function ZoomControls({ scale, onScaleChange, onExpand }: ZoomControlsProps) {
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
      {onExpand && (
        <button
          type="button"
          className={btn}
          onClick={onExpand}
          aria-label="View fullscreen"
          title="View fullscreen"
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

let instanceId = 0;

export default function MermaidDiagram({ syntax, title, description }: MermaidDiagramProps) {
  const [svg, setSvg] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [scale, setScale] = useState(1);
  const [modalScale, setModalScale] = useState(1);
  const [open, setOpen] = useState(false);
  const idRef = useRef(`mermaid-${++instanceId}`);
  const viewportRef = useRef<HTMLDivElement>(null);
  const modalViewportRef = useRef<HTMLDivElement>(null);

  const zoomViewport = useCallback(
    (updater: (s: number) => number) => setScale((s) => clamp(updater(s))),
    [],
  );
  const zoomModal = useCallback(
    (updater: (s: number) => number) => setModalScale((s) => clamp(updater(s))),
    [],
  );
  useWheelZoom(viewportRef, zoomViewport);
  useWheelZoom(modalViewportRef, zoomModal);

  useEffect(() => {
    if (!syntax?.trim()) return;

    let cancelled = false;

    async function render() {
      try {
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({
          startOnLoad: false,
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

        const { svg: rendered } = await mermaid.render(idRef.current, syntax.trim());
        if (!cancelled) {
          setSvg(rendered);
          setError(false);
        }
      } catch {
        if (!cancelled) setError(true);
      }
    }

    render();
    return () => { cancelled = true; };
  }, [syntax]);

  // Escape to close + lock body scroll while the modal is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const openModal = () => {
    setModalScale(1);
    setOpen(true);
  };

  // No syntax — show placeholder
  if (!syntax?.trim()) {
    return (
      <div className="bg-surface border border-white/10 rounded-xl p-8 mb-12">
        <div className="aspect-video bg-black/40 rounded border border-dashed border-white/20 flex flex-col items-center justify-center gap-4 text-center px-8">
          <Network className="text-white/20 size-16" />
          <div>
            <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-2">
              {title}
            </p>
            <p className="text-white/20 text-xs">{description}</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-surface border border-white/10 rounded-xl p-8 mb-12">
        <div className="aspect-video bg-black/40 rounded border border-dashed border-white/20 flex flex-col items-center justify-center gap-4 text-center px-8">
          <Network className="text-white/20 size-16" />
          <p className="text-white/30 text-xs">Diagram unavailable</p>
        </div>
      </div>
    );
  }

  if (!svg) {
    return (
      <div className="bg-surface border border-white/10 rounded-xl p-8 mb-12">
        <div className="aspect-video bg-black/40 rounded border border-dashed border-white/10 animate-pulse" />
      </div>
    );
  }

  const renderDiagram = (zoom: number) => (
    <div className="flex min-h-full w-max min-w-full items-center justify-center p-8">
      <div
        style={{ zoom }}
        className="[&_svg]:max-w-none [&_svg]:h-auto"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </div>
  );

  return (
    <>
      <div className="mb-12 overflow-hidden rounded-xl border border-white/10 bg-surface">
        <div className="flex items-center justify-between gap-4 border-b border-white/5 bg-surface px-4 py-2.5">
          <div className="min-w-0">
            <p className="truncate text-[10px] font-bold uppercase tracking-widest text-white/60">
              {title}
            </p>
            {description && (
              <p className="truncate text-xs text-white/30">{description}</p>
            )}
          </div>
          <ZoomControls
            scale={scale}
            onScaleChange={setScale}
            onExpand={openModal}
          />
        </div>
        <div
          ref={viewportRef}
          role="button"
          tabIndex={0}
          aria-label="Expand architecture diagram"
          title="Click to expand"
          onClick={openModal}
          onKeyDown={(e) => {
            if (e.key === "Enter") openModal();
          }}
          className="relative h-72 cursor-zoom-in overflow-auto bg-black/40"
        >
          {renderDiagram(scale)}
        </div>
      </div>

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-md"
            onClick={() => setOpen(false)}
          >
            <div
              className="flex items-center justify-between gap-4 border-b border-white/10 px-6 py-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="min-w-0">
                <p className="truncate text-xs font-bold uppercase tracking-widest text-white/70">
                  {title}
                </p>
                {description && (
                  <p className="truncate text-xs text-white/30">{description}</p>
                )}
              </div>
              <div className="flex items-center gap-3">
                <ZoomControls scale={modalScale} onScaleChange={setModalScale} />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  title="Close"
                  className="flex size-9 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <X className="size-5" />
                </button>
              </div>
            </div>
            <div
              ref={modalViewportRef}
              className="flex-1 overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {renderDiagram(modalScale)}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
