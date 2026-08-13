import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";
import {
  Zap,
  Layers,
  Users,
  Repeat2,
  Brain,
  Box,
  Palette,
  Puzzle,
  BookOpen,
  Handshake,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import JsonLd from "@/components/ui/JsonLd";
import { buildPersonSchema, buildProfilePageSchema, BASE_URL, OG_IMAGE } from "@/lib/seo";
import AnimateIn from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "About Mayowa Makinde | Full-Stack Product Engineer",
  description:
    "Mayowa Makinde is a Full-Stack Product Engineer based in Nigeria with 3+ years building SaaS platforms and scalable web applications using Next.js, React, and TypeScript.",
  keywords: [
    "About Mayowa Makinde",
    "Mayowa Makinde",
    "Makinde Mayowa",
    "Full-Stack Engineer Nigeria",
    "Product Engineer",
    "Next.js developer Nigeria",
    "React engineer",
    "SaaS developer",
    "TypeScript engineer",
    "Nigerian software engineer",
    "software developer portfolio",
  ],
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
    Icon: Zap,
    title: "Ship Fast",
    body: "Perfect software never launches. I believe in shipping meaningful progress early and improving through iteration.",
  },
  {
    Icon: Layers,
    title: "Think in Systems",
    body: "Good software isn't just functional. It should remain understandable and maintainable months after launch.",
  },
  {
    Icon: Users,
    title: "Users First",
    body: "Every technical decision should ultimately improve someone's experience using the product.",
  },
  {
    Icon: Repeat2,
    title: "Build for Longevity",
    body: "Readable code, thoughtful architecture, and scalability matter just as much as features.",
  },
];

const interests = [
  { Icon: Brain, label: "AI" },
  { Icon: Box, label: "Product" },
  { Icon: Palette, label: "Design" },
  { Icon: Puzzle, label: "Problem Solving" },
  { Icon: BookOpen, label: "Learning" },
  { Icon: Handshake, label: "Collaboration" },
];

const timeline = [
  {
    milestone: "Started learning web development",
    detail: "Fell in love with the idea of creating anything from an idea and a text editor.",
  },
  {
    milestone: "Built first client project",
    detail: "Delivered a real product for a real person. Realized this was what I wanted to do.",
  },
  {
    milestone: "Started freelancing",
    detail: "Began working with early-stage startups and solo founders on web products.",
  },
  {
    milestone: "Built SaaS products",
    detail: "Shipped subscription platforms, dashboards, and multi-tenant applications end-to-end.",
  },
  {
    milestone: "Working with founders and businesses today",
    detail: "Partnering with ambitious teams to turn ideas into production-ready software.",
  },
];

const checklist = [
  "Clear communication",
  "Product thinking",
  "Reliable delivery",
  "Clean architecture",
  "Maintainable code",
  "Long-term support",
  "Honest technical advice",
  "User-focused decisions",
];

