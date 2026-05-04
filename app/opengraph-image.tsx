import { ImageResponse } from "next/og";

export const alt = "Cindariq — Disposed. Documented. Defensible.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#2A2A2E",
        color: "#E8E6E1",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Eyebrow */}
      <div
        style={{
          fontSize: 18,
          color: "#B8472D",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          marginBottom: 32,
        }}
      >
        Audit-Ready IT Asset Disposition
      </div>

      {/* Tagline */}
      <div
        style={{
          fontSize: 84,
          fontStyle: "italic",
          lineHeight: 1.05,
        }}
      >
        Disposed. Documented. Defensible.
      </div>

      {/* Standards sub-line */}
      <div
        style={{
          fontSize: 24,
          color: "rgba(232, 230, 225, 0.7)",
          marginTop: 32,
          maxWidth: 800,
        }}
      >
        NIST 800-88. DPA 2019. GRI 306. Kenyan-registered, ODPC and NEMA compliant.
      </div>
    </div>,
    size,
  );
}
