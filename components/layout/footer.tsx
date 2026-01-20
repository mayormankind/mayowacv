import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="px-6 md:px-20 py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-6">
        <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em]">
          Based in Lagos, NG
        </p>
        <div className="w-1 h-1 rounded-full bg-white/20"></div>
        <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Mayowa
        </p>
      </div>
      <div className="flex gap-8">
        <Link
          className="text-white/30 hover:text-primary transition-colors uppercase text-[10px] font-bold tracking-widest"
          href="https://twitter.com/mayormankind"
        >
          Twitter
        </Link>
        <Link
          className="text-white/30 hover:text-primary transition-colors uppercase text-[10px] font-bold tracking-widest"
          href="https://linkedin.com/in/mayormankind"
        >
          LinkedIn
        </Link>
        <Link
          className="text-white/30 hover:text-primary transition-colors uppercase text-[10px] font-bold tracking-widest"
          href="https://github.com/mayormankind"
        >
          GitHub
        </Link>
      </div>
    </footer>
  );
}
