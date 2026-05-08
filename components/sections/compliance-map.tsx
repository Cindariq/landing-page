import { SectionContainer } from "@/components/layout/section-container";
import { Eyebrow } from "@/components/content/eyebrow";
import { ComplianceCard } from "@/components/content/compliance-card";
import { FadeUp } from "@/components/motion/fade-up";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

const CARDS = [
  {
    id: "dpa",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="6" y="14" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
        <path
          d="M10 14v-4a6 6 0 0 1 12 0v4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="16" cy="21" r="2" fill="currentColor" />
      </svg>
    ),
    title: "Data Protection Act 2019 (Kenya)",
    body: "We are ODPC-registered as both Data Controller and Data Processor. Breach notification readiness within 72 hours of awareness. Sub-processor flow-down to all NEMA-licensed partners.",
  },
  {
    id: "gdpr",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M16 4l10 4v8c0 6-4.5 11-10 13C10.5 27 6 22 6 16V8l10-4z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M12 16l3 3 5-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "GDPR (EU 2016/679)",
    body: "Multinational subsidiaries under GDPR data-minimisation (Art. 5(1)(e)) and right-to-erasure mandates (Art. 17) receive per-device certificates as documented evidence of compliant disposal. Sub-processor agreements available under Art. 28.",
  },
  {
    id: "gri",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M6 27c4-7 8-13 21-20C27 7 19 26 6 27z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M6 27c5-5 10-8 14-12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "GRI 306 + ISO 14064",
    body: "Every engagement produces audit-ready outputs aligned to GRI 306 (Waste) and ISO 14064 (GHG quantification). Drops into your ESG reporting workflow without manual reformatting.",
  },
  {
    id: "nist",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M16 3L28 9.5v13L16 29 4 22.5v-13L16 3z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M16 3v26M28 9.5L4 22.5M4 9.5l24 13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeOpacity="0.6"
        />
      </svg>
    ),
    title: "NIST SP 800-88 Rev. 2",
    body: "The US standard for media sanitisation, current from September 2025. Every device receives a documented Clear, Purge, or Destroy outcome with method and tool version recorded.",
  },
] as const;

interface ComplianceMapProps {
  /** Whether to show the link to the compliance page next to the heading */
  showLink?: boolean;
}

export function ComplianceMap({ showLink = false }: ComplianceMapProps = {}) {
  return (
    <SectionContainer
      background="parchment"
      paddingY="lg"
      id="compliance-map"
      ariaLabelledBy="compliance-map-heading"
    >
      <FadeUp>
        <Eyebrow colour="cinder">Compliance you do not have to translate</Eyebrow>
      </FadeUp>
      <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <FadeUp delay={0.12}>
          <h2 id="compliance-map-heading" className="max-w-125 text-h2 font-semibold text-cinder">
            Standards, named.
          </h2>
        </FadeUp>
        {showLink && (
          <FadeUp delay={0.22}>
            <Button asChild variant="secondary">
              <Link href="/compliance">
                Read compliance statement
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </Button>
          </FadeUp>
        )}
      </div>
      <div className="grid grid-cols-1 gap-px overflow-hidden border border-cinder/10 bg-cinder/10 md:grid-cols-2 lg:grid-cols-4">
        {CARDS.map(({ id, icon, title, body }, index) => (
          <ComplianceCard key={id} icon={icon} title={title} body={body} index={index} />
        ))}
      </div>
    </SectionContainer>
  );
}
