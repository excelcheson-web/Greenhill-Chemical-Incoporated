"use client";

import { useId } from "react";
import type { GhsPictogramCode } from "@/lib/sds-types";
import { cn } from "@/lib/utils";

interface GhsPictogramProps {
  code: GhsPictogramCode;
  size?: number;
  className?: string;
}

const PICTOGRAM_META: Record<GhsPictogramCode, { label: string; icon: JSX.Element }> = {
  GHS01: {
    label: "Exploding bomb",
    icon: (
      <>
        {/* Burst / explosion */}
        <polygon points="32,4 38,20 56,12 44,28 60,32 44,36 56,52 38,44 32,60 26,44 8,52 20,36 4,32 20,28 8,12 26,20" fill="#1A1A1A" />
      </>
    ),
  },
  GHS02: {
    label: "Flame",
    icon: (
      <>
        {/* Stylized flame */}
        <path d="M32 6 C32 6 44 20 44 34 C44 42 38 50 32 54 C26 50 20 42 20 34 C20 20 32 6 32 6Z" fill="#1A1A1A" />
        <path d="M32 26 C32 26 37 32 37 38 C37 42 35 46 32 48 C29 46 27 42 27 38 C27 32 32 26 32 26Z" fill="#FF0000" />
      </>
    ),
  },
  GHS03: {
    label: "Flame over circle",
    icon: (
      <>
        {/* Circle */}
        <circle cx="32" cy="42" r="12" fill="#1A1A1A" />
        {/* Flame above */}
        <path d="M32 6 C32 6 40 16 40 24 C40 30 36 34 32 34 C28 34 24 30 24 24 C24 16 32 6 32 6Z" fill="#1A1A1A" />
      </>
    ),
  },
  GHS04: {
    label: "Gas cylinder",
    icon: (
      <>
        {/* Cylinder body */}
        <rect x="20" y="14" width="24" height="38" rx="6" fill="#1A1A1A" />
        {/* Valve top */}
        <rect x="28" y="6" width="8" height="10" rx="2" fill="#1A1A1A" />
      </>
    ),
  },
  GHS05: {
    label: "Corrosion",
    icon: (
      <>
        {/* Dripping onto surface */}
        <path d="M24 10 L28 10 L26 26 Z" fill="#1A1A1A" />
        <path d="M36 10 L40 10 L38 26 Z" fill="#1A1A1A" />
        {/* Surface / hand corroding */}
        <path d="M14 30 C14 30 20 28 24 32 C28 36 32 34 36 32 C40 28 50 30 50 30 L50 50 L14 50 Z" fill="#1A1A1A" />
      </>
    ),
  },
  GHS06: {
    label: "Skull and crossbones",
    icon: (
      <>
        {/* Skull */}
        <circle cx="32" cy="24" r="14" fill="#1A1A1A" />
        <circle cx="26" cy="22" r="3" fill="#FF0000" />
        <circle cx="38" cy="22" r="3" fill="#FF0000" />
        <ellipse cx="32" cy="30" rx="2" ry="1.5" fill="#FF0000" />
        {/* Crossbones */}
        <line x1="16" y1="40" x2="48" y2="54" stroke="#1A1A1A" strokeWidth="4" strokeLinecap="round" />
        <line x1="48" y1="40" x2="16" y2="54" stroke="#1A1A1A" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
  },
  GHS07: {
    label: "Exclamation mark",
    icon: (
      <>
        {/* Exclamation mark */}
        <rect x="28" y="12" width="8" height="26" rx="2" fill="#1A1A1A" />
        <circle cx="32" cy="48" r="5" fill="#1A1A1A" />
      </>
    ),
  },
  GHS08: {
    label: "Health hazard",
    icon: (
      <>
        {/* Silhouette with star/damage on chest */}
        <circle cx="32" cy="16" r="8" fill="#1A1A1A" />
        <path d="M20 28 L44 28 L42 56 L22 56 Z" fill="#1A1A1A" />
        {/* Star damage */}
        <polygon points="32,32 34,38 40,38 35,42 37,48 32,44 27,48 29,42 24,38 30,38" fill="#FF0000" />
      </>
    ),
  },
  GHS09: {
    label: "Environment",
    icon: (
      <>
        {/* Tree */}
        <polygon points="32,6 44,28 38,28 46,44 18,44 26,28 20,28" fill="#1A1A1A" />
        {/* Fish / water */}
        <ellipse cx="32" cy="52" rx="16" ry="4" fill="#1A1A1A" />
      </>
    ),
  },
};

export function GhsPictogram({ code, size = 64, className }: GhsPictogramProps) {
  const uniqueId = useId();
  const clipId = `diamond-${code}-${uniqueId}`;
  const meta = PICTOGRAM_META[code];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      role="img"
      aria-label={`GHS pictogram: ${meta.label}`}
      className={cn("shrink-0", className)}
    >
      {/* Red diamond border */}
      <polygon
        points="32,2 62,32 32,62 2,32"
        fill="#FFFFFF"
        stroke="#FF0000"
        strokeWidth="3"
      />
      {/* Clipping area inside diamond */}
      <clipPath id={clipId}>
        <polygon points="32,6 58,32 32,58 6,32" />
      </clipPath>
      <g clipPath={`url(#${clipId})`}>{meta.icon}</g>
    </svg>
  );
}
