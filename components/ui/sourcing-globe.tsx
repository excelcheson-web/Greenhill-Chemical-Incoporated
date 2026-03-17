"use client";

/**
 * Animated 3D-style globe SVG showing Greenhills Chemicals sourcing points.
 * Markers pulse on mount; globe has a slow rotation shimmer.
 */
export function SourcingGlobe() {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Animated globe showing Greenhills Chemicals global sourcing points across Asia, Europe, and the Americas"
      className="h-auto w-full max-w-md"
    >
      <defs>
        {/* Globe gradient */}
        <radialGradient id="globe-grad" cx="40%" cy="35%" r="50%">
          <stop offset="0%" stopColor="#3d4f51" />
          <stop offset="100%" stopColor="#2D3436" />
        </radialGradient>
        {/* Glow behind globe */}
        <radialGradient id="globe-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00FFC2" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#00FFC2" stopOpacity="0" />
        </radialGradient>
        {/* Grid line style */}
        <linearGradient id="grid-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00FFC2" stopOpacity="0" />
          <stop offset="50%" stopColor="#00FFC2" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#00FFC2" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Ambient glow */}
      <circle cx="250" cy="250" r="230" fill="url(#globe-glow)" />

      {/* Globe body */}
      <circle
        cx="250"
        cy="250"
        r="190"
        fill="url(#globe-grad)"
        stroke="#00FFC2"
        strokeWidth="1.5"
        strokeOpacity="0.3"
      />

      {/* Latitude lines */}
      {[-60, -30, 0, 30, 60].map((lat) => {
        const yOff = (lat / 90) * 160;
        const ry = Math.cos((lat * Math.PI) / 180) * 190;
        return (
          <ellipse
            key={`lat-${lat}`}
            cx="250"
            cy={250 - yOff}
            rx={ry}
            ry={Math.abs(lat) > 45 ? 12 : 18}
            stroke="url(#grid-line)"
            strokeWidth="0.8"
            fill="none"
          />
        );
      })}

      {/* Longitude arcs */}
      {[0, 45, 90, 135].map((deg) => {
        const rx = Math.cos((deg * Math.PI) / 180) * 190;
        return (
          <ellipse
            key={`lon-${deg}`}
            cx="250"
            cy="250"
            rx={Math.max(rx, 4)}
            ry={190}
            stroke="url(#grid-line)"
            strokeWidth="0.8"
            fill="none"
          />
        );
      })}

      {/* Simplified continent outlines (stylized blobs) */}
      {/* Asia */}
      <path
        d="M290 170 Q320 160 340 175 Q360 195 350 220 Q340 250 310 260 Q290 265 275 250 Q260 235 265 210 Q270 185 290 170Z"
        fill="#00FFC2"
        fillOpacity="0.12"
        stroke="#00FFC2"
        strokeWidth="1"
        strokeOpacity="0.4"
      />
      {/* Europe */}
      <path
        d="M225 145 Q245 135 260 145 Q270 155 265 170 Q258 182 245 185 Q230 185 222 175 Q215 160 225 145Z"
        fill="#00FFC2"
        fillOpacity="0.12"
        stroke="#00FFC2"
        strokeWidth="1"
        strokeOpacity="0.4"
      />
      {/* Americas */}
      <path
        d="M140 180 Q155 160 165 175 Q175 200 170 230 Q165 260 155 280 Q145 295 135 275 Q125 250 128 220 Q130 195 140 180Z"
        fill="#00FFC2"
        fillOpacity="0.12"
        stroke="#00FFC2"
        strokeWidth="1"
        strokeOpacity="0.4"
      />
      {/* Africa */}
      <path
        d="M235 220 Q250 210 260 225 Q268 245 262 270 Q255 290 242 295 Q230 290 225 270 Q220 245 235 220Z"
        fill="#00FFC2"
        fillOpacity="0.10"
        stroke="#00FFC2"
        strokeWidth="1"
        strokeOpacity="0.3"
      />

      {/* Sourcing point markers with pulse */}
      {[
        { cx: 310, cy: 240, label: "Philippines (HQ)" },
        { cx: 340, cy: 195, label: "China" },
        { cx: 330, cy: 175, label: "Japan" },
        { cx: 255, cy: 155, label: "Germany" },
        { cx: 240, cy: 165, label: "Netherlands" },
        { cx: 145, cy: 200, label: "USA" },
        { cx: 155, cy: 265, label: "Brazil" },
        { cx: 295, cy: 210, label: "India" },
        { cx: 350, cy: 210, label: "South Korea" },
        { cx: 245, cy: 250, label: "South Africa" },
        { cx: 290, cy: 185, label: "Middle East" },
        { cx: 365, cy: 245, label: "Australia" },
      ].map((point) => (
        <g key={point.label}>
          {/* Pulse ring */}
          <circle cx={point.cx} cy={point.cy} r="3" fill="none" stroke="#00FFC2" strokeWidth="1.5">
            <animate attributeName="r" from="4" to="14" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.7" to="0" dur="2.5s" repeatCount="indefinite" />
          </circle>
          {/* Solid dot */}
          <circle
            cx={point.cx}
            cy={point.cy}
            r="4"
            fill="#00FFC2"
            stroke="#2D3436"
            strokeWidth="1.5"
          />
        </g>
      ))}

      {/* HQ marker — larger */}
      <circle cx="310" cy="240" r="7" fill="#00FFC2" stroke="#2D3436" strokeWidth="2" />
      <circle cx="310" cy="240" r="3" fill="#2D3436" />

      {/* Connection arcs from HQ to key sources */}
      {[
        "M310 240 Q325 180 340 195",
        "M310 240 Q340 160 330 175",
        "M310 240 Q275 190 255 155",
        "M310 240 Q280 200 295 210",
        "M310 240 Q340 220 350 210",
        "M310 240 Q340 235 365 245",
      ].map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="#00FFC2"
          strokeWidth="1"
          strokeOpacity="0.35"
          strokeDasharray="4 3"
          fill="none"
        />
      ))}

      {/* Labels */}
      <text x="250" y="430" textAnchor="middle" fill="#00FFC2" fontSize="14" fontWeight="700" opacity="0.9">
        12 Countries · 40+ Partner Manufacturers
      </text>
      <text x="250" y="450" textAnchor="middle" fill="#F5F6FA" fontSize="11" opacity="0.5">
        Sourcing points shown are approximate
      </text>

      {/* Slow spin shimmer on the globe edge */}
      <circle cx="250" cy="250" r="190" fill="none" stroke="#00FFC2" strokeWidth="2" strokeOpacity="0.1">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 250 250"
          to="360 250 250"
          dur="60s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}
