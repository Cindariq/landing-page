import { SectionContainer } from "@/components/layout/section-container";
import { Eyebrow } from "@/components/content/eyebrow";
import { SectorTile } from "@/components/content/sector-tile";

const TILES = [
  {
    id: "banks",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="3"
          y="4"
          width="9"
          height="17"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path d="M12 9h9v12H12" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
        <path
          d="M7 8v0M7 12v0M7 16v0M17 13v0M17 17v0"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
    sector: "Banks",
    description:
      "Where DPA exposure and CBK climate disclosure converge — we close both gaps with the same engagement.",
  },
  {
    id: "insurers",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 12a9 9 0 0 1 18 0H3z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path
          d="M12 12v6a2 2 0 0 1-4 0"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
    sector: "Insurers",
    description:
      "Policyholder-data devices retire continuously; audit readiness is a year-round posture.",
  },
  {
    id: "multinationals",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path d="M3 12h18" stroke="currentColor" strokeWidth="1.75" />
      </svg>
    ),
    sector: "Multinational subsidiaries",
    description:
      "Local Kenyan disposal data appears in your group ESG report in the format your global office expects.",
  },
  {
    id: "public",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="3"
          y="4"
          width="9"
          height="17"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path d="M12 9h9v12H12" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
        <path
          d="M7 8v0M7 12v0M7 16v0M17 13v0M17 17v0"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
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
      <h2 id="sector-grid-heading" className="mb-16 max-w-125 text-h2 font-semibold text-cinder">
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
