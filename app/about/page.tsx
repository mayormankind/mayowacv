import { CircleGauge, DraftingCompass, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about my engineering philosophy, background, and the values that drive my work.",
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
      <div className="flex items-center justify-between pt-12 md:pt-20 mb-8">
        <div className="flex items-center gap-3">
          <span className="text-primary text-[10px] font-extrabold tracking-[0.3em] uppercase">
            About Mayowa
          </span>
          <span className="w-8 h-1px bg-white/10"></span>
          <span className="text-white/30 text-[10px] font-bold tracking-[0.3em] uppercase underline underline-offset-4">
            01. Identity
          </span>
        </div>
        <div className="flex h-8 items-center justify-center gap-x-2 rounded bg-white px-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <p className="text-black text-[10px] font-extrabold tracking-[0.2em] uppercase">
            Available for Work
          </p>
        </div>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 mb-32">
        <div className="md:col-span-7">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-[-0.04em] mb-10">
            Shipping <span className="text-primary italic">human-centric</span>{" "}
            solutions with precision.
          </h1>
          <div className="space-y-8">
            <div className="border-l-2 border-primary pl-8">
              <h3 className="text-primary text-[10px] font-extrabold uppercase tracking-[0.3em] mb-4">
                Engineering Philosophy
              </h3>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl">
                I build with the user in mind, ensuring every line of code
                contributes to{" "}
                <span className="text-white font-bold">meaningful value</span>.
                I balance rapid shipping with long-term maintainability,
                treating performance as a core component of the user experience.
              </p>
            </div>
            <div className="pl-8">
              <h3 className="text-white/40 text-[10px] font-extrabold uppercase tracking-[0.3em] mb-4">
                Professional Background
              </h3>
              <p className="text-white/60 text-base leading-relaxed max-w-2xl mb-6">
                With over 3 years as a product-minded full-stack engineer, I've
                transformed complex business requirements into seamless digital
                experiences. My approach centers on deep collaboration,
                iterative development, and a mastery of modern
                JavaScript/TypeScript ecosystems to solve real-world client
                problems.
              </p>
              <p className="text-white/60 text-base leading-relaxed max-w-2xl">
                I specialize in taking products from zero to one, scaling
                applications that users love while maintaining a clean,
                extensible codebase that teams can iterate on with confidence.
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 flex flex-col items-center md:items-end">
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
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8 py-20 border-t border-white/5 mb-20">
        <div className="md:col-span-1">
          <h2 className="text-primary text-[12px] font-extrabold uppercase tracking-[0.3em] mb-4">
            Values
          </h2>
        </div>
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <Rocket className="material-symbols-outlined text-primary text-3xl" />
            <h4 className="text-white font-bold text-lg uppercase tracking-tight">
              Shipping Value
            </h4>
            <p className="text-white/50 text-sm leading-relaxed">
              Focusing on outcomes over outputs. Deploying features that move
              the needle for users and the business.
            </p>
          </div>
          <div className="space-y-4">
            <DraftingCompass className="material-symbols-outlined text-primary text-3xl" />
            <h4 className="text-white font-bold text-lg uppercase tracking-tight">
              Maintainable Growth
            </h4>
            <p className="text-white/50 text-sm leading-relaxed">
              Writing clean, modular code that allows the product to evolve
              without the friction of technical debt.
            </p>
          </div>
          <div className="space-y-4">
            <CircleGauge className="material-symbols-outlined text-primary text-3xl" />
            <h4 className="text-white font-bold text-lg uppercase tracking-tight">
              Perceived Performance
            </h4>
            <p className="text-white/50 text-sm leading-relaxed">
              Optimizing for the critical rendering path to ensure a snappy,
              high-quality experience on every device.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-32">
        <div className="bg-surface border border-white/5 p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>
          <h2 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight mb-8 relative z-10">
            Have a product idea that <br />
            needs expert execution?
          </h2>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <Link
              href={"/contact"}
              className="flex min-w-60 cursor-pointer items-center justify-center rounded h-14 px-8 bg-primary text-white text-sm font-extrabold uppercase tracking-widest hover:brightness-110 transition-all"
            >
              Start Collaboration
            </Link>
            <Link
              href={"/projects"}
              className="flex min-w-50 cursor-pointer items-center justify-center rounded h-14 px-8 bg-transparent border border-white/20 text-white text-sm font-extrabold uppercase tracking-widest hover:border-white transition-all"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
