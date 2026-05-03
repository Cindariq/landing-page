import Link from "next/link";
import { CindariqLogo } from "@/components/brand/logo";
import { Separator } from "@/components/ui/separator";

const NAV_LINKS = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/compliance", label: "Compliance" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const;

const companyReg = process.env.COMPANY_REG_NUMBER ?? "[Co. No. TBC]";
const nemaLicence = process.env.NEMA_LICENCE_NUMBER ?? "[NEMA TBC]";
const odpcReg = process.env.ODPC_REG_NUMBER ?? "[ODPC TBC]";
const agpoNumber = process.env.AGPO_NUMBER ?? "[AGPO TBC]";
const kraPin = process.env.KRA_PIN ?? "[KRA PIN TBC]";

export function SiteFooter() {
  return (
    <footer className="w-full bg-cinder" aria-label="Site footer">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-8 lg:px-16">
        {/* Three-column grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-5">
            <CindariqLogo height={32} colourMode="on-dark" />
            <p className="font-serif text-[14px] text-smoke/70 italic">
              What remains is what matters.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:hello@cindariq.co.ke"
                className="text-caption text-smoke/60 transition-opacity hover:text-smoke/90"
              >
                hello@cindariq.co.ke
              </a>
              <span className="text-caption text-smoke/40">+254 — [TBC]</span>
            </div>
          </div>

          {/* Column 2 — Pages */}
          <nav aria-label="Footer navigation">
            <p className="mb-4 text-eyebrow font-semibold tracking-[0.08em] text-smoke/40 uppercase">
              Pages
            </p>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-caption text-smoke/60 transition-opacity hover:text-smoke/90"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3 — Connect */}
          <div className="flex flex-col gap-4">
            <p className="text-eyebrow font-semibold tracking-[0.08em] text-smoke/40 uppercase">
              Connect
            </p>
            <a
              href="https://linkedin.com/company/cindariq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-caption text-smoke/60 transition-opacity hover:text-smoke/90"
            >
              LinkedIn
            </a>
            <p className="text-caption text-smoke/40">
              Want occasional notes from us? Reach out to{" "}
              <a
                href="mailto:hello@cindariq.co.ke"
                className="text-smoke/60 transition-opacity hover:text-smoke/90"
              >
                hello@cindariq.co.ke
              </a>
            </p>
          </div>
        </div>

        <Separator className="my-12 bg-smoke/10" />

        {/* Compliance ribbon */}
        <div className="flex flex-col gap-2">
          <p className="text-caption text-smoke/40">
            Cindariq Limited · Registered in Kenya, {companyReg} · NEMA Licence #{nemaLicence} ·
            ODPC Reg #{odpcReg} (Controller &amp; Processor) · AGPO #{agpoNumber} · KRA PIN {kraPin}
          </p>
          <p className="text-caption text-smoke/30">
            © 2026 Cindariq Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
