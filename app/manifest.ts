import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cindariq",
    short_name: "Cindariq",
    description: "Audit-ready IT asset disposition for African enterprises and public bodies.",
    start_url: "/",
    display: "browser",
    theme_color: "#2a2a2e",
    background_color: "#e8e6e1",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
