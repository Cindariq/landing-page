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
   A sanitisation decision tree. A single storage device icon at top
   branches into three outcome columns: CLEAR (dashed path, low weight),
   PURGE (solid accent path, medium weight), DESTROY (bold path, high
   weight). Each column has an outcome badge. A per-device Certificate of
   Data Destruction slides up at the bottom with a wax seal and method tag.
───────────────────────────────────────────────────────────────────────────*/
export function IllustrationNIST({ onDark }: { onDark: boolean }) {
  const { stroke, accent, muted } = useThemeColors(onDark);

  const outcomes = [
    { x: 84, label: "CLEAR", dash: "6 4", sw: 1.5, accentCol: false, delay: 0.55 },
    { x: 200, label: "PURGE", dash: "", sw: 2.0, accentCol: true, delay: 0.7 },
    { x: 316, label: "DESTROY", dash: "", sw: 2.5, accentCol: false, delay: 0.85 },
  ] as const;

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

      {/* Central device icon — single storage media at top */}
      <motion.g
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <rect
          x="168"
          y="18"
          width="64"
          height="44"
          rx="5"
          stroke={stroke}
          strokeWidth="2"
          fill={muted}
        />
        <line
          x1="180"
          y1="34"
          x2="220"
          y2="34"
          stroke={stroke}
          strokeWidth="1.2"
          strokeOpacity="0.35"
        />
        <line
          x1="180"
          y1="42"
          x2="212"
          y2="42"
          stroke={stroke}
          strokeWidth="1"
          strokeOpacity="0.22"
        />
        <rect
          x="214"
          y="52"
          width="8"
          height="4"
          rx="1"
          stroke={stroke}
          strokeWidth="1"
          fill={muted}
        />
        <motion.circle
          cx="228"
          cy="56"
          r="3"
          fill={accent}
          animate={{ opacity: [1, 0.25, 1] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
      </motion.g>

      {/* Vertical stem from device bottom */}
      <motion.line
        x1="200"
        y1="62"
        x2="200"
        y2="92"
        stroke={stroke}
        strokeWidth="1.5"
        strokeOpacity="0.4"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        viewport={{ once: true }}
      />

      {/* Horizontal distribution bar */}
      <motion.line
        x1="84"
        y1="92"
        x2="316"
        y2="92"
        stroke={stroke}
        strokeWidth="1.5"
        strokeOpacity="0.3"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.42 }}
        viewport={{ once: true }}
      />

      {/* Three branch drops */}
      {outcomes.map(({ x, dash, sw, delay }) => (
        <motion.line
          key={x}
          x1={x}
          y1="92"
          x2={x}
          y2="136"
          stroke={stroke}
          strokeWidth={sw}
          strokeOpacity="0.35"
          strokeDasharray={dash || undefined}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.3, delay }}
          viewport={{ once: true }}
        />
      ))}

      {/* Three outcome boxes */}
      {outcomes.map(({ x, label, accentCol, delay }, i) => (
        <motion.g
          key={label}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 180, damping: 15, delay: delay + 0.15 }}
          viewport={{ once: true }}
        >
          <rect
            x={x - 38}
            y="136"
            width="76"
            height="46"
            rx="5"
            stroke={accentCol ? accent : stroke}
            strokeWidth={accentCol ? 2 : 1.5}
            fill={accentCol ? `${accent}12` : muted}
          />
          <text
            x={x}
            y="166"
            textAnchor="middle"
            fontSize="8.5"
            fontFamily="monospace"
            fill={accentCol ? accent : stroke}
            opacity={accentCol ? 0.9 : 0.55}
            fontWeight="600"
          >
            {label}
          </text>
          {/* Severity indicator dots */}
          {Array.from({ length: i + 1 }).map((_, d) => (
            <circle
              key={d}
              cx={x - i * 5 + d * 10}
              cy="150"
              r="2.5"
              fill={accentCol ? accent : stroke}
              fillOpacity={accentCol ? 0.7 : 0.3}
            />
          ))}
        </motion.g>
      ))}

      {/* Connector lines from each box bottom to certificate */}
      {outcomes.map(({ x, delay }) => (
        <motion.line
          key={`conn-${x}`}
          x1={x}
          y1="182"
          x2={x}
          y2="208"
          stroke={stroke}
          strokeWidth="1"
          strokeOpacity="0.18"
          strokeDasharray="3 3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.28, delay: delay + 0.5 }}
          viewport={{ once: true }}
        />
      ))}
      <motion.line
        x1="84"
        y1="208"
        x2="316"
        y2="208"
        stroke={stroke}
        strokeWidth="1"
        strokeOpacity="0.15"
        strokeDasharray="3 3"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: 1.45 }}
        viewport={{ once: true }}
      />
      <motion.line
        x1="200"
        y1="208"
        x2="200"
        y2="224"
        stroke={stroke}
        strokeWidth="1"
        strokeOpacity="0.18"
        strokeDasharray="3 3"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.22, delay: 1.6 }}
        viewport={{ once: true }}
      />

      {/* Certificate of Data Destruction — slides up */}
      <motion.g
        initial={{ y: 16, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 140, damping: 16, delay: 1.75 }}
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
        <line
          x1="106"
          y1="252"
          x2="222"
          y2="252"
          stroke={stroke}
          strokeWidth="1.2"
          strokeOpacity="0.22"
          strokeLinecap="round"
        />
        <line
          x1="106"
          y1="262"
          x2="238"
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
          transition={{ duration: 0.38, delay: 2.2 }}
          viewport={{ once: true }}
        />
      </motion.g>

      {/* NIST 800-88 tag top-right */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.9 }}
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

      {/* Animation hint */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 2.2 }}
        viewport={{ once: true }}
      >
        <text
          x="200"
          y="310"
          textAnchor="middle"
          fontSize="5.5"
          fontFamily="monospace"
          fill={stroke}
          opacity="0.3"
          letterSpacing="0.08em"
        >
          ⟳ CONTINUOUS LOOP
        </text>
      </motion.g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   02 — Data Privacy DPA / GDPR  (IllustrationDPA)
   Chain of Custody: Lock & Key Handoff. Horizontal timeline showing three
   custody stages: Your Company (locked) → Transit (key handoff animated) →
   Cindariq (locked with sub-processor). Keys animate between nodes to show
   secure data passage and responsibility transfer. A DPA badge anchors at
   top-left and compliance checkmarks appear as data custody is verified.
