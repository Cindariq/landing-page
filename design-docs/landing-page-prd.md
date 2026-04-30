# Cindariq Landing Page — Product Requirements Document

**Document version:** 1.0
**Status:** Approved for development
**Prepared:** April 2026
**Document owner:** Founder, Cindariq Limited
**Review cycle:** Quarterly, plus on every material content change

---

## How to read this document

This PRD is structured for three roles. Each role can read the document end-to-end, but each has a primary section that captures the artefacts and acceptance criteria they own.

| Role                          | Primary sections                                                                                                     | Time to read primary |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------- |
| **UI/UX Designer**            | §3 Design system, §4 Page anatomy, §5 Component specifications, §11 Accessibility                                    | ~30 min              |
| **Web Developer (Frontend)**  | §6 Technical architecture, §7 Component library, §8 State management, §9 SEO & metadata, §10 Performance budgets     | ~40 min              |
| **Technical Project Manager** | §1 Goals & success metrics, §2 Audience & content strategy, §12 Delivery plan, §13 Acceptance & QA, §14 Out of scope | ~25 min              |

Cross-references between sections use the format §N.M for section navigation. Inline acceptance criteria are tagged `[AC]`. Open questions are tagged `[OPEN]`.

---

## 1. Goals & Success Metrics

### 1.1 Why this landing page exists

Cindariq is a Kenyan IT asset disposition (ITAD) company serving regulated enterprises and public bodies. The landing page is the primary digital surface where prospects — most often introduced via cold outreach or referral — first evaluate whether Cindariq is credible, professional, and worth a 30-minute discovery call.

The page is not a marketing campaign asset. It is a **trust artefact**. Every prospect Googles Cindariq within minutes of receiving outreach. A poor or generic landing page loses pipeline before the first conversation. A specific, considered landing page converts cold attention into booked discovery calls.

### 1.2 Primary objective

Convert qualified prospect attention into booked discovery conversations, while signalling regulatory legitimacy, technical seriousness, and operational discipline at every visual and verbal moment.

### 1.3 Success metrics — Year 1

The primary metric is **discovery calls booked through the website**. Secondary metrics measure the quality of the visitor journey that produces those bookings.

| Metric                             | Target (Month 6) | Target (Month 12) | Measurement                                         |
| ---------------------------------- | ---------------- | ----------------- | --------------------------------------------------- |
| Discovery calls booked via website | 4 / month        | 12 / month        | Cal.com / Calendly bookings tagged `source=website` |
| Form submissions on `/contact`     | 8 / month        | 25 / month        | Form analytics                                      |
| Average time on page (home)        | ≥ 75 sec         | ≥ 90 sec          | GA4 / Plausible engaged sessions                    |
| Bounce rate (single-page)          | < 55%            | < 45%             | GA4 / Plausible                                     |
| Mobile Core Web Vitals — all green | 100%             | 100%              | Lighthouse + real-user monitoring                   |
| Search visibility for "Kenya ITAD" | Top 30           | Top 10            | Manual + Google Search Console                      |

### 1.4 What success looks like in plain language

A regulated-enterprise procurement officer or CISO arrives via a cold email click-through. Within 8 seconds of landing, they understand what Cindariq does, who it's for, and that it is operated to a serious professional standard. Within 60 seconds, they have either booked a discovery call or saved the URL to forward to a colleague. They never feel they are being sold to; they feel they have found a competent specialist.

### 1.5 What failure looks like

The visitor concludes Cindariq is "another startup", bounces in under 15 seconds, and the cold outreach is now compromised — they will not respond to the original email because the landing page weakened it.

---

## 2. Audience & Content Strategy

### 2.1 Primary audiences

The landing page serves five distinct visitor types. The page must work for all five without explicit segmentation; the content discipline is to write copy that resonates with the most discerning audience (the bank CISO) — the others land softer.

| Audience                                    | What they want to see                                             | What confirms credibility                                                                           |
| ------------------------------------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| **Bank / Insurer CISO or DPO**              | DPA 2019 fluency, NIST 800-88 alignment, breach-readiness signals | Specific standards named (NIST 800-88, GRI 306, DPA 2019); registered numbers visible; serious tone |
| **Sustainability / ESG officer**            | GRI 306 alignment, ISO 14064, audit-ready reporting               | Methodology references; sample report structure; quantified outcomes                                |
| **Procurement / supply chain lead**         | AGPO certification, PPDA-readiness, references                    | AGPO cert visible; PPDA framework language; named compliance certificates                           |
| **C-suite / strategic**                     | Why this is different from existing recyclers; defensibility      | Crisp positioning, no jargon, compliance-as-narrative                                               |
| **Journalists / regulators / future hires** | Substance, plausibility, ethical posture                          | Honest tone, no greenwashing, named partnerships                                                    |

### 2.2 Content principles

Five non-negotiable content rules carried over from the Cindariq brand voice (Document 08 Section 3):

1. **Name standards explicitly.** "NIST 800-88 Rev. 2" — never "international best practices".
2. **Plain language for technical things.** A CISO is fluent; condescension is not the same as clarity.
3. **Trust the reader.** No urgency theatre. No false-scarcity CTAs.
4. **Honest about limits.** "Insurance covers what process cannot" outranks "guaranteed".
5. **Let the work speak.** Show evidence, not adjectives.

### 2.3 Forbidden words and patterns `[AC]`

Per Document 08 Section 3.3, none of the following appear anywhere on the live site:

- _Disrupt, disruptor, disruptive_
- _Cutting-edge, world-class, best-in-class, leading_
- _Solutions, synergy, leverage_ (as verb)
- _Revolutionise, transform, change the game_
- _Sustainable_ (as a stand-alone adjective without standard reference)
- _Unique, unprecedented, never-before-seen_
- _Going forward, at the end of the day, in today's environment_
- _Eco-friendly, green, planet-positive_

**Acceptance criterion:** A grep-based linter in the build pipeline flags any of the above terms in committed copy. Build fails on match. (Implementation in §6.7.)

### 2.4 Sitemap & page inventory

The MVP scope covered by this PRD is the home page plus four subsidiary pages and two utility pages. Total: 7 routes.

| Path            | Page           | Indexed | Priority |
| --------------- | -------------- | ------- | -------- |
| `/`             | Home           | Yes     | 1.0      |
| `/how-it-works` | How it works   | Yes     | 0.9      |
| `/compliance`   | Compliance     | Yes     | 0.9      |
| `/about`        | About          | Yes     | 0.7      |
| `/contact`      | Contact        | Yes     | 0.8      |
| `/privacy`      | Privacy Policy | Yes     | 0.3      |
| `/terms`        | Terms          | Yes     | 0.3      |

A future phase (post-launch) will add `/insights` (blog/thought leadership) and `/case-studies` (when references exist). These are explicitly out of scope for v1 (§14).

---

## 3. Design System

### 3.1 Brand foundation reference

This section codifies the design tokens. Source-of-truth for visual decisions is **Document 08 — Cindariq Brand Identity & Customer-Facing Asset Pack**. Where this PRD and Document 08 conflict, Document 08 wins. The intent here is to translate the brand system into Tailwind v4 tokens that can be implemented directly.

### 3.2 Colour tokens

Five primary colours plus two supporting tones, applied with the **60/30/8/2 rule** from Document 08 Section 5.4.

| Token               | Hex       | Tailwind class prefix | Role                                                |
| ------------------- | --------- | --------------------- | --------------------------------------------------- |
| `--color-cinder`    | `#2A2A2E` | `cinder`              | Primary dark — headlines, body, logo default        |
| `--color-slate`     | `#1F252E` | `slate`               | Deep alternate — section dividers, hero backgrounds |
| `--color-ember`     | `#B8472D` | `ember`               | Single accent — CTAs, hyperlinks, accent rules      |
| `--color-smoke`     | `#E8E6E1` | `smoke`               | Light surface — page background default             |
| `--color-parchment` | `#F5F2EC` | `parchment`           | Soft canvas — callouts, document feel               |
| `--color-ash`       | `#5C5F66` | `ash`                 | Muted text — captions, footnotes, secondary copy    |
| `--color-steel`     | `#8B9199` | `steel`               | UI muted — borders, dividers, icon outlines         |

**Tailwind v4 configuration** (in `app/globals.css` using `@theme` directive — Tailwind v4 native syntax):

