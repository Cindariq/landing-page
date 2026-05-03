import { cn } from "@/lib/utils";

interface ProcessStepProps {
  number: 1 | 2 | 3 | 4 | 5;
  title: string;
  body: string;
  /** Show the horizontal connector line after this step (desktop only). Hide on the last step. */
  showConnector?: boolean;
  className?: string;
}

export function ProcessStep({
  number,
  title,
  body,
  showConnector = true,
  className,
}: ProcessStepProps) {
  return (
    <div
      className={cn(
        "relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left",
        className,
      )}
    >
      {/* Number badge + connector */}
      <div className="relative mb-6 flex items-center">
        <div className="flex size-16 shrink-0 items-center justify-center rounded-full border-2 border-ember bg-slate">
          <span className="text-h4 leading-none font-bold text-ember">{number}</span>
        </div>
        {showConnector && (
          <div
            className="absolute left-16 hidden h-px w-[calc(100%+2.5rem)] bg-ember/20 lg:block"
            aria-hidden="true"
          />
        )}
      </div>
      <h3 className="mb-2 text-h4 font-semibold text-smoke">{title}</h3>
      <p className="max-w-[200px] text-body text-smoke/70">{body}</p>
    </div>
  );
}
