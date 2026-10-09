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
  images?: string[];
  demoVideoUrl?: string;
  links: {
    live: string;
    repo?: string;
    demo?: string;
  };
  details: {
    challenge: {
      subtitle: string;
      title: string;
      description: string;
    };
    strategy: {
      subtitle: string;
      title: string;
      description: string;
    };
    impact: {
      subtitle: string;
      title: string;
      description: string;
    };
  };
  metrics: {
    label: string;
    value: string;
    subtext?: string;
  }[];
  architecture: {
    title: string;
    subtitle: string;
    diagramType: string; // e.g., "schema", "flow"
    description: string;
    diagramSyntax?: string; // Raw Mermaid syntax string
    points: {
      icon: any; // using any for Icon component type simplicity here
      title: string;
      description: string;
    }[];
  };
  lessons: {
    icon: any;
    title: string;
    description: string;
    highlight?: string;
  }[];
  docs: {
    title: string;
    icon: any;
    href: string;
  }[];
  techStack: string[];
}

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

