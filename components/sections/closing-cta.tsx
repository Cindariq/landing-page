import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import { FadeUp } from "@/components/motion/fade-up";

export function ClosingCTA() {
  return (
    <section
      id="closing-cta"
      aria-labelledby="closing-cta-heading"
      className="relative w-full scroll-mt-20 overflow-hidden bg-cinder py-32"
    >
      {/* Marquee watermark — blurred ember outline */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-center opacity-50 blur-[2px] select-none">
        <Marquee
          text="Cindariq"
          duration={32}
          fontSize="3xl"
          strokeColor="#b8472d"
          strokeWidth="1.5px"
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 mx-auto max-w-160 px-6 text-center md:px-10 lg:px-20">
        <FadeUp>
          <p className="mb-3 text-eyebrow font-semibold tracking-[0.08em] text-ember uppercase">
            Start the conversation
          </p>
          <h2 id="closing-cta-heading" className="mb-6 font-serif text-h1 text-smoke italic">
            Start with a discovery conversation.
          </h2>
        </FadeUp>
        <FadeUp delay={0.14}>
          <p className="mx-auto mb-10 max-w-120 text-body-lg text-smoke/70">
            Forty-five minutes. We listen first. We pitch only if there is something worth pitching.
          </p>
        </FadeUp>
        <FadeUp delay={0.24}>
          <div className="flex flex-col items-center gap-5">
            <Button size="lg" variant="primary" asChild>
              <Link href="/contact">Schedule a call</Link>
            </Button>
            <p className="text-caption text-smoke/40">
              No obligation. No follow-up unless you ask.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
