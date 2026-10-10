# Portfolio Project Detail Page: Fix List for Coding Agent

**Project:** mayowamakinde.dev (Next.js App Router, Tailwind v4, framer-motion, Supabase)
**Scope:** `app/projects/[slug]/page.tsx` and the components it uses: `CaseStudyGrid`, `VideoPlayer`, `ImageCarousel`, `MermaidDiagram`. The page is **dynamic**: every section is driven by a `projects` row in Supabase, so changes must work for any project (including ones with missing fields), not just TheoGrader.
**Context:** The Home, About, Stack, Contact and Services passes are tracked in their own files. Reuse what they created (`SectionHeader`, `Button`, `CTASection`, the type scale, the radius scale, the contrast rules, `MotionConfig reducedMotion="user"`, `SITE` config). Do not create parallel versions.

The pasted `CaseStudyGrid` has no card styling, but the screenshot shows bordered cards. Work from the code in the repo, not the paste.

**Rules for the agent**
- Work phase by phase and run `npm run build` after each one. Test with at least two projects, including one that has no video, no metrics, no architecture diagram and no screenshots.
- Items marked **[OWNER]** need a decision or content from the site owner. Implement the structure with a clearly marked placeholder and list open items in your final report.
- Keep all new fields **optional** and backward compatible. Existing rows must keep working without a migration.

---
## Phase 1: Data layer and robustness

### 1.1 Draft projects are publicly reachable
- `fetchProject` selects by slug with **no `status` filter**, so an unpublished row is served at its URL. Add `.eq("status", "published")`. (If a preview mode is wanted, gate it behind an authenticated flag and `robots: noindex`; otherwise skip it.)

### 1.2 Fetch once, only what is needed
- `fetchProject` runs in both `generateMetadata` and the page. Wrap it in React `cache()` so it runs once per request.
- The "next project" query does `select("*")` for every published project just to find a neighbour, with **no `order`**, so "next" is arbitrary and can differ from the Projects list. Select only `slug, title, subtitle, hero_image`, order it the same way as the Projects listing page (use the same `sort_order` or `created_at` the listing uses; add a shared helper), and compute next (and previous) circularly.
- Add `export const revalidate = 3600` (or on-demand revalidation) so content edits appear without a rebuild.

### 1.3 Normalise the project at the data boundary
- The page crashes when optional data is missing: `project.links.live` and `project.links.demo` (no `?.`), `project.techStack.map`, `project.details.challenge/strategy/impact`, `project.architecture.points.map`.
- Create `normalizeProject(row)` in `lib/data/project.ts` (zod schema with defaults) used right after `keysToCamel`. It returns safe values: empty arrays, `links: {}`, and `null` for absent objects. Replace the `"#"` sentinel for links with `null`. Remove every `any` in the page (`point: any`, `lesson: any`, `doc: any`) by using real types.
- Icons come from the database as strings, so delete the component-icon branches (`typeof point.icon === "string" || point.iconName ? <Icon/> : <point.icon/>`) in architecture points, lessons and docs; keep only `<Icon name=... />` with a fallback icon.
- Render each section only when it has content (screenshots, case-study cards, architecture, lessons, metrics, docs).

### 1.4 New optional fields (all backward compatible) **[OWNER to confirm names]**
- `summary` (string, ≤ 220 characters): one or two sentences for the hero.
- `role` (string, for example "Solo developer"), `team` (string, optional).
- `status` (enum: `live`, `deployed`, `prototype`, `case_study`, `archived`).
- `links.code` (repository URL), plus the existing `links.live`.
- `ogImage` (1200x630 image URL).
- `images`: accept either `string[]` (existing) or `{ src, alt, width?, height? }[]`; normalise strings to `{ src, alt: "" }`.
- `results` (array of `{ label, value, note? }`), used for outcomes or evaluation figures.
- Lesson items may optionally include `problem`, `decision`, `tradeoff`; if absent, fall back to `description`.
- If an admin form for projects exists, add these fields to it.

### 1.5 Metadata
- Use `ogImage` when present; otherwise fall back to `heroImage` **without** claiming 1200x630 (omit `width`/`height` or use the real dimensions). Add `twitter.card: "summary_large_image"` (as in Services).
- Keep the JSON-LD; add `datePublished` or `dateCreated` to the software schema if a date exists.

