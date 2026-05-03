"use client";

import { Cube, Lock, Leaf } from "@phosphor-icons/react";
import { SectionContainer } from "@/components/layout/section-container";
import { Eyebrow } from "@/components/content/eyebrow";
import { ComplianceCard } from "@/components/content/compliance-card";

const CARDS = [
  {
    id: "nist",
    icon: <Cube size={32} />,
    title: "NIST SP 800-88 Rev. 2",
    body: "The US standard for media sanitisation, current from September 2025. Every device receives a documented Clear, Purge, or Destroy outcome with method and tool version recorded.",
  },
  {
    id: "dpa",
    icon: <Lock size={32} />,
    title: "Data Protection Act 2019 (Kenya)",
    body: "We are ODPC-registered as both Data Controller and Data Processor. Breach notification readiness within 72 hours of awareness. Sub-processor flow-down to all NEMA-licensed partners.",
  },
  {
    id: "gri",
    icon: <Leaf size={32} />,
    title: "GRI 306 + ISO 14064",
    body: "Every engagement produces audit-ready outputs aligned to GRI 306 (Waste) and ISO 14064 (GHG quantification). Drops into your ESG reporting workflow without manual reformatting.",
  },
] as const;

export function ComplianceMap() {
  return (
    <SectionContainer
      background="parchment"
      paddingY="lg"
      id="compliance-map"
      ariaLabelledBy="compliance-map-heading"
    >
      <Eyebrow colour="cinder">Compliance you do not have to translate</Eyebrow>
      <h2
        id="compliance-map-heading"
        className="mb-16 max-w-[500px] text-h2 font-semibold text-cinder"
      >
        Standards, named.
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {CARDS.map(({ id, icon, title, body }) => (
          <ComplianceCard key={id} icon={icon} title={title} body={body} />
        ))}
      </div>
    </SectionContainer>
  );
}
