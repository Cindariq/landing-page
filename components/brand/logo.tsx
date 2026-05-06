import { cn } from "@/lib/utils";

interface CindariqLogoProps {
  layout?: "primary" | "stacked" | "qmark-only" | "wordmark-only";
  colourMode?: "on-light" | "on-dark" | "ember-accent";
  height?: number;
  className?: string;
}

const colourMap = {
  "on-light": { mark: "text-cinder", word: "text-cinder" },
  "on-dark": { mark: "text-smoke", word: "text-smoke" },
  "ember-accent": { mark: "text-ember", word: "text-cinder" },
} as const;

/**
 * Q-mark SVG — 100×100 viewBox
 * Arc: 320° circle (center 44,44 r=30) with a gap at ~5 o'clock (40°–80° from 3 o'clock).
 * Tail: crosses through the gap from inside the bowl (52,57) to outside (67,83),
 *       passing through the ring at ~(59,70) — classic typographic cross-through Q.
 * TODO: Replace with designer-delivered SVG per Document 08 §4.1.
 */
function QMark({ className, size }: { className?: string; size: number }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      width={size}
      height={size}
      className={className}
    >
      {/* 320° arc — gap centred at 4:30 (45°) where the tail crosses through */}
      <path
        d="M 71 57 A 30 30 0 1 0 57 71"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Tail at exactly 45° — equal Δx and Δy — crossing through the ring gap */}
      <line
        x1="55"
        y1="55"
        x2="75"
        y2="75"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CindariqLogo({
  layout = "primary",
  colourMode = "on-light",
  height = 32,
  className,
}: CindariqLogoProps) {
  const { mark, word } = colourMap[colourMode];
  const wordFontSize = Math.round(height * 0.7);

  if (layout === "qmark-only") {
    return <QMark size={height} className={cn(mark, className)} />;
  }

  if (layout === "wordmark-only") {
    return (
      <span
        className={cn("font-bold tracking-[-0.03em] uppercase", word, className)}
        style={{ fontSize: wordFontSize, lineHeight: 1 }}
        aria-label="Cindariq"
      >
        Cindariq
      </span>
    );
  }

  if (layout === "stacked") {
    return (
      <div className={cn("flex flex-col items-center gap-1.5", className)} aria-label="Cindariq">
        <QMark size={height} className={mark} />
        <span
          className={cn("font-bold tracking-[-0.03em] uppercase", word)}
          style={{ fontSize: Math.round(height * 0.5), lineHeight: 1 }}
        >
          Cindariq
        </span>
      </div>
    );
  }

  // primary: Q-mark left + wordmark right
  return (
    <div className={cn("flex items-center gap-2", className)} aria-label="Cindariq">
      <QMark size={height} className={mark} />
      <span
        className={cn("font-bold tracking-[-0.03em] uppercase", word)}
        style={{ fontSize: wordFontSize, lineHeight: 1 }}
      >
        Cindariq
      </span>
    </div>
  );
}