```css
@import "tailwindcss";

@theme {
  --color-cinder: #2a2a2e;
  --color-slate: #1f252e;
  --color-ember: #b8472d;
  --color-smoke: #e8e6e1;
  --color-parchment: #f5f2ec;
  --color-ash: #5c5f66;
  --color-steel: #8b9199;

  /* Functional aliases */
  --color-background: var(--color-smoke);
  --color-foreground: var(--color-cinder);
  --color-muted: var(--color-ash);
  --color-accent: var(--color-ember);

  /* shadcn/ui dark-mode extensions */
  --color-card: var(--color-smoke);
  --color-card-foreground: var(--color-cinder);
  --color-popover: var(--color-parchment);
  --color-border: var(--color-steel);
  --color-input: var(--color-steel);
  --color-ring: var(--color-ember);
}
```

**Acceptance criterion:** No hex literal appears in any component source file. All colour application via Tailwind classes (`bg-cinder`, `text-ember`, etc.) or CSS custom properties. A pre-commit hook flags hex-literal violations.

### 3.3 The 2% Ember rule `[AC]`

Ember Orange (`#B8472D`) appears at approximately **2% or less of any visible viewport**. Discipline:

- **Never** as a section background.
- **Never** as a fill on a card or panel.
- **One** Ember moment per visible scroll position. The moment is the CTA, the eyebrow, or a single accent rule — never multiple at once.
- Hover and focus states may temporarily exceed 2% by a small margin (focus rings, hover tints) for accessibility.

**Acceptance criterion:** Visual QA review at staging. Reviewer measures Ember pixel coverage on each above-the-fold capture (desktop + mobile). Any breach > 3% is a defect.

### 3.4 Typography

Two-typeface system from Document 08 Section 6.

| Use                                          | Family         | Source                            | Weight in use            |
| -------------------------------------------- | -------------- | --------------------------------- | ------------------------ |
| Primary (body, UI, headings)                 | Inter          | Google Fonts (`next/font/google`) | 400, 500, 600, 700       |
| Accent (taglines, pull quotes, hero subhead) | Source Serif 4 | Google Fonts                      | 400 (Italic for tagline) |

**Implementation:**

```typescript
// app/fonts.ts
import { Inter, Source_Serif_4 } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});
```

Modular type scale (1.25 ratio, 16px base) — per Document 08 Section 6.2:

| Role           | Size | Weight | Line height | Letter spacing | Tailwind class |
| -------------- | ---- | ------ | ----------- | -------------- | -------------- |
| Display (hero) | 64   | 700    | 1.05        | -1.5%          | `text-display` |
| H1             | 48   | 700    | 1.10        | -1%            | `text-h1`      |
| H2             | 36   | 600    | 1.20        | -0.5%          | `text-h2`      |
| H3             | 28   | 600    | 1.30        | 0              | `text-h3`      |
| H4             | 22   | 600    | 1.40        | 0              | `text-h4`      |
| Body large     | 18   | 400    | 1.55        | 0              | `text-body-lg` |
| Body           | 16   | 400    | 1.60        | 0              | `text-body`    |
| Caption        | 14   | 400    | 1.50        | 0.5%           | `text-caption` |
| Eyebrow        | 12   | 600    | 1.40        | 8% (uppercase) | `text-eyebrow` |

These are added as Tailwind v4 utility classes via `@theme`:

```css
@theme {
  --text-display: 4rem; /* 64px */
  --text-display--line-height: 1.05;
  --text-display--letter-spacing: -0.015em;

  --text-h1: 3rem; /* 48px */
  --text-h1--line-height: 1.1;
  --text-h1--letter-spacing: -0.01em;

  /* ... continues for each scale step */
}
```

### 3.5 Spacing & layout grid

8-point baseline grid throughout.

- **Container max-width**: 1200px on desktop. Sides padded 24px (mobile), 32px (tablet), 64px (desktop).
- **Section vertical rhythm**: `py-24 md:py-32` (96px / 128px) between top-level sections on the home page.
- **Component vertical rhythm**: 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128 (px). No arbitrary values.

### 3.6 Iconography

**Phosphor Icons** (`@phosphor-icons/react`), Regular weight as default. Filled or Bold weight only where a single emphasis is needed. Approved icons for v1:

| Use                        | Icon (Phosphor name)                        |
| -------------------------- | ------------------------------------------- |
| Certified data destruction | `ShieldCheck`                               |
| Audit-ready reporting      | `Files` or `FileText`                       |
| Recovered value tracking   | `Recycle`                                   |
| Process step (numbered)    | Numeric in circle (custom — built per §5.4) |
| Compliance — DPA           | `Lock`                                      |
| Compliance — NEMA          | `Leaf`                                      |
| Compliance — NIST          | `Cube`                                      |
| External link indicator    | `ArrowUpRight`                              |
| Email contact              | `EnvelopeSimple`                            |
| Phone contact              | `Phone`                                     |
| Form success               | `CheckCircle`                               |
| Form error                 | `WarningCircle`                             |
| Menu open / close (mobile) | `List` / `X`                                |

**Discipline:** All icons rendered at `size={20}` for inline / `size={24}` for feature panels / `size={48}` for hero feature blocks. Stroke weight matches Phosphor's Regular (1.5). All icons inherit `currentColor` and follow text colour. No multi-colour icons.

### 3.7 Imagery direction

Per Document 08 Section 7.

- **Photography aesthetic**: warm, directional lighting; tight framing on hands, devices, tools, documents; warm-shadow colour grading; never stock; never generic boardroom.
- **Image categories used in v1**: Process photography (hero), Document close-ups (compliance section), Founder portrait (about page only).
- **No illustrations.** No 3D renders. No animated graphics beyond subtle micro-interactions.

**Image asset specifications:**

- All hero/feature images delivered in `.avif` (primary) and `.webp` (fallback) formats.
- Maximum size 200KB after compression for above-the-fold; 400KB below the fold.
- Aspect ratios: 16:9 hero, 4:3 process detail, 1:1 founder portrait.
- All images served via `next/image` with `priority` flag on above-the-fold only.

**Pre-launch placeholder approach** `[OPEN]`: until real photography is commissioned (Month 6 per Document 08 Section 12), the v1 site uses a minimal, type-led hero with the Q-mark large and no photograph. This is intentional — it's better to ship without imagery than with unsuitable imagery.

---

## 4. Page Anatomy — Home Page

The home page is composed of seven vertical sections. Each section has a defined purpose, content boundaries, and component composition.

### 4.1 Section map

```
┌─────────────────────────────────────┐
│ §4.2  Site header (sticky)          │
├─────────────────────────────────────┤
│ §4.3  Hero                          │   100vh on desktop, content-fit on mobile
├─────────────────────────────────────┤
│ §4.4  Problem framing               │   3-column observation
├─────────────────────────────────────┤
│ §4.5  How it works                  │   5-step process diagram
├─────────────────────────────────────┤
│ §4.6  Compliance map                │   3-column standards panel
├─────────────────────────────────────┤
│ §4.7  Who we serve                  │   4-tile sector grid
├─────────────────────────────────────┤
│ §4.8  Closing CTA                   │   Single primary CTA + reassurance
├─────────────────────────────────────┤
│ §4.9  Site footer                   │
└─────────────────────────────────────┘
```

### 4.2 Site header

**Layout:** sticky on scroll, full-width, `h-16` (64px). Background `bg-cinder/95 backdrop-blur` after scroll-y > 80; `bg-transparent` at top when hero is dark.

**Contents:**

- Left: `<CindariqLogo />` (Q-mark + wordmark, primary lockup, height 32px)
- Centre: Primary nav — `How it works`, `Compliance`, `About`, `Contact` (all Inter Semibold 14, `text-smoke` on dark, `text-cinder` on light)
- Right: Primary CTA button — _"Book a discovery call"_ (variant: primary, size: sm)
- Mobile (<768px): Logo left, hamburger right; nav opens as full-screen overlay

**Acceptance criteria `[AC]`:**

- Header transitions smoothly when scroll-y crosses 80 (no jank).
- Mobile menu trap focus when open; first tabbable is the close button.
- Header contains exactly one Ember element (the CTA button) at all times.

### 4.3 Hero

The hero must do the work of the entire page in 8 seconds for a fast-scrolling visitor. Content is sparse, deliberately.

**Layout:** Full viewport on desktop (`min-h-[640px]`), content-fit on mobile (`min-h-[80vh]`). `bg-cinder` background. Asymmetric composition: copy left two-thirds, Q-mark right one-third (mobile: stacked).

**Copy (verbatim):**

