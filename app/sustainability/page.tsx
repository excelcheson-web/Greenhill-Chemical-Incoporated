import type { Metadata } from "next";
import Image from "next/image";
import { Leaf, Users, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Greenhills Chemicals is committed to environmental stewardship, community empowerment, and sustainable economic growth across its operations.",
  openGraph: {
    title: "Sustainability — Greenhills Chemicals Incorporated",
    description:
      "Explore our three pillars of sustainability: Environmental Stewardship, Community Empowerment, and Economic Growth.",
  },
};

interface Pillar {
  icon: React.ElementType;
  title: string;
  description: string;
}

const pillars: Pillar[] = [
  {
    icon: Leaf,
    title: "Environmental Stewardship",
    description:
      "We minimize our ecological footprint through responsible sourcing, waste reduction, and investment in green chemistry. Our facilities are ISO 14001 certified and adhere to Responsible Care principles, ensuring every chemical handled meets the highest environmental safety standards.",
  },
  {
    icon: Users,
    title: "Community Empowerment",
    description:
      "We invest in the communities surrounding our operations — from STEM scholarship programs in Cebu to livelihood training for farming cooperatives. By partnering with local organizations, we create lasting social impact that extends beyond our factory gates.",
  },
  {
    icon: TrendingUp,
    title: "Economic Growth",
    description:
      "Sustainable business means shared prosperity. We prioritize local procurement, fair supply-chain practices, and long-term partnerships that drive economic development across the Philippines and Southeast Asia while maintaining competitive pricing for our customers.",
  },
];

export default function SustainabilityPage() {
  return (
    <div>
      {/* Hero section with lush farm background */}
      <section className="relative isolate overflow-hidden bg-brand-anthracite">
        {/* Background image layer */}
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          priority
          className="-z-20 object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 -z-10 bg-brand-anthracite/60"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36 lg:px-8 lg:py-44">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-brand-clean sm:text-5xl lg:text-6xl">
            Growing a Greener Future
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-clean/80">
            At Greenhills Chemicals, sustainability isn&apos;t a department —
            it&apos;s a principle woven into every decision we make, from
            feedstock selection to final-mile delivery.
          </p>
        </div>
      </section>

      {/* Three Pillars section */}
      <section
        aria-labelledby="pillars-heading"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <h2
            id="pillars-heading"
            className="text-3xl font-bold tracking-tight text-brand-anthracite sm:text-4xl"
          >
            Three Pillars of Sustainability
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-anthracite/70">
            Our sustainability strategy rests on three interconnected pillars
            that guide how we operate, invest, and grow.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="group rounded-2xl border border-brand-border bg-brand-clean p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-mint/15">
                  <Icon
                    className="h-7 w-7 text-brand-mint"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-bold text-brand-anthracite">
                  {pillar.title}
                </h3>
                <p className="mt-3 leading-relaxed text-brand-anthracite/70">
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-brand-anthracite">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-clean sm:text-3xl">
            Partner with a Sustainable Supplier
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-clean/70">
            Looking for a chemical partner that shares your commitment to
            responsible sourcing? Let&apos;s talk.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center rounded-md bg-brand-mint px-6 py-3 text-sm font-semibold text-brand-anthracite transition-colors hover:bg-brand-mint/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint focus-visible:ring-offset-2 focus-visible:ring-offset-brand-anthracite"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
