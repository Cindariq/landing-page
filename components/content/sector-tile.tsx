"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE_OUT_EXPO, VIEWPORT_ONCE } from "@/lib/animations";

interface SectorTileProps {
  icon: React.ReactNode;
  sector: string;
  description: string;
  className?: string;
  index?: number;
}

export function SectorTile({ icon, sector, description, className, index = 0 }: SectorTileProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "flex flex-col gap-4 rounded-xl border border-steel/30 bg-smoke p-6",
        className,
      )}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration: 0.55, delay: index * 0.1, ease: EASE_OUT_EXPO }}
    >
      <div className="flex items-center gap-3">
        <div className="size-6 shrink-0 text-cinder" aria-hidden="true">
          {icon}
        </div>
        <h3 className="text-h4 font-semibold text-cinder">{sector}</h3>
      </div>
      <p className="text-body text-ash">{description}</p>
    </motion.div>
  );
}