───────────────────────────────────────────────────────────────────────────*/
export function IllustrationDPA({ onDark }: { onDark: boolean }) {
  const { stroke, accent, muted } = useThemeColors(onDark);

  // Custody stages: x position, label, isTarget
  const stages = [
    { x: 84, label: "YOUR DATA", isTarget: false, delay: 0.1 },
    { x: 200, label: "IN TRANSIT", isTarget: false, delay: 0.35 },
    { x: 316, label: "CINDARIQ", isTarget: true, delay: 0.6 },
  ] as const;

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

      {/* Horizontal timeline baseline */}
      <motion.line
        x1="84"
        y1="160"
        x2="316"
        y2="160"
        stroke={stroke}
        strokeWidth="2"
        strokeOpacity="0.42"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true }}
      />

      {/* Three custody nodes with locks */}
      {stages.map(({ x, label, isTarget, delay }) => (
        <motion.g
          key={label}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 16, delay }}
          viewport={{ once: true }}
        >
          {/* Node circle */}
          <circle cx={x} cy="160" r="28" stroke={stroke} strokeWidth="1.8" fill={muted} />

          {/* Padlock icon inside node */}
          <g>
            {/* Lock body */}
            <rect
              x={x - 9}
              y="160"
              width="18"
              height="14"
              rx="2"
              stroke={isTarget ? accent : stroke}
              strokeWidth="1.8"
              fill="none"
            />
            {/* Lock shackle */}
            <path
              d={`M${x - 6} 160 Q${x - 6} 152 ${x} 152 Q${x + 6} 152 ${x + 6} 160`}
              stroke={isTarget ? accent : stroke}
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
            />
            {/* Lock keyhole */}
            <circle
              cx={x}
              cy="166"
              r="2"
              fill={isTarget ? accent : stroke}
              opacity={isTarget ? 0.8 : 0.45}
            />
          </g>

          {/* Stage label below node */}
          <text
            x={x}
            y="198"
            textAnchor="middle"
            fontSize="6.5"
            fontFamily="monospace"
            fill={stroke}
            opacity="0.45"
            letterSpacing="0.05em"
          >
            {label}
          </text>

          {/* Pulsing ring on all nodes */}
          <motion.circle
            cx={x}
            cy="160"
            r="28"
            stroke={isTarget ? accent : stroke}
            strokeWidth={isTarget ? 1.4 : 0.9}
            fill="none"
            animate={{ opacity: isTarget ? [0, 0.5, 0] : [0, 0.25, 0], r: [28, 36, 28] }}
            transition={{
              duration: isTarget ? 2.6 : 3.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay * 0.5,
            }}
          />
        </motion.g>
      ))}

      {/* Animated key handoffs between nodes */}
      {/* Key 1: Your Data → In Transit */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.g
          animate={{ x: [0, 58, 116], y: [0, -12, 0] }}
          transition={{ duration: 1.8, delay: 0.7, repeat: Infinity, repeatDelay: 1 }}
        >
          {/* Key shaft */}
          <line
            x1="84"
            y1="160"
            x2="104"
            y2="160"
            stroke={accent}
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#glow-dpa)"
          />
          {/* Key head */}
          <circle
            cx="110"
            cy="160"
            r="4.5"
            stroke={accent}
            strokeWidth="1.5"
            fill={accent}
            fillOpacity="0.4"
          />
          {/* Key teeth */}
          {[0, 1, 2].map((t) => (
            <rect
              key={t}
              x={112 + t * 4}
              y="158"
              width="2.5"
              height="4"
              fill={accent}
              fillOpacity="0.6"
            />
          ))}
        </motion.g>
      </motion.g>

      {/* Key 2: In Transit → Cindariq */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.75 }}
        viewport={{ once: true }}
      >
        <motion.g
          animate={{ x: [0, 58, 116], y: [0, -12, 0] }}
          transition={{ duration: 1.8, delay: 1.2, repeat: Infinity, repeatDelay: 1 }}
        >
          {/* Key shaft */}
          <line
            x1="200"
            y1="160"
            x2="220"
            y2="160"
            stroke={accent}
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#glow-dpa)"
          />
          {/* Key head */}
          <circle
            cx="226"
            cy="160"
            r="4.5"
            stroke={accent}
            strokeWidth="1.5"
            fill={accent}
            fillOpacity="0.4"
          />
          {/* Key teeth */}
          {[0, 1, 2].map((t) => (
            <rect
              key={t}
              x={228 + t * 4}
              y="158"
              width="2.5"
              height="4"
              fill={accent}
              fillOpacity="0.6"
            />
          ))}
        </motion.g>
      </motion.g>

      {/* Compliance checkmarks appear at each stage */}
      {stages.map(({ x, delay }) => (
        <motion.g
          key={`check-${x}`}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 14, delay: delay + 0.5 }}
          viewport={{ once: true }}
          className="svg-pivot-c"
        >
          <circle
            cx={x + 22}
            cy="128"
            r="10"
            stroke={accent}
            strokeWidth="1.2"
            fill={accent}
            fillOpacity="0.08"
          />
          <motion.path
            d={`M${x + 18} ${128}l3 3 6-6`}
            stroke={accent}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 0.3, delay: delay + 0.8 }}
            viewport={{ once: true }}
          />
        </motion.g>
      ))}

      {/* Sub-processor badge on Cindariq node */}
      <motion.g
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 140, damping: 14, delay: 1.1 }}
        viewport={{ once: true }}
      >
        <rect
          x="266"
          y="216"
          width="68"
          height="20"
          rx="5"
          stroke={accent}
          strokeWidth="1.4"
          fill={muted}
        />
        <text
          x="300"
          y="228"
          textAnchor="middle"
          fontSize="6.5"
          fontFamily="monospace"
          fill={accent}
          opacity="0.8"
          fontWeight="600"
        >
          SUB-PROCESSOR
        </text>
      </motion.g>

      {/* Data Protection Act badge */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.2 }}
        viewport={{ once: true }}
        className="svg-pivot-c"
      >
        <rect
          x="32"
          y="16"
          width="68"
          height="18"
          rx="4"
          stroke={accent}
          strokeWidth="1.2"
          fill={muted}
        />
        <text
          x="66"
          y="28"
          textAnchor="middle"
          fontSize="7"
          fontFamily="monospace"
          fill={accent}
          opacity="0.85"
        >
          DPA 2019
        </text>
      </motion.g>

      {/* Chain of Custody badge */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.35 }}
        viewport={{ once: true }}
        className="svg-pivot-c"
      >
        <rect
          x="300"
          y="16"
          width="68"
          height="18"
          rx="4"
          stroke={stroke}
          strokeWidth="1.2"
          fill={muted}
        />
        <text
          x="334"
          y="28"
          textAnchor="middle"
          fontSize="6.5"
          fontFamily="monospace"
          fill={stroke}
          opacity="0.5"
        >
          CHAIN OF CUSTODY
        </text>
      </motion.g>

      {/* Animation hint */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 2.2 }}
        viewport={{ once: true }}
      >
        <text
          x="200"
          y="310"
          textAnchor="middle"
          fontSize="5.5"
          fontFamily="monospace"
          fill={stroke}
          opacity="0.3"
          letterSpacing="0.08em"
        >
          ⟳ CONTINUOUS LOOP
        </text>
      </motion.g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   03 — ESG Reporting GRI 306 / ISO 14064  (IllustrationISO)
   Scope 3 emissions accounting cascade. Three source nodes (hardware
   manufacture, secure transport, end-of-life processing) each carry a
   CO₂ value chip. Animated flow lines funnel into a central summing node
   labelled "Scope 3 Total". An avoided-emissions credit badge slides up
   below it. GRI 306 and ISO 14064 standard tags anchor at top-right.
