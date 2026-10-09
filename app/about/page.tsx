import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";
import {
  Mic,
  Brain,
  Palette,
  LayoutPanelTop,
  Wrench,
  Github,
  ArrowRight,
} from "lucide-react";
import JsonLd from "@/components/ui/JsonLd";
import {
  buildPersonSchema,
  buildProfilePageSchema,
  buildBreadcrumbSchema,
  BASE_URL,
  OG_IMAGE,
} from "@/lib/seo";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/sections/CTASection";
import { TechIconGrid } from "@/components/ui/TechStack";
import { toolsOfTrade, currentlyExploring } from "@/lib/data/stack";
import { SITE, STATS } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About | Full-Stack Product Engineer",
  description:
    "Mayowa Makinde is a Full-Stack Product Engineer based in Nigeria with 3+ years building SaaS platforms and scalable web applications using Next.js, React, and TypeScript.",
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: "About Mayowa Makinde | Full-Stack Product Engineer",
    description:
      "Mayowa Makinde — Full-Stack Product Engineer based in Nigeria. 3+ years building SaaS platforms, dashboards, and scalable web applications.",
    url: `${BASE_URL}/about`,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Mayowa Makinde — Full-Stack Product Engineer",
      },
    ],
  },
  twitter: {
    title: "About Mayowa Makinde | Full-Stack Product Engineer",
    description:
      "Full-Stack Product Engineer based in Nigeria. 3+ years building SaaS platforms and scalable web applications.",
    images: [OG_IMAGE],
  },
};

const principles = [
  {
    title: "Ship Fast",
    body: "Perfect software never launches. I believe in shipping meaningful progress early and improving through iteration.",
  },
  {
    title: "Think in Systems",
    body: "Good software isn’t just functional. It should remain understandable and maintainable months after launch.",
  },
  {
    title: "Users First",
    body: "Every technical decision should ultimately improve someone’s experience using the product.",
  },
  {
    title: "Build for Longevity",
    body: "Readable code, thoughtful architecture, and scalability matter just as much as features.",
  },
];

const interests = [
  { Icon: Mic, label: "Music & Singing" },
  { Icon: Brain, label: "AI" },
  { Icon: Palette, label: "Product Design" },
  { Icon: LayoutPanelTop, label: "Interfaces" },
  { Icon: Wrench, label: "Developer Tools" },
  { Icon: Github, label: "Open Source" },
];

const timeline = [
  {
    period: "2021",
    milestone: "Started learning web development",
    detail:
      "Fell in love with the idea of creating anything from an idea and a text editor.",
  },
  {
    period: "2022",
    milestone: "Built first client project",
    detail:
      "Delivered a real product for a real person. Realized this was what I wanted to do.",
  },
  {
    period: "2023",
    milestone: "Started freelancing",
    detail:
      "Began working with early-stage startups and solo founders on web products.",
  },
  {
    period: "2024",
    milestone: "Built SaaS products",
    detail:
      "Shipped subscription platforms, dashboards, and multi-tenant applications end-to-end.",
  },
  {
    period: "Present",
    milestone: "Today",
    detail:
      "Still building, still learning, and still looking for interesting problems to solve.",
  },
];

