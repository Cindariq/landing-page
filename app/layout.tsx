import type { Metadata } from "next";
import { inter, sourceSerif } from "./fonts";
import "./globals.css";
import { siteMetadata } from "@/lib/seo/metadata";
import { organizationJsonLd, websiteJsonLd, jsonLdScript } from "@/lib/seo/jsonld";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-smoke text-cinder" suppressHydrationWarning>
        {/* Organization + WebSite JSON-LD — site-wide (§9.5) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(organizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(websiteJsonLd()) }}
        />
        {children}
      </body>
    </html>
  );
}
