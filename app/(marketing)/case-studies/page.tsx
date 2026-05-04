import type { Metadata } from "next";
import Link from "next/link";
import { SectionContainer } from "@/components/layout/section-container";
import { Eyebrow } from "@/components/content/eyebrow";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion/fade-up";

export const metadata: Metadata = {
  title: "Case Studies — Cindariq",
  description:
    "Documented IT asset disposition engagements — per-device evidence, chain of custody, and ESG outputs for regulated Kenyan enterprises. Available after launch.",
  alternates: { canonical: "/case-studies" },
  robots: { index: false, follow: true },
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Page hero */}
      <SectionContainer background="cinder" paddingY="lg" ariaLabelledBy="case-studies-heading">
        <FadeUp>
          <Eyebrow colour="smoke">Case Studies</Eyebrow>
        </FadeUp>
        <FadeUp delay={0.12}>
          <h1 id="case-studies-heading" className="mb-6 max-w-160 text-h1 font-bold text-smoke">
            Evidence, not anecdote.
          </h1>
        </FadeUp>
        <FadeUp delay={0.22}>
          <p className="max-w-130 text-body-lg text-smoke/80">
            Each engagement Cindariq completes produces a documented record — per-device
            sanitisation certificates, a chain of custody manifest, and ESG outputs aligned to GRI
            306. This section will publish those records when client references are confirmed.
          </p>
        </FadeUp>
      </SectionContainer>

      {/* Coming soon notice */}
      <SectionContainer background="smoke" paddingY="lg" ariaLabelledBy="coming-soon-heading">
        <FadeUp>
          <div className="flex max-w-160 flex-col gap-8 rounded-xl border border-cinder/10 bg-parchment p-10">
            <div className="flex flex-col gap-3">
              <Eyebrow colour="cinder">Available after launch</Eyebrow>
              <h2 id="coming-soon-heading" className="text-h2 font-semibold text-cinder">
                First references in progress.
              </h2>
              <div className="space-y-4 text-body text-ash">
                <p>
                  Cindariq is in active engagement with its first clients. Case study records will
                  be published here once each client has reviewed and approved the disclosure.
                </p>
                <p>
                  Each published case study will document the engagement scope, the data destruction
                  methodology applied, the regulatory frameworks satisfied, and the ESG output
                  delivered — without naming the client unless explicit permission is granted.
                </p>
                <p>
                  If you are evaluating Cindariq now and would like to speak with the team before
                  references are published, a discovery call is the right next step.
                </p>
              </div>
            </div>
            <div>
              <Button size="md" variant="primary" asChild>
                <Link href="/contact">Book a discovery call</Link>
              </Button>
            </div>
          </div>
        </FadeUp>
      </SectionContainer>
    </>
  );
}
