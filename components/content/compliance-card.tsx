"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE_OUT_EXPO, VIEWPORT_ONCE } from "@/lib/animations";

interface ComplianceCardProps {
  icon: React.ReactNode;
  title: string;
  body: string;
  className?: string;
  index?: number;
}

export function ComplianceCard({ icon, title, body, className, index = 0 }: ComplianceCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "flex flex-col gap-5 bg-parchment p-8 transition-colors duration-300 hover:bg-smoke",
        className,
      )}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration: 0.55, delay: index * 0.12, ease: EASE_OUT_EXPO }}
    >
      <div className="size-8 text-cinder" aria-hidden="true">
        {icon}
      </div>
      <h3 className="text-h3 font-semibold text-cinder">{title}</h3>
      <p className="text-body text-ash">{body}</p>
    </motion.div>
  );
}
