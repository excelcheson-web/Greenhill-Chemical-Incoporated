import type { SafetyDataSheetData } from "@/lib/sds-types";

/**
 * Sample SDS records keyed by product ID.
 * In production these would come from an API or CMS.
 */
export const sdsRecords: Record<string, SafetyDataSheetData> = {
  "sodium-hydroxide": {
    productId: "sodium-hydroxide",
    productName: "Sodium Hydroxide",
    pdfUrl: "/sds/sodium-hydroxide.pdf",
    pictograms: ["GHS05"],
    signalWord: "Danger",
    hStatements: [
      { code: "H290", text: "May be corrosive to metals." },
      { code: "H314", text: "Causes severe skin burns and eye damage." },
    ],
    pStatements: [
      { code: "P234", text: "Keep only in original packaging." },
      { code: "P260", text: "Do not breathe dust or mist." },
      { code: "P264", text: "Wash hands thoroughly after handling." },
      { code: "P280", text: "Wear protective gloves, eye protection, and face protection." },
      { code: "P301+P330+P331", text: "IF SWALLOWED: Rinse mouth. Do NOT induce vomiting." },
      { code: "P305+P351+P338", text: "IF IN EYES: Rinse cautiously with water for several minutes. Remove contact lenses, if present and easy to do. Continue rinsing." },
    ],
  },
  "sulfuric-acid": {
    productId: "sulfuric-acid",
    productName: "Sulfuric Acid",
    pdfUrl: "/sds/sulfuric-acid.pdf",
    pictograms: ["GHS05", "GHS07"],
    signalWord: "Danger",
    hStatements: [
      { code: "H290", text: "May be corrosive to metals." },
      { code: "H314", text: "Causes severe skin burns and eye damage." },
    ],
    pStatements: [
      { code: "P260", text: "Do not breathe mist, vapors, or spray." },
      { code: "P264", text: "Wash hands thoroughly after handling." },
      { code: "P280", text: "Wear protective gloves, eye protection, and face protection." },
      { code: "P310", text: "Immediately call a POISON CENTER or doctor." },
    ],
  },
  "acetone": {
    productId: "acetone",
    productName: "Acetone",
    pdfUrl: "/sds/acetone.pdf",
    pictograms: ["GHS02", "GHS07"],
    signalWord: "Danger",
    hStatements: [
      { code: "H225", text: "Highly flammable liquid and vapour." },
      { code: "H319", text: "Causes serious eye irritation." },
      { code: "H336", text: "May cause drowsiness or dizziness." },
    ],
    pStatements: [
      { code: "P210", text: "Keep away from heat, sparks, open flames, and hot surfaces. No smoking." },
      { code: "P233", text: "Keep container tightly closed." },
      { code: "P240", text: "Ground and bond container and receiving equipment." },
      { code: "P305+P351+P338", text: "IF IN EYES: Rinse cautiously with water for several minutes. Remove contact lenses, if present and easy to do. Continue rinsing." },
    ],
  },
  "hydrochloric-acid": {
    productId: "hydrochloric-acid",
    productName: "Hydrochloric Acid",
    pdfUrl: "/sds/hydrochloric-acid.pdf",
    pictograms: ["GHS05", "GHS07"],
    signalWord: "Danger",
    hStatements: [
      { code: "H290", text: "May be corrosive to metals." },
      { code: "H314", text: "Causes severe skin burns and eye damage." },
      { code: "H335", text: "May cause respiratory irritation." },
    ],
    pStatements: [
      { code: "P260", text: "Do not breathe mist, vapors, or spray." },
      { code: "P280", text: "Wear protective gloves, eye protection, and face protection." },
      { code: "P303+P361+P353", text: "IF ON SKIN (or hair): Take off immediately all contaminated clothing. Rinse skin with water." },
      { code: "P304+P340", text: "IF INHALED: Remove person to fresh air and keep comfortable for breathing." },
      { code: "P310", text: "Immediately call a POISON CENTER or doctor." },
    ],
  },
};
