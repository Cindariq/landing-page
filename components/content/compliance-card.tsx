import { cn } from "@/lib/utils";

interface ComplianceCardProps {
  icon: React.ReactNode;
  title: string;
  body: string;
  className?: string;
}

export function ComplianceCard({ icon, title, body, className }: ComplianceCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 rounded-xl border border-cinder/10 bg-parchment p-8",
        className,
      )}
    >
      <div className="size-8 text-cinder" aria-hidden="true">
        {icon}
      </div>
      <h3 className="text-h3 font-semibold text-cinder">{title}</h3>
      <p className="text-body text-ash">{body}</p>
    </div>
  );
}
