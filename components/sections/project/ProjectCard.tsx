"use client";

import { ArrowRight, ExternalLink, Plus } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AnimateIn from "@/components/ui/AnimateIn";

import { Project } from "@/lib/data";

export default function ProjectCard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();

        if (data.error) {
          setError(data.error);
          setProjects([]);
        } else if (Array.isArray(data)) {
          setProjects(data);
        } else {
          setProjects([]);
        }
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setError("Failed to load projects");
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-pulse">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="h-72 bg-white/5 rounded-xl border border-white/5"
          ></div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 border border-red-500/20 bg-red-500/5 rounded-xl text-center text-red-500">
        <p>Error: {error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 text-xs font-bold uppercase tracking-widest underline"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.length === 0 && (
        <div className="col-span-full py-20 text-center border border-dashed border-white/10 rounded-xl bg-white/2">
          <p className="text-white/40 mb-4">No published projects found.</p>
        </div>
      )}
      {projects.map((project, i) => (
        <AnimateIn key={project.slug} delay={i * 0.08} direction="up">
          <div className="group border border-white/5 bg-surface/30 rounded-xl overflow-hidden flex flex-col h-full hover:border-white/10 transition-colors duration-300">
            {/* Logo on white or hero image fallback */}
            {project.logoImage ? (
              <div className="w-full aspect-video bg-white flex items-center justify-center p-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.logoImage}
                  alt={`${project.title} logo`}
                  className="max-h-14 max-w-full object-contain"
                />
              </div>
            ) : (
              <div className="aspect-video w-full relative overflow-hidden bg-black">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url('${project.heroImage}')` }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-surface to-transparent" />
              </div>
            )}

            <div className="p-5 flex flex-col flex-1">
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tags.slice(0, 2).map((tag, idx: number) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 bg-white/5 border border-white/10 text-[8px] font-bold uppercase tracking-widest rounded-full text-white/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-base font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                {project.title}
              </h3>
              <p className="text-white/50 text-xs leading-relaxed mb-4 line-clamp-2">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.slice(0, 3).map((tech, idx: number) => (
                  <span
                    key={idx}
                    className="text-[9px] font-bold text-white/30 uppercase tracking-widest flex items-center gap-1"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-2">
                <Link
                  href={`/projects/${project.slug}`}
                  className="flex-1 bg-white text-black h-9 rounded-lg text-[9px] font-extrabold uppercase tracking-widest hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-1.5 group/btn"
                >
                  Deep Dive
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
                {project.links.live && project.links.live !== "#" && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View live project"
                    className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all group/live text-white/40"
                  >
                    <ExternalLink className="w-3.5 h-3.5 group-hover/live:opacity-100 transition-opacity" />
                  </a>
                )}
                {project.links.repo && project.links.repo !== "#" && (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View on GitHub"
                    className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center hover:border-primary transition-all group/git"
                  >
                    <svg
                      className="w-4 h-4 opacity-40 group-hover/git:opacity-100 transition-opacity"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </AnimateIn>
      ))}

      {/* CTA card */}
      <AnimateIn delay={0.15} direction="up">
        <div className="group border border-dashed border-white/10 bg-white/2 rounded-xl overflow-hidden flex flex-col items-center justify-center p-10 text-center h-full min-h-64">
          <div className="size-12 rounded-full border border-white/10 flex items-center justify-center mb-4 group-hover:border-primary group-hover:bg-primary/5 transition-all">
            <span className="text-white/20 group-hover:text-primary transition-colors">
              <Plus className="w-5 h-5" />
            </span>
          </div>
          <h3 className="text-base font-bold mb-2">Build Your Vision</h3>
          <p className="text-white/40 text-xs max-w-48 mb-6">
            Looking for a senior engineer for your next high-performance web product?
          </p>
          <Link
            href="/contact"
            className="px-6 h-9 rounded-lg bg-surface border border-white/10 text-white text-[9px] font-extrabold uppercase tracking-widest hover:border-primary hover:text-primary transition-all flex items-center"
          >
            Let&apos;s Connect
          </Link>
        </div>
      </AnimateIn>
    </div>
  );
}
