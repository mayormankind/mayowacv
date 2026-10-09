import Link from "next/link";
import { Metadata } from "next";
import { BASE_URL, OG_IMAGE, buildBreadcrumbSchema } from "@/lib/seo";
import { STATS } from "@/lib/site-config";
import AnimateIn from "@/components/ui/AnimateIn";
import JsonLd from "@/components/ui/JsonLd";
import { ArrowRight, Code2, GraduationCap, Monitor, Server, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Full-Stack Engineering & SaaS Development",
  description:
    "Full-stack engineering, backend development, SaaS products, frontend engineering, and consultation by Mayowa Makinde — Full-Stack Product Engineer helping founders build scalable web applications.",
  alternates: {
    canonical: `${BASE_URL}/services`,
  },
  openGraph: {
    title: "Services | Mayowa Makinde — Full-Stack Engineering & SaaS Development",
    description:
      "Full-stack engineering, backend systems, SaaS products, frontend interfaces, and technical consultation. Helping founders ship scalable web products.",
    url: `${BASE_URL}/services`,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Mayowa Makinde — Software Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Mayowa Makinde",
    description:
      "Full-stack engineering, backend systems, SaaS products, frontend interfaces, and technical consultation.",
    images: [OG_IMAGE],
  },
};

const services = [
  {
    icon: Code2,
    title: "Full-Stack Engineering",
    description:
      "End-to-end product engineering from database schema to polished UI. I own the full stack so you ship faster with less coordination overhead.",
    features: [
      "Next.js / React frontends",
      "Node.js / REST & GraphQL APIs",
      "PostgreSQL / Supabase",
      "Auth & role-based access",
      "Deployment & CI/CD pipelines",
    ],
    href: "/contact",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Reliable, well-tested server-side systems built for scale. APIs, data pipelines, background jobs, webhooks — whatever your product needs under the hood.",
    features: [
      "REST & GraphQL APIs",
      "Database design & optimisation",
      "Third-party integrations",
      "Background jobs & queues",
      "Observability & logging",
    ],
    href: "/contact",
  },
  {
    icon: Zap,
    title: "SaaS Development",
    description:
      "Turn your SaaS idea into a revenue-generating product, fast. I handle everything from MVP to polished platform, including payments, user accounts, and admin tools.",
    features: [
      "Multi-tenant architecture",
      "Subscription billing (Stripe/Paystack)",
      "Real-time collaboration",
      "Admin dashboards",
      "Analytics & reporting",
    ],
    href: "/services/saas",
  },
  {
    icon: GraduationCap,
    title: "Consultation & Training",
    description:
      "Technical guidance for founders, product teams, and engineering leads. Code reviews, architecture advice, or hands-on sessions for your team.",
    features: [
      "Architecture & stack review",
      "Code quality audits",
      "Team workshops & mentoring",
      "Technical writing & docs",
      "Roadmap & planning support",
    ],
    href: "/contact",
  },
  {
    icon: Monitor,
    title: "Frontend Engineering",
    description:
      "Fast, accessible interfaces that users love. Pixel-precise UIs with strong performance fundamentals — from design handoff to deployed product.",
    features: [
      "React & Next.js",
      "Tailwind CSS & animations",
      "Accessibility (WCAG AA)",
      "Core Web Vitals optimisation",
      "Design-to-code handoff",
    ],
    href: "/contact",
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Home", url: BASE_URL },
          { name: "Services", url: `${BASE_URL}/services` },
        ])}
      />
      <AnimateIn direction="up" delay={0.1} className="max-w-4xl mb-20 pt-12 md:pt-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-primary" />
          <span className="text-primary text-[10px] font-extrabold uppercase tracking-[0.4em]">
            Services Overview
          </span>
        </div>
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-[-0.04em] mb-8 leading-[0.95]">
          Custom <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white to-white/20">
            Software Development.
          </span>
        </h1>
        <p className="text-white/50 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
          I help founders and product teams build scalable web applications that
          drive revenue and user growth. From full-stack products to focused
          backend systems and polished interfaces.
        </p>
      </AnimateIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {services.map((service, index) => (
          <AnimateIn key={service.title} direction="up" delay={index * 0.08}>
            <Link
              href={service.href}
              className="group bg-surface border border-white/5 rounded-xl p-8 hover:border-primary/30 transition-all h-full flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                <service.icon className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-white/40 text-xs flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
                {service.href === "/contact" ? "Get in Touch" : "Learn More"}{" "}
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </AnimateIn>
        ))}
      </div>

      <AnimateIn direction="up" delay={0} className="bg-surface border border-white/5 rounded-xl p-12 md:p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Ready to Build Your Product?
            </h2>
            <p className="text-white/50 text-lg mb-8">
              Let&apos;s discuss your project requirements and how I can help you ship
              faster with production-quality code.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="flex items-center justify-center rounded h-14 px-8 bg-primary text-white text-sm font-extrabold uppercase tracking-widest hover:brightness-110 transition-all"
              >
                Start a Project
              </Link>
              <Link
                href="/projects"
                className="flex items-center justify-center rounded h-14 px-8 bg-surface border border-white/10 text-white text-sm font-extrabold uppercase tracking-widest hover:border-white/20 transition-all"
              >
                View Portfolio
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/5 rounded-lg p-6 text-center">
              <p className="text-3xl font-extrabold text-primary mb-2">
                {STATS.yearsBuilding}
              </p>
              <p className="text-white/40 text-xs uppercase tracking-wider">
                Years Experience
              </p>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-lg p-6 text-center">
              <p className="text-3xl font-extrabold text-primary mb-2">
                {STATS.projectsDelivered}
              </p>
              <p className="text-white/40 text-xs uppercase tracking-wider">
                Projects Delivered
              </p>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-lg p-6 text-center">
              <p className="text-3xl font-extrabold text-primary mb-2">24h</p>
              <p className="text-white/40 text-xs uppercase tracking-wider">
                Response Time
              </p>
            </div>
          </div>
        </div>
      </AnimateIn>
    </>
  );
}
