import { getProjectBySlug, getAllProjects } from "@/lib/data";
import { ArrowUpRight, Play } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { Metadata } from "next";

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [
        {
          url: project.heroImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find next project for the bottom CTA (circular)
  const allProjects = getAllProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const nextProject =
    currentIndex !== -1 && currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1]
      : allProjects[0];

  return (
    <>
      <section className="py-16 md:py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] rounded">
                  {project.subtitle}
                </span>
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">
                  {project.period}
                </span>
              </div>
              <h1 className="text-5xl md:text-8xl font-extrabold md              {project.title}
              </h1>
              <p className="text-white/50 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
                {project.longDescription}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                className="flex items-center gap-3 text-white group"
                href={project.links.live}
              >
                <span className="text-[10px] font-extrabold uppercase tracking-widest">
                  Live Experience
                </span>
                <ArrowUpRight className="text-primary group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="h-px w-full bg-linear-to-r from-primary to-transparent"></div>
            </div>
          </div>
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-surface group">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60"
              style={{
                backgroundImage: `url('${project.heroImage}')`,
              }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                title="play demo"
                className="size-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-primary transition-colors group"
              >
                <Play className="text-white text-4xl" />
              </button>
            </div>
            <div className="absolute bottom-6 left-6 flex gap-3">
              <div className="px-4 py-2 bg-black/60 backdrop-blur-md rounded border border-white/10 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Stable Production Release
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-white/5">
        <div className="max-w-7xl px-6 md:px-0 mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          <div className="space-y-6">
            <p className="text-primary text-[10px] font-extrabold uppercase tracking-[0.3em]">
              {project.details.challenge.subtitle}
            </p>
            <h3 className="text-2xl font-bold leading-tight">
              {project.details.challenge.title}
            </h3>
            <p className="text-white/50 text-sm leading-loose">
              {project.details.challenge.description}
            </p>
          </div>
          <div className="space-y-6">
            <p className="text-primary text-[10px] font-extrabold uppercase tracking-[0.3em]">
              {project.details.strategy.subtitle}
            </p>
            <h3 className="text-2xl font-bold leading-tight">
              {project.details.strategy.title}
            </h3>
            <p className="text-white/50 text-sm leading-loose">
              {project.details.strategy.description}
            </p>
          </div>
          <div className="space-y-6">
            <p className="text-primary text-[10px] font-extrabold uppercase tracking-[0.3em]">
              {project.details.impact.subtitle}
            </p>
            <h3 className="text-2xl font-bold leading-tight">
              {project.details.impact.title}
            </h3>
            <p className="text-white/50 text-sm leading-loose">
              {project.details.impact.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl px-6 md:px-0 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8 space-y-32">
            {/* Architecture Section */}
            {project.architecture && (
              <div className="scroll-mt-32" id="architecture">
                <div className="mb-12">
                  <h2 className="text-3xl font-extrabold mb-4 tracking-tight">
                    {project.architecture.subtitle}
                  </h2>
                  <div className="h-1 w-20 bg-primary mb-8"></div>
                </div>
                <div className="bg-surface border border-white/10 rounded-xl p-8 mb-12">
                  <div className="aspect-video bg-black/40 rounded border border-dashed border-white/20 flex flex-col items-center justify-center gap-4 text-center px-8">
                    <span className="material-symbols-outlined text-white/20 text-6xl">
                      schema
                    </span>
                    <div>
                      <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-2">
                        {project.architecture.title}
                      </p>
                      <p className="text-white/20 text-xs">
                        {project.architecture.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {project.architecture.points.map((point, idx) => (
                    <div key={idx} className="space-y-4">
                      <h4 className="text-sm font-extrabold uppercase tracking-widest text-white/80 flex items-center gap-2">
                        <point.icon className="text-primary text-lg" />
                        {point.title}
                      </h4>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Lessons Section */}
            {project.lessons && project.lessons.length > 0 && (
              <div className="scroll-mt-32" id="lessons">
                <div className="mb-12">
                  <h2 className="text-3xl font-extrabold mb-4 tracking-tight">
                    Lessons & Trade-offs
                  </h2>
                  <div className="h-1 w-20 bg-primary mb-8"></div>
                </div>
                <div className="space-y-12">
                  {project.lessons.map((lesson, idx) => (
                    <div key={idx} className="flex gap-8 group">
                      <div className="flex-none">
                        <div className="size-12 rounded bg-surface border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                          <lesson.icon />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-xl font-bold">{lesson.title}</h4>
                        <p className="text-white/50 text-base leading-relaxed">
                          {lesson.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-12">
              {/* Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="bg-surface-light border border-white/10 p-8 rounded-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl"></div>
                  <h4 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                    Product Metrics
                  </h4>
                  <div className="space-y-8">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx}>
                        <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">
                          {metric.label}
                        </p>
                        <p className="text-3xl font-extrabold text-primary tracking-tighter">
                          {metric.value}{" "}
                          {metric.subtext && (
                            <span className="text-xs uppercase font-medium text-white/40">
                              {metric.subtext}
                            </span>
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Documentation */}
              {project.docs && project.docs.length > 0 && (
                <div className="space-y-6">
                  <h4 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">
                    Documentation
                  </h4>
                  <div className="flex flex-col gap-3">
                    {project.docs.map((doc, idx) => (
                      <a
                        key={idx}
                        className="flex items-center justify-between p-4 bg-surface border border-white/5 rounded hover:border-white/20 transition-all group"
                        href={doc.href}
                      >
                        <span className="text-sm font-bold">{doc.title}</span>
                        <doc.icon className="text-white/30 group-hover:text-primary transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div className="pt-8 border-t border-white/5">
                <h4 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                  Core Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-white/5 text-[10px] font-bold rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-6 md:px-20 py-32 border-t border-white/5 bg-surface/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">
              Ready for the next deep dive?
            </h2>
            <p className="text-white/50 max-w-md">
              Check out {nextProject.title}, a {nextProject.subtitle} project.
            </p>
          </div>
          <div className="flex gap-6 flex-col ">
            <Link href={`/projects/${nextProject.slug}`}>
              <button className="px-8 py-4 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded hover:brightness-110 transition-all">
                Next: {nextProject.title}
              </button>
            </Link>
            <Link href="/projects">
              <button className="px-8 py-4 border border-white/10 text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-white hover:text-black transition-all">
                All Projects
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
