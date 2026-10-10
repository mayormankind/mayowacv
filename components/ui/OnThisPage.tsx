// components/ui/OnThisPage.tsx
"use client";

import { useEffect, useState } from "react";

export interface TocSection {
  id: string;
  label: string;
}

/**
 * "On this page" mini-nav for the sticky sidebar. Highlights the section
 * currently in view via IntersectionObserver. Hidden on mobile.
 */
export default function OnThisPage({ sections }: { sections: TocSection[] }) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  if (sections.length === 0) return null;

  return (
    <nav aria-label="On this page" className="hidden lg:block">
      <p className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] mb-5">
        On this page
      </p>
      <ul className="space-y-3 border-l border-white/10">
        {sections.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={isActive ? "location" : undefined}
                className={`-ml-px block border-l-2 pl-4 text-sm transition-colors ${
                  isActive
                    ? "border-primary text-white font-semibold"
                    : "border-transparent text-white/45 hover:text-white"
                }`}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
