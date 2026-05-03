"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react";
import { Sheet, SheetContent, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CindariqLogo } from "@/components/brand/logo";
import { useUIStore } from "@/lib/store/ui-store";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/compliance", label: "Compliance" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

/** Hamburger trigger — rendered inside SiteHeader on mobile. */
export function MobileMenuTrigger() {
  const { setMobileMenuOpen } = useUIStore();
  return (
    <button
      onClick={() => setMobileMenuOpen(true)}
      aria-label="Open navigation menu"
      className="flex items-center justify-center text-smoke md:hidden"
    >
      <List size={24} aria-hidden="true" />
    </button>
  );
}

/** Full-screen overlay — rendered in MarketingLayout outside the header. */
export function MobileMenu() {
  const { mobileMenuOpen, setMobileMenuOpen } = useUIStore();
  const pathname = usePathname();

  return (
    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="flex w-full max-w-sm flex-col gap-0 bg-cinder p-0"
      >
        {/* Header row — close button is first tabbable per AC §4.2 */}
        <div className="flex items-center justify-between border-b border-smoke/10 px-6 py-5">
          <CindariqLogo height={28} colourMode="on-dark" />
          <SheetClose asChild>
            <button
              aria-label="Close navigation menu"
              className="flex items-center justify-center text-smoke transition-opacity hover:opacity-70"
            >
              <X size={24} aria-hidden="true" />
            </button>
          </SheetClose>
        </div>

        <nav aria-label="Mobile navigation" className="flex flex-1 flex-col px-6 pt-8">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "border-b border-smoke/10 py-4 text-h3 font-semibold text-smoke transition-opacity hover:opacity-70",
                pathname.startsWith(href) && "text-ember",
              )}
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="px-6 pt-6 pb-8">
          <Button size="lg" variant="primary" asChild className="w-full">
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              Book a discovery call
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
