"use client";
import React from "react";

export default function BrandStamp() {
  return (
    <div className="border-t border-white/5 bg-[#080808] px-6 md:px-20 py-8 md:py-12 flex flex-col md:flex-row items-center gap-8 overflow-hidden relative">
      {/* Ambient glow — pre-rendered gradient, cheap to paint */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_600px_200px_at_50%_50%,rgba(222,27,27,0.04),transparent_70%)] pointer-events-none"
      />

      {/* Center: Brand signature */}
      <div className="flex items-center gap-5 md:gap-8 flex-1 justify-center z-10">
        <div aria-hidden="true" className="flex items-center leading-none">
          <span className="text-[clamp(2rem,7vw,6rem)] font-extrabold tracking-[-0.04em] text-white">
            mayowamakinde
          </span>
          <span className="text-[clamp(2rem,7vw,6rem)] font-extrabold tracking-[-0.04em] text-white/10">
            .dev
          </span>
        </div>
      </div>
    </div>
  );
}
