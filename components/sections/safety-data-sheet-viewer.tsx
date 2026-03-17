import { FileDown, AlertTriangle, ShieldAlert, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { GhsPictogram } from "@/components/ui/ghs-pictogram";
import type { SafetyDataSheetData } from "@/lib/sds-types";

interface SafetyDataSheetViewerProps {
  pdfUrl: string;
  data: SafetyDataSheetData;
}

export function SafetyDataSheetViewer({ pdfUrl, data }: SafetyDataSheetViewerProps) {
  const headingId = `sds-heading-${data.productId}`;
  const pictogramsId = `sds-pictograms-${data.productId}`;
  const hStatementsId = `sds-h-statements-${data.productId}`;
  const pStatementsId = `sds-p-statements-${data.productId}`;

  return (
    <article
      className={cn(
        "rounded-lg border border-brand-border bg-white shadow-sm",
        "overflow-hidden"
      )}
      aria-labelledby={headingId}
    >
      {/* Header */}
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-border bg-brand-light px-6 py-4">
        <div>
          <h2
            id={headingId}
            className="text-xl font-bold text-brand-anthracite"
          >
            Safety Data Sheet — {data.productName}
          </h2>
          <p className="mt-1 text-sm text-brand-anthracite/70">
            GHS Classification Summary
          </p>
        </div>
        <a
          href={pdfUrl}
          download
          className={cn(
            "inline-flex items-center gap-2 rounded-md",
            "bg-brand-anthracite px-4 py-2.5 text-sm font-semibold text-white",
            "transition-colors hover:bg-brand-anthracite/90",
            "focus:outline-none focus:ring-2 focus:ring-brand-mint focus:ring-offset-2"
          )}
        >
          <FileDown className="h-4 w-4" aria-hidden="true" />
          Download Full SDS (PDF)
        </a>
      </header>

      <div className="space-y-8 p-6">
        {/* Signal Word + Pictograms */}
        <section aria-labelledby={pictogramsId}>
          <h3
            id={pictogramsId}
            className="mb-4 flex items-center gap-2 text-lg font-bold text-brand-anthracite"
          >
            <AlertTriangle className="h-5 w-5 text-red-600" aria-hidden="true" />
            GHS Hazard Pictograms
          </h3>

          {/* Signal word badge */}
          <p className="mb-4">
            <span
              className={cn(
                "inline-block rounded-full px-3 py-1 text-sm font-bold uppercase tracking-wide",
                data.signalWord === "Danger"
                  ? "bg-red-100 text-red-800"
                  : "bg-yellow-100 text-yellow-800"
              )}
            >
              {data.signalWord}
            </span>
          </p>

          {/* Pictogram grid */}
          <div className="flex flex-wrap gap-4" role="list" aria-label="Hazard pictograms">
            {data.pictograms.map((code) => (
              <div key={code} role="listitem">
                <GhsPictogram code={code} size={80} />
              </div>
            ))}
          </div>
        </section>

        {/* H-Statements */}
        <section aria-labelledby={hStatementsId}>
          <h3
            id={hStatementsId}
            className="mb-4 flex items-center gap-2 text-lg font-bold text-brand-anthracite"
          >
            <ShieldAlert className="h-5 w-5 text-red-600" aria-hidden="true" />
            Hazard Statements
          </h3>
          <ul className="space-y-2">
            {data.hStatements.map((h) => (
              <li
                key={h.code}
                className="flex gap-3 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-brand-anthracite"
              >
                <span className="shrink-0 font-mono font-bold text-red-700">
                  {h.code}
                </span>
                <span>{h.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* P-Statements */}
        <section aria-labelledby={pStatementsId}>
          <h3
            id={pStatementsId}
            className="mb-4 flex items-center gap-2 text-lg font-bold text-brand-anthracite"
          >
            <Shield className="h-5 w-5 text-brand-mint" aria-hidden="true" />
            Precautionary Statements
          </h3>
          <ul className="space-y-2">
            {data.pStatements.map((p) => (
              <li
                key={p.code}
                className="flex gap-3 rounded-md border border-brand-border bg-brand-light px-4 py-3 text-sm text-brand-anthracite"
              >
                <span className="shrink-0 font-mono font-bold text-brand-anthracite">
                  {p.code}
                </span>
                <span>{p.text}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
