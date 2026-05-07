import type { Metadata } from "next";
import Link from "next/link";
import { SectionContainer } from "@/components/layout/section-container";
import { FadeUp } from "@/components/motion/fade-up";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Under Construction — Cindariq",
  description: "This page is still under construction. Check back soon.",
};

export default function ComingSoonPage() {
  return (
    <SectionContainer background="cinder" paddingY="lg" ariaLabelledBy="coming-soon-heading">
      <FadeUp>
        <p className="mb-4 text-eyebrow font-semibold tracking-[0.08em] text-ember uppercase">
          Coming soon
        </p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h1 id="coming-soon-heading" className="mb-6 max-w-140 text-h1 font-bold text-smoke">
          This page is still under construction.
        </h1>
      </FadeUp>
      <FadeUp delay={0.2}>
        <p className="mb-10 max-w-120 text-body-lg text-smoke/70">
          We&apos;re working on it. In the meantime, head back to the home page to learn more about
          what Cindariq does.
        </p>
      </FadeUp>
      <FadeUp delay={0.28}>
        <Button asChild variant="primary" size="lg">
          <Link href="/">Back to Home</Link>
        </Button>
      </FadeUp>
    </SectionContainer>
  );
}
