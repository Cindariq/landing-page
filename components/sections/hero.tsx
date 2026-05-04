import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Loader3 } from "@/components/ui/loader-3";

/**
 * Hero section — AC §4.3
 * -mt-16 pulls the section under the sticky header (64px) so the
 * transparent header blends with the cinder background.
 * pt-16 pushes copy back below the header.
 */
export function Hero() {
  return (
    <section
      className="relative -mt-18 flex min-h-[80vh] items-center bg-cinder pt-18 lg:min-h-screen"
      aria-label="Hero"
    >
      <div className="mx-auto w-full max-w-360 px-6 pt-28 pb-20 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-3">
          {/* Copy — 2/3 */}
          <div className="lg:col-span-2">
            <span className="mb-4 block text-eyebrow font-semibold tracking-[0.08em] text-ember uppercase">
              Certified IT Disposition
            </span>

            <h1 className="mb-6 font-serif text-display leading-tight text-smoke italic">
              <span className="block pl-0">Disposed.</span>
              <span className="block pl-8 md:pl-10">Documented.</span>
              <span className="block pl-16 text-ember md:pl-20">Defensible.</span>
            </h1>

            <div className="mb-8 max-w-130 text-body-lg text-smoke/80">
              <p>Data permanently destroyed, certified to NIST 800-88.</p>
              <div className="my-3 w-10 border-t border-ember/40" />
              <p>Records that hold up in any audit, regulator review, or board inquiry.</p>
              <div className="my-3 w-10 border-t border-ember/40" />
              <p>Sustainability numbers ready for your next ESG report.</p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" variant="primary" asChild>
                <Link href="/contact">Book a discovery call</Link>
              </Button>
              <Link
                href="/how-it-works"
                className="group flex items-center gap-1.5 text-body font-medium text-smoke/40 transition-colors hover:text-smoke"
              >
                See how it works
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  aria-hidden="true"
                  className="text-ember transition-colors group-hover:text-smoke"
                >
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

          {/* 3D falling-boxes — decorative, mirrors staircase headline */}
          <div className="hidden items-center justify-center lg:flex" aria-hidden="true">
            <Loader3 />
          </div>
        </div>
      </div>
    </section>
  );
}
