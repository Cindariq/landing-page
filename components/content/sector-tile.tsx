import { cn } from "@/lib/utils";

interface SectorTileProps {
  icon: React.ReactNode;
  sector: string;
  description: string;
  className?: string;
}

export function SectorTile({ icon, sector, description, className }: SectorTileProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-xl border border-steel/30 bg-smoke p-6",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <div className="size-6 shrink-0 text-cinder" aria-hidden="true">
          {icon}
        </div>
        <h3 className="text-h4 font-semibold text-cinder">{sector}</h3>
      </div>
      <p className="text-body text-ash">{description}</p>
    </div>
  );
}
