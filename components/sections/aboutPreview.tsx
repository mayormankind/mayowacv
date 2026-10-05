"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";

export default function AboutPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-24 border-t border-white/5 relative overflow-hidden">
      {/* Background accent — pre-rendered gradient, cheap to paint */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_500px_300px_at_100%_100%,rgba(222,27,27,0.05),transparent_70%)] pointer-events-none"
      />

      <div className="max-w-4xl mx-auto md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative bg-surface border border-white/5 rounded-xl p-8 md:p-16"
        >
          {/* Subtle top accent line */}
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <SectionHeader
              eyebrow="About"
              title="The developer behind the work."
            />
          </motion.div>

          {/* Bio text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-white/65 text-base md:text-lg leading-relaxed mb-10 mt-6 max-w-3xl"
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
            <Button
              href="/about"
              variant="secondary"
              size="md"
              className="group"
            >
              More About Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