```
EYEBROW
AUDIT-READY IT ASSET DISPOSITION FOR AFRICAN ENTERPRISES

H1 (Source Serif 4 Italic)
What remains is what matters.

SUBHEAD
Cindariq applies certified, intelligent processes to your retired IT
equipment so the data is destroyed, the records survive an audit, and
your sustainability report has the numbers it needs.

PRIMARY CTA
Book a discovery call

SECONDARY CTA
See how it works  →
```

**Visual specifications:**

- Eyebrow: `text-eyebrow text-ember uppercase tracking-[0.08em] mb-4`
- H1: `text-display font-serif italic text-smoke leading-[1.05] mb-6`
- Subhead: `text-body-lg text-smoke/80 max-w-[520px] mb-10`
- Primary CTA: `<Button size="lg" variant="primary">` — Ember bg, Smoke text, 56px tall
- Secondary CTA: text link with `ArrowRight` icon, `text-smoke/70 hover:text-smoke`
- Q-mark: SVG, height 280px desktop / 160px mobile, `text-ember/90`, positioned right-quarter

**Acceptance criteria `[AC]`:**

- LCP element (the H1) renders < 1.5s on Fast 3G.
- Above-the-fold contains exactly one Ember moment (the CTA button is the canonical Ember moment; the eyebrow is Ember at 12px so contributes < 0.5% of pixel coverage and is acceptable).
- No layout shift after font load (font-display: swap with size-adjust matched).

### 4.4 Problem framing — "What this is for"

Three observational columns, no jargon, no urgency theatre. The visitor recognises themselves in at least one column.

**Layout:** Smoke background. Three columns desktop (`grid-cols-3 gap-12`), stacked mobile. Each column has an icon at top, an H3 heading, and a 2-3 sentence body.

**Copy (verbatim):**

```
SECTION EYEBROW
THE WORK BEHIND THE WORK

H2
Compliance proof you cannot generate today.

CARD 1 — Icon: ShieldCheck
H3: Per-device evidence, not tonnage
Body: Your existing recycler reports tonnes diverted. Your DPO needs
per-device evidence of NIST 800-88 sanitisation. Your sustainability
officer needs GRI 306-aligned outputs. The gap is where Cindariq
operates.

CARD 2 — Icon: Lock
H3: Risk that scales with every refresh cycle
Body: Every laptop returned to the storeroom contains customer data,
employee records, financial information. Until it is verifiably
destroyed, the breach risk persists. Cindariq closes that window per
device, with documented evidence.

CARD 3 — Icon: Recycle
H3: Recovered value most relationships ignore
Body: Functional retired devices have residual value most operators
do not recover for the client. Cindariq tracks recovery, returns the
value, and reports it alongside the destruction.
```

### 4.5 How it works — five-step process

The five-step process diagram from Document 08 Section 8.2 / Document 09 Section 8.

**Layout:** Slate background (`bg-slate text-smoke`). Five horizontal cards on desktop with connecting lines; vertical timeline on mobile. Each step is numbered (custom circular numeric icon — see §5.4) and has a title plus 1 sentence.

**Copy (verbatim):**

```
SECTION EYEBROW
HOW CINDARIQ WORKS

H2
From your dock to a defensible record.

STEP 1 — Request
You tell us what is being retired. Devices, locations, timing.

STEP 2 — Collect
We arrive with sealed transport. Chain of custody begins at your dock.

STEP 3 — Sanitise
NIST 800-88 Clear, Purge, or Destroy — per device, with verification.

STEP 4 — Process
Licensed downstream partner handles the physical disposal. We retain
the trail.

STEP 5 — Report
Per-device certificates, ESG outputs, recovered-value tracking —
delivered to your platform of choice.
```

### 4.6 Compliance map — "the standards we work to"

Three-column panel naming standards explicitly. This is the single most differentiating section on the page. Most competitor sites gesture at compliance; Cindariq names standards by name and version.

**Layout:** Parchment background (`bg-parchment`). Three columns desktop, stacked mobile. Each card uses Phosphor `Cube`, `Lock`, `Leaf` icons in Cinder. H3 in Cinder, body in Ash.

**Copy (verbatim):**

```
SECTION EYEBROW
COMPLIANCE YOU DO NOT HAVE TO TRANSLATE

H2
Standards, named.

CARD 1 — Icon: Cube
H3: NIST SP 800-88 Rev. 2
Body: The US standard for media sanitisation, current from September
2025. Every device receives a documented Clear, Purge, or Destroy
outcome with method and tool version recorded.

CARD 2 — Icon: Lock
H3: Data Protection Act 2019 (Kenya)
Body: We are ODPC-registered as both Data Controller and Data
Processor. Breach notification readiness within 72 hours of
awareness. Sub-processor flow-down to all NEMA-licensed partners.

CARD 3 — Icon: Leaf
H3: GRI 306 + ISO 14064
Body: Every engagement produces audit-ready outputs aligned to GRI
306 (Waste) and ISO 14064 (GHG quantification). Drops into your ESG
reporting workflow without manual reformatting.
```

### 4.7 Who we serve — sector tiles

Four sector tiles. One sentence each.

**Layout:** Smoke background. 2×2 grid desktop, single column mobile. Each tile has a small Phosphor icon, sector name in H4 weight, and a one-sentence description.

**Copy (verbatim):**

```
SECTION EYEBROW
WHO CINDARIQ SERVES

H2
Where compliance proof is the deliverable.

TILE 1 — Bank
Banks: where DPA exposure and CBK climate disclosure converge — we
close both gaps with the same engagement.

TILE 2 — Buildings (insurance)
Insurers: policyholder-data devices retire continuously; audit
readiness is a year-round posture.

TILE 3 — Globe (multinational)
Multinational subsidiaries: local Kenyan disposal data appears in
your group ESG report in the format your global office expects.

TILE 4 — Bank (parastatal)
Public sector: AGPO youth-enterprise eligible, PPDA-ready,
Auditor-General-friendly documentation.
```

### 4.8 Closing CTA

The final conversion moment. Echoes the hero CTA without being identical.

**Layout:** Cinder background (`bg-cinder`), centred composition, generous vertical padding (`py-32`). Three lines plus button.

**Copy (verbatim):**

```
H2 (large, Inter Bold)
Start with a discovery conversation.

SUBHEAD
Forty-five minutes. We listen first. We pitch only if there is
something worth pitching.

PRIMARY CTA
Schedule a call

REASSURANCE LINE (small, Ash on dark)
No obligation. No follow-up unless you ask. Calendar link only — no
form to fill in.
```

### 4.9 Footer

Three columns plus a compliance ribbon.

**Column 1 — Cindariq:** logo, tagline ("What remains is what matters." in Source Serif Italic, small), email (`hello@cindariq.co.ke`), phone, registered office address.

**Column 2 — Pages:** How it works, Compliance, About, Contact, Privacy, Terms.

**Column 3 — Connect:** LinkedIn (company page), email signup placeholder text _"Want occasional notes from us? Reach out to hello@cindariq.co.ke."_ (no inline form in v1).

**Compliance ribbon (full-width, bottom):**

```
Cindariq Limited · Registered in Kenya, Co. No. {NUMBER} ·
NEMA Licence #{NUMBER} · ODPC Reg #{NUMBER} (Controller & Processor) ·
AGPO #{NUMBER} · KRA PIN {NUMBER}

© 2026 Cindariq Limited. All rights reserved.
```

`[OPEN]` Registration numbers must be filled in by Founder before launch — pulled from registrations completed per Document 07.

---

## 5. Component Specifications

This section is the canonical reference for every reusable component. Each component is implemented as a single React component, typed with TypeScript, and documented inline.

### 5.1 `<Button />`

Wraps shadcn/ui's Button. Custom variants for Cindariq.

