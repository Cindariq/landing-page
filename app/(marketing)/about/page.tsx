import type { Metadata } from "next";
import { SectionContainer } from "@/components/layout/section-container";
import { Eyebrow } from "@/components/content/eyebrow";
import { ClosingCTA } from "@/components/sections/closing-cta";

export const metadata: Metadata = {
  title: "About Cindariq — Engineering for Defensible Disposal",
  description:
    "Cindariq is a Kenyan-registered, AGPO-certified IT asset disposition company. NEMA-licensed, ODPC-registered, built for regulated enterprises and public bodies.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const odpc = process.env.ODPC_REG_NUMBER;
  const nema = process.env.NEMA_LICENCE_NUMBER;
  const agpo = process.env.AGPO_NUMBER;
  const companyReg = process.env.COMPANY_REG_NUMBER;

  return (
    <>
      {/* Page hero */}
      <SectionContainer background="cinder" paddingY="md" ariaLabelledBy="about-page-heading">
        <Eyebrow colour="smoke">About Cindariq</Eyebrow>
        <h1 id="about-page-heading" className="mb-6 max-w-160 text-h1 font-bold text-smoke">
          Serious work. Verifiable outcomes.
        </h1>
        <p className="max-w-130 text-body-lg text-smoke/80">
          Cindariq is a Nairobi-based IT asset disposition company serving regulated enterprises and
          public bodies in Kenya. We exist to make compliance proof a deliverable, not an
          afterthought.
        </p>
      </SectionContainer>

      {/* Company narrative */}
      <SectionContainer background="smoke" paddingY="lg" ariaLabelledBy="narrative-heading">
        <Eyebrow>Our focus</Eyebrow>
        <h2 id="narrative-heading" className="mb-8 max-w-140 text-h2 font-semibold text-cinder">
          The gap no recycler fills.
        </h2>
        <div className="max-w-170 space-y-5 text-body text-ash">
          <p>
            Most enterprise IT refresh cycles end with equipment handed to a logistics contractor
            who issues a tonnage report. The tonnage report satisfies no audit, protects no DPO, and
            cannot be cited in a GRI 306 disclosure.
          </p>
          <p>
            Cindariq was established to fill that gap — not as a recycler that adds compliance
            language, but as a compliance-first ITAD operator. Every engagement produces per-device
            evidence of NIST 800-88 sanitisation, a chain of custody manifest, and ESG outputs
            aligned to GRI 306 and ISO 14064.
          </p>
          <p>
            We work with banks, insurers, multinational subsidiaries, and public-sector bodies whose
            procurement and risk functions require something a tonnage certificate cannot provide: a
            record that holds up in an audit room.
          </p>
        </div>
      </SectionContainer>

      {/* Credentials */}
      <SectionContainer background="parchment" paddingY="lg" ariaLabelledBy="credentials-heading">
        <Eyebrow colour="cinder">Our registrations</Eyebrow>
        <h2 id="credentials-heading" className="mb-12 max-w-125 text-h2 font-semibold text-cinder">
          Compliance in our own operations.
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* ODPC */}
          <div className="flex flex-col gap-3 rounded-xl border border-cinder/10 bg-smoke p-6">
            <span className="text-caption font-semibold tracking-[0.06em] text-ash uppercase">
              ODPC
            </span>
            <h3 className="text-h4 font-semibold text-cinder">Data Controller & Processor</h3>
            <p className="text-caption text-ash">
              Registered with the Office of the Data Protection Commissioner as both Data Controller
              and Data Processor under the Data Protection Act 2019.
            </p>
            {odpc && (
              <span className="mt-auto text-caption font-medium text-ember">Reg. {odpc}</span>
            )}
          </div>

          {/* NEMA */}
          <div className="flex flex-col gap-3 rounded-xl border border-cinder/10 bg-smoke p-6">
            <span className="text-caption font-semibold tracking-[0.06em] text-ash uppercase">
              NEMA
            </span>
            <h3 className="text-h4 font-semibold text-cinder">E-Waste Handling</h3>
            <p className="text-caption text-ash">
              NEMA-licensed for the collection, transportation, and processing of electrical and
              electronic waste under the Environmental Management Act.
            </p>
            {nema && (
              <span className="mt-auto text-caption font-medium text-ember">Lic. {nema}</span>
            )}
          </div>

          {/* AGPO */}
          <div className="flex flex-col gap-3 rounded-xl border border-cinder/10 bg-smoke p-6">
            <span className="text-caption font-semibold tracking-[0.06em] text-ash uppercase">
              AGPO
            </span>
            <h3 className="text-h4 font-semibold text-cinder">Youth Enterprise</h3>
            <p className="text-caption text-ash">
              Certified under the Access to Government Procurement Opportunities programme.
              PPDA-ready documentation available for public-sector procurement exercises.
            </p>
            {agpo && (
              <span className="mt-auto text-caption font-medium text-ember">Cert. {agpo}</span>
            )}
          </div>

          {/* Company registration */}
          <div className="flex flex-col gap-3 rounded-xl border border-cinder/10 bg-smoke p-6">
            <span className="text-caption font-semibold tracking-[0.06em] text-ash uppercase">
              Companies Act
            </span>
            <h3 className="text-h4 font-semibold text-cinder">Cindariq Limited</h3>
            <p className="text-caption text-ash">
              Registered in Kenya under the Companies Act 2015. Full corporate governance
              documentation available on request.
            </p>
            {companyReg && (
              <span className="mt-auto text-caption font-medium text-ember">Reg. {companyReg}</span>
            )}
          </div>
        </div>
      </SectionContainer>

      {/* Founder */}
      <SectionContainer background="smoke" paddingY="lg" ariaLabelledBy="founder-heading">
        <Eyebrow>The founder</Eyebrow>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[auto_1fr]">
          {/* Portrait placeholder */}
          <div
            className="aspect-square w-full max-w-65 rounded-xl bg-cinder/10"
            role="img"
            aria-label="Founder portrait — photograph to follow"
          />
          {/* Bio */}
          <div>
            <h2 id="founder-heading" className="mb-1 text-h2 font-semibold text-cinder">
              {/* TODO: Replace with founder name before launch */}
              [Founder name]
            </h2>
            <p className="mb-6 text-caption font-semibold tracking-[0.06em] text-ash uppercase">
              Founder, Cindariq Limited
            </p>
            <div className="max-w-150 space-y-4 text-body text-ash">
              {/* TODO: Replace with founder biography before launch */}
              <p>
                [Founder biography — to be supplied before launch. This section will describe
                relevant experience in IT asset management, compliance, and enterprise services,
                along with the professional background that informs the Cindariq practice.]
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      <ClosingCTA />
    </>
  );
}
