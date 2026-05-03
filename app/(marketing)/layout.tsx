import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { MobileMenu } from "@/components/layout/mobile-menu";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <MobileMenu />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </>
  );
}