**Props:**

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  asChild?: boolean; // for next/link composition
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}
```

**Variant rendering:**

| Variant     | Background       | Text          | Border          | Hover                  |
| ----------- | ---------------- | ------------- | --------------- | ---------------------- |
| `primary`   | `bg-ember`       | `text-smoke`  | none            | `bg-ember/90`          |
| `secondary` | `bg-transparent` | `text-cinder` | `border-cinder` | `bg-cinder text-smoke` |
| `ghost`     | `bg-transparent` | `text-cinder` | none            | `bg-cinder/5`          |
| `link`      | `bg-transparent` | `text-ember`  | none            | underline              |

**Sizes:**

| Size | Height | Padding-x | Font |
| ---- | ------ | --------- | ---- |
| `sm` | 36px   | 16px      | 14px |
| `md` | 44px   | 24px      | 16px |
| `lg` | 56px   | 32px      | 16px |

**Acceptance criteria `[AC]`:**

- Focus ring visible on keyboard focus: 2px Ember outline at 2px offset.
- Loading state via `disabled={true}` and optional spinner.
- Click target ≥ 44×44px on touch devices.

### 5.2 `<CindariqLogo />`

The brand mark, three layouts, three colour modes.

**Props:**

```typescript
interface CindariqLogoProps {
  layout?: "primary" | "stacked" | "qmark-only" | "wordmark-only";
  colourMode?: "on-light" | "on-dark" | "ember-accent";
  height?: number; // default 32
}
```

The Q-mark itself is a custom SVG (designer-delivered per Document 08 Section 4.1 specifications: 1024×1024 grid, 480px circle radius, 80px stroke, 35° tail angle, open inner space). Wordmark uses Inter Display Bold with custom letter refinements per Document 08 Section 4.2.

**Acceptance criteria `[AC]`:**

- Q-mark legible down to 16px (favicon).
- Wordmark legible down to 80px wide.
- All three colour modes pass WCAG AA contrast against intended background.

### 5.3 `<SectionContainer />`

Wraps every full-width section to enforce consistent vertical rhythm and inner max-width.

**Props:**

```typescript
interface SectionContainerProps {
  background?: "smoke" | "cinder" | "slate" | "parchment";
  paddingY?: "sm" | "md" | "lg"; // 64 / 96 / 128 px
  children: React.ReactNode;
  id?: string; // for in-page anchors
  ariaLabelledBy?: string;
}
```

Internally renders:

```tsx
<section
  id={id}
  aria-labelledby={ariaLabelledBy}
  className={cn("w-full", backgroundClass, paddingYClass)}
>
  <div className="mx-auto max-w-[1200px] px-6 md:px-8 lg:px-16">{children}</div>
</section>
```

### 5.4 `<ProcessStep />`

Used in the How It Works section. Shows a numbered circular badge, a step title, and one line of body.

**Props:**

```typescript
interface ProcessStepProps {
  number: 1 | 2 | 3 | 4 | 5;
  title: string;
  body: string;
  showConnector?: boolean; // hide on last step
}
```

**Visual:**

- Number badge: 64px circle, `border-2 border-ember`, `text-ember`, Inter Bold 24px
- Title: `text-h4 font-semibold text-smoke mb-2`
- Body: `text-body text-smoke/70 max-w-[200px]`
- Connector (between steps): horizontal 1px Ember/30 line on desktop; hidden on mobile (replaced by vertical timeline pattern)

### 5.5 `<ComplianceCard />`, `<FeatureCard />`, `<SectorTile />`

Three card variants, all sharing a common `<Card />` base built on shadcn/ui's Card primitive but with Cindariq styling overrides.

**Common shape:**

```typescript
interface CardBaseProps {
  icon: React.ReactNode; // Phosphor icon component instance
  title: string;
  body: string;
  className?: string;
}
```

**Visual differences:**

| Variant              | Background     | Icon size     | Border             | Use                    |
| -------------------- | -------------- | ------------- | ------------------ | ---------------------- |
| `<ComplianceCard />` | `bg-parchment` | 32px          | `border-cinder/10` | Compliance map (§4.6)  |
| `<FeatureCard />`    | `bg-smoke`     | 48px          | none               | Problem framing (§4.4) |
| `<SectorTile />`     | `bg-smoke`     | 24px (inline) | `border-steel/30`  | Who we serve (§4.7)    |

### 5.6 `<ContactForm />`

The contact form on `/contact`. v1 uses a server action via Next.js Server Actions, no API route required.

**Fields:**

| Field    | Type     | Required | Validation               |
| -------- | -------- | -------- | ------------------------ |
| Name     | text     | Yes      | 2–80 chars               |
| Company  | text     | Yes      | 2–120 chars              |
| Role     | text     | No       | 0–80 chars               |
| Email    | email    | Yes      | RFC-5322 + DNS check     |
| Phone    | tel      | No       | E.164 format if provided |
| Message  | textarea | Yes      | 20–2000 chars            |
| Honeypot | hidden   | —        | Must be empty (anti-bot) |

**Behaviour:**

- Inline validation on blur using Zod schemas.
- Submit button disabled until valid.
- On submit: server action persists to a Resend email + (optionally) appends to a CRM via webhook. Returns success or error.
- Success state: replace form with confirmation message and a calendar link.
- Error state: keep form filled, show non-dismissible error banner above form.

**Acceptance criteria `[AC]`:**

- All form errors readable by screen reader (aria-describedby on each input).
- Server action protected against form spam via honeypot + rate-limit (3 submissions per IP per hour).
- Submit success triggers an analytics event `contact_form_submit`.

### 5.7 `<Eyebrow />`

Tiny but ubiquitous. Used as the small uppercase label above every section H2.

**Props:**

```typescript
interface EyebrowProps {
  children: string;
  colour?: "ember" | "cinder" | "smoke";
}
```

**Render:**

```tsx
<span className="text-eyebrow font-semibold tracking-[0.08em] text-ember uppercase">
  {children}
</span>
```

### 5.8 Component dependency tree

```
<RootLayout>
├── <SiteHeader />
│   ├── <CindariqLogo />
│   ├── <Nav />
│   └── <Button variant="primary" />
├── <main>
│   └── (page content via routes)
│       ├── <Hero />              // home
│       ├── <ProblemFraming />    // home
│       ├── <HowItWorks />        // home, /how-it-works
│       ├── <ComplianceMap />     // home, /compliance
│       ├── <SectorGrid />        // home
│       ├── <ClosingCTA />        // home
│       └── <ContactForm />       // /contact
└── <SiteFooter />
    ├── <CindariqLogo layout="qmark-only" />
    ├── <FooterColumns />
    └── <ComplianceRibbon />
