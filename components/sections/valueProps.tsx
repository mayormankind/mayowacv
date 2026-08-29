//components/sections/valueProps.tsx
"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const directionMap = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { y: 0, x: 40 },
  right: { y: 0, x: -40 },
  none: { y: 0, x: 0 },
};

function AnimateIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.65,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const offset = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, ...offset }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

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
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[120px] pointer-events-none" />

      {/* Section header */}
      <AnimateIn delay={0} className="mb-16">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-12 bg-primary/50" />
          <span className="text-primary text-[10px] font-extrabold uppercase tracking-[0.3em]">
            How I Work
          </span>
        </div>
        <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
          My approach
        </h2>
      </AnimateIn>

      {/* Value cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
        {/* Connecting line */}
        <div className="hidden lg:block absolute top-12 left-[16.5%] right-[16.5%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {values.map((value, index) => (
          <AnimateIn key={value.number} delay={0.1 + index * 0.15} direction="up">
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="group relative bg-surface/50 backdrop-blur-sm border border-white/5 rounded-lg p-8 h-full transition-all duration-500 hover:border-primary/30 hover:bg-surface/80"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-primary/5 to-transparent" />
              </div>

              {/* Number badge */}
              <div className="relative flex items-start justify-between mb-6">
                <motion.span
                  className="text-5xl font-black text-white/5 group-hover:text-primary/10 transition-colors duration-500 select-none"
                >
                  {value.number}
                </motion.span>
                <div className="w-10 h-10 rounded-md bg-white/5 border border-white/5 flex items-center justify-center text-white/40 group-hover:text-primary group-hover:border-primary/20 transition-all duration-500">
                  {value.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                {value.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/30 transition-all duration-500" />
            </motion.div>
          </AnimateIn>
        ))}
      </div>

      {/* Tech stack section */}
      <AnimateIn delay={0.6} className="mt-20">
        <div className="relative">
          {/* Divider with label */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
            <span className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em]">
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
                whileHover={{ scale: 1.05, borderColor: "rgba(222, 27, 27, 0.4)" }}
                className="px-4 py-2 bg-surface/60 border border-white/5 text-white/40 text-[11px] font-semibold uppercase tracking-wider rounded cursor-default transition-colors duration-300 hover:text-white/70"
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
