// import { getAllProjects } from "@/lib/data";
import Link from "next/link";
import { Metadata } from "next";
import ProjectCard from "@/components/sections/project/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of technical case studies and full-stack applications.",
};

export default function ProjectsPage() {
  // const projects = getAllProjects();

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
      <ProjectCard />
      <div className="mt-30 py-20 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-4 tracking-tight">
            Ready to ship?
          </h2>
          <p className="text-white/40 text-sm uppercase tracking-[0.2em]">
            Now accepting full-stack opportunities for 2024
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/contact">
            <button className="h-14 px-10 bg-primary text-white text-xs font-extrabold uppercase tracking-[0.2em] rounded-lg shadow-[0_0_30px_rgba(222,27,27,0.3)] hover:brightness-125 transition-all">
              Initiate Project
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
