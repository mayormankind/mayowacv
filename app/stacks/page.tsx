import {
  ArrowRight,
  MonitorSmartphone,
  Database,
  Cloud,
  HardDrive,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function StacksPage() {
  const dbStacks = [
    { label: "Supabase", icon: Cloud },
    { label: "Firebase", icon: Cloud },
    { label: "MongoDB", icon: Database },
    { label: "PostgreSQL", icon: Database },
    { label: "SQL", icon: HardDrive },
  ];

  return (
    <div className="py-20">
      <div className="max-w-4xl mb-24">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-8 h-px bg-primary"></span>
          <p className="text-primary text-[10px] font-extrabold uppercase tracking-[0.4em]">
            Expertise &amp; Stack
          </p>
        </div>
        <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter mb-8">
          Modern Full-Stack{" "}
          <span className="text-underline-accent">Capabilities.</span>
        </h1>
        <p className="text-white/50 text-xl font-normal leading-relaxed max-w-2xl">
          Specialized in high-performance web applications using the industry's
          most robust primitives. Focused on speed, security, and exceptional
          user experiences.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-32">
        <div className="md:col-span-8 skill-card group relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 transition-opacity group-hover:opacity-10">
            <MonitorSmartphone className="w-32 h-32" />
          </div>
          <div className="relative z-10">
            <h3 className="text-primary text-[10px] font-extrabold uppercase tracking-[0.3em] mb-8">
              01 — Frontend
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-white text-3xl font-bold mb-4 tracking-tight">
                  User Interfaces
                </h4>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  Crafting responsive, accessible, and high-conversion frontends
                  using modern React ecosystems.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white/5 border border-white/10 rounded text-xs font-bold uppercase tracking-widest text-primary">
                    React
                  </span>
                  <span className="px-4 py-2 bg-white/5 border border-white/10 rounded text-xs font-bold uppercase tracking-widest">
                    Next.js
                  </span>
                  <span className="px-4 py-2 bg-white/5 border border-white/10 rounded text-xs font-bold uppercase tracking-widest">
                    Tailwind
                  </span>
                  <span className="px-4 py-2 bg-white/5 border border-white/10 rounded text-xs font-bold uppercase tracking-widest">
                    TypeScript
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-extrabold uppercase tracking-widest">
                    <span className="text-white/40">Server-Side Rendering</span>
                    <span className="text-primary">98%</span>
                  </div>
                  <div className="h-px w-full bg-white/10">
                    <div className="h-full bg-primary w-[98%]"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-extrabold uppercase tracking-widest">
                    <span className="text-white/40">
                      Component Architecture
                    </span>
                    <span className="text-primary">95%</span>
                  </div>
                  <div className="h-px w-full bg-white/10">
                    <div className="h-full bg-primary w-[95%]"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-extrabold uppercase tracking-widest">
                    <span className="text-white/40">Responsive Design</span>
                    <span className="text-primary">96%</span>
                  </div>
                  <div className="h-px w-full bg-white/10">
                    <div className="h-full bg-primary w-[96%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 skill-card border-l-primary/40">
          <h3 className="text-primary text-[10px] font-extrabold uppercase tracking-[0.3em] mb-8">
            02 — Backend
          </h3>
          <h4 className="text-white text-2xl font-bold mb-4">
            Server &amp; Logic
          </h4>
          <p className="text-white/40 text-sm leading-relaxed mb-8">
            Building robust server-side logic and scalable serverless functions
            for modern web needs.
          </p>
          <div className="space-y-4">
            {["Node.js", "Express", "Firebase Functions", "REST"].map(
              (stack) => (
                <div key={stack} className="flex items-center gap-4 group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary glow-dot"></span>
                  <span className="text-white font-bold text-sm uppercase tracking-widest">
                    {stack}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
        <div className="md:col-span-4 skill-card">
          <h3 className="text-primary text-[10px] font-extrabold uppercase tracking-[0.3em] mb-8">
            03 — Data Layer
          </h3>
          <h4 className="text-white text-2xl font-bold mb-4">
            Database &amp; Auth
          </h4>
          <p className="text-white/40 text-sm leading-relaxed mb-6">
            Ensuring data integrity and secure user management with
            best-in-class cloud solutions.
          </p>
          <div className="flex flex-col gap-3">
            {dbStacks.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="p-4 bg-white/2 border border-white/5 flex items-center justify-between rounded"
              >
                <span className="text-xs font-bold uppercase tracking-widest">
                  {label}
                </span>
                <Icon className="text-primary w-4 h-4" />
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-8 bg-primary/5 border border-primary/20 p-8 rounded relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
            <div className="max-w-md">
              <h3 className="text-primary text-[10px] font-extrabold uppercase tracking-[0.3em] mb-4">
                Currently Exploring
              </h3>
              <h4 className="text-white text-3xl font-extrabold mb-4">
                Learning Path
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Deepening expertise in AI-driven interfaces and advanced edge
                computing to further optimize product performance and user
                engagement.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full border-2 border-primary/20 flex items-center justify-center bg-background-dark group hover:border-primary transition-colors cursor-help">
                  <span className="text-white font-bold">Ai</span>
                </div>
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest text-center">
                  AI UI
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full border-2 border-primary/20 flex items-center justify-center bg-background-dark group hover:border-primary transition-colors cursor-help">
                  <span className="text-white font-bold">Ed</span>
                </div>
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest text-center">
                  Edge
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full border-2 border-primary/20 flex items-center justify-center bg-background-dark group hover:border-primary transition-colors cursor-help">
                  <span className="text-white font-bold">V7</span>
                </div>
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest text-center">
                  Next V15+
                </span>
              </div>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/10 blur-[80px] rounded-full"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-20 border-t border-white/5">
        <div className="flex flex-col gap-4">
          <p className="text-primary text-[10px] font-extrabold uppercase tracking-[0.3em]">
            Product Philosophy
          </p>
          <p className="text-white/60 text-sm leading-relaxed italic">
            "Great products are built at the intersection of performance and
            simplicity. I focus on creating seamless experiences that hide
            complexity from the user."
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-primary text-[10px] font-extrabold uppercase tracking-[0.3em]">
            Development Workflow
          </p>
          <ul className="text-white/60 text-sm space-y-2">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 bg-primary"></span> Rapid Prototyping
              (MVP focus)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 bg-primary"></span> Automated CI/CD
              Pipelines
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 bg-primary"></span> User-Centric
              Performance Tuning
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-primary text-[10px] font-extrabold uppercase tracking-[0.3em]">
            Let's Build
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            Ready to launch your next full-stack venture? Let's discuss how we
            can leverage these tools to build something exceptional.
          </p>
          <Link
            className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 group"
            href="/contact"
          >
            Start Project
            <ArrowRight className="text-sm text-primary transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
