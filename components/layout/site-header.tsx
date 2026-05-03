"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CindariqLogo } from "@/components/brand/logo";
import { Nav } from "@/components/layout/nav";
import { MobileMenuTrigger } from "@/components/layout/mobile-menu";
import { Button } from "@/components/ui/button";
import { useUIStore } from "@/lib/store/ui-store";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { scrolled } = useUIStore();
  const pathname = usePathname();
  const isHome = pathname === "/";

  // On non-home pages the header is always solid so text is legible
  const showSolid = scrolled || !isHome;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 h-16 w-full transition-all duration-300",
        showSolid ? "bg-cinder/95 shadow-sm backdrop-blur-sm" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-6 md:px-8 lg:px-16">
        {/* Logo */}
        <Link href="/" aria-label="Cindariq — go to home">
          <CindariqLogo height={32} colourMode="on-dark" />
        </Link>

        {/* Desktop nav */}
        <Nav className="hidden md:flex" />

        {/* Desktop CTA — exactly one Ember element (AC §4.2) */}
        <div className="hidden items-center md:flex">
          <Button size="sm" variant="primary" asChild>
            <Link href="/contact">Book a discovery call</Link>
          </Button>
        </div>

        {/* Mobile trigger */}
        <MobileMenuTrigger />
      </div>
    </header>
  );
}
