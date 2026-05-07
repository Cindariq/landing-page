"use client";

import React from "react";
import { motion } from "framer-motion";

const useThemeColors = (onDark: boolean) => ({
  stroke: onDark ? "#e8e6e1" : "#2a2a2e",
  accent: "#b8472d",
  muted: onDark ? "rgba(232,230,225,0.18)" : "rgba(42,42,46,0.08)",
});

/* ─────────────────────────────────────────────────────────────────────────
   01 — Data Destruction  (IllustrationDataDestruction)
   Three stacked storage media slabs. A wipe beam sweeps across them left→right.
   A certificate document badge with a stamped checkmark pops up below.
───────────────────────────────────────────────────────────────────────────*/

export function IllustrationDataDestruction({ onDark }: { onDark: boolean }) {
  const { stroke, accent, muted } = useThemeColors(onDark);
  const slabs = [{ y: 60 }, { y: 112 }, { y: 164 }];

  return (
    <svg
      viewBox="0 0 400 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full max-w-sm"
    >
      <defs>
        <filter id="glow-dd" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Three stacked storage-media slabs */}
      {slabs.map(({ y }, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, x: -14 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.38, delay: i * 0.12 }}
          viewport={{ once: true }}
        >
          <rect
            x="90"
            y={y}
            width="220"
            height="38"
            rx="5"
            stroke={stroke}
            strokeWidth="2"
            fill={muted}
          />
          {/* connector ports */}
          <rect
            x="273"
            y={y + 10}
            width="8"
            height="18"
            rx="2"
            stroke={stroke}
            strokeWidth="1.2"
            fill={muted}
          />
          <rect
            x="285"
            y={y + 10}
            width="8"
            height="18"
            rx="2"
            stroke={stroke}
            strokeWidth="1.2"
            fill={muted}
          />
          {/* label chip */}
          <rect x="104" y={y + 11} width="56" height="16" rx="3" fill={stroke} fillOpacity="0.08" />
          <line
            x1="110"
            y1={y + 17}
            x2="150"
            y2={y + 17}
            stroke={stroke}
            strokeWidth="1.2"
            strokeOpacity="0.35"
          />
          <line
            x1="110"
            y1={y + 23}
            x2="136"
            y2={y + 23}
            stroke={stroke}
            strokeWidth="1"
            strokeOpacity="0.2"
          />
          {/* LED */}
          <motion.circle
            cx="178"
            cy={y + 19}
            r="3.5"
            fill={accent}
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.6 + i * 0.4, repeat: Infinity }}
          />
        </motion.g>
      ))}

      {/* Wipe beam sweeping left → right */}
      <motion.rect
        x="90"
        y="56"
        width="10"
        height="150"
        fill={accent}
        fillOpacity="0.4"
        filter="url(#glow-dd)"
        initial={{ x: 88, opacity: 0 }}
        whileInView={{ x: [88, 302, 302], opacity: [0, 1, 0] }}
        transition={{ duration: 1.4, delay: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      />

      {/* Post-wipe hatching (erased data) */}
      {slabs.map(({ y }, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.65 + i * 0.08 }}
          viewport={{ once: true }}
        >
          {[0, 1, 2, 3, 4, 5].map((j) => (
            <line
              key={j}
              x1={106 + j * 28}
              y1={y + 6}
              x2={102 + j * 28}
              y2={y + 30}
              stroke={accent}
              strokeWidth="1"
              strokeOpacity="0.22"
              strokeLinecap="round"
            />
          ))}
        </motion.g>
      ))}

      {/* Certificate badge pops up */}
      <motion.g
        initial={{ y: 16, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 160, damping: 18, delay: 1.85 }}
        viewport={{ once: true }}
      >
        <rect
          x="98"
          y="230"
          width="204"
          height="60"
          rx="7"
          stroke={accent}
          strokeWidth="1.8"
          fill={muted}
        />
        <line
          x1="118"
          y1="246"
          x2="246"
          y2="246"
          stroke={stroke}
          strokeWidth="1.5"
          strokeOpacity="0.45"
          strokeLinecap="round"
        />
        <line
          x1="118"
          y1="257"
          x2="220"
          y2="257"
          stroke={stroke}
          strokeWidth="1.2"
          strokeOpacity="0.25"
          strokeLinecap="round"
        />
        <line
          x1="118"
          y1="267"
          x2="232"
          y2="267"
          stroke={stroke}
          strokeWidth="1.2"
          strokeOpacity="0.25"
          strokeLinecap="round"
        />
        {/* wax seal */}
        <circle
          cx="270"
          cy="255"
          r="18"
          stroke={accent}
          strokeWidth="1.8"
          fill={accent}
          fillOpacity="0.07"
        />
        <circle cx="270" cy="255" r="13" stroke={accent} strokeWidth="1" strokeDasharray="3 2.5" />
        <motion.path
          d="M262 255l6 6 10-10"
          stroke={accent}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow-dd)"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.38, delay: 2.1 }}
          viewport={{ once: true }}
        />
      </motion.g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   02 — Secure Logistics  (IllustrationSecureLogistics)
   Top-down GPS route map. Three waypoint pins connected by a dashed path.
   Origin = sealed cargo crate. Destination = floating GPS pin with signal
   rings. Signed manifest tag anchors at the destination.
