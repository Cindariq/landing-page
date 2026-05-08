# Cindariq — Landing Page

Marketing and compliance landing site for **Cindariq Limited**, a Kenyan-registered IT Asset Disposition (ITAD) company offering NIST 800-88-aligned data destruction, GRI 306 ESG reporting, and DPA 2019-compliant chain-of-custody services.

Live domain: **cindariq.co.ke**

---

## Tech Stack

| Concern         | Technology                       |
| --------------- | -------------------------------- |
| Framework       | Next.js 16 (App Router)          |
| Language        | TypeScript 5 (strict)            |
| Styling         | Tailwind CSS v4                  |
| Animation       | Framer Motion 12                 |
| UI Primitives   | Radix UI + shadcn/ui conventions |
| Icons           | Phosphor Icons                   |
| State           | Zustand v5                       |
| Validation      | Zod v4 (shared client/server)    |
| Email           | Resend (Server Actions)          |
| Package Manager | pnpm v10                         |
| Runtime         | React 19 + React Compiler        |

---

## Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Configure environment variables

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in:

| Variable                       | Purpose                                                       |
| ------------------------------ | ------------------------------------------------------------- |
| `RESEND_API_KEY`               | Resend API key for contact form email delivery                |
| `CONTACT_EMAIL_TO`             | Inbox that receives contact form submissions                  |
| `CONTACT_EMAIL_FROM`           | Verified sender address (must be on a Resend-verified domain) |
| `NEXT_PUBLIC_SITE_URL`         | Canonical site URL used for OG metadata                       |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Optional — Plausible Analytics domain                         |
| `NEXT_PUBLIC_GA4_ID`           | Optional — Google Analytics 4 Measurement ID                  |

### 3. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
app/
  (marketing)/    # Full-chrome pages: home, services, compliance, about, contact, etc.
  (legal)/        # Minimal-chrome pages: privacy policy, terms of service
  api/og/         # Dynamic OpenGraph image generation
components/
  brand/          # Logo
  content/        # Reusable content atoms (cards, eyebrows, tiles)
  illustrations/  # SVG graphic components
  layout/         # Site chrome: header, footer, nav, scroll utilities
  motion/         # Framer Motion wrappers (FadeUp)
  sections/       # Full-width page sections composed from atoms
  ui/             # Headless/generic primitives (shadcn/ui pattern)
lib/
  seo/            # Centralised metadata + JSON-LD (Organization, WebSite)
  schemas/        # Zod validation schemas shared between client and server
  store/          # Zustand stores (UI state, form validation)
  animations.ts   # Shared Framer Motion constants
e2e/              # Playwright tests (accessibility + link checks)
tests/unit/       # Vitest unit tests
scripts/          # Build-time tooling (forbidden-words check)
design-docs/      # PRD and phase planning docs
```

---

## Available Scripts

```bash
pnpm dev              # Start dev server
pnpm build            # Production build (fails on TS errors)
pnpm lint             # ESLint
pnpm lint:fix         # ESLint with auto-fix
pnpm format           # Prettier write
pnpm format:check     # Prettier check (used in CI)
pnpm typecheck        # tsc --noEmit
pnpm forbidden-words  # Scan copy for banned marketing buzzwords (PRD §2.3)
pnpm test             # Vitest unit tests
pnpm test:watch       # Vitest in watch mode
pnpm test:e2e         # Playwright E2E tests
```

---

## Quality Gates

All of the following must pass before a build ships:

- **ESLint + Prettier** — enforced on commit via Husky + lint-staged
- **TypeScript** — `ignoreBuildErrors: false`; the build fails on any type error
- **Forbidden-words check** — rejects buzzwords ("disrupt", "synergy", "leverage", etc.) in all copy files
- **Vitest** — unit tests under `tests/unit/`
- **Playwright** — E2E tests covering link integrity and WCAG 2.1 AA accessibility (zero axe violations required)
- **Lighthouse CI** — performance ≥ 0.9, accessibility = 1.0, SEO = 1.0, best-practices ≥ 0.95

CI runs on GitHub Actions (`.github/workflows/ci.yml`).

---

## Deployment

Targeted for **Vercel**. Set all environment variables in the Vercel project dashboard before deploying. Point the `cindariq.co.ke` domain to the Vercel deployment and configure Resend DNS records for email delivery (see `.env.example` for DNS instructions).