---

## Phase 2: Page structure and content
### 2.1 Hero
- The hero currently renders `longDescription`, about 12 lines of 20px text, which pushes the video, screenshots and every other section below the fold on a laptop. Use `summary` (fall back to the first sentence or two of `shortDescription`) in the hero. Move `longDescription` into a collapsible "Overview" or merge it into the Challenge card, so it is not duplicated by the three case-study cards.
- Title: shared page-h1 scale (`text-4xl md:text-6xl lg:text-7xl`, `tracking-[-0.03em]`, `text-balance`) instead of `text-5xl md:text-8xl leading-[0.9]`.
- Add a visible back link above the title: "← All projects" (the breadcrumb JSON-LD already exists).
- Replace the lone `LIVE EXPERIENCE ↗` text link (10px, floating at the far right and bottom of the hero) with a button row directly under the summary: primary "View live app ↗" (only if `links.live`), secondary "View code ↗" (only if `links.code`). Use the shared `Button` and open externally with `rel="noopener noreferrer"`.
- Add a quick-facts strip under the buttons, as a `<dl>`: **Role**, **Timeline** (`period`), **Status**, **Stack** (the first 5 `techStack` entries as chips, with "+N" linking to the full list). This is the information a recruiter looks for first and it is currently hidden at the bottom of the sidebar.
- The subtitle pill and the period text move into the same strip or sit above the title at 12px (not 10px).

### 2.2 Status label must come from data
- `VideoPlayer` hard-codes a pulsing green "Stable Production Release" badge on **every** project. Replace it with the `status` field mapped to honest labels (for example "Live", "Deployed prototype", "Final-year project", "Case study only"). **[OWNER]** TheoGrader's own description says it is a final-year project, so "Stable Production Release" overclaims. Show the badge in the quick-facts strip, not on top of the media.

### 2.3 On-this-page navigation
- The sections have anchor ids (`architecture`, `lessons`) but nothing links to them. Add an "On this page" list at the top of the sticky aside (Overview, Screenshots, Case study, Architecture, Lessons), highlighting the current section with `IntersectionObserver`. Only list sections that exist. Hide it on mobile.

### 2.4 Case-study cards (`CaseStudyGrid`)
- There is no heading above the cards (the page jumps from `<h1>` to `<h3>`). Add `SectionHeader` (eyebrow "Case study", an `<h2>` such as "The story in three parts").
- Body text is clamped to four lines and cut mid-sentence ("...and larg…"), so the most important content of the page is hidden behind a click. Either show the full text (max about 65ch per column), or raise the clamp to about 8 lines. If a disclosure stays, use a real `<button aria-expanded aria-controls>`.
- The "Read more" button only appears after hydration (it depends on a `ResizeObserver` measurement), which causes layout shift and leaves clipped text with no way to expand it when JavaScript is off. Prefer a CSS-only `<details>`/`<summary>` or just no clamp.
- Text: `text-white/50 text-sm leading-loose` → `text-white/70 text-base leading-relaxed`. Eyebrow 12px via the shared style.

### 2.6 Architecture section
- Subtitle heading and the thick red `h-1 w-20` bar: use `SectionHeader` for consistency with the rest of the site.
- Heading levels: points use `<h4>` under an `<h2>` (skipping `<h3>`); make them `<h3>`. Same for lesson titles.
- The sticky aside currently repeats Documentation and Tech Stack next to every section, which is fine, but see 2.8.

### 2.7 Lessons
- Keep the content (it is the strongest part of the site). Make it scannable: if `problem`, `decision` and `tradeoff` exist render them as three short labelled lines; otherwise render `description` in paragraphs with `max-w-prose`.
- Remove the hover effect on the icon square (`group-hover:bg-primary group-hover:text-white`): it is not interactive.

### 2.8 Sidebar
- `sticky top-32` on a column that can contain Metrics, Docs and Tech Stack can exceed the viewport height, making the bottom unreachable. Add `max-h-[calc(100vh-9rem)] overflow-y-auto` to the sticky wrapper (and hide the scrollbar).
- Documentation links: open in a new tab with `target="_blank" rel="noopener noreferrer"`, and a descriptive accessible name ("Project README (opens in a new tab)").
- Tech chips: `text-[10px]` → `text-xs`, `text-white/80`, `px-2.5 py-1`. With the quick-facts strip showing the top technologies, keep the full list here under the label "Full tech stack".
- Metrics: if present, add a short `note` line under each value; labels 12px.