───────────────────────────────────────────────────────────────────────────*/
export function IllustrationSecureLogistics({ onDark }: { onDark: boolean }) {
  const { stroke, accent, muted } = useThemeColors(onDark);

  return (
    <svg
      viewBox="0 0 400 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full max-w-sm"
    >
      <defs>
        <filter id="glow-sl" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Road shadow */}
      <path
        d="M76 224 Q156 202 198 162 Q240 122 322 102"
        stroke={stroke}
        strokeWidth="14"
        strokeOpacity="0.06"
        strokeLinecap="round"
        fill="none"
      />

      {/* Animated GPS route */}
      <motion.path
        d="M76 224 Q156 202 198 162 Q240 122 322 102"
        stroke={accent}
        strokeWidth="2"
        strokeDasharray="7 5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
        viewport={{ once: true }}
      />

      {/* Waypoint A — origin crate */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.2 }}
        viewport={{ once: true }}
        className="svg-pivot-c"
      >
        <rect
          x="48"
          y="192"
          width="56"
          height="50"
          rx="5"
          stroke={stroke}
          strokeWidth="2"
          fill={muted}
        />
        <line
          x1="76"
          y1="192"
          x2="76"
          y2="242"
          stroke={stroke}
          strokeWidth="1.2"
          strokeOpacity="0.3"
        />
        <line
          x1="48"
          y1="217"
          x2="104"
          y2="217"
          stroke={stroke}
          strokeWidth="1.2"
          strokeOpacity="0.3"
        />
        {/* tamper seal */}
        <line
          x1="61"
          y1="201"
          x2="91"
          y2="233"
          stroke={accent}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="91"
          y1="201"
          x2="61"
          y2="233"
          stroke={accent}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle
          cx="76"
          cy="217"
          r="5"
          fill={accent}
          fillOpacity="0.18"
          stroke={accent}
          strokeWidth="1.2"
        />
      </motion.g>

      {/* Waypoint B — mid transit pin */}
      <motion.g
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.g
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M198 178 C198 178 198 162 208 157 A14 14 0 1 0 188 157 C198 162 198 178 198 178z"
            stroke={stroke}
            strokeWidth="1.8"
            fill={muted}
          />
          <circle cx="198" cy="157" r="5" fill={stroke} fillOpacity="0.5" />
        </motion.g>
      </motion.g>

      {/* Waypoint C — destination GPS pin */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 14, delay: 1.4 }}
        viewport={{ once: true }}
        className="svg-pivot-b"
      >
        <motion.g
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M322 118 C322 118 322 102 334 96 A18 18 0 1 0 310 96 C322 102 322 118 322 118z"
            stroke={accent}
            strokeWidth="2"
            fill={accent}
            fillOpacity="0.15"
            filter="url(#glow-sl)"
          />
          <circle cx="322" cy="96" r="7" fill={accent} />
          <motion.path
            d="M310 86 Q322 78 334 86"
            stroke={accent}
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          />
          <motion.path
            d="M305 80 Q322 70 339 80"
            stroke={accent}
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 1.4, delay: 0.35, repeat: Infinity }}
          />
        </motion.g>
      </motion.g>

      {/* Signed manifest tag */}
      <motion.g
        initial={{ x: 10, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.42, delay: 1.9 }}
        viewport={{ once: true }}
      >
        <rect
          x="238"
          y="184"
          width="112"
          height="56"
          rx="6"
          stroke={accent}
          strokeWidth="1.5"
          fill={muted}
        />
        <line
          x1="252"
          y1="200"
          x2="336"
          y2="200"
          stroke={stroke}
          strokeWidth="1.4"
          strokeOpacity="0.4"
          strokeLinecap="round"
        />
        <line
          x1="252"
          y1="211"
          x2="312"
          y2="211"
          stroke={stroke}
          strokeWidth="1.2"
          strokeOpacity="0.25"
          strokeLinecap="round"
        />
        <line
          x1="252"
          y1="221"
          x2="320"
          y2="221"
          stroke={stroke}
          strokeWidth="1.2"
          strokeOpacity="0.25"
          strokeLinecap="round"
        />
        <circle
          cx="332"
          cy="210"
          r="9"
          stroke={accent}
          strokeWidth="1.5"
          fill={accent}
          fillOpacity="0.08"
        />
        <motion.path
          d="M327 210l4 4 7-7"
          stroke={accent}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.32, delay: 2.1 }}
          viewport={{ once: true }}
        />
        <rect x="252" y="228" width="40" height="8" rx="2" fill={accent} fillOpacity="0.18" />
      </motion.g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   03 — Compliance Platform  (IllustrationCompliancePlatform)
   Monitor showing a live audit-log feed: timestamp | event | status badge.
   An immutable-lock bar sits inside the screen's bottom edge.
   A REST API tag is inset at the monitor's top-right corner.
