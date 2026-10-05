"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { socials } from "@/lib/data";
import SocialIcon from "@/components/ui/SocialIcon";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-6 md:px-20 py-6 sticky top-0 bg-background-dark/90 backdrop-blur-md z-50">
        <Link href="/" aria-label="Mayowa, home" className="flex items-center gap-3">
          <div className="size-6 text-primary">
            <Image src="/images/logo.png" alt="Mayowa" width={24} height={24} />
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
                aria-current={isActive(nav.href) ? "page" : undefined}
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
            <Link
              href="/assets/mayowa-makinde-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
            >
              Resume
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="flex min-h-11 cursor-pointer items-center justify-center rounded-md px-6 bg-primary text-white text-xs font-extrabold uppercase tracking-widest cta-glow hover:brightness-110 transition-all"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2.5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu — full-screen slide-in from right */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            {/* Panel */}
            <motion.div
              key="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-[#111111] border-l border-white/5 z-50 md:hidden flex flex-col p-8 shadow-2xl"
            >
              {/* Signature name + close */}
              <div className="flex items-center justify-between mb-12">
                <Link href="/" onClick={() => setIsOpen(false)} aria-label="Mayowa, home" className="flex items-center gap-3">
                  <div className="size-6 text-primary">
                    <Image src="/images/logo.png" alt="Mayowa" width={24} height={24} />
                  </div>
                  <h2 className="-ml-3 text-white text-xl font-extrabold leading-tight tracking-tighter uppercase">
                    ayowa
                  </h2>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/50 hover:text-white transition-colors p-1"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="flex flex-col flex-1">
                {navLinks.map((nav, i) => (
                  <motion.div
                    key={nav.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: 0.1 + i * 0.06, ease: "easeOut" }}
                  >
                    <Link
                      href={nav.href}
                      onClick={() => setIsOpen(false)}
                      aria-current={isActive(nav.href) ? "page" : undefined}
                      className={`flex items-center justify-between py-4 border-b border-white/5 text-sm font-bold uppercase tracking-widest transition-colors group ${
                        isActive(nav.href) ? "text-primary" : "text-white/50 hover:text-white"
                      }`}
                    >
                      {nav.label}
                      {isActive(nav.href) && (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      )}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: 0.1 + navLinks.length * 0.06, ease: "easeOut" }}
                  className="mt-6"
                >
                  <div className="flex flex-col gap-4">
                    <Link
                      href="/contact"
                      className="w-full flex cursor-pointer items-center justify-center rounded-md min-h-11 px-6 bg-primary text-white text-xs font-extrabold uppercase tracking-widest cta-glow hover:brightness-110 transition-all"
                    >
                      Contact
                    </Link>
                    <Link
                      href="/assets/mayowa-makinde-cv.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex cursor-pointer items-center justify-center rounded-md min-h-11 px-6 border border-white/15 text-white/70 text-xs font-bold uppercase tracking-widest hover:border-white/40 hover:text-white transition-all"
                    >
                      Resume
                    </Link>
                  </div>
                </motion.div>
              </nav>

              {/* Social contacts */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="mt-auto pt-8 border-t border-white/5"
              >
                <p className="text-white/20 text-[9px] font-extrabold uppercase tracking-[0.4em] mb-5">
                  Connect
                </p>
                <div className="flex items-center gap-5">
                  {socials.map((s) => (
                    <a
                      key={s.id}
                      href={s.ref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${s.label} (opens in a new tab)`}
                      className="text-white/60 hover:text-white transition-colors p-2.5"
                    >
                      <SocialIcon id={s.id} size={18} />
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
