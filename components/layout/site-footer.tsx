import Link from "next/link";
import { CindariqLogo } from "@/components/brand/logo";
import { Separator } from "@/components/ui/separator";
import { LinkedinLogo, XLogo, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

const SERVICES = [
  { href: "/services#compliance-platform", label: "Compliance Platform" },
  { href: "/services#data-destruction", label: "Data Destruction" },
  { href: "/services#secure-logistics", label: "Secure Logistics" },
  { href: "/services#circular-recovery", label: "Circular Recovery" },
  { href: "/services#esg-reporting", label: "ESG Reporting" },
] as const;

const COMPANY = [
  { href: "/about", label: "About Us" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/compliance", label: "Our Standards" },
  { href: "/coming-soon?section=partners", label: "Partners" },
  { href: "/coming-soon?section=careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
] as const;

const RESOURCES = [
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
] as const;

const COMPLIANCE_LINKS = [
  { href: "/compliance#data-destruction", label: "Data Destruction" },
  { href: "/compliance#data-privacy", label: "Data Privacy" },
  { href: "/compliance#esg-reporting", label: "ESG Framework" },
  { href: "/compliance#corporate-governance", label: "Corporate Governance" },
] as const;

const SOCIAL = [
  {
    href: "https://linkedin.com/company/cindariq",
    label: "LinkedIn",
    Icon: LinkedinLogo,
  },
  {
    href: "https://x.com/cindariq",
    label: "X",
    Icon: XLogo,
  },
  {
    href: "https://instagram.com/cindariq",
    label: "Instagram",
    Icon: InstagramLogo,
  },
  {
    href: "https://wa.me/254000000000",
    label: "WhatsApp",
    Icon: WhatsappLogo,
  },
] as const;

function FooterColumn({
  heading,
  links,
}: {
  heading: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <nav aria-label={`${heading} links`}>
      <p className="mb-5 text-eyebrow font-semibold tracking-[0.08em] text-ember uppercase">
        {heading}
      </p>
      <ul className="flex flex-col gap-3">
        {links.map(({ href, label }) => (
          <li key={label}>
            <Link
              href={href}
              className="text-caption text-smoke/50 transition-colors hover:text-ember"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="w-full bg-cinder" aria-label="Site footer">
      <div className="mx-auto max-w-360 px-6 py-16 md:px-10 lg:px-20">
        {/* Top grid — brand + three nav columns */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <CindariqLogo height={32} colourMode="on-dark" />
            <p className="max-w-60 font-serif text-body text-smoke/60 italic">
              What remains is what matters.
            </p>
          </div>

          <FooterColumn heading="Company" links={COMPANY} />
          <FooterColumn heading="Services" links={SERVICES} />
          <FooterColumn heading="Compliance" links={COMPLIANCE_LINKS} />
          <FooterColumn heading="Resources" links={RESOURCES} />
        </div>

        {/* Social + bottom bar */}
        <div className="mt-16 flex flex-col gap-8">
          {/* Social row */}
          <div>
            <p className="mb-4 text-eyebrow font-semibold tracking-[0.08em] text-smoke/40 uppercase">
              Social
            </p>
            <div className="flex items-center gap-4">
              {SOCIAL.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-md border border-smoke/10 text-smoke/50 transition-all hover:border-smoke/30 hover:bg-smoke/5 hover:text-smoke/90"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <Separator className="bg-smoke/10" />

          {/* Bottom bar */}
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-caption text-smoke/40">© 2026 Cindariq Limited. Nairobi, Kenya.</p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-caption text-smoke/40 transition-colors hover:text-smoke/70"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-caption text-smoke/40 transition-colors hover:text-smoke/70"
              >
                Terms of Service
              </Link>
              <a
                href="/cookie-policy"
                aria-disabled="true"
                tabIndex={-1}
                className="pointer-events-none cursor-not-allowed text-caption text-smoke/20"
                title="Coming soon"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
