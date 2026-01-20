import { Project } from "@/lib/data";
import Link from "next/link";
import React from "react";

export default function FeaturedCaseStudy({ project }: { project: Project }) {
  return (
    <div className="p-4 md:p-8 bg-surface border border-white/5 rounded-xl mb-32 group relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full"></div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div className="flex-1">
          <h2 className="text-white text-3xl font-extrabold leading-tight tracking-tight mb-4">
            {project.title}
          </h2>
          <p className="text-white/60 text-base max-w-xl">
            {project.shortDescription}
          </p>
        </div>
        <div
          className="w-full md:w-1/3 aspect-video bg-black/50 rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url('${project.heroImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <Link href={`/projects/${project.slug}`}>
          <button className="flex min-w-35 items-center justify-center rounded h-12 px-6 bg-primary text-white text-xs font-extrabold uppercase tracking-widest hover:scale-105 transition-transform">
            View Case Study
          </button>
        </Link>
      </div>
    </div>
  );
}