```

---

## 6. Technical Architecture

### 6.1 Stack summary

| Layer                | Technology                               | Version             | Rationale                                                              |
| -------------------- | ---------------------------------------- | ------------------- | ---------------------------------------------------------------------- |
| Framework            | Next.js                                  | 16.2.x              | App Router; React 19.2 canary; Cache Components; React Compiler stable |
| Language             | TypeScript                               | 5.x (strict)        | Type safety; shared with content schemas                               |
| Styling              | Tailwind CSS                             | 4.x                 | Native CSS, `@theme` directive, no JS config                           |
| Component primitives | shadcn/ui                                | latest (April 2026) | Accessibility-baked, Cindariq-themed                                   |
| Icons                | Phosphor Icons (`@phosphor-icons/react`) | 2.x                 | Wide library, consistent stroke, line-style                            |
| State                | Zustand                                  | 5.x                 | Mobile menu state, form state, theme                                   |
| Form validation      | Zod                                      | 3.x                 | Type-safe schemas, server-action friendly                              |
| Email delivery       | Resend                                   | latest              | Server-action friendly, deliverability                                 |
| Analytics            | Plausible (primary) + GA4 (secondary)    | —                   | Privacy-respectful; GA4 for funnel detail                              |
| Hosting              | Vercel                                   | —                   | Native Next.js, edge functions, image CDN                              |
| Domain & DNS         | Cloudflare                               | —                   | Better DDoS, additional caching                                        |
| Source control       | GitHub                                   | —                   | Standard                                                               |
| CI/CD                | Vercel + GitHub Actions                  | —                   | Vercel for deploy; GHA for lint/test                                   |

### 6.2 Project structure

```
cindariq-web/
├── app/
│   ├── (marketing)/           # route group for public pages
│   │   ├── layout.tsx          # marketing-shared layout
│   │   ├── page.tsx            # /
│   │   ├── how-it-works/
│   │   │   └── page.tsx
│   │   ├── compliance/
│   │   │   └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       ├── page.tsx
│   │       └── actions.ts      # server actions
│   ├── (legal)/
│   │   ├── privacy/page.tsx
│   │   └── terms/page.tsx
│   ├── api/
│   │   └── og/route.tsx        # dynamic OG image generation
│   ├── globals.css             # Tailwind v4 + theme tokens
│   ├── layout.tsx              # root layout
│   ├── fonts.ts                # next/font configuration
│   ├── icon.svg                # browser favicon (Q-mark)
│   ├── apple-icon.png          # 180x180 Apple touch icon
│   ├── opengraph-image.tsx     # default OG image
│   ├── robots.ts               # robots.txt
│   ├── sitemap.ts              # sitemap.xml
│   └── manifest.ts             # PWA manifest (basic)
├── components/
│   ├── ui/                     # shadcn/ui components (button, card, input, etc.)
│   ├── brand/                  # CindariqLogo, Qmark, Wordmark
│   ├── layout/                 # SiteHeader, SiteFooter, Nav, MobileMenu, SectionContainer
│   ├── sections/               # Hero, ProblemFraming, HowItWorks, ComplianceMap, etc.
│   └── content/                # Eyebrow, ProcessStep, ComplianceCard, FeatureCard
├── lib/
│   ├── utils.ts                # cn() helper, etc.
│   ├── schemas/                # Zod schemas for form validation
│   │   └── contact.ts
│   ├── store/                  # Zustand stores
│   │   ├── ui-store.ts         # mobile menu open, scroll state
│   │   └── form-store.ts       # contact form state (optimistic)
│   ├── content/                # static content (TypeScript data files)
│   │   ├── home.ts
│   │   ├── compliance.ts
│   │   └── ...
│   └── seo/                    # SEO helpers
│       ├── metadata.ts         # site-wide metadata config
│       └── jsonld.ts           # JSON-LD schema builders
├── public/
│   ├── images/                 # commissioned photography (post-launch)
│   └── og/                     # static OG fallback images
├── tests/
│   ├── e2e/                    # Playwright
│   └── unit/                   # Vitest
├── .env.example
├── .eslintrc.cjs
├── .prettierrc
├── components.json             # shadcn/ui config
├── next.config.ts
├── package.json
├── postcss.config.mjs          # Tailwind v4 PostCSS plugin
├── tailwind.config.ts          # minimal — most config in globals.css
└── tsconfig.json
```

### 6.3 Rendering strategy

All seven routes are statically rendered at build time. None require dynamic data fetching at request time.

- **Home, How it works, Compliance, About, Privacy, Terms**: pure SSG. No headers, no cookies, no params. Cached at edge indefinitely (revalidate on deploy).
- **Contact**: SSG for the page shell. Form submission is a server action that runs at request time and writes to Resend.

This decision keeps the site at sub-1s TTFB globally and zero runtime infrastructure cost beyond email sending.

### 6.4 Caching & revalidation

Per Next.js 16's opt-in caching model:

- All page-level `<Page />` components default to dynamic but render statically because they have no dynamic dependencies.
- No `'use cache'` directives needed for v1.
- Image cache via `next/image`'s default configuration.
- Static assets (fonts, icons, CSS) cached with `Cache-Control: public, max-age=31536000, immutable`.

### 6.5 Environment configuration

Required environment variables:

```
# .env.example
RESEND_API_KEY=                 # contact form email
CONTACT_EMAIL_TO=               # destination for form submissions
CONTACT_EMAIL_FROM=             # verified sender (Resend)
NEXT_PUBLIC_SITE_URL=https://cindariq.co.ke
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=   # cindariq.co.ke
NEXT_PUBLIC_GA4_ID=             # G-XXXXXXX
ODPC_REG_NUMBER=
NEMA_LICENCE_NUMBER=
AGPO_NUMBER=
COMPANY_REG_NUMBER=
KRA_PIN=
```

Public registration numbers in env to allow rotation without code change.

### 6.6 Dependencies — lock-down list

```json
{
  "dependencies": {
    "next": "^16.2.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "@phosphor-icons/react": "^2.x",
    "zustand": "^5.x",
    "zod": "^3.x",
    "resend": "^4.x",
    "clsx": "^2.x",
    "tailwind-merge": "^2.x",
    "class-variance-authority": "^0.7.x",
    "@radix-ui/react-dialog": "^1.x",
    "@radix-ui/react-slot": "^1.x"
  },
  "devDependencies": {
    "typescript": "^5.x",
    "@types/react": "^19.x",
    "@types/node": "^22.x",
    "tailwindcss": "^4.x",
    "@tailwindcss/postcss": "^4.x",
    "postcss": "^8.x",
    "autoprefixer": "^10.x",
    "eslint": "^9.x",
    "eslint-config-next": "^16.x",
    "prettier": "^3.x",
    "prettier-plugin-tailwindcss": "^0.6.x",
    "@playwright/test": "^1.x",
    "vitest": "^2.x",
    "@testing-library/react": "^16.x"
  }
}
```

### 6.7 Build pipeline

GitHub Actions on every PR and main push:

1. `pnpm install --frozen-lockfile`
2. `pnpm lint` (ESLint + Prettier check)
3. `pnpm typecheck` (`tsc --noEmit`)
4. `pnpm forbidden-words` (custom script — see below)
5. `pnpm test` (Vitest unit tests)
6. `pnpm test:e2e` (Playwright on Chromium only for v1)
7. `pnpm build` (Next.js production build, fails on warnings)
8. Lighthouse CI on built output (fails on score <90 for any category)

**Custom forbidden-words script** (per §2.3 acceptance):

```typescript
// scripts/check-forbidden-words.ts
import { glob } from "glob";
import fs from "node:fs/promises";

const FORBIDDEN = [
  "disrupt",
  "disruptor",
  "disruptive",
  "cutting-edge",
  "world-class",
  "best-in-class",
  "leverage" /* ... */,
];

const files = await glob("{app,components,lib}/**/*.{ts,tsx,mdx}");
let violations = 0;

for (const file of files) {
  const content = (await fs.readFile(file, "utf8")).toLowerCase();
  for (const word of FORBIDDEN) {
    if (content.includes(word)) {
      console.error(`✗ "${word}" found in ${file}`);
      violations++;
    }
  }
}

process.exit(violations > 0 ? 1 : 0);
```

---

## 7. Component Library — shadcn/ui Configuration

### 7.1 shadcn/ui components used

Initialise shadcn/ui with the New York style and the Cindariq theme.

```json
// components.json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui"
  }
}
```

Components installed for v1:

```bash
pnpm dlx shadcn@latest add button card input textarea label
pnpm dlx shadcn@latest add navigation-menu sheet
pnpm dlx shadcn@latest add form
pnpm dlx shadcn@latest add toast
pnpm dlx shadcn@latest add separator
```

### 7.2 Theme overrides

After installation, the default shadcn variables in `globals.css` are replaced with the Cindariq tokens from §3.2. The visual identity replaces shadcn defaults; the accessibility and behaviour come for free.

### 7.3 Components NOT installed for v1

To keep bundle size lean and avoid temptation:

- `accordion`, `tabs`, `dialog` (not required by current page anatomy)
- `avatar`, `badge`, `command`, `combobox` (no use case)
- `data-table` (no tables in v1 content)
- `tooltip` (avoided — adds JS, accessibility burden, and is rarely a true necessity)

**Acceptance criterion `[AC]`:** No shadcn/ui component is added without a documented use case and PR-level justification.

---

## 8. State Management

### 8.1 Why Zustand and not React state alone

For 90% of v1 state, plain React `useState` and `useReducer` are sufficient. Zustand is introduced for two specific cross-component cases:

1. **Mobile menu open state** — accessed by both the header (toggle) and the body (focus trap, scroll lock).
2. **Scroll state** — `scrollY > 80` derived value affects header background; multiple components subscribe.

Future-proofing: as the site grows toward `/insights` and `/case-studies`, additional state (filters, search) will benefit from Zustand's slice pattern.

### 8.2 Store specifications

**`ui-store.ts`** — UI state:

```typescript
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface UIState {
  mobileMenuOpen: boolean;
  scrolled: boolean; // derived from scrollY > 80
  setMobileMenuOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
  setScrolled: (scrolled: boolean) => void;
}