───────────────────────────────────────────────────────────────────────────*/
export function IllustrationISO({ onDark }: { onDark: boolean }) {
  const { stroke, accent, muted } = useThemeColors(onDark);

  // Source nodes: x, y, label, co2 value, animation delay
  const sources = [
    { cx: 64, cy: 80, label: "HARDWARE", co2: "1.4 t", delay: 0.2 },
    { cx: 200, cy: 56, label: "TRANSPORT", co2: "0.3 t", delay: 0.35 },
    { cx: 336, cy: 80, label: "END-OF-LIFE", co2: "0.8 t", delay: 0.5 },
  ] as const;

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
      {/* Source nodes */}
      {sources.map(({ cx, cy, label, co2, delay }, i) => (
        <motion.g
          key={label}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 16, delay }}
          viewport={{ once: true }}
        >
          {/* Node circle */}
          <circle cx={cx} cy={cy} r="28" stroke={stroke} strokeWidth="1.8" fill={muted} />
          {/* CO₂ chip inside node */}
          <rect
            x={cx - 18}
            y={cy - 9}
            width="36"
            height="14"
            rx="4"
            fill={accent}
            fillOpacity="0.12"
            stroke={accent}
            strokeWidth="1"
          />
          <text
            x={cx}
            y={cy + 2}
            textAnchor="middle"
            fontSize="7.5"
            fontFamily="monospace"
            fill={accent}
            fontWeight="600"
            opacity="0.9"
          >
            {co2}
          </text>
          {/* Label beneath node */}
          <text
            x={cx}
            y={cy + 44}
            textAnchor="middle"
            fontSize="6"
            fontFamily="monospace"
            fill={stroke}
            opacity="0.45"
            letterSpacing="0.06em"
          >
            {label}
          </text>
          {/* Pulsing ring */}
          <motion.circle
            cx={cx}
            cy={cy}
            r="28"
            stroke={accent}
            strokeWidth="1.2"
            fill="none"
            animate={{ opacity: [0, 0.35, 0], r: [28, 36, 28] }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        </motion.g>
      ))}
      {/* Flow lines from each source to summing node (cx=200, cy=178) */}
      {sources.map(({ cx, cy, delay }) => (
        <motion.line
          key={`flow-${cx}`}
          x1={cx}
          y1={cy + 28}
          x2={200}
          y2={178 - 30}
          stroke={accent}
          strokeWidth="1.5"
          strokeOpacity="0.35"
          strokeDasharray="5 4"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.55, delay: delay + 0.4, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
      ))}
      {/* Animated CO₂ packets flowing down each line */}
      {sources.map(({ cx, cy, delay }, i) => {
        const startX = cx;
        const startY = cy + 28;
        const endX = 200;
        const endY = 148;
        return (
          <motion.g
            key={`pkt-${i}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: delay + 0.8 }}
            viewport={{ once: true }}
          >
            <motion.circle
              cx={startX}
              cy={startY}
              r="4"
              fill={accent}
              filter="url(#glow-iso)"
              animate={{
                cx: [startX, endX],
                cy: [startY, endY],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 1.2,
                delay: delay + 0.8,
                repeat: Infinity,
                repeatDelay: 2.4 + i * 0.3,
                ease: "easeIn",
              }}
            />
          </motion.g>
        );
      })}
      {/* Summing node — Scope 3 Total */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 160, damping: 14, delay: 1.1 }}
        viewport={{ once: true }}
        className="svg-pivot-c"
      >
        <circle cx="200" cy="178" r="36" stroke={accent} strokeWidth="2.2" fill={muted} />
        <circle
          cx="200"
          cy="178"
          r="28"
          stroke={accent}
          strokeWidth="1"
          strokeDasharray="3 3"
          fill="none"
          strokeOpacity="0.4"
        />
        {/* Σ symbol */}
        <text
          x="200"
          y="172"
          textAnchor="middle"
          fontSize="18"
          fontFamily="serif"
          fill={stroke}
          opacity="0.55"
        >
          Σ
        </text>
        <text
          x="200"
          y="186"
          textAnchor="middle"
          fontSize="6"
          fontFamily="monospace"
          fill={accent}
          opacity="0.75"
          letterSpacing="0.05em"
        >
          SCOPE 3
        </text>
      </motion.g>
      {/* Total value chip below summing node */}
      <motion.g
        initial={{ y: 12, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 140, damping: 14, delay: 1.6 }}
        viewport={{ once: true }}
      >
        <rect
          x="152"
          y="226"
          width="96"
          height="26"
          rx="6"
          stroke={accent}
          strokeWidth="1.6"
          fill={muted}
        />
        <text
          x="200"
          y="243"
          textAnchor="middle"
          fontSize="9"
          fontFamily="monospace"
          fill={accent}
          fontWeight="600"
          opacity="0.9"
        >
          2.5 t CO₂e
        </text>
      </motion.g>
      {/* Avoided emissions credit badge */}
      <motion.g
        initial={{ y: 12, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 130, damping: 14, delay: 1.9 }}
        viewport={{ once: true }}
      >
        <rect
          x="112"
          y="264"
          width="176"
          height="24"
          rx="5"
          stroke={stroke}
          strokeWidth="1.2"
          fill={muted}
          strokeOpacity="0.25"
        />
        <text
          x="200"
          y="280"
          textAnchor="middle"
          fontSize="7.5"
          fontFamily="monospace"
          fill={stroke}
          opacity="0.45"
        >
          −0.9 t avoided via refurb
        </text>
      </motion.g>
      {/* GRI 306 tag */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.7 }}
        viewport={{ once: true }}
        className="svg-pivot-c"
      >
        <rect
          x="336"
          y="16"
          width="56"
          height="18"
          rx="4"
          stroke={accent}
          strokeWidth="1.2"
          fill={muted}
        />
        <text
          x="364"
          y="28"
          textAnchor="middle"
          fontSize="7.5"
          fontFamily="monospace"
          fill={accent}
          opacity="0.85"
        >
          GRI 306
        </text>
      </motion.g>
      {/* ISO 14064 tag */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.85 }}
        viewport={{ once: true }}
        className="svg-pivot-c"
      >
        <rect
          x="332"
          y="40"
          width="64"
          height="18"
          rx="4"
          stroke={stroke}
          strokeWidth="1.2"
          fill={muted}
        />
        <text
          x="364"
          y="52"
          textAnchor="middle"
          fontSize="7"
          fontFamily="monospace"
          fill={stroke}
          opacity="0.5"
        >
          ISO 14064
        </text>
      </motion.g>
      {/* Animation hint */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 2.4 }}
        viewport={{ once: true }}
      >
        <text
          x="200"
          y="310"
          textAnchor="middle"
          fontSize="5.5"
          fontFamily="monospace"
          fill={stroke}
          opacity="0.3"
          letterSpacing="0.08em"
        >
          ⟳ CONTINUOUS LOOP
        </text>
      </motion.g>{" "}
    </svg>
  );
}
