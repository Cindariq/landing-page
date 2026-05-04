import type { Metadata } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cindariq.co.ke";

/** Site-wide metadata defaults — §9.3 */
export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cindariq — Audit-Ready IT Asset Disposition for African Enterprises",
    template: "%s · Cindariq",
  },
  description:
    "Cindariq applies certified, intelligent processes to your retired IT equipment. NIST 800-88-aligned data destruction, GRI 306 ESG outputs, and DPA 2019-compliant chain of custody. Kenyan-registered, NEMA-licensed, ODPC-registered, AGPO-certified.",
  applicationName: "Cindariq",
  authors: [{ name: "Cindariq Limited" }],
  keywords: [
    "ITAD Kenya",
    "IT asset disposition",
    "NIST 800-88",
    "data destruction Kenya",
    "AGPO IT disposal",
    "ESG IT disposal",
    "GRI 306 reporting",
    "ODPC compliant",
    "NEMA licensed",
    "e-waste enterprise Kenya",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Cindariq Limited",
  publisher: "Cindariq Limited",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: SITE_URL,
    siteName: "Cindariq",
    title: "Cindariq — Audit-Ready IT Asset Disposition",
    description:
      "NIST 800-88-aligned data destruction and audit-ready ESG reporting for Kenyan enterprises and public bodies.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Cindariq — Disposed. Documented. Defensible.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cindariq — Audit-Ready IT Asset Disposition",
    description:
      "NIST 800-88-aligned data destruction and audit-ready ESG reporting for Kenyan enterprises.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "", // populate via Search Console post-launch
  },
  alternates: { canonical: SITE_URL },
  category: "business",
};

/** Thin helper for per-page overrides — kept for backwards compatibility. */
export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return { ...siteMetadata, ...overrides };
}
