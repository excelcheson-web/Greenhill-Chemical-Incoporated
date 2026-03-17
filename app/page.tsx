import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { Scrollytelling } from "@/components/sections/scrollytelling";

export const metadata: Metadata = {
  title: "Greenhills Chemicals Incorporated — Industrial Chemical Supplier",
  description:
    "Top-tier supplier of high-purity industrial chemicals. Browse products, download Safety Data Sheets, and explore our sustainability commitments.",
  openGraph: {
    title: "Greenhills Chemicals Incorporated",
    description:
      "High-purity industrial chemicals with sustainable sourcing. Browse our catalog and download SDS documents.",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Scrollytelling />
    </>
  );
}
