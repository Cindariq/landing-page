import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SectionContainer } from "@/components/layout/section-container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <SectionContainer background="cinder" paddingY="lg" ariaLabelledBy="not-found-heading">
          <p className="mb-4 text-eyebrow font-semibold tracking-[0.08em] text-ember uppercase">
            404 — Page not found
          </p>
          <h1 id="not-found-heading" className="mb-6 max-w-140 text-h1 font-bold text-smoke">
            Nothing here — but the trail doesn&apos;t end.
          </h1>
          <p className="mb-10 max-w-120 text-body-lg text-smoke/70">
            The page you&apos;re looking for has either moved or doesn&apos;t exist yet. If you
            followed a link from somewhere, it may be out of date. Head back to the home page and
            we&apos;ll get you where you need to go.
          </p>
          <Button asChild variant="primary" size="lg">
            <Link href="/">Back to Home</Link>
          </Button>
        </SectionContainer>
      </main>
      <div className="h-1 w-full bg-ember/60" aria-hidden="true" />
      <SiteFooter />
    </>
  );
}
