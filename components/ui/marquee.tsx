"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  repeat?: number;
  duration?: number;
  fontSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  strokeColor?: string;
  strokeWidth?: string;
}

const fontSizeClasses = {
  sm: "text-5xl sm:text-6xl md:text-7xl",
  md: "text-6xl sm:text-7xl md:text-8xl",
  lg: "text-7xl sm:text-8xl md:text-9xl",
  xl: "text-8xl sm:text-9xl md:text-[10rem]",
  "2xl": "text-9xl sm:text-[10rem] md:text-[11rem]",
  "3xl": "text-[10rem] sm:text-[11rem] md:text-[12rem]",
};

export const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
  (
    {
      className,
      text,
      repeat = 8,
      duration = 28,
      fontSize = "xl",
      strokeColor = "rgba(255,255,255,0.07)",
      strokeWidth = "1px",
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn("relative w-full overflow-hidden py-6", className)}
        aria-hidden="true"
        {...props}
      >
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            duration,
          }}
        >
          {[...Array(repeat)].map((_, index) => (
            <div key={index} className="flex items-center">
              <span
                className={cn(fontSizeClasses[fontSize], "font-bold text-transparent select-none")}
                style={{
                  WebkitTextStroke: `${strokeWidth} ${strokeColor}`,
                  paddingLeft: "2rem",
                  paddingRight: "2rem",
                }}
              >
                {text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    );
  },
);

Marquee.displayName = "Marquee";
