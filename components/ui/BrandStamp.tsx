"use client";
import React from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

export default function BrandStamp() {
  return (
    <div className="border-t border-white/5 bg-[#080808] px-6 md:px-20 py-8 md:py-12 flex flex-col md:flex-row items-center gap-8 overflow-hidden relative">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-primary/[0.025] blur-[120px] rounded-full pointer-events-none"
      />

      {/* Center: Brand signature */}
      <div className="flex items-center gap-5 md:gap-8 flex-1 justify-center z-10">
        {/* <div className="size-14 md:size-20 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center shrink-0"> */}
          <Image
            src="/favicon.ico"
            alt="Mayowa"
            width={42}
            height={42}
            className="opacity-90 md:w-11 md:h-11"
          />
        {/* </div> */}
        <div className="flex items-baseline leading-none">
          <span className="text-[clamp(3rem,10vw,9rem)] font-extrabold tracking-[-0.04em] text-white">
            mayowa
          </span>
          <span className="text-[clamp(3rem,10vw,9rem)] font-extrabold tracking-[-0.04em] text-white/10">
            .dev
          </span>
        </div>
      </div>
    </div>
  );
}
