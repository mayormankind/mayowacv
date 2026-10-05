//components/sections/hero.tsx
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-8 pt-16 md:pt-20 pb-20">
      {/* Left text column */}
      <div className="order-2 md:order-1 flex-1 flex flex-col justify-center gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-[-0.03em] text-balance">
            Give me the <span className="text-primary">Problem</span>. I&rsquo;ll
            figure out the <span className="text-primary">Product</span>.
          </h1>
          <motion.p
            {...fadeUp(0.2)}
            className="text-white/65 text-lg md:text-xl font-normal leading-relaxed max-w-xl mt-4"
          >
            I&rsquo;m Mayowa, a full-stack developer who turns ideas, messy requirements, and real-world problems into software people can actually use. I listen first, think through the problem, then build and deliver.
          </motion.p>
        </div>
        <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4 mt-4">
          <Button href="/projects" variant="secondary" size="lg" className="min-w-45">
            View My Work
          </Button>
          <Button href="/contact" variant="primary" size="lg" className="min-w-50">
            Start a Project
          </Button>
        </motion.div>
      </div>

      {/* Profile image */}
      <div className="order-1 md:order-2 w-full md:w-[320px] lg:w-[480px] shrink-0">
        <div className="relative w-full aspect-[4/3] md:aspect-[3/4] overflow-hidden rounded-xl">
          <Image
            src="/images/profile.png"
            alt="Mayowa Makinde — Full-Stack Product Engineer based in Nigeria"
            fill
            sizes="(min-width:1024px) 480px, (min-width:768px) 320px, 100vw"
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-background-dark/60 via-transparent to-transparent" />
        </div>
      </div>
    </div>
  );
}
