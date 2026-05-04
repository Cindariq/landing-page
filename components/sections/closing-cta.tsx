import Link from "next/link";
import { SectionContainer } from "@/components/layout/section-container";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion/fade-up";

export function ClosingCTA() {
  return (
    <SectionContainer
      background="cinder"
      paddingY="lg"
      id="closing-cta"
      ariaLabelledBy="closing-cta-heading"
    >
      <div className="mx-auto max-w-160 text-center">
        <FadeUp>
          <h2 id="closing-cta-heading" className="mb-6 text-h1 font-bold text-smoke">
            Start with a discovery conversation.
          </h2>
        </FadeUp>
        <FadeUp delay={0.12}>
          <p className="mb-10 text-body-lg text-smoke/80">
            Forty-five minutes. We listen first. We pitch only if there is something worth pitching.
          </p>
        </FadeUp>
        <FadeUp delay={0.22}>
          <div className="flex flex-col items-center gap-6">
            <Button size="lg" variant="primary" asChild>
              <Link href="/contact">Schedule a call</Link>
            </Button>
            <p className="text-caption text-ash">
              No obligation. No follow-up unless you ask. Calendar link only — no form to fill in.
            </p>
          </div>
        </FadeUp>
      </div>
    </SectionContainer>
  );
}
