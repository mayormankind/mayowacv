// components/sections/CaseStudyGrid.tsx
import { ChevronDown } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import type { CaseStudySection, Project } from "@/lib/data";

function CaseStudyCard({ section }: { section: CaseStudySection }) {
  return (
    <div className="space-y-6">
      <p className="text-primary text-xs font-extrabold uppercase tracking-[0.3em]">
        {section.subtitle}
      </p>
      <h3 className="text-2xl font-bold leading-tight">{section.title}</h3>
      <details className="group/case details-clamp">
        <div className="details-clamp-content text-white/70 text-base leading-relaxed line-clamp-[8] group-open/case:line-clamp-none max-w-[65ch]">
          {section.description}
        </div>
        <summary className="mt-4 inline-flex list-none items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-white/60 transition-colors hover:text-primary cursor-pointer [&::-webkit-details-marker]:hidden">
          <span className="group-open/case:hidden">Read more</span>
          <span className="hidden group-open/case:inline">Show less</span>
          <ChevronDown
            className="size-3.5 transition-transform group-open/case:rotate-180"
            aria-hidden
          />
        </summary>
      </details>
    </div>
  );
}

export default function CaseStudyGrid({
  details,
}: {
  details: Project["details"];
}) {
  const sections = [
    details?.challenge,
    details?.strategy,
    details?.impact,
  ].filter((s): s is CaseStudySection => Boolean(s));

  if (sections.length === 0) return null;

  return (
    <div className="max-w-7xl px-6 md:px-0 mx-auto">
      <SectionHeader
        eyebrow="Case study"
        title="The story in three parts"
        className="mb-16"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
        {sections.map((section, idx) => (
          <CaseStudyCard
            key={section.subtitle || section.title || idx}
            section={section}
          />
        ))}
      </div>
    </div>
  );
}
