"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/insights", label: "Insights" },
] as const;

interface NavProps {
  onLight?: boolean;
  className?: string;
  onLinkClick?: () => void;
}

export function Nav({ onLight = false, className, onLinkClick }: NavProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation" className={cn("flex items-center gap-10", className)}>
      {NAV_LINKS.map(({ href, label }) => {
        const active = pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            onClick={onLinkClick}
            className={cn(
              "relative text-[15px] font-semibold transition-opacity duration-150",
              onLight ? "text-cinder" : "text-smoke",
              active ? "opacity-100" : "opacity-60 hover:opacity-90",
            )}
            aria-current={active ? "page" : undefined}
          >
            {label}
            {active && (
              <span
                className="absolute right-0 -bottom-1.5 left-0 h-0.5 rounded-full bg-ember"
                aria-hidden="true"
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
