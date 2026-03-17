"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ScrollStage } from "@/components/ui/scroll-stage";
import { SourcingGlobe } from "@/components/ui/sourcing-globe";

export function Scrollytelling() {
  return (
    <div>
      {/* ── Stage 1 — Global Sourcing ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-anthracite">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-32">
          <ScrollStage index={0}>
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-mint">
              Stage 1 — Global Sourcing
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-clean sm:text-4xl">
              We Source from the World&rsquo;s Best
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-brand-clean/70">
              Our procurement desk connects with ISO-certified manufacturers
              across 12&nbsp;countries — from specialty catalysts in Japan to
              commodity acids in China — ensuring price-competitive,
              high-purity feedstocks reach the Philippines on schedule.
            </p>
            <ul className="mt-6 space-y-2">
              {[
                "40+ qualified manufacturer-partners",
                "Dual-sourcing strategy for supply resilience",
                "Every vendor ISO 9001 & ISO 14001 certified",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-brand-clean/60"
                >
                  <CheckCircle2
                    className="h-4 w-4 flex-shrink-0 text-brand-mint"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollStage>

          <ScrollStage index={1} className="flex justify-center">
            <SourcingGlobe />
          </ScrollStage>
        </div>
      </section>

      {/* ── Stage 2 — Warehouse Facility ──────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Full-bleed background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80"
            alt="Modern chemical warehouse facility with organized storage racks and safety equipment"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-brand-anthracite/70" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-2xl">
            <ScrollStage index={0}>
              <span className="text-sm font-semibold uppercase tracking-widest text-brand-mint">
                Stage 2 — Storage &amp; Safety
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-clean sm:text-4xl">
                World-Class Warehousing
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-brand-clean/70">
                28,500&nbsp;MT of combined monthly capacity across
                climate-controlled, hazmat-rated, and bonded facilities.
                Every site is DENR &amp; FDA-PH compliant with 24/7
                monitoring and third-party audits.
              </p>
            </ScrollStage>

            <ScrollStage index={1}>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { value: "28,500 MT", label: "Monthly Capacity" },
                  { value: "24 / 7", label: "Facility Monitoring" },
                  { value: "6", label: "Regional Facilities" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-brand-clean/10 bg-brand-clean/5 p-6 text-center backdrop-blur-sm"
                  >
                    <p className="text-3xl font-bold text-brand-mint">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-brand-clean/60">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollStage>
          </div>
        </div>
      </section>

      {/* ── Stage 3 — Quality Assurance ───────────────────────────── */}
      <section className="bg-brand-light">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-32">
          {/* Image side */}
          <ScrollStage index={0} className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl bg-brand-light">
              <Image
                src="/images/quality-seal.png"
                alt="Premium Quality seal badge — Greenhills Chemicals quality assurance"
                fill
                className="object-contain p-8"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* QC Seal overlay */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-brand-mint px-4 py-2 shadow-lg">
                <CheckCircle2
                  className="h-5 w-5 text-brand-anthracite"
                  aria-hidden="true"
                />
                <span className="text-sm font-bold text-brand-anthracite">
                  Quality Verified
                </span>
              </div>
            </div>
          </ScrollStage>

          {/* Copy side */}
          <ScrollStage index={1} className="order-1 lg:order-2">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-mint">
              Stage 3 — Quality Assurance
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-anthracite sm:text-4xl">
              Every Lot. Every Time.
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-brand-anthracite/70">
              Before any product is released to inventory, our in-house QC
              laboratory cross-verifies the Certificate of Analysis against
              the manufacturer&rsquo;s spec. Only stock that passes is
              stamped &ldquo;Quality Checked&rdquo; and cleared for dispatch.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "In-house QC lab in Mandaue City, Cebu",
                "CoA cross-verification on every lot",
                "GHS-compliant labelling and SDS bundling",
                "Full traceability from manufacturer to delivery",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-brand-anthracite/70"
                >
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-mint"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollStage>
        </div>
      </section>

      {/* ── Final Stage — CTA ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-anthracite">
        {/* Subtle bg pattern */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.04]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300FFC2' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 lg:py-36">
          <ScrollStage index={0} className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-mint">
              Ready to Partner?
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-brand-clean sm:text-5xl">
              Let&rsquo;s Move Your Supply Chain Forward
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-brand-clean/60">
              From a single drum to a full container load — our team will
              match you with the right product, the right spec, and the right
              price.
            </p>
          </ScrollStage>

          <ScrollStage index={1} className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-mint px-8 py-4 text-base font-bold text-brand-anthracite shadow-lg shadow-brand-mint/20 transition-all hover:scale-[1.03] hover:bg-brand-mint/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint focus-visible:ring-offset-2 focus-visible:ring-offset-brand-anthracite"
            >
              Request a Quote
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </ScrollStage>
        </div>
      </section>
    </div>
  );
}
