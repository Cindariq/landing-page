# Cindariq Landing Page — To-Do List

---

## Phase 0 — Foundation & Scaffold

- [x] Initialise Next.js 16 project with TypeScript (strict), App Router, pnpm
- [x] Configure Tailwind CSS v4 with `@theme` directive — implement all colour tokens, type scale, and spacing from §3.2 and §3.4 in `app/globals.css`
- [x] Set up `app/fonts.ts` with `next/font/google` — Inter (400/500/600/700) and Source Serif 4 (400, italic)
- [x] Install and configure shadcn/ui (New York style) — button, card, input, textarea, label, navigation-menu, sheet, form, toast, separator
- [x] Install all dependencies per §6.6 lock-down list (`@phosphor-icons/react`, `zustand`, `zod`, `resend`, `clsx`, `tailwind-merge`, `class-variance-authority`, Radix primitives)
- [x] Set up project directory structure per §6.2 (`app/`, `components/`, `lib/`, `public/`, `tests/`)
- [x] Create `.env.example` with all required variables from §6.5
- [x] Configure `components.json` for shadcn/ui per §7.1
- [x] Configure `next.config.ts` (React Compiler enabled, strict mode)
- [x] Set up ESLint, Prettier with `prettier-plugin-tailwindcss`
- [x] Set up pre-commit hook — hex-literal linter (§3.2 AC) and forbidden-words check (§2.3)
- [x] Configure CI/CD pipeline (GitHub Actions) with all 8 steps from §6.7 (lint → typecheck → forbidden-words → test → e2e → build → Lighthouse CI)
- [x] Write `scripts/check-forbidden-words.ts` per §6.7

---

## Phase 1 — Design System & Base Components

- [x] `<Button />` — all 4 variants (primary, secondary, ghost, link), 3 sizes (sm, md, lg), iconLeft/iconRight props, focus ring, 44px touch target (§5.1)
- [x] `<CindariqLogo />` — Q-mark SVG + wordmark, 4 layouts, 3 colour modes, legible at 16px (§5.2)
- [x] `<SectionContainer />` — 4 background variants, 3 padding sizes, id/aria-labelledby props (§5.3)
- [x] `<Eyebrow />` — 3 colour variants, uppercase tracking (§5.7)
- [x] `<ProcessStep />` — numbered circular badge (Ember border), connector line, showConnector prop (§5.4)
- [x] `<ComplianceCard />` — parchment bg, 32px icon, Cinder/10 border (§5.5)
- [x] `<FeatureCard />` — smoke bg, 48px icon, no border (§5.5)
- [x] `<SectorTile />` — smoke bg, 24px inline icon, steel/30 border (§5.5)
- [x] `<ContactForm />` — all 7 fields (incl. honeypot), Zod validation, blur-time inline errors, aria-describedby on each input (§5.6)
- [x] `<SiteHeader />` — sticky, scroll transition at scrollY > 80, desktop nav, mobile hamburger (§4.2)
- [x] `<MobileMenu />` — full-screen overlay, focus trap, ESC closes (§4.2 AC)
- [x] `<SiteFooter />` — 3 columns + compliance ribbon, registration number env vars (§4.9)
- [x] `<ComplianceRibbon />` — full-width, all registration fields from env (§4.9) — implemented inline in SiteFooter

---

## Phase 2 — State Management

- [x] `lib/store/ui-store.ts` — Zustand store for `mobileMenuOpen` + `scrolled` state per §8.2
- [x] Single `useEffect` scroll listener on layout level (not per-component) for `setScrolled` — extracted to `<ScrollObserver />` rendered once in marketing layout
- [x] `lib/store/form-store.ts` — contact form optimistic state (§8.3 mentions it)
- [x] `lib/schemas/contact.ts` — Zod schema for all contact form fields including E.164 phone validation (§5.6)

---

## Phase 3 — Page Sections (Home)

- [x] `<Hero />` — cinder bg, asymmetric layout (2/3 copy, 1/3 Q-mark), verbatim copy from §4.3, Source Serif 4 italic H1, Ember CTA, secondary text link with arrow
- [x] `<ProblemFraming />` — smoke bg, 3-column `<FeatureCard />` grid, verbatim copy from §4.4 (ShieldCheck, Lock, Recycle icons)
- [x] `<HowItWorks />` — slate bg, 5 `<ProcessStep />` components with horizontal connector (desktop) / vertical timeline (mobile), verbatim copy from §4.5
- [x] `<ComplianceMap />` — parchment bg, 3 `<ComplianceCard />` components, verbatim copy from §4.6 (Cube, Lock, Leaf icons)
- [x] `<SectorGrid />` — smoke bg, 2×2 grid of `<SectorTile />`, verbatim copy from §4.7
- [x] `<ClosingCTA />` — cinder bg, centred, verbatim copy from §4.8, calendar link destination

---

## Phase 4 — Page Assembly (All 7 Routes)

