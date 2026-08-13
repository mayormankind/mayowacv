//components/sections/hero.tsx
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
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

export default function Hero({ latestProject: _latestProject }: HeroProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-8 pt-16 md:pt-20 pb-20">
      {/* Ready to Ship badge */}
      {/* <motion.div
        {...fadeUp(0.1)}
        className="flex justify-start md:justify-end mb-4 md:mb-0"
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
      </motion.div> */}

      {/* Left text column */}
      <div className="order-2 md:order-1 flex-1 flex flex-col justify-center gap-8">
        <div className="flex flex-col gap-4">
          <motion.h1
            {...fadeUp(0.2)}
            className="text-white text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-[-0.04em]"
          >
            <span className="block text-primary text-2xl md:text-3xl font-extrabold tracking-widest uppercase mb-3">
              Mayowa Makinde
            </span>
            Building <span className="text-primary">SaaS Products</span> That
            Scale From MVP to Market.
          </motion.h1>
          <motion.p
            {...fadeUp(0.35)}
            className="text-white/50 text-lg md:text-xl font-normal leading-relaxed max-w-xl mt-4"
          >
            I help founders and product teams launch polished web applications
            that drive real revenue and user growth. SaaS and e-commerce are
            my main focus.
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
            href="/services"
            className="flex min-w-45 cursor-pointer items-center justify-center rounded h-14 px-8 bg-surface border border-white/5 text-white text-sm font-extrabold uppercase tracking-widest hover:border-white/20 transition-all"
          >
            View Services
          </Link>
        </motion.div>
      </div>

      {/* Profile image */}
      <motion.div
        {...fadeUp(0.3)}
        className="order-1 md:order-2 w-full md:w-[320px] lg:w-[480px] shrink-0"
      >
        <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl">
          <Image
            src="/images/profile.png"
            alt="Mayowa Makinde — Full-Stack Product Engineer based in Nigeria"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-background-dark/60 via-transparent to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}