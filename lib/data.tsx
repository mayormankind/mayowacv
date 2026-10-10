export interface CaseStudySection {
  subtitle: string;
  title: string;
  description: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  subtext?: string;
}

export interface ArchitecturePoint {
  iconName: string; // Name of a Lucide icon, e.g. "Settings2"
  title: string;
  description: string;
}

export interface ProjectArchitecture {
  title: string;
  subtitle: string;
  diagramType: string; // e.g., "schema", "flow"
  description: string;
  diagramSyntax?: string; // Raw Mermaid syntax string
  points: ArchitecturePoint[];
}

export interface LessonItem {
  iconName: string; // Name of a Lucide icon
  title: string;
  description: string;
  highlight?: string;
}

export interface DocItem {
  title: string;
  iconName: string; // Name of a Lucide icon
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  period: string;
  shortDescription: string;
  longDescription: string;
  heroImage: string;
  logoImage?: string;
  tags: string[];
  images: string[];
  demoVideoUrl?: string;
  links: {
    live?: string;
    repo?: string;
    demo?: string;
  };
  details: {
    challenge: CaseStudySection | null;
    strategy: CaseStudySection | null;
    impact: CaseStudySection | null;
  } | null;
  metrics: ProjectMetric[];
  architecture: ProjectArchitecture | null;
  lessons: LessonItem[];
  docs: DocItem[];
  techStack: string[];
  createdAt?: string;
  updatedAt?: string;
}

export type ProjectListItem = Pick<
  Project,
  "slug" | "title" | "subtitle" | "heroImage"
>;

export type SocialId = "linkedin" | "x" | "github" | "instagram";

export interface Social {
  id: SocialId;
  label: string;
  ref: string;
}

export const socials: Social[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    ref: "https://www.linkedin.com/in/makinde-mayowa-4670a51bb",
  },
  { id: "x", label: "X (Twitter)", ref: "https://x.com/mayowamakinde23" },
  { id: "github", label: "GitHub", ref: "https://github.com/mayormankind" },
  {
    id: "instagram",
    label: "Instagram",
    ref: "https://www.instagram.com/mankind_dev",
  },
];

