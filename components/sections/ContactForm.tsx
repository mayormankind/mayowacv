"use client";
import { Linkedin, Twitter, Github, Mail, Phone, SendHorizonal, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { socials } from "@/lib/data";
import AnimateIn from "@/components/ui/AnimateIn";

const socialIconMap: Record<string, React.ElementType> = {
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Github: Github,
};

const PROJECT_TYPES = ["Product MVP", "Full-stack Dev", "Scaling & Optimization", "Consultation"];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: PROJECT_TYPES[0],
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleProjectType = (type: string) => {
    setForm((prev) => ({ ...prev, projectType: type }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("success");
      setForm({ name: "", email: "", projectType: PROJECT_TYPES[0], message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  return (
    <div className="max-w-7xl mx-auto pt-12 md:pt-20 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-stretch">

        {/* Left: Info panel */}
        <AnimateIn direction="up" delay={0.1} className="lg:col-span-4 flex flex-col gap-10">
          {/* Section label */}
          <div className="flex items-center gap-4">
            <span className="w-8 h-px bg-primary shrink-0" />
            <span className="text-primary text-[10px] font-extrabold uppercase tracking-[0.4em]">
              Contact
            </span>
          </div>

          {/* Heading */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-[1.1] mb-5">
              Let&apos;s Build <br />
              Something <span className="text-primary">Great</span>.
            </h1>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs">
              Open to contracts, full-time roles, and interesting projects.
              If you have a problem worth solving, reach out.
            </p>
          </div>

          {/* Direct contact */}
          <div className="space-y-3">
            <p className="text-white/20 text-[9px] font-bold uppercase tracking-[0.35em]">
              Direct
            </p>
            <a
              href="mailto:mayowamakinde23@gmail.com"
              className="flex items-center gap-3 text-white/50 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <span className="text-sm font-bold">mayowamakinde23@gmail.com</span>
            </a>
            <a
              href="tel:+2347040829383"
              className="flex items-center gap-3 text-white/50 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <span className="text-sm font-bold">+234 704 082 9383</span>
            </a>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <p className="text-white/20 text-[9px] font-bold uppercase tracking-[0.35em]">
              Location
            </p>
            <p className="text-white text-base font-bold">Ibadan / Akure, NG</p>
            <p className="text-white/40 text-xs">GMT +1</p>
          </div>

          {/* Social icons */}
          <div className="space-y-3 mt-auto">
            <p className="text-white/20 text-[9px] font-bold uppercase tracking-[0.35em]">
              Find me online
            </p>
            <div className="flex items-center gap-5">
              {socials.map((social) => {
                const Icon = socialIconMap[social.label];
                return (
                  <Link
                    key={social.label}
                    href={social.ref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-white/40 hover:text-white transition-colors"
                  >
                    {Icon ? <Icon size={18} /> : <span className="text-xs font-bold">{social.label}</span>}
                  </Link>
                );
              })}
            </div>
          </div>
        </AnimateIn>

        {/* Right: Form */}
        <AnimateIn direction="up" delay={0.25} className="lg:col-span-8">
          <div className="bg-surface/50 backdrop-blur-sm border border-white/5 p-8 md:p-12 rounded-xl">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center gap-6 py-16 text-center">
                <CheckCircle2 className="w-16 h-16 text-green-400" />
                <h3 className="text-2xl font-extrabold">Message Sent!</h3>
                <p className="text-white/50 max-w-sm">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-8 h-12 rounded-lg border border-white/10 text-white text-[10px] font-extrabold uppercase tracking-widest hover:border-primary hover:text-primary transition-all"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-3">
                    <label className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] ml-1">
                      Your Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/20 rounded-lg py-4 px-6 text-white placeholder:text-white/20 outline-none focus:border-primary/50 transition-all duration-300"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] ml-1">
                      Email Address
                    </label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/20 rounded-lg py-4 px-6 text-white placeholder:text-white/20 outline-none focus:border-primary/50 transition-all duration-300"
                      placeholder="john@example.com"
                      type="email"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] ml-1">
                    How can I help?
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {PROJECT_TYPES.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => handleProjectType(type)}
                        className={`flex items-center justify-center h-14 px-3 text-center border rounded-lg text-[9px] font-bold uppercase tracking-widest transition-all ${
                          form.projectType === type
                            ? "border-primary text-white bg-primary/5"
                            : "border-white/5 text-white/40 bg-white/5 hover:border-white/20"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] ml-1">
                    Tell me more about your project
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/20 rounded-lg py-4 px-6 text-white placeholder:text-white/20 resize-none outline-none focus:border-primary/50 transition-all duration-300"
                    placeholder="Describe the product you want to build or improve.."
                    rows={5}
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4 flex-none" />
                    {errorMsg}
                  </div>
                )}

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full md:w-auto flex min-w-60 items-center justify-center gap-3 rounded h-16 px-10 bg-primary text-white text-sm font-extrabold uppercase tracking-widest cta-glow hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        Send Inquiry <SendHorizonal className="text-lg" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </AnimateIn>

      </div>
    </div>
  );
}
