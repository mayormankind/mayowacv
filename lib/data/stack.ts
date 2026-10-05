// lib/data/stack.ts
// Single source of truth for the Toolbox section on the About page.
// [OWNER] Trim any tool here that isn't backed by shipped work.

export type TechCategory = {
  category: string;
  items: string[];
};

export const toolsOfTrade: TechCategory[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "PHP"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Preact"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Firebase", "FastAPI"],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "MongoDB", "Supabase", "Redis"],
  },
  {
    category: "DevOps",
    items: ["Docker", "Git", "GitHub Actions", "Linux"],
  },
  {
    category: "Tools",
    items: ["VS Code", "Postman", "Stripe", "Prisma"],
  },
];

// [OWNER] Confirm accuracy.
export const currentlyExploring =
  "Performance optimisation, AI integrations, better developer tooling, data engineering.";
