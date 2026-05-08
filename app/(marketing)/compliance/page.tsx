import type { Metadata } from "next";
import { SectionContainer } from "@/components/layout/section-container";
import { Eyebrow } from "@/components/content/eyebrow";
import { ClosingCTA } from "@/components/sections/closing-cta";
import { FadeUp } from "@/components/motion/fade-up";
import { PageHero } from "@/components/sections/page-hero";
import {
  IllustrationNIST,
  IllustrationDPA,
  IllustrationISO,
} from "@/components/illustrations/compliance-illustrations";

export const metadata: Metadata = {
  title: "Compliance Standards — NIST 800-88, DPA 2019, GRI 306, ISO 14064",
  description:
    "The standards Cindariq works to: NIST SP 800-88 Rev. 2 for media sanitisation, Kenya DPA 2019 with ODPC registration, GRI 306 and ISO 14064 for ESG reporting.",
  alternates: { canonical: "/compliance" },
};

export default function CompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Compliance"
        headingId="compliance-page-heading"
        heading="Standards, named. Not gestured at."
        body="Every Cindariq engagement produces evidence aligned to specific, named standards. We do not describe our work in aspirational terms; we describe it in audit terms."
      />

      {/* Deep Dive 1: Data Destruction */}
      <SectionContainer
        background="smoke"
        paddingY="lg"
        id="data-destruction"
        ariaLabelledBy="nist-heading"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <FadeUp>
              <Eyebrow>Data Destruction</Eyebrow>
            </FadeUp>
            <FadeUp delay={0.12}>
              <h2 id="nist-heading" className="mb-6 text-h2 font-semibold text-cinder">
                NIST SP 800-88 Rev. 2
              </h2>
            </FadeUp>
            <FadeUp delay={0.22}>
              <div className="space-y-5 text-body text-ash">
                <p>
                  Most enterprise IT refresh cycles end with equipment handed to a logistics
                  contractor who issues a basic &quot;tonnage report.&quot; This report satisfies no
                  audit and protects no Data Protection Officer.
                </p>
                <p>
                  We execute data sanitisation strictly to the{" "}
                  <strong>
                    National Institute of Standards and Technology (NIST) Special Publication 800-88
                    Revision 2
                  </strong>{" "}
                  guidelines. Every storage device processed by Cindariq receives a documented
                  outcome: <em>Clear, Purge, or Destroy</em>.
                </p>
                <p>
                  <strong>The Deliverable:</strong> A per-device Certificate of Data Destruction
                  (CoDD) recording the device serial number, asset tag, sanitisation method used,
                  software version, operator ID, and timestamp.
                </p>
              </div>
            </FadeUp>
          </div>
          <FadeUp
            delay={0.3}
            className="mx-auto flex w-full shrink-0 items-center justify-center lg:w-80 xl:w-96"
          >
            <IllustrationNIST onDark={false} />
          </FadeUp>
        </div>
      </SectionContainer>

      {/* Deep Dive 2: Data Privacy */}
      <SectionContainer
        background="parchment"
        paddingY="lg"
        id="data-privacy"
        ariaLabelledBy="dpa-heading"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <FadeUp
            delay={0.3}
            className="order-2 mx-auto flex w-full shrink-0 items-center justify-center lg:order-1 lg:w-80 xl:w-96"
          >
            <IllustrationDPA onDark={false} />
          </FadeUp>
          <div className="order-1 lg:order-2">
            <FadeUp>
              <Eyebrow colour="cinder">Data Privacy</Eyebrow>
            </FadeUp>
            <FadeUp delay={0.12}>
              <h2 id="dpa-heading" className="mb-6 text-h2 font-semibold text-cinder">
                DPA 2019 &amp; GDPR
              </h2>
            </FadeUp>
            <FadeUp delay={0.22}>
              <div className="space-y-5 text-body text-ash">
                <p>
                  Handing over end-of-life IT assets constitutes data processing. To maintain
                  compliance with the Kenya Data Protection Act 2019 and the EU GDPR, the legal
                  chain of custody must be unbroken.
                </p>
                <p>
                  Cindariq acts as your secure Data Processor. We provide the mandatory
                  sub-processor agreements, flow-down terms, and strict access controls required to
                  protect your organisation from breach liability during the disposition phase.
                </p>
                <p>
                  <strong>The Deliverable:</strong> A comprehensive Chain of Custody manifest
                  tracking every asset from your loading dock to our secure facility, backed by
                  GPS-tracked transit logs and secure facility intake receipts.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </SectionContainer>

      {/* Deep Dive 3: ESG */}
      <SectionContainer
        background="smoke"
        paddingY="lg"
        id="esg-reporting"
        ariaLabelledBy="esg-heading"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <FadeUp>
              <Eyebrow>Environmental Impact</Eyebrow>
            </FadeUp>
            <FadeUp delay={0.12}>
              <h2 id="esg-heading" className="mb-6 text-h2 font-semibold text-cinder">
                GRI 306 &amp; ISO 14064
              </h2>
            </FadeUp>
            <FadeUp delay={0.22}>
              <div className="space-y-5 text-body text-ash">
                <p>
                  Sustainability reporting is moving from marketing to mandated disclosure.
                  Enterprise boards now require verifiable metrics on e-waste diversion and Scope 3
                  emissions.
                </p>
                <p>
                  We track the exact material fractions recovered from your assets and the emissions
                  avoided through extending the lifecycle of refurbished equipment. Our reporting is
                  designed to integrate directly into your annual ESG disclosures.
                </p>
                <p>
                  <strong>The Deliverable:</strong> An Environmental Impact Report formatted to
                  align with GRI 306 (Waste) and ISO 14064 (Greenhouse Gas Accounting), eliminating
                  the need for manual data reformatting by your sustainability team.
                </p>
              </div>
            </FadeUp>
          </div>
          <FadeUp
            delay={0.3}
            className="mx-auto flex w-full shrink-0 items-center justify-center lg:w-80 xl:w-96"
          >
            <IllustrationISO onDark={false} />
          </FadeUp>
        </div>
      </SectionContainer>

      {/* Corporate Governance & Registrations */}
      <SectionContainer
        background="slate"
        paddingY="lg"
        id="corporate-governance"
        ariaLabelledBy="registrations-heading"
      >
        <div className="mb-16">
          <FadeUp>
            <Eyebrow colour="smoke">Corporate Governance</Eyebrow>
          </FadeUp>
          <FadeUp delay={0.12}>
            <h2 id="registrations-heading" className="max-w-140 text-h2 font-semibold text-smoke">
              Our Licences &amp; Registrations.
            </h2>
          </FadeUp>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-steel/30 bg-steel/20 md:grid-cols-3">
          {/* ODPC */}
          <FadeUp
            delay={0.08}
            duration={0.6}
            yOffset={40}
            viewportAmount={0.2}
            className="flex flex-col gap-4 bg-slate p-8 transition-colors duration-300 hover:bg-cinder"
          >
            <h3 className="text-h4 font-semibold text-ember">ODPC registration</h3>
            <p className="text-body text-smoke/70">
              Cindariq holds active registration with the Office of the Data Protection Commissioner
              as both Data Controller and Data Processor under the Data Protection Act 2019 (Kenya).
              This registration is a precondition for sub-processor flow-down to all downstream
              NEMA-licensed partners.
            </p>
          </FadeUp>

          {/* NEMA */}
          <FadeUp
            delay={0.16}
            duration={0.6}
            yOffset={40}
            viewportAmount={0.2}
            className="flex flex-col gap-4 bg-slate p-8 transition-colors duration-300 hover:bg-cinder"
          >
            <h3 className="text-h4 font-semibold text-ember">NEMA licensing</h3>
            <p className="text-body text-smoke/70">
              E-waste handling in Kenya requires an active NEMA licence. Cindariq holds the relevant
              licence for collection, transportation, and processing of electrical and electronic
              equipment, and we require the same of all downstream partners before engaging them.
            </p>
          </FadeUp>

          {/* AGPO */}
          <FadeUp
            delay={0.24}
            duration={0.6}
            yOffset={40}
            viewportAmount={0.2}
            className="flex flex-col gap-4 bg-slate p-8 transition-colors duration-300 hover:bg-cinder"
          >
            <h3 className="text-h4 font-semibold text-ember">AGPO Certified</h3>
            <p className="text-body text-smoke/70">
              Certified under the Access to Government Procurement Opportunities programme.
              PPDA-ready documentation is available for all public-sector and parastatal procurement
              exercises.
            </p>
          </FadeUp>
        </div>
      </SectionContainer>

      <ClosingCTA />
    </>
  );
}
