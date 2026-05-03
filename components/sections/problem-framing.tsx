"use client";

import { ShieldCheck, Lock, Recycle } from "@phosphor-icons/react";
import { SectionContainer } from "@/components/layout/section-container";
import { Eyebrow } from "@/components/content/eyebrow";
import { FeatureCard } from "@/components/content/feature-card";

const CARDS = [
  {
    id: "evidence",
    icon: <ShieldCheck size={48} />,
    title: "Per-device evidence, not tonnage",
    body: "Your existing recycler reports tonnes diverted. Your DPO needs per-device evidence of NIST 800-88 sanitisation. Your sustainability officer needs GRI 306-aligned outputs. The gap is where Cindariq operates.",
  },
  {
    id: "risk",
    icon: <Lock size={48} />,
    title: "Risk that scales with every refresh cycle",
    body: "Every laptop returned to the storeroom contains customer data, employee records, financial information. Until it is verifiably destroyed, the breach risk persists. Cindariq closes that window per device, with documented evidence.",
  },
  {
    id: "value",
    icon: <Recycle size={48} />,
    title: "Recovered value most relationships ignore",
    body: "Functional retired devices have residual value most operators do not recover for the client. Cindariq tracks recovery, returns the value, and reports it alongside the destruction.",
  },
] as const;

export function ProblemFraming() {
  return (
    <SectionContainer
      background="smoke"
      paddingY="lg"
      id="problem-framing"
      ariaLabelledBy="problem-framing-heading"
    >
      <Eyebrow>The work behind the work</Eyebrow>
      <h2
        id="problem-framing-heading"
        className="mb-16 max-w-[600px] text-h2 font-semibold text-cinder"
      >
        Compliance proof you cannot generate today.
      </h2>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        {CARDS.map(({ id, icon, title, body }) => (
          <FeatureCard key={id} icon={icon} title={title} body={body} />
        ))}
      </div>
    </SectionContainer>
  );
}