───────────────────────────────────────────────────────────────────────────*/
export function IllustrationCompliancePlatform({ onDark }: { onDark: boolean }) {
  const { stroke, accent, muted } = useThemeColors(onDark);
  const rows = [
    { opacity: 1.0 },
    { opacity: 0.78 },
    { opacity: 0.58 },
    { opacity: 0.38 },
    { opacity: 0.22 },
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
        <filter id="glow-cp" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Monitor stand */}
      <rect
        x="183"
        y="250"
        width="34"
        height="10"
        rx="3"
        stroke={stroke}
        strokeWidth="1.5"
        fill={muted}
      />
      <rect
        x="161"
        y="259"
        width="78"
        height="7"
        rx="3"
        stroke={stroke}
        strokeWidth="1.5"
        fill={muted}
      />

      {/* Monitor shell */}
      <rect
        x="52"
        y="42"
        width="296"
        height="210"
        rx="10"
        stroke={stroke}
        strokeWidth="2.2"
        fill={muted}
      />

      {/* Screen area */}
      <rect
        x="64"
        y="54"
        width="272"
        height="186"
        rx="5"
        stroke={stroke}
        strokeWidth="1"
        strokeOpacity="0.3"
        fill={onDark ? "rgba(232,230,225,0.04)" : "rgba(42,42,46,0.04)"}
      />

      {/* Top bar */}
      <rect x="64" y="54" width="272" height="22" rx="5" fill={stroke} fillOpacity="0.07" />
      <circle cx="78" cy="65" r="4" fill={stroke} fillOpacity="0.25" />
      <circle cx="90" cy="65" r="4" fill={stroke} fillOpacity="0.16" />
      <circle cx="102" cy="65" r="4" fill={stroke} fillOpacity="0.1" />
      {/* column headers */}
      <rect x="118" y="61" width="30" height="5" rx="2" fill={stroke} fillOpacity="0.2" />
      <rect x="206" y="61" width="52" height="5" rx="2" fill={stroke} fillOpacity="0.2" />
      <rect x="298" y="61" width="24" height="5" rx="2" fill={stroke} fillOpacity="0.2" />

      {/* Log rows */}
      {rows.map(({ opacity }, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.32, delay: 0.12 + i * 0.13 }}
          viewport={{ once: true }}
        >
          <rect
            x="80"
            y={84 + i * 24}
            width="26"
            height="6"
            rx="2"
            fill={stroke}
            opacity={opacity * 0.28}
          />
          <rect
            x="114"
            y={84 + i * 24}
            width={84 + (i % 3) * 16}
            height="6"
            rx="2"
            fill={stroke}
            opacity={opacity * 0.2}
          />
          <motion.rect
            x="306"
            y={81 + i * 24}
            width="16"
            height="12"
            rx="3"
            fill={accent}
            opacity={opacity * 0.75}
            animate={{ opacity: [opacity * 0.75, opacity, opacity * 0.75] }}
            transition={{ duration: 2.2 + i * 0.3, repeat: Infinity }}
          />
        </motion.g>
      ))}

      {/* Immutable lock bar at screen bottom */}
      <motion.g
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.42, delay: 0.88 }}
        viewport={{ once: true }}
      >
        <rect x="64" y="222" width="272" height="18" rx="0" fill={accent} fillOpacity="0.08" />
        <path
          d="M165 231 h70"
          stroke={accent}
          strokeWidth="1.8"
          strokeLinecap="round"
          filter="url(#glow-cp)"
        />
        <rect
          x="141"
          y="224"
          width="26"
          height="14"
          rx="7"
          stroke={accent}
          strokeWidth="1.6"
          fill="none"
        />
        <rect
          x="233"
          y="224"
          width="26"
          height="14"
          rx="7"
          stroke={accent}
          strokeWidth="1.6"
          fill="none"
        />
        {/* padlock */}
        <rect
          x="191"
          y="223"
          width="18"
          height="14"
          rx="3"
          stroke={accent}
          strokeWidth="1.5"
          fill={muted}
        />
        <path
          d="M194 223v-4a6 6 0 0 1 12 0v4"
          stroke={accent}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="200" cy="230" r="2.5" fill={accent} filter="url(#glow-cp)" />
      </motion.g>

      {/* REST API tag */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 14, delay: 1.05 }}
        viewport={{ once: true }}
        className="svg-pivot-c"
      >
        <rect
          x="302"
          y="26"
          width="54"
          height="20"
          rx="4"
          stroke={accent}
          strokeWidth="1.4"
          fill={muted}
        />
        <text
          x="329"
          y="39"
          textAnchor="middle"
          fontSize="8"
          fontFamily="monospace"
          fill={accent}
          opacity="0.85"
        >
          REST API
        </text>
      </motion.g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   04 — Circular Recovery  (IllustrationCircularRecovery)
   Three 120° arcs forming a complete tri-arrow recycling loop. Node icons
   at each vertex: collection crate → refurb wrench → value coin. Device
   icon at centre; value-credit badge anchored directly below it.
