import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cindariq.co.ke";
const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/`, lastModified, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/how-it-works`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/compliance`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
