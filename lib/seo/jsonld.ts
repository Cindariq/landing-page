import { SITE_URL } from "./metadata";

// ---------------------------------------------------------------------------
// Organization — injected into root layout (applies site-wide)  §9.5
// ---------------------------------------------------------------------------
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cindariq Limited",
    legalName: "Cindariq Limited",
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    description: "Software-led IT asset disposition for African enterprises and public bodies.",
    foundingDate: "2026",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressRegion: "Nairobi County",
      addressCountry: "KE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "hello@cindariq.co.ke",
      availableLanguage: ["English", "Swahili"],
    },
    sameAs: ["https://www.linkedin.com/company/cindariq"],
    ...(process.env.KRA_PIN || process.env.COMPANY_REG_NUMBER
      ? {
          identifier: [
            ...(process.env.KRA_PIN
              ? [{ "@type": "PropertyValue", propertyID: "KRA PIN", value: process.env.KRA_PIN }]
              : []),
            ...(process.env.COMPANY_REG_NUMBER
              ? [
                  {
                    "@type": "PropertyValue",
                    propertyID: "Company Registration (Kenya BRS)",
                    value: process.env.COMPANY_REG_NUMBER,
                  },
                ]
              : []),
          ],
        }
      : {}),
  };
}

// ---------------------------------------------------------------------------
// Service — injected into home + /how-it-works  §9.5
// ---------------------------------------------------------------------------
export function serviceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "IT Asset Disposition",
    provider: {
      "@type": "Organization",
      name: "Cindariq Limited",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Kenya",
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Banks, Insurers, Multinational subsidiaries, Public sector",
    },
    description:
      "Software-led IT asset disposition with NIST 800-88-aligned data destruction, audit-grade ESG reporting, and DPA 2019-compliant chain of custody.",
  };
}

// ---------------------------------------------------------------------------
// WebSite — injected into root layout  §9.5
// ---------------------------------------------------------------------------
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Cindariq",
    url: SITE_URL,
    description: "Audit-ready IT asset disposition for African enterprises and public bodies.",
    inLanguage: "en-KE",
  };
}

/** Serialise a JSON-LD object into a <script> tag string. */
export function jsonLdScript(data: Record<string, unknown>) {
  return JSON.stringify(data);
}