───────────────────────────────────────────────────────────────────────────*/
export function IllustrationCircularRecovery({ onDark }: { onDark: boolean }) {
  const { stroke, accent, muted } = useThemeColors(onDark);

  const r = 104;
  const cx = 200,
    cy = 156;
  const pts = [0, 1, 2].map((i) => {
    const a = (i * 120 - 90) * (Math.PI / 180);
    return { x: +(cx + r * Math.cos(a)).toFixed(2), y: +(cy + r * Math.sin(a)).toFixed(2) };
  });
  const arc = (from: { x: number; y: number }, to: { x: number; y: number }) =>
    `M${from.x} ${from.y} A${r} ${r} 0 0 1 ${to.x} ${to.y}`;

  const arcColors = [accent, stroke, accent];
  const arcOpacities = [1, 1, 0.5];

  // arrowhead angles (tangent at endpoint of each arc, pointing clockwise)
  const arrowAngles = [30, 150, 270];

  return (
    <svg
      viewBox="0 0 400 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full max-w-sm"
    >
      <defs>
        <filter id="glow-cr" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Arc segments */}
      {[0, 1, 2].map((i) => (
        <motion.path
          key={i}
          d={arc(pts[i], pts[(i + 1) % 3])}
          stroke={arcColors[i]}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          strokeOpacity={arcOpacities[i]}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.52, delay: i * 0.42 }}
          viewport={{ once: true }}
        />
      ))}

      {/* Arrowheads */}
      {pts.map((pt, i) => {
        const rad = (arrowAngles[i] * Math.PI) / 180;
        const len = 11,
          sp = 0.44;
        return (
          <motion.path
            key={i}
            d={`M${pt.x} ${pt.y} L${+(pt.x - len * Math.cos(rad - sp)).toFixed(1)} ${+(pt.y - len * Math.sin(rad - sp)).toFixed(1)} M${pt.x} ${pt.y} L${+(pt.x - len * Math.cos(rad + sp)).toFixed(1)} ${+(pt.y - len * Math.sin(rad + sp)).toFixed(1)}`}
            stroke={i === 1 ? stroke : accent}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeOpacity={i === 2 ? 0.5 : 1}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.42 + i * 0.42 }}
            viewport={{ once: true }}
          />
        );
      })}

      {/* Node icons at vertices */}
      {pts.map((pt, i) => (
        <motion.g
          key={i}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 240, damping: 16, delay: 0.1 + i * 0.38 }}
          viewport={{ once: true }}
          className="svg-pivot-c"
        >
          {i === 0 && (
            // collection box
            <g>
              <rect
                x={pt.x - 13}
                y={pt.y - 13}
                width="26"
                height="26"
                rx="4"
                stroke={stroke}
                strokeWidth="1.8"
                fill={muted}
              />
              <line
                x1={pt.x - 13}
                y1={pt.y}
                x2={pt.x + 13}
                y2={pt.y}
                stroke={stroke}
                strokeWidth="1.2"
                strokeOpacity="0.35"
              />
            </g>
          )}
          {i === 1 && (
            // refurb wrench
            <g>
              <circle cx={pt.x} cy={pt.y} r="14" stroke={stroke} strokeWidth="1.8" fill={muted} />
              <path
                d={`M${pt.x - 5} ${pt.y + 5} L${pt.x + 5} ${pt.y - 5}`}
                stroke={accent}
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <circle
                cx={pt.x - 4}
                cy={pt.y + 4}
                r="3.5"
                stroke={accent}
                strokeWidth="1.5"
                fill="none"
              />
            </g>
          )}
          {i === 2 && (
            // value coin
            <g>
              <circle
                cx={pt.x}
                cy={pt.y}
                r="14"
                stroke={accent}
                strokeWidth="1.8"
                fill={accent}
                fillOpacity="0.1"
              />
              <text
                x={pt.x}
                y={pt.y + 4}
                textAnchor="middle"
                fontSize="11"
                fontFamily="serif"
                fill={accent}
                opacity="0.9"
              >
                $
              </text>
            </g>
          )}
        </motion.g>
      ))}

      {/* Centre device icon */}
      <motion.g
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.38, delay: 1.3 }}
        viewport={{ once: true }}
        className="svg-pivot-c"
      >
        <rect
          x="178"
          y="133"
          width="44"
          height="38"
          rx="5"
          stroke={stroke}
          strokeWidth="2"
          fill={muted}
        />
        <line
          x1="178"
          y1="163"
          x2="222"
          y2="163"
          stroke={stroke}
          strokeWidth="1.4"
          strokeOpacity="0.4"
        />
        <rect
          x="196"
          y="171"
          width="8"
          height="5"
          rx="1"
          stroke={stroke}
          strokeWidth="1"
          fill={muted}
        />
        <motion.circle
          cx="200"
          cy="148"
          r="3"
          fill={accent}
          filter="url(#glow-cr)"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
      </motion.g>

      {/* Value credit badge below device */}
      <motion.g
        initial={{ y: 12, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 160, damping: 16, delay: 1.6 }}
        viewport={{ once: true }}
      >
        <rect
          x="154"
          y="236"
          width="92"
          height="28"
          rx="5"
          stroke={accent}
          strokeWidth="1.5"
          fill={muted}
        />
        <line
          x1="168"
          y1="247"
          x2="226"
          y2="247"
          stroke={accent}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.65"
        />
        <line
          x1="168"
          y1="257"
          x2="210"
          y2="257"
          stroke={accent}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeOpacity="0.35"
        />
        <circle
          cx="232"
          cy="250"
          r="7"
          fill={accent}
          fillOpacity="0.14"
          stroke={accent}
          strokeWidth="1.2"
        />
        <text
          x="232"
          y="254"
          textAnchor="middle"
          fontSize="8"
          fontFamily="serif"
          fill={accent}
          opacity="0.9"
        >
          $
        </text>
      </motion.g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   05 — ESG Reporting  (IllustrationESGReporting)
   A4 document with slide-in header text. Four growing bar chart columns
   in the lower half. GRI/ISO stamp badge inset at bottom-right corner of
   the document. A symmetric leaf floats to the right with a GRI 306 tag.
