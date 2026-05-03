"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/compliance", label: "Compliance" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
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
      {NAV_LINKS.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          onClick={onLinkClick}
          className={cn(
            "text-[15px] font-semibold transition-opacity duration-150",
            onLight ? "text-cinder hover:opacity-60" : "text-smoke hover:opacity-60",
            pathname.startsWith(href) && "opacity-60",
          )}
          aria-current={pathname === href ? "page" : undefined}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
