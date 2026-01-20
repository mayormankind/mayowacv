import { ArrowRight, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ProjectsPage() {
  return (
    <>
      <div className="max-w-4xl mb-20 pt-12 md:pt-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-primary"></span>
          <span className="text-primary text-[10px] font-extrabold uppercase tracking-[0.4em]">
            Portfolio Overview
          </span>
        </div>
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-[-0.04em] mb-8 leading-[0.95]">
          Full-Stack <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white to-white/20">
            Product Engineering.
          </span>
        </h1>
        <p className="text-white/50 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
          I build scalable web applications from architectural design to
          deployment, focusing on high-performance SaaS platforms and
          data-driven dashboards.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        <div className="group project-card-hover border border-white/5 bg-surface/30 rounded-xl overflow-hidden flex flex-col h-full">
          <div className="aspect-16/10 w-full relative overflow-hidden bg-black">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDr7wVLRL0SptEqrwifrtO8CVhUo6qOcFQdEgfrogZAa8DduZ1WugLKo2bIUovOAzzweApOuqJ4nZF6IdPTLU-bTx5Qp6LIJD8hXgeV9xMT5DpaIJTVku0j96rhwMUrLlI1O9ZXz8XYERF1CGCsIUv6gYveposqlcf1ySuUirtWQpJufGHgBkPfaJgSt-ZjioqU7Ot2eOnhuOYmJt3qti1qKgWr2hNOmilv0xeJx0V6_ypQagoqhbctsCZvi4obJlEzPX9hW6eJMtP4')",
              }}
            ></div>
            <div className="absolute inset-0 bg-linear-to-t from-surface to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 text-[9px] font-bold uppercase tracking-widest rounded-full">
                  SaaS Solution
                </span>
                <span className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 text-[9px] font-bold uppercase tracking-widest rounded-full">
                  Full Stack
                </span>
              </div>
            </div>
          </div>
          <div className="p-8 flex flex-col flex-1">
            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
              Enterprise Resource Planner
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              A multi-tenant SaaS platform built to handle complex logistics
              workflows. Implemented real-time inventory tracking and automated
              billing cycles.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-primary"></span>{" "}
                Next.js
              </span>
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-primary"></span>{" "}
                TypeScript
              </span>
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-primary"></span>{" "}
                Supabase
              </span>
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-primary"></span>{" "}
                Tailwind
              </span>
            </div>
            <div className="mt-auto flex items-center gap-4">
              <button className="flex-1 bg-white text-black h-12 rounded-lg text-[10px] font-extrabold uppercase tracking-widest hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                Deep Dive{" "}
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">
                  <ArrowRight />
                </span>
              </button>
              <button
                title="Github"
                className="w-12 h-12 rounded-lg border border-white/10 flex items-center justify-center hover:border-primary transition-all group/git"
              >
                <svg
                  className="w-5 h-5 opacity-40 group-hover/git:opacity-100 transition-opacity"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="group project-card-hover border border-white/5 bg-surface/30 rounded-xl overflow-hidden flex flex-col h-full">
          <div className="aspect-16/10 w-full relative overflow-hidden bg-black">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDwVpHFNkFHTzWMywQ4SekWIP-S9O9B8MfvE9W_EQrjSDwLqlekeuxSYF26Rf9hDbLn8gryBq7TT4kVCDyekIOa57p3xbhoWTi3Hxc8W-QApUhPHROaVyu_3SV-7vQl40H1H1_EEgEUxz2vD2h78hrHHr_eZLXqDF0hVWKD7wI40M3zdM0_ISc85LEnfzLuuOft0ipEKzqW03mhY2_y43ZPJiWtXf-uMhp8INBeVnB5SWmZcPpM0aLi3jm5jhc6KIoBJEkdnNGk7uk_')",
              }}
            ></div>
            <div className="absolute inset-0 bg-linear-to-t from-surface to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 text-[9px] font-bold uppercase tracking-widest rounded-full">
                  Fintech
                </span>
                <span className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 text-[9px] font-bold uppercase tracking-widest rounded-full">
                  Analytics
                </span>
              </div>
            </div>
          </div>
          <div className="p-8 flex flex-col flex-1">
            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
              Merchant Insights Dashboard
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              A high-fidelity analytics suite for payment processing. Engineered
              custom data visualizations and optimized query performance for
              millions of records.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-primary"></span> React
              </span>
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-primary"></span>{" "}
                Node.js
              </span>
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-primary"></span>{" "}
                Firebase
              </span>
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-primary"></span>{" "}
                Tailwind
              </span>
            </div>
            <div className="mt-auto flex items-center gap-4">
              <button className="flex-1 bg-white text-black h-12 rounded-lg text-[10px] font-extrabold uppercase tracking-widest hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                Deep Dive{" "}
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">
                  <ArrowRight />
                </span>
              </button>
              <button
                title="Github"
                className="w-12 h-12 rounded-lg border border-white/10 flex items-center justify-center hover:border-primary transition-all group/git"
              >
                <svg
                  className="w-5 h-5 opacity-40 group-hover/git:opacity-100 transition-opacity"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="group project-card-hover border border-white/5 bg-surface/30 rounded-xl overflow-hidden flex flex-col h-full">
          <div className="aspect-16/10 w-full relative overflow-hidden bg-black">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDwVpHFNkFHTzWMywQ4SekWIP-S9O9B8MfvE9W_EQrjSDwLqlekeuxSYF26Rf9hDbLn8gryBq7TT4kVCDyekIOa57p3xbhoWTi3Hxc8W-QApUhPHROaVyu_3SV-7vQl40H1H1_EEgEUxz2vD2h78hrHHr_eZLXqDF0hVWKD7wI40M3zdM0_ISc85LEnfzLuuOft0ipEKzqW03mhY2_y43ZPJiWtXf-uMhp8INBeVnB5SWmZcPpM0aLi3jm5jhc6KIoBJEkdnNGk7uk_')",
                filter: "grayscale(1) contrast(1.2)",
              }}
            ></div>
            <div className="absolute inset-0 bg-linear-to-t from-surface to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 text-[9px] font-bold uppercase tracking-widest rounded-full">
                  E-Commerce
                </span>
                <span className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 text-[9px] font-bold uppercase tracking-widest rounded-full">
                  High-Scale
                </span>
              </div>
            </div>
          </div>
          <div className="p-8 flex flex-col flex-1">
            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
              Direct-to-Consumer Engine
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Custom-built storefront for a luxury brand. Integrated server-side
              rendering for SEO and a decoupled CMS to manage dynamic product
              catalogs.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-primary"></span>{" "}
                Next.js
              </span>
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-primary"></span>{" "}
                TypeScript
              </span>
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-primary"></span>{" "}
                Node.js
              </span>
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-primary"></span>{" "}
                Supabase
              </span>
            </div>
            <div className="mt-auto flex items-center gap-4">
              <button className="flex-1 bg-white text-black h-12 rounded-lg text-[10px] font-extrabold uppercase tracking-widest hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                Deep Dive{" "}
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">
                  <ArrowRight />
                </span>
              </button>
              <button
                title="Github"
                className="w-12 h-12 rounded-lg border border-white/10 flex items-center justify-center hover:border-primary transition-all group/git"
              >
                <svg
                  className="w-5 h-5 opacity-40 group-hover/git:opacity-100 transition-opacity"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="group border border-dashed border-white/10 bg-white/2 rounded-xl overflow-hidden flex flex-col items-center justify-center p-12 text-center">
          <div className="size-16 rounded-full border border-white/10 flex items-center justify-center mb-6 group-hover:border-primary group-hover:bg-primary/5 transition-all">
            <span className="material-symbols-outlined text-white/20 group-hover:text-primary transition-colors">
              <Plus />
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2">Build Your Vision</h3>
          <p className="text-white/40 text-sm max-w-60 mb-8">
            Looking for a senior engineer to architect your next
            high-performance web product?
          </p>
          <button className="px-8 h-12 rounded-lg bg-surface border border-white/10 text-white text-[10px] font-extrabold uppercase tracking-widest hover:border-primary hover:text-primary transition-all">
            Let's Connect
          </button>
        </div>
      </div>
      <div className="mt-40 pt-20 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-4 tracking-tight">
            Ready to ship?
          </h2>
          <p className="text-white/40 text-sm uppercase tracking-[0.2em]">
            Now accepting full-stack opportunities for 2024
          </p>
        </div>
        <div className="flex gap-4">
          <button className="h-14 px-10 bg-primary text-white text-xs font-extrabold uppercase tracking-[0.2em] rounded-lg shadow-[0_0_30px_rgba(222,27,27,0.3)] hover:brightness-125 transition-all">
            <Link href="/contact">
              Initiate Project
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
