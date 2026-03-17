import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  AlertTriangle,
  ShieldAlert,
  FileText,
  Download,
  Truck,
  FlaskConical,
  ArrowLeft,
} from "lucide-react";
import { chemicalSpecs } from "@/content/chemical-specs";
import type { HazardLevel } from "@/content/chemical-specs";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return chemicalSpecs.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const chem = chemicalSpecs.find((c) => c.slug === params.slug);
  if (!chem) return {};
  return {
    title: `${chem.name} (${chem.formula}) — Technical Spec`,
    description: `Technical data for ${chem.name}: CAS ${chem.casNumber}, purity ${chem.purity}. ${chem.primaryUse}. Download TDS, SDS, and CoA.`,
    openGraph: {
      title: `${chem.name} — Greenhills Chemicals Technical Catalog`,
      description: `${chem.primaryUse}. CAS ${chem.casNumber}. Purity: ${chem.purity}.`,
    },
  };
}

function hazardBadge(level: HazardLevel) {
  const map: Record<
    HazardLevel,
    { label: string; bg: string; icon: typeof AlertTriangle | null }
  > = {
    low: { label: "Low Hazard", bg: "bg-brand-mint/15 text-brand-mint", icon: null },
    moderate: {
      label: "Moderate Hazard",
      bg: "bg-brand-amber-warning/30 text-brand-anthracite",
      icon: AlertTriangle,
    },
    high: {
      label: "High Hazard",
      bg: "bg-brand-amber-warning/50 text-brand-anthracite",
      icon: AlertTriangle,
    },
    extreme: {
      label: "Extreme Hazard",
      bg: "bg-red-100 text-red-700",
      icon: ShieldAlert,
    },
  };
  return map[level];
}

export default function ChemicalSpecPage({ params }: PageProps) {
  const chem = chemicalSpecs.find((c) => c.slug === params.slug);
  if (!chem) notFound();

  const badge = hazardBadge(chem.hazardLevel);
  const HazardIcon = badge.icon;

  return (
    <div>
      {/* Header */}
      <section className="bg-brand-anthracite">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <a
            href="/technical"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-brand-clean/60 transition-colors hover:text-brand-mint"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Technical Catalog
          </a>
          <div className="flex flex-wrap items-start gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-mint">
                {chem.primaryUse}
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-brand-clean sm:text-4xl lg:text-5xl">
                {chem.name}{" "}
                <span className="text-brand-clean/50">({chem.formula})</span>
              </h1>
              <p className="mt-2 font-mono text-sm text-brand-clean/50">
                CAS {chem.casNumber}
              </p>
            </div>
          </div>

          {/* Hazard badge + industries */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-semibold ${badge.bg}`}
            >
              {HazardIcon && (
                <HazardIcon
                  className="h-4 w-4 text-brand-amber-warning"
                  aria-hidden="true"
                />
              )}
              {badge.label}
            </span>
            {chem.industries.map((ind) => (
              <span
                key={ind}
                className="rounded-full bg-brand-clean/10 px-3 py-1 text-xs font-medium text-brand-clean/70"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main content — 2 cols */}
          <div className="space-y-12 lg:col-span-2">
            {/* Spec Table */}
            <section aria-labelledby="specs-heading">
              <h2
                id="specs-heading"
                className="text-xl font-bold text-brand-anthracite"
              >
                Technical Specifications
              </h2>
              <div className="mt-4 overflow-hidden rounded-xl border border-brand-border">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-brand-border">
                    {chem.properties.map((prop, i) => (
                      <tr
                        key={prop.label}
                        className={
                          i % 2 === 0 ? "bg-brand-clean" : "bg-brand-light"
                        }
                      >
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-3 text-left font-semibold text-brand-anthracite"
                        >
                          {prop.label}
                        </th>
                        <td className="px-6 py-3 text-brand-anthracite/70">
                          {prop.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Applications */}
            <section aria-labelledby="applications-heading">
              <h2
                id="applications-heading"
                className="text-xl font-bold text-brand-anthracite"
              >
                Applications
              </h2>
              <ul className="mt-4 space-y-2">
                {chem.applications.map((app) => (
                  <li
                    key={app}
                    className="flex items-start gap-2 text-brand-anthracite/70"
                  >
                    <FlaskConical
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-mint"
                      aria-hidden="true"
                    />
                    {app}
                  </li>
                ))}
              </ul>
            </section>

            {/* Technical note */}
            <section aria-labelledby="tech-note-heading">
              <h2
                id="tech-note-heading"
                className="text-xl font-bold text-brand-anthracite"
              >
                Technical Note
              </h2>
              <p className="mt-3 leading-relaxed text-brand-anthracite/70">
                {chem.technicalNote}
              </p>
            </section>

            {/* Safety warning */}
            <section
              aria-labelledby="safety-heading"
              className="rounded-xl border-l-4 border-brand-amber-warning bg-brand-amber-warning/10 p-6"
            >
              <div className="flex items-center gap-2">
                <AlertTriangle
                  className="h-5 w-5 text-brand-amber-warning"
                  aria-hidden="true"
                />
                <h2
                  id="safety-heading"
                  className="text-lg font-bold text-brand-anthracite"
                >
                  Safety Warning
                </h2>
              </div>
              <p className="mt-3 leading-relaxed text-brand-anthracite/80">
                {chem.safetyWarning}
              </p>
            </section>

            {/* Logistics */}
            <section aria-labelledby="logistics-heading">
              <div className="flex items-center gap-2">
                <Truck
                  className="h-5 w-5 text-brand-mint"
                  aria-hidden="true"
                />
                <h2
                  id="logistics-heading"
                  className="text-xl font-bold text-brand-anthracite"
                >
                  Logistics &amp; Storage
                </h2>
              </div>
              <p className="mt-3 leading-relaxed text-brand-anthracite/70">
                {chem.logisticsNote}
              </p>
            </section>
          </div>

          {/* Sidebar — downloads */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-4 rounded-2xl border border-brand-border bg-brand-clean p-6 shadow-sm">
              <h3 className="text-lg font-bold text-brand-anthracite">
                Downloads
              </h3>
              <p className="text-xs text-brand-anthracite/50">
                All documents are in PDF format.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  {
                    label: "Technical Data Sheet (TDS)",
                    url: chem.tdsUrl,
                    primary: true,
                  },
                  {
                    label: "Safety Data Sheet (SDS)",
                    url: chem.sdsUrl,
                    primary: false,
                  },
                  {
                    label: "Certificate of Analysis (CoA)",
                    url: chem.coaUrl,
                    primary: false,
                  },
                ].map((doc) => (
                  <a
                    key={doc.label}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint ${
                      doc.primary
                        ? "bg-brand-mint text-brand-anthracite hover:bg-brand-mint/80"
                        : "border border-brand-border bg-brand-light text-brand-anthracite hover:bg-brand-border"
                    }`}
                    aria-label={`Download ${doc.label} for ${chem.name}`}
                  >
                    {doc.primary ? (
                      <Download className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <FileText className="h-4 w-4" aria-hidden="true" />
                    )}
                    {doc.label}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
