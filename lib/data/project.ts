// lib/data/project.ts
// Server-side data access + normalization for portfolio projects.
// Rows come from the "projects" Supabase table (managed by dashboard4redmoon).

import { cache } from "react";
import { supabase } from "@/lib/supabase/server";
import { keysToCamel } from "@/lib/utils/case-transform";
import type {
  ArchitecturePoint,
  CaseStudySection,
  DocItem,
  LessonItem,
  Project,
  ProjectListItem,
  ProjectMetric,
} from "@/lib/data";

const PROJECTS_TABLE = "projects";

/** Treats missing values and the "#" placeholder as absent. */
function cleanUrl(url: unknown): string | undefined {
  return typeof url === "string" && url.trim() !== "" && url !== "#"
    ? url.trim()
    : undefined;
}

function cleanString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function stringArray(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((v): v is string => typeof v === "string" && v !== "")
    : [];
}

function caseStudySection(value: unknown): CaseStudySection | null {
  if (!value || typeof value !== "object") return null;
  const s = value as Record<string, unknown>;
  if (!s.title && !s.description) return null;
  return {
    subtitle: cleanString(s.subtitle),
    title: cleanString(s.title),
    description: cleanString(s.description),
  };
}

function metric(value: unknown): ProjectMetric | null {
  if (!value || typeof value !== "object") return null;
  const m = value as Record<string, unknown>;
  if (!m.label && !m.value) return null;
  return {
    label: cleanString(m.label),
    value: cleanString(m.value),
    subtext: cleanString(m.subtext) || undefined,
  };
}

function architecturePoint(value: unknown): ArchitecturePoint | null {
  if (!value || typeof value !== "object") return null;
  const p = value as Record<string, unknown>;
  if (!p.title && !p.description) return null;
  return {
    iconName: cleanString(p.iconName ?? p.icon) || "Settings2",
    title: cleanString(p.title),
    description: cleanString(p.description),
  };
}

function lesson(value: unknown): LessonItem | null {
  if (!value || typeof value !== "object") return null;
  const l = value as Record<string, unknown>;
  if (!l.title && !l.description) return null;
  return {
    iconName: cleanString(l.iconName ?? l.icon) || "GaugeCircle",
    title: cleanString(l.title),
    description: cleanString(l.description),
    highlight: cleanString(l.highlight) || undefined,
  };
}

function doc(value: unknown): DocItem | null {
  if (!value || typeof value !== "object") return null;
  const d = value as Record<string, unknown>;
  const href = cleanUrl(d.href);
  if (!href) return null;
  return {
    title: cleanString(d.title) || "Document",
    iconName: cleanString(d.iconName ?? d.icon) || "FileText",
    href,
  };
}

function list<T>(value: unknown, map: (v: unknown) => T | null): T[] {
  return Array.isArray(value)
    ? (value.map(map).filter(Boolean) as T[])
    : [];
}

/**
 * Guarantees a safe Project shape regardless of what the DB row contains —
 * every optional section normalizes to null/empty arrays and "#" links to
 * undefined, so the page never crashes on sparse rows.
 */
export function normalizeProject(row: Record<string, any>): Project {
  const links =
    row.links && typeof row.links === "object"
      ? (row.links as Record<string, unknown>)
      : {};
  const details =
    row.details && typeof row.details === "object"
      ? (row.details as Record<string, unknown>)
      : null;
  const arch =
    row.architecture && typeof row.architecture === "object"
      ? (row.architecture as Record<string, unknown>)
      : null;

  return {
    slug: cleanString(row.slug),
    title: cleanString(row.title),
    subtitle: cleanString(row.subtitle),
    category: cleanString(row.category),
    period: cleanString(row.period),
    shortDescription: cleanString(row.shortDescription),
    longDescription: cleanString(row.longDescription),
    heroImage: cleanString(row.heroImage),
    logoImage: cleanUrl(row.logoImage),
    tags: stringArray(row.tags),
    images: stringArray(row.images),
    demoVideoUrl: cleanUrl(row.demoVideoUrl),
    links: {
      live: cleanUrl(links.live),
      repo: cleanUrl(links.repo),
      demo: cleanUrl(links.demo),
    },
    details: details
      ? {
          challenge: caseStudySection(details.challenge),
          strategy: caseStudySection(details.strategy),
          impact: caseStudySection(details.impact),
        }
      : null,
    metrics: list(row.metrics, metric),
    architecture: arch
      ? {
          title: cleanString(arch.title),
          subtitle: cleanString(arch.subtitle),
          diagramType: cleanString(arch.diagramType),
          description: cleanString(arch.description),
          diagramSyntax: cleanString(arch.diagramSyntax) || undefined,
          points: list(arch.points, architecturePoint),
        }
      : null,
    lessons: list(row.lessons, lesson),
    docs: list(row.docs, doc),
    techStack: stringArray(row.techStack),
    createdAt: cleanString(row.createdAt) || undefined,
    updatedAt: cleanString(row.updatedAt) || undefined,
  };
}

/**
 * Fetches a published project once per request — React cache() dedupes the
 * call between generateMetadata() and the page component.
 */
export const fetchProject = cache(
  async (slug: string): Promise<Project | undefined> => {
    const { data } = await supabase
      .from(PROJECTS_TABLE)
      .select("*")
      .eq("slug", slug)
      .eq("status", "published")
      .single();

    if (!data) return undefined;
    return normalizeProject(keysToCamel(data));
  },
);

/**
 * Minimal project list, ordered identically to the /projects listing page
 * (created_at desc), used to compute next/previous neighbours circularly.
 */
export const fetchPublishedProjectList = cache(
  async (): Promise<ProjectListItem[]> => {
    const { data } = await supabase
      .from(PROJECTS_TABLE)
      .select("slug, title, subtitle, hero_image")
      .eq("status", "published")
      .order("created_at", { ascending: false });

    return (data ?? []).map((row) => keysToCamel(row) as ProjectListItem);
  },
);
