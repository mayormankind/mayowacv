"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-24 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="relative bg-surface border border-white/5 p-12 md:p-24 overflow-hidden flex flex-col items-center text-center"
      >
        {/* Subtle red ambient glow */}
        <div
          aria-hidden
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/[0.04] blur-[120px] rounded-full pointer-events-none"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="w-8 h-px bg-primary shrink-0" />
          <span className="text-primary text-[10px] font-extrabold uppercase tracking-[0.4em]">
            Ready to Build
          </span>
          <span className="w-8 h-px bg-primary shrink-0" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="relative z-10 text-white text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6"
        >
          Have a product that needs{" "}
          <span className="text-primary italic">expert execution?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="relative z-10 text-white/50 text-lg max-w-xl leading-relaxed mb-10"
        >
          Validating an MVP, modernizing a platform, or building something
          entirely new? Let&apos;s talk.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="relative z-10 flex flex-wrap justify-center gap-5"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 min-w-52 justify-center
                       h-14 px-8 bg-primary text-white text-sm font-extrabold
                       uppercase tracking-widest cta-glow hover:brightness-110 transition-all rounded"
          >
            Start a Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center min-w-44
                       h-14 px-8 bg-transparent border border-white/15 text-white
                       text-sm font-extrabold uppercase tracking-widest
                       hover:border-white/40 transition-all rounded"
          >
            View Case Studies
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