### 2.9 Bottom of the page
- Add the shared `CTASection` above the next-project block: headline along the lines of "Want something like this built?", primary "Start a Project" linking to `/contact` with the matching `type`, secondary "View all projects". Today the case study ends without any way to contact you.
- Replace the next-project block's `<Link><button>` nesting (invalid HTML) with proper links styled via the shared `Button`. Content: "Next case study" label, the next project's title and subtitle, and a thumbnail if available. The sentence "Check out Code Reelers Launch Page, a Tech Team Launch project" reads awkwardly; use "Next: {title}" with `{subtitle}` as the description.

---

## Phase 3: Media components

### 3.1 `VideoPlayer`
- When there is no video, the component shows a live-looking, dimmed play button with `cursor-not-allowed` and a tiny "Demo coming soon" tag. It is a dead control. If there is no playable URL, **do not render the player at all** (screenshots lead the media section). If the owner wants the placeholder, show a static poster with a caption below it ("Demo video coming soon"), with no button.
- Poster: render with `next/image` (`fill`, `sizes`, meaningful `alt`), `object-contain` on a dark background, at full opacity (currently `opacity-60`, `bg-cover`, which crops the left sidebar of the app screenshot and washes it out).
- Overlay badges (status, "Demo coming soon") sit on top of the screenshot and cover the app's own UI (bell icon, Logout button). Move any status text out of the media frame (see 2.2). On mobile the badge is `bottom-0`, touching the frame edge.
- Direct video: add `playsInline preload="metadata"`, keep `controls`, and restrict direct playback to `.mp4` and `.webm` (`.mov` is unreliable). The `Play` icon's `text-4xl` has no effect on an SVG; set `size-8`.
- Add `aria-label="Play demo video"` to the play button.

### 3.2 `ImageCarousel`
- **Cropping:** every slide is a CSS `background-image` with `bg-cover`, which crops UI screenshots (left sidebar and right-hand buttons are cut off in the screenshots). Use `next/image` with `object-contain` on `bg-black/40` in a stable aspect ratio (for example `aspect-[16/10]`), or use the image's real `width`/`height` when available. Provide the `alt` from `images[].alt` (fallback `"{title} screenshot {n}"`).
- **Loading:** all slides and thumbnails are downloaded eagerly at full size. Load only the current slide (with `priority` for the first) and preload the next one; thumbnails use `sizes="96px"` and `loading="lazy"`.
- **Autoplay:** it advances every 4.5 seconds and pauses only on mouse hover. Remove autoplay (preferred for screenshots people want to read), or add a visible pause/play button, pause on focus, and never autoplay under `prefers-reduced-motion`.
- **Controls hidden unless hovered:** the arrows and zoom button are `opacity-0 group-hover:opacity-100`, so they do not exist for touch users or keyboard focus. Make them always visible (or `focus-visible:opacity-100` plus visible on touch), 44x44px, with `aria-label`s ("Previous screenshot", "Next screenshot", "View full size").
- **Dots and thumbnails:** dots are 8px targets without labels. Give them `aria-label="Go to screenshot n"` and `aria-current`, enlarge the hit area, and scroll the active thumbnail into view.
- **Semantics:** wrap in `role="region" aria-roledescription="carousel" aria-label="{title} screenshots"`, announce the slide change politely, and support Left/Right arrow keys when focused. Add touch swipe (framer-motion drag or pointer events).
- **Lightbox:** add `role="dialog" aria-modal="true" aria-label`, lock body scroll, trap and restore focus, and add `aria-label`s to the close, previous and next buttons. Use the shared `Modal` primitive (3.4). Let people zoom or open the original in a new tab, since the screenshots contain small UI text.

