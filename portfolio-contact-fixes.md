# Portfolio Contact Page: Fix List for Coding Agent

**Project:** mayowamakinde.dev (Next.js App Router, Tailwind v4, framer-motion)
**Scope:** `app/contact/page.tsx`, `components/sections/ContactForm.tsx`, the `/api/contact` route, `lib/site-config.ts`, `lib/data` (`socials`), and the footer where it shares the social icons.
**Context:** The Home, About and Stack passes are tracked in their own files. Reuse what they created (`SectionHeader`, `Button`, `CTASection`, the type scale, the radius scale, the contrast rules, `MotionConfig reducedMotion="user"`, `SITE` config). Do not create parallel versions.

Already fixed and visible in the latest screenshot (no action): Manrope renders correctly, the navbar shows one Contact button, the location line comes from `SITE`.

**Rules for the agent**
- Work phase by phase and run `npm run build` after each one.
- Items marked **[OWNER]** need a decision or content from the site owner. Implement the structure with a clearly marked placeholder and list open items in your final report.
- The `/api/contact` route was not shared. Phase 4 lists what to verify or add there; inspect the existing route first and do not break the current payload shape without updating the client.

---

## Phase 1: Bugs and accessibility (highest priority)

### 1.1 Social icons render as text
- Symptom: in the "Find me online" row only LinkedIn shows an icon; "X (Twitter)" and "GitHub" render as plain text.
- Cause: `socialIconMap` is keyed by `"LinkedIn"`, `"Twitter"` and `"Github"`, but the `socials` labels are `"LinkedIn"`, `"X (Twitter)"` and `"GitHub"`, so two lookups miss.
- Fix:
  - Add a stable `id` (`"linkedin" | "x" | "github"`) to each entry in `socials` (`lib/data`) and look icons up by `id`, never by label.
  - Create one shared `components/ui/SocialIcon.tsx` (X logo, not the Lucide `Twitter` bird; the footer already uses the X logo). Use it in both the footer and the contact page so they cannot drift.
  - Render each as a plain `<a>` with `target="_blank" rel="noopener noreferrer"`, `aria-label="LinkedIn (opens in a new tab)"` and so on, and a 44x44px hit area (`p-3`). Icons only; no text fallback.

### 1.2 Labels are not connected to inputs
- Every `<label>` is a bare element with no `htmlFor`, and the inputs have no `id`. Clicking a label doesn't focus the field and screen readers announce unlabeled fields.
- Fix: use `useId()` to give each field an `id` and set `htmlFor` on its label. Add `autoComplete="name"` and `autoComplete="email"`, and `inputMode="email"` on the email field. Add `aria-required="true"` alongside `required`.

### 1.3 Project-type picker is a row of unlabeled toggle buttons
- Currently four `<button type="button">` elements that act as a radio group, with no group label, no state announced, and 9px text.
- Fix: replace with a real radio group: `<fieldset>` with a `<legend>` ("How can I help?"), and one visually hidden `<input type="radio" name="projectType" className="peer sr-only">` per option, with a styled `<label>` using `peer-checked:` and `peer-focus-visible:` classes for the selected and focus states. This gives arrow-key navigation and correct semantics without extra JS.
- Label text at least 12px (see 3.1).

### 1.4 Focus indicators are too weak
- Inputs use `outline-none focus:border-primary/50`, a subtle border colour change that fails visible-focus requirements.
- Fix: `focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary-soft/40`, with `outline-none` only if the ring replaces it. Apply the same to the textarea, the radio labels (via `peer-focus-visible`) and the submit button.

### 1.5 Errors and status are not announced
- Error box: add `role="alert"`. Associate field-level problems with `aria-invalid` and `aria-describedby`.
- Loading: add `aria-busy="true"` to the form and wrap fields in `<fieldset disabled={status === "loading"}>` to prevent edits and double submits.
- Success: wrap the success view in `role="status"`, change the `<h3>` to an `<h2>` (there is no h2 above it), and move focus to that heading (`tabIndex={-1}` plus a ref) when the status becomes `"success"`.
- Replace `catch (err: any)` with `catch (err: unknown)` and narrow to `Error`.

