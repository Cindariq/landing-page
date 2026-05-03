import Link from "next/link";
import { CindariqLogo } from "@/components/brand/logo";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-col bg-smoke">
      {/* Skip-to-content — first focusable element (§11.2 AC) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-cinder focus:px-4 focus:py-2 focus:text-body focus:font-medium focus:text-smoke focus:ring-2 focus:ring-ember focus:ring-offset-2"
      >
        Skip to content
      </a>
      {/* Minimal header — logo only, no nav */}
      <header className="h-16 w-full border-b border-cinder/10 bg-smoke">
        <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-6 md:px-8 lg:px-16">
          <Link href="/" aria-label="Cindariq — go to home">
            <CindariqLogo height={28} colourMode="on-light" />
          </Link>
          <Link
            href="/"
            className="text-caption font-medium text-ash transition-colors hover:text-cinder"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <main id="main-content" className="flex-1">
        {children}
      </main>

      <footer className="border-t border-cinder/10 py-6">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8 lg:px-16">
          <p className="text-caption text-ash">© 2026 Cindariq Limited. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
