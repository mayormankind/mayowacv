import Link from "next/link";
import { Metadata } from "next";
import { BASE_URL } from "@/lib/seo";
import AnimateIn from "@/components/ui/AnimateIn";
import { ArrowRight, Shield, CreditCard, BarChart3, Lock, AlertTriangle, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Fintech Development Services",
  description:
    "Custom fintech development services. Build secure financial applications with payment processing, transaction monitoring, and compliance-ready security features.",
  keywords: [
    "Fintech development",
    "Payment processing development",
    "Financial application development",
    "Fintech app developer",
    "Payment gateway integration",
    "Secure financial software",
  ],
  alternates: {
    canonical: `${BASE_URL}/services/fintech`,
  },
};

const features = [
  {
    icon: CreditCard,
    title: "Payment Processing",
    description:
      "Integration with payment gateways like Stripe, Paystack, and Flutterwave for secure transaction processing.",
  },
  {
    icon: Shield,
    title: "Transaction Monitoring",
    description:
      "Real-time transaction tracking, fraud detection systems, and automated alerts for suspicious activities.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "Bank-grade security with encryption, secure authentication, and compliance-ready architecture for financial data.",
  },
  {
    icon: BarChart3,
    title: "Financial Analytics",
    description:
      "Custom dashboards for transaction analytics, revenue tracking, and financial performance insights.",
  },
  {
    icon: AlertTriangle,
    title: "Fraud Detection",
    description:
      "Machine learning-powered fraud detection systems with real-time risk scoring and automated blocking.",
  },
  {
    icon: CheckCircle2,
    title: "Regulatory Compliance",
    description:
      "Built-in compliance features for financial regulations including data protection and audit trails.",
  },
];

const process = [
  {
    step: "01",
    title: "Security Assessment",
    description:
      "Analyze security requirements, compliance needs, and risk factors for your fintech application.",
  },
  {
    step: "02",
    title: "Architecture Design",
    description:
      "Design secure architecture with proper data encryption, access controls, and audit logging systems.",
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "Build with security-first approach. Includes penetration testing, security audits, and compliance validation.",
  },
  {
    step: "04",
    title: "Deployment & Monitoring",
    description:
      "Secure deployment with continuous monitoring, automated security updates, and incident response planning.",
  },
];

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Stripe",
  "Paystack",
  "Flutterwave",
  "Redis",
  "Vercel",
];

export default function FintechPage() {
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
          Fintech <span className="text-primary">Development</span>
        </h1>
        <p className="text-white/50 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-8">
          Secure financial applications and payment processing systems. I build
          fintech platforms with compliance-grade security and real-time
          transaction processing.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="flex items-center justify-center rounded h-14 px-8 bg-primary text-white text-sm font-extrabold uppercase tracking-widest hover:brightness-110 transition-all"
          >
            Build Your Fintech App
          </Link>
          <Link
            href="/projects"
            className="flex items-center justify-center rounded h-14 px-8 bg-surface border border-white/10 text-white text-sm font-extrabold uppercase tracking-widest hover:border-white/20 transition-all"
          >
            View Fintech Projects
          </Link>
        </div>
      </AnimateIn>

      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <AnimateIn direction="up" delay={0} className="mb-16">
            <h2 className="text-3xl font-extrabold mb-4">What I Build</h2>
            <p className="text-white/50 max-w-2xl">
              Secure fintech solutions designed for compliance and trust.
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
              A security-first methodology for building compliant fintech
              applications.
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
              Secure technologies optimized for financial applications.
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
            Ready to Build Your Fintech Solution?
          </h2>
          <p className="text-white/50 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your fintech project and how I can help you build a
            secure, compliant financial application.
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
