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
 * Circle: cx=44 cy=44 r=30 strokeWidth=8 (outer radius 48)
 * Tail: starts at circle boundary at ~35° from horizontal (x=69, y=61),
 *       extends at 35° to (x=85, y=73). Per PRD §5.2.
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
      <circle cx="44" cy="44" r="30" stroke="currentColor" strokeWidth="8" />
      <line
        x1="69"
        y1="61"
        x2="85"
        y2="73"
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
