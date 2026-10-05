import React from "react";
import type { TechCategory } from "@/lib/data/stack";

type DeviconEntry = {
  path: string;
  variant: string;
  invert?: boolean;
  source?: "simpleicons"; // falls back to devicon if omitted
  color?: string;         // hex color for simpleicons (no #)
};

const deviconMap: Record<string, DeviconEntry> = {
  TypeScript: { path: "typescript", variant: "typescript-original" },
  JavaScript: { path: "javascript", variant: "javascript-original" },
  PHP: { path: "php", variant: "php-original" },
  Python: { path: "python", variant: "python-original" },
  React: { path: "react", variant: "react-original" },
  "Next.js": { path: "nextjs", variant: "nextjs-plain" },
  "Tailwind CSS": { path: "tailwindcss", variant: "tailwindcss-original" },
  Tailwind: { path: "tailwindcss", variant: "tailwindcss-original" },
  "Vue.js": { path: "vuejs", variant: "vuejs-original" },
  Preact: { path: "preact", variant: "preact-original" },
  "Node.js": { path: "nodejs", variant: "nodejs-original" },
  Express: { path: "express", variant: "express-original", invert: true },
  Laravel: { path: "laravel", variant: "laravel-original" },
  FastAPI: { path: "fastapi", variant: "fastapi-original" },
  PostgreSQL: { path: "postgresql", variant: "postgresql-original" },
  MongoDB: { path: "mongodb", variant: "mongodb-original" },
  MySQL: { path: "mysql", variant: "mysql-original" },
  Prisma: { path: "prisma", variant: "prisma-original", invert: true },
  Supabase: { path: "supabase", variant: "supabase-original" },
  Firebase: { path: "firebase", variant: "firebase-original" },
  Redis: { path: "redis", variant: "redis-original" },
  Docker: { path: "docker", variant: "docker-original" },
  "GitHub Actions": {
    path: "githubactions",
    variant: "githubactions-original",
  },
  Linux: { path: "linux", variant: "linux-original" },
  Git: { path: "git", variant: "git-original" },
  "VS Code": { path: "vscode", variant: "vscode-original" },
  Vercel: { path: "vercel", variant: "vercel-original", invert: true },
  Postman: { path: "postman", variant: "postman-original" },
  Stripe: { source: "simpleicons", path: "stripe", variant: "", color: "635BFF" },
  Shopify: { source: "simpleicons", path: "shopify", variant: "", color: "96BF48" },
  "Shadcn/UI": { source: "simpleicons", path: "shadcnui", variant: "", color: "ffffff" },
};

export function TechIconCard({ name }: { name: string }) {
  const entry = deviconMap[name];

  const cardBase =
    "flex flex-col items-center justify-center gap-3 p-4 bg-white/[0.03] border border-white/[0.07] rounded-md h-full";

  if (!entry) {
    return (
      <div className={cardBase}>
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10">
          <span className="text-primary text-sm font-extrabold" aria-hidden>
            {name.slice(0, 2).toUpperCase()}
          </span>
        </div>
        <span className="text-white/70 text-xs font-medium text-center leading-tight">
          {name}
        </span>
      </div>
    );
  }

  const url =
    entry.source === "simpleicons"
      ? `https://cdn.simpleicons.org/${entry.path}${entry.color ? `/${entry.color}` : ""}`
      : `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${entry.path}/${entry.variant}.svg`;

  return (
    <div className={cardBase}>
      {/* Decorative — the name is already announced next to the icon */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={url}
        alt=""
        width={40}
        height={40}
        className={`w-10 h-10 object-contain${entry.invert ? " brightness-0 invert opacity-80" : ""}`}
      />
      <span className="text-white/70 text-xs font-medium text-center leading-tight">
        {name}
      </span>
    </div>
  );
}

export function TechIconGrid({ categories }: { categories: TechCategory[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
      {categories.map(({ category, items }) => (
        <div key={category} className="flex flex-col gap-3">
          <p className="text-white/65 text-xs font-bold uppercase tracking-[0.25em] mb-1">
            {category}
          </p>
          <ul className="flex flex-col gap-3">
            {items.map((item) => (
              <li key={item}>
                <TechIconCard name={item} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
