import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollObserver } from "@/components/layout/scroll-observer";
import { ScrollToTop } from "@/components/layout/scroll-to-top";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Single scroll listener for the whole marketing layout (PRD §8.2) */}
      <ScrollObserver />
      {/* Skip-to-content — first focusable element on every page (§11.2 AC) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-cinder focus:px-4 focus:py-2 focus:text-body focus:font-medium focus:text-smoke focus:ring-2 focus:ring-ember focus:ring-offset-2"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <div className="h-1 w-full bg-ember/60" aria-hidden="true" />
      <SiteFooter />
      <ScrollToTop />
    </>
  );
}
