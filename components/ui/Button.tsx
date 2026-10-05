import Link from "next/link";
import React from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary text-white cta-glow hover:brightness-110",
  secondary: "border border-white/15 text-white hover:border-white/40",
  ghost: "text-white/60 hover:text-white",
};

const sizeClasses: Record<Size, string> = {
  md: "min-h-11 px-6 text-xs",
  lg: "min-h-14 px-8 text-sm",
};

interface ButtonProps {
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  onClick?: () => void;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  href,
  variant = "primary",
  size = "lg",
  className,
  children,
  target,
  rel,
  onClick,
  ariaLabel,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 font-extrabold uppercase tracking-widest rounded-md transition-all cursor-pointer ${variantClasses[variant]} ${sizeClasses[size]} ${className ?? ""}`;

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        aria-label={ariaLabel}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      className={`${classes} disabled:opacity-60 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
}
