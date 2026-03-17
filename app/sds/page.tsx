import type { Metadata } from "next";
import Image from "next/image";
import { SafetyDataSheetViewer } from "@/components/sections/safety-data-sheet-viewer";
import { sdsRecords } from "@/content/sds-data";

export const metadata: Metadata = {
  title: "Safety Data Sheets",
  description:
    "View GHS hazard pictograms, hazard statements, and precautionary statements for our chemical products. Download full SDS documents.",
  openGraph: {
    title: "Safety Data Sheets — Greenhills Chemicals Incorporated",
    description:
      "GHS classification summaries, hazard pictograms, and precautionary statements for industrial chemicals.",
  },
};

export default function SdsPage() {
  const sheets = Object.values(sdsRecords);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-anthracite">
        <Image
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          priority
          className="-z-20 object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-brand-anthracite/75" aria-hidden="true" />
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-brand-clean sm:text-5xl">
            Safety Data Sheets
          </h1>
          <p className="max-w-2xl text-lg text-brand-clean/80">
            GHS classification summaries for our chemical catalog. Review hazard
            pictograms, precautionary statements, and download full PDF
            documentation.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
        {sheets.map((sds) => (
          <div key={sds.productId} id={sds.productId}>
            <SafetyDataSheetViewer
              pdfUrl={sds.pdfUrl}
              data={sds}
            />
          </div>
        ))}
      </div>
    </>
  );
}
