import Hero from "@/components/sections/hero";
import ValueProps from "@/components/sections/valueProps";
import FeaturedCaseStudy from "@/components/sections/featuredCaseStudy";
import Testimonials from "@/components/sections/testimonials";
import WorkingTogether from "@/components/sections/workingTogether";
import { Metadata } from "next";
import { supabase } from "@/lib/supabase/server";
import { keysToCamel } from "@/lib/utils/case-transform";
import { BASE_URL, OG_IMAGE, buildPersonSchema, buildWebsiteSchema } from "@/lib/seo";
import FinalCTA from "@/components/sections/finalCTA";
import JsonLd from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Mayowa Makinde | Full-Stack Product Engineer",
  description:
    "Mayowa Makinde — Senior Full-Stack Product Engineer. Building scalable SaaS platforms, data-driven dashboards, and high-performance web applications from idea to production.",
  keywords: [
    "Full-Stack Engineer",
    "Product Engineer",
    "Next.js",
    "React",
    "Mayowa Makinde",
    "Makinde Mayowa",
    "SaaS Developer",
    "Mayowa Makinde portfolio",
    "Makinde Mayowa portfolio",
    "Full-Stack developer Nigeria",
    "React developer for hire",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Mayowa Makinde | Full-Stack Product Engineer",
    description:
      "Building scalable SaaS platforms, data-driven dashboards, and high-performance web applications from idea to production.",
    url: BASE_URL,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Mayowa Makinde — Full-Stack Product Engineer",
      },
    ],
  },
  twitter: {
    title: "Mayowa Makinde | Full-Stack Product Engineer",
    description:
      "Building scalable SaaS platforms, data-driven dashboards, and high-performance web applications.",
    images: [OG_IMAGE],
  },
};

export default async function HomePage() {
  // Fetch the latest published project from Supabase
  const { data: dbProjects } = await supabase
    .from("projects")
    .select("*")
    .eq("status", "published")
    .order("updated_at", { ascending: false })
    .limit(1);

  const featuredProject = dbProjects && dbProjects.length > 0
    ? keysToCamel(dbProjects[0])
    : undefined;

  return (
    <>
      <JsonLd schema={buildWebsiteSchema()} />
      <JsonLd schema={buildPersonSchema()} />
      <Hero latestProject={featuredProject} />
      <ValueProps />
      <FeaturedCaseStudy project={featuredProject} />
      <Testimonials />
      <WorkingTogether />
      <FinalCTA />
    </>
  );
}
