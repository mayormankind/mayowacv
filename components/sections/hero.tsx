import { ArrowRightIcon } from "lucide-react";
import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-16 md:pt-20 pb-20">
      <div className="md:col-span-12 flex justify-start md:justify-end mb-4 md:mb-0">
        <div className="flex h-8 items-center justify-center gap-x-2 rounded bg-white px-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <p className="text-black text-[10px] font-extrabold tracking-[0.2em] uppercase">
            Ready to Ship
          </p>
        </div>
      </div>
      <div className="md:col-span-7 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-[-0.04em]">
            Engineering{" "}
            <span className="text-underline-accent">Digital Products</span> from
            Concept to Production.
          </h1>
          <p className="text-white/50 text-lg md:text-xl font-normal leading-relaxed max-w-xl mt-4">
            Delivering end-to-end full-stack solutions with Next.js and React.
            Senior Software Engineer focused on turning complex business
            requirements into polished, high-performing products.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 mt-4">
          <button className="flex min-w-50 cursor-pointer items-center justify-center rounded h-14 px-8 bg-primary text-white text-sm font-extrabold uppercase tracking-widest cta-glow hover:brightness-110 transition-all">
            <Link href={"/contact"} className="w-full">
              Start a Project
            </Link>
          </button>
          <button className="flex min-w-45 cursor-pointer items-center justify-center rounded h-14 px-8 bg-surface border border-white/5 text-white text-sm font-extrabold uppercase tracking-widest hover:border-white/20 transition-all">
            <Link href={"/projects"} className="w-full">
              View Portfolio
            </Link>
          </button>
        </div>
      </div>
      <div className="md:col-span-4 md:col-start-9 flex flex-col justify-end">
        <div className="border-t border-white/10 pt-8 mt-12 md:mt-0">
          <h2 className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] mb-6">
            01 — Latest Product
          </h2>
          <div className="group cursor-pointer">
            <div className="w-full bg-surface aspect-square rounded overflow-hidden mb-4 relative">
              <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDr7wVLRL0SptEqrwifrtO8CVhUo6qOcFQdEgfrogZAa8DduZ1WugLKo2bIUovOAzzweApOuqJ4nZF6IdPTLU-bTx5Qp6LIJD8hXgeV9xMT5DpaIJTVku0j96rhwMUrLlI1O9ZXz8XYERF1CGCsIUv6gYveposqlcf1ySuUirtWQpJufGHgBkPfaJgSt-ZjioqU7Ot2eOnhuOYmJt3qti1qKgWr2hNOmilv0xeJx0V6_ypQagoqhbctsCZvi4obJlEzPX9hW6eJMtP4")',
                }}
              ></div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-white text-xl font-bold tracking-tight">
                  SaaS Command Center
                </p>
                <p className="text-white/40 text-sm mt-1">
                  Full-stack React &amp; Supabase Platform
                </p>
              </div>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                <ArrowRightIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
