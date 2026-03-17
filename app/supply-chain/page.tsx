import type { Metadata } from "next";
import Image from "next/image";
import {
  Globe,
  Warehouse,
  Truck,
  ArrowRight,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { Stepper } from "@/components/ui/stepper";

export const metadata: Metadata = {
  title: "Supply Chain & Logistics",
  description:
    "Learn how Greenhills Chemicals moves high-purity chemicals from global manufacturers to your doorstep through secure sourcing, certified storage, and reliable last-mile delivery.",
  openGraph: {
    title: "Supply Chain & Logistics — Greenhills Chemicals Incorporated",
    description:
      "From global manufacturer to local client — our end-to-end supply chain ensures quality, safety, and on-time delivery.",
  },
};

interface NetworkCard {
  icon: React.ElementType;
  title: string;
  description: string;
  highlights: string[];
}

const networkCards: NetworkCard[] = [
  {
    icon: Globe,
    title: "Sourcing",
    description:
      "We partner with ISO-certified manufacturers across Asia, Europe, and the Americas to secure competitively priced, high-purity feedstocks. Every supplier undergoes a rigorous qualification audit before entering our approved vendor list.",
    highlights: [
      "Global supplier network across 12+ countries",
      "ISO 9001 & ISO 14001 qualified vendors",
      "Dual-sourcing strategy for supply resilience",
    ],
  },
  {
    icon: Warehouse,
    title: "Storage",
    description:
      "Our warehousing infrastructure spans climate-controlled, hazmat-rated, and bonded facilities across the Philippines. All storage sites comply with DENR and FDA-PH regulations, with 24/7 monitoring and regular third-party audits.",
    highlights: [
      "Hazmat-rated & climate-controlled warehouses",
      "DENR & FDA-PH compliant facilities",
      "28,500 MT combined monthly capacity",
    ],
  },
  {
    icon: Truck,
    title: "Last-Mile Delivery",
    description:
      "From our regional hubs to your receiving dock, we manage the final leg with GPS-tracked tankers and dedicated delivery crews trained in chemical handling. Real-time tracking keeps you informed at every step.",
    highlights: [
      "GPS-tracked fleet with real-time updates",
      "HAZMAT-certified drivers & handlers",
      "Same-day dispatch in Metro Cebu & NCR",
    ],
  },
];

const journeySteps = [
  {
    label: "Global Manufacturer",
    description:
      "The chemical is produced at an ISO-certified facility overseas and undergoes outbound quality control testing before export.",
  },
  {
    label: "International Freight & Customs",
    description:
      "Containerized shipments travel via sea or air freight. Our customs brokerage team handles import documentation, tariff classification, and Bureau of Customs clearance.",
  },
  {
    label: "Greenhills Chemicals — Receiving & QC",
    description:
      "Upon arrival at our Mandaue City headquarters, every lot is inspected, sampled, and tested against the Certificate of Analysis before being released to inventory.",
  },
  {
    label: "Certified Warehousing",
    description:
      "Approved stock is transferred to the appropriate storage facility — temperature-controlled, dry, or hazmat-rated — based on its Safety Data Sheet requirements.",
  },
  {
    label: "Order Processing & Dispatch",
    description:
      "When you place an order, our logistics team picks, packs, and labels your consignment within 24 hours, generating all required shipping documents and SDS copies.",
  },
  {
    label: "Last-Mile Delivery to Client",
    description:
      "A GPS-tracked, HAZMAT-certified vehicle delivers the chemical to your facility. You receive real-time tracking updates and a signed proof of delivery upon completion.",
  },
];

export default function SupplyChainPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-anthracite">
        <Image
          src="https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          priority
          className="-z-20 object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-brand-anthracite/75" aria-hidden="true" />
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="flex items-center gap-3">
            <Truck className="h-8 w-8 text-brand-mint" aria-hidden="true" />
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-mint">
              End-to-End Logistics
            </span>
          </div>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-brand-clean sm:text-5xl">
            Supply Chain &amp; Logistics
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-brand-clean/70">
            From global manufacturer to your receiving dock — we manage every
            link in the chain so you can focus on what you do best.
          </p>
        </div>
      </section>

      {/* Our Network — card grid */}
      <section
        aria-labelledby="network-heading"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <h2
          id="network-heading"
          className="text-3xl font-bold tracking-tight text-brand-anthracite sm:text-4xl"
        >
          Our Network
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-brand-anthracite/70">
          Three capabilities, one seamless pipeline — every stage is designed
          for safety, speed, and regulatory compliance.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {networkCards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="flex flex-col rounded-2xl border border-brand-border bg-brand-clean p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-mint/15">
                  <Icon
                    className="h-7 w-7 text-brand-mint"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-bold text-brand-anthracite">
                  {card.title}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-brand-anthracite/70">
                  {card.description}
                </p>
                <ul className="mt-6 space-y-2 border-t border-brand-border pt-6">
                  {card.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-brand-anthracite/80"
                    >
                      <ShieldCheck
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-mint"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      {/* Journey Stepper */}
      <section
        aria-labelledby="journey-heading"
        className="bg-brand-light"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <ArrowRight
              className="h-7 w-7 text-brand-mint"
              aria-hidden="true"
            />
            <h2
              id="journey-heading"
              className="text-3xl font-bold tracking-tight text-brand-anthracite sm:text-4xl"
            >
              Journey of a Chemical
            </h2>
          </div>
          <p className="mt-4 max-w-2xl text-lg text-brand-anthracite/70">
            Follow a single product from the factory floor to your facility — six
            controlled steps that guarantee quality and traceability.
          </p>

          <div className="mt-14 max-w-2xl rounded-2xl border border-brand-border bg-brand-clean p-8 shadow-sm sm:p-10">
            <Stepper steps={journeySteps} />
          </div>
        </div>
      </section>

      {/* Commitment banner */}
      <section className="bg-brand-anthracite">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:px-8">
          <Clock className="h-10 w-10 text-brand-mint" aria-hidden="true" />
          <h2 className="text-2xl font-bold text-brand-clean sm:text-3xl">
            On-Time, Every Time
          </h2>
          <p className="max-w-xl text-brand-clean/70">
            Our 97.5&nbsp;% on-time delivery rate means you can plan production
            with confidence. Need urgent supply? Ask about our express dispatch
            program.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center rounded-md bg-brand-mint px-6 py-3 text-sm font-semibold text-brand-anthracite transition-colors hover:bg-brand-mint/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint focus-visible:ring-offset-2 focus-visible:ring-offset-brand-anthracite"
          >
            Request Express Delivery
          </a>
        </div>
      </section>
    </div>
  );
}
