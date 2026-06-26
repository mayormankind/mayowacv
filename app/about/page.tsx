import { CircleGauge, DraftingCompass, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";
import JsonLd from "@/components/ui/JsonLd";
import { buildPersonSchema, BASE_URL } from "@/lib/seo";
import AnimateIn from "@/components/ui/AnimateIn";
import TextLightUp from "@/components/ui/TextLightUp";

export const metadata: Metadata = {
  title: "About",
  description:
    "Makinde Mayowa is a Senior Full-Stack Product Engineer based in Nigeria with 3+ years building SaaS platforms and scalable web applications using Next.js, React, and TypeScript.",
  keywords: [
    "About Makinde Mayowa",
    "Full-Stack Engineer Nigeria",
    "Product Engineer",
    "Next.js developer Nigeria",
    "React engineer",
    "SaaS developer",
    "TypeScript engineer",
  ],
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
};

export default function page() {
  const Stacks = [
    {
      label: "Main Stack",
      stacks: "React, Next.js, TS",
    },
    {
      label: "Backend | DB",
      stacks: "Node, Supabase, Firebase, MongoDB",
    },
    {
      label: "Specialization",
      stacks: "Product Engineering",
    },
  ];

  return (
    <>
      <JsonLd schema={buildPersonSchema()} />
      {/* Header row — fixed mobile: flex-wrap so badge drops below on small screens */}
      <AnimateIn direction="down" delay={0}>
        <div className="flex flex-wrap items-center justify-between gap-4 pt-12 md:pt-20 mb-8">
          <div className="flex items-center gap-3">
            <span className="text-primary text-[10px] font-extrabold tracking-[0.3em] uppercase">
              About Mayowa
            </span>
          </div>
          <div className="flex h-8 items-center justify-center gap-x-2 rounded bg-white px-4 shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <p className="text-black text-[10px] font-extrabold tracking-[0.2em] uppercase whitespace-nowrap">
              Available for Work
            </p>
          </div>
        </div>
      </AnimateIn>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 mb-32">
        <div className="md:col-span-7">
          <AnimateIn direction="up" delay={0.1}>
            <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-[-0.04em] mb-10">
              Shipping <span className="text-primary italic">human-centric</span>{" "}
              solutions with precision.
            </h1>
          </AnimateIn>
          <div className="space-y-8">
            <AnimateIn direction="up" delay={0.2}>
              <div className="border-l-2 border-primary pl-8">
                <h3 className="text-primary text-[10px] font-extrabold uppercase tracking-[0.3em] mb-4">
                  Engineering Philosophy
                </h3>
                
                <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl">
                  I build digital products that{" "}
                  <span className="text-white font-bold">
                    users love and businesses can actually scale
                  </span>. I move fast while writing clean code that doesn’t create
                  headaches down the road.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.3}>
              <div className="pl-8">
                <h3 className="text-white/40 text-[10px] font-extrabold uppercase tracking-[0.3em] mb-4">
                  Professional Background
                </h3>
                <TextLightUp
                  className="text-base leading-relaxed max-w-2xl mb-6"
                  delay={0.35}
                >
                  I’m a product-minded full-stack engineer who turns ideas into polished, revenue-driving web applications. With over 3 years of experience, I help founders and teams build products that users love and businesses can scale.
                </TextLightUp>
                <TextLightUp
                  className="text-base leading-relaxed max-w-2xl"
                  delay={0.55}
                >
                  I specialize in taking products from zero to one — moving fast without cutting corners, so you can launch with confidence and grow smoothly.
                </TextLightUp>
              </div>
            </AnimateIn>
          </div>
        </div>
        <AnimateIn direction="left" delay={0.2} className="md:col-span-5 flex flex-col items-center md:items-end">
          <div className="relative w-full max-w-100 about-image-container group">
            <div className="aspect-4/5 bg-surface overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <Image
                alt="Mayowa Profile"
                fill
                className="object-cover"
                src={"/images/profile.png"}
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background-dark border border-white/5 p-6 backdrop-blur-xl">
              <p className="text-white font-bold text-3xl">
                Ibadan | Akure, NG
              </p>
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

      <section className="grid grid-cols-1 md:grid-cols-4 gap-8 py-20 border-t border-white/5 mb-20">
        <AnimateIn direction="up" delay={0}>
          <div className="md:col-span-1">
            <h2 className="text-primary text-[12px] font-extrabold uppercase tracking-[0.3em] mb-4">
              Values
            </h2>
          </div>
        </AnimateIn>
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-12">
          <AnimateIn direction="up" delay={0.1}>
            <div className="space-y-4">
              <Rocket className="material-symbols-outlined text-primary text-3xl" />
              <h4 className="text-white font-bold text-lg uppercase tracking-tight">
                Shipping Value
              </h4>
              <p className="text-white/50 text-sm leading-relaxed">
                I focus on outcomes that matter — features that increase conversions, improve user satisfaction, and move your business forward.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.2}>
            <div className="space-y-4">
              <DraftingCompass className="material-symbols-outlined text-primary text-3xl" />
              <h4 className="text-white font-bold text-lg uppercase tracking-tight">
                Sustainable Growth
              </h4>
              <p className="text-white/50 text-sm leading-relaxed">
                I write clean, organized code so your product can evolve easily as your team and customer base grow.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.3}>
            <div className="space-y-4">
              <CircleGauge className="material-symbols-outlined text-primary text-3xl" />
              <h4 className="text-white font-bold text-lg uppercase tracking-tight">
                Smooth Experience
              </h4>
              <p className="text-white/50 text-sm leading-relaxed">
                I obsess over speed and responsiveness so your users enjoy a fast, delightful product on any device.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      <AnimateIn direction="up" delay={0} className="mb-32">
        <div className="bg-surface border border-white/5 p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
          <h2 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight mb-8 relative z-10">
            Have a product idea that <br />
            needs expert execution?
          </h2>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <Link
              href="/contact"
              className="flex min-w-60 cursor-pointer items-center justify-center rounded h-14 px-8 bg-primary text-white text-sm font-extrabold uppercase tracking-widest hover:brightness-110 transition-all"
            >
              Start Collaboration
            </Link>
            <Link
              href="/projects"
              className="flex min-w-50 cursor-pointer items-center justify-center rounded h-14 px-8 bg-transparent border border-white/20 text-white text-sm font-extrabold uppercase tracking-widest hover:border-white transition-all"
            >
              View Projects
            </Link>
          </div>
        </div>
      </AnimateIn>
    </>
  );
}