───────────────────────────────────────────────────────────────────────────*/
export function IllustrationESGReporting({ onDark }: { onDark: boolean }) {
  const { stroke, accent, muted } = useThemeColors(onDark);
  const bars = [
    { x: 104, h: 48, delay: 0.5 },
    { x: 130, h: 32, delay: 0.62 },
    { x: 156, h: 62, delay: 0.74 },
    { x: 182, h: 40, delay: 0.86 },
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
        <filter id="glow-esg" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* A4 document */}
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
      {[0, 1, 2, 3].map((i) => (
        <motion.rect
          key={i}
          x="88"
          y={72 + i * 18}
          width={88 + (i % 2) * 30}
          height="7"
          rx="3"
          fill={stroke}
          opacity={0.18 - i * 0.02}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.18 - i * 0.02 }}
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

      {/* Bar columns */}
      {bars.map(({ x, h, delay }, i) => (
        <motion.rect
          key={i}
          x={x}
          y={230 - h}
          width="20"
          height={h}
          rx="3"
          fill={accent}
          opacity={0.45 + i * 0.12}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          className="svg-pivot-b"
          transition={{ duration: 0.44, delay }}
          viewport={{ once: true }}
        />
      ))}

      {/* GRI/ISO stamp inside document */}
      <motion.g
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 14, delay: 1.08 }}
        viewport={{ once: true }}
        className="svg-pivot-c"
      >
        <circle
          cx="234"
          cy="256"
          r="20"
          stroke={accent}
          strokeWidth="1.8"
          fill={accent}
          fillOpacity="0.07"
        />
        <circle cx="234" cy="256" r="14" stroke={accent} strokeWidth="1" strokeDasharray="3 2.5" />
        <motion.path
          d="M226 256l6 6 10-10"
          stroke={accent}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow-esg)"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.36, delay: 1.38 }}
          viewport={{ once: true }}
        />
      </motion.g>

      {/* Leaf — symmetric, right of document */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 160, damping: 14, delay: 0.98 }}
        viewport={{ once: true }}
        className="svg-pivot-c"
      >
        <motion.g
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* left lobe */}
          <path
            d="M312 116 C296 96 272 108 274 140 C274 140 296 148 312 116z"
            stroke={accent}
            strokeWidth="1.8"
            fill={accent}
            fillOpacity="0.13"
          />
          {/* right lobe */}
          <path
            d="M312 116 C328 96 352 108 350 140 C350 140 328 148 312 116z"
            stroke={accent}
            strokeWidth="1.8"
            fill={accent}
            fillOpacity="0.13"
          />
          {/* centre vein */}
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
          {/* stem */}
          <path
            d="M312 148 Q310 166 308 176"
            stroke={accent}
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            strokeOpacity="0.45"
          />
        </motion.g>
      </motion.g>

      {/* GRI 306 tag below leaf */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.28, delay: 1.48 }}
        viewport={{ once: true }}
      >
        <rect
          x="284"
          y="180"
          width="56"
          height="18"
          rx="4"
          stroke={accent}
          strokeWidth="1.2"
          fill={muted}
        />
        <text
          x="312"
          y="192"
          textAnchor="middle"
          fontSize="7.5"
          fontFamily="monospace"
          fill={accent}
          opacity="0.85"
        >
          GRI 306
        </text>
      </motion.g>
    </svg>
  );
}
