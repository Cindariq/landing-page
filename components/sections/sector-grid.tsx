"use client";

import { Buildings, Umbrella, Globe } from "@phosphor-icons/react";
import { SectionContainer } from "@/components/layout/section-container";
import { Eyebrow } from "@/components/content/eyebrow";
import { SectorTile } from "@/components/content/sector-tile";

const TILES = [
  {
    id: "banks",
    icon: <Buildings size={24} />,
    sector: "Banks",
    description:
      "Where DPA exposure and CBK climate disclosure converge — we close both gaps with the same engagement.",
  },
  {
    id: "insurers",
    icon: <Umbrella size={24} />,
    sector: "Insurers",
    description:
      "Policyholder-data devices retire continuously; audit readiness is a year-round posture.",
  },
  {
    id: "multinationals",
    icon: <Globe size={24} />,
    sector: "Multinational subsidiaries",
    description:
      "Local Kenyan disposal data appears in your group ESG report in the format your global office expects.",
  },
  {
    id: "public",
    icon: <Buildings size={24} />,
    sector: "Public sector",
    description:
      "AGPO youth-enterprise eligible, PPDA-ready, Auditor-General-friendly documentation.",
  },
] as const;

export function SectorGrid() {
  return (
    <SectionContainer
      background="smoke"
      paddingY="lg"
      id="sector-grid"
      ariaLabelledBy="sector-grid-heading"
    >
      <Eyebrow>Who Cindariq serves</Eyebrow>
      <h2
        id="sector-grid-heading"
        className="mb-16 max-w-[500px] text-h2 font-semibold text-cinder"
      >
        Where compliance proof is the deliverable.
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {TILES.map(({ id, icon, sector, description }) => (
          <SectorTile key={id} icon={icon} sector={sector} description={description} />
        ))}
      </div>
    </SectionContainer>
  );
}
