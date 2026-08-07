"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Compass,
  Layers,
  Code2,
  Rocket,
  Heart,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    number: "01",
    Icon: Compass,
    title: "Discovery",
    description:
      "We begin with your goals, product vision, users, timeline, and business requirements. This ensures we're solving the right problem before writing any code.",
    deliverables: [
      "Product discussion",
      "Scope definition",
      "Technical recommendations",
      "Initial timeline",
    ],
  },
  {
    number: "02",
    Icon: Layers,
    title: "Planning",
    description:
      "Once requirements are clear, I define the technical architecture, choose the right stack, and break the project into manageable milestones. Every decision is made with long-term maintainability in mind.",
    deliverables: [
      "Architecture",
      "Database design",
      "API planning",
      "Milestones",
    ],
  },
  {
    number: "03",
    Icon: Code2,
    title: "Build",
    description:
      "Development happens in short iterations with regular progress updates. You'll always know what's being built and have opportunities to provide feedback before launch.",
    deliverables: [
      "Weekly progress",
      "Live previews",
      "Feature implementation",
      "Continuous testing",
    ],
  },
  {
    number: "04",
    Icon: Rocket,
    title: "Launch",
    description:
      "Before release, everything is tested, optimized, and deployed using production-ready practices. Performance, responsiveness, and stability are treated as real priorities, not afterthoughts.",
    deliverables: [
      "Deployment",
      "QA testing",
      "Performance optimization",
      "Production release",
    ],
  },
  {
    number: "05",
    Icon: Heart,
    title: "Support",
    description:
      "Launching is only the beginning. I remain available for improvements, new features, bug fixes, and future iterations as your product grows.",
    deliverables: [
      "Maintenance",
      "Improvements",
      "Scaling",
      "Long-term partnership",
    ],
  },
  {
    number: "06",
    Icon: TrendingUp,
    title: "Iterate",
    description:
      "Real-world usage reveals what documentation cannot. I help analyse product performance, gather user signals, and implement targeted improvements that compound over time.",
    deliverables: [
      "Usage analytics",
      "User feedback loops",
      "Performance tuning",
      "Feature evolution",
    ],
  },
];

function StageCard({
  stage,
  index,
}: {
  stage: (typeof stages)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { Icon } = stage;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      className="group relative flex-1 min-w-0 bg-surface border border-white/5 p-6 md:p-8 flex flex-col
                 hover:border-white/15 transition-colors duration-400 cursor-default
                 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.06)]"
    >
      {/* Stage number — large faded background numeral */}
      <div
        aria-hidden
        className="absolute top-4 right-6 text-7xl font-extrabold leading-none select-none
                   text-white/[0.04] group-hover:text-white/[0.07] transition-colors duration-400"
      >
        {stage.number}
      </div>

      {/* Stage label */}
      <p className="text-primary text-[10px] font-extrabold uppercase tracking-[0.35em] mb-5">
        {stage.number}
      </p>

      {/* Icon */}
      <motion.div
        className="text-primary mb-5"
        animate={{ rotate: 0 }}
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Icon className="w-6 h-6" strokeWidth={1.5} />
      </motion.div>

      {/* Title */}
      <h3 className="text-white font-extrabold text-xl tracking-tight mb-3">
        {stage.title}
      </h3>

      {/* Description */}
      <p className="text-white/45 text-sm leading-relaxed mb-7 flex-1">
        {stage.description}
      </p>

      {/* Deliverables */}
      <ul className="space-y-1.5">
        {stage.deliverables.map((item, i) => (
          <li key={i} className="flex items-center gap-2.5">
            <span className="text-primary text-xs font-bold shrink-0">✓</span>
            <span className="text-white/35 text-xs font-medium tracking-wide">
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* Bottom accent line — slides in on hover */}
      <span
        aria-hidden
        className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary
                   group-hover:w-full transition-all duration-500 ease-out"
      />
    </motion.div>
  );
}

function SectionHeader() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="mb-16 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center gap-4 mb-6"
      >
        <span className="w-8 h-px bg-primary shrink-0" />
        <span className="text-primary text-[10px] font-extrabold uppercase tracking-[0.4em]">
          Development Process
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6"
      >
        What It&apos;s Like{" "}
        <span className="text-primary italic">Working Together.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="text-white/50 text-lg leading-relaxed"
      >
        Building software is more than writing code. Every project follows a
        structured process that keeps communication clear, development
        predictable, and delivery focused on business outcomes—not surprises.
      </motion.p>
    </div>
  );
}

function Callout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="mt-16 border border-white/5 bg-surface p-10 md:p-16 relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute top-0 right-0 w-80 h-80 bg-primary/[0.03] blur-[120px] rounded-full pointer-events-none"
      />
      <div className="relative z-10 max-w-2xl">
        <h3 className="text-white text-2xl md:text-3xl font-extrabold tracking-tight mb-4">
          Transparent from day one.
        </h3>
        <p className="text-white/50 text-base leading-relaxed mb-8">
          You&apos;ll never wonder what&apos;s happening with your project.
          Expect regular updates, collaborative feedback, and clear
          communication throughout the entire development cycle.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-white font-extrabold text-sm
                     uppercase tracking-widest hover:text-primary transition-colors duration-200 group"
        >
          Start Your Project
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function WorkingTogether() {
  return (
    <section className="py-24 border-t border-white/5">
      <SectionHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px">
        {stages.map((stage, index) => (
          <StageCard key={stage.number} stage={stage} index={index} />
        ))}
      </div>

      <Callout />
    </section>
  );
}
