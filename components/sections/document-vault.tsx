"use client";

import { useState, useMemo } from "react";
import {
  Search,
  FileText,
  AlertTriangle,
  ShieldAlert,
  Download,
} from "lucide-react";
import { chemicalSpecs } from "@/content/chemical-specs";
import type { HazardLevel } from "@/content/chemical-specs";

function hazardBadge(level: HazardLevel) {
  const map: Record<HazardLevel, { label: string; classes: string }> = {
    low: {
      label: "Low",
      classes: "bg-brand-mint/15 text-brand-mint",
    },
    moderate: {
      label: "Moderate",
      classes: "bg-brand-amber-warning/30 text-brand-anthracite",
    },
    high: {
      label: "High",
      classes: "bg-brand-amber-warning/50 text-brand-anthracite",
    },
    extreme: {
      label: "Extreme",
      classes: "bg-red-100 text-red-700",
    },
  };
  return map[level];
}

export function DocumentVault() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return chemicalSpecs;
    return chemicalSpecs.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.formula.toLowerCase().includes(q) ||
        c.casNumber.includes(q)
    );
  }, [query]);

  return (
    <div>
      {/* Search bar */}
      <div className="relative max-w-md">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-anthracite/40"
          aria-hidden="true"
        />
        <label htmlFor="vault-search" className="sr-only">
          Search chemicals by name, formula, or CAS number
        </label>
        <input
          id="vault-search"
          type="search"
          placeholder="Search by name, formula, or CAS number…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-lg border border-brand-border bg-brand-clean py-3 pl-10 pr-4 text-sm text-brand-anthracite placeholder:text-brand-anthracite/40 focus:border-brand-mint focus:outline-none focus:ring-2 focus:ring-brand-mint/40"
        />
      </div>

      {/* Results table */}
      <div className="mt-6 overflow-x-auto rounded-xl border border-brand-border shadow-sm">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-brand-anthracite text-brand-clean">
              <th scope="col" className="whitespace-nowrap px-6 py-4 font-semibold">
                Product Name
              </th>
              <th scope="col" className="whitespace-nowrap px-6 py-4 font-semibold">
                CAS #
              </th>
              <th scope="col" className="whitespace-nowrap px-6 py-4 text-center font-semibold">
                Hazard
              </th>
              <th scope="col" className="whitespace-nowrap px-6 py-4 text-center font-semibold">
                <span className="sr-only">Safety Data Sheet</span>
                SDS
              </th>
              <th scope="col" className="whitespace-nowrap px-6 py-4 text-center font-semibold">
                <span className="sr-only">Certificate of Analysis</span>
                CoA
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-border bg-brand-clean">
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-10 text-center text-brand-anthracite/50"
                >
                  No chemicals match your search.
                </td>
              </tr>
            ) : (
              filtered.map((chem) => {
                const badge = hazardBadge(chem.hazardLevel);
                return (
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
                    <td className="whitespace-nowrap px-6 py-4 font-mono text-xs text-brand-anthracite/70">
                      {chem.casNumber}
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
                          className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${badge.classes}`}
                        >
                          {badge.label}
                        </span>
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-center">
                      <a
                        href={chem.sdsUrl}
                        className="inline-flex items-center gap-1 rounded-md bg-brand-light px-3 py-1.5 text-xs font-semibold text-brand-anthracite transition-colors hover:bg-brand-mint/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint"
                        aria-label={`View SDS for ${chem.name}`}
                      >
                        <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                        SDS
                      </a>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-center">
                      <a
                        href={chem.coaUrl}
                        className="inline-flex items-center gap-1 rounded-md bg-brand-light px-3 py-1.5 text-xs font-semibold text-brand-anthracite transition-colors hover:bg-brand-mint/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint"
                        aria-label={`Request CoA for ${chem.name}`}
                      >
                        <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                        CoA
                      </a>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
