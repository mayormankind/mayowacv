import Link from "next/link";
import { Metadata } from "next";
import { BASE_URL } from "@/lib/seo";
import AnimateIn from "@/components/ui/AnimateIn";
import { ArrowRight, Globe, ShoppingCart, CreditCard, Package, BarChart3, Zap, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "E-Commerce Development Services",
  description:
    "Custom e-commerce development services. Build high-performance storefronts with headless commerce, payment gateway integration, and inventory management.",
  keywords: [
    "E-commerce development",
    "Custom online store development",
    "Headless commerce development",
    "Shopify custom development",
    "E-commerce website developer",
    "Online store development Nigeria",
  ],
  alternates: {
    canonical: `${BASE_URL}/services/ecommerce`,
  },
};

const features = [
  {
    icon: Globe,
    title: "Headless Commerce",
    description:
      "Custom storefronts using Shopify Storefront API or custom headless solutions for complete design freedom and performance.",
  },
  {
    icon: ShoppingCart,
    title: "Custom Checkout Flows",
    description:
      "Optimized checkout experiences with abandoned cart recovery, guest checkout, and seamless payment processing.",
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description:
      "Integration with multiple payment gateways including Stripe, Paystack, PayPal, and local payment methods.",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description:
      "Real-time inventory tracking, automated stock updates, and multi-location inventory support.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Custom dashboards for sales tracking, customer insights, and product performance analytics.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Lightning-fast load times with image optimization, lazy loading, and CDN integration for global customers.",
  },
];

const process = [
  {
    step: "01",
    title: "Store Strategy",
    description:
      "Define your e-commerce goals, target audience, and product catalog structure. Includes competitor analysis and UX planning.",
  },
  {
    step: "02",
    title: "Design & Development",
    description:
      "Build a custom storefront with your brand identity. Focus on conversion optimization and mobile-first design.",
  },
  {
    step: "03",
    title: "Integration & Testing",
    description:
      "Connect payment gateways, shipping providers, and inventory systems. Rigorous testing for checkout flows.",
  },
  {
    step: "04",
    title: "Launch & Growth",
    description:
      "Deploy to production, set up analytics, and implement SEO best practices. Ongoing optimization for conversions.",
  },
];

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Shopify API",
  "Stripe",
  "Paystack",
  "Tailwind CSS",
  "Vercel",
  "PostgreSQL",
  "Redis",
];

export default function EcommercePage() {
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
          E-Commerce <span className="text-primary">Development</span>
        </h1>
        <p className="text-white/50 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-8">
          Custom storefronts and headless commerce solutions. I build
          high-performance e-commerce platforms with seamless checkout
          experiences and inventory management.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="flex items-center justify-center rounded h-14 px-8 bg-primary text-white text-sm font-extrabold uppercase tracking-widest hover:brightness-110 transition-all"
          >
            Build Your Store
          </Link>
          <Link
            href="/projects"
            className="flex items-center justify-center rounded h-14 px-8 bg-surface border border-white/10 text-white text-sm font-extrabold uppercase tracking-widest hover:border-white/20 transition-all"
          >
            View E-Commerce Projects
          </Link>
        </div>
      </AnimateIn>

      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <AnimateIn direction="up" delay={0} className="mb-16">
            <h2 className="text-3xl font-extrabold mb-4">What I Build</h2>
            <p className="text-white/50 max-w-2xl">
              Conversion-focused e-commerce solutions designed to maximize sales.
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
              A proven methodology to build e-commerce stores that convert.
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
              Modern technologies optimized for e-commerce performance.
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
            Ready to Launch Your Store?
          </h2>
          <p className="text-white/50 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your e-commerce project and how I can help you build a
            high-converting online store.
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
