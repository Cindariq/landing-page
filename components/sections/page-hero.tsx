"use client";

import { useRef, useState } from "react";
import type { ReactNode } from "react";
import { Eyebrow } from "@/components/content/eyebrow";
import { FadeUp } from "@/components/motion/fade-up";

interface PageHeroProps {
  /** Eyebrow label above the heading */
  eyebrow: string;
  /** The id applied to the h1 — must match aria-labelledby on the parent page */
  headingId: string;
  heading: ReactNode;
  body: ReactNode;
  /** Optional extra content rendered after the body (e.g. a CTA button) */
  children?: ReactNode;
}

export function PageHero({ eyebrow, headingId, heading, body, children }: PageHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [glow, setGlow] = useState<{ x: number; y: number } | null>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setGlow({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  function handleMouseLeave() {
    setGlow(null);
  }

  // Derive a per-page SVG pattern id from headingId to avoid collisions
  const patternId = `page-hero-grid-${headingId}`;

  return (
    <section
      ref={sectionRef}
      aria-labelledby={headingId}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden bg-cinder py-24"
    >
      {/* Dot grid */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={patternId} x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="rgba(232,230,225,0.12)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>

      {/* Cursor radial glow — ember tinted */}
      {glow && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute rounded-full"
          style={{
            width: 520,
            height: 520,
            left: glow.x - 260,
            top: glow.y - 260,
            background:
              "radial-gradient(circle, rgba(184,71,45,0.18) 0%, rgba(184,71,45,0.06) 40%, transparent 70%)",
          }}
        />
      )}

      {/* Content */}
      <div className="relative mx-auto max-w-360 px-6 md:px-10 lg:px-20">
        <FadeUp>
          <Eyebrow colour="smoke">{eyebrow}</Eyebrow>
        </FadeUp>
        <FadeUp delay={0.12}>
          <h1 id={headingId} className="mb-6 max-w-160 text-h1 font-bold text-smoke">
            {heading}
          </h1>
        </FadeUp>
        <FadeUp delay={0.22}>
          <p className="max-w-130 text-body-lg text-smoke/80">{body}</p>
        </FadeUp>
        {children && <FadeUp delay={0.3}>{children}</FadeUp>}
      </div>
    </section>
  );
}
