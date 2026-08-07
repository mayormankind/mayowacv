import { socials } from "@/lib/data";
import Link from "next/link";
import React from "react";
import { Linkedin, Twitter, Github } from "lucide-react";

const socialIconMap: Record<string, React.ElementType> = {
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Github: Github,
};

export default function Footer() {
  return (
    <footer className="px-6 md:px-20 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-6">
        <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em]">
          Based in Ibadan, NG
        </p>
        <div className="w-1 h-1 rounded-full bg-white/20"></div>
        <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Makinde Mayowa
        </p>
      </div>
      <div className="flex gap-5">
        {socials.map((social) => {
          const Icon = socialIconMap[social.label];
          return (
            <Link
              key={social.label}
              href={social.ref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-white/30 hover:text-primary transition-colors"
            >
              {Icon ? <Icon size={16} /> : <span className="text-[10px] font-bold uppercase tracking-widest">{social.label}</span>}
            </Link>
          );
        })}
      </div>
    </footer>
  );
}
