import { cn } from "@/lib/utils";

interface SectionContainerProps {
  background?: "smoke" | "cinder" | "slate" | "parchment";
  paddingY?: "sm" | "md" | "lg";
  children: React.ReactNode;
  id?: string;
  ariaLabelledBy?: string;
  className?: string;
}

const backgroundClasses = {
  smoke: "bg-smoke",
  cinder: "bg-cinder",
  slate: "bg-slate",
  parchment: "bg-parchment",
} as const;

const paddingClasses = {
  sm: "py-16", // 64px
  md: "py-24", // 96px
  lg: "py-32", // 128px
} as const;

export function SectionContainer({
  background = "smoke",
  paddingY = "md",
  children,
  id,
  ariaLabelledBy,
  className,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn("w-full", backgroundClasses[background], paddingClasses[paddingY], className)}
    >
      <div className="mx-auto max-w-300 px-6 md:px-8 lg:px-16">{children}</div>
    </section>
  );
}
