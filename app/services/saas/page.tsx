import Link from "next/link";
import { Metadata } from "next";
import { BASE_URL } from "@/lib/seo";
import AnimateIn from "@/components/ui/AnimateIn";
import { ArrowRight, Zap, Users, BarChart3, Shield, Clock, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "SaaS Development Services",
  description:
    "Custom SaaS development services. Build scalable subscription-based platforms with multi-tenant architecture, billing integration, and real-time collaboration features.",
  keywords: [
    "SaaS development company",
    "Custom SaaS development",
    "Multi-tenant SaaS architecture",
    "Subscription billing integration",
    "SaaS MVP development",
    "SaaS developer Nigeria",
  ],
  alternates: {
    canonical: `${BASE_URL}/services/saas`,
  },
};

const features = [
  {
    icon: Users,
    title: "Multi-Tenant Architecture",
    description:
      "Secure data isolation for multiple customers using Row Level Security (RLS) and proper database design patterns.",
  },
  {
    icon: Zap,
    title: "Subscription Billing",
    description:
      "Integration with Stripe, Paystack, and other payment processors for recurring billing, invoicing, and subscription management.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Custom dashboards and reporting tools to help your users understand their data and make informed decisions.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "OAuth integration, role-based access control, and compliance-ready security features for B2B SaaS products.",
  },
  {
    icon: Clock,
    title: "Real-Time Collaboration",
    description:
      "Live updates, presence indicators, and collaborative features using WebSockets and real-time databases.",
  },
  {
    icon: CheckCircle2,
    title: "Admin Dashboards",
    description:
      "Powerful admin interfaces for user management, content moderation, and platform configuration.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "We define your SaaS requirements, user personas, and technical architecture. Includes PRD creation and tech stack selection.",
  },
  {
    step: "02",
    title: "MVP Development",
    description:
      "Rapid development of core features to validate your product-market fit. Focus on shipping quickly with quality code.",
  },
  {
    step: "03",
    title: "Launch & Iterate",
    description:
      "Production deployment, monitoring setup, and iterative improvements based on user feedback and analytics.",
  },
  {
    step: "04",
    title: "Scale & Optimize",
    description:
      "Performance optimization, feature expansion, and infrastructure scaling as your user base grows.",
  },
];

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Supabase",
  "PostgreSQL",
  "Stripe",
  "Paystack",
  "Tailwind CSS",
  "Prisma",
  "Vercel",
];

export default function SaaSPage() {
  return (
    <>
      <AnimateIn direction="up" delay={0.1} className="max-w-4xl mb-20 pt-12 md:pt-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-primary" />
          <span className="text-primary text-[10px] font-extrabold uppercase tracking-[0.4em]">
            Service
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-[-0.04em] mb-8 leading-[0.95]">
          SaaS <span className="text-primary">Development</span>
        </h1>
        <p className="text-white/50 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-8">
          End-to-end SaaS product development from MVP to scale. I build
          subscription-based platforms with user authentication, billing
          integration, and real-time collaboration features.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="flex items-center justify-center rounded h-14 px-8 bg-primary text-white text-sm font-extrabold uppercase tracking-widest hover:brightness-110 transition-all"
          >
            Start Your SaaS Project
          </Link>
          <Link
            href="/projects"
            className="flex items-center justify-center rounded h-14 px-8 bg-surface border border-white/10 text-white text-sm font-extrabold uppercase tracking-widest hover:border-white/20 transition-all"
          >
            View SaaS Projects
          </Link>
        </div>
      </AnimateIn>

      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <AnimateIn direction="up" delay={0} className="mb-16">
            <h2 className="text-3xl font-extrabold mb-4">What I Build</h2>
            <p className="text-white/50 max-w-2xl">
              Comprehensive SaaS solutions designed for scalability and user
              adoption.
            </p>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimateIn key={index} direction="up" delay={index * 0.1}>
                <div className="bg-surface border border-white/5 rounded-xl p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <feature.icon className="text-primary w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <AnimateIn direction="up" delay={0} className="mb-16">
            <h2 className="text-3xl font-extrabold mb-4">Development Process</h2>
            <p className="text-white/50 max-w-2xl">
              A proven methodology to take your SaaS from idea to market.
            </p>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <AnimateIn key={index} direction="up" delay={index * 0.1}>
                <div className="relative">
                  <div className="text-primary text-6xl font-extrabold opacity-20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <AnimateIn direction="up" delay={0} className="mb-16">
            <h2 className="text-3xl font-extrabold mb-4">Tech Stack</h2>
            <p className="text-white/50 max-w-2xl">
              Modern technologies optimized for SaaS development.
            </p>
          </AnimateIn>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <AnimateIn key={index} direction="up" delay={index * 0.05}>
                <span className="px-4 py-2 bg-surface border border-white/5 text-sm font-bold uppercase tracking-wider rounded-lg">
                  {tech}
                </span>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <AnimateIn direction="up" delay={0} className="bg-surface border border-white/5 rounded-xl p-12 md:p-20 relative overflow-hidden mt-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Ready to Build Your SaaS?
          </h2>
          <p className="text-white/50 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your SaaS idea and how I can help you ship a
            production-ready MVP.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded h-14 px-8 bg-primary text-white text-sm font-extrabold uppercase tracking-widest hover:brightness-110 transition-all"
          >
            Start a Project <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </AnimateIn>
    </>
  );
}
