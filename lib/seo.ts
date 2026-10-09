//lib/seo.ts
import { SITE } from "@/lib/site-config";

export const BASE_URL = "https://mayowamakinde.dev";
export const SITE_NAME = "Mayowa Makinde";
export const AUTHOR_NAME = "Mayowa Makinde";
export const AUTHOR_HANDLE = "@mayowamakinde23";
export const AUTHOR_EMAIL = SITE.email;
export const AUTHOR_LINKEDIN =
  "https://www.linkedin.com/in/makinde-mayowa-4670a51bb";
export const AUTHOR_GITHUB = "https://github.com/mayormankind";
export const AUTHOR_TWITTER = "https://x.com/mayowamakinde23";
export const OG_IMAGE = `${BASE_URL}/images/og-image.png`;
export const PROFILE_IMAGE = `${BASE_URL}/images/profile.png`;

export function buildPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE_URL}/#person`,
    name: AUTHOR_NAME,
    givenName: "Mayowa",
    familyName: "Makinde",
    alternateName: ["Makinde Mayowa", "Mayowa"],
    url: BASE_URL,
    email: AUTHOR_EMAIL,
    telephone: SITE.phoneHref,
    jobTitle: "Full-Stack Product Engineer",
    description:
      "Full-Stack Engineer with 3+ years specializing in high-performance SaaS platforms, data-driven dashboards, and scalable web applications using Next.js and React.",
    nationality: {
      "@type": "Country",
      name: "Nigeria",
    },
    knowsLanguage: ["en"],
    sameAs: [
      AUTHOR_LINKEDIN,
      AUTHOR_GITHUB,
      AUTHOR_TWITTER,
      `https://twitter.com/mayowamakinde23`,
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ibadan",
      addressRegion: "Oyo State",
      addressCountry: "NG",
    },
    image: {
      "@type": "ImageObject",
      url: PROFILE_IMAGE,
      width: 800,
      height: 800,
      caption: "Mayowa Makinde — Full-Stack Product Engineer",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Supabase",
      "PostgreSQL",
      "SaaS Architecture",
      "Full-Stack Development",
      "Product Engineering",
      "E-Commerce Development",
      "Fintech Development",
      "Web Application Development",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full-Stack Product Engineer",
      occupationLocation: {
        "@type": "Country",
        name: "Nigeria",
      },
      skills: "React, Next.js, TypeScript, Node.js, Supabase, SaaS Architecture",
    },
    worksFor: {
      "@type": "Organization",
      name: "Freelance / Independent",
    },
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: SITE_NAME,
    url: BASE_URL,
    inLanguage: "en",
    description:
      "Portfolio of Mayowa Makinde — Full-Stack Product Engineer building scalable SaaS platforms and web applications.",
    author: {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
    },
    publisher: {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
    },
  };
}

export function buildProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${BASE_URL}/about#profilepage`,
    url: `${BASE_URL}/about`,
    name: "About Mayowa Makinde — Full-Stack Product Engineer",
    description:
      "Learn about Mayowa Makinde, a Full-Stack Product Engineer based in Nigeria with 3+ years building SaaS platforms and scalable web applications.",
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
    },
    dateCreated: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    mainEntity: {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
    },
  };
}

export function buildSoftwareAppSchema(project: {
  title: string;
  shortDescription: string;
  slug: string;
  techStack: string[];
  heroImage?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.shortDescription,
    url: `${BASE_URL}/projects/${project.slug}`,
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    inLanguage: "en",
    keywords: project.techStack.join(", "),
    author: {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
    },
    isPartOf: {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
    },
    ...(project.heroImage ? { image: project.heroImage } : {}),
  };
}

export function buildServiceSchema(service: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${BASE_URL}${service.path}`,
    serviceType: service.serviceType ?? "Software Development",
    inLanguage: "en",
    provider: {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Worldwide (Remote)",
    },
    isPartOf: {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
    },
  };
}

export function buildItemListSchema(
  items: { name: string; url: string; description?: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
      ...(item.description ? { description: item.description } : {}),
    })),
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