export const useUIStore = create<UIState>()(
  devtools(
    (set) => ({
      mobileMenuOpen: false,
      scrolled: false,
      setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
      toggleMobileMenu: () => set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
      setScrolled: (scrolled) => set({ scrolled }),
    }),
    { name: "cindariq-ui" },
  ),
);
```

Scroll synchronisation via a single `useEffect` subscriber on the layout level, not per-component.

### 8.3 What Zustand is NOT used for

- Form state (Zod + React Hook Form — built into shadcn/ui's `<Form />`).
- Server data (Next.js Server Components handle directly).
- Theme switching (no dark mode in v1; if added later, a separate `theme-store`).

---

## 9. SEO & Metadata

### 9.1 SEO objectives

The page must rank in the top 30 within 6 months and top 10 within 12 months for the priority queries below. SEO is not the primary acquisition channel (cold outreach is), but the page must be findable when prospects independently search.

### 9.2 Priority search queries

| Query                      | Search intent              | Priority page   | Target rank (M12) |
| -------------------------- | -------------------------- | --------------- | ----------------- |
| Kenya ITAD                 | Commercial / informational | `/`             | Top 5             |
| IT asset disposition Kenya | Commercial                 | `/`             | Top 5             |
| NIST 800-88 Kenya          | Informational              | `/compliance`   | Top 10            |
| Data destruction Kenya     | Commercial                 | `/how-it-works` | Top 10            |
| AGPO IT disposal           | Commercial                 | `/about`        | Top 10            |
| ESG IT disposal Kenya      | Commercial                 | `/compliance`   | Top 15            |
| ODPC compliant IT disposal | Informational              | `/compliance`   | Top 15            |
| E-waste enterprise Kenya   | Informational              | `/`             | Top 20            |

### 9.3 Site-wide metadata defaults

In `app/layout.tsx`:

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://cindariq.co.ke"),
  title: {
    default: "Cindariq — Audit-Ready IT Asset Disposition for African Enterprises",
    template: "%s · Cindariq",
  },
  description:
    "Cindariq applies certified, intelligent processes to your retired IT equipment. NIST 800-88-aligned data destruction, GRI 306 ESG outputs, and DPA 2019-compliant chain of custody. Kenyan-registered, NEMA-licensed, ODPC-registered, AGPO-certified.",
  applicationName: "Cindariq",
  authors: [{ name: "Cindariq Limited" }],
  generator: "Next.js",
  keywords: [
    "ITAD Kenya",
    "IT asset disposition",
    "NIST 800-88",
    "data destruction Kenya",
    "AGPO IT disposal",
    "ESG IT disposal",
    "GRI 306 reporting",
    "ODPC compliant",
    "NEMA licensed",
    "e-waste enterprise Kenya",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Cindariq Limited",
  publisher: "Cindariq Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://cindariq.co.ke",
    siteName: "Cindariq",
    title: "Cindariq — Audit-Ready IT Asset Disposition",
    description:
      "NIST 800-88-aligned data destruction and audit-ready ESG reporting for Kenyan enterprises and public bodies.",
    images: [
      {
        url: "/opengraph-image", // dynamic, generated at build
        width: 1200,
        height: 630,
        alt: "Cindariq — What remains is what matters.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cindariq — Audit-Ready IT Asset Disposition",
    description:
      "NIST 800-88-aligned data destruction and audit-ready ESG reporting for Kenyan enterprises.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "", // populated post-launch via Search Console
  },
  alternates: {
    canonical: "https://cindariq.co.ke",
  },
  category: "business",
};
```

### 9.4 Per-page metadata overrides

Each route exports its own `metadata` object overriding title and description.

**`/` (home)** — uses defaults above.

**`/how-it-works`:**

```typescript
export const metadata: Metadata = {
  title: "How Cindariq Works — From Pickup to Audit-Ready Records",
  description:
    "Five-stage IT asset disposition process: request, collect, sanitise, process, report. NIST 800-88-aligned with per-device certificates and chain of custody.",
  alternates: { canonical: "/how-it-works" },
};
```

**`/compliance`:**

```typescript
export const metadata: Metadata = {
  title: "Compliance Standards — NIST 800-88, DPA 2019, GRI 306, ISO 14064",
  description:
    "The standards Cindariq works to: NIST SP 800-88 Rev. 2 for media sanitisation, Kenya DPA 2019 with ODPC registration, GRI 306 and ISO 14064 for ESG reporting.",
  alternates: { canonical: "/compliance" },
};
```

**`/about`:**

```typescript
export const metadata: Metadata = {
  title: "About Cindariq — Engineering for Defensible Disposal",
  description:
    "Cindariq is a Kenyan-registered, AGPO-certified IT asset disposition company. NEMA-licensed, ODPC-registered, built for regulated enterprises and public bodies.",
  alternates: { canonical: "/about" },
};
```

**`/contact`:**

```typescript
export const metadata: Metadata = {
  title: "Contact Cindariq — Book a Discovery Call",
  description:
    "Reach Cindariq directly. 45-minute discovery call, no obligation. Or email hello@cindariq.co.ke. Nairobi-based, serving across East Africa.",
  alternates: { canonical: "/contact" },
};
```

### 9.5 Structured data (JSON-LD)

Three schema.org types, injected into the relevant pages via `<script type="application/ld+json" />`.

**Organization schema (root layout — applies site-wide):**

```typescript
// lib/seo/jsonld.ts
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cindariq Limited",
  legalName: "Cindariq Limited",
  url: "https://cindariq.co.ke",
  logo: "https://cindariq.co.ke/icon.svg",
  description: "Software-led IT asset disposition for African enterprises and public bodies.",
  foundingDate: "2026",
  founder: {
    "@type": "Person",
    name: "{Founder name}",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressRegion: "Nairobi County",
    addressCountry: "KE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hello@cindariq.co.ke",
    availableLanguage: ["English", "Swahili"],
  },
  sameAs: [
    "https://www.linkedin.com/company/cindariq",
    // additional verified profiles as they are created
  ],
  identifier: [
    {
      "@type": "PropertyValue",
      propertyID: "KRA PIN",
      value: process.env.KRA_PIN,
    },
    {
      "@type": "PropertyValue",
      propertyID: "Company Registration (Kenya BRS)",
      value: process.env.COMPANY_REG_NUMBER,
    },
  ],
};
```

**Service schema (home + how-it-works):**

```typescript
export const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "IT Asset Disposition",
  provider: {
    "@type": "Organization",
    name: "Cindariq Limited",
    url: "https://cindariq.co.ke",
  },
  areaServed: {
    "@type": "Country",
    name: "Kenya",
  },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Banks, Insurers, Multinational subsidiaries, Public sector",
  },
  description:
    "Software-led IT asset disposition with NIST 800-88-aligned data destruction, audit-grade ESG reporting, and DPA 2019-compliant chain of custody.",
};
```

**WebSite + SiteNavigationElement schemas (root layout):**

Standard schema.org `WebSite` with `potentialAction` for site search disabled (no search in v1) and a `BreadcrumbList` per page.

### 9.6 Sitemap & robots

**`app/sitemap.ts`:**

```typescript
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://cindariq.co.ke";
  const lastModified = new Date();

  return [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${base}/how-it-works`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/compliance`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
```

**`app/robots.ts`:**

```typescript
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/_next/"] }],
    sitemap: "https://cindariq.co.ke/sitemap.xml",
  };
}
```

### 9.7 Open Graph image

A dynamic OG image generated at build using Next.js's image-response utility, ensuring social-media previews are on-brand.

```typescript
// app/opengraph-image.tsx
import { ImageResponse } from 'next/og';

export const alt = 'Cindariq — What remains is what matters.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#2A2A2E',  // Cinder
          color: '#E8E6E1',         // Smoke
          fontFamily: 'Inter',
        }}
      >
        <div style={{ fontSize: 18, color: '#B8472D', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 32 }}>
          Audit-Ready IT Asset Disposition
        </div>
        <div style={{ fontSize: 84, fontStyle: 'italic', lineHeight: 1.05, fontFamily: 'Source Serif 4' }}>
          What remains is what matters.
        </div>
        <div style={{ fontSize: 24, color: 'rgba(232, 230, 225, 0.7)', marginTop: 32, maxWidth: 800 }}>
          NIST 800-88. DPA 2019. GRI 306. Kenyan-registered, ODPC and NEMA compliant.
        </div>
      </div>
    ),
    size
  );
}
```

### 9.8 Local SEO — Google Business Profile

Per Document 07 §7.4, a Google Business Profile is created and verified post-launch with categories _Recycling Center_, _Computer Service_, _Waste Management Service_, _Data Recovery Service_. The website URL points to `cindariq.co.ke`, anchoring the local SEO signal.

---

## 10. Performance Budgets

### 10.1 Core Web Vitals targets

| Metric                              | Target (mobile) | Target (desktop) | Measured at          |
| ----------------------------------- | --------------- | ---------------- | -------------------- |
| **LCP** (Largest Contentful Paint)  | < 2.0s          | < 1.5s           | Pre-launch + monthly |
| **INP** (Interaction to Next Paint) | < 200ms         | < 100ms          | Pre-launch + monthly |
| **CLS** (Cumulative Layout Shift)   | < 0.05          | < 0.05           | Pre-launch + monthly |
| **TTFB** (Time to First Byte)       | < 800ms         | < 500ms          | Pre-launch + monthly |
| **FCP** (First Contentful Paint)    | < 1.5s          | < 1.0s           | Pre-launch + monthly |

### 10.2 Resource budgets per page

