import Hero from "@/components/sections/hero";
import ValueProps from "@/components/sections/valueProps";
import LatestProduct from "@/components/sections/latestProduct";
import FeaturedCaseStudy from "@/components/sections/featuredCaseStudy";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LatestProduct />
      <ValueProps />
      <FeaturedCaseStudy />
    </>
  );
}
