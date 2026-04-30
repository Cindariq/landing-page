import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cindariq.co.ke";

export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: "Cindariq | IT Asset Disposition Kenya",
      template: "%s | Cindariq",
    },
    description:
      "Certified IT asset disposal, data destruction, and responsible e-waste recycling across Kenya. NEMA-licensed. AGPO-registered.",
    openGraph: {
      type: "website",
      locale: "en_KE",
      url: siteUrl,
      siteName: "Cindariq",
    },
    twitter: {
      card: "summary_large_image",
    },
    ...overrides,
  };
}
