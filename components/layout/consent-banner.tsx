"use client";

import Link from "next/link";
import { useConsentStore } from "@/lib/store/consent-store";

/**
 * Cookie consent banner.
 * Renders only when the user has not yet made a choice.
 * The choice is persisted to localStorage via the consent store.
 * Analytics calls are gated elsewhere on `status === "accepted"`.
 */
export function ConsentBanner() {
  const { status, accept, decline } = useConsentStore();

  if (status !== "undecided") return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      aria-describedby="consent-description"
      className="fixed right-0 bottom-0 left-0 z-50 border-t border-cinder/10 bg-cinder px-6 py-5 shadow-lg md:px-10 lg:px-20"
    >
      <div className="mx-auto flex max-w-360 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p id="consent-description" className="max-w-2xl text-caption text-smoke/70">
          We currently set no tracking cookies. If we introduce analytics in future, we will ask for
          your consent first. By accepting, you agree to our{" "}
          <Link
            href="/cookie-policy"
            className="font-medium text-smoke/90 underline underline-offset-4 hover:text-ember"
          >
            Cookie Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            onClick={decline}
            className="rounded-md px-4 py-2 text-caption font-semibold text-smoke/50 transition-colors hover:text-smoke/90"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="rounded-md bg-ember px-4 py-2 text-caption font-semibold text-smoke transition-opacity hover:opacity-90"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
