"use client";

import React from "react";
import { motion } from "framer-motion";

const useThemeColors = (onDark: boolean) => ({
  stroke: onDark ? "#e8e6e1" : "#2a2a2e",
  accent: "#b8472d",
  muted: onDark ? "rgba(232,230,225,0.18)" : "rgba(42,42,46,0.08)",
});

/* ─────────────────────────────────────────────────────────────────────────
   01 — NIST SP 800-88 Rev. 2  (IllustrationNIST)
   A forensic scanner rig with three stacked media bays. An audit beam
   sweeps vertically across each bay. Once verified, a per-device
   Certificate of Data Destruction (CoDD) slides out below with a
   stamped wax-seal checkmark, serial-number lines, and a method tag.
───────────────────────────────────────────────────────────────────────────*/
export function IllustrationNIST({ onDark }: { onDark: boolean }) {
  const { stroke, accent, muted } = useThemeColors(onDark);
  const bays = [{ y: 52 }, { y: 100 }, { y: 148 }];

  return (
    <svg
      viewBox="0 0 400 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full max-w-sm"
    >
      <defs>
        <filter id="glow-nist" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Scanner rig frame */}
      <rect
        x="72"
        y="36"
        width="256"
        height="170"
        rx="8"
        stroke={stroke}
        strokeWidth="2.2"
        fill={muted}
      />
      {/* Top toolbar */}
      <rect x="72" y="36" width="256" height="24" rx="8" fill={stroke} fillOpacity="0.07" />
      <line x1="72" y1="60" x2="328" y2="60" stroke={stroke} strokeWidth="1" strokeOpacity="0.2" />
      <circle cx="88" cy="48" r="4" fill={stroke} fillOpacity="0.25" />
      <circle cx="100" cy="48" r="4" fill={stroke} fillOpacity="0.16" />
      <circle cx="112" cy="48" r="4" fill={stroke} fillOpacity="0.1" />

      {/* Three media bays */}
      {bays.map(({ y }, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.36, delay: i * 0.14 }}
          viewport={{ once: true }}
        >
          {/* Bay slot */}
          <rect
            x="88"
            y={y}
            width="224"
            height="36"
            rx="4"
            stroke={stroke}
            strokeWidth="1.5"
            fill={muted}
          />
          {/* Drive label chip */}
          <rect x="100" y={y + 10} width="52" height="14" rx="3" fill={stroke} fillOpacity="0.08" />
          <line
            x1="106"
            y1={y + 15}
            x2="142"
            y2={y + 15}
            stroke={stroke}
            strokeWidth="1.2"
            strokeOpacity="0.35"
          />
          <line
            x1="106"
            y1={y + 21}
            x2="130"
            y2={y + 21}
            stroke={stroke}
            strokeWidth="1"
            strokeOpacity="0.2"
          />
          {/* Serial number block */}
          <rect x="164" y={y + 10} width="36" height="14" rx="2" fill={stroke} fillOpacity="0.05" />
          <line
            x1="170"
            y1={y + 17}
            x2="194"
            y2={y + 17}
            stroke={stroke}
            strokeWidth="0.8"
            strokeOpacity="0.25"
            strokeDasharray="2 2"
          />
          {/* Connector pins */}
          <rect
            x="270"
            y={y + 8}
            width="7"
            height="18"
            rx="2"
            stroke={stroke}
            strokeWidth="1.2"
            fill={muted}
          />
          <rect
            x="281"
            y={y + 8}
            width="7"
            height="18"
            rx="2"
            stroke={stroke}
            strokeWidth="1.2"
            fill={muted}
          />
          {/* Status LED */}
          <motion.circle
            cx="216"
            cy={y + 18}
            r="3.5"
            fill={accent}
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.6 + i * 0.4, repeat: Infinity }}
          />
        </motion.g>
      ))}

      {/* Audit beam sweeping top→bottom inside rig */}
      <motion.rect
        x="88"
        y="48"
        width="224"
        height="8"
        fill={accent}
        fillOpacity="0.35"
        filter="url(#glow-nist)"
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: [48, 188, 188], opacity: [0, 1, 0] }}
        transition={{ duration: 1.6, delay: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      />

      {/* Post-scan hatching per bay */}
      {bays.map(({ y }, i) => (
        <motion.g
          key={`h-${i}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.8 + i * 0.08 }}
          viewport={{ once: true }}
        >
          {[0, 1, 2, 3, 4, 5, 6].map((j) => (
            <line
              key={j}
              x1={102 + j * 26}
              y1={y + 5}
              x2={98 + j * 26}
              y2={y + 29}
              stroke={accent}
              strokeWidth="0.8"
              strokeOpacity="0.2"
              strokeLinecap="round"
            />
          ))}
        </motion.g>
      ))}

      {/* Certificate of Data Destruction — slides up */}
      <motion.g
        initial={{ y: 18, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 140, damping: 16, delay: 2.1 }}
        viewport={{ once: true }}
      >
        <rect
          x="86"
          y="224"
          width="228"
          height="72"
          rx="7"
          stroke={accent}
          strokeWidth="1.8"
          fill={muted}
        />
        {/* Header line */}
        <line
          x1="106"
          y1="240"
          x2="258"
          y2="240"
          stroke={stroke}
          strokeWidth="1.5"
          strokeOpacity="0.45"
          strokeLinecap="round"
        />
        {/* Detail lines */}
        <line
          x1="106"
          y1="252"
          x2="220"
          y2="252"
          stroke={stroke}
          strokeWidth="1.2"
          strokeOpacity="0.22"
          strokeLinecap="round"
        />
        <line
          x1="106"
          y1="262"
          x2="240"
          y2="262"
          stroke={stroke}
          strokeWidth="1.2"
          strokeOpacity="0.22"
          strokeLinecap="round"
        />
        <line
          x1="106"
          y1="272"
          x2="200"
          y2="272"
          stroke={stroke}
          strokeWidth="1"
          strokeOpacity="0.15"
          strokeLinecap="round"
        />
        {/* Method tag */}
        <rect x="106" y="278" width="44" height="12" rx="3" fill={accent} fillOpacity="0.12" />
        <text
          x="128"
          y="287"
          textAnchor="middle"
          fontSize="6.5"
          fontFamily="monospace"
          fill={accent}
          opacity="0.8"
        >
          PURGE
        </text>
        {/* Wax seal */}
        <circle
          cx="280"
          cy="260"
          r="20"
          stroke={accent}
          strokeWidth="1.8"
          fill={accent}
          fillOpacity="0.07"
        />
        <circle cx="280" cy="260" r="14" stroke={accent} strokeWidth="1" strokeDasharray="3 2.5" />
        <motion.path
          d="M272 260l6 6 10-10"
          stroke={accent}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow-nist)"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.38, delay: 2.5 }}
          viewport={{ once: true }}
        />
      </motion.g>

      {/* NIST tag floats top-right */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 14, delay: 1.2 }}
        viewport={{ once: true }}
        className="svg-pivot-c"
      >
        <rect
          x="280"
          y="16"
          width="62"
          height="18"
          rx="4"
          stroke={accent}
          strokeWidth="1.4"
          fill={muted}
        />
        <text
          x="311"
          y="28"
          textAnchor="middle"
          fontSize="7"
          fontFamily="monospace"
          fill={accent}
          opacity="0.85"
        >
          800-88
        </text>
      </motion.g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   02 — Data Privacy DPA / GDPR  (IllustrationDPA)
   A large hexagonal security perimeter with three interconnected data
   nodes inside. Dashed connection lines carry animated data packets.
   A padlock snaps shut at the central junction. A legal-document badge
   with sub-processor tag anchors at the bottom. Shield pulse radiates
   outward continuously.
───────────────────────────────────────────────────────────────────────────*/
export function IllustrationDPA({ onDark }: { onDark: boolean }) {
  const { stroke, accent, muted } = useThemeColors(onDark);

  // Hexagonal perimeter points
  const hexR = 118;
  const hcx = 200,
    hcy = 150;
  const hexPts = [0, 1, 2, 3, 4, 5]
    .map((i) => {
      const a = (i * 60 - 90) * (Math.PI / 180);
      return `${+(hcx + hexR * Math.cos(a)).toFixed(1)},${+(hcy + hexR * Math.sin(a)).toFixed(1)}`;
    })
    .join(" ");

  // Triangle node positions
  const nodes = [
    { cx: 160, cy: 110 },
    { cx: 240, cy: 110 },
    { cx: 200, cy: 195 },
  ];

  return (
    <svg
      viewBox="0 0 400 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full max-w-sm"
    >
      <defs>
        <filter id="glow-dpa" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Hexagonal security perimeter */}
      <motion.polygon
        points={hexPts}
        stroke={stroke}
        strokeWidth="2"
        strokeOpacity="0.35"
        fill={muted}
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true }}
      />
      {/* Pulsing security ring */}
      <motion.polygon
        points={hexPts}
        stroke={accent}
        strokeWidth="1.5"
        fill="none"
        filter="url(#glow-dpa)"
        animate={{ opacity: [0, 0.45, 0], strokeWidth: [1.5, 2.5, 1.5] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Inner hexagon ring */}
      {(() => {
        const innerR = 90;
        const innerPts = [0, 1, 2, 3, 4, 5]
          .map((i) => {
            const a = (i * 60 - 90) * (Math.PI / 180);
            return `${+(hcx + innerR * Math.cos(a)).toFixed(1)},${+(hcy + innerR * Math.sin(a)).toFixed(1)}`;
          })
          .join(" ");
        return (
          <polygon
            points={innerPts}
            stroke={stroke}
            strokeWidth="1"
            strokeOpacity="0.12"
            strokeDasharray="4 6"
            fill="none"
          />
        );
      })()}

      {/* Connection lines between nodes */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
      >
        {[
          [nodes[0], nodes[1]],
          [nodes[1], nodes[2]],
          [nodes[2], nodes[0]],
        ].map(([from, to], i) => (
          <line
            key={i}
            x1={from.cx}
            y1={from.cy}
            x2={to.cx}
            y2={to.cy}
            stroke={stroke}
            strokeWidth="1.5"
            strokeOpacity="0.4"
            strokeDasharray="5 4"
          />
        ))}
      </motion.g>

      {/* Data nodes */}
      {nodes.map((n, i) => (
        <motion.g
          key={i}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.8 + i * 0.15 }}
          viewport={{ once: true }}
          className="svg-pivot-c"
        >
          <circle cx={n.cx} cy={n.cy} r="16" stroke={stroke} strokeWidth="1.8" fill={muted} />
          {/* Inner detail — data icon */}
          <rect
            x={n.cx - 6}
            y={n.cy - 7}
            width="12"
            height="14"
            rx="2"
            stroke={stroke}
            strokeWidth="1"
            strokeOpacity="0.4"
            fill="none"
          />
          <line
            x1={n.cx - 3}
            y1={n.cy - 2}
            x2={n.cx + 3}
            y2={n.cy - 2}
            stroke={stroke}
            strokeWidth="0.8"
            strokeOpacity="0.3"
          />
          <line
            x1={n.cx - 3}
            y1={n.cy + 2}
            x2={n.cx + 3}
            y2={n.cy + 2}
            stroke={stroke}
            strokeWidth="0.8"
            strokeOpacity="0.3"
          />
        </motion.g>
      ))}

      {/* Animated data packets flowing around triangle */}
      {[0, 1, 2].map((i) => {
        const from = nodes[i];
        const to = nodes[(i + 1) % 3];
        return (
          <motion.circle
            key={`pkt-${i}`}
            r="3.5"
            fill={accent}
            filter="url(#glow-dpa)"
            animate={{
              cx: [from.cx, to.cx],
              cy: [from.cy, to.cy],
            }}
            transition={{ duration: 2, delay: i * 0.7, repeat: Infinity, ease: "linear" }}
          />
        );
      })}

      {/* Central padlock snaps shut */}
      <motion.g
        initial={{ y: -14, scale: 0, opacity: 0 }}
        whileInView={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 280, damping: 14, delay: 1.6 }}
        viewport={{ once: true }}
        className="svg-pivot-c"
      >
        <rect
          x="186"
          y="134"
          width="28"
          height="22"
          rx="4"
          fill={muted}
          stroke={accent}
          strokeWidth="2"
        />
        <path
          d="M192 134v-6a8 8 0 0 1 16 0v6"
          stroke={accent}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="200" cy="145" r="3" fill={accent} filter="url(#glow-dpa)" />
        <line
          x1="200"
          y1="148"
          x2="200"
          y2="152"
          stroke={accent}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </motion.g>

      {/* Legal sub-processor badge */}
      <motion.g
        initial={{ y: 12, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 140, damping: 16, delay: 2.0 }}
        viewport={{ once: true }}
      >
        <rect
          x="140"
          y="272"
          width="120"
          height="30"
          rx="6"
          stroke={accent}
          strokeWidth="1.5"
          fill={muted}
        />
        <line
          x1="155"
          y1="284"
          x2="220"
          y2="284"
          stroke={stroke}
          strokeWidth="1.4"
          strokeOpacity="0.4"
          strokeLinecap="round"
        />
        <line
          x1="155"
          y1="293"
          x2="200"
          y2="293"
          stroke={stroke}
          strokeWidth="1"
          strokeOpacity="0.2"
          strokeLinecap="round"
        />
        <circle
          cx="238"
          cy="287"
          r="8"
          stroke={accent}
          strokeWidth="1.2"
          fill={accent}
          fillOpacity="0.1"
        />
        <motion.path
          d="M234 287l3 3 6-6"
          stroke={accent}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.3, delay: 2.3 }}
          viewport={{ once: true }}
        />
      </motion.g>

      {/* DPA tag top-left */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.28, delay: 1.8 }}
        viewport={{ once: true }}
      >
        <rect
          x="58"
          y="20"
          width="60"
          height="18"
          rx="4"
          stroke={accent}
          strokeWidth="1.2"
          fill={muted}
        />
        <text
          x="88"
          y="32"
          textAnchor="middle"
          fontSize="7"
          fontFamily="monospace"
          fill={accent}
          opacity="0.85"
        >
          DPA 2019
        </text>
      </motion.g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   03 — ESG Reporting GRI 306 / ISO 14064  (IllustrationISO)
   A report document with header and text placeholders. Inside the doc:
   four ascending bar columns and a descending trend line (Scope 3
   reduction). A floating symmetric leaf with stem bobbles to the right.
   A GRI 306 tag sits below the leaf, and an ISO 14064 stamp badge is
   inset at the document's bottom-right corner.
───────────────────────────────────────────────────────────────────────────*/
export function IllustrationISO({ onDark }: { onDark: boolean }) {
  const { stroke, accent, muted } = useThemeColors(onDark);
  const bars = [
    { x: 104, h: 42, delay: 0.5 },
    { x: 130, h: 56, delay: 0.62 },
    { x: 156, h: 38, delay: 0.74 },
    { x: 182, h: 68, delay: 0.86 },
  ];

  return (
    <svg
      viewBox="0 0 400 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full max-w-sm"
    >
      <defs>
        <filter id="glow-iso" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Report document */}
      <rect
        x="72"
        y="28"
        width="192"
        height="264"
        rx="7"
        stroke={stroke}
        strokeWidth="2.2"
        fill={muted}
      />
      {/* Document header bar */}
      <rect x="72" y="28" width="192" height="30" rx="7" fill={stroke} fillOpacity="0.07" />
      <line x1="72" y1="58" x2="264" y2="58" stroke={stroke} strokeWidth="1" strokeOpacity="0.2" />
      <rect x="88" y="38" width="76" height="8" rx="3" fill={stroke} fillOpacity="0.2" />

      {/* Text lines */}
      {[0, 1, 2].map((i) => (
        <motion.rect
          key={i}
          x="88"
          y={72 + i * 16}
          width={80 + (i % 2) * 28}
          height="6"
          rx="3"
          fill={stroke}
          opacity={0.18 - i * 0.03}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.18 - i * 0.03 }}
          transition={{ duration: 0.32, delay: 0.1 + i * 0.1 }}
          viewport={{ once: true }}
          className="svg-pivot-l"
        />
      ))}

      {/* Chart baseline */}
      <line
        x1="98"
        y1="230"
        x2="212"
        y2="230"
        stroke={stroke}
        strokeWidth="1.4"
        strokeOpacity="0.35"
      />
      <line x1="98" y1="230" x2="98" y2="158" stroke={stroke} strokeWidth="1" strokeOpacity="0.2" />

      {/* Bar columns — waste diversion tonnage */}
      {bars.map(({ x, h, delay }, i) => (
        <motion.rect
          key={i}
          x={x}
          y={230 - h}
          width="20"
          height={h}
          rx="3"
          fill={accent}
          opacity={0.4 + i * 0.14}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          className="svg-pivot-b"
          transition={{ duration: 0.44, delay }}
          viewport={{ once: true }}
        />
      ))}

      {/* Downward trend line — Scope 3 emissions */}
      <motion.path
        d="M 106 178 L 132 170 L 158 184 L 186 162"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.5"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.0, ease: "easeInOut" }}
        viewport={{ once: true }}
      />
      {/* Trend line dots */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.8 }}
        viewport={{ once: true }}
      >
        {[
          { cx: 106, cy: 178 },
          { cx: 132, cy: 170 },
          { cx: 158, cy: 184 },
          { cx: 186, cy: 162 },
        ].map((pt, i) => (
          <circle key={i} cx={pt.cx} cy={pt.cy} r="3" fill={stroke} fillOpacity={0.5 + i * 0.1} />
        ))}
      </motion.g>

      {/* ISO stamp inside document bottom-right */}
      <motion.g
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 14, delay: 1.1 }}
        viewport={{ once: true }}
        className="svg-pivot-c"
      >
        <circle
          cx="234"
          cy="258"
          r="20"
          stroke={accent}
          strokeWidth="1.8"
          fill={accent}
          fillOpacity="0.07"
        />
        <circle cx="234" cy="258" r="14" stroke={accent} strokeWidth="1" strokeDasharray="3 2.5" />
        <motion.path
          d="M226 258l6 6 10-10"
          stroke={accent}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow-iso)"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.36, delay: 1.4 }}
          viewport={{ once: true }}
        />
      </motion.g>

      {/* Floating leaf — right of document */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 160, damping: 14, delay: 0.9 }}
        viewport={{ once: true }}
        className="svg-pivot-c"
      >
        <motion.g
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Left lobe */}
          <path
            d="M312 116 C296 96 272 108 274 140 C274 140 296 148 312 116z"
            stroke={accent}
            strokeWidth="1.8"
            fill={accent}
            fillOpacity="0.13"
          />
          {/* Right lobe */}
          <path
            d="M312 116 C328 96 352 108 350 140 C350 140 328 148 312 116z"
            stroke={accent}
            strokeWidth="1.8"
            fill={accent}
            fillOpacity="0.13"
          />
          {/* Centre vein */}
          <line
            x1="312"
            y1="116"
            x2="312"
            y2="148"
            stroke={accent}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeOpacity="0.55"
          />
          {/* Side veins */}
          <line
            x1="312"
            y1="126"
            x2="300"
            y2="132"
            stroke={accent}
            strokeWidth="0.8"
            strokeOpacity="0.35"
            strokeLinecap="round"
          />
          <line
            x1="312"
            y1="126"
            x2="324"
            y2="132"
            stroke={accent}
            strokeWidth="0.8"
            strokeOpacity="0.35"
            strokeLinecap="round"
          />
          {/* Stem */}
          <path
            d="M312 148 Q310 166 308 178"
            stroke={accent}
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            strokeOpacity="0.45"
          />
        </motion.g>
      </motion.g>

      {/* GRI 306 tag */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.28, delay: 1.5 }}
        viewport={{ once: true }}
      >
        <rect
          x="284"
          y="182"
          width="56"
          height="18"
          rx="4"
          stroke={accent}
          strokeWidth="1.2"
          fill={muted}
        />
        <text
          x="312"
          y="194"
          textAnchor="middle"
          fontSize="7.5"
          fontFamily="monospace"
          fill={accent}
          opacity="0.85"
        >
          GRI 306
        </text>
      </motion.g>

      {/* ISO 14064 tag below GRI */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.28, delay: 1.7 }}
        viewport={{ once: true }}
      >
        <rect
          x="280"
          y="208"
          width="64"
          height="18"
          rx="4"
          stroke={stroke}
          strokeWidth="1.2"
          fill={muted}
        />
        <text
          x="312"
          y="220"
          textAnchor="middle"
          fontSize="7"
          fontFamily="monospace"
          fill={stroke}
          opacity="0.55"
        >
          ISO 14064
        </text>
      </motion.g>
    </svg>
  );
}
