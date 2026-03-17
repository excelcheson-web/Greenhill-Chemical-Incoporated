import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Truck, Globe, Building2, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Operations",
  description:
    "Explore Greenhills Chemicals' supply chain operations, distribution network, and regional logistics across the Philippines and Southeast Asia.",
  openGraph: {
    title: "Operations — Greenhills Chemicals Incorporated",
    description:
      "Our supply chain and distribution network spanning key regions across the Philippines and Southeast Asia.",
  },
};

interface DistributionEntry {
  region: string;
  facility: string;
  capacity: string;
  contactPerson: string;
  phone: string;
}

const distributionNetwork: DistributionEntry[] = [
  {
    region: "Central Visayas",
    facility: "Mandaue City HQ",
    capacity: "5,000 MT/month",
    contactPerson: "Engr. Marco R. Dela Cruz",
    phone: "+63 32 345 6789",
  },
  {
    region: "Metro Manila / NCR",
    facility: "Pasig Logistics Hub",
    capacity: "8,000 MT/month",
    contactPerson: "Dr. Patricia S. Reyes",
    phone: "+63 2 8765 4321",
  },
  {
    region: "Northern Mindanao",
    facility: "Cagayan de Oro Depot",
    capacity: "3,000 MT/month",
    contactPerson: "Engr. Jose M. Santos",
    phone: "+63 88 856 1234",
  },
  {
    region: "Western Visayas",
    facility: "Iloilo Distribution Center",
    capacity: "2,500 MT/month",
    contactPerson: "Ms. Angela T. Navarro",
    phone: "+63 33 337 5678",
  },
  {
    region: "CALABARZON",
    facility: "Batangas Chemical Terminal",
    capacity: "6,000 MT/month",
    contactPerson: "Engr. Rafael C. Lim",
    phone: "+63 43 723 9012",
  },
  {
    region: "Southeast Asia Export",
    facility: "Cebu International Port",
    capacity: "4,000 MT/month",
    contactPerson: "Mr. David K. Ong",
    phone: "+63 32 254 3456",
  },
];

