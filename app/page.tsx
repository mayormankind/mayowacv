import Hero from "@/components/sections/hero";
import ValueProps from "@/components/sections/valueProps";
import FeaturedCaseStudy from "@/components/sections/featuredCaseStudy";
import Testimonials from "@/components/sections/testimonials";
import AboutPreview from "@/components/sections/aboutPreview";
import { Metadata } from "next";
import { supabase } from "@/lib/supabase/server";
import { keysToCamel } from "@/lib/utils/case-transform";
import { BASE_URL, OG_IMAGE, buildPersonSchema, buildWebsiteSchema } from "@/lib/seo";
import FinalCTA from "@/components/sections/finalCTA";
import JsonLd from "@/components/ui/JsonLd";
import type { Project } from "@/lib/data";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: {
    absolute: "Mayowa Makinde | Full-Stack Product Engineer",
  },
  description:
    "Mayowa Makinde — Full-Stack Product Engineer. Building scalable SaaS platforms, data-driven dashboards, and high-performance web applications from idea to production.",
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
  // Fetch the most recently created published projects from Supabase
  const { data: dbProjects } = await supabase
    .from("projects")
    .select("id, slug, title, short_description, hero_image")
    .eq("status", "published")
    .order("created_at", { ascending: false })
    .limit(3);

  const featuredProjects: Project[] | undefined = dbProjects?.map(keysToCamel);

  return (
    <>
      <JsonLd schema={buildWebsiteSchema()} />
      <JsonLd schema={buildPersonSchema()} />
      <Hero />
      <FeaturedCaseStudy projects={featuredProjects} />
      <ValueProps />
      <AboutPreview />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