---

## Phase 2: Form UX and product decisions

### 2.1 Project types and defaults
- The copy says "Open to contracts, full-time roles, and interesting projects", yet every option is client work. A recruiter has no option that fits.
- New options: **Product MVP, Full-stack build, Scaling & optimization, Consultation, Full-time / contract role, Something else.** **[OWNER]** to confirm wording.
- Do not preselect the first option. The form currently submits "Product MVP" for anyone who doesn't click, which pollutes the data. Make the choice required with an inline message ("Pick the closest option").
- Update the allowed values in the API route (Phase 4) to match.

### 2.2 Optional qualifying fields (keep the form short)
- Add at most two optional fields: **Budget range** (select: "Not sure yet", and ranges) and **Timeline** (select: "As soon as possible", "1–3 months", "Flexible"). **[OWNER]** to decide the budget currency and ranges, or skip budget entirely. Total visible fields must stay at six or fewer.

### 2.3 "What happens next"
- Add three short steps under the intro, for example: 1. You send the details. 2. I reply within 24 hours with questions or a call time. 3. We scope it together and I send a plan and estimate. **[OWNER]** to confirm the process and that the 24-hour promise is true (it appears in the success message and on Services).

### 2.4 Direct contact
- Move email and phone into `SITE` (`lib/site-config.ts`), next to location and timezone. They are hard-coded in the component today. Use `SITE` in the footer and in the Person JSON-LD too.
- Add a **WhatsApp** link (`https://wa.me/2347040829383`) next to the phone number; it is the usual first-contact channel for many clients. **[OWNER]** to confirm the number is on WhatsApp.

### 2.5 Availability line **[OWNER]**
- If true, show a single status line above the heading: a small green dot and "Available for new projects" (add a month if there is a start date). If it can't be kept current, leave it out.

### 2.6 Copy
- The headline "Let's Build Something Great." is the third variation of the same phrase across the site. Suggested: "Tell me what you're **building**."
- Intro: keep it to one sentence plus the existing role line.
- Message placeholder: "What are you trying to build or fix? A few sentences is plenty." (The current one ends with `..`.) Name placeholder "Your name", email placeholder "you@company.com".
- Submit label: "Send message" (the Start a Project buttons across the site lead here, and "Send Inquiry" reads like a form from a different site). Under the button add a line: "I reply within 24 hours. Prefer email? <link>". Remove the `text-lg` class on the send icon; it does nothing on an SVG.
- Server and client validation message for the message field: minimum 20 characters, with a helpful note rather than a bare browser tooltip.

### 2.7 Success state
- Keep "Send another", and add: confirmation that includes the email the person entered ("I'll reply to name@example.com within 24 hours") and two links: "See my work" (`/projects`) and the featured case study.
- Keep the green check icon, but use the same icon size and radius scale as the rest of the site.

### 2.8 Error state
- Replace the raw `data.error` shown to the user with a friendly message plus a fallback: "Couldn't send that. Email me directly at <SITE.email> and I'll pick it up."
- Add a 15-second `AbortController` timeout on the `fetch` with the same friendly fallback.

