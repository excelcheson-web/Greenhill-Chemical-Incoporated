/** GHS hazard pictogram codes per GHS Rev.10 */
export type GhsPictogramCode =
  | "GHS01" // Exploding bomb
  | "GHS02" // Flame
  | "GHS03" // Flame over circle
  | "GHS04" // Gas cylinder
  | "GHS05" // Corrosion
  | "GHS06" // Skull and crossbones
  | "GHS07" // Exclamation mark
  | "GHS08" // Health hazard
  | "GHS09"; // Environment

export interface HStatement {
  code: string;
  text: string;
}

export interface PStatement {
  code: string;
  text: string;
}

export interface SafetyDataSheetData {
  productId: string;
  productName: string;
  pdfUrl: string;
  pictograms: GhsPictogramCode[];
  signalWord: "Danger" | "Warning";
  hStatements: HStatement[];
  pStatements: PStatement[];
}
