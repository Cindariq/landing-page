import Link from "next/link";
import { SectionContainer } from "@/components/layout/section-container";
import { Button } from "@/components/ui/button";

export function ClosingCTA() {
  return (
    <SectionContainer
      background="cinder"
      paddingY="lg"
      id="closing-cta"
      ariaLabelledBy="closing-cta-heading"
    >
      <div className="mx-auto max-w-160 text-center">
        <h2 id="closing-cta-heading" className="mb-6 text-h1 font-bold text-smoke">
          Start with a discovery conversation.
        </h2>
        <p className="mb-10 text-body-lg text-smoke/80">
          Forty-five minutes. We listen first. We pitch only if there is something worth pitching.
        </p>
        <Button size="lg" variant="primary" asChild>
          <Link href="/contact">Schedule a call</Link>
        </Button>
        <p className="mt-6 text-caption text-ash">
          No obligation. No follow-up unless you ask. Calendar link only — no form to fill in.
        </p>
      </div>
    </SectionContainer>
  );
}
