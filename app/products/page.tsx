import type { Metadata } from "next";
import Image from "next/image";
import { ProductGrid } from "@/components/sections/product-grid";
import products from "@/content/products.json";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse our catalog of high-purity industrial chemicals. Download Safety Data Sheets and find CAS numbers, formulas, and purity grades.",
  openGraph: {
    title: "Chemical Products — Greenhills Chemicals Incorporated",
    description:
      "High-purity industrial chemicals with SDS downloads, CAS numbers, and eco-certifications.",
  },
};

export default function ProductsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Chemical Products",
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: `${product.name} — CAS ${product.casNumber}, purity ${product.purityGrade}`,
        identifier: product.casNumber,
      },
    })),
  };

  return (
    <>
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
          <h1 className="text-3xl font-bold tracking-tight text-brand-clean sm:text-5xl">
            Chemical Products
          </h1>
          <p className="max-w-2xl text-lg text-brand-clean/80">
            High-purity industrial chemicals with complete SDS documentation,
            CAS numbers, and eco-certifications. Built for mining, agriculture,
            water treatment, and manufacturing.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <ProductGrid />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </div>
    </>
  );
}
