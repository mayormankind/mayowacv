//components/sections/hero.tsx
"use client";
import { ArrowRightIcon } from "lucide-react";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/lib/data";

interface HeroProps {
  latestProject?: Project;
}

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function Hero({ latestProject }: HeroProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-16 md:pt-20 pb-20">
      <motion.div
        {...fadeUp(0.1)}
        className="md:col-span-12 flex justify-start md:justify-end mb-4 md:mb-0"
      >
        <div className="flex h-8 items-center justify-center gap-x-2 rounded bg-white px-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <p className="text-black text-[10px] font-extrabold tracking-[0.2em] uppercase">
            Ready to Ship
          </p>
        </div>
      </motion.div>

      <div className="md:col-span-7 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <motion.h1
            {...fadeUp(0.2)}
            className="text-white text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-[-0.04em]"
          >
            Engineering{" "}
            <span className="text-underline-accent">Digital Products</span> from
            Idea to Production.
          </motion.h1>
          <motion.p
            {...fadeUp(0.35)}
            className="text-white/50 text-lg md:text-xl font-normal leading-relaxed max-w-xl mt-4"
          >
            Delivering end-to-end full-stack solutions with Next.js and React.
            Senior Software Engineer focused on turning complex business
            requirements into polished, high-performing products.
          </motion.p>
        </div>
        <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4 mt-4">
          <Link
            href="/contact"
            className="flex min-w-50 cursor-pointer items-center justify-center rounded h-14 px-8 bg-primary text-white text-sm font-extrabold uppercase tracking-widest cta-glow hover:brightness-110 transition-all"
          >
            Start a Project
          </Link>
          <Link
            href="/projects"
            className="flex min-w-45 cursor-pointer items-center justify-center rounded h-14 px-8 bg-surface border border-white/5 text-white text-sm font-extrabold uppercase tracking-widest hover:border-white/20 transition-all"
          >
            View Portfolio
          </Link>
        </motion.div>
      </div>

      <motion.div
        {...fadeUp(0.4)}
        className="md:col-span-4 md:col-start-9 flex flex-col justify-end"
      >
        <div className="border-t border-white/10 pt-8 mt-12 md:mt-0">
          <h2 className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] mb-6">
            01 — Latest Product
          </h2>
          {latestProject ? (
            <Link href={`/projects/${latestProject.slug}`} className="group cursor-pointer block">
              <div className="w-full bg-surface aspect-square rounded overflow-hidden mb-4 relative">
                <div
                  className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${latestProject.heroImage}')` }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-white text-xl font-bold tracking-tight">
                    {latestProject.title}
                  </p>
                  <p className="text-white/40 text-sm mt-1">
                    {latestProject.subtitle}
                  </p>
                </div>
                <span className="text-primary group-hover:translate-x-1 transition-transform">
                  <ArrowRightIcon />
                </span>
              </div>
            </Link>
          ) : (
            <div className="group cursor-pointer">
              <div className="w-full bg-surface aspect-square rounded overflow-hidden mb-4 relative animate-pulse" />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
