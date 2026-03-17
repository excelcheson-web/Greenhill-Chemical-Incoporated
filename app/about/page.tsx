import type { Metadata } from "next";
import Image from "next/image";
import {
  Building2,
  ShieldCheck,
  Globe,
  FileCheck2,
  Handshake,
  FlaskConical,
  Award,
  ArrowRight,
  Search,
  Truck,
  Scale,
  ClipboardCheck,
  User,
  Clock,
  Beaker,
  ShieldAlert,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Greenhills Chemicals Incorporated bridges global chemical innovation and local industrial needs. Learn about our story, our strategic sourcing model, and our commitment to ISO & safety compliance.",
  openGraph: {
    title: "About — Greenhills Chemicals Incorporated",
    description:
      "Your trusted bridge between world-class chemical manufacturers and local Philippine industry.",
  },
};

interface ComplianceBadge {
  icon: React.ElementType;
  label: string;
}

const complianceBadges: ComplianceBadge[] = [
  { icon: Award, label: "ISO 9001 — Quality Management" },
  { icon: ShieldCheck, label: "ISO 14001 — Environmental Management" },
  { icon: FileCheck2, label: "ISO 45001 — Occupational Health & Safety" },
  { icon: FlaskConical, label: "GHS / Globally Harmonized System" },
  { icon: Handshake, label: "Responsible Care® Partner" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-anthracite">
        <Image
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          priority
          className="-z-20 object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-brand-anthracite/75" aria-hidden="true" />
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="flex items-center gap-3">
            <Building2
              className="h-8 w-8 text-brand-mint"
              aria-hidden="true"
            />
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-mint">
              Who We Are
            </span>
          </div>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-brand-clean sm:text-5xl">
            About Greenhills Chemicals
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-brand-clean/70">
            Headquartered in Mandaue City, Cebu, we are a top-tier chemical
            supplier connecting world-class manufacturers with the industries
            that power the Philippines and Southeast Asia.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section
        aria-labelledby="overview-heading"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-brand-mint">
          Our Story
        </span>
        <h2
          id="overview-heading"
          className="mt-3 text-3xl font-bold tracking-tight text-brand-anthracite sm:text-4xl"
        >
          9+ Years of Chemical Supply Excellence
        </h2>
        <div className="mt-6 max-w-3xl space-y-5 text-lg leading-relaxed text-brand-anthracite/70">
          <p>
            For more than 9&nbsp;years, Greenhills Chemicals Incorporated has
            served as a cornerstone of the chemical supply chain in the
            Philippines. Founded on the principle that industrial growth
            requires not just chemicals, but a reliable bridge to global
            innovation, we have evolved from a local distributor into a
            strategic sourcing partner for the mining, agricultural, and
            manufacturing sectors.
          </p>
          <p>
            While others focus on production, we focus on{" "}
            <strong className="text-brand-anthracite">precision</strong>. Our
            decade of experience has allowed us to master the complexities of
            chemical logistics, ensuring that high-purity materials — from
            Cerium Oxide to Sodium Cyanide — reach your site safely,
            compliantly, and on time.
          </p>
        </div>

        {/* Core values grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Reliability",
              text: "9+ years of uninterrupted supply. Our clients count on consistent quality and on-time delivery, batch after batch.",
            },
            {
              icon: Globe,
              title: "Global Sourcing",
              text: "A curated network of 40+ manufacturer-partners across 12 countries, giving you access to the world\u2019s best chemical grades.",
            },
            {
              icon: ShieldAlert,
              title: "Safety Compliance",
              text: "Full ISO 9001, 14001 & 45001 alignment. Every shipment includes verified SDS, CoA, and GHS-compliant labelling.",
            },
          ].map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.title}
                className="rounded-2xl border border-brand-border bg-brand-light p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-mint/15">
                  <Icon
                    className="h-6 w-6 text-brand-mint"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg font-bold text-brand-anthracite">
                  {val.title}
                </h3>
                <p className="mt-2 leading-relaxed text-brand-anthracite/70">
                  {val.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Strategic Sourcing — primary focus section */}
      <section
        aria-labelledby="strategic-sourcing-heading"
        className="bg-brand-light"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Globe
              className="h-7 w-7 text-brand-mint"
              aria-hidden="true"
            />
            <h2
              id="strategic-sourcing-heading"
              className="text-3xl font-bold tracking-tight text-brand-anthracite sm:text-4xl"
            >
              Strategic Sourcing
            </h2>
          </div>

          <div className="mt-8 grid gap-12 lg:grid-cols-2">
            {/* Copy block */}
            <div className="max-w-xl space-y-5 text-lg leading-relaxed text-brand-anthracite/70">
              <p>
                Greenhills Chemicals acts as a <strong className="text-brand-anthracite">strategic bridge between
                global chemical innovation and local industrial needs</strong>.
                We continuously scan international markets for the latest
                advances in specialty and commodity chemicals, then deliver
                those solutions to Philippine manufacturers in a format that
                fits their scale, timeline, and regulatory environment.
              </p>
              <p>
                Our sourcing desk evaluates every potential supplier against a
                rigorous qualification matrix. Before a single kilogram enters
                our supply chain, the manufacturer must demonstrate full
                compliance with <strong className="text-brand-anthracite">ISO 9001 (Quality Management)</strong>,{" "}
                <strong className="text-brand-anthracite">ISO 14001 (Environmental Management)</strong>, and{" "}
                <strong className="text-brand-anthracite">ISO 45001 (Occupational Health &amp; Safety)</strong>.
                We also require adherence to the Globally Harmonized System
                (GHS) of classification and labelling, as well as alignment
                with Responsible Care® principles.
              </p>
              <p>
                This uncompromising vetting process means our clients never have
                to second-guess the origin, purity, or safety profile of the
                chemicals they receive. Every Certificate of Analysis is
                cross-verified by our in-house quality-control laboratory in
                Mandaue City before stock is released to inventory.
              </p>
              <p>
                By consolidating demand across multiple customers and leveraging
                long-term volume agreements, we negotiate pricing that
                individual buyers cannot achieve independently — passing those
                savings on while maintaining the highest quality and compliance
                standards in the industry.
              </p>
            </div>

            {/* Compliance badges card */}
            <div className="flex flex-col justify-center">
              <div className="rounded-2xl border border-brand-border bg-brand-clean p-8 shadow-sm">
                <h3 className="text-lg font-bold text-brand-anthracite">
                  Supplier Compliance Requirements
                </h3>
                <p className="mt-2 text-sm text-brand-anthracite/60">
                  Every vendor must satisfy all of the following before
                  qualification:
                </p>
                <ul className="mt-6 space-y-4">
                  {complianceBadges.map((badge) => {
                    const Icon = badge.icon;
                    return (
                      <li
                        key={badge.label}
                        className="flex items-center gap-3"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-mint/15">
                          <Icon
                            className="h-5 w-5 text-brand-mint"
                            aria-hidden="true"
                          />
                        </div>
                        <span className="text-sm font-medium text-brand-anthracite">
                          {badge.label}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        aria-labelledby="values-heading"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <h2
          id="values-heading"
          className="text-3xl font-bold tracking-tight text-brand-anthracite sm:text-4xl"
        >
          What Sets Us Apart
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Uncompromising Quality",
              text: "In-house QC lab cross-verifies every Certificate of Analysis before product release.",
            },
            {
              icon: Globe,
              title: "Global Reach, Local Presence",
              text: "40+ manufacturer-partners across 12 countries, with same-day dispatch in Metro Cebu and NCR.",
            },
            {
              icon: Handshake,
              title: "Partnership-First Model",
              text: "We grow with our customers — offering flexible packaging, credit terms, and technical support.",
            },
          ].map((value) => {
            const Icon = value.icon;
            return (
              <article
                key={value.title}
                className="rounded-2xl border border-brand-border bg-brand-clean p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-mint/15">
                  <Icon
                    className="h-6 w-6 text-brand-mint"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg font-bold text-brand-anthracite">
                  {value.title}
                </h3>
                <p className="mt-2 leading-relaxed text-brand-anthracite/70">
                  {value.text}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* The Greenhills Advantage */}
      <section
        aria-labelledby="advantage-heading"
        className="bg-brand-anthracite"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-mint">
            Why Partner With Us
          </span>
          <h2
            id="advantage-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-brand-clean sm:text-4xl"
          >
            The Greenhills Advantage
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-brand-clean/70">
            In the complex world of industrial and agrochemicals, bigger
            isn&apos;t always better&nbsp;&mdash; agility is. While
            manufacturers are focused on their own production outputs,
            Greenhills Chemicals is focused entirely on{" "}
            <strong className="text-brand-clean">your operational outcomes</strong>.
          </p>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {([
              {
                icon: Search,
                number: "01",
                title: "Unbiased Sourcing",
                text: "We aren\u2019t limited to what one factory can produce. We curate the best chemical grades from a global network of top-tier manufacturers, ensuring you get the exact purity your project requires.",
              },
              {
                icon: Truck,
                number: "02",
                title: "Logistics as a Service",
                text: "Manufacturers often stop at the factory gate. We manage the entire \u201Clast-mile\u201D supply chain, navigating the regulatory hurdles of chemical transport to deliver directly to your site.",
              },
              {
                icon: Scale,
                number: "03",
                title: "Customized Volume",
                text: "Large manufacturers often ignore smaller, specialized orders. At Greenhills, we provide scalable solutions\u2014whether you need a single IBC for a pilot project or bulk shipments for full-scale mining.",
              },
              {
                icon: ClipboardCheck,
                number: "04",
                title: "A Single Point of Compliance",
                text: "Instead of managing 10 different manufacturer relationships, you get one partner who handles all Safety Data Sheets (SDS), Certificates of Analysis (CoA), and regulatory vetting for your entire chemical inventory.",
              },
            ] as const).map((adv) => {
              const Icon = adv.icon;
              return (
                <article
                  key={adv.number}
                  className="group relative rounded-2xl border border-brand-clean/10 bg-brand-clean/5 p-8 transition-colors hover:border-brand-mint/30 hover:bg-brand-clean/10"
                >
                  {/* Number watermark */}
                  <span
                    className="absolute right-6 top-6 text-5xl font-black leading-none text-brand-clean/5 transition-colors group-hover:text-brand-mint/10"
                    aria-hidden="true"
                  >
                    {adv.number}
                  </span>

                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-mint/15">
                    <Icon
                      className="h-6 w-6 text-brand-mint"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-brand-clean">
                    {adv.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-brand-clean/70">
                    {adv.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section
        aria-labelledby="leadership-heading"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-brand-mint">
          Leadership
        </span>
        <h2
          id="leadership-heading"
          className="mt-3 text-3xl font-bold tracking-tight text-brand-anthracite sm:text-4xl"
        >
          Meet Our CEO
        </h2>

        <div className="mt-10 grid items-start gap-12 lg:grid-cols-5">
          {/* Portrait placeholder — 2 cols */}
          <div className="lg:col-span-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-brand-light">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                alt="Alfredo Sanchez, CEO of Greenhills Chemicals Incorporated"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              {/* Name overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-anthracite/90 to-transparent px-6 pb-6 pt-16">
                <p className="text-xl font-bold text-brand-clean">
                  Alfredo Sanchez
                </p>
                <p className="text-sm font-medium text-brand-mint">
                  Chief Executive Officer
                </p>
              </div>
            </div>
          </div>

          {/* Biography — 3 cols */}
          <div className="space-y-5 text-lg leading-relaxed text-brand-anthracite/70 lg:col-span-3">
            <p>
              With a career defined by strategic vision and industrial
              excellence, <strong className="text-brand-anthracite">Alfredo Sanchez</strong>{" "}
              has led Greenhills Chemicals Incorporated through nearly a decade
              of sustained growth. Under his leadership, the company has
              expanded its footprint across the archipelago, specifically
              focusing on the specialized needs of the gold mining industry in
              regions like Quezon and Masbate.
            </p>
            <p>
              Alfredo&apos;s philosophy is built on{" "}
              <strong className="text-brand-anthracite">Transparency and Technical Integrity</strong>.
              He believes that a chemical supplier&apos;s greatest asset is the
              trust of their clients, which is why Greenhills maintains the
              highest standards of ISO compliance and safety under his direct
              oversight.
            </p>

            {/* Quick highlights */}
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Clock, label: "9+ years leading Greenhills" },
                { icon: Globe, label: "Expanded to 6 regional facilities" },
                { icon: Beaker, label: "Mining & industrial sector focus" },
                { icon: ShieldCheck, label: "Direct ISO compliance oversight" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl border border-brand-border bg-brand-light p-4"
                  >
                    <Icon
                      className="h-5 w-5 flex-shrink-0 text-brand-mint"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium text-brand-anthracite">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-light">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-anthracite sm:text-3xl">
            Ready to Work with a Trusted Partner?
          </h2>
          <p className="max-w-xl text-brand-anthracite/70">
            Whether you need a single drum or a full container load, our team is
            ready to match you with the right product at the right price.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-brand-mint px-6 py-3 text-sm font-semibold text-brand-anthracite transition-colors hover:bg-brand-mint/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint focus-visible:ring-offset-2 focus-visible:ring-offset-brand-light"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* Trust Bar */}
      <section
        aria-label="Key statistics"
        className="border-t border-brand-border bg-brand-anthracite"
      >
        <div className="mx-auto grid max-w-7xl gap-px sm:grid-cols-3">
          {[
            { value: "9+", label: "Years of Excellence" },
            { value: "11+", label: "Specialized Chemicals" },
            { value: "100%", label: "Safety Compliance" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 px-6 py-10 text-center"
            >
              <span className="text-4xl font-black tracking-tight text-brand-mint sm:text-5xl">
                {stat.value}
              </span>
              <span className="text-sm font-medium uppercase tracking-wider text-brand-clean/70">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
