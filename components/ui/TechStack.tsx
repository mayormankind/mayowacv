import React from "react";

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
    "flex flex-col items-center justify-center gap-3 p-4 bg-white/[0.03] border border-white/[0.07] rounded-xl hover:scale-95 active:scale-90 transition-transform duration-200 cursor-default";

  if (!entry) {
    return (
      <div className={cardBase}>
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10">
          <span className="text-primary text-sm font-extrabold">
            {name.slice(0, 2).toUpperCase()}
          </span>
        </div>
        <span className="text-white/50 text-[11px] font-medium text-center leading-tight">
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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={url}
        alt={name}
        width={40}
        height={40}
        className={`w-10 h-10 object-contain${entry.invert ? " brightness-0 invert opacity-80" : ""}`}
      />
      <span className="text-white/50 text-[11px] font-medium text-center leading-tight">
        {name}
      </span>
    </div>
  );
}

type TechCategory = {
  category: string;
  items: string[];
};

export function TechIconGrid({ categories }: { categories: TechCategory[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
      {categories.map(({ category, items }) => (
        <div key={category} className="flex flex-col gap-3">
          <p className="text-white/30 text-[9px] font-extrabold uppercase tracking-[0.3em] mb-1">
            {category}
          </p>
          {items.map((item) => (
            <TechIconCard key={item} name={item} />
          ))}
        </div>
      ))}
    </div>
  );
}
