import type { Metadata } from "next";
import Link from "next/link";
import { SectionContainer } from "@/components/layout/section-container";
import { Eyebrow } from "@/components/content/eyebrow";
import { ClosingCTA } from "@/components/sections/closing-cta";
import { FadeUp } from "@/components/motion/fade-up";
import { Button } from "@/components/ui/button";

import {
  IllustrationDataDestruction,
  IllustrationSecureLogistics,
  IllustrationCompliancePlatform,
  IllustrationCircularRecovery,
  IllustrationESGReporting,
} from "@/components/illustrations/service-illustrations";

/* ─── Illustrations Mapping ──────────────────────────────────────────── */

const ILLUSTRATIONS: Record<string, (props: { onDark: boolean }) => React.JSX.Element> = {
  "data-destruction": IllustrationDataDestruction,
  "secure-logistics": IllustrationSecureLogistics,
  "compliance-platform": IllustrationCompliancePlatform,
  "circular-recovery": IllustrationCircularRecovery,
  "esg-reporting": IllustrationESGReporting,
};

export const metadata: Metadata = {
  title: "Services — Cindariq ITAD",
  description:
    "Data destruction, secure logistics, compliance platform, circular recovery, and ESG reporting — end-to-end IT asset disposition for regulated Kenyan enterprises.",
  alternates: { canonical: "/services" },
};

