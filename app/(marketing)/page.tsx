import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ProblemFraming } from "@/components/sections/problem-framing";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ComplianceMap } from "@/components/sections/compliance-map";
import { SectorGrid } from "@/components/sections/sector-grid";
import { ClosingCTA } from "@/components/sections/closing-cta";
import { serviceJsonLd, jsonLdScript } from "@/lib/seo/jsonld";

// Home uses the site-wide title default; override only alternates.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* Service JSON-LD — home is the primary landing page for the service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(serviceJsonLd()) }}
      />
      <Hero />
      <ProblemFraming />
      <HowItWorks />
      <ComplianceMap />
      <SectorGrid />
      <ClosingCTA />
    </>
  );
}