function SupplyChainMap() {
  return (
    <svg
      viewBox="0 0 800 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Map of the Philippines highlighting Greenhills Chemicals supply chain locations including Mandaue City headquarters in Cebu and regional distribution points"
      className="mx-auto h-auto w-full max-w-2xl"
    >
      {/* Ocean background */}
      <rect width="800" height="900" rx="16" fill="#EBF5FB" />

      {/* Grid lines for reference */}
      {[150, 300, 450, 600].map((x) => (
        <line
          key={`v-${x}`}
          x1={x}
          y1={40}
          x2={x}
          y2={860}
          stroke="#D5E8F0"
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />
      ))}
      {[150, 300, 450, 600, 750].map((y) => (
        <line
          key={`h-${y}`}
          x1={40}
          y1={y}
          x2={760}
          y2={y}
          stroke="#D5E8F0"
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />
      ))}

      {/* Luzon island group (simplified) */}
      <path
        d="M350 100 L420 120 L460 160 L470 220 L480 280 L460 340 L430 360 L400 370 L370 360 L340 310 L320 260 L300 220 L310 160 Z"
        fill="#2D3436"
        fillOpacity="0.12"
        stroke="#2D3436"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <text
        x="390"
        y="210"
        textAnchor="middle"
        fill="#2D3436"
        fontSize="16"
        fontWeight="600"
        opacity="0.7"
      >
        LUZON
      </text>

      {/* Visayas island group (simplified) */}
      <path
        d="M280 420 L340 410 L400 420 L450 440 L470 470 L460 510 L420 530 L370 540 L320 530 L280 500 L260 460 Z"
        fill="#2D3436"
        fillOpacity="0.12"
        stroke="#2D3436"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <text
        x="370"
        y="475"
        textAnchor="middle"
        fill="#2D3436"
        fontSize="16"
        fontWeight="600"
        opacity="0.7"
      >
        VISAYAS
      </text>

      {/* Cebu island detail */}
      <path
        d="M400 430 L420 445 L430 480 L425 510 L410 525 L395 520 L385 490 L388 455 Z"
        fill="#00FFC2"
        fillOpacity="0.25"
        stroke="#00FFC2"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Mindanao island group (simplified) */}
      <path
        d="M280 600 L360 580 L440 590 L500 630 L510 690 L490 740 L440 770 L370 780 L310 760 L270 710 L260 650 Z"
        fill="#2D3436"
        fillOpacity="0.12"
        stroke="#2D3436"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <text
        x="390"
        y="690"
        textAnchor="middle"
        fill="#2D3436"
        fontSize="16"
        fontWeight="600"
        opacity="0.7"
      >
        MINDANAO
      </text>

      {/* Supply route lines */}
      {/* HQ Cebu → Metro Manila */}
      <line
        x1="415"
        y1="475"
        x2="430"
        y2="310"
        stroke="#00FFC2"
        strokeWidth="2"
        strokeDasharray="8 4"
        opacity="0.7"
      />
      {/* HQ Cebu → Batangas */}
      <line
        x1="415"
        y1="475"
        x2="370"
        y2="355"
        stroke="#00FFC2"
        strokeWidth="2"
        strokeDasharray="8 4"
        opacity="0.7"
      />
      {/* HQ Cebu → Iloilo */}
      <line
        x1="415"
        y1="475"
        x2="310"
        y2="490"
        stroke="#00FFC2"
        strokeWidth="2"
        strokeDasharray="8 4"
        opacity="0.7"
      />
      {/* HQ Cebu → Cagayan de Oro */}
      <line
        x1="415"
        y1="475"
        x2="410"
        y2="640"
        stroke="#00FFC2"
        strokeWidth="2"
        strokeDasharray="8 4"
        opacity="0.7"
      />
      {/* HQ Cebu → Export Port */}
      <line
        x1="415"
        y1="475"
        x2="480"
        y2="480"
        stroke="#00FFC2"
        strokeWidth="2"
        strokeDasharray="8 4"
        opacity="0.7"
      />

      {/* Location markers */}
      {/* Metro Manila / NCR */}
      <circle cx="430" cy="310" r="8" fill="#00FFC2" stroke="#2D3436" strokeWidth="2" />
      <text x="448" y="308" fill="#2D3436" fontSize="12" fontWeight="600">
        Metro Manila
      </text>
      <text x="448" y="322" fill="#2D3436" fontSize="10" opacity="0.7">
        8,000 MT/mo
      </text>

      {/* Batangas / CALABARZON */}
      <circle cx="370" cy="355" r="7" fill="#00FFC2" stroke="#2D3436" strokeWidth="2" />
      <text x="280" y="350" fill="#2D3436" fontSize="12" fontWeight="600">
        Batangas
      </text>
      <text x="280" y="364" fill="#2D3436" fontSize="10" opacity="0.7">
        6,000 MT/mo
      </text>

      {/* Mandaue City HQ — Cebu (primary, larger marker) */}
      <circle cx="415" cy="475" r="12" fill="#00FFC2" stroke="#2D3436" strokeWidth="3" />
      <circle cx="415" cy="475" r="5" fill="#2D3436" />
      {/* Pulse ring */}
      <circle
        cx="415"
        cy="475"
        r="20"
        fill="none"
        stroke="#00FFC2"
        strokeWidth="2"
        opacity="0.4"
      >
        <animate
          attributeName="r"
          from="14"
          to="28"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          from="0.6"
          to="0"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      <text x="435" y="465" fill="#2D3436" fontSize="13" fontWeight="700">
        Mandaue City HQ
      </text>
      <text x="435" y="480" fill="#2D3436" fontSize="10" opacity="0.7">
        5,000 MT/mo · Headquarters
      </text>

      {/* Iloilo / Western Visayas */}
      <circle cx="310" cy="490" r="7" fill="#00FFC2" stroke="#2D3436" strokeWidth="2" />
      <text x="230" y="505" fill="#2D3436" fontSize="12" fontWeight="600">
        Iloilo
      </text>
      <text x="220" y="519" fill="#2D3436" fontSize="10" opacity="0.7">
        2,500 MT/mo
      </text>

      {/* Cagayan de Oro / N. Mindanao */}
      <circle cx="410" cy="640" r="7" fill="#00FFC2" stroke="#2D3436" strokeWidth="2" />
      <text x="428" y="638" fill="#2D3436" fontSize="12" fontWeight="600">
        Cagayan de Oro
      </text>
      <text x="428" y="652" fill="#2D3436" fontSize="10" opacity="0.7">
        3,000 MT/mo
      </text>

      {/* Cebu International Port (export) */}
      <circle cx="480" cy="480" r="7" fill="#00FFC2" stroke="#2D3436" strokeWidth="2" />
      <text x="498" y="495" fill="#2D3436" fontSize="12" fontWeight="600">
        Cebu Port
      </text>
      <text x="498" y="509" fill="#2D3436" fontSize="10" opacity="0.7">
        4,000 MT/mo · Export
      </text>

      {/* Legend */}
      <rect x="40" y="800" width="250" height="80" rx="8" fill="#FFFFFF" stroke="#DFE6E9" strokeWidth="1" />
      <circle cx="65" cy="825" r="8" fill="#00FFC2" stroke="#2D3436" strokeWidth="2" />
      <circle cx="65" cy="825" r="3" fill="#2D3436" />
      <text x="82" y="830" fill="#2D3436" fontSize="12" fontWeight="600">
        Headquarters
      </text>
      <circle cx="65" cy="855" r="6" fill="#00FFC2" stroke="#2D3436" strokeWidth="2" />
      <text x="82" y="860" fill="#2D3436" fontSize="12" fontWeight="600">
        Distribution Point
      </text>
      <line x1="170" y1="847" x2="200" y2="847" stroke="#00FFC2" strokeWidth="2" strokeDasharray="6 3" />
      <text x="208" y="852" fill="#2D3436" fontSize="12" fontWeight="600">
        Supply Route
      </text>

      {/* Title in map */}
      <text x="400" y="60" textAnchor="middle" fill="#2D3436" fontSize="20" fontWeight="700">
        Greenhills Chemicals — Supply Chain Map
      </text>
      <text x="400" y="82" textAnchor="middle" fill="#2D3436" fontSize="13" opacity="0.6">
        Philippines &amp; Southeast Asia Operations
      </text>
    </svg>
  );
}

