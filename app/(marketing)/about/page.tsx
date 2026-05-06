import type { Metadata } from "next";
import { SectionContainer } from "@/components/layout/section-container";
import { Eyebrow } from "@/components/content/eyebrow";
import { ClosingCTA } from "@/components/sections/closing-cta";
import { FadeUp } from "@/components/motion/fade-up";
import TeamShowcase from "@/components/ui/team-showcase";

export const metadata: Metadata = {
  title: "About Cindariq — Engineering for Defensible Disposal",
  description:
    "Cindariq is a Kenyan-registered, AGPO-certified IT asset disposition company. NEMA-licensed, ODPC-registered, built for regulated enterprises and public bodies.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <SectionContainer background="cinder" paddingY="md" ariaLabelledBy="about-page-heading">
        <FadeUp>
          <Eyebrow colour="smoke">About Cindariq</Eyebrow>
        </FadeUp>
        <FadeUp delay={0.12}>
          <h1 id="about-page-heading" className="mb-6 max-w-160 text-h1 font-bold text-smoke">
            Serious work. Verifiable outcomes.
          </h1>
        </FadeUp>
        <FadeUp delay={0.22}>
          <p className="max-w-130 text-body-lg text-smoke/80">
            Cindariq is a Nairobi-based IT asset disposition company serving regulated enterprises
            and public bodies in Kenya. We exist to make compliance proof a deliverable, not an
            afterthought.
          </p>
        </FadeUp>
      </SectionContainer>

      {/* Company narrative */}
      <SectionContainer background="smoke" paddingY="lg" ariaLabelledBy="narrative-heading">
        <FadeUp>
          <Eyebrow>Our focus</Eyebrow>
        </FadeUp>
        <FadeUp delay={0.12}>
          <h2 id="narrative-heading" className="mb-8 max-w-140 text-h2 font-semibold text-cinder">
            The gap no recycler fills.
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <div className="max-w-170 space-y-5 text-body text-ash">
            <p>
              Most enterprise IT refresh cycles end with equipment handed to a logistics contractor
              who issues a tonnage report. The tonnage report satisfies no audit, protects no DPO,
              and cannot be cited in a GRI 306 disclosure.
            </p>
            <p>
              Cindariq was established to fill that gap — not as a recycler that adds compliance
              language, but as a compliance-first ITAD operator. Every engagement produces
              per-device evidence of NIST 800-88 sanitisation, a chain of custody manifest, and ESG
              outputs aligned to GRI 306 and ISO 14064.
            </p>
            <p>
              We work with banks, insurers, multinational subsidiaries, and public-sector bodies
              whose procurement and risk functions require something a tonnage certificate cannot
              provide: a record that holds up in an audit room.
            </p>
          </div>
        </FadeUp>
      </SectionContainer>

      {/* Credentials */}
      <SectionContainer background="parchment" paddingY="lg" ariaLabelledBy="credentials-heading">
        <FadeUp>
          <Eyebrow colour="cinder">Our registrations</Eyebrow>
        </FadeUp>
        <FadeUp delay={0.12}>
          <h2
            id="credentials-heading"
            className="mb-12 max-w-125 text-h2 font-semibold text-cinder"
          >
            Compliance in our own operations.
          </h2>
        </FadeUp>
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-cinder/10 bg-cinder/10 sm:grid-cols-2 lg:grid-cols-4">
          {/* ODPC */}
          <div className="flex flex-col gap-3 bg-smoke p-6 transition-colors duration-300 hover:bg-parchment">
            <span className="text-caption font-semibold tracking-[0.06em] text-ash uppercase">
              ODPC
            </span>
            <h3 className="text-h4 font-semibold text-cinder">Data Controller &amp; Processor</h3>
            <p className="text-caption text-ash">
              Registered with the Office of the Data Protection Commissioner as both Data Controller
              and Data Processor under the Data Protection Act 2019.
            </p>
          </div>

          {/* NEMA */}
          <div className="flex flex-col gap-3 bg-smoke p-6 transition-colors duration-300 hover:bg-parchment">
            <span className="text-caption font-semibold tracking-[0.06em] text-ash uppercase">
              NEMA
            </span>
            <h3 className="text-h4 font-semibold text-cinder">E-Waste Handling</h3>
            <p className="text-caption text-ash">
              NEMA-licensed for the collection, transportation, and processing of electrical and
              electronic waste under the Environmental Management Act.
            </p>
          </div>

          {/* AGPO */}
          <div className="flex flex-col gap-3 bg-smoke p-6 transition-colors duration-300 hover:bg-parchment">
            <span className="text-caption font-semibold tracking-[0.06em] text-ash uppercase">
              AGPO
            </span>
            <h3 className="text-h4 font-semibold text-cinder">Youth Enterprise</h3>
            <p className="text-caption text-ash">
              Certified under the Access to Government Procurement Opportunities programme.
              PPDA-ready documentation available for public-sector procurement exercises.
            </p>
          </div>

          {/* Company registration */}
          <div className="flex flex-col gap-3 bg-smoke p-6 transition-colors duration-300 hover:bg-parchment">
            <span className="text-caption font-semibold tracking-[0.06em] text-ash uppercase">
              Companies Act
            </span>
            <h3 className="text-h4 font-semibold text-cinder">Cindariq Limited</h3>
            <p className="text-caption text-ash">
              Registered in Kenya under the Companies Act 2015. Full corporate governance
              documentation available on request.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Founding Team */}
      <SectionContainer background="smoke" paddingY="lg" ariaLabelledBy="founder-heading">
        <FadeUp>
          <Eyebrow>The founding team</Eyebrow>
        </FadeUp>
        <FadeUp delay={0.12}>
          <h2 id="founder-heading" className="mb-4 text-h2 font-semibold text-cinder">
            Built for the work.
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="mb-12 max-w-150 text-body text-ash">
            {/* TODO: Replace with accurate founding team biography before launch */}
            Cindariq was built by practitioners with direct experience in enterprise IT operations,
            compliance management, and regulated-sector procurement. The founding team brings
            together the operational depth and regulatory knowledge the work demands.
          </p>
        </FadeUp>
        <FadeUp delay={0.28}>
          <TeamShowcase />
        </FadeUp>
      </SectionContainer>

      <ClosingCTA />
    </>
  );
}
