"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Stack", href: "/stacks" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/5 px-6 md:px-20 py-6 sticky top-0 bg-background-dark/80 backdrop-blur-md z-50">
      <div className="flex items-center gap-3">
        <div className="size-6 text-primary">
          <svg
            fill="currentColor"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"></path>
          </svg>
        </div>
        <h2 className="text-white text-xl font-extrabold leading-tight tracking-tighter uppercase">
          Mayowa
        </h2>
      </div>
      <div className="hidden md:flex flex-1 justify-end gap-12 items-center">
        <div className="flex items-center gap-10">
          {navLinks.map((nav) => (
            <Link
              key={nav.href}
              className={`relative text-xs font-bold uppercase tracking-widest transition-colors ${
                isActive(nav.href)
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
              href={nav.href}
            >
              {nav.label}
              {isActive(nav.href) && (
                <span className="absolute -bottom-2 left-0 h-px w-full bg-primary" />
              )}
            </Link>
          ))}
        </div>
        <button className="flex min-w-30 cursor-pointer items-center justify-center rounded h-10 px-6 bg-surface border border-white/10 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
          Resume
        </button>
      </div>
    </header>
  );
}