export default function OperationsPage() {
  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="operations-heading"
        className="relative isolate overflow-hidden bg-brand-anthracite"
      >
        <Image
          src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          priority
          className="-z-20 object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-brand-anthracite/70" aria-hidden="true" />
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <h1
            id="operations-heading"
            className="text-3xl font-bold tracking-tight text-brand-clean sm:text-5xl"
          >
            Operations &amp; Distribution
          </h1>
          <p className="max-w-3xl text-lg text-brand-clean/80">
            Headquartered at M.L Quezon St. Casuntingan, Mandaue City, Cebu,
            Philippines — Greenhills Chemicals operates an integrated supply chain
            spanning key economic zones across the Philippines and Southeast Asia.
          </p>

          {/* HQ address card */}
          <div className="mt-4 flex items-start gap-4 rounded-xl border border-brand-clean/20 bg-brand-clean/10 p-6 backdrop-blur sm:max-w-lg">
            <Building2
              className="mt-0.5 h-6 w-6 flex-shrink-0 text-brand-mint"
              aria-hidden="true"
            />
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-mint">
                Corporate Headquarters
              </h2>
              <address className="mt-1 text-sm not-italic leading-relaxed text-brand-clean/80">
                M.L Quezon St. Casuntingan
                <br />
                Mandaue City, Cebu
                <br />
                Philippines
              </address>
            </div>
          </div>
        </div>
      </section>

    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

      {/* Supply Chain Map */}
      <section aria-labelledby="supply-chain-heading" className="mb-20">
        <div className="mb-8 flex items-center gap-3">
          <Globe
            className="h-7 w-7 text-brand-mint"
            aria-hidden="true"
          />
          <h2
            id="supply-chain-heading"
            className="text-2xl font-bold text-brand-anthracite"
          >
            Supply Chain
          </h2>
        </div>
        <p className="mb-8 max-w-3xl text-brand-anthracite/70">
          Our logistics network connects manufacturing partners, raw material
          sources, and distribution terminals across the archipelago. The
          Mandaue City hub coordinates all inbound and outbound flows, with
          dedicated export capacity at Cebu International Port.
        </p>

        <div className="overflow-hidden rounded-2xl border border-brand-border bg-brand-clean p-4 shadow-sm sm:p-8">
          <SupplyChainMap />
        </div>
      </section>

      {/* Distribution Network Table */}
      <section aria-labelledby="distribution-heading" className="mb-16">
        <div className="mb-8 flex items-center gap-3">
          <Truck
            className="h-7 w-7 text-brand-mint"
            aria-hidden="true"
          />
          <h2
            id="distribution-heading"
            className="text-2xl font-bold text-brand-anthracite"
          >
            Distribution Network
          </h2>
        </div>

        <div className="overflow-x-auto rounded-xl border border-brand-border shadow-sm">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-brand-anthracite text-brand-clean">
                <th scope="col" className="whitespace-nowrap px-6 py-4 font-semibold">
                  Region
                </th>
                <th scope="col" className="whitespace-nowrap px-6 py-4 font-semibold">
                  Facility
                </th>
                <th scope="col" className="whitespace-nowrap px-6 py-4 font-semibold">
                  Capacity
                </th>
                <th scope="col" className="whitespace-nowrap px-6 py-4 font-semibold">
                  Contact Person
                </th>
                <th scope="col" className="whitespace-nowrap px-6 py-4 font-semibold">
                  <span className="sr-only">Phone</span>
                  <Phone className="inline h-4 w-4" aria-hidden="true" />
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border bg-brand-clean">
              {distributionNetwork.map((entry) => (
                <tr
                  key={entry.region}
                  className="transition-colors hover:bg-brand-light"
                >
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-brand-anthracite">
                    <span className="flex items-center gap-2">
                      <MapPin
                        className="h-4 w-4 flex-shrink-0 text-brand-mint"
                        aria-hidden="true"
                      />
                      {entry.region}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-brand-anthracite/70">
                    {entry.facility}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-mono text-sm text-brand-anthracite/70">
                    {entry.capacity}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-brand-anthracite">
                    {entry.contactPerson}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-brand-anthracite/70">
                    {entry.phone}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            {
              label: "Total Monthly Capacity",
              value: "28,500 MT",
            },
            {
              label: "Distribution Points",
              value: "6 Facilities",
            },
            {
              label: "Export Port",
              value: "Cebu International",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-brand-border bg-brand-clean p-6 text-center shadow-sm"
            >
              <p className="text-2xl font-bold text-brand-anthracite">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-brand-anthracite/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  );
}
