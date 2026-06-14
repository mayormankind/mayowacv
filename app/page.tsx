import Hero from "@/components/sections/hero";
import ValueProps from "@/components/sections/valueProps";
import FeaturedCaseStudy from "@/components/sections/featuredCaseStudy";
import Testimonials from "@/components/sections/testimonials";
import { Metadata } from "next";
import { supabase } from "@/lib/supabase/server";
import { keysToCamel } from "@/lib/utils/case-transform";
import { BASE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  description:
    "Makinde Mayowa — Senior Full-Stack Product Engineer. Building scalable SaaS platforms, data-driven dashboards, and high-performance web applications from idea to production.",
  keywords: [
    "Full-Stack Engineer",
    "Product Engineer",
    "Next.js",
    "React",
    "SaaS Developer",
    "Makinde Mayowa portfolio",
  ],
  alternates: {
    canonical: BASE_URL,
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
      <Hero latestProject={featuredProject} />
      <ValueProps />
      <FeaturedCaseStudy project={featuredProject} />
      <Testimonials />
    </>
  );
}
