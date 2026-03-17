import type { Metadata } from "next";
import Image from "next/image";
import { FlaskConical, FolderSearch, Table2 } from "lucide-react";
import { DocumentVault } from "@/components/sections/document-vault";
import { ProductTable } from "@/components/sections/product-table";

export const metadata: Metadata = {
  title: "Technical Catalog",
  description:
    "Access high-precision technical data sheets, safety data sheets, and certificates of analysis for industrial chemicals used in mining, agriculture, and manufacturing.",
  openGraph: {
    title: "Technical Catalog — Greenhills Chemicals Incorporated",
    description:
      "TDS, SDS, and CoA documents for 10+ industrial chemicals — searchable and filterable by industry.",
  },
};

export default function TechnicalPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-anthracite">
        <Image
          src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          priority
          className="-z-20 object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-brand-anthracite/75" aria-hidden="true" />
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="flex items-center gap-3">
            <FlaskConical
              className="h-8 w-8 text-brand-mint"
              aria-hidden="true"
            />
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-mint">
              For Engineers &amp; Procurement
            </span>
          </div>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-brand-clean sm:text-5xl">
            Technical Catalog
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-brand-clean/70">
            High-precision data that engineers, mining consultants, and
            procurement officers require — including Technical Data Sheets,
            purity certifications, Safety Data Sheets, and logistics
            compatibility profiles.
          </p>
        </div>
      </section>

      {/* Document Vault */}
      <section
        aria-labelledby="vault-heading"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mb-8 flex items-center gap-3">
          <FolderSearch
            className="h-7 w-7 text-brand-mint"
            aria-hidden="true"
          />
          <h2
            id="vault-heading"
            className="text-2xl font-bold text-brand-anthracite sm:text-3xl"
          >
            Document Vault
          </h2>
        </div>
        <p className="mb-8 max-w-2xl text-brand-anthracite/70">
          Search for any chemical and instantly access its Safety Data Sheet
          (SDS) and Certificate of Analysis (CoA).
        </p>
        <DocumentVault />
      </section>

      {/* Product Table — filterable by industry */}
      <section
        aria-labelledby="product-table-heading"
        className="bg-brand-light"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <Table2
              className="h-7 w-7 text-brand-mint"
              aria-hidden="true"
            />
            <h2
              id="product-table-heading"
              className="text-2xl font-bold text-brand-anthracite sm:text-3xl"
            >
              Product Catalog by Industry
            </h2>
          </div>
          <p className="mb-8 max-w-2xl text-brand-anthracite/70">
            Filter by Mining, Agriculture, or Industrial to find the chemicals
            relevant to your operation. Each entry links to a full technical
            profile.
          </p>
          <ProductTable />
        </div>
      </section>
    </div>
  );
}
