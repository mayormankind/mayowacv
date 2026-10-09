import { socials } from "@/lib/data";
import { SITE } from "@/lib/site-config";
import SocialIcon from "@/components/ui/SocialIcon";
import React from "react";

export default function Footer() {
  return (
    <footer className="px-6 md:px-20 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-col items-center gap-6 md:flex-row">
        <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em]">
          Based in {SITE.location}
        </p>
        <div className="w-1 h-1 rounded-full bg-white/20"></div>
        <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} {SITE.name}
        </p>
      </div>
      <div className="flex gap-2">
        {socials.map((social) => (
          <a
            key={social.id}
            href={social.ref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${social.label} (opens in a new tab)`}
            className="p-3 text-white/60 hover:text-primary transition-colors"
          >
            <SocialIcon id={social.id} size={20} />
          </a>
        ))}
      </div>
    </footer>
  );
}
