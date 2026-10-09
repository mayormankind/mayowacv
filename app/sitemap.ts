//app/sitemap.ts
import { supabase } from "@/lib/supabase/server";
import { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/seo";

// Regenerate hourly so newly published projects appear without a redeploy
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: dbProjects } = await supabase
    .from("projects")
    .select("slug, hero_image, updated_at")
    .eq("status", "published")
    .order("updated_at", { ascending: false });

  const projects = dbProjects ?? [];

  // Home and /projects change when projects change — reflect the real signal
  const latestProjectUpdate = projects[0]?.updated_at
    ? new Date(projects[0].updated_at)
    : new Date();

  const projectUrls: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    lastModified: new Date(p.updated_at ?? Date.now()),
    changeFrequency: "monthly" as const,
    priority: 0.8,
    ...(p.hero_image ? { images: [p.hero_image] } : {}),
  }));

  return [
    // Core pages — highest priority
    {
      url: BASE_URL,
      lastModified: latestProjectUpdate,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [`${BASE_URL}/images/og-image.png`],
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
      images: [`${BASE_URL}/images/profile.png`],
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: latestProjectUpdate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    // Services sub-pages
    {
      url: `${BASE_URL}/services/saas`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/services/ecommerce`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // Dynamic project pages
    ...projectUrls,
  ];
}
