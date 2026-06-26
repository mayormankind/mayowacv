import Link from "next/link";
import { Metadata } from "next";
import { BASE_URL } from "@/lib/seo";
import AnimateIn from "@/components/ui/AnimateIn";
import { ArrowRight, Zap, Shield, BarChart3, Users, Globe, Code } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom SaaS development, e-commerce solutions, and fintech application development. Senior Full-Stack Engineer helping founders build scalable web applications.",
  keywords: [
    "SaaS development services",
    "Custom web application development",
    "E-commerce development",
    "Fintech app development",
    "Software development Nigeria",
    "Remote software engineer",
  ],
  alternates: {
    canonical: `${BASE_URL}/services`,
  },
};

const services = [
  {
    icon: Zap,
    title: "SaaS Development",
    description:
      "Turn your SaaS idea into a revenue-generating product — fast. I handle everything from MVP to polished platform, including payments, user accounts, and admin tools.",
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
    icon: Globe,
    title: "E-Commerce Development",
    description:
      "Custom storefronts and headless commerce solutions. I build high-performance e-commerce platforms with seamless checkout experiences and inventory management.",
    features: [
      "Headless commerce (Shopify API)",
      "Custom product pages",
      "Payment gateway integration",
      "Inventory management",
      "SEO-optimized storefronts",
    ],
    href: "/services/ecommerce",
  },
  {
    icon: Shield,
    title: "Fintech Development",
    description:
      "Secure financial applications and payment processing systems. I build fintech platforms with compliance-grade security and real-time transaction processing.",
    features: [
      "Payment processing",
      "Transaction monitoring",
      "Fraud detection",
      "Secure authentication",
      "Regulatory compliance",
    ],
    href: "/services/fintech",
  },
];

export default function ServicesPage() {
  return (
    <>
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
          drive revenue and user growth. Specializing in SaaS, e-commerce, and
          fintech platforms.
        </p>
      </AnimateIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {services.map((service, index) => (
          <AnimateIn key={index} direction="up" delay={index * 0.1}>
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
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-white/40 text-xs flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
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
              Let's discuss your project requirements and how I can help you ship
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
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/5 rounded-lg p-6 text-center">
              <p className="text-3xl font-extrabold text-primary mb-2">3+</p>
              <p className="text-white/40 text-xs uppercase tracking-wider">
                Years Experience
              </p>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-lg p-6 text-center">
              <p className="text-3xl font-extrabold text-primary mb-2">20+</p>
              <p className="text-white/40 text-xs uppercase tracking-wider">
                Projects Delivered
              </p>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-lg p-6 text-center">
              <p className="text-3xl font-extrabold text-primary mb-2">99%</p>
              <p className="text-white/40 text-xs uppercase tracking-wider">
                Client Satisfaction
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
