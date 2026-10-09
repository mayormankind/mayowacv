"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Project } from "@/lib/data";

type CaseStudySection = Project["details"]["challenge"];

function CaseStudyCard({ section }: { section: CaseStudySection }) {
  const [expanded, setExpanded] = useState(false);
  const [truncatable, setTruncatable] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const check = () =>
      setTruncatable(el.scrollHeight > el.clientHeight + 1);
    check();

    const observer = new ResizeObserver(check);
    observer.observe(el);
    return () => observer.disconnect();
  }, [section.description]);

  return (
    <div className="space-y-6">
      <p className="text-primary text-[10px] font-extrabold uppercase tracking-[0.3em]">
        {section.subtitle}
      </p>
      <h3 className="text-2xl font-bold leading-tight">{section.title}</h3>
      <p
        ref={textRef}
        className={`text-white/50 text-sm leading-loose ${
          expanded ? "" : "line-clamp-4"
        }`}
      >
        {section.description}
      </p>
      {(truncatable || expanded) && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-white/60 transition-colors hover:text-primary"
        >
          {expanded ? "Show less" : "Read more"}
          <ChevronDown
            className={`size-3.5 transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      )}
    </div>
  );
}

export default function CaseStudyGrid({
  details,
}: {
  details: Project["details"];
}) {
  return (
    <div className="max-w-7xl px-6 md:px-0 mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
      <CaseStudyCard section={details.challenge} />
      <CaseStudyCard section={details.strategy} />
      <CaseStudyCard section={details.impact} />
    </div>
  );
}