- [x] `/` (Home) — assemble all 7 sections in order per §4.1 section map
- [x] `/how-it-works` — full-page `<HowItWorks />` expansion with supporting content
- [x] `/compliance` — full-page `<ComplianceMap />` expansion with deeper standards content
- [x] `/about` — founder bio, company narrative, AGPO/NEMA/ODPC certificates visible/linked, founder portrait placeholder
- [x] `/contact` — `<ContactForm />` + calendar booking link (Cal.com/Calendly TBD per OPEN-03), reassurance copy
- [x] `/privacy` — legal copy (pending lawyer per OPEN-04)
- [x] `/terms` — legal copy (pending lawyer per OPEN-04)
- [x] `app/(marketing)/layout.tsx` — shared marketing layout with header + footer
- [x] `app/(legal)/layout` — legal pages layout (minimal header)
- [x] Root `app/layout.tsx` — apply fonts, inject Organization JSON-LD, metadata defaults

---

## Phase 5 — Server Actions & Integrations

- [ ] `app/(marketing)/contact/actions.ts` — Next.js Server Action for form submission: Zod validate → honeypot check → rate-limit (3/IP/hr) → Resend email delivery (§5.6)
- [ ] Configure Resend: DKIM/SPF/DMARC on cindariq.co.ke, sender verification
- [ ] Form success state: replace form with confirmation + calendar link
- [ ] Form error state: non-dismissible error banner, keep fields populated
- [ ] Analytics event `contact_form_submit` on success

---

## Phase 6 — SEO & Metadata

- [ ] Site-wide metadata export in `app/layout.tsx` — full config per §9.3 (title template, description, OG, Twitter, robots, keywords)
- [ ] Per-page metadata overrides for all 5 indexed pages per §9.4
- [ ] `app/sitemap.ts` — all 7 routes with priorities per §9.6
- [ ] `app/robots.ts` — allow `/`, disallow `/api/` and `/_next/` per §9.6
- [ ] `app/opengraph-image.tsx` — dynamic OG image (1200×630, cinder bg, Smoke text, tagline) per §9.7
- [ ] `lib/seo/jsonld.ts` — Organization, Service, WebSite schema builders per §9.5
- [ ] Inject JSON-LD `<script>` tags into root layout and relevant pages
- [ ] `app/icon.svg` — Q-mark favicon
- [ ] `app/apple-icon.png` — 180×180 Apple touch icon
- [ ] `app/manifest.ts` — basic PWA manifest
- [ ] Structured data validation pass (schema.org validator)

---

## Phase 7 — Performance

- [ ] Verify all images use `next/image` with correct sizes, priority flags (above-fold only), AVIF/WebP formats
- [ ] Audit `'use client'` usage — must be limited to: mobile menu (Sheet), contact form, scroll listener only (§10.6)
- [ ] Verify font subsetting — Latin only, `display: swap`, Source Serif 4 not preloaded
- [ ] Verify JS bundle < 100 KB compressed, CSS < 30 KB, total page < 350 KB (§10.2)
- [ ] `prefers-reduced-motion` CSS block in `globals.css` per §11.4
- [ ] Add skip-to-content link as first focusable element on every page (§11.2)

---

## Phase 8 — QA & Accessibility

- [ ] Axe-core integration in Playwright E2E tests — zero violations on every route
- [ ] Run Lighthouse CI on all routes — Performance ≥ 90, Accessibility = 100, Best Practices ≥ 95, SEO = 100
- [ ] Keyboard-only navigation pass — tab order, visible focus rings on all interactive elements
- [ ] Screen reader pass (VoiceOver + NVDA) on home, compliance, contact
- [ ] Cross-browser testing matrix per §13.2 (Chrome, Safari, Firefox, Edge, Samsung Internet)
- [ ] Cross-device testing per §13.2 (iPhone 13/14, Android Chrome, iPad, 13" laptop, 27" desktop)
- [ ] Validate heading hierarchy (single H1 per page, logical nesting) on all routes
- [ ] All external links have `rel="noopener noreferrer"` and open in new tab
- [ ] Verify 2% Ember rule visually at each above-the-fold breakpoint (§3.3 AC)
- [ ] Forbidden-words grep passes on all committed copy (§2.3 AC)
- [ ] Verify compliance ribbon registration numbers are populated (not placeholders) before launch

---

## Phase 9 — Launch

- [ ] Populate all [OPEN] items: registration numbers (OPEN-02), calendar platform choice (OPEN-03), phone formatting (OPEN-05)
- [ ] Set up Plausible analytics + GA4 (if opted in)
- [ ] Submit sitemap to Google Search Console; verify domain
- [ ] Soft-launch to staging subdomain — 5 reviewer walkthrough
- [ ] DNS cutover to cindariq.co.ke during low-traffic window
- [ ] Verify Vercel uptime alerts and post-launch monitoring (§13.3)
- [ ] Confirm form submissions arriving in inbox end-to-end
- [ ] Confirm calendar bookings tagged `source=website`

---

## Key Blockers

> Resolve these before engineering starts.

| #   | Blocker                                                  | Gates                   |
| --- | -------------------------------------------------------- | ----------------------- |
| 1   | Logo SVG (Q-mark + wordmark) from designer               | Phase 3+                |
| 2   | Registration numbers from Founder                        | Footer and metadata     |
| 3   | Calendar booking platform decision (Cal.com vs Calendly) | `/contact`              |
| 4   | Privacy Policy & Terms content from lawyer               | `/privacy` and `/terms` |