| Resource                       | Budget                                                        |
| ------------------------------ | ------------------------------------------------------------- |
| Total page weight (compressed) | < 350 KB                                                      |
| JavaScript (compressed)        | < 100 KB                                                      |
| CSS (compressed)               | < 30 KB                                                       |
| Fonts (woff2, total)           | < 60 KB (3 weights × ~20 KB each, subset Latin)               |
| Above-fold images              | < 200 KB combined                                             |
| Third-party scripts            | 0 in v1 (analytics injected via Plausible's <1KB script only) |

### 10.3 Lighthouse score gates `[AC]`

CI fails any PR that drops Lighthouse scores below:

- Performance: 90
- Accessibility: 100
- Best Practices: 95
- SEO: 100

### 10.4 Image optimisation strategy

- All images via `next/image`.
- Format priority: AVIF → WebP → JPEG fallback.
- Responsive `sizes` attribute on every image.
- Above-the-fold: `priority` flag on hero (when imagery is added).
- Below-the-fold: lazy by default.
- Image CDN: Vercel's built-in (free tier).

### 10.5 Font loading

- `next/font/google` with `display: swap`.
- Subset: Latin only (no Latin Extended in v1).
- Preload Inter 400/600/700 in root layout via `next/font` automatic injection.
- Source Serif 4 not preloaded (used only on hero — single instance).

### 10.6 JavaScript execution

- React Server Components by default for all sections.
- `'use client'` only where required: mobile menu (Sheet primitive), contact form (validation), scroll listener.
- React Compiler enabled (`reactCompiler: true` in `next.config.ts`) for automatic memoisation.
- No client-side router prefetching beyond Next.js defaults.

---

## 11. Accessibility

### 11.1 Compliance standard

WCAG 2.1 Level AA across the entire site.

### 11.2 Acceptance criteria `[AC]`

The following are launch-blocking:

1. Every interactive element reachable by keyboard. Tab order matches visual order.
2. Visible focus indicator on every focusable element (Ember 2px ring at 2px offset).
3. Colour contrast ratios at minimum AA (per Document 08 §5.5 — already verified for the palette).
4. All images have meaningful `alt` text or `alt=""` for decorative.
5. Form labels visible and programmatically associated. Error messages associated via `aria-describedby`.
6. Heading hierarchy correct (single H1, nested logically).
7. Skip-to-content link as first focusable element on every page.
8. Mobile menu trap focus when open. ESC closes.
9. Reduced motion preference respected (`prefers-reduced-motion: reduce`).
10. Page tested with VoiceOver (macOS) and NVDA (Windows) — known-issue list documented.

### 11.3 Testing checklist

Pre-launch:

- Run `axe-core` via Playwright on every route — zero violations.
- Run Lighthouse Accessibility — score 100.
- Manual screen reader pass on home, compliance, contact.
- Manual keyboard-only navigation pass.

Post-launch:

- Quarterly accessibility review.

### 11.4 Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Next.js 16 View Transitions are wrapped in a feature check that disables them when reduced-motion is set.

---

## 12. Delivery Plan

### 12.1 Phasing

| Phase                                         | Duration | Deliverable                                                                        | Owner              |
| --------------------------------------------- | -------- | ---------------------------------------------------------------------------------- | ------------------ |
| **Phase 0 — Foundations**                     | 1 week   | Logo SVG (Q-mark + wordmark), brand asset pack, design tokens locked               | UI/UX Designer     |
| **Phase 1 — Design**                          | 2 weeks  | High-fidelity mockups for all 7 routes (desktop + mobile), Figma component library | UI/UX Designer     |
| **Phase 2 — Engineering scaffold**            | 1 week   | Next.js 16 project bootstrapped, shadcn/ui themed, deploy pipeline working         | Frontend Developer |
| **Phase 3 — Component build**                 | 2 weeks  | All components from §5 implemented, Storybook (or equivalent) browseable           | Frontend Developer |
| **Phase 4 — Page assembly**                   | 1 week   | All 7 routes assembled, copy populated, content reviewed                           | Frontend + Founder |
| **Phase 5 — SEO, performance, accessibility** | 1 week   | All §9, §10, §11 acceptance criteria met                                           | Frontend           |
| **Phase 6 — QA & soft launch**                | 1 week   | Full QA per §13, soft-launched to a stage subdomain                                | TPM + reviewers    |
| **Phase 7 — Launch**                          | 0.5 week | DNS cutover, post-launch monitoring set up                                         | Frontend + TPM     |

**Total: ~9.5 weeks** from kickoff to public launch.

### 12.2 Milestones & gates

| #   | Milestone                  | Gate criteria                                                           | Sign-off            |
| --- | -------------------------- | ----------------------------------------------------------------------- | ------------------- |
| M1  | Design tokens locked       | Colour palette, typography scale, spacing approved by Founder           | Founder             |
| M2  | Mockups approved           | All 7 routes signed off; brand application checklist passed             | Founder + Designer  |
| M3  | Engineering scaffold ready | Next.js project deploys to staging; CI green; design tokens implemented | Designer + Frontend |
| M4  | Components complete        | All §5 components match Figma; Storybook published                      | Designer + Frontend |
| M5  | Content lock               | All copy reviewed against §2 voice rules; forbidden-words check green   | Founder             |
| M6  | Performance & A11y green   | All §10 and §11 ACs met; Lighthouse scores at gates                     | Frontend            |
| M7  | Soft launch                | Staging URL accessible; 5 reviewers complete walkthrough                | TPM                 |
| M8  | Public launch              | DNS live; analytics firing; sitemap submitted to Search Console         | TPM                 |

### 12.3 RACI per workstream

| Workstream                       | Designer | Frontend | TPM     | Founder               |
| -------------------------------- | -------- | -------- | ------- | --------------------- |
| Brand assets (logo, photography) | **R/A**  | C        | I       | C                     |
| Design system tokens             | **R/A**  | C        | I       | C                     |
| Mockups                          | **R/A**  | C        | I       | A                     |
| Component implementation         | C        | **R/A**  | I       | I                     |
| Content/copy                     | I        | C        | C       | **R/A**               |
| SEO metadata                     | I        | **R**    | C       | A                     |
| Performance                      | C        | **R/A**  | C       | I                     |
| Accessibility                    | C        | **R/A**  | C       | I                     |
| Legal copy (Privacy, Terms)      | I        | C        | C       | **R/A** (with lawyer) |
| Deploy pipeline                  | I        | **R/A**  | C       | I                     |
| QA                               | C        | C        | **R/A** | C                     |
| Launch                           | I        | C        | **R/A** | A                     |

R = Responsible, A = Accountable, C = Consulted, I = Informed

### 12.4 Risk register

| Risk                              | Severity            | Mitigation                                                                                            |
| --------------------------------- | ------------------- | ----------------------------------------------------------------------------------------------------- |
| Logo design slips into Phase 2    | High                | Block engineering Phase 3 until M1 cleared. Designer commits to Phase 0 deadline contractually.       |
| Copy revisions cycle late         | Medium              | Founder commits to copy lock at M5. Post-M5 changes follow change-control process.                    |
| Lighthouse performance regression | Medium              | CI gates prevent merge below threshold. Weekly Lighthouse trend monitoring on staging.                |
| Resend / email deliverability     | Low                 | DKIM, SPF, DMARC configured on `cindariq.co.ke` from week 1. Test inbox-placement before launch.      |
| Vercel deploy outage at launch    | Low                 | Soft-launch on stage subdomain 7 days before public. DNS cutover during low-traffic window.           |
| Photography unavailable for v1    | Mitigated by design | Hero designed type-led; commissioned photography scheduled for Month 6 post-launch (per Document 08). |

### 12.5 Cost envelope

Per Document 07 §7 / Document 08 §12, the v1 build sits within:

- Designer freelance: KES 80,000–200,000
- Frontend developer freelance (or in-house): KES 100,000–250,000
- Hosting (Vercel Hobby/Pro): KES 0–24,000/year
- Domain + email (Google Workspace): KES 15,000/year
- Lawyer (Privacy + Terms review): KES 50,000–150,000
- Resend (free tier sufficient for v1 traffic): KES 0

**Total v1 build envelope: KES 245,000–639,000.** Document 08 §12.3 budgets KES 480,000–1,051,000 for full Year-1 brand which includes more than this PRD covers (photography, deck, one-pager).

---

## 13. Acceptance & QA

### 13.1 Definition of Done — per route

Each route is "done" when ALL of the following are true:

- [ ] Renders identically to approved mockup at 320px, 768px, 1280px, 1920px breakpoints
- [ ] All copy matches approved final copy (forbidden-words check green)
- [ ] All Phosphor icons match §3.6 specifications
- [ ] Lighthouse Performance ≥ 90 (mobile)
- [ ] Lighthouse Accessibility = 100
- [ ] Lighthouse Best Practices ≥ 95
- [ ] Lighthouse SEO = 100
- [ ] Axe-core zero violations
- [ ] Keyboard-only navigation pass complete
- [ ] Screen reader pass complete (VoiceOver or NVDA)
- [ ] Page metadata (title, description, OG, canonical) verified
- [ ] JSON-LD structured data validates against schema.org
- [ ] No console errors or warnings in production build
- [ ] Reviewed by Founder and signed off

### 13.2 Pre-launch QA checklist

**Functionality:**

- [ ] All internal links resolve (no 404s)
- [ ] All external links open in new tab with `rel="noopener noreferrer"`
- [ ] Contact form submits successfully (test message received in inbox)
- [ ] Contact form rate-limit fires after 3 submissions from one IP
- [ ] Honeypot blocks bot submissions
- [ ] Mobile menu opens, closes, traps focus, ESC closes
- [ ] All CTAs route to correct destinations
- [ ] Calendar booking link (Cal.com or Calendly) embedded correctly on contact

**SEO:**

- [ ] `sitemap.xml` accessible at `/sitemap.xml`
- [ ] `robots.txt` accessible at `/robots.txt`
- [ ] Each page has unique title
- [ ] Each page has unique meta description (140–160 chars)
- [ ] Canonical URLs set on every page
- [ ] OG image renders correctly when shared on LinkedIn, Twitter
- [ ] Google Search Console verified, sitemap submitted

**Cross-browser:**

- [ ] Chrome (latest)
- [ ] Safari (latest, macOS + iOS)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] Samsung Internet (Android)

