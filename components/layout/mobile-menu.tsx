"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react";
import { Sheet, SheetContent, SheetClose, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CindariqLogo } from "@/components/brand/logo";
import { cn } from "@/lib/utils";

import { MAIN_NAV_LINKS } from "./nav";

/** Self-contained mobile menu: hamburger trigger + slide-in Sheet panel. */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Hamburger — only visible below md breakpoint */}
      <SheetTrigger asChild>
        <button
          aria-label="Open navigation menu"
          className="flex items-center justify-center text-smoke md:hidden"
        >
          <List size={24} aria-hidden="true" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        showCloseButton={false}
        className="flex w-full max-w-sm flex-col gap-0 bg-cinder p-0"
      >
        {/* Accessible title (visually hidden) */}
        <SheetTitle className="sr-only">Navigation</SheetTitle>

        {/* Header row — close button is the first tabbable element */}
        <div className="flex items-center justify-between border-b border-smoke/10 px-6 py-5">
          <SheetClose asChild>
            <Link href="/" aria-label="Cindariq — go to home">
              <CindariqLogo height={28} colourMode="on-dark" />
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <button
              aria-label="Close navigation menu"
              className="flex items-center justify-center text-smoke transition-opacity hover:opacity-70"
            >
              <X size={24} aria-hidden="true" />
            </button>
          </SheetClose>
        </div>

        {/* Nav links */}
        <nav aria-label="Mobile navigation" className="flex flex-1 flex-col px-6 pt-8">
          {MAIN_NAV_LINKS.map(({ href, label }) => (
            <SheetClose asChild key={href}>
              <Link
                href={href}
                className={cn(
                  "border-b border-smoke/10 py-4 text-h3 font-semibold text-smoke transition-opacity hover:opacity-70",
                  pathname.startsWith(href) && "text-ember",
                )}
                aria-current={pathname.startsWith(href) ? "page" : undefined}
              >
                {label}
              </Link>
            </SheetClose>
          ))}
        </nav>

        {/* CTA */}
        <div className="px-6 pt-6 pb-8">
          <SheetClose asChild>
            <Button size="lg" variant="primary" asChild className="w-full">
              <Link href="/contact">Book a discovery call</Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
