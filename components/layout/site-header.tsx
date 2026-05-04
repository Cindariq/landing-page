"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CindariqLogo } from "@/components/brand/logo";
import { Nav } from "@/components/layout/nav";
import { MobileMenu } from "@/components/layout/mobile-menu";
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
        "sticky top-0 z-50 h-18 w-full transition-all duration-300",
        showSolid ? "bg-cinder/95 shadow-sm backdrop-blur-sm" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-full w-full max-w-360 items-center justify-between px-6 md:px-10 lg:px-20">
        {/* Logo — anchored left */}
        <Link href="/" aria-label="Cindariq — go to home">
          <CindariqLogo height={36} colourMode="on-dark" />
        </Link>

        {/* Desktop nav + CTA — grouped right */}
        <div className="hidden items-center gap-10 md:flex">
          <Nav />
          <Button size="sm" variant="primary" asChild>
            <Link href="/contact">Book a discovery call</Link>
          </Button>
        </div>

        {/* Mobile trigger */}
        <MobileMenu />
      </div>
    </header>
  );
}
