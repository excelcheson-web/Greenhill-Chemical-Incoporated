import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-brand-anthracite px-4 py-28 text-brand-clean sm:px-6 sm:py-36 lg:px-8 lg:py-44"
    >
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1611348586804-61bf6c080437?auto=format&fit=crop&w=1920&q=80"
        alt=""
        fill
        priority
        className="-z-20 object-cover"
        sizes="100vw"
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-anthracite/80 via-brand-anthracite/70 to-brand-anthracite/90"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-4xl text-center">
        <h1
          id="hero-heading"
          className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          Sustainable Chemical Solutions{" "}
          <span className="text-brand-mint">for a Global Market</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-clean/80">
          Like Notore and the world&rsquo;s leading chemical enterprises,
          Greenhills Chemicals Incorporated delivers high-purity, responsibly
          sourced industrial chemicals — backed by rigorous GHS compliance, full
          Safety Data Sheets, and a commitment to sustainable manufacturing.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-brand-mint px-6 py-3 text-sm font-bold text-brand-anthracite transition-colors hover:bg-brand-mint/90 focus:outline-none focus:ring-2 focus:ring-brand-mint focus:ring-offset-2 focus:ring-offset-brand-anthracite"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-md border border-brand-clean/20 px-6 py-3 text-sm font-semibold text-brand-clean transition-colors hover:bg-brand-clean/10 focus:outline-none focus:ring-2 focus:ring-brand-mint focus:ring-offset-2 focus:ring-offset-brand-anthracite"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </section>
  );
}
