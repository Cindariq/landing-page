import Link from "next/link";
import { Button } from "@/components/ui/button";

/**
 * Hero section — AC §4.3
 * -mt-16 pulls the section under the sticky header (64px) so the
 * transparent header blends with the cinder background.
 * pt-16 pushes copy back below the header.
 */
export function Hero() {
  return (
    <section
      className="relative -mt-16 flex min-h-[80vh] items-center bg-cinder pt-16 lg:min-h-screen"
      aria-label="Hero"
    >
      <div className="mx-auto w-full max-w-300 px-6 py-20 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-3">
          {/* Copy — 2/3 */}
          <div className="lg:col-span-2">
            <span className="mb-4 block text-eyebrow font-semibold tracking-[0.08em] text-ember uppercase">
              Audit-ready IT asset disposition for African enterprises
            </span>

            <h1 className="mb-6 font-serif text-display text-smoke italic">
              What remains is what matters.
            </h1>

            <p className="mb-10 max-w-130 text-body-lg text-smoke/80">
              Cindariq applies certified, intelligent processes to your retired IT equipment so the
              data is destroyed, the records survive an audit, and your sustainability report has
              the numbers it needs.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" variant="primary" asChild>
                <Link href="/contact">Book a discovery call</Link>
              </Button>
              <Link
                href="/how-it-works"
                className="flex items-center gap-1.5 text-body font-medium text-smoke/70 transition-colors hover:text-smoke"
              >
                See how it works
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path
                    d="M3 9h12M10 4l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Q-mark — 1/3, decorative */}
          <div className="hidden items-center justify-center lg:flex" aria-hidden="true">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-70 w-70 text-ember/90"
            >
              <circle cx="44" cy="44" r="30" stroke="currentColor" strokeWidth="8" />
              <line
                x1="69"
                y1="61"
                x2="85"
                y2="73"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