### 3.3 `MermaidDiagram`
- **First impression:** the diagram viewport is a fixed `h-72`; the diagram is a tall vertical flowchart, so only the top 3 boxes show and the rest is cut off ("FastAPI AI Service on…"). Make the default view fit the container width (compute scale = container width / SVG width, clamp to a sensible minimum), let the viewport height follow the diagram up to `max-h-[560px]`, and add a "Fit" button next to the zoom controls. Text inside nodes must be at least about 12px at fit scale; if not, the inline view should show a "View full diagram" button as the primary action.
- **Truncated description:** the header shows the diagram description as one clipped line ("...deployed on Verc…"). Move it to a `<figcaption>` below the diagram (full text), and keep only the title in the header.
- **Accessibility:** wrap the diagram in `<figure>`; the clickable viewport is a `role="button"` that hides the SVG's content from assistive tech and only handles Enter (add Space). Give the figure an accessible text alternative (the description and, for DB-authored diagrams, optionally a `textAlternative` field).
- **Modal:** use the shared `Modal` primitive (3.4).
- **Security and weight:** set `securityLevel: "strict"` explicitly in `mermaid.initialize` (the syntax is database content). Load `mermaid` only when the diagram scrolls near the viewport (`IntersectionObserver`), since it is a very large bundle and sits below the fold. Optional follow-up: pre-render SVGs at build time.
- **Zoom:** the CSS `zoom` property is non-standard; implement scaling by setting the SVG width (or `transform: scale` with a sized wrapper). Add a small hint for desktop: "Ctrl + scroll to zoom".

### 3.4 One shared modal primitive
- The site has three hand-rolled modals (Home testimonial video, image lightbox, diagram modal), each missing some of: `role="dialog"`, `aria-modal`, focus trap, focus return, Escape, scroll lock. Create `components/ui/Modal.tsx` (portal, backdrop click, Escape, scroll lock, focus trap and restore, `aria-labelledby`) and migrate all three. Remove the duplicated scroll-lock code from `MermaidDiagram`.

---

## Phase 4: Typography and contrast

- Section headings: `SectionHeader` everywhere (eyebrow 12px `text-primary-soft`, h2 `text-3xl md:text-5xl font-extrabold tracking-tight`). Remove the grey `h2` used as a small label ("Project Screenshots" at 10px, `white/40`) and use a proper eyebrow plus h2.
- Heading order: h1 title → h2 per section → h3 inside sections (case-study cards, architecture points, lesson titles) → h2 or h3 for aside blocks. No h4 without an h3 parent.
- Hover effects on non-interactive items (lesson icon squares, tech chips if any) removed.
- Buttons and links use the shared `Button` and radius scale; the current bottom buttons (`rounded`, custom padding) and doc cards (`rounded`) change to the shared tokens. it should have the current button form though - just make it shared.
- Curly quotes and apostrophes in any static strings.
---

## Phase 5: Performance

- Hero and above-the-fold content: remove `AnimateIn` from the h1, summary and button row (it starts invisible and delays LCP); keep entrance animation from the screenshots section down, with the shared stagger cap.
- Media: `next/image` everywhere with `sizes` (the page currently uses CSS backgrounds in the poster, carousel and thumbnails); check `next.config` `images.remotePatterns` for the Supabase host.
- `mermaid` lazy-loaded on intersection (3.3); modals mounted only when open.
- Remove unused imports and dead branches after the refactor.

---

## Acceptance checklist
- [ ] An unpublished project URL returns a 404; the page does not crash for a project with no links, no stack, no architecture, no images or no lessons.
- [ ] "Next project" order matches the Projects listing page; only minimal columns are fetched; the project is fetched once per request.
- [ ] The hero shows a short summary, a back link, "View live app" and "View code" buttons, and the quick-facts strip; the first screenshot or case-study heading is visible near the fold on a 1440x800 viewport.
- [ ] No hard-coded "Stable Production Release"; the status badge is driven by data and sits outside the media frame.
- [ ] No dead play button when there is no video.
- [ ] Screenshots are never cropped, load lazily, have alt text and are navigable by touch, mouse and keyboard; the carousel does not autoplay without a pause control and never under reduced motion.
- [ ] The architecture diagram is readable at first view without scrolling inside a tiny box; the full description is visible; the modal and lightbox trap focus, close on Escape and return focus.
- [ ] Case-study text is fully readable without JavaScript and without layout shift.
- [ ] Heading hierarchy is h1, h2, h3 with no skips;
- [ ] The page ends with a contact CTA and a next-project link, aligned to the same left edge as the rest of the page, with no `<button>` inside a `<Link>`.
- [ ] Home testimonials video modal, image lightbox and diagram modal all use the shared `Modal`.
- [ ] The final report lists every open **[OWNER]** item.