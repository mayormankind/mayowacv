import React from "react";
import { ArrowRight } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";

interface CTASectionProps {
  eyebrow: string;
  headline: string;
  accent?: string;
  body: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  eyebrow,
  headline,
  accent,
  body,
  primaryLabel = "Start a Project",
  primaryHref = "/contact",
  secondaryLabel = "View My Work",
  secondaryHref = "/projects",
}: CTASectionProps) {
  return (
    <section className="py-24 border-t border-white/5">
      <AnimateIn direction="up" delay={0}>
        <div className="relative bg-surface border border-white/5 p-12 md:p-24 overflow-hidden flex flex-col items-center text-center">
          <div
            aria-hidden
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/[0.04] blur-[120px] rounded-full pointer-events-none"
          />

          <SectionHeader
            align="center"
            eyebrow={eyebrow}
            title={
              <>
                {headline}{" "}
                {accent && <span className="text-primary">{accent}</span>}
              </>
            }
            description={body}
          />

          <div className="relative z-10 flex flex-wrap justify-center gap-5 mt-10">
            <Button
              href={primaryHref}
              variant="primary"
              size="lg"
              className="group min-w-52"
            >
              {primaryLabel}
              <ArrowRight
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                aria-hidden
              />
            </Button>
            <Button
              href={secondaryHref}
              variant="secondary"
              size="lg"
              className="min-w-44"
            >
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
