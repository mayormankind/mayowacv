//app/projects/[slug]/page.tsx
import { ArrowLeft, ArrowUpRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import { Metadata } from "next";
import { supabase } from "@/lib/supabase/server";
import Icon from "@/components/ui/Icon";
import VideoPlayer from "@/components/ui/VideoPlayer";
import ImageCarousel from "@/components/ui/ImageCarousel";
import AnimateIn from "@/components/ui/AnimateIn";
import JsonLd from "@/components/ui/JsonLd";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import OnThisPage, { type TocSection } from "@/components/ui/OnThisPage";
import {
  BASE_URL,
  OG_IMAGE,
  buildBreadcrumbSchema,
  buildSoftwareAppSchema,
} from "@/lib/seo";
import MermaidDiagram from "@/components/ui/MermaidDiagram";
import CaseStudyGrid from "@/components/sections/CaseStudyGrid";
import CTASection from "@/components/sections/CTASection";
import {
  fetchProject,
  fetchPublishedProjectList,
} from "@/lib/data/project";

export const revalidate = 3600;

export async function generateStaticParams() {
  const { data: dbProjects } = await supabase
    .from("projects")
    .select("slug")
    .eq("status", "published");

  return (dbProjects || []).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await fetchProject(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.shortDescription,
    alternates: {
      canonical: `${BASE_URL}/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Mayowa Makinde — Case Study`,
      description: project.shortDescription,
      url: `${BASE_URL}/projects/${project.slug}`,
      images: project.heroImage
        ? [
            {
              url: project.heroImage,
              alt: `${project.title} — Project by Mayowa Makinde`,
            },
          ]
        : [
            {
              url: OG_IMAGE,
              width: 1200,
              height: 630,
              alt: "Mayowa Makinde — Full-Stack Portfolio",
            },
          ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Mayowa Makinde`,
      description: project.shortDescription,
      images: [project.heroImage || OG_IMAGE],
    },
  };
}

/** First couple of sentences of a text, for the hero summary. */
function firstSentences(text: string, count = 2): string {
  const trimmed = text.trim();
  if (!trimmed) return "";
  const sentences = trimmed.match(/[^.!?]+[.!?]+(?=\s|$)/g);
  if (!sentences) return trimmed;
  const picked = sentences.slice(0, count).join(" ").trim();
  return picked.length < trimmed.length ? picked : trimmed;
}

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [project, allProjects] = await Promise.all([
    fetchProject(slug),
    fetchPublishedProjectList(),
  ]);

  if (!project) {
    notFound();
  }

  // Next project, circular, matching the /projects listing order.
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const nextProject =
    allProjects.length > 1 && currentIndex !== -1
      ? allProjects[(currentIndex + 1) % allProjects.length]
      : undefined;

  const summary = firstSentences(
    project.shortDescription || project.longDescription,
  );
  const hasCaseStudy = Boolean(
    project.details &&
      (project.details.challenge ||
        project.details.strategy ||
        project.details.impact),
  );
  const videoUrl = project.demoVideoUrl || project.links.demo;
  const topStack = project.techStack.slice(0, 5);
  const extraStack = project.techStack.length - topStack.length;
  const category = project.category || project.subtitle;

  const toc: TocSection[] = [
    project.longDescription && { id: "overview", label: "Overview" },
    project.images.length > 0 && { id: "screenshots", label: "Screenshots" },
    hasCaseStudy && { id: "case-study", label: "Case study" },
    project.architecture && { id: "architecture", label: "Architecture" },
    project.lessons.length > 0 && { id: "lessons", label: "Lessons" },
  ].filter(Boolean) as TocSection[];

  return (
    <>
      <JsonLd schema={buildBreadcrumbSchema([
        { name: "Home", url: BASE_URL },
        { name: "Projects", url: `${BASE_URL}/projects` },
        { name: project.title, url: `${BASE_URL}/projects/${project.slug}` },
      ])} />
      <JsonLd schema={buildSoftwareAppSchema({
        title: project.title,
        shortDescription: project.shortDescription,
        slug: project.slug,
        techStack: project.techStack,
        heroImage: project.heroImage,
        dateCreated: project.createdAt,
      })} />

      {/* Hero */}
      <section className="py-16 md:py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 transition-colors hover:text-white mb-10"
          >
            <ArrowLeft className="size-4" aria-hidden />
            All projects
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              {project.subtitle && (
                <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em] rounded">
                  {project.subtitle}
                </span>
              )}
              {project.period && (
                <span className="text-white/40 text-xs font-bold uppercase tracking-[0.2em]">
                  {project.period}
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] text-balance mb-6">
              {project.title}
            </h1>
            {summary && (
              <p className="text-white/60 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
                {summary}
              </p>
            )}

            {(project.links.live || project.links.repo) && (
              <div className="flex flex-wrap gap-4 mt-8">
                {project.links.live && (
                  <Button
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View live app
                    <ArrowUpRight className="w-4 h-4" aria-hidden />
                  </Button>
                )}
                {project.links.repo && (
                  <Button
                    href={project.links.repo}
                    variant="secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View code
                    <ArrowUpRight className="w-4 h-4" aria-hidden />
                  </Button>
                )}
              </div>
            )}

            {/* Quick facts */}
            {(category || project.period || topStack.length > 0) && (
              <dl className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/5 pt-8">
                {category && (
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                      Category
                    </dt>
                    <dd className="mt-1.5 text-sm text-white/80">{category}</dd>
                  </div>
                )}
                {project.period && (
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                      Timeline
                    </dt>
                    <dd className="mt-1.5 text-sm text-white/80">
                      {project.period}
                    </dd>
                  </div>
                )}
                {topStack.length > 0 && (
                  <div className="col-span-2">
                    <dt className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                      Stack
                    </dt>
                    <dd className="mt-2 flex flex-wrap items-center gap-2">
                      {topStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-white/5 text-xs text-white/80 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {extraStack > 0 && (
                        <a
                          href="#tech-stack"
                          className="text-xs font-bold text-primary-soft hover:text-white transition-colors"
                        >
                          +{extraStack} more
                        </a>
                      )}
                    </dd>
                  </div>
                )}
              </dl>
            )}
          </div>

          {/* Full overview, collapsed so it stays out of the way */}
          {project.longDescription && (
            <details id="overview" className="group scroll-mt-32 mt-12 border border-white/5 rounded-lg bg-surface/50">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 text-xs font-bold uppercase tracking-widest text-white/60 transition-colors hover:text-white [&::-webkit-details-marker]:hidden">
                Overview — read the full write-up
                <ChevronDown
                  className="size-4 transition-transform group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <p className="max-w-prose px-6 pb-6 text-white/70 text-base leading-relaxed">
                {project.longDescription}
              </p>
            </details>
          )}

          {/* Demo video — renders nothing when there is no playable URL */}
          {videoUrl && (
            <div className="mt-12">
              <VideoPlayer
                videoUrl={videoUrl}
                posterUrl={project.heroImage}
                title={project.title}
              />
            </div>
          )}

          {/* Screenshots */}
          {project.images.length > 0 && (
            <AnimateIn direction="up" delay={0.1} className="mt-16">
              <div id="screenshots" className="scroll-mt-32">
                <SectionHeader
                  eyebrow="Screenshots"
                  title="The product in action"
                  className="mb-10"
                />
                <ImageCarousel images={project.images} title={project.title} />
              </div>
            </AnimateIn>
          )}
        </div>
      </section>

      {/* Case study */}
      {hasCaseStudy && (
        <section
          id="case-study"
          className="py-24 border-b border-white/5 scroll-mt-32"
        >
          <CaseStudyGrid details={project.details} />
        </section>
      )}

      {/* Body + sidebar */}
      <section className="py-24">
        <div className="max-w-7xl px-6 md:px-0 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8 space-y-32">
            {/* Architecture */}
            {project.architecture && (
              <div className="scroll-mt-32" id="architecture">
                <SectionHeader
                  eyebrow="Architecture"
                  title={project.architecture.subtitle || "How it’s built"}
                  className="mb-12"
                />
                <MermaidDiagram
                  syntax={project.architecture.diagramSyntax ?? ""}
                  title={project.architecture.title}
                  description={project.architecture.description}
                />
                {project.architecture.points.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {project.architecture.points.map((point, idx) => (
                      <div key={idx} className="space-y-4">
                        <h3 className="text-sm font-extrabold uppercase tracking-widest text-white/80 flex items-center gap-2">
                          <Icon
                            name={point.iconName}
                            className="text-primary text-lg"
                          />
                          {point.title}
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Lessons */}
            {project.lessons.length > 0 && (
              <div className="scroll-mt-32" id="lessons">
                <SectionHeader
                  eyebrow="Takeaways"
                  title="Lessons & trade-offs"
                  className="mb-12"
                />
                <div className="space-y-12">
                  {project.lessons.map((lesson, idx) => (
                    <div key={idx} className="flex gap-8">
                      <div className="flex-none">
                        <div className="size-12 rounded-md bg-surface border border-white/10 flex items-center justify-center text-primary">
                          <Icon name={lesson.iconName} />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold">{lesson.title}</h3>
                        <p className="text-white/60 text-base leading-relaxed max-w-prose">
                          {lesson.description}
                        </p>
                        {lesson.highlight && (
                          <p className="border-l-2 border-primary/40 pl-4 text-sm font-semibold text-primary-soft">
                            {lesson.highlight}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-32 max-h-[calc(100vh-9rem)] overflow-y-auto no-scrollbar space-y-12">
              <OnThisPage sections={toc} />

              {/* Metrics */}
              {project.metrics.length > 0 && (
                <div className="bg-surface border border-white/10 p-8 rounded-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl" aria-hidden />
                  <h3 className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] mb-8">
                    Product Metrics
                  </h3>
                  <div className="space-y-8">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx}>
                        <p className="text-white/40 text-xs uppercase font-bold tracking-widest mb-1">
                          {metric.label}
                        </p>
                        <p className="text-3xl font-extrabold text-primary tracking-tighter">
                          {metric.value}
                        </p>
                        {metric.subtext && (
                          <p className="mt-1 text-xs uppercase font-medium text-white/40">
                            {metric.subtext}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Documentation */}
              {project.docs.length > 0 && (
                <div className="space-y-6">
                  <h3 className="text-white/40 text-xs font-bold uppercase tracking-[0.3em]">
                    Documentation
                  </h3>
                  <div className="flex flex-col gap-3">
                    {project.docs.map((doc, idx) => (
                      <a
                        key={idx}
                        className="flex items-center justify-between p-4 bg-surface border border-white/5 rounded-md hover:border-white/20 transition-all group"
                        href={doc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${doc.title} (opens in a new tab)`}
                      >
                        <span className="text-sm font-bold">{doc.title}</span>
                        <Icon
                          name={doc.iconName}
                          className="text-white/30 group-hover:text-primary transition-colors"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech stack */}
              {project.techStack.length > 0 && (
                <div className="pt-8 border-t border-white/5 scroll-mt-32" id="tech-stack">
                  <h3 className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] mb-4">
                    Full tech stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-white/5 text-xs font-bold text-white/80 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>

      {/* Contact CTA */}
      <CTASection
        eyebrow="Start a project"
        headline="Want something like this"
        accent="built?"
        body={`${project.title} is one example of how I work — from architecture to shipped product. If you have a problem that needs this kind of thinking, let’s talk.`}
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="View all projects"
        secondaryHref="/projects"
      />

      {/* Next project */}
      {nextProject && (
        <section className="px-6 md:px-20 py-24 border-t border-white/5 bg-surface/30">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-10">
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center gap-6"
            >
              {nextProject.heroImage && (
                <div className="relative hidden sm:block w-28 aspect-video shrink-0 overflow-hidden rounded-md border border-white/10">
                  <Image
                    src={nextProject.heroImage}
                    alt=""
                    fill
                    sizes="112px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary-soft mb-2">
                  Next case study
                </p>
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight transition-colors group-hover:text-primary-soft">
                  {nextProject.title}
                </h2>
                <p className="text-white/50 mt-1 max-w-md">
                  {nextProject.subtitle}
                </p>
              </div>
            </Link>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={`/projects/${nextProject.slug}`}>
                Next project
              </Button>
              <Button href="/projects" variant="secondary">
                All projects
              </Button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
