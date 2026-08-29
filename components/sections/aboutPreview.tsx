"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-24 border-t border-white/5 relative overflow-hidden">
      {/* Background accent */}
      <div
        aria-hidden
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/[0.03] blur-[120px] rounded-full pointer-events-none"
      />

      <div className="max-w-4xl mx-auto px-6 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative bg-surface border border-white/5 rounded-xl p-10 md:p-16"
        >
          {/* Subtle top accent line */}
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="w-8 h-px bg-primary" />
            <span className="text-primary text-[10px] font-extrabold uppercase tracking-[0.4em]">
              About
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-white text-3xl md:text-5xl font-extrabold tracking-tight mb-6"
          >
            The developer behind the work.
          </motion.h2>

          {/* Bio text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-3xl"
          >
            I&apos;m Mayowa, a full-stack developer who enjoys turning ideas, complex
            requirements, and real-world problems into software people can actually use.
            I care about understanding the problem before reaching for a solution,
            communicating clearly throughout the process, and delivering products that
            are thoughtful, reliable, and built to last.
          </motion.p>

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 h-12 px-6 bg-transparent border border-white/15 text-white text-sm font-bold uppercase tracking-widest hover:border-primary/50 hover:text-primary transition-all duration-300 rounded"
            >
              More About Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
