"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Loader3 } from "@/components/ui/loader-3";
import { EASE_OUT_EXPO } from "@/lib/animations";

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: EASE_OUT_EXPO },
  };
}

export function Hero() {
  const reduceMotion = useReducedMotion();
  const motion_props = (delay: number) => (reduceMotion ? {} : fadeUp(delay));

  return (
    <section
      className="relative -mt-18 flex min-h-[80vh] items-center bg-cinder pt-18 lg:min-h-screen"
      aria-label="Hero"
    >
      <div className="mx-auto w-full max-w-360 px-6 pt-28 pb-20 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-3">
          {/* Copy — 2/3 */}
          <div className="lg:col-span-2">
            <motion.span
              className="mb-4 block text-eyebrow font-semibold tracking-[0.08em] text-ember uppercase"
              {...motion_props(0.1)}
            >
              Audit-ready IT asset disposition for African enterprises
            </motion.span>

            <h1 className="mb-6 font-serif text-display leading-tight text-smoke italic">
              <motion.span className="block pl-0" {...motion_props(0.22)}>
                What remains
              </motion.span>
              <motion.span className="block pl-8 md:pl-10" {...motion_props(0.34)}>
                is what matters.
              </motion.span>
            </h1>

            <motion.div
              className="mb-8 max-w-130 text-body-lg text-smoke/80"
              {...motion_props(0.46)}
            >
              <p>
                Cindariq applies certified, intelligent processes to your retired IT equipment so
                the data is destroyed, the records survive an audit, and your sustainability report
                has the numbers it needs.
              </p>
            </motion.div>

            <motion.div className="flex flex-wrap items-center gap-4" {...motion_props(0.56)}>
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
            </motion.div>
          </div>

          {/* 3D falling-boxes — decorative, mirrors staircase headline */}
          <motion.div
            className="hidden items-center justify-center overflow-hidden lg:flex"
            aria-hidden="true"
            initial={reduceMotion ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE_OUT_EXPO }}
          >
            <Loader3 />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