const glance = [
  { label: "Focus", value: "Product Engineering" },
  { label: "Stack", value: "React, Next.js, TypeScript" },
  { label: "Backend & data", value: "Node, Supabase, Firebase, MongoDB" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd schema={buildPersonSchema()} />
      <JsonLd schema={buildProfilePageSchema()} />
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Home", url: BASE_URL },
          { name: "About", url: `${BASE_URL}/about` },
        ])}
      />

      {/* ─── Section 1 · Hero ─────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 pt-12 md:pt-20 pb-24">
        <div className="md:col-span-7">
          <p className="text-sm md:text-base font-bold uppercase tracking-[0.25em] text-primary-soft mb-4">
            Mayowa Makinde
          </p>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-[-0.03em] text-balance mb-10">
            I didn&rsquo;t fall in love with code. I fell in love with{" "}
            <span className="text-primary">building.</span>
          </h1>

          <div className="border-l-2 border-primary pl-8 space-y-4">
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl text-pretty">
              I&rsquo;m Mayowa, a full-stack developer who enjoys taking
              problems, ideas, and sometimes messy requirements and turning them
              into software that works.
            </p>
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl text-pretty">
              I care about understanding what we&rsquo;re actually trying to
              solve before deciding how to build it. Whether I&rsquo;m working
              on a client product, an internal tool, or something of my own, I
              like asking questions, figuring things out, and seeing an idea
              make its way from a conversation to something real that{" "}
              <span className="text-white font-bold">people love using.</span>
            </p>
          </div>

          {/* At a glance — compact card, under the bio so columns stay balanced */}
          <div className="mt-12 max-w-md rounded-md border border-white/5 bg-surface p-6">
            <p className="text-white/40 text-xs font-bold uppercase tracking-[0.25em] mb-4">
              At a glance
            </p>
            <dl className="flex flex-col gap-4">
              {glance.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between border-b border-white/5 pb-4 last:border-b-0 last:pb-0"
                >
                  <dt className="text-white/40 text-xs font-bold uppercase tracking-widest">
                    {row.label}
                  </dt>
                  <dd className="text-white text-sm font-bold text-right">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
            <Link
              href="#toolbox"
              className="mt-5 inline-flex items-center gap-1.5 text-primary-soft text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
            >
              See my toolbox
              <ArrowRight className="w-3.5 h-3.5" aria-hidden />
            </Link>
          </div>
        </div>

        <div className="md:col-span-5 flex flex-col items-center md:items-end">
          <div className="relative w-full max-w-100 about-image-container isolate">
            <div className="relative aspect-4/5 bg-surface overflow-hidden rounded-md grayscale hover:grayscale-0 transition-all duration-700">
              <Image
                alt="Mayowa Makinde — Full-Stack Product Engineer based in Nigeria"
                fill
                sizes="(min-width:768px) 400px, 100vw"
                className="object-cover"
                src="/images/profile.png"
                priority
              />
            </div>
            <div className="absolute left-4 -bottom-4 md:-left-6 md:-bottom-6 bg-background-dark border border-white/5 rounded-md p-4 md:p-6 backdrop-blur-xl">
              <p className="text-white font-bold text-xl">{SITE.location}</p>
              <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mt-1">
                {SITE.delivery}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 2 · My Story ─────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/5">
        <AnimateIn direction="up" delay={0} className="mb-14">
          <SectionHeader
            eyebrow="My Journey"
            title={
              <>
                From curiosity to building things that{" "}
                <span className="text-primary">matter.</span>
              </>
            }
          />
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-7">
            <AnimateIn direction="up" delay={0.1}>
              <div className="space-y-6 max-w-2xl">
                <p className="text-white/70 text-lg leading-relaxed text-pretty">
                  What started as curiosity about how websites worked eventually
                  became something much bigger: a fascination with being able to
                  take an idea that exists only in someone&rsquo;s head and turn
                  it into something tangible.
                </p>
                <p className="text-white/70 text-lg leading-relaxed text-pretty">
                  Over time I realized code is simply the tool. The real goal is
                  solving problems, simplifying complexity, and building
                  products that create value for both businesses and users.
                </p>
                <p className="text-white/80 text-lg leading-relaxed font-medium text-pretty">
                  Since then, I&rsquo;ve worked across websites, applications,
                  SaaS products, internal tools, and more complex systems —
                  constantly learning, experimenting, and getting better at
                  turning problems into products.
                </p>
              </div>
            </AnimateIn>
          </div>

          <dl className="md:col-span-4 md:col-start-9 flex flex-col justify-start gap-8 pt-4">
            <AnimateIn direction="left" delay={0.2}>
              <div className="bg-surface border border-white/5 rounded-md p-8">
                <dt className="text-white/40 text-xs font-bold uppercase tracking-[0.25em] mb-3">
                  Years Building Products
                </dt>
                <dd className="text-white text-5xl font-extrabold tracking-tight">
                  {STATS.yearsBuilding}
                </dd>
              </div>
            </AnimateIn>
            <AnimateIn direction="left" delay={0.28}>
              <div className="bg-surface border border-white/5 rounded-md p-8">
                <dt className="text-white/40 text-xs font-bold uppercase tracking-[0.25em] mb-3">
                  Projects Delivered
                </dt>
                <dd className="text-white text-5xl font-extrabold tracking-tight">
                  {STATS.projectsDelivered}
                </dd>
              </div>
            </AnimateIn>
          </dl>
        </div>
      </section>

      {/* ─── Section 3 · Toolbox ─────────────────────────────────────────── */}
      <section
        id="toolbox"
        className="scroll-mt-28 py-24 border-t border-white/5"
      >
        <AnimateIn direction="up" delay={0}>
          <SectionHeader
            eyebrow="Toolbox"
            title="Tools of the trade."
            description="Most of my work is TypeScript end to end: Next.js on the front, Postgres or Supabase behind it, and whatever else the product needs."
            className="mb-14"
          />
          <TechIconGrid categories={toolsOfTrade} />
          <p className="mt-10 text-white/65 text-sm">
            Currently exploring: {currentlyExploring}
          </p>
        </AnimateIn>
      </section>

      {/* ─── Section 4 · Engineering Principles ─────────────────────────── */}
      <section className="py-24 border-t border-white/5">
        <AnimateIn direction="up" delay={0} className="mb-14">
          <SectionHeader
            eyebrow="Principles"
            title="Principles that guide every project"
          />
        </AnimateIn>

        <ul className="border-t border-white/5">
          {principles.map(({ title, body }, i) => (
            <li key={title} className="border-b border-white/5">
              <AnimateIn
                direction="up"
                delay={Math.min(i * 0.08, 0.4)}
                className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 py-8 items-baseline"
              >
                <span
                  className="md:col-span-1 text-primary-soft text-sm font-bold"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="md:col-span-4 text-white font-extrabold text-xl tracking-tight">
                  {title}
                </h3>
                <p className="md:col-span-7 text-white/45 text-base leading-relaxed text-pretty">
                  {body}
                </p>
              </AnimateIn>
            </li>
          ))}
        </ul>
      </section>

      {/* ─── Section 4 · Beyond Development ─────────────────────────────── */}
      <section className="py-24 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-6">
            <AnimateIn direction="up" delay={0}>
              <SectionHeader
                eyebrow="Beyond Code"
                title="Beyond writing code"
                className="mb-8"
              />
              <div className="space-y-6">
                <p className="text-white/70 text-lg leading-relaxed text-pretty">
                  Software keeps changing, and honestly, that&rsquo;s one of the
                  things I enjoy about it. There&rsquo;s always something new to
                  understand, experiment with, or take apart just to see how it
                  works.
                </p>
                <p className="text-white/70 text-lg leading-relaxed text-pretty">
                  Outside of work I&rsquo;m into product design, AI, interfaces
                  and developer tools. I&rsquo;m also a singer, and music is a
                  big part of my life.
                </p>
                <p className="text-white text-lg leading-relaxed font-semibold text-pretty">
                  Curiosity is one of the strongest tools I bring into every
                  project.
                </p>
              </div>
            </AnimateIn>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <AnimateIn direction="left" delay={0.15}>
              <ul className="grid grid-cols-3 gap-px">
                {interests.map(({ Icon, label }, i) => (
                  <li
                    key={label}
                    className="bg-surface border border-white/5 min-h-28"
                  >
                    <AnimateIn
                      direction="up"
                      delay={Math.min(i * 0.08, 0.4)}
                      className="h-full w-full p-6 flex flex-col items-center justify-center gap-3"
                    >
                      <Icon
                        className="text-primary w-6 h-6"
                        strokeWidth={1.5}
                        aria-hidden
                      />
                      <span className="text-white/70 text-xs font-bold uppercase tracking-widest text-center">
                        {label}
                      </span>
                    </AnimateIn>
                  </li>
                ))}
              </ul>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ─── Section 5 · Professional Timeline ───────────────────────────── */}
      <section className="py-24 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-4">
            <AnimateIn direction="up" delay={0} className="md:sticky md:top-28">
              <SectionHeader
                eyebrow="Timeline"
                title="The path so far"
                description={`${STATS.yearsBuilding} years of building products — from the first line of code to production SaaS.`}
              />
            </AnimateIn>
          </div>

          <div className="md:col-span-8">
            <div className="relative">
              {/* Vertical track */}
              <div
                className="absolute left-[7px] top-2 bottom-2 w-px bg-white/15"
                aria-hidden
              />
              <ol className="flex flex-col gap-10">
                {timeline.map((item, i) => {
                  const isNow = i === timeline.length - 1;
                  return (
                    <li key={item.milestone}>
                      <AnimateIn
                        direction="up"
                        delay={Math.min(i * 0.08, 0.4)}
                        className="flex gap-8 items-start"
                      >
                        <span
                          className={`relative shrink-0 mt-1 w-[15px] h-[15px] rounded-full border-2 border-primary ${
                            isNow ? "bg-primary glow-dot" : "bg-background-dark"
                          }`}
                          aria-hidden
                        />
                        <div>
                          <p className="flex items-center gap-3 mb-1.5">
                            <span className="text-primary-soft text-xs font-bold uppercase tracking-widest">
                              {item.period}
                            </span>
                            {isNow && (
                              <span className="rounded-full bg-primary/10 border border-primary/30 text-primary-soft text-[10px] font-bold uppercase tracking-widest px-2 py-0.5">
                                Now
                              </span>
                            )}
                          </p>
                          <p className="text-white font-bold text-base mb-1.5">
                            {item.milestone}
                          </p>
                          <p className="text-white/70 text-base leading-relaxed text-pretty">
                            {item.detail}
                          </p>
                        </div>
                      </AnimateIn>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </section>

    

      {/* ─── Final CTA ────────────────────────────────────────────────────── */}
      <CTASection
        eyebrow="Work Together"
        headline="Let&rsquo;s build something"
        accent="worth remembering."
        body="Every great product starts with a conversation. If you’ve got an idea you’re excited about, I’d love to hear it."
      />
    </>
  );
}
