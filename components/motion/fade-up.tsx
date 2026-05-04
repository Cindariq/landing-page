"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_OUT_EXPO, VIEWPORT_ONCE } from "@/lib/animations";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Scroll-triggered fade-up wrapper.
 * Use inside server components to animate headings, eyebrows, and content blocks.
 * Automatically falls back to static rendering for users who prefer reduced motion.
 */
export function FadeUp({ children, delay = 0, className }: FadeUpProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration: 0.55, delay, ease: EASE_OUT_EXPO }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
