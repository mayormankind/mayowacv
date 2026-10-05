"use client";
import { AlertCircle, CheckCircle2, Loader2, SendHorizonal } from "lucide-react";
import React, { useEffect, useId, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import { MESSAGE_MIN_LENGTH, PROJECT_TYPES } from "@/lib/data/contact";
import { SITE } from "@/lib/site-config";

const inputClasses =
  "w-full bg-white/5 border border-white/15 rounded-md py-4 px-6 text-white placeholder:text-white/20 outline-none transition-all duration-300 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary-soft/40";

const labelClasses =
  "block text-xs font-semibold uppercase tracking-[0.1em] text-white/50";

const emptyForm = {
  name: "",
  email: "",
  projectType: "",
  message: "",
  companyWebsite: "",
};

export default function ContactForm({ featuredSlug }: { featuredSlug?: string }) {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const successRef = useRef<HTMLHeadingElement>(null);
  const typeRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const uid = useId();
  const fieldId = (name: string) => `${uid}-${name}`;

  const handleTypeKeyDown = (e: React.KeyboardEvent, index: number) => {
    const last = PROJECT_TYPES.length - 1;
    let next = index;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      next = index === last ? 0 : index + 1;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      next = index === 0 ? last : index - 1;
    } else {
      return;
    }
    e.preventDefault();
    setForm((prev) => ({ ...prev, projectType: PROJECT_TYPES[next] }));
    typeRefs.current[next]?.focus();
  };

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!form.projectType) {
      setStatus("error");
      setErrorMsg("Pick the closest option for what you need help with.");
      return;
    }
    if (form.message.trim().length < MESSAGE_MIN_LENGTH) {
      setStatus("error");
      setErrorMsg(
        `Tell me a bit more — the message needs at least ${MESSAGE_MIN_LENGTH} characters. A few sentences is plenty.`,
      );
      return;
    }

    setStatus("loading");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          projectType: form.projectType,
          message: form.message,
          company_website: form.companyWebsite,
        }),
        signal: controller.signal,
      });
      if (!res.ok) throw new Error("request failed");
      setSubmittedEmail(form.email);
      setStatus("success");
      setForm(emptyForm);
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(
        err instanceof DOMException && err.name === "AbortError"
          ? "That took too long and timed out."
          : "Couldn't send that.",
      );
    } finally {
      clearTimeout(timeout);
    }
  };

  return (
    <div className="bg-surface border border-white/10 p-8 md:p-12 rounded-md">
      {status === "success" ? (
        <div
          role="status"
          className="flex flex-col items-center justify-center gap-6 py-16 text-center"
        >
          <CheckCircle2 className="w-16 h-16 text-green-400" aria-hidden="true" />
          <h2
            ref={successRef}
            tabIndex={-1}
            className="text-2xl font-extrabold outline-none"
          >
            Message sent.
          </h2>
          <p className="text-white/65 max-w-sm">
            Thanks for reaching out — I&apos;ll reply to{" "}
            <span className="text-white font-semibold">{submittedEmail}</span>{" "}
            within 24 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            <Button href="/projects" variant="secondary" size="md">
              See my work
            </Button>
            {featuredSlug && (
              <Button
                href={`/projects/${featuredSlug}`}
                variant="ghost"
                size="md"
              >
                Read the featured case study →
              </Button>
            )}
            <Button variant="ghost" size="md" onClick={() => setStatus("idle")}>
              Send another
            </Button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          aria-busy={status === "loading"}
          className="space-y-5"
        >
          <fieldset disabled={status === "loading"} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor={fieldId("name")} className={labelClasses}>
                  Your name
                </label>
                <input
                  id={fieldId("name")}
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  autoComplete="name"
                  className={inputClasses}
                  placeholder="Your name"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor={fieldId("email")} className={labelClasses}>
                  Email address
                </label>
                <input
                  id={fieldId("email")}
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  autoComplete="email"
                  inputMode="email"
                  className={inputClasses}
                  placeholder="you@company.com"
                  type="email"
                />
              </div>
            </div>

            <fieldset className="space-y-2">
              <legend className={`${labelClasses} mb-2`}>How can I help?</legend>
              <div
                role="radiogroup"
                aria-label="How can I help?"
                className="grid grid-cols-2 md:grid-cols-3 gap-2"
              >
                {PROJECT_TYPES.map((type, index) => {
                  const selected = form.projectType === type;
                  return (
                    <button
                      key={type}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      tabIndex={
                        selected || (!form.projectType && index === 0) ? 0 : -1
                      }
                      ref={(el) => {
                        typeRefs.current[index] = el;
                      }}
                      onClick={() =>
                        setForm((prev) => ({ ...prev, projectType: type }))
                      }
                      onKeyDown={(e) => handleTypeKeyDown(e, index)}
                      className={`flex items-center justify-center h-14 px-3 text-center border rounded-md text-xs font-semibold uppercase tracking-widest transition-all cursor-pointer focus-visible:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary-soft/40 ${
                        selected
                          ? "border-primary text-white bg-primary/5"
                          : "border-white/15 bg-white/5 text-white/20 hover:border-white/30"
                      }`}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="space-y-2">
              <label htmlFor={fieldId("message")} className={labelClasses}>
                Tell me more about your project
              </label>
              <textarea
                id={fieldId("message")}
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                aria-required="true"
                aria-describedby={fieldId("message-hint")}
                minLength={MESSAGE_MIN_LENGTH}
                className={`${inputClasses} resize-none`}
                placeholder="What are you trying to build or fix? A few sentences is plenty."
                rows={5}
              />
              <p id={fieldId("message-hint")} className="text-xs text-white/50">
                Minimum {MESSAGE_MIN_LENGTH} characters.
              </p>
            </div>

            {/* Honeypot — hidden from humans, bots fill it */}
            <input
              type="text"
              name="companyWebsite"
              value={form.companyWebsite}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
            />
          </fieldset>

          {status === "error" && errorMsg && (
            <div
              role="alert"
              className="flex items-start gap-3 p-4 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
            >
              <AlertCircle className="w-4 h-4 flex-none mt-0.5" aria-hidden="true" />
              <span>
                {errorMsg}{" "}
                {errorMsg === "Couldn't send that." && (
                  <>
                    Email me directly at{" "}
                    <a
                      href={`mailto:${SITE.email}`}
                      className="underline underline-offset-2 hover:text-white"
                    >
                      {SITE.email}
                    </a>{" "}
                    and I&apos;ll pick it up.
                  </>
                )}
              </span>
            </div>
          )}

          <div className="space-y-4">
            <Button
              type="submit"
              size="lg"
              disabled={status === "loading"}
              className="w-full"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" /> Sending…
                </>
              ) : (
                <>
                  Send message <SendHorizonal className="w-4 h-4" aria-hidden="true" />
                </>
              )}
            </Button>
            <p className="text-xs text-white/50">
              I reply within 24 hours. Prefer email?{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="text-white/75 underline underline-offset-2 hover:text-white"
              >
                {SITE.email}
              </a>
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