const Stacks = [
  { label: "Main Stack", stacks: "React, Next.js, TS" },
  { label: "Backend | DB", stacks: "Node, Supabase, Firebase, MongoDB" },
  { label: "Specialization", stacks: "Product Engineering" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd schema={buildPersonSchema()} />
      <JsonLd schema={buildProfilePageSchema()} />

      {/* ─── Section 1 · Hero ─────────────────────────────────────────────── */}
      <AnimateIn direction="down" delay={0}>
        <div className="flex items-center justify-between pt-12 md:pt-20 mb-8">
          <div className="flex items-center gap-4">
            <span className="w-8 h-px bg-primary shrink-0" />
            <span className="text-primary text-[10px] font-extrabold uppercase tracking-[0.4em]">
              Makinde Mayowa
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em]">
              Available
            </span>
          </div>
        </div>
      </AnimateIn>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 mb-32">
        <div className="md:col-span-7">
          <AnimateIn direction="up" delay={0.1}>
            <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-[-0.04em] mb-10">
              <span className="block text-primary text-2xl md:text-3xl font-extrabold tracking-widest uppercase mb-4">
                Mayowa Makinde
              </span>
              Shipping{" "}
              <span className="text-primary italic">human-centric</span>{" "}
              solutions with precision.
            </h1>
          </AnimateIn>

          <div className="space-y-8">
            <AnimateIn direction="up" delay={0.2}>
              <div className="border-l-2 border-primary pl-8 space-y-4">
                <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl">
                  I&apos;m Mayowa, a full-stack product engineer who enjoys
                  turning ambitious ideas into polished digital products.
                </p>
                <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl">
                  I partner with founders and businesses to build scalable
                  software that&apos;s fast, maintainable, and genuinely
                  enjoyable to use.
                </p>
                <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl">
                  For me, great engineering is never just about shipping
                  features. It&apos;s about creating{" "}
                  <span className="text-white font-bold">
                    products people love using.
                  </span>
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>

        <AnimateIn
          direction="left"
          delay={0.2}
          className="md:col-span-5 flex flex-col items-center md:items-end"
        >
          <div className="relative w-full max-w-100 about-image-container group">
            <div className="aspect-4/5 bg-surface overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <Image
                alt="Mayowa Makinde — Full-Stack Product Engineer based in Nigeria"
                fill
                className="object-cover"
                src={"/images/profile.png"}
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background-dark border border-white/5 p-6 backdrop-blur-xl">
              <p className="text-white font-bold text-3xl">Ibadan | Akure, NG</p>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">
                Global Delivery / UTC+1
              </p>
            </div>
          </div>
          <div className="mt-16 w-full max-w-100">
            <div className="flex flex-col gap-6">
              {Stacks.map((stack) => (
                <div
                  key={stack.label}
                  className="flex items-center justify-between border-b border-white/5 pb-4 group cursor-default"
                >
                  <span className="text-white/40 text-xs font-bold uppercase tracking-widest">
                    {stack.label}
                  </span>
                  <span className="text-white text-sm font-bold group-hover:text-primary transition-colors">
                    {stack.stacks}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* ─── Section 2 · My Story ─────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/5 mb-8">
        <AnimateIn direction="up" delay={0} className="flex items-center gap-4 mb-6">
          <span className="w-8 h-px bg-primary shrink-0" />
          <span className="text-primary text-[10px] font-extrabold uppercase tracking-[0.4em]">
            My Journey
          </span>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-7">
            <AnimateIn direction="up" delay={0.1}>
              <h2 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-10">
                I Didn&apos;t Fall in Love{" "}
                <span className="text-primary italic">with Code.</span>
                <br />I Fell in Love with Building.
              </h2>
            </AnimateIn>

            <div className="space-y-6 max-w-2xl">
              <AnimateIn direction="up" delay={0.2}>
                <p className="text-white/60 text-lg leading-relaxed">
                  What first attracted me to software wasn&apos;t programming itself.
                  It was the ability to create something meaningful from an idea.
                </p>
              </AnimateIn>
              <AnimateIn direction="up" delay={0.3}>
                <p className="text-white/60 text-lg leading-relaxed">
                  Over time I realized code is simply the tool. The real goal is
                  solving problems, simplifying complexity, and building products
                  that create value for both businesses and users.
                </p>
              </AnimateIn>
              <AnimateIn direction="up" delay={0.4}>
                <p className="text-white/80 text-lg leading-relaxed font-medium">
                  Today I focus on helping founders transform concepts into
                  production-ready software while keeping long-term
                  maintainability at the center of every decision.
                </p>
              </AnimateIn>
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9 flex flex-col justify-start gap-8 pt-4">
            <AnimateIn direction="left" delay={0.2}>
              <div className="bg-surface border border-white/5 p-8">
                <p className="text-white/40 text-[10px] font-extrabold uppercase tracking-[0.35em] mb-3">
                  Years Building Products
                </p>
                <p className="text-white text-5xl font-extrabold tracking-tight">3+</p>
              </div>
            </AnimateIn>
            <AnimateIn direction="left" delay={0.3}>
              <div className="bg-surface border border-white/5 p-8">
                <p className="text-white/40 text-[10px] font-extrabold uppercase tracking-[0.35em] mb-3">Projects Delivered</p>
                <p className="text-white text-5xl font-extrabold tracking-tight">10+</p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ─── Section 3 · Engineering Principles ─────────────────────────── */}
      <section className="py-24 border-t border-white/5 mb-8">
        <AnimateIn direction="up" delay={0} className="mb-14">
          <h2 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight">
            Principles That Guide Every Project
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px">
          {principles.map(({ Icon, title, body }, i) => (
            <AnimateIn key={title} direction="up" delay={i * 0.1}>
              <div className="group bg-surface border border-white/5 p-8 h-full flex flex-col gap-5
                              hover:border-white/15 hover:-translate-y-1 transition-all duration-300
                              hover:shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
                <Icon className="text-primary w-6 h-6" strokeWidth={1.5} />
                <h3 className="text-white font-extrabold text-xl tracking-tight">{title}</h3>
                <p className="text-white/45 text-sm leading-relaxed flex-1">{body}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ─── Section 4 · Beyond Development ─────────────────────────────── */}
      <section className="py-24 border-t border-white/5 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-6">
            <AnimateIn direction="up" delay={0}>
              <h2 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
                Beyond Writing Code
              </h2>
              <p className="text-white/55 text-lg leading-relaxed mb-6">
                Technology evolves constantly, which is why I enjoy continuously
                learning, exploring new tools, and understanding how successful
                digital products are built.
              </p>
              <p className="text-white/55 text-lg leading-relaxed">
                Outside development I enjoy studying product design,
                experimenting with AI-powered workflows, following modern
                interface design trends, and refining the small details that
                make software feel intuitive.{" "}
                <span className="text-white font-semibold">
                  Curiosity is one of the strongest tools I bring into every project.
                </span>
              </p>
            </AnimateIn>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <AnimateIn direction="left" delay={0.15}>
              <div className="grid grid-cols-3 gap-px">
                {interests.map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="group bg-surface border border-white/5 p-6 flex flex-col items-center
                               justify-center gap-3 hover:border-white/15 hover:bg-surface-hover
                               transition-all duration-300 cursor-default aspect-square"
                  >
                    <Icon
                      className="text-primary/70 group-hover:text-primary w-6 h-6 transition-colors duration-200"
                      strokeWidth={1.5}
                    />
                    <span className="text-white/40 group-hover:text-white/70 text-[10px] font-bold
                                     uppercase tracking-widest text-center transition-colors duration-200">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ─── Section 5 · Professional Timeline ───────────────────────────── */}
      <section className="py-24 border-t border-white/5 mb-8">
        <AnimateIn direction="up" delay={0} className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-px bg-primary shrink-0" />
            <span className="text-primary text-[10px] font-extrabold uppercase tracking-[0.4em]">
              Timeline
            </span>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight">
            The Path So Far
          </h2>
        </AnimateIn>

        <div className="relative max-w-2xl">
          {/* Vertical track */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/5" />

          <div className="flex flex-col gap-10">
            {timeline.map((item, i) => (
              <AnimateIn key={i} direction="up" delay={i * 0.1}>
                <div className="flex gap-8 items-start">
                  <div className="relative shrink-0 mt-1">
                    <span className="w-[15px] h-[15px] rounded-full border-2 border-primary bg-background-dark block glow-dot" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base mb-1.5">
                      {item.milestone}
                    </p>
                    <p className="text-white/45 text-sm leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 6 · Why Clients Enjoy Working With Me ───────────────── */}
      <section className="py-24 border-t border-white/5 mb-8">
        <AnimateIn direction="up" delay={0} className="mb-14">
          <h2 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight">
            More Than Just Development
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <AnimateIn direction="up" delay={0.1}>
            <p className="text-white/60 text-xl leading-relaxed">
              Building software is collaborative. Clients don&apos;t just hire
              me because I write code. They hire me because they want a technical
              partner who{" "}
              <span className="text-white font-semibold">
                communicates clearly, thinks through product decisions,
              </span>{" "}
              and cares about long-term success.
            </p>
          </AnimateIn>

          <AnimateIn direction="left" delay={0.2}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {checklist.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2
                    className="text-primary w-4 h-4 shrink-0"
                    strokeWidth={2}
                  />
                  <span className="text-white/70 text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </AnimateIn>
        </div>
      </section>

      {/* ─── Final CTA ────────────────────────────────────────────────────── */}
      <AnimateIn direction="up" delay={0} className="mb-32">
        <div className="bg-surface border border-white/5 p-12 md:p-24 relative overflow-hidden flex flex-col items-center text-center">
          <div
            aria-hidden
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/[0.04] blur-[120px] rounded-full pointer-events-none"
          />

          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-px bg-primary shrink-0" />
            <span className="text-primary text-[10px] font-extrabold uppercase tracking-[0.4em]">
              Let&apos;s Build
            </span>
            <span className="w-8 h-px bg-primary shrink-0" />
          </div>

          <h2 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6 relative z-10">
            Let&apos;s Build Something{" "}
            <span className="text-primary italic">Worth Remembering.</span>
          </h2>

          <p className="text-white/50 text-lg max-w-xl leading-relaxed mb-10 relative z-10">
            Every great product starts with a conversation. If you've got an idea you're excited about, I'd love to hear it.
          </p>

          <div className="flex flex-wrap justify-center gap-5 relative z-10">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 min-w-52 justify-center
                         h-14 px-8 bg-primary text-white text-sm font-extrabold
                         uppercase tracking-widest cta-glow hover:brightness-110 transition-all rounded"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center min-w-44
                         h-14 px-8 bg-transparent border border-white/15 text-white
                         text-sm font-extrabold uppercase tracking-widest
                         hover:border-white/40 transition-all rounded"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </AnimateIn>
    </>
  );
}
