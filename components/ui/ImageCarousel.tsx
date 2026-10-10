//components/ui/ImageCarousel.tsx
"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  X,
  ZoomIn,
} from "lucide-react";
import Image from "next/image";
import Modal from "@/components/ui/Modal";

interface ImageCarouselProps {
  images: string[];
  title?: string;
}

const SWIPE_THRESHOLD = 40;

export default function ImageCarousel({
  images,
  title = "Project",
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  // Only slides the user has seen (plus the next one) are mounted/downloaded.
  const [loaded, setLoaded] = useState<ReadonlySet<number>>(
    () => new Set(images.length > 1 ? [0, 1] : [0]),
  );
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const swipeStartX = useRef<number | null>(null);

  const count = images.length;
  const goTo = useCallback(
    (idx: number) => {
      const target = ((idx % count) + count) % count;
      setCurrent(target);
      // Mount the target slide + preload the next one.
      setLoaded((prev) => {
        const nextSet = new Set(prev);
        nextSet.add(target);
        if (count > 1) nextSet.add((target + 1) % count);
        return nextSet;
      });
    },
    [count],
  );
  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  const alt = (idx: number) => `${title} screenshot ${idx + 1}`;

  // Keep the active thumbnail scrolled into view.
  useEffect(() => {
    thumbRefs.current[current]?.scrollIntoView({
      block: "nearest",
      inline: "nearest",
      behavior: "smooth",
    });
  }, [current]);

  // Arrow keys navigate the lightbox.
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, next, prev]);

  if (!images || images.length === 0) return null;

  const onPointerDown = (e: React.PointerEvent) => {
    swipeStartX.current = e.clientX;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (swipeStartX.current === null) return;
    const dx = e.clientX - swipeStartX.current;
    swipeStartX.current = null;
    if (Math.abs(dx) < SWIPE_THRESHOLD) return;
    if (dx < 0) next();
    else prev();
  };

  const arrowBtn =
    "absolute top-1/2 -translate-y-1/2 size-11 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:bg-primary transition-colors";

  return (
    <>
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label={`${title} screenshots`}
        tabIndex={0}
        onKeyDown={(e) => {
          if (count <= 1) return;
          if (e.key === "ArrowRight") {
            e.preventDefault();
            next();
          } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            prev();
          }
        }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        className="relative overflow-hidden rounded-xl border border-white/10 bg-black/40"
      >
        <p aria-live="polite" className="sr-only">
          Screenshot {current + 1} of {count}
        </p>

        {/* Slides */}
        <div className="aspect-[16/10] w-full relative overflow-hidden">
          {images.map(
            (src, idx) =>
              loaded.has(idx) && (
                <div
                  key={idx}
                  aria-hidden={idx !== current}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    idx === current ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={src}
                    alt={alt(idx)}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    priority={idx === 0}
                  />
                </div>
              ),
          )}
        </div>

        {/* Zoom */}
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          aria-label="View full size"
          className="absolute top-4 right-4 size-11 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-primary transition-colors"
        >
          <ZoomIn className="w-5 h-5" aria-hidden />
        </button>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous screenshot"
              className={`${arrowBtn} left-3`}
            >
              <ChevronLeft className="w-5 h-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next screenshot"
              className={`${arrowBtn} right-3`}
            >
              <ChevronRight className="w-5 h-5" aria-hidden />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goTo(idx)}
                  aria-label={`Go to screenshot ${idx + 1}`}
                  aria-current={idx === current}
                  className="size-6 flex items-center justify-center"
                >
                  <span
                    className={`h-2 rounded-full transition-all ${
                      idx === current ? "bg-primary w-5" : "bg-white/40 w-2"
                    }`}
                  />
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {count > 1 && (
        <div className="flex gap-3 mt-4 overflow-x-auto no-scrollbar">
          {images.map((src, idx) => (
            <button
              key={idx}
              type="button"
              ref={(el) => {
                thumbRefs.current[idx] = el;
              }}
              onClick={() => goTo(idx)}
              aria-label={`Go to screenshot ${idx + 1}`}
              aria-current={idx === current}
              className={`flex-none w-24 aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                idx === current
                  ? "border-primary"
                  : "border-white/10 opacity-50 hover:opacity-80"
              }`}
            >
              <Image
                src={src}
                alt=""
                width={96}
                height={54}
                sizes="96px"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <Modal
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        ariaLabel={`${title} screenshot viewer`}
        className="relative w-full max-w-5xl mx-4"
      >
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/60">
          <Image
            key={current}
            src={images[current]}
            alt={alt(current)}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-white/40 text-xs uppercase tracking-widest">
            {title} — {current + 1} / {count}
          </p>
          <a
            href={images[current]}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors"
          >
            Open original <ExternalLink className="size-3.5" aria-hidden />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setLightboxOpen(false)}
          aria-label="Close viewer"
          className="absolute -top-2 -right-2 md:-top-4 md:-right-4 size-11 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-primary transition-colors"
        >
          <X className="w-5 h-5" aria-hidden />
        </button>
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous screenshot"
              className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 size-11 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next screenshot"
              className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 size-11 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" aria-hidden />
            </button>
          </>
        )}
      </Modal>
    </>
  );
}
