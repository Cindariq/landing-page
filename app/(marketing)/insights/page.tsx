import type { Metadata } from "next";
import Link from "next/link";
import { SectionContainer } from "@/components/layout/section-container";
import { Eyebrow } from "@/components/content/eyebrow";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion/fade-up";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Insights — Cindariq",
  description:
    "Thought leadership on IT asset disposition, data protection compliance, and ESG reporting for Kenyan enterprises. Available after launch.",
  alternates: { canonical: "/insights" },
  robots: { index: false, follow: true },
};

export default function InsightsPage() {
  return (
    <>
      {/* Page hero */}
      <PageHero
        eyebrow="Insights"
        headingId="insights-heading"
        heading="Written for practitioners."
        body="Analysis on data protection compliance, IT asset disposition practice, and ESG reporting obligations for regulated enterprises in Kenya. Written without jargon, with named standards."
      />

      {/* Coming soon notice */}
      <SectionContainer background="smoke" paddingY="lg" ariaLabelledBy="insights-coming-heading">
        <FadeUp>
          <div className="flex max-w-160 flex-col gap-8 rounded-xl border border-cinder/10 bg-parchment p-10">
            <div className="flex flex-col gap-3">
              <Eyebrow colour="cinder">Available after launch</Eyebrow>
              <h2 id="insights-coming-heading" className="text-h2 font-semibold text-cinder">
                First articles in preparation.
              </h2>
              <div className="space-y-4 text-body text-ash">
                <p>
                  The first articles cover the Data Protection Act 2019 obligations that apply to IT
                  asset disposal, the practical difference between NIST 800-88 Rev. 2 Purge and
                  Clear, and what a GRI 306 disclosure actually requires from an ITAD vendor.
                </p>
                <p>
                  These will be published here once reviewed for accuracy and tone. No filler
                  content, no recycled listicles — only material that a DPO or procurement officer
                  would forward to a colleague.
                </p>
              </div>
            </div>
            <div>
              <Button size="md" variant="primary" asChild>
                <Link href="/contact">Get in touch in the meantime</Link>
              </Button>
            </div>
          </div>
        </FadeUp>
      </SectionContainer>
    </>
  );
}
