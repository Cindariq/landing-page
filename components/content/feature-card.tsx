"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE_OUT_EXPO, VIEWPORT_ONCE } from "@/lib/animations";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  body: string;
  className?: string;
  index?: number;
}

export function FeatureCard({ icon, title, body, className, index = 0 }: FeatureCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "flex gap-8 bg-smoke p-8 transition-colors duration-300 hover:bg-parchment",
        className,
      )}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration: 0.55, delay: index * 0.1, ease: EASE_OUT_EXPO }}
    >
      <div className="mt-1 size-10 shrink-0 text-ember" aria-hidden="true">
        {icon}
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-h4 font-semibold text-cinder">{title}</h3>
        <p className="text-body text-ash">{body}</p>
      </div>
    </motion.div>
  );
}
