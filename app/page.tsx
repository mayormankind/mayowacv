//app/page.tsx
import Hero from "@/components/sections/hero";
import ValueProps from "@/components/sections/valueProps";
// import LatestProduct from "@/components/sections/latestProduct";
import FeaturedCaseStudy from "@/components/sections/featuredCaseStudy";
import { getAllProjects } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Crafting digital experiences that merge technical excellence with visual storytelling.",
};

export default function HomePage() {
  const projects = getAllProjects();
  const featuredProject = projects[0];

  return (
    <>
      <Hero />
      {/* <LatestProduct /> */}
      <ValueProps />
      <FeaturedCaseStudy project={featuredProject} />
    </>
  );
}
