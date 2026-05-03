import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: string;
  colour?: "ember" | "cinder" | "smoke";
  className?: string;
}

const colourClasses = {
  ember: "text-ember",
  cinder: "text-cinder",
  smoke: "text-smoke/60",
} as const;

export function Eyebrow({ children, colour = "ember", className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "mb-4 block text-eyebrow font-semibold tracking-[0.08em] uppercase",
        colourClasses[colour],
        className,
      )}
    >
      {children}
    </span>
  );
}