### 2.9 Layout and mobile order
- On desktop, `lg:items-stretch` plus `mt-auto` on the social block makes the left column taller than the form card (the social row falls below the card's bottom edge in the screenshot). Remove both. Make the left column `lg:sticky lg:top-28 self-start`.
- On mobile the person has to scroll past the heading, intro, email, phone, location and social links before reaching the form. Restructure into three grid children and place them with `order` / `lg:` placement: (1) heading + intro, (2) the form, (3) direct details and socials. On `lg`, (1) and (3) stay stacked in the left column and (2) sits in the right column.
- Form card: remove `backdrop-blur-sm` and `bg-surface/50` (use solid `bg-surface`, `border-white/10`). It sits on a solid background, so the blur only costs performance.
- Radii: card `rounded-md`, inputs and radio labels `rounded-md`, submit button via the shared `Button` (`primary`, large, `h-14`).
---

## Phase 3: Typography and contrast

### 3.1 Labels and small text
- Field labels: `text-[10px] white/40` → `text-xs` (12px) `font-semibold`, `text-white/70`, tracking `0.1em`; remove the `ml-1` offset.
- Radio-option text: `text-[9px] white/40` → `text-xs` (12px), `font-semibold`, `text-white/75` unselected, `text-white` selected.
- Section labels ("Direct", "Location", "Find me online"): `text-[9px] white/20` (practically invisible in the screenshot) → 12px, `text-white/60`.
- Timezone line: `text-xs white/40` → `text-sm white/65`.
- Intro paragraph: `text-sm white/45` → `text-base white/70`, `max-w-sm`, `text-pretty`.
- Direct links: `text-base`.
- Input borders: unify at `border-white/15`; selected radio uses `border-primary`.

### 3.2 Headline
- Use the shared page-h1 scale (`text-4xl md:text-6xl`, `tracking-[-0.03em]`, `text-balance`), matching About. Remove the forced `<br />`s. Use `SectionHeader` for the eyebrow.

---

## Phase 4: Backend and spam protection (inspect `/api/contact` first)

- **Honeypot:** add a hidden text field (for example `company_website`) with `tabIndex={-1}`, `autoComplete="off"` and `aria-hidden`, positioned off-screen with CSS (not `display:none`). If the server receives it filled, return a normal-looking 200 and discard the message.
- **Server-side validation:** validate every field on the server (zod): name 2–80 characters, a valid email, message 20–4000 characters, `projectType` within the allowed list, optional fields within allowed lists. Trim all strings. Return generic errors.
- **Rate limiting:** limit by IP (for example 5 requests per hour; use a KV or Upstash store, or Supabase if one is already in use). Optionally add Cloudflare Turnstile.
- **Delivery:** confirm a notification email is actually sent (and that failures return a 500, not a false success) and that each submission is also stored (for example in a Supabase `contact_messages` table) as a backup. Keep keys server-side only.
- **Optional:** send an automatic confirmation email to the sender with a copy of the message.
- Update the route and the client together if the payload changes (new field names, the new project types, optional budget and timeline).

---

## Phase 5: Performance and code hygiene

- **Split server and client:** `ContactForm.tsx` is one big client component that also holds the static heading, direct details, location and socials. Move the static parts into a server component (`ContactInfo`) and keep only the form in a client component. This removes unnecessary client JavaScript and makes the details visible without hydration.
- **Hero animation:** the heading column is inside `AnimateIn` (starts invisible, 40px offset). Remove the animation from the h1, intro and details; keep at most a short opacity-only fade on the form card.
- **Metadata:** add `twitter` metadata (title, description, images) to match the other pages.
- **JSON-LD:** optionally add a `ContactPage` schema using `SITE` values.
- Use plain `<a>` for external links instead of `next/link`, and remove unused imports (`Link`, `Twitter` once replaced).

---

## Acceptance checklist

- [ ] All three social links show icons (LinkedIn, X, GitHub), the same component as the footer, with 44px hit areas and descriptive `aria-label`s.
- [ ] Clicking any label focuses its field; screen readers announce each field's name and required state; `autocomplete` works for name and email.
- [ ] The project-type picker is a proper radio group: arrow keys move selection, selection is announced, focus ring is visible, nothing is preselected, and choosing one is required.
- [ ] Visible focus ring on every input, radio and button; errors announce via `role="alert"`; success moves focus to the confirmation heading.
- [ ] No text under 12px; labels at least `white/70`; placeholders at least `white/50`; no contrast failures in Lighthouse for `/contact`.
- [ ] On a 375px screen the form appears right after the heading and intro, with contact details below it.
- [ ] On desktop the left column does not extend below the form card, and the form card has no backdrop blur.
- [ ] Submitting with the honeypot filled is silently discarded; invalid payloads are rejected by the server; more than the rate limit is blocked; a failed email send does not show "Message sent".
- [ ] Error state offers a mailto fallback; the request times out after 15 seconds with a friendly message.
- [ ] Email, phone and WhatsApp come from `SITE`; no hard-coded contact details remain in components.
- [ ] `ContactForm` is the only client component for this page; the heading is visible immediately.
- [ ] The final report lists every open **[OWNER]** item.