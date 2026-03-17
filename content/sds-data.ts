import type { SafetyDataSheetData } from "@/lib/sds-types";

/**
 * SDS records keyed by product ID – covers all chemicals in the catalog.
 */
export const sdsRecords: Record<string, SafetyDataSheetData> = {
  /* ── Cerium (IV) Oxide ─────────────────────────────────── */
  "cerium-oxide": {
    productId: "cerium-oxide",
    productName: "Cerium (IV) Oxide",
    pdfUrl: "",
    pictograms: ["GHS07"],
    signalWord: "Warning",
    hStatements: [
      { code: "H315", text: "Causes skin irritation." },
      { code: "H319", text: "Causes serious eye irritation." },
      { code: "H335", text: "May cause respiratory irritation." },
    ],
    pStatements: [
      { code: "P261", text: "Avoid breathing dust." },
      { code: "P280", text: "Wear protective gloves, eye protection, and dust mask." },
      { code: "P305+P351+P338", text: "IF IN EYES: Rinse cautiously with water for several minutes. Remove contact lenses, if present and easy to do. Continue rinsing." },
    ],
  },

  /* ── Sodium Cyanide ────────────────────────────────────── */
  "sodium-cyanide": {
    productId: "sodium-cyanide",
    productName: "Sodium Cyanide",
    pdfUrl: "",
    pictograms: ["GHS06", "GHS09"],
    signalWord: "Danger",
    hStatements: [
      { code: "H290", text: "May be corrosive to metals." },
      { code: "H300", text: "Fatal if swallowed." },
      { code: "H310", text: "Fatal in contact with skin." },
      { code: "H330", text: "Fatal if inhaled." },
      { code: "H410", text: "Very toxic to aquatic life with long lasting effects." },
    ],
    pStatements: [
      { code: "P262", text: "Do not get in eyes, on skin, or on clothing." },
      { code: "P264", text: "Wash hands thoroughly after handling." },
      { code: "P270", text: "Do not eat, drink or smoke when using this product." },
      { code: "P280", text: "Wear protective gloves, protective clothing, eye protection, and face protection." },
      { code: "P284", text: "Wear respiratory protection." },
      { code: "P310", text: "Immediately call a POISON CENTER or doctor." },
    ],
  },

  /* ── Nitric Acid ───────────────────────────────────────── */
  "nitric-acid": {
    productId: "nitric-acid",
    productName: "Nitric Acid",
    pdfUrl: "",
    pictograms: ["GHS03", "GHS05", "GHS07"],
    signalWord: "Danger",
    hStatements: [
      { code: "H272", text: "May intensify fire; oxidizer." },
      { code: "H290", text: "May be corrosive to metals." },
      { code: "H314", text: "Causes severe skin burns and eye damage." },
      { code: "H331", text: "Toxic if inhaled." },
    ],
    pStatements: [
      { code: "P210", text: "Keep away from heat, sparks, open flames, and hot surfaces." },
      { code: "P260", text: "Do not breathe mist, vapors, or spray." },
      { code: "P280", text: "Wear protective gloves, eye protection, and face protection." },
      { code: "P303+P361+P353", text: "IF ON SKIN (or hair): Take off immediately all contaminated clothing. Rinse skin with water." },
      { code: "P310", text: "Immediately call a POISON CENTER or doctor." },
    ],
  },

  /* ── Caustic Soda Pearls (NaOH) ────────────────────────── */
  "caustic-soda-pearls": {
    productId: "caustic-soda-pearls",
    productName: "Caustic Soda Pearls",
    pdfUrl: "",
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

  /* ── Ammonium Nitrate ──────────────────────────────────── */
  "ammonium-nitrate": {
    productId: "ammonium-nitrate",
    productName: "Ammonium Nitrate",
    pdfUrl: "",
    pictograms: ["GHS03", "GHS07"],
    signalWord: "Danger",
    hStatements: [
      { code: "H272", text: "May intensify fire; oxidizer." },
      { code: "H319", text: "Causes serious eye irritation." },
    ],
    pStatements: [
      { code: "P210", text: "Keep away from heat, sparks, open flames, and hot surfaces. No smoking." },
      { code: "P220", text: "Keep away from combustible materials." },
      { code: "P280", text: "Wear protective gloves and eye protection." },
      { code: "P370+P378", text: "In case of fire: Use water spray or fog to extinguish." },
    ],
  },

  /* ── Hydrochloric Acid ─────────────────────────────────── */
  "hydrochloric-acid": {
    productId: "hydrochloric-acid",
    productName: "Hydrochloric Acid",
    pdfUrl: "",
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

  /* ── Sulfuric Acid ─────────────────────────────────────── */
  "sulfuric-acid": {
    productId: "sulfuric-acid",
    productName: "Sulfuric Acid",
    pdfUrl: "",
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

  /* ── Activated Carbon ──────────────────────────────────── */
  "activated-carbon": {
    productId: "activated-carbon",
    productName: "Activated Carbon (Granular)",
    pdfUrl: "",
    pictograms: ["GHS07"],
    signalWord: "Warning",
    hStatements: [
      { code: "H315", text: "Causes skin irritation." },
      { code: "H319", text: "Causes serious eye irritation." },
      { code: "H335", text: "May cause respiratory irritation." },
    ],
    pStatements: [
      { code: "P261", text: "Avoid breathing dust." },
      { code: "P280", text: "Wear protective gloves and eye protection." },
      { code: "P304+P340", text: "IF INHALED: Remove person to fresh air and keep comfortable for breathing." },
      { code: "P312", text: "Call a POISON CENTER or doctor if you feel unwell." },
    ],
  },

  /* ── Sodium Isopropyl Xanthate (SIPX) ──────────────────── */
  "xanthate-sipx": {
    productId: "xanthate-sipx",
    productName: "Sodium Isopropyl Xanthate (SIPX)",
    pdfUrl: "",
    pictograms: ["GHS07", "GHS09"],
    signalWord: "Warning",
    hStatements: [
      { code: "H302", text: "Harmful if swallowed." },
      { code: "H315", text: "Causes skin irritation." },
      { code: "H319", text: "Causes serious eye irritation." },
      { code: "H412", text: "Harmful to aquatic life with long lasting effects." },
    ],
    pStatements: [
      { code: "P264", text: "Wash hands thoroughly after handling." },
      { code: "P270", text: "Do not eat, drink or smoke when using this product." },
      { code: "P280", text: "Wear protective gloves and eye protection." },
      { code: "P301+P312", text: "IF SWALLOWED: Call a POISON CENTER or doctor if you feel unwell." },
      { code: "P273", text: "Avoid release to the environment." },
    ],
  },

  /* ── Calcium Hypochlorite ──────────────────────────────── */
  "calcium-hypochlorite": {
    productId: "calcium-hypochlorite",
    productName: "Calcium Hypochlorite",
    pdfUrl: "",
    pictograms: ["GHS03", "GHS05", "GHS07", "GHS09"],
    signalWord: "Danger",
    hStatements: [
      { code: "H272", text: "May intensify fire; oxidizer." },
      { code: "H302", text: "Harmful if swallowed." },
      { code: "H314", text: "Causes severe skin burns and eye damage." },
      { code: "H400", text: "Very toxic to aquatic life." },
    ],
    pStatements: [
      { code: "P210", text: "Keep away from heat, sparks, open flames, and hot surfaces." },
      { code: "P220", text: "Keep away from acids, ammonia, and combustible materials." },
      { code: "P260", text: "Do not breathe dust." },
      { code: "P280", text: "Wear protective gloves, eye protection, and face protection." },
      { code: "P310", text: "Immediately call a POISON CENTER or doctor." },
      { code: "P273", text: "Avoid release to the environment." },
    ],
  },
};
