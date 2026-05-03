import { SectionContainer } from "@/components/layout/section-container";
import { Eyebrow } from "@/components/content/eyebrow";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ClosingCTA } from "@/components/sections/closing-cta";

const DELIVERABLES = [
  {
    number: "01",
    title: "Per-device sanitisation certificates",
    body: "Each device leaves a documented NIST 800-88 outcome: method, tool version, operator, and timestamp. Individually referenced by serial number and delivered to your records platform.",
  },
  {
    number: "02",
    title: "Chain of custody manifest",
    body: "From collection at your dock to the final disposal certificate, every handover is recorded and signed. The manifest holds up in an Auditor-General review and is available on demand.",
  },
  {
    number: "03",
    title: "ESG and recovered-value report",
    body: "GRI 306 and ISO 14064-aligned outputs delivered in the format your sustainability officer expects — including any recovered asset value returned to your organisation.",
  },
] as const;

export default function HowItWorksPage() {
  return (
    <>
      {/* Page hero */}
      <SectionContainer background="cinder" paddingY="md" ariaLabelledBy="hiw-page-heading">
        <Eyebrow colour="smoke">How Cindariq works</Eyebrow>
        <h1 id="hiw-page-heading" className="mb-6 max-w-[640px] text-h1 font-bold text-smoke">
          Five steps. One defensible record.
        </h1>
        <p className="max-w-[520px] text-body-lg text-smoke/80">
          Every engagement follows the same structured process — consistent, documented, and built
          to withstand scrutiny at every stage.
        </p>
      </SectionContainer>

      {/* Five-step process (shared section component) */}
      <HowItWorks />

      {/* What we deliver */}
      <SectionContainer background="smoke" paddingY="lg" ariaLabelledBy="deliverables-heading">
        <Eyebrow>What you receive</Eyebrow>
        <h2
          id="deliverables-heading"
          className="mb-16 max-w-[560px] text-h2 font-semibold text-cinder"
        >
          Three documents every audit needs.
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {DELIVERABLES.map(({ number, title, body }) => (
            <div key={number} className="flex flex-col gap-4">
              <span className="text-h3 font-bold text-ember/40">{number}</span>
              <h3 className="text-h4 font-semibold text-cinder">{title}</h3>
              <p className="text-body text-ash">{body}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      <ClosingCTA />
    </>
  );
}
