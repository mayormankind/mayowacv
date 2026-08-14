//lib/seo.ts
export const BASE_URL = "https://mayowamakinde.dev";
export const SITE_NAME = "Mayowa Makinde";
export const AUTHOR_NAME = "Mayowa Makinde";
export const AUTHOR_HANDLE = "@RedMoonCoder";
export const AUTHOR_EMAIL = "mayowamakinde23@gmail.com";
export const AUTHOR_LINKEDIN =
  "https://www.linkedin.com/in/makinde-mayowa-4670a51bb";
export const AUTHOR_GITHUB = "https://github.com/mayormankind";
export const AUTHOR_TWITTER = "https://x.com/RedMoonCoder";
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
    jobTitle: "Full-Stack Product Engineer",
    description:
      "Full-Stack Engineer with 3+ years specializing in high-performance SaaS platforms, data-driven dashboards, and scalable web applications using Next.js and React.",
    sameAs: [
      AUTHOR_LINKEDIN,
      AUTHOR_GITHUB,
      AUTHOR_TWITTER,
      `https://twitter.com/RedMoonCoder`,
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
    description:
      "Portfolio of Mayowa Makinde — Full-Stack Product Engineer building scalable SaaS platforms and web applications.",
    author: {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: AUTHOR_NAME,
      url: BASE_URL,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/projects?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
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
    dateCreated: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    mainEntity: {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: AUTHOR_NAME,
      url: BASE_URL,
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
    keywords: project.techStack.join(", "),
    author: {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: AUTHOR_NAME,
      url: BASE_URL,
    },
    ...(project.heroImage ? { image: project.heroImage } : {}),
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
