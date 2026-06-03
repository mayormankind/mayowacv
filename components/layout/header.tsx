"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

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
      <Link href="/" className="flex items-center gap-3">
        <div className="size-6 text-primary">
          <Image src="/favicon.ico" alt="Mayowa" width={24} height={24} />
        </div>
        <h2 className="-ml-3 text-white text-xl font-extrabold leading-tight tracking-tighter uppercase">
          ayowa
        </h2>
      </Link>

      {/* Desktop Navigation */}
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
        <Link
          href="/assets/Makinde Mayowa CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-w-30 cursor-pointer items-center justify-center rounded h-10 px-6 bg-surface border border-white/10 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
        >
          Resume
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-white p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-full left-0 w-full bg-[#1A1A1A] border-b border-white/5 md:hidden flex flex-col p-6 gap-6 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((nav, i) => (
                <motion.div
                  key={nav.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.22, delay: i * 0.06, ease: "easeOut" }}
                >
                  <Link
                    href={nav.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-sm font-bold uppercase tracking-widest py-2 transition-colors ${
                      isActive(nav.href)
                        ? "text-primary"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {nav.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Link
                href="/assets/Makinde Mayowa CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex cursor-pointer items-center justify-center rounded h-10 px-6 bg-surface border border-white/10 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
              >
                Resume
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
