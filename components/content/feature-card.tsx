import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  body: string;
  className?: string;
}

export function FeatureCard({ icon, title, body, className }: FeatureCardProps) {
  return (
    <div className={cn("flex flex-col gap-5", className)}>
      <div className="size-12 text-cinder" aria-hidden="true">
        {icon}
      </div>
      <h3 className="text-h3 font-semibold text-cinder">{title}</h3>
      <p className="text-body-lg text-ash">{body}</p>
    </div>
  );
}
