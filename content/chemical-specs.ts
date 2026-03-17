export type HazardLevel = "low" | "moderate" | "high" | "extreme";

export type IndustryTag = "Mining" | "Agriculture" | "Industrial";

export interface ChemicalSpec {
  slug: string;
  name: string;
  formula: string;
  casNumber: string;
  primaryUse: string;
  industries: IndustryTag[];
  hazardLevel: HazardLevel;
  appearance: string;
  purity: string;
  applications: string[];
  technicalNote: string;
  safetyWarning: string;
  logisticsNote: string;
  sdsUrl: string;
  coaUrl: string;
  tdsUrl: string;
  properties: { label: string; value: string }[];
}

export const chemicalSpecs: ChemicalSpec[] = [
  {
    slug: "cerium-oxide",
    name: "Cerium (IV) Oxide",
    formula: "CeO₂",
    casNumber: "1306-38-3",
    primaryUse: "Precision Polishing & Catalyst",
    industries: ["Mining", "Industrial"],
    hazardLevel: "moderate",
    appearance: "Pale yellow to creamy white powder",
    purity: "99.9% (Standard) to 99.999% (High Purity)",
    applications: [
      "Glass polishing",
      "Fuel cell electrolyte",
      "UV absorption",
      "Automotive emission catalysts",
    ],
    technicalNote:
      "Excellent stability under high temperatures. Not soluble in water or organic solvents.",
    safetyWarning:
      "Irritant to eyes and respiratory tract. Dust masks and goggles are mandatory during bulk transfer.",
    logisticsNote:
      "Shipped in sealed polyethylene-lined drums. Store in a cool, dry, well-ventilated area.",
    sdsUrl: "/sds#cerium-oxide",
    coaUrl: "/contact",
    tdsUrl: "/contact",
    properties: [
      { label: "Purity Options", value: "99.9% to 99.999%" },
      { label: "Appearance", value: "Pale yellow to creamy white powder" },
      { label: "CAS Number", value: "1306-38-3" },
      { label: "Molecular Weight", value: "172.115 g/mol" },
      { label: "Melting Point", value: "2,400 °C" },
    ],
  },
  {
    slug: "sodium-cyanide",
    name: "Sodium Cyanide",
    formula: "NaCN",
    casNumber: "143-33-9",
    primaryUse: "Gold & Silver Extraction",
    industries: ["Mining"],
    hazardLevel: "extreme",
    appearance: "Solid white briquettes or pearls",
    purity: "≥98% Active NaCN",
    applications: ["Cyanidation process in gold mining"],
    technicalNote:
      "Essential reagent for heap leach and carbon-in-pulp (CIP) gold extraction circuits.",
    safetyWarning:
      "FATAL IF SWALLOWED OR INHALED. Contact with acids releases highly toxic Hydrogen Cyanide gas. Must be stored in a dry, locked, and well-ventilated area away from acids.",
    logisticsNote:
      'Strictly regulated. Transported in "Cyanide-Safe" steel drums or intermediate bulk containers (IBCs).',
    sdsUrl: "/sds#sodium-cyanide",
    coaUrl: "/contact",
    tdsUrl: "/contact",
    properties: [
      { label: "Form", value: "Solid White Briquettes or Pearls" },
      { label: "Content", value: "≥98% Active NaCN" },
      { label: "CAS Number", value: "143-33-9" },
      { label: "Molecular Weight", value: "49.007 g/mol" },
      { label: "Melting Point", value: "563.7 °C" },
    ],
  },
  {
    slug: "nitric-acid",
    name: "Nitric Acid",
    formula: "HNO₃",
    casNumber: "7697-37-2",
    primaryUse: "Metal Cleaning & Fertilizer Supply",
    industries: ["Agriculture", "Industrial"],
    hazardLevel: "high",
    appearance: "Colorless to yellowish fuming liquid",
    purity: "68% (Technical Grade)",
    applications: [
      "Fertilizer manufacturing",
      "Metal etching (stainless steel cleaning)",
      "Organic synthesis",
    ],
    technicalNote:
      "Strong oxidizer commonly used in passivation of stainless steel and production of ammonium nitrate fertilizer.",
    safetyWarning:
      "Strong oxidizer. Causes severe skin burns. Must be stored in acid-resistant stainless steel or specialized plastic containers. Keep away from combustible materials as it can cause ignition.",
    logisticsNote:
      "Transported in UN-approved acid-resistant tankers or carboys. Segregate from organic materials during transit.",
    sdsUrl: "/sds#nitric-acid",
    coaUrl: "/contact",
    tdsUrl: "/contact",
    properties: [
      { label: "Concentration", value: "68% (Technical Grade)" },
      { label: "Appearance", value: "Colorless to yellowish fuming liquid" },
      { label: "CAS Number", value: "7697-37-2" },
      { label: "Specific Gravity", value: "1.42 g/cm³" },
      { label: "Boiling Point", value: "83 °C (68% solution)" },
    ],
  },
  {
    slug: "caustic-soda-pearls",
    name: "Caustic Soda Pearls",
    formula: "NaOH",
    casNumber: "1310-73-2",
    primaryUse: "pH Regulation & Industrial Degreasing",
    industries: ["Industrial", "Mining"],
    hazardLevel: "high",
    appearance: "White, spherical granules (pearls)",
    purity: "≥99% Sodium Hydroxide",
    applications: [
      "Water treatment",
      "Soap manufacturing",
      "Oil exploration",
      "Paper pulp processing",
    ],
    technicalNote:
      'Pearls are preferred over flakes because they are less dusty, easier to pour, and flow better in automated industrial systems.',
    safetyWarning:
      "Causes severe burns. Absorbs moisture rapidly — keep containers sealed. Use face shield, rubber gloves, and apron when handling.",
    logisticsNote:
      "Supplied in 25 kg moisture-proof PE bags or 1-ton bulk bags. Preferred pearl form for automated dosing systems.",
    sdsUrl: "/sds#caustic-soda-pearls",
    coaUrl: "/contact",
    tdsUrl: "/contact",
    properties: [
      { label: "Purity", value: "≥99% (Sodium Hydroxide)" },
      { label: "Appearance", value: "White, spherical granules (Pearls)" },
      { label: "CAS Number", value: "1310-73-2" },
      { label: "Molecular Weight", value: "40.00 g/mol" },
      { label: "Melting Point", value: "323 °C" },
    ],
  },
  {
    slug: "ammonium-nitrate",
    name: "Ammonium Nitrate",
    formula: "NH₄NO₃",
    casNumber: "6484-52-2",
    primaryUse: "High-Nitrogen Fertilizer & Mining Explosives",
    industries: ["Agriculture", "Mining"],
    hazardLevel: "extreme",
    appearance: "White prilled (granular) solid",
    purity: "33.5% to 34.5% Nitrogen Content",
    applications: [
      "Agricultural fertilizer (fast-release nitrogen)",
      "ANFO explosives for mining operations",
    ],
    technicalNote:
      "Strong oxidizer used as both a nitrogen fertilizer and a key component of ANFO blasting agents in open-pit mining.",
    safetyWarning:
      "Strong oxidizer. Risk of explosion if heated under confinement or contaminated with fuels. Strict regulatory tracking is required for all supply shipments to mining sites.",
    logisticsNote:
      "Transported under dangerous-goods classification. Requires temperature monitoring and segregated storage away from fuels and organic material.",
    sdsUrl: "/sds#ammonium-nitrate",
    coaUrl: "/contact",
    tdsUrl: "/contact",
    properties: [
      { label: "Nitrogen Content", value: "33.5% to 34.5%" },
      { label: "Form", value: "Prilled (Granular)" },
      { label: "CAS Number", value: "6484-52-2" },
      { label: "Molecular Weight", value: "80.043 g/mol" },
      { label: "Melting Point", value: "169.6 °C" },
    ],
  },
  {
    slug: "hydrochloric-acid",
    name: "Hydrochloric Acid",
    formula: "HCl",
    casNumber: "7647-01-0",
    primaryUse: "Ore Processing & pH Control",
    industries: ["Mining", "Industrial"],
    hazardLevel: "high",
    appearance: "Clear, colorless to slightly yellow fuming liquid",
    purity: "32–36% (Technical Grade)",
    applications: [
      "Ore processing and mineral separation",
      "Steel pickling",
      "pH adjustment in water treatment",
      "Oil-well acidizing",
    ],
    technicalNote:
      "Volatile acid with strong fuming characteristics. Used in ore leaching circuits and as a pH depressant in mineral flotation.",
    safetyWarning:
      "Corrosive. Causes severe burns to skin, eyes, and respiratory tract. Store in acid-resistant containers and provide adequate ventilation.",
    logisticsNote:
      "Transported in rubber-lined steel tankers or HDPE carboys. Must be segregated from oxidizers and bases.",
    sdsUrl: "/sds#hydrochloric-acid",
    coaUrl: "/contact",
    tdsUrl: "/contact",
    properties: [
      { label: "Concentration", value: "32–36% (Technical Grade)" },
      { label: "Appearance", value: "Clear, colorless to slightly yellow liquid" },
      { label: "CAS Number", value: "7647-01-0" },
      { label: "Specific Gravity", value: "1.16 g/cm³ (32%)" },
      { label: "Boiling Point", value: "48 °C (36% solution)" },
    ],
  },
  {
    slug: "sulfuric-acid",
    name: "Sulfuric Acid",
    formula: "H₂SO₄",
    casNumber: "7664-93-9",
    primaryUse: "Metal Leaching & Battery Manufacturing",
    industries: ["Mining", "Industrial"],
    hazardLevel: "high",
    appearance: "Clear, colorless, oily liquid",
    purity: "98% (Concentrated, Technical Grade)",
    applications: [
      "Copper and zinc leaching",
      "Lead-acid battery electrolyte",
      "Phosphate fertilizer production",
      "Chemical synthesis",
    ],
    technicalNote:
      "Highly exothermic when diluted — always add acid to water, never the reverse. Primary reagent in hydrometallurgical copper extraction.",
    safetyWarning:
      "Extremely corrosive. Generates intense heat on contact with water. Causes severe burns. Full PPE including face shield required.",
    logisticsNote:
      "Transported in carbon-steel tankers or acid-proof IBCs. Temperature monitoring required for concentrated grades.",
    sdsUrl: "/sds#sulfuric-acid",
    coaUrl: "/contact",
    tdsUrl: "/contact",
    properties: [
      { label: "Concentration", value: "98% (Concentrated)" },
      { label: "Appearance", value: "Clear, colorless, oily liquid" },
      { label: "CAS Number", value: "7664-93-9" },
      { label: "Specific Gravity", value: "1.84 g/cm³" },
      { label: "Boiling Point", value: "337 °C" },
    ],
  },
  {
    slug: "activated-carbon",
    name: "Activated Carbon (Granular)",
    formula: "C",
    casNumber: "7440-44-0",
    primaryUse: "Gold Adsorption & Water Purification",
    industries: ["Mining", "Industrial"],
    hazardLevel: "low",
    appearance: "Black granular or pelletized solid",
    purity: "Iodine Number ≥1000 mg/g",
    applications: [
      "Carbon-in-pulp (CIP) gold recovery",
      "Carbon-in-leach (CIL) circuits",
      "Drinking water purification",
      "Air filtration",
    ],
    technicalNote:
      "High-iodine-number coconut-shell carbon is preferred for gold adsorption due to its hardness and microporous structure.",
    safetyWarning:
      "Low hazard. Dust is a nuisance irritant. Wet activated carbon depletes oxygen in confined spaces — ensure ventilation.",
    logisticsNote:
      "Shipped in moisture-proof 25 kg bags or 500 kg bulk bags. Keep dry before use to maintain adsorption capacity.",
    sdsUrl: "/sds#activated-carbon",
    coaUrl: "/contact",
    tdsUrl: "/contact",
    properties: [
      { label: "Iodine Number", value: "≥1000 mg/g" },
      { label: "Form", value: "Granular (coconut-shell based)" },
      { label: "CAS Number", value: "7440-44-0" },
      { label: "Mesh Size", value: "6 × 12 (typical)" },
      { label: "Moisture", value: "≤5%" },
    ],
  },
  {
    slug: "xanthate-sipx",
    name: "Sodium Isopropyl Xanthate (SIPX)",
    formula: "C₄H₇NaOS₂",
    casNumber: "140-93-2",
    primaryUse: "Mineral Flotation Collector",
    industries: ["Mining"],
    hazardLevel: "moderate",
    appearance: "Yellow to light-brown powder or pellets",
    purity: "≥90% Active Content",
    applications: [
      "Froth flotation for copper, nickel, and zinc sulfide ores",
      "Selective mineral separation",
    ],
    technicalNote:
      "Standard collector for sulfide mineral flotation. Decomposes in acidic conditions — maintain slurry pH above 7 during use.",
    safetyWarning:
      "Irritant. Decomposes to release toxic carbon disulfide gas upon contact with acids or moisture. Store in cool, dry, ventilated conditions away from acids.",
    logisticsNote:
      "Supplied in nitrogen-purged steel drums (50–150 kg). Shelf life is limited — first-in-first-out inventory rotation required.",
    sdsUrl: "/sds#xanthate-sipx",
    coaUrl: "/contact",
    tdsUrl: "/contact",
    properties: [
      { label: "Active Content", value: "≥90%" },
      { label: "Appearance", value: "Yellow to light-brown powder/pellets" },
      { label: "CAS Number", value: "140-93-2" },
      { label: "Molecular Weight", value: "158.22 g/mol" },
      { label: "pH (1% Solution)", value: "10–12" },
    ],
  },
  {
    slug: "calcium-hypochlorite",
    name: "Calcium Hypochlorite",
    formula: "Ca(ClO)₂",
    casNumber: "7778-54-3",
    primaryUse: "Water Treatment & Sanitation",
    industries: ["Industrial", "Agriculture"],
    hazardLevel: "moderate",
    appearance: "White granular solid with strong chlorine odor",
    purity: "65–70% Available Chlorine",
    applications: [
      "Municipal and industrial water disinfection",
      "Swimming pool sanitation",
      "Post-harvest crop wash",
      "Effluent treatment",
    ],
    technicalNote:
      "Granular form is preferred over liquid bleach for long shelf life, transport safety, and on-site dosing flexibility.",
    safetyWarning:
      "Strong oxidizer. Releases toxic chlorine gas if mixed with acids or ammonia. Store in a cool, dry area away from organic materials and direct sunlight.",
    logisticsNote:
      "Shipped in sealed 25–50 kg HDPE drums. Must be segregated from acids, ammonia, and combustibles during transit.",
    sdsUrl: "/sds#calcium-hypochlorite",
    coaUrl: "/contact",
    tdsUrl: "/contact",
    properties: [
      { label: "Available Chlorine", value: "65–70%" },
      { label: "Form", value: "White Granular Solid" },
      { label: "CAS Number", value: "7778-54-3" },
      { label: "Molecular Weight", value: "142.98 g/mol" },
      { label: "pH (1% Solution)", value: "10.5–11.5" },
    ],
  },
];
