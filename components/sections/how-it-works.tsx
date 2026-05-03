import { SectionContainer } from "@/components/layout/section-container";
import { Eyebrow } from "@/components/content/eyebrow";
import { ProcessStep } from "@/components/content/process-step";

const STEPS = [
  {
    number: 1 as const,
    title: "Request",
    body: "You tell us what is being retired. Devices, locations, timing.",
  },
  {
    number: 2 as const,
    title: "Collect",
    body: "We arrive with sealed transport. Chain of custody begins at your dock.",
  },
  {
    number: 3 as const,
    title: "Sanitise",
    body: "NIST 800-88 Clear, Purge, or Destroy — per device, with verification.",
  },
  {
    number: 4 as const,
    title: "Process",
    body: "Licensed downstream partner handles the physical disposal. We retain the trail.",
  },
  {
    number: 5 as const,
    title: "Report",
    body: "Per-device certificates, ESG outputs, recovered-value tracking — delivered to your platform of choice.",
  },
] as const;

export function HowItWorks() {
  return (
    <SectionContainer
      background="slate"
      paddingY="lg"
      id="how-it-works"
      ariaLabelledBy="how-it-works-heading"
    >
      <Eyebrow>How Cindariq works</Eyebrow>
      <h2 id="how-it-works-heading" className="mb-16 max-w-150 text-h2 font-semibold text-smoke">
        From your dock to a defensible record.
      </h2>

      {/* Steps — horizontal on desktop, stacked on mobile */}
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
        {STEPS.map(({ number, title, body }) => (
          <ProcessStep
            key={number}
            number={number}
            title={title}
            body={body}
            showConnector={number < 5}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
