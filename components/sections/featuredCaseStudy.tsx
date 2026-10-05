"use client";
import { Project } from "@/lib/data";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import AnimateIn from "@/components/ui/AnimateIn";
import Button from "@/components/ui/Button";

const AUTOPLAY_MS = 6000;

const slideVariants: Variants = {
  enter: (dir: number) => ({ x: dir >= 0 ? 48 : -48, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir >= 0 ? -48 : 48, opacity: 0 }),
};

function SectionLabel() {
  return (
    <div className="flex items-center gap-4 mb-4">
      <span className="h-px w-8 bg-primary shrink-0" aria-hidden />
      <span className="text-primary-soft text-xs font-bold uppercase tracking-[0.25em]">
        Featured Project
      </span>
    </div>
  );
}

export default function FeaturedCaseStudy({
  projects,
}: {
  projects?: Project[];
}) {
  const count = projects?.length ?? 0;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (next: number, dir: number) => {
      if (count < 2) return;
      setDirection(dir);
      setIndex(((next % count) + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (count < 2 || paused) return;
    const id = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % count);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [count, paused, index]);

  const featured = count > 0 ? projects![index % count] : undefined;

  return (
    <section className="py-24 border-t border-white/5 relative">
      <AnimateIn direction="up" delay={0}>
        {!featured ? (
          /* Fallback when the projects query fails or is empty */
          <div className="p-8 md:p-12 bg-surface border border-white/5 rounded-xl flex flex-col items-center text-center gap-6">
            <h2 className="text-white text-2xl md:text-3xl font-extrabold tracking-tight">
              Explore my projects
            </h2>
            <Button href="/projects" variant="secondary" size="md">
              View All Projects
            </Button>
          </div>
        ) : (
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Featured projects"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            className="p-4 md:p-8 bg-surface border border-white/5 rounded-xl relative overflow-hidden"
          >
            {/* Background accent — pre-rendered gradient, cheap to paint */}
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(ellipse_300px_200px_at_100%_0%,rgba(222,27,27,0.07),transparent_70%)] pointer-events-none"
            />
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={featured.slug ?? index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="flex flex-col md:flex-row items-center gap-8 relative z-10"
              >
                <div className="flex-1">
                  <SectionLabel />
                  <h2 className="text-white text-3xl font-extrabold leading-tight tracking-tight mb-4">
                    {featured.title}
                  </h2>
                  <p className="text-white/65 text-base max-w-xl mb-8">
                    {featured.shortDescription}
                  </p>
                  <Button
                    href={`/projects/${featured.slug}`}
                    variant="primary"
                    size="md"
                  >
                    View Case Study
                  </Button>
                </div>
                <div className="relative w-full md:w-1/3 aspect-video rounded-lg overflow-hidden bg-black/50">
                  {featured.heroImage && (
                    <Image
                      src={featured.heroImage}
                      alt={`${featured.title} — project screenshot`}
                      fill
                      sizes="(min-width:768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {count > 1 && (
              <div className="relative z-10 mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {projects!.map((project, i) => (
                    <button
                      key={project.slug ?? i}
                      type="button"
                      aria-label={`Show project ${i + 1}: ${project.title}`}
                      aria-current={i === index}
                      onClick={() => goTo(i, i > index ? 1 : -1)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === index
                          ? "w-6 bg-primary"
                          : "w-1.5 bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Previous project"
                    onClick={() => goTo(index - 1, -1)}
                    className="p-2 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-primary/40 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next project"
                    onClick={() => goTo(index + 1, 1)}
                    className="p-2 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-primary/40 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </AnimateIn>
    </section>
  );
}
