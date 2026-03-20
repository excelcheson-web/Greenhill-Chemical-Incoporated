import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SafetyDataSheetViewer } from "@/components/sections/safety-data-sheet-viewer";
import { sdsRecords } from "@/content/sds-data";
import { ArrowLeft } from "lucide-react";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return Object.keys(sdsRecords).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const sds = sdsRecords[params.slug];
  if (!sds) return {};
  return {
    title: `SDS for ${sds.productName}`,
    description: `Safety Data Sheet for ${sds.productName}. View GHS hazard pictograms, hazard statements, and precautionary statements.`,
    openGraph: {
      title: `SDS for ${sds.productName} — Greenhills Chemicals Incorporated`,
      description: `GHS classification summary for ${sds.productName}.`,
    },
  };
}

export default function SdsPage({ params }: PageProps) {
  const sds = sdsRecords[params.slug];

  if (!sds) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-anthracite">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <a
            href="/products"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-brand-clean/60 transition-colors hover:text-brand-mint"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Products
          </a>
          <h1 className="text-3xl font-bold tracking-tight text-brand-clean sm:text-5xl">
            {`Safety Data Sheet: ${sds.productName}`}
          </h1>
          <p className="max-w-2xl text-lg text-brand-clean/80">
            GHS classification summaries for our chemical catalog. Review hazard
            pictograms, precautionary statements, and download full PDF
            documentation.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
        <SafetyDataSheetViewer pdfUrl={sds.pdfUrl} data={sds} />
      </div>
    </>
  );
}
