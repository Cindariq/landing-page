import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#2A2A2E",
        borderRadius: "22px",
      }}
    >
      {/* Ember Q-mark rendered in SVG */}
      <svg
        width="120"
        height="120"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="44" cy="44" r="30" stroke="#B8472D" strokeWidth="8" />
        <line
          x1="66"
          y1="62"
          x2="82"
          y2="78"
          stroke="#B8472D"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>
    </div>,
    size,
  );
}