const SERVICES = [
  {
    id: "data-destruction",
    eyebrow: "01 — Data Destruction",
    heading: "Certified, verifiable data erasure.",
    body: "Every asset undergoes NIST SP 800-88 Rev. 2 compliant sanitisation — Clear, Purge, or Destroy — selected by media type. Each outcome is timestamped, witnessed, and recorded to a per-device certificate issued within 48 hours. The evidence your Data Protection Officer needs is generated automatically, not assembled manually after the fact.",
    tags: [
      "NIST SP 800-88 Rev. 2",
      "DoD 5220.22-M",
      "Physical destruction",
      "Per-device certificates",
    ],
    background: "cinder" as const,
    eyebrowColour: "smoke" as const,
  },
  {
    id: "secure-logistics",
    eyebrow: "02 — Secure Logistics",
    heading: "GPS-tracked, end-to-end custody.",
    body: "From your server room to the processing facility, every asset is sealed, tagged, and tracked. The chain-of-custody is documented at every handover point — collection, transit, intake, and final disposition. You receive a signed manifest at each stage. Nothing moves without a record.",
    tags: [
      "Real-time GPS tracking",
      "Tamper-evident seals",
      "Signed custody manifests",
      "NEMA-licensed partners",
    ],
    background: "smoke" as const,
    eyebrowColour: "cinder" as const,
  },
  {
    id: "compliance-platform",
    eyebrow: "03 — Compliance Platform",
    heading: "Immutable audit trail. API-driven.",
    body: "The Cindariq platform logs every action — scan, sanitisation, handover, and disposal — to an immutable record accessible on demand. Integrates with your existing IT workflows via REST API, ServiceNow, and major ERP connectors. When your auditor asks for the file, it is already there.",
    tags: ["REST API", "ServiceNow integration", "ERP connectors", "Immutable audit log"],
    background: "parchment" as const,
    eyebrowColour: "cinder" as const,
  },
  {
    id: "circular-recovery",
    eyebrow: "04 — Circular Recovery",
    heading: "Recovered value returned to you.",
    body: "Assets with residual market value are assessed, graded, and routed to vetted downstream partners — all NEMA-licensed and operating under R2-aligned standards. Any recovered value is credited back to your organisation. What cannot be recovered is disposed of responsibly, with documentation.",
    tags: ["NEMA-licensed partners", "R2-aligned", "Asset value recovery", "Responsible disposal"],
    background: "cinder" as const,
    eyebrowColour: "smoke" as const,
  },
  {
    id: "esg-reporting",
    eyebrow: "05 — ESG Reporting",
    heading: "Board-ready ESG documentation.",
    body: "Every engagement closes with a GRI 306 and ISO 14064-aligned report covering waste diversion tonnage, carbon estimates, and recovered-asset value. Formatted for direct use in your sustainability disclosures, annual reports, and regulatory submissions — without manual reformatting.",
    tags: ["GRI 306 aligned", "ISO 14064", "Carbon estimates", "Waste diversion data"],
    background: "smoke" as const,
    eyebrowColour: "cinder" as const,
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <SectionContainer background="cinder" paddingY="md" ariaLabelledBy="services-page-heading">
        <FadeUp>
          <Eyebrow colour="smoke">What we do</Eyebrow>
        </FadeUp>
        <FadeUp delay={0.12}>
          <h1 id="services-page-heading" className="mb-6 max-w-160 text-h1 font-bold text-smoke">
            Five services. One defensible record.
          </h1>
        </FadeUp>
        <FadeUp delay={0.22}>
          <p className="mb-10 max-w-130 text-body-lg text-smoke/80">
            Every Cindariq engagement is built on the same infrastructure — structured, documented,
            and designed to hold up under regulatory scrutiny. No assembly required on your end.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <Button asChild variant="primary" size="lg">
            <Link href="/contact">Book a discovery call</Link>
          </Button>
        </FadeUp>
      </SectionContainer>

      {/* Service sections */}
      {SERVICES.map(({ id, eyebrow, heading, body, tags, background, eyebrowColour }, index) => {
        const onDark = background === "cinder";
        const Illustration = ILLUSTRATIONS[id];
        const illustrationRight = index % 2 === 0;
        return (
          <SectionContainer
            key={id}
            id={id}
            background={background}
            paddingY="lg"
            ariaLabelledBy={`${id}-heading`}
          >
            <div
              className={`flex flex-col items-center gap-16 lg:flex-row ${
                illustrationRight ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Text column */}
              <div className="flex-1">
                <FadeUp>
                  <Eyebrow colour={eyebrowColour}>{eyebrow}</Eyebrow>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <h2
                    id={`${id}-heading`}
                    className={`mb-6 max-w-[18ch] text-h2 font-semibold ${
                      onDark ? "text-smoke" : "text-cinder"
                    }`}
                  >
                    {heading}
                  </h2>
                </FadeUp>
                <FadeUp delay={0.18}>
                  <p className={`mb-10 text-body-lg ${onDark ? "text-smoke/75" : "text-ash"}`}>
                    {body}
                  </p>
                </FadeUp>
                <FadeUp delay={0.24}>
                  <ul className="flex flex-wrap gap-3" aria-label="Highlights">
                    {tags.map((tag) => (
                      <li
                        key={tag}
                        className={`rounded-full border px-4 py-1.5 text-caption font-medium ${
                          onDark ? "border-smoke/20 text-smoke/70" : "border-cinder/15 text-ash"
                        }`}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </FadeUp>
              </div>

              {/* Illustration column */}
              <FadeUp
                delay={0.2}
                className="flex w-full shrink-0 items-center justify-center lg:w-80 xl:w-96"
              >
                <Illustration onDark={onDark} />
              </FadeUp>
            </div>
          </SectionContainer>
        );
      })}

      {/* Process link */}
      <SectionContainer background="parchment" paddingY="md" ariaLabelledBy="process-link-heading">
        <FadeUp>
          <h2
            id="process-link-heading"
            className="mb-4 max-w-120 text-h3 font-semibold text-cinder"
          >
            Want to see how it all fits together?
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="mb-8 max-w-100 text-body text-ash">
            The six-stage process page walks through exactly how each service integrates — from
            first contact to final report.
          </p>
        </FadeUp>
        <FadeUp delay={0.18}>
          <Button asChild variant="secondary" size="md">
            <Link href="/how-it-works">See how it works</Link>
          </Button>
        </FadeUp>
      </SectionContainer>

      <ClosingCTA />
    </>
  );
}
