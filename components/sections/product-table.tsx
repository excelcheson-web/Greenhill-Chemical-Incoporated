"use client";

import { useState, useMemo } from "react";
import {
  Download,
  AlertTriangle,
  ShieldAlert,
  Filter,
} from "lucide-react";
import { chemicalSpecs } from "@/content/chemical-specs";
import type { IndustryTag, HazardLevel } from "@/content/chemical-specs";
import { cn } from "@/lib/utils";

const industries: IndustryTag[] = ["Mining", "Agriculture", "Industrial"];

function hazardColor(level: HazardLevel) {
  const map: Record<HazardLevel, string> = {
    low: "bg-brand-mint/15 text-brand-mint",
    moderate: "bg-brand-amber-warning/30 text-brand-anthracite",
    high: "bg-brand-amber-warning/50 text-brand-anthracite",
    extreme: "bg-red-100 text-red-700",
  };
  return map[level];
}

export function ProductTable() {
  const [active, setActive] = useState<IndustryTag | "All">("All");

  const filtered = useMemo(() => {
    if (active === "All") return chemicalSpecs;
    return chemicalSpecs.filter((c) => c.industries.includes(active));
  }, [active]);

  return (
    <div>
      {/* Filter pills */}
      <div className="flex flex-wrap items-center gap-2">
        <Filter
          className="h-5 w-5 text-brand-anthracite/50"
          aria-hidden="true"
        />
        <span className="mr-1 text-sm font-medium text-brand-anthracite/70">
          Filter by industry:
        </span>
        {(["All", ...industries] as const).map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActive(tag)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint",
              active === tag
                ? "bg-brand-anthracite text-brand-clean"
                : "bg-brand-light text-brand-anthracite hover:bg-brand-border"
            )}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="mt-6 overflow-x-auto rounded-xl border border-brand-border shadow-sm">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-brand-anthracite text-brand-clean">
              <th scope="col" className="whitespace-nowrap px-6 py-4 font-semibold">
                Product
              </th>
              <th scope="col" className="whitespace-nowrap px-6 py-4 font-semibold">
                Primary Use
              </th>
              <th scope="col" className="whitespace-nowrap px-6 py-4 font-semibold">
                Industries
              </th>
              <th scope="col" className="whitespace-nowrap px-6 py-4 text-center font-semibold">
                Hazard
              </th>
              <th scope="col" className="whitespace-nowrap px-6 py-4 text-center font-semibold">
                TDS
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-border bg-brand-clean">
            {filtered.map((chem) => (
              <tr
                key={chem.slug}
                className="transition-colors hover:bg-brand-light"
              >
                <td className="whitespace-nowrap px-6 py-4">
                  <a
                    href={`/technical/${chem.slug}`}
                    className="font-medium text-brand-anthracite underline-offset-2 hover:text-brand-mint hover:underline"
                  >
                    {chem.name}
                  </a>
                  <span className="ml-2 text-xs text-brand-anthracite/50">
                    {chem.formula}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-brand-anthracite/70">
                  {chem.primaryUse}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <span className="flex flex-wrap gap-1">
                    {chem.industries.map((ind) => (
                      <span
                        key={ind}
                        className="rounded-full bg-brand-light px-2.5 py-0.5 text-xs font-medium text-brand-anthracite/70"
                      >
                        {ind}
                      </span>
                    ))}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-center">
                  <span className="inline-flex items-center gap-1.5">
                    {chem.hazardLevel === "extreme" ? (
                      <ShieldAlert
                        className="h-4 w-4 text-brand-amber-warning"
                        aria-hidden="true"
                      />
                    ) : chem.hazardLevel !== "low" ? (
                      <AlertTriangle
                        className="h-4 w-4 text-brand-amber-warning"
                        aria-hidden="true"
                      />
                    ) : null}
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${hazardColor(chem.hazardLevel)}`}
                    >
                      {chem.hazardLevel.charAt(0).toUpperCase() +
                        chem.hazardLevel.slice(1)}
                    </span>
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-center">
                  <a
                    href={chem.tdsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-brand-mint px-3 py-1.5 text-xs font-semibold text-brand-anthracite transition-colors hover:bg-brand-mint/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint"
                    aria-label={`Download Technical Data Sheet for ${chem.name}`}
                  >
                    <Download className="h-3.5 w-3.5" aria-hidden="true" />
                    Download TDS
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-brand-anthracite/50">
        Showing {filtered.length} of {chemicalSpecs.length} chemicals
      </p>
    </div>
  );
}
