import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Greenhills Chemicals Incorporated for chemical procurement inquiries, bulk orders, custom formulations, and technical support.",
  openGraph: {
    title: "Contact Us — Greenhills Chemicals Incorporated",
    description:
      "Reach our team for industrial chemical procurement, bulk pricing, and SDS requests.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-anthracite">
        <Image
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          priority
          className="-z-20 object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-brand-anthracite/75" aria-hidden="true" />
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-brand-clean sm:text-5xl">
            Contact Us
          </h1>
          <p className="max-w-2xl text-lg text-brand-clean/80">
            Have a procurement inquiry or need technical assistance? Fill out the
            form below and our team will respond within 24 hours.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Form — spans 2 cols on large screens */}
          <div className="lg:col-span-2">
            <div className="rounded-lg border border-brand-border bg-white p-6 shadow-sm sm:p-8">
              <ContactForm />
            </div>
          </div>

          {/* Sidebar info */}
          <aside aria-label="Contact information">
            <div className="space-y-6">
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-mint/10">
                  <Mail className="h-5 w-5 text-brand-anthracite" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-brand-anthracite">Email</h2>
                  <a
                    href="mailto:sales@greenhillschemicals.com"
                    className="text-sm text-brand-anthracite/70 underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-brand-mint focus:ring-offset-2"
                  >
                    sales@greenhillschemicals.com
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-mint/10">
                  <Phone className="h-5 w-5 text-brand-anthracite" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-brand-anthracite">Phone</h2>
                  <a
                    href="tel:+1-555-GHC-CHEM"
                    className="text-sm text-brand-anthracite/70 underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-brand-mint focus:ring-offset-2"
                  >
                    +1 (555) GHC-CHEM
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-mint/10">
                  <MapPin className="h-5 w-5 text-brand-anthracite" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-brand-anthracite">Office</h2>
                  <p className="text-sm text-brand-anthracite/70">
                    123 Greenhills Industrial Park
                    <br />
                    San Juan, Metro Manila
                    <br />
                    Philippines
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
