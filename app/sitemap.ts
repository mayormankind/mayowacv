import { getAllProjects } from "@/lib/data";
import { supabase } from "@/lib/supabase/server";
import { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const mockProjects = getAllProjects();

  const { data: dbProjects } = await supabase
    .from("projects")
    .select("slug, updated_at")
    .eq("status", "published");

  // Merge: DB projects take precedence over mock by slug
  const projectMap = new Map<string, Date>();
  mockProjects.forEach((p) => projectMap.set(p.slug, new Date()));
  (dbProjects ?? []).forEach((p) =>
    projectMap.set(p.slug, new Date(p.updated_at ?? Date.now()))
  );

  const projectUrls: MetadataRoute.Sitemap = Array.from(
    projectMap.entries()
  ).map(([slug, lastMod]) => ({
    url: `${BASE_URL}/projects/${slug}`,
    lastModified: lastMod,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/stacks`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    ...projectUrls,
  ];
}
