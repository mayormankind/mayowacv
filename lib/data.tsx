import {
  Database,
  FileText,
  GaugeCircle,
  PenTool,
  Route,
  Settings2,
  SquareStack,
  Layout,
  Server,
  Code,
  Globe,
  Zap,
} from "lucide-react";

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  period: string;
  shortDescription: string;
  longDescription: string;
  heroImage: string;
  tags: string[];
  links: {
    live: string;
    repo?: string;
    demo?: string;
  };
  details: {
    challenge: {
      subtitle: string;
      title: string;
      description: string;
    };
    strategy: {
      subtitle: string;
      title: string;
      description: string;
    };
    impact: {
      subtitle: string;
      title: string;
      description: string;
    };
  };
  metrics: {
    label: string;
    value: string;
    subtext?: string;
  }[];
  architecture: {
    title: string;
    subtitle: string;
    diagramType: string; // e.g., "schema", "flow"
    description: string;
    points: {
      icon: any; // using any for Icon component type simplicity here
      title: string;
      description: string;
    }[];
  };
  lessons: {
    icon: any;
    title: string;
    description: string;
    highlight?: string;
  }[];
  docs: {
    title: string;
    icon: any;
    href: string;
  }[];
  techStack: string[];
}

export const projects: Project[] = [
  {
    slug: "nexus-saas",
    title: "Project Nexus SaaS",
    subtitle: "Product Deep Dive",
    category: "Full Stack",
    period: "Q4 2024",
    shortDescription:
      "A full-stack collaborative platform built with Next.js and Supabase, focusing on real-time state synchronization.",
    longDescription:
      "A full-stack collaborative platform built with Next.js and Supabase, focusing on real-time state synchronization and seamless user onboarding workflows.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDwVpHFNkFHTzWMywQ4SekWIP-S9O9B8MfvE9W_EQrjSDwLqlekeuxSYF26Rf9hDbLn8gryBq7TT4kVCDyekIOa57p3xbhoWTi3Hxc8W-QApUhPHROaVyu_3SV-7vQl40H1H1_EEgEUxz2vD2h78hrHHr_eZLXqDF0hVWKD7wI40M3zdM0_ISc85LEnfzLuuOft0ipEKzqW03mhY2_y43ZPJiWtXf-uMhp8INBeVnB5SWmZcPpM0aLi3jm5jhc6KIoBJEkdnNGk7uk_",
    tags: ["SaaS Solution", "Full Stack"],
    links: {
      live: "#",
      repo: "#",
    },
    details: {
      challenge: {
        subtitle: "01 — The Friction",
        title: "Data Silos & User Attrition",
        description:
          'Users were dropping off during a complex 5-step onboarding process. Disjointed data between CRM and product tools meant the team couldn\'t identify exactly where the "Aha!" moment was being lost for new signups.',
      },
      strategy: {
        subtitle: "02 — The Strategy",
        title: "Unified Data & Real-time Feedback",
        description:
          "Architected a centralized Supabase backend to unify user metadata and event tracking. Implemented optimistic UI updates in React to ensure the interface felt instantaneous, reducing perceived latency.",
      },
      impact: {
        subtitle: "03 — The Impact",
        title: "35% Increase in Conversion",
        description:
          "By streamlining the database schema and utilizing Firebase Cloud Functions for automated drip-campaign triggers, we improved the 7-day retention rate and successfully launched 3 weeks ahead of schedule.",
      },
    },
    metrics: [
      { label: "Time to Market", value: "42", subtext: "Days" },
      { label: "Conversion Lift", value: "+35%" },
      { label: "Active Users", value: "12k+" },
    ],
    architecture: {
      title: "Relational Mapping & API Flow",
      subtitle: "Product Architecture",
      diagramType: "schema",
      description: "Supabase Auth → Edge Functions → Firebase Realtime Sync",
      points: [
        {
          icon: Settings2,
          title: "API & State Management",
          description:
            "Leveraged React Query for server-state management to handle complex caching logic. API integrations with Supabase Edge Functions allowed for secure, low-latency communication.",
        },
        {
          icon: Database,
          title: "Database Schema",
          description:
            "Optimized PostgreSQL schema in Supabase using Row Level Security (RLS) to ensure multi-tenant data isolation. Firebase was strategically used for real-time presence indicators.",
        },
      ],
    },
    lessons: [
      {
        icon: GaugeCircle,
        title: "Speed vs. Perfect Abstraction",
        description:
          "I chose to use Tailwind CSS & Component Libraries over custom CSS modules to hit a tight 6-week MVP deadline. While this added a slight bundle overhead, the gain in iteration speed allowed us to pivot based on user feedback.",
        highlight: "Tailwind CSS & Component Libraries",
      },
      {
        icon: SquareStack,
        title: "Framework Choice: Next.js vs. SPA",
        description:
          "Opted for Next.js despite the team's familiarity with pure CRA. The Server-Side Rendering (SSR) benefits for SEO and faster initial paint were non-negotiable for a product whose primary growth channel was organic search.",
        highlight: "Server-Side Rendering (SSR)",
      },
    ],
    docs: [
      { title: "Product Requirements (PRD)", icon: FileText, href: "#" },
      { title: "Database ER Diagram", icon: PenTool, href: "#" },
      { title: "Onboarding User Flow", icon: Route, href: "#" },
    ],
    techStack: ["Next.js", "Supabase", "Firebase", "React Query", "TypeScript"],
  },
  {
    slug: "erp-system",
    title: "Enterprise Resource Planner",
    subtitle: "Enterprise Solution",
    category: "SaaS Platform",
    period: "Q3 2024",
    shortDescription:
      "A multi-tenant SaaS platform built to handle complex logistics workflows. Implemented real-time inventory tracking and automated billing cycles.",
    longDescription:
      "A comprehensive ERP solution designed for logistics companies to manage inventory, tracking, and billing in real-time. Built with scalability and multi-tenancy at its core.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDr7wVLRL0SptEqrwifrtO8CVhUo6qOcFQdEgfrogZAa8DduZ1WugLKo2bIUovOAzzweApOuqJ4nZF6IdPTLU-bTx5Qp6LIJD8hXgeV9xMT5DpaIJTVku0j96rhwMUrLlI1O9ZXz8XYERF1CGCsIUv6gYveposqlcf1ySuUirtWQpJufGHgBkPfaJgSt-ZjioqU7Ot2eOnhuOYmJt3qti1qKgWr2hNOmilv0xeJx0V6_ypQagoqhbctsCZvi4obJlEzPX9hW6eJMtP4",
    tags: ["SaaS Solution", "Full Stack"],
    links: {
      live: "#",
      repo: "#",
    },
    details: {
      challenge: {
        subtitle: "01 — The Goal",
        title: "Complex Workflows",
        description:
          "Legacy systems were causing data discrepancies and delayed billing. The client needed a unified platform to handle inventory, logistics, and finance in one place.",
      },
      strategy: {
        subtitle: "02 — The Solution",
        title: "Microservices Architecture",
        description:
          "Decomposed the monolith into domain-specific microservices using Node.js. Implemented event-driven architecture for real-time updates across modules.",
      },
      impact: {
        subtitle: "03 — The Result",
        title: "99.9% Usage Uptime",
        description:
          "Reduced billing errors by 90% and improved inventory accuracy to near perfection. The system now supports 50+ enterprise clients simultaneously.",
      },
    },
    metrics: [
      { label: "Uptime", value: "99.9%" },
      { label: "Billing Accuracy", value: "100%" },
      { label: "Daily txns", value: "50k+" },
    ],
    architecture: {
      title: "Event-Driven Microservices",
      subtitle: "System Architecture",
      diagramType: "flow",
      description: "Node.js Services → Kafka → PostgreSQL",
      points: [
        {
          icon: Server,
          title: "Backend Services",
          description:
            "Isolated services for Inventory, Billing, and Logistics, communicating via Kafka message queues for high throughput and fault tolerance.",
        },
        {
          icon: Database,
          title: "Data Consistency",
          description:
            "Implemented Sagas pattern to ensure distributed transaction consistency across microservices.",
        },
      ],
    },
    lessons: [
      {
        icon: Layout,
        title: "UI Consistency",
        description:
          "Maintaining a consistent UI across multiple modules was challenging. We adopted a design system early on, which paid off significantly as the team grew.",
      },
    ],
    docs: [
      { title: "System Architecture", icon: Layout, href: "#" },
      { title: "API Documentation", icon: Code, href: "#" },
    ],
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
  },
  {
    slug: "merchant-dashboard",
    title: "Merchant Insights Dashboard",
    subtitle: "Fintech Analytics",
    category: "Analytics",
    period: "Q2 2024",
    shortDescription:
      "A high-fidelity analytics suite for payment processing. Engineered custom data visualizations and optimized query performance for millions of records.",
    longDescription:
      "An advanced analytics dashboard providing real-time insights for merchants. Features custom-built charts, fraud detection alerts, and downloadable reports.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDwVpHFNkFHTzWMywQ4SekWIP-S9O9B8MfvE9W_EQrjSDwLqlekeuxSYF26Rf9hDbLn8gryBq7TT4kVCDyekIOa57p3xbhoWTi3Hxc8W-QApUhPHROaVyu_3SV-7vQl40H1H1_EEgEUxz2vD2h78hrHHr_eZLXqDF0hVWKD7wI40M3zdM0_ISc85LEnfzLuuOft0ipEKzqW03mhY2_y43ZPJiWtXf-uMhp8INBeVnB5SWmZcPpM0aLi3jm5jhc6KIoBJEkdnNGk7uk_",
    tags: ["Fintech", "Analytics"],
    links: {
      live: "#",
      repo: "#",
    },
    details: {
      challenge: {
        subtitle: "01 — The Problem",
        title: "Slow Queries",
        description:
          "Merchants experienced 5-10s load times for reports. The existing database architecture couldn't scale with the growing transaction volume.",
      },
      strategy: {
        subtitle: "02 — The Strategy",
        title: "Data Aggregation",
        description:
          "Implemented analytical views and materialized tables in PostgreSQL. Used Redis for caching frequently accessed metrics.",
      },
      impact: {
        subtitle: "03 — The Impact",
        title: "Sub-second Response",
        description:
          "Reduced average query time to <200ms. Merchant engagement with the insights module increased by 300%.",
      },
    },
    metrics: [
      { label: "Query Speed", value: "<0.2s" },
      { label: "Data Scale", value: "100GB+" },
    ],
    architecture: {
      title: "Data Pipeline",
      subtitle: "Backend Architecture",
      diagramType: "pipeline",
      description: "ETL -> Warehouse -> API",
      points: [
        {
          icon: Zap,
          title: "Performance",
          description:
            "Heavy lifting moved to background workers. API serves pre-aggregated data for instant dashboard rendering.",
        },
      ],
    },
    lessons: [],
    docs: [],
    techStack: ["React", "Node.js", "Firebase", "Tailwind"],
  },
  {
    slug: "dtc-engine",
    title: "Direct-to-Consumer Engine",
    subtitle: "E-Commerce",
    category: "E-Commerce",
    period: "Q1 2024",
    shortDescription:
      "Custom-built storefront for a luxury brand. Integrated server-side rendering for SEO and a decoupled CMS to manage dynamic product catalogs.",
    longDescription:
      "A headless e-commerce solution offering complete design freedom and blazing fast performance. Integrated with Shopify for checkout and inventory management.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDwVpHFNkFHTzWMywQ4SekWIP-S9O9B8MfvE9W_EQrjSDwLqlekeuxSYF26Rf9hDbLn8gryBq7TT4kVCDyekIOa57p3xbhoWTi3Hxc8W-QApUhPHROaVyu_3SV-7vQl40H1H1_EEgEUxz2vD2h78hrHHr_eZLXqDF0hVWKD7wI40M3zdM0_ISc85LEnfzLuuOft0ipEKzqW03mhY2_y43ZPJiWtXf-uMhp8INBeVnB5SWmZcPpM0aLi3jm5jhc6KIoBJEkdnNGk7uk_",
    tags: ["E-Commerce", "High-Scale"],
    links: {
      live: "#",
      repo: "#",
    },
    details: {
      challenge: {
        subtitle: "01 — The Challenge",
        title: "Brand Identity",
        description:
          "Generic shopify themes constrained the brand's unique visual identity. They needed a custom frontend that didn't sacrifice performance.",
      },
      strategy: {
        subtitle: "02 — The Strategy",
        title: "Headless Commerce",
        description:
          "Built a custom Next.js storefront consuming Shopify's Storefront API. This allowed for rich, interactive product pages and perfect SEO scores.",
      },
      impact: {
        subtitle: "03 — The Impact",
        title: "50% Higher AOV",
        description:
          "The immersive product storytelling led to a 50% increase in Average Order Value and significantly lower bounce rates.",
      },
    },
    metrics: [
      { label: "Lighthouse Score", value: "100" },
      { label: "AOV Increase", value: "50%" },
    ],
    architecture: {
      title: "Headless Stack",
      subtitle: "Architecture",
      diagramType: "stack",
      description: "Next.js -> Shopify API -> CMS",
      points: [
        {
          icon: Globe,
          title: "Global CDN",
          description:
            "Assets serving from the edge ensures fast load times for customers worldwide.",
        },
      ],
    },
    lessons: [],
    docs: [],
    techStack: ["Next.js", "TypeScript", "Node.js", "Supabase"],
  },
];

export function getAllProjects() {
  return projects;
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
