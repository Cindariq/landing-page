import { SectionContainer } from "@/components/layout/section-container";
import { Eyebrow } from "@/components/content/eyebrow";
import { FeatureCard } from "@/components/content/feature-card";
import { FadeUp } from "@/components/motion/fade-up";

const CARDS = [
  {
    id: "evidence",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path
          d="M24 4L6 12v12c0 10 8 18 18 20 10-2 18-10 18-20V12L24 4z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M16 24l5 5 11-11"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Per-device evidence, not tonnage",
    body: "Your existing recycler reports tonnes diverted. Your Data Protection Officer needs per-device evidence of NIST 800-88 sanitisation. Your sustainability officer needs GRI 306-aligned outputs. The gap is where Cindariq operates.",
  },
  {
    id: "risk",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="9" y="21" width="30" height="21" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <path
          d="M15 21v-6a9 9 0 0 1 18 0v6"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="24" cy="32" r="3" fill="currentColor" />
      </svg>
    ),
    title: "Risk that scales with every refresh cycle",
    body: "Every laptop returned to the storeroom contains customer data, employee records, financial information. Until it is verifiably destroyed, the breach risk persists. Cindariq closes that window per device, with documented evidence.",
  },
  {
    id: "value",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path
          d="M24 10l7 12H17L24 10z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M17 22L8 38h12M31 22l9 16H28"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M14 38h20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Recovered value most relationships ignore",
    body: "Functional retired devices have residual value most operators do not recover for the client. Cindariq tracks recovery, returns the value, and reports it alongside the destruction.",
  },
] as const;

export function ProblemFraming() {
  return (
    <SectionContainer
      background="smoke"
      paddingY="lg"
      id="problem-framing"
      ariaLabelledBy="problem-framing-heading"
    >
      <FadeUp>
        <Eyebrow>The work behind the work</Eyebrow>
      </FadeUp>
      <FadeUp delay={0.12}>
        <h2
          id="problem-framing-heading"
          className="mb-16 max-w-150 text-h2 font-semibold text-cinder"
        >
          Compliance proof you cannot generate today.
        </h2>
      </FadeUp>
      <div className="grid grid-cols-1 gap-px overflow-hidden border border-cinder/10 bg-cinder/10">
        {CARDS.map(({ id, icon, title, body }, index) => (
          <FeatureCard key={id} icon={icon} title={title} body={body} index={index} />
        ))}
      </div>
    </SectionContainer>
  );
}
