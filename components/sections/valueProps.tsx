//components/sections/valueProps.tsx
import React from "react";

export default function ValueProps() {
  const coreStacks = [
    { label: "React" },
    { label: "Next.js" },
    { label: "Node.js" },
    { label: "JavaScript" },
    { label: "TypeScript" },
    { label: "Tailwind CSS" },
    { label: "MongoDB" },
    { label: "Supabase" },
    { label: "Firebase" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-20 border-t border-white/5">
      <div className="flex flex-col gap-4">
        <p className="text-primary text-[10px] font-extrabold uppercase tracking-[0.3em]">
          Full-Stack Focus
        </p>
        <p className="text-white/80 text-sm leading-loose">
          Expertise in building responsive, state-managed interfaces and secure,
          data-driven backends. I specialize in rapid development cycles without
          compromising on production quality.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-primary text-[10px] font-extrabold uppercase tracking-[0.3em]">
          Product Mindset
        </p>
        <p className="text-white/80 text-sm leading-loose">
          Code is a means to an end. My goal is to ship features that users love
          and businesses depend on. I prioritize clean architecture, intuitive
          UX, and seamless deployments.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-primary text-[10px] font-extrabold uppercase tracking-[0.3em]">
          Core Tech Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {coreStacks.map((stack, id) => (
            <span
              key={id}
              className="px-3 py-1 bg-surface border border-white/5 text-[10px] font-bold uppercase tracking-widest rounded"
            >
              {stack.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
