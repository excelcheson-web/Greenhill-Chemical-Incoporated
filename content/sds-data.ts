import type { SafetyDataSheetData } from "@/lib/sds-types";

/**
 * SDS records keyed by product ID – covers all chemicals in the catalog.
 */
export const sdsRecords: Record<string, SafetyDataSheetData> = {
  /* ── Cerium (IV) Oxide ─────────────────────────────────── */
  "cerium-oxide": {
    productId: "cerium-oxide",
    productName: "Cerium (IV) Oxide",
    pdfUrl: "/sds/cerium-oxide.pdf",
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
    pdfUrl: "/sds/sodium-cyanide.pdf",
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
    pdfUrl: "/sds/nitric-acid.pdf",
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
    pdfUrl: "/sds/caustic-soda-pearls.pdf",
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
    pdfUrl: "/sds/ammonium-nitrate.pdf",
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

  /* ── Sulfuric Acid ─────────────────────────────────────── */
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

  /* ── Activated Carbon ──────────────────────────────────── */
  "activated-carbon": {
    productId: "activated-carbon",
    productName: "Activated Carbon (Granular)",
    pdfUrl: "/sds/activated-carbon.pdf",
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
    pdfUrl: "/sds/xanthate-sipx.pdf",
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
    pdfUrl: "/sds/calcium-hypochlorite.pdf",
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
  /* ── Aqua Regia ──────────────────────────────────────────────── */
  "aqua-regia": {
    productId: "aqua-regia",
    productName: "Aqua Regia (Nitric Acid + Hydrochloric Acid)",
    pdfUrl: "/sds/aqua-regia.pdf",
    pictograms: ["GHS05", "GHS07"],
    signalWord: "Danger",
    hStatements: [
      { code: "H290", text: "May be corrosive to metals." },
      { code: "H314", text: "Causes severe skin burns and eye damage." },
      { code: "H335", text: "May cause respiratory irritation." }
    ],
    pStatements: [
      { code: "P260", text: "Do not breathe mist, vapors, or spray." },
      { code: "P280", text: "Wear protective gloves, eye protection, and face protection." },
      { code: "P303+P361+P353", text: "IF ON SKIN (or hair): Take off immediately all contaminated clothing. Rinse skin with water." },
      { code: "P310", text: "Immediately call a POISON CENTER or doctor." }
    ],
  },

  /* ── Sodium Metabisulfite (SMBS) ─────────────────────────────── */
  "sodium-metabisulfite": {
    productId: "sodium-metabisulfite",
    productName: "Sodium Metabisulfite (SMBS)",
    pdfUrl: "/sds/sodium-metabisulfite.pdf",
    pictograms: ["GHS05", "GHS07"],
    signalWord: "Warning",
    hStatements: [
      { code: "H302", text: "Harmful if swallowed." },
      { code: "H318", text: "Causes serious eye damage." },
      { code: "H335", text: "May cause respiratory irritation." }
    ],
    pStatements: [
      { code: "P261", text: "Avoid breathing dust." },
      { code: "P280", text: "Wear protective gloves, eye protection, and face protection." },
      { code: "P305+P351+P338", text: "IF IN EYES: Rinse cautiously with water for several minutes. Remove contact lenses, if present and easy to do. Continue rinsing." }
    ],
  },

  /* ── Urea ────────────────────────────────────────────────────── */
  "urea": {
    productId: "urea",
    productName: "Urea",
    pdfUrl: "/sds/urea.pdf",
    pictograms: ["GHS07"],
    signalWord: "Warning",
    hStatements: [
      { code: "H319", text: "Causes serious eye irritation." }
    ],
    pStatements: [
      { code: "P264", text: "Wash hands thoroughly after handling." },
      { code: "P280", text: "Wear protective gloves and eye protection." },
      { code: "P305+P351+P338", text: "IF IN EYES: Rinse cautiously with water for several minutes. Remove contact lenses, if present and easy to do. Continue rinsing." }
    ],
  },

  /* ── Hydrogen Peroxide ───────────────────────────────────────── */
  "hydrogen-peroxide": {
    productId: "hydrogen-peroxide",
    productName: "Hydrogen Peroxide",
    pdfUrl: "/sds/hydrogen-peroxide.pdf",
    pictograms: ["GHS03", "GHS05", "GHS07"],
    signalWord: "Danger",
    hStatements: [
      { code: "H271", text: "May cause fire or explosion; strong oxidizer." },
      { code: "H302", text: "Harmful if swallowed." },
      { code: "H314", text: "Causes severe skin burns and eye damage." }
    ],
    pStatements: [
      { code: "P210", text: "Keep away from heat, sparks, open flames, and hot surfaces." },
      { code: "P220", text: "Keep/Store away from clothing and other combustible materials." },
      { code: "P280", text: "Wear protective gloves, eye protection, and face protection." },
      { code: "P303+P361+P353", text: "IF ON SKIN (or hair): Take off immediately all contaminated clothing. Rinse skin with water." }
    ],
  },

  /* ── Superplasticizer ────────────────────────────────────────── */
  "superplasticizer": {
    productId: "superplasticizer",
    productName: "Superplasticizer",
    pdfUrl: "/sds/superplasticizer.pdf",
    pictograms: ["GHS07"],
    signalWord: "Warning",
    hStatements: [
      { code: "H315", text: "Causes skin irritation." },
      { code: "H319", text: "Causes serious eye irritation." }
    ],
    pStatements: [
      { code: "P264", text: "Wash hands thoroughly after handling." },
      { code: "P280", text: "Wear protective gloves and eye protection." }
    ],
  },

  /* ── Accelerator ────────────────────────────────────────────── */
  "accelerator": {
    productId: "accelerator",
    productName: "Accelerator",
    pdfUrl: "/sds/accelerator.pdf",
    pictograms: ["GHS07"],
    signalWord: "Warning",
    hStatements: [
      { code: "H315", text: "Causes skin irritation." },
      { code: "H319", text: "Causes serious eye irritation." }
    ],
    pStatements: [
      { code: "P264", text: "Wash hands thoroughly after handling." },
      { code: "P280", text: "Wear protective gloves and eye protection." }
    ],
  },

  /* ── Retarder ──────────────────────────────────────────────── */
  "retarder": {
    productId: "retarder",
    productName: "Retarder",
    pdfUrl: "/sds/retarder.pdf",
    pictograms: ["GHS07"],
    signalWord: "Warning",
    hStatements: [
      { code: "H315", text: "Causes skin irritation." },
      { code: "H319", text: "Causes serious eye irritation." }
    ],
    pStatements: [
      { code: "P264", text: "Wash hands thoroughly after handling." },
      { code: "P280", text: "Wear protective gloves and eye protection." }
    ],
  },

  /* ── Waterproofing Admixture ──────────────────────────────── */
  "waterproofing-admixture": {
    productId: "waterproofing-admixture",
    productName: "Waterproofing Admixture",
    pdfUrl: "/sds/waterproofing-admixture.pdf",
    pictograms: ["GHS07"],
    signalWord: "Warning",
    hStatements: [
      { code: "H315", text: "Causes skin irritation." },
      { code: "H319", text: "Causes serious eye irritation." }
    ],
    pStatements: [
      { code: "P264", text: "Wash hands thoroughly after handling." },
      { code: "P280", text: "Wear protective gloves and eye protection." }
    ],
  },

  /* ── Epoxy Resin/Coating ──────────────────────────────────── */
  "epoxy-resin": {
    productId: "epoxy-resin",
    productName: "Epoxy Resin/Coating",
    pdfUrl: "/sds/epoxy-resin.pdf",
    pictograms: ["GHS07", "GHS09"],
    signalWord: "Warning",
    hStatements: [
      { code: "H315", text: "Causes skin irritation." },
      { code: "H317", text: "May cause an allergic skin reaction." },
      { code: "H319", text: "Causes serious eye irritation." },
      { code: "H411", text: "Toxic to aquatic life with long lasting effects." }
    ],
    pStatements: [
      { code: "P261", text: "Avoid breathing dust/fume/gas/mist/vapors/spray." },
      { code: "P280", text: "Wear protective gloves and eye protection." },
      { code: "P273", text: "Avoid release to the environment." }
    ],
  },

  /* ── Polyurethane (PU) ───────────────────────────────────── */
  "polyurethane": {
    productId: "polyurethane",
    productName: "Polyurethane (PU)",
    pdfUrl: "/sds/polyurethane.pdf",
    pictograms: ["GHS07"],
    signalWord: "Warning",
    hStatements: [
      { code: "H315", text: "Causes skin irritation." },
      { code: "H319", text: "Causes serious eye irritation." }
    ],
    pStatements: [
      { code: "P264", text: "Wash hands thoroughly after handling." },
      { code: "P280", text: "Wear protective gloves and eye protection." }
    ],
  },

  /* ── Anti-corrosion Coating ─────────────────────────────── */
  "anti-corrosion-coating": {
    productId: "anti-corrosion-coating",
    productName: "Anti-corrosion Coating",
    pdfUrl: "/sds/anti-corrosion-coating.pdf",
    pictograms: ["GHS07"],
    signalWord: "Warning",
    hStatements: [
      { code: "H315", text: "Causes skin irritation." },
      { code: "H319", text: "Causes serious eye irritation." }
    ],
    pStatements: [
      { code: "P264", text: "Wash hands thoroughly after handling." },
      { code: "P280", text: "Wear protective gloves and eye protection." }
    ],
  },

  /* ── Polymer-modified Mortar ───────────────────────────── */
  "polymer-modified-mortar": {
    productId: "polymer-modified-mortar",
    productName: "Polymer-modified Mortar",
    pdfUrl: "/sds/polymer-modified-mortar.pdf",
    pictograms: ["GHS07"],
    signalWord: "Warning",
    hStatements: [
      { code: "H315", text: "Causes skin irritation." },
      { code: "H319", text: "Causes serious eye irritation." }
    ],
    pStatements: [
      { code: "P264", text: "Wash hands thoroughly after handling." },
      { code: "P280", text: "Wear protective gloves and eye protection." }
    ],
  },

  /* ── Grout ─────────────────────────────────────────────── */
  "grout": {
    productId: "grout",
    productName: "Grout",
    pdfUrl: "/sds/grout.pdf",
    pictograms: ["GHS07"],
    signalWord: "Warning",
    hStatements: [
      { code: "H315", text: "Causes skin irritation." },
      { code: "H319", text: "Causes serious eye irritation." }
    ],
    pStatements: [
      { code: "P264", text: "Wash hands thoroughly after handling." },
      { code: "P280", text: "Wear protective gloves and eye protection." }
    ],
  },
};
