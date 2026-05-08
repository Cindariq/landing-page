"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_OUT_EXPO, VIEWPORT_ONCE } from "@/lib/animations";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  yOffset?: number;
  duration?: number;
  viewportAmount?: number | "some" | "all";
}

/**
 * Scroll-triggered fade-up wrapper.
 * Use inside server components to animate headings, eyebrows, and content blocks.
 * Automatically falls back to static rendering for users who prefer reduced motion.
 */
export function FadeUp({
  children,
  delay = 0,
  className,
  yOffset = 20,
  duration = 0.55,
  viewportAmount,
}: FadeUpProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  // Use the standard VIEWPORT_ONCE config, but override `amount` if provided
  const viewportConfig = viewportAmount
    ? { ...VIEWPORT_ONCE, amount: viewportAmount }
    : VIEWPORT_ONCE;

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportConfig}
      transition={{ duration, delay, ease: EASE_OUT_EXPO }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
