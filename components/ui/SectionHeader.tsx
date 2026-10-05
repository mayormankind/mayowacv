import React from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <div
      className={`flex flex-col ${
        centered ? "items-center text-center" : "items-start"
      } ${className ?? ""}`}
    >
      <div
        className={`flex items-center gap-4 mb-4 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-primary shrink-0" aria-hidden />
        <span className="text-primary text-xs font-bold uppercase tracking-[0.25em]">
          {eyebrow}
        </span>
        {centered && (
          <span className="h-px w-8 bg-primary shrink-0" aria-hidden />
        )}
      </div>
      <h2 className="text-white text-3xl md:text-5xl font-extrabold tracking-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-lg text-white/65 leading-relaxed max-w-[60ch] mt-4 text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
