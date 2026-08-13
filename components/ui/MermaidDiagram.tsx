"use client";

import React, { useEffect, useRef, useState } from "react";
import { Network } from "lucide-react";

interface MermaidDiagramProps {
  syntax: string;
  title?: string;
  description?: string;
}

let instanceId = 0;

export default function MermaidDiagram({ syntax, title, description }: MermaidDiagramProps) {
  const [svg, setSvg] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const idRef = useRef(`mermaid-${++instanceId}`);

  useEffect(() => {
    if (!syntax?.trim()) return;

    let cancelled = false;

    async function render() {
      try {
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({
          startOnLoad: false,
          theme: "dark",
          themeVariables: {
            background: "transparent",
            primaryColor: "#de1b1b",
            primaryTextColor: "#ffffff",
            primaryBorderColor: "#de1b1b33",
            lineColor: "#de1b1b",
            secondaryColor: "#ffffff08",
            tertiaryColor: "#ffffff05",
            edgeLabelBackground: "#0d0d0d",
            clusterBkg: "#ffffff05",
            titleColor: "#ffffff80",
            nodeTextColor: "#ffffff",
            fontFamily: "Manrope, sans-serif",
          },
        });

        const { svg: rendered } = await mermaid.render(idRef.current, syntax.trim());
        if (!cancelled) {
          setSvg(rendered);
          setError(false);
        }
      } catch {
        if (!cancelled) setError(true);
      }
    }

    render();
    return () => { cancelled = true; };
  }, [syntax]);

  // No syntax — show placeholder
  if (!syntax?.trim()) {
    return (
      <div className="aspect-video bg-black/40 rounded border border-dashed border-white/20 flex flex-col items-center justify-center gap-4 text-center px-8">
        <Network className="text-white/20 size-16" />
        <div>
          <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-2">
            {title}
          </p>
          <p className="text-white/20 text-xs">{description}</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="aspect-video bg-black/40 rounded border border-dashed border-white/20 flex flex-col items-center justify-center gap-4 text-center px-8">
        <Network className="text-white/20 size-16" />
        <p className="text-white/30 text-xs">Diagram unavailable</p>
      </div>
    );
  }

  if (!svg) {
    return (
      <div className="aspect-video bg-black/40 rounded border border-dashed border-white/10 animate-pulse" />
    );
  }

  return (
    <div
      className="w-full overflow-auto bg-black/30 rounded border border-white/10 p-6 flex items-center justify-center [&_svg]:max-w-full [&_svg]:h-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
