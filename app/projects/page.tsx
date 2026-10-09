import Link from "next/link";
import { Metadata } from "next";
import ProjectCard from "@/components/sections/project/ProjectCard";
import {
  BASE_URL,
  OG_IMAGE,
  buildBreadcrumbSchema,
  buildItemListSchema,
} from "@/lib/seo";
import AnimateIn from "@/components/ui/AnimateIn";
import JsonLd from "@/components/ui/JsonLd";
import { supabase } from "@/lib/supabase/server";
import { keysToCamel } from "@/lib/utils/case-transform";
import type { Project } from "@/lib/data";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Projects | Full-Stack Portfolio",
  description:
    "Portfolio of full-stack projects by Mayowa Makinde — SaaS platforms, ERP systems, and e-commerce engines built with Next.js, React, and TypeScript.",
  alternates: {
    canonical: `${BASE_URL}/projects`,
  },
  openGraph: {
    title: "Projects | Mayowa Makinde — Full-Stack Portfolio",
    description:
      "Full-stack projects portfolio — SaaS platforms, ERP systems, and e-commerce engines built with Next.js, React, and TypeScript.",
    url: `${BASE_URL}/projects`,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Mayowa Makinde Projects Portfolio",
      },
    ],
  },
  twitter: {
    title: "Projects | Mayowa Makinde",
    description:
      "Full-stack projects portfolio — SaaS platforms, ERP systems, and e-commerce engines.",
    images: [OG_IMAGE],
  },
};

export default async function ProjectsPage() {
  const { data: dbProjects } = await supabase
    .from("projects")
    .select("slug, title, short_description, hero_image, logo_image, tags, tech_stack, links")
    .eq("status", "published")
    .order("created_at", { ascending: false });

  const projects: Project[] = dbProjects
    ? (keysToCamel(dbProjects) as Project[])
    : [];

  return (
    <>
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Home", url: BASE_URL },
          { name: "Projects", url: `${BASE_URL}/projects` },
        ])}
      />
      {projects.length > 0 && (
        <JsonLd
          schema={buildItemListSchema(
            projects.map((p) => ({
              name: p.title,
              url: `${BASE_URL}/projects/${p.slug}`,
              description: p.shortDescription,
            }))
          )}
        />
      )}
      <AnimateIn direction="up" delay={0.1} className="max-w-4xl mb-20 pt-12 md:pt-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-primary" />
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
      </AnimateIn>
      <ProjectCard projects={projects} />
      <AnimateIn direction="up" delay={0} className="mt-30 py-20 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Ready to ship?</h2>
          <p className="text-white/40 text-sm uppercase tracking-[0.2em]">
            Now accepting full-stack opportunities for {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="/contact"
            className="h-14 px-10 bg-primary text-white text-xs font-extrabold uppercase tracking-[0.2em] rounded-lg shadow-[0_0_30px_rgba(222,27,27,0.3)] hover:brightness-125 transition-all flex items-center"
          >
            Initiate Project
          </Link>
        </div>
      </AnimateIn>
    </>
  );
}
