import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { ScrollObserver } from "@/components/layout/scroll-observer";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Single scroll listener for the whole marketing layout (PRD §8.2) */}
      <ScrollObserver />
      <SiteHeader />
      <MobileMenu />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </>
  );
}
