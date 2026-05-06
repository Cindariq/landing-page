import type { Metadata } from "next";
import { SectionContainer } from "@/components/layout/section-container";
import { Eyebrow } from "@/components/content/eyebrow";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ClosingCTA } from "@/components/sections/closing-cta";
import { FadeUp } from "@/components/motion/fade-up";
import { serviceJsonLd, jsonLdScript } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "How Cindariq Works — From Pickup to Audit-Ready Records",
  description:
    "Six-stage IT asset disposition process: logistics, data destruction, platform logging, recovery, compliance, and reporting. NIST 800-88-aligned with per-device certificates and chain of custody.",
  alternates: { canonical: "/how-it-works" },
};

const DELIVERABLES = [
  {
    number: "01",
    title: "Per-device sanitisation certificates",
    body: "Issued within 48 hours of processing. Each PDF references the device serial number, NIST 800-88 method applied, tool version, operator ID, and timestamp — in a format your DPO can file directly.",
  },
  {
    number: "02",
    title: "Chain of custody manifest",
    body: "Generated in real-time by the platform at every handover point — from collection at your dock through to the final disposal receipt. Signed, timestamped, and structured to satisfy an Auditor-General review.",
  },
  {
    number: "03",
    title: "Compliance documentation package",
    body: "A consolidated record of regulatory alignment across Kenya DPA 2019, GDPR, PCI DSS, and ISO 27001 — formatted for your legal or compliance team and ready to attach to a regulatory submission or internal audit file.",
  },
  {
    number: "04",
    title: "ESG and recovered-value report",
    body: "Delivered per engagement in GRI 306 and ISO 14064-aligned format. Covers waste diversion tonnage, carbon estimates, and any recovered asset value credited back to your organisation.",
  },
] as const;

export default function HowItWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(serviceJsonLd()) }}
      />
      {/* Page hero */}
      <SectionContainer background="cinder" paddingY="md" ariaLabelledBy="hiw-page-heading">
        <FadeUp>
          <Eyebrow colour="smoke">How Cindariq works</Eyebrow>
        </FadeUp>
        <FadeUp delay={0.12}>
          <h1 id="hiw-page-heading" className="mb-6 max-w-160 text-h1 font-bold text-smoke">
            Six stages. One defensible record.
          </h1>
        </FadeUp>
        <FadeUp delay={0.22}>
          <p className="max-w-130 text-body-lg text-smoke/80">
            Every engagement follows the same structured process — consistent, documented, and built
            to withstand scrutiny at every stage.
          </p>
        </FadeUp>
      </SectionContainer>

      {/* Six-stage process (shared section component) */}
      <HowItWorks showHeading={false} />

      {/* What we deliver */}
      <SectionContainer background="smoke" paddingY="lg" ariaLabelledBy="deliverables-heading">
        <FadeUp>
          <Eyebrow>What you receive</Eyebrow>
        </FadeUp>
        <FadeUp delay={0.12}>
          <h2
            id="deliverables-heading"
            className="mb-6 max-w-140 text-h2 font-semibold text-cinder"
          >
            Every engagement. The same four artefacts.
          </h2>
        </FadeUp>
        <FadeUp delay={0.18}>
          <p className="mb-16 max-w-130 text-body-lg text-ash">
            Every engagement closes with the same four artefacts — each formatted for a specific
            audience and available on-demand through the platform.
          </p>
        </FadeUp>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {DELIVERABLES.map(({ number, title, body }, index) => (
            <FadeUp key={number} delay={index * 0.12}>
              <div className="flex flex-col gap-4">
                <span className="text-h3 font-bold text-ember/40">{number}</span>
                <h3 className="text-h4 font-semibold text-cinder">{title}</h3>
                <p className="text-body text-ash">{body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </SectionContainer>

      <ClosingCTA />
    </>
  );
}
