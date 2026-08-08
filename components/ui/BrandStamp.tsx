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
          {/* <Image
            src="/images/logo.png"
            alt="Mayowa"
            width={512}
            height={512}
            className="h-[clamp(2rem,10vw,8rem)] w-auto"
          /> */}
        <div className="flex items-center leading-none">
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
