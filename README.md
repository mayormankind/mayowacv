# Mayowa Makinde Portfolio

A high-performance, SEO-optimized portfolio website for **Mayowa Makinde** — a full-stack product engineer building scalable SaaS platforms, data-driven dashboards, and web applications.

**Live Site:** [mayowamakinde.dev](https://www.mayowamakinde.dev)

---

## Features

- **Server-rendered marketing pages** with Next.js App Router
- **CMS-driven project case studies** loaded from Supabase
- **Progressive Web App (PWA)** support with a generated web manifest and service worker
- **SEO-first architecture**: sitemap, robots, canonical tags, Open Graph, Twitter cards, JSON-LD structured data
- **Animated UI** with Framer Motion and scroll-triggered reveal components
- **Working contact form** with Nodemailer email delivery
- **Responsive design** for desktop and mobile
- **Custom dark-themed design system** using Tailwind CSS v4

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16 App Router |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI | React 19, Lucide React |
| Animation | Framer Motion |
| Backend/DB | Supabase (PostgreSQL) |
| Email | Nodemailer (Gmail SMTP) |
| Deployment | Vercel |
| Package Manager | pnpm |

---

## Architecture

### App Router (Next.js 16+)

The project uses the **Next.js App Router** pattern. Each folder under `app/` maps to a public URL and co-locates its page layout, data fetching, and metadata.

### Server Components by Default

- Page metadata (`metadata` exports) and JSON-LD schemas are rendered server-side for SEO.
- Supabase data fetching happens in `page.tsx` files via `lib/supabase/server.ts` so project content is available on first paint.
- Client interactivity is isolated to components marked `"use client"` (e.g. `components/sections/hero.tsx`, `components/ui/AnimateIn.tsx`).

### SEO Strategy

SEO is centralized in `lib/seo.ts` and applied per page:

- `app/layout.tsx` sets global metadata, Open Graph, Twitter card, authors, icons, and robots instructions.
- Each route (`page.tsx`) overrides `title`, `description`, `keywords`, and `canonical` via `alternates.canonical`.
- `app/sitemap.ts` generates a dynamic sitemap from Supabase projects.
- `app/robots.ts` exposes robots rules and the sitemap URL.
- `components/ui/JsonLd.tsx` injects schema.org structured data (Person, WebSite, SoftwareApplication, BreadcrumbList).

### PWA

- `app/manifest.ts` defines the installable web app manifest.
- `public/sw.js` is a custom service worker.
- `components/ui/PWARegister.tsx` registers the service worker on the client.
- `public/images/logo*.png` provide launcher and maskable icons.

### Contact Form

- `app/api/contact/route.ts` is a Next.js Route Handler.
- It receives form submissions and sends two emails via Nodemailer:
  1. A confirmation email to the sender.
  2. A notification email to the site owner.
- Templates use responsive HTML tables for consistent rendering.

### Data Flow

```
Supabase (projects table)
        ↓
   lib/supabase/server.ts
        ↓
    app/page.tsx          → featured case study
    app/projects/page.tsx → project grid
    app/projects/[slug]   → case study detail
```

### Reusable UI Components

- `components/ui/AnimateIn.tsx` — scroll-triggered entrance animations
- `components/ui/JsonLd.tsx` — JSON-LD script injection
- `components/ui/PWARegister.tsx` — service worker registration
- `components/ui/ImageCarousel.tsx` — project image gallery with lightbox
- `components/ui/VideoPlayer.tsx` — video embed support
- `components/ui/TextLightUp.tsx` — word-by-word scroll highlight
- `components/ui/TechStack.tsx` — technology icon grid

---

## Project Structure

```
mayowacv/
├── app/                    # Next.js App Router
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   ├── saas/page.tsx
│   │   ├── ecommerce/page.tsx
│   │   └── fintech/page.tsx
│   ├── stacks/page.tsx
│   ├── api/contact/route.ts
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── manifest.ts
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Page section components
│   └── ui/                 # Reusable animation + utility components
├── lib/
│   ├── data.tsx            # Shared types and social links
│   ├── seo.ts              # SEO constants and schema builders
│   ├── supabase/server.ts  # Supabase client
│   └── utils/case-transform.ts
├── public/
│   ├── images/             # Logos, favicons, profile, project assets
│   ├── assets/             # Resume PDF
│   ├── sw.js               # Custom service worker
│   └── google*.html        # Google Search Console verification
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## Environment Variables

Create a `.env.local` file in the project root:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Email (Gmail SMTP)
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
SMTP_FROM=your_email@gmail.com

# Optional: Google Search Console
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_verification_code
```

---

## Getting Started

1. **Install dependencies:**

```bash
pnpm install
```

2. **Set up environment variables** as shown above.

3. **Run the development server:**

```bash
pnpm dev
```

4. **Open** [http://localhost:3000](http://localhost:3000) in your browser.

---

## Build and Deployment

```bash
pnpm build
```

The recommended deployment target is **Vercel**. Connect the GitHub repository and point the production domain to `www.mayowamakinde.dev`. A 301 redirect from the legacy `mayowadevv.vercel.app` domain is already configured in `next.config.ts`.

---

## Notes

- `manifest.ts` (the file you asked about) generates the PWA web app manifest automatically. It is what browsers read when a user installs your site as an app.
- The project uses Tailwind CSS v4 with `globals.css` for theming.
- Framer Motion is used for entrance and interaction animations on supported components.

---

## Author

**Mayowa Makinde** — Full-Stack Product Engineer

- [Portfolio](https://www.mayowamakinde.dev)
- [LinkedIn](https://www.linkedin.com/in/makinde-mayowa-4670a51bb)
- [GitHub](https://github.com/mayormankind)
- [Twitter / X](https://x.com/RedMoonCoder)

## License

This project is private and is not licensed for public use.
