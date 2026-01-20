import { ArrowUpRight, Send, SendHorizonal } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ContactPage() {
  const socials = [
    {
      label: "LinkedIn",
      ref: "https://www.linkedin.com/in/makinde-mayowa-4670a51bb",
    },
    { label: "Github", ref: "https://github.com/mayormankind" },
    { label: "Twitter", ref: "https://github.com/mayormankind" },
  ];
  return (
    <div className="max-w-7xl mx-auto pt-12 md:pt-20 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="size-1.5 rounded-full bg-primary animate-pulse"></span>
              <span className="text-primary text-[10px] font-extrabold uppercase tracking-[0.3em]">
                Open for collaboration
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-[-0.04em] leading-[0.9] mb-8">
              Building <br />
              Digital <span className="text-primary">Products</span>.
            </h1>
            <p className="text-white/40 text-lg md:text-xl font-normal leading-relaxed max-w-md mb-12">
              Specializing in scaling web applications and turning complex
              requirements into high-performance product MVPs.
            </p>
          </div>
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">
                Current Location
              </p>
              <div className="flex items-end gap-4">
                <div>
                  <p className="text-white text-xl font-bold">Lagos, NG</p>
                  <p className="text-white/40 text-sm">GMT +1</p>
                </div>
                <div className="h-10 w-px bg-white/5 mx-2"></div>
                <div id="clock">
                  <p
                    className="text-white text-xl font-bold uppercase"
                    id="local-time"
                  >
                    12:00 PM
                  </p>
                  <p className="text-white/40 text-sm">Local Time</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">
                Digital Presence
              </p>
              <div className="flex flex-wrap gap-6">
                {socials.map((social) => (
                  <Link
                    key={social.label}
                    className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                    href={social.ref}
                  >
                    <span className="text-sm font-bold uppercase tracking-widest">
                      {social.label}
                    </span>
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      <ArrowUpRight />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="bg-surface/50 backdrop-blur-sm border border-white/5 p-8 md:p-12 rounded-xl">
            <form action="#" className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-3">
                  <label className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] ml-1">
                    Your Name
                  </label>
                  <input
                    className="w-full bg-input-bg border border-white/20 rounded-lg py-4 px-6 text-white placeholder:text-white/20 outline-none ring-0 focus:ring-0 focus:border-primary/50 transition-all duration-300"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] ml-1">
                    Email Address
                  </label>
                  <input
                    className="w-full bg-input-bg border border-white/20 rounded-lg py-4 px-6 text-white placeholder:text-white/20 outline-none ring-0 focus:ring-0 focus:border-primary/50 transition-all duration-300"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] ml-1">
                  How can I help?
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <label className="cursor-pointer">
                    <input
                      checked={true}
                      className="hidden peer"
                      name="project"
                      type="radio"
                    />
                    <div className="flex items-center justify-center h-14 px-4 text-center border border-white/5 rounded-lg bg-input-bg text-[9px] font-bold uppercase tracking-widest text-white/40 peer-checked:border-primary peer-checked:text-white peer-checked:bg-primary/5 transition-all">
                      Product MVP
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input
                      className="hidden peer"
                      name="project"
                      type="radio"
                    />
                    <div className="flex items-center justify-center h-14 px-4 text-center border border-white/5 rounded-lg bg-input-bg text-[9px] font-bold uppercase tracking-widest text-white/40 peer-checked:border-primary peer-checked:text-white peer-checked:bg-primary/5 transition-all">
                      Full-stack Development
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input
                      className="hidden peer"
                      name="project"
                      type="radio"
                    />
                    <div className="flex items-center justify-center h-14 px-4 text-center border border-white/5 rounded-lg bg-input-bg text-[9px] font-bold uppercase tracking-widest text-white/40 peer-checked:border-primary peer-checked:text-white peer-checked:bg-primary/5 transition-all">
                      Scaling &amp; Optm.
                    </div>
                  </label>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] ml-1">
                  Tell me about your vision
                </label>
                <textarea
                  className="w-full bg-input-bg border border-white/20 rounded-lg py-4 px-6 text-white placeholder:text-white/20 resize-none outline-none ring-0 focus:ring-0 focus:border-primary/50 transition-all duration-300"
                  placeholder="Describe the digital product you're looking to build or scale..."
                  rows={5}
                ></textarea>
              </div>
              <div className="pt-4">
                <button
                  className="w-full md:w-auto flex min-w-60 items-center justify-center gap-3 rounded h-16 px-10 bg-primary text-white text-sm font-extrabold uppercase tracking-widest cta-glow hover:brightness-110 active:scale-[0.98] transition-all"
                  type="submit"
                >
                  Send Inquiry
                  <SendHorizonal className="material-symbols-outlined text-lg" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
