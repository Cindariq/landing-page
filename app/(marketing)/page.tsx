import { Hero } from "@/components/sections/hero";
import { ProblemFraming } from "@/components/sections/problem-framing";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ComplianceMap } from "@/components/sections/compliance-map";
import { SectorGrid } from "@/components/sections/sector-grid";
import { ClosingCTA } from "@/components/sections/closing-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemFraming />
      <HowItWorks />
      <ComplianceMap />
      <SectorGrid />
      <ClosingCTA />
    </>
  );
}
