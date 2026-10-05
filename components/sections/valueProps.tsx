//components/sections/valueProps.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionHeader from "@/components/ui/SectionHeader";

const values = [
  {
    number: "01",
    title: "I understand the problem",
    description:
      "Before I write code, I want to understand what we're actually trying to solve. I ask questions, challenge assumptions when necessary, and turn messy requirements into something we can build with confidence.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "I think beyond the interface",
    description:
      "Good software isn't just a polished screen. I think through the data, workflows, edge cases, architecture, and user experience that make the product work as a whole.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "I build and deliver",
    description:
      "Ideas are only valuable when they become usable products. I build with production in mind, communicate throughout the process, and stay focused on getting the thing shipped.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

const coreStacks = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Tailwind CSS",
  "MongoDB",
  "Supabase",
  "Firebase",
];

export default function ValueProps() {
  return (
    <section className="py-24 border-t border-white/5 relative overflow-hidden">
      {/* Background accent — pre-rendered gradient, cheap to paint */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_600px_300px_at_50%_0%,rgba(222,27,27,0.05),transparent_70%)] pointer-events-none"
      />

      {/* Section header */}
      <AnimateIn delay={0} className="mb-16">
        <SectionHeader eyebrow="How I Work" title="My approach" />
      </AnimateIn>

      {/* Value cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
        {values.map((value, index) => (
          <AnimateIn key={value.number} delay={0.1 + index * 0.15} direction="up">
            <div className="relative bg-surface border border-white/5 rounded-lg p-8 h-full transition-colors duration-500 hover:border-white/15">
              {/* Number badge */}
              <div className="relative flex items-start justify-between mb-6">
                <span className="text-5xl font-extrabold text-white/5 select-none">
                  {value.number}
                </span>
                <div className="w-10 h-10 rounded-md bg-white/5 border border-white/5 flex items-center justify-center text-white/40">
                  {value.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-white font-semibold text-lg mb-3">
                {value.title}
              </h3>
              <p className="text-white/65 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          </AnimateIn>
        ))}
      </div>

      {/* Tech stack section */}
      <AnimateIn delay={0.6} className="mt-20">
        <div className="relative">
          {/* Divider with label */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
            <span className="text-white/60 text-xs font-bold uppercase tracking-[0.25em]">
              Core Technologies
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </div>

          {/* Tech stack grid */}
          <div className="flex flex-wrap justify-center gap-3">
            {coreStacks.map((stack, id) => (
              <motion.span
                key={stack}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + id * 0.05, duration: 0.4 }}
                className="px-4 py-2 bg-surface border border-white/5 text-white/70 text-[11px] font-semibold uppercase tracking-wider rounded"
              >
                {stack}
              </motion.span>
            ))}
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
