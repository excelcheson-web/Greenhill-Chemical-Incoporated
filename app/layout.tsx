import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { IndustryPartners } from "@/components/sections/industry-partners";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.greenhillschemicals.com"
  ),
  title: {
    default: "Greenhills Chemicals Incorporated — Industrial Chemical Supplier",
    template: "%s | Greenhills Chemicals Incorporated",
  },
  description:
    "Top-tier supplier of high-purity industrial chemicals. Browse our catalog, download Safety Data Sheets, and find sustainable chemical solutions.",
  keywords: [
    "industrial chemicals",
    "chemical supplier",
    "chemical procurement",
    "safety data sheets",
    "SDS",
    "GHS",
    "sustainable chemicals",
    "bulk chemicals",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Greenhills Chemicals Incorporated",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Greenhills Chemicals Incorporated",
    description:
      "Top-tier supplier of high-purity industrial chemicals with a focus on sustainability.",
    url: "https://www.greenhillschemicals.com",
  };

  return (
    <html lang="en">
      <body className="min-h-screen bg-brand-light font-sans text-brand-anthracite antialiased">
        {/* Skip to content — WCAG 2.1 AA */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand-mint focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-brand-anthracite focus:outline-none"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content">{children}</main>

        <IndustryPartners />

        <Footer />

        <WhatsAppButton />

        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
