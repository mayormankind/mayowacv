export const BASE_URL = "https://mayowadevv.vercel.app";
export const SITE_NAME = "Mayowa Portfolio";
export const AUTHOR_NAME = "Makinde Mayowa";
export const AUTHOR_HANDLE = "@RedMoonCoder";
export const AUTHOR_LINKEDIN =
  "https://www.linkedin.com/in/makinde-mayowa-4670a51bb";
export const AUTHOR_GITHUB = "https://github.com/mayormankind";
export const OG_IMAGE = `${BASE_URL}/images/profile.png`;

export function buildPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR_NAME,
    url: BASE_URL,
    jobTitle: "Full-Stack Product Engineer",
    description:
      "Senior Full-Stack Engineer with 3+ years specializing in high-performance SaaS platforms, data-driven dashboards, and scalable web applications using Next.js and React.",
    sameAs: [AUTHOR_LINKEDIN, AUTHOR_GITHUB, `https://x.com/RedMoonCoder`],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ibadan",
      addressCountry: "NG",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Supabase",
      "SaaS Architecture",
      "Full-Stack Development",
      "Product Engineering",
    ],
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: BASE_URL,
    description:
      "Portfolio of Makinde Mayowa — Senior Full-Stack Product Engineer building scalable SaaS platforms and web applications.",
    author: {
      "@type": "Person",
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