**Cross-device:**

- [ ] iPhone 13/14 (Safari)
- [ ] Android (Chrome) — common Kenyan device
- [ ] iPad (Safari)
- [ ] 13" laptop (typical Kenyan corporate)
- [ ] 27" desktop (corporate office)

**Compliance footer:**

- [ ] Registration numbers correctly populated (not placeholder)
- [ ] ODPC certificate visible/linked from footer
- [ ] AGPO certificate visible/linked from footer
- [ ] Privacy Policy and Terms accessible

### 13.3 Post-launch monitoring

**Week 1 daily checks:**

- Plausible / GA4 traffic
- Vercel uptime alerts
- Search Console crawl errors
- Form submissions actually arriving in inbox
- Calendar bookings happening as expected

**Month 1+ weekly checks:**

- Core Web Vitals trend (Vercel Analytics or Search Console CrUX)
- Search Console queries — what people are finding the site for
- Form spam patterns (adjust honeypot/rate-limit if needed)

---

## 14. Out of Scope (v1)

To prevent scope creep, the following are **explicitly NOT** in v1. Each can be a Phase 2 candidate:

### 14.1 Pages not built

- `/insights` — blog / thought leadership. Deferred until 6+ posts of substantive content exist.
- `/case-studies` — customer references. Deferred until at least 2 named pilot customers consent to be referenced.
- `/careers` — hiring page. Deferred until first non-founder hire.
- `/pricing` — public pricing. Per Document 09 §7, pricing is never published; deferred indefinitely.
- `/login` or any client portal. Customer portal is a separate product, not part of marketing site.

### 14.2 Features not built

- **Live chat / chatbot.** Per Document 08 brand discipline ("calm, not loud"); also adds JS weight and accessibility burden.
- **Newsletter signup form.** Per Document 08 §11.4, no inline marketing automation in v1.
- **Multi-language support.** English only at launch. Swahili support deferred to post-Year-1.
- **Dark mode toggle.** The site is dark-by-default in the hero; full dark mode is unnecessary.
- **Animation library (Framer Motion, GSAP).** Subtle CSS transitions only. No animation framework dependency.
- **Cookie consent banner with detailed preferences.** Plausible (no cookies) is the primary analytics; if GA4 is enabled, a simple top-banner consent is added (post-launch decision).
- **Search functionality.** No search box in v1.
- **Customer testimonials section.** Deferred until references exist.

### 14.3 Integrations not built

- **HubSpot or other CRM** form integration. Form submissions go to Resend → email → manual CRM entry in v1.
- **Marketing automation** (Mailchimp, ConvertKit). Not relevant.
- **A/B testing platform.** Premature in v1 — not enough traffic for meaningful results.
- **Heatmap tools** (Hotjar, Microsoft Clarity). Privacy concern; defer.

### 14.4 What changes warrant a v2 PRD

The following changes warrant escalation to a v2 PRD rather than incremental v1 updates:

- Adding a customer portal or authenticated area
- Adding multi-language support
- Adding a content management system (Sanity, Contentful)
- Adding a blog with > 5 published posts
- Material brand re-positioning
- Adding more than two new top-level routes

---

## Appendix A — Open Questions Register

Items tagged `[OPEN]` throughout this PRD, consolidated:

| ID      | Question                                                                                             | Owner                  | Resolution by     |
| ------- | ---------------------------------------------------------------------------------------------------- | ---------------------- | ----------------- |
| OPEN-01 | Hero photography — commissioned by Month 6, but should v1 ship type-led or with placeholder imagery? | Founder + Designer     | Phase 0           |
| OPEN-02 | Registration numbers (ODPC, NEMA, AGPO, KRA, BRS) for footer & metadata                              | Founder                | M5 (content lock) |
| OPEN-03 | Calendar booking platform — Cal.com vs Calendly vs Google Appointments                               | Founder                | M2 (mockups)      |
| OPEN-04 | Privacy Policy and Terms — drafted by lawyer, content sourced where?                                 | Founder + lawyer       | M4                |
| OPEN-05 | Phone number formatting — single primary line vs dedicated line per channel                          | Founder                | M5                |
| OPEN-06 | Founder portrait — to be commissioned for `/about`. Schedule confirmed?                              | Founder + Photographer | Phase 1           |

---

## Appendix B — Cross-Document References

This PRD relies on and references the following Cindariq Founder Pre-Launch Pack documents. Where this PRD and a referenced document conflict, the referenced document is canonical for its domain.

| Source document                                               | Relied on for                                                                                                                    |
| ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Document 04 — Go-to-Market Strategy**                       | Audience definitions (§2.1), positioning                                                                                         |
| **Document 05 — Business Model & Unit Economics**             | Pricing not exposed; ACV ranges informing audience targeting                                                                     |
| **Document 06 — Market Sizing & Opportunity Memo**            | Audience sizing, narrative variants (§2.1)                                                                                       |
| **Document 07 — Company Formation & Pre-Launch Checklist**    | Registration numbers, compliance footer content (§4.9), Google Business Profile (§9.8)                                           |
| **Document 08 — Brand Identity & Customer-Facing Asset Pack** | All design system content (§3); voice rules (§2.2 / §2.3); imagery direction (§3.7); the 2% Ember rule (§3.3); typography (§3.4) |
| **Document 09 — Sales Execution Toolkit**                     | Hero copy (§4.3); five-step process (§4.5); compliance card content (§4.6); contact form fields (§5.6)                           |
| **Document 10 — Operational SOPs**                            | Backing the compliance claims made in copy (§4.6)                                                                                |

---

## Appendix C — Glossary

| Term            | Meaning                                                                                                                     |
| --------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **AGPO**        | Access to Government Procurement Opportunities — Kenyan youth/women/PwD-led-firm certification                              |
| **DPA 2019**    | Kenya's Data Protection Act 2019                                                                                            |
| **GRI 306**     | Global Reporting Initiative standard for waste reporting                                                                    |
| **ISO 14064**   | International standard for GHG emissions quantification                                                                     |
| **ITAD**        | IT Asset Disposition                                                                                                        |
| **NEMA**        | Kenya's National Environment Management Authority                                                                           |
| **NIST 800-88** | US National Institute of Standards & Technology Special Publication on media sanitisation. Rev. 2 effective September 2025. |
| **ODPC**        | Kenya's Office of the Data Protection Commissioner                                                                          |
| **PPDA**        | Kenya's Public Procurement and Asset Disposal Act 2015                                                                      |
| **PRD**         | Product Requirements Document — this document                                                                               |

---

**End of document.**

_This PRD is a living document. Material changes require Founder sign-off and version increment. Minor corrections may be merged with note in commit history. Prepared by Cindariq founding team, April 2026._
