import Hero from "@/components/sections/hero";
import ValueProps from "@/components/sections/valueProps";
import FeaturedCaseStudy from "@/components/sections/featuredCaseStudy";
import { getAllProjects } from "@/lib/data";
import { Metadata } from "next";
import { supabase } from "@/lib/supabase/server";
import { keysToCamel } from "@/lib/utils/case-transform";

export const metadata: Metadata = {
  description:
    "Crafting digital experiences that merge technical excellence with visual storytelling.",
};

export default async function HomePage() {
  // Fetch the latest published project from Supabase
  const { data: dbProjects } = await supabase
    .from("projects")
    .select("*")
    .eq("status", "published")
    .order("updated_at", { ascending: false })
    .limit(1);

  let featuredProject;

  if (dbProjects && dbProjects.length > 0) {
    featuredProject = keysToCamel(dbProjects[0]);
  } else {
    // Fallback to mock data
    const mockProjects = getAllProjects();
    featuredProject = mockProjects[0];
  }

  return (
    <>
      <Hero />
      <ValueProps />
      <FeaturedCaseStudy project={featuredProject} />
    </>
  );
}
