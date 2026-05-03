import type { Metadata } from "next";
import { SectionContainer } from "@/components/layout/section-container";
import { Eyebrow } from "@/components/content/eyebrow";
import { ComplianceMap } from "@/components/sections/compliance-map";
import { ClosingCTA } from "@/components/sections/closing-cta";

export const metadata: Metadata = {
  title: "Compliance Standards — NIST 800-88, DPA 2019, GRI 306, ISO 14064",
  description:
    "The standards Cindariq works to: NIST SP 800-88 Rev. 2 for media sanitisation, Kenya DPA 2019 with ODPC registration, GRI 306 and ISO 14064 for ESG reporting.",
  alternates: { canonical: "/compliance" },
};

export default function CompliancePage() {
  const odpc = process.env.ODPC_REG_NUMBER;
  const nema = process.env.NEMA_LICENCE_NUMBER;

  return (
    <>
      {/* Page hero */}
      <SectionContainer background="cinder" paddingY="md" ariaLabelledBy="compliance-page-heading">
        <Eyebrow colour="smoke">Compliance</Eyebrow>
        <h1 id="compliance-page-heading" className="mb-6 max-w-160 text-h1 font-bold text-smoke">
          Standards, named. Not gestured at.
        </h1>
        <p className="max-w-130 text-body-lg text-smoke/80">
          Every Cindariq engagement produces evidence aligned to specific, named standards. We do
          not describe our work in aspirational terms; we describe it in audit terms.
        </p>
      </SectionContainer>

      {/* Three-standard panel (shared section component) */}
      <ComplianceMap />

      {/* How we stay current */}
      <SectionContainer background="smoke" paddingY="lg" ariaLabelledBy="registrations-heading">
        <Eyebrow>How we stay current</Eyebrow>
        <h2
          id="registrations-heading"
          className="mb-12 max-w-140 text-h2 font-semibold text-cinder"
        >
          Registered, licensed, and accountable.
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* ODPC */}
          <div className="flex flex-col gap-4 rounded-xl border border-cinder/10 bg-parchment p-6">
            <h3 className="text-h4 font-semibold text-cinder">ODPC registration</h3>
            <p className="text-body text-ash">
              Cindariq holds active registration with the Office of the Data Protection Commissioner
              as both Data Controller and Data Processor under the Data Protection Act 2019 (Kenya).
              This registration is a precondition for sub-processor flow-down to all downstream
              NEMA-licensed partners.
            </p>
            {odpc && (
              <span className="mt-auto text-caption font-medium text-ember">
                Registration: {odpc}
              </span>
            )}
          </div>

          {/* NEMA */}
          <div className="flex flex-col gap-4 rounded-xl border border-cinder/10 bg-parchment p-6">
            <h3 className="text-h4 font-semibold text-cinder">NEMA licensing</h3>
            <p className="text-body text-ash">
              E-waste handling in Kenya requires an active NEMA licence. Cindariq holds the relevant
              licence for collection, transportation, and processing of electrical and electronic
              equipment, and we require the same of all downstream partners before engaging them.
            </p>
            {nema && (
              <span className="mt-auto text-caption font-medium text-ember">Licence: {nema}</span>
            )}
          </div>

          {/* NIST revision tracking */}
          <div className="flex flex-col gap-4 rounded-xl border border-cinder/10 bg-parchment p-6">
            <h3 className="text-h4 font-semibold text-cinder">Standard revision tracking</h3>
            <p className="text-body text-ash">
              NIST SP 800-88 Rev. 2 has been the current revision since September 2025. We monitor
              revisions to all applicable standards and update our process documentation within 60
              days of any substantive amendment. The version applied to each engagement is recorded
              in the sanitisation certificate.
            </p>
          </div>
        </div>
      </SectionContainer>

      <ClosingCTA />
    </>
  );
}
