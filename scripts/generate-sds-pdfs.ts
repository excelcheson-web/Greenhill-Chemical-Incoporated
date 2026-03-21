// scripts/generate-sds-pdfs.ts
// Run: npx ts-node --project tsconfig.scripts.json -r tsconfig-paths/register scripts/generate-sds-pdfs.ts

import fs from 'fs';
import path from 'path';
import PDFKitDocument from 'pdfkit';
import { PDFDocument, rgb } from 'pdf-lib';
import { chemicalSpecs } from '../content/chemical-specs';
import type { SafetyDataSheetData } from '../lib/sds-types';

let sdsRecords: Record<string, SafetyDataSheetData>;

async function loadSdsRecords() {
  const sdsModule = await import('../content/sds-data');
  sdsRecords = sdsModule.sdsRecords;
}

const SDS_DIR = path.join(__dirname, '../public/sds');
if (!fs.existsSync(SDS_DIR)) fs.mkdirSync(SDS_DIR, { recursive: true });

function getProductInfo(productId: string) {
  return chemicalSpecs.find((p) => p.slug === productId);
}

function pictogramLabel(code: string): string {
  const map: Record<string, string> = {
    GHS01: 'Exploding bomb',
    GHS02: 'Flame',
    GHS03: 'Flame over circle',
    GHS04: 'Gas cylinder',
    GHS05: 'Corrosion',
    GHS06: 'Skull and crossbones',
    GHS07: 'Exclamation mark',
    GHS08: 'Health hazard',
    GHS09: 'Environment',
  };
  return map[code] || code;
}

const LOGO_PATH = path.join(__dirname, '../public/images/greenhills-logo.png');

async function main() {
  await loadSdsRecords();

  for (const [productId, sds] of Object.entries(sdsRecords)) {
    const prod = getProductInfo(productId);
    const doc = new PDFKitDocument({ size: 'A4', margin: 50 });
    const pdfPath = path.join(SDS_DIR, `${productId}.pdf`);
    const writeStream = fs.createWriteStream(pdfPath);
    doc.pipe(writeStream);

    // Header
    doc.image(LOGO_PATH, 50, 40, {
      fit: [100, 50],
    });
    doc.fontSize(20).font('Helvetica-Bold').text('SAFETY DATA SHEET', 170, 60, { align: 'left' });
    doc.moveDown(2);

    // Line separator
    doc.strokeColor('#cccccc').lineWidth(1).moveTo(50, doc.y).lineTo(550, doc.y).stroke();
    doc.moveDown(2);

    // Product Identification
    doc.fontSize(16).font('Helvetica-Bold').text('Section 1: Product Identification');
    doc.moveDown();
    doc.fontSize(12).font('Helvetica').text(`Product Name: ${sds.productName}`);
    if (prod?.casNumber) doc.text(`CAS Number: ${prod.casNumber}`);
    if (prod?.formula) doc.text(`Formula: ${prod.formula}`);
    doc.moveDown();

    // Hazard Identification
    doc.fontSize(16).font('Helvetica-Bold').text('Section 2: Hazard Identification');
    doc.moveDown();

    const initialY = doc.y;
    const leftMargin = 50;
    const rightMargin = 300;
    const colWidth = 250;

    // Left column for pictograms
    doc.fontSize(12).font('Helvetica-Bold').text('GHS Pictograms:', leftMargin, initialY);
    doc.moveDown(0.5);
    if (sds.pictograms.length > 0) {
      doc.font('Helvetica').text(sds.pictograms.map(pictogramLabel).join(', '), leftMargin, doc.y, { width: colWidth });
    } else {
      doc.font('Helvetica').text('None', leftMargin, doc.y, { width: colWidth });
    }

    // Right column for statements
    doc.fontSize(12).font('Helvetica-Bold').text('Signal Word:', rightMargin, initialY);
    doc.font('Helvetica').text(sds.signalWord, rightMargin + 80, initialY);
    doc.moveDown(0.5);

    const statementsY = doc.y > initialY + 30 ? doc.y : initialY + 30;
    doc.fontSize(12).font('Helvetica-Bold').text('Hazard Statements (H):', rightMargin, statementsY);
    doc.moveDown(0.5);
    sds.hStatements.forEach((h) => {
      doc.font('Helvetica').text(`- ${h.code}: ${h.text}`, rightMargin, doc.y, { width: colWidth });
    });

    doc.moveDown(0.5);
    const pStatementsY = doc.y;
    doc.fontSize(12).font('Helvetica-Bold').text('Precautionary Statements (P):', rightMargin, pStatementsY);
    doc.moveDown(0.5);
    sds.pStatements.forEach((p) => {
      doc.font('Helvetica').text(`- ${p.code}: ${p.text}`, rightMargin, doc.y, { width: colWidth });
    });

    // Ensure the cursor is below both columns before proceeding
    const finalY = Math.max(doc.y, initialY + 150);
    doc.y = finalY;
    doc.moveDown(3);
    
    // Footer
    doc.fontSize(8).text('Greenhills Chemicals Incorporated\n123 Greenhills Drive, Metro Manila, Philippines', 50, 750, {
      align: 'center',
      width: 500,
    });


    doc.end();
    
    writeStream.on('finish', async () => {
      const pdfBytes = fs.readFileSync(pdfPath);
      const pdfDoc = await PDFDocument.load(pdfBytes);
      const totalPages = pdfDoc.getPageCount();
      const pages = pdfDoc.getPages();
      for (let i = 0; i < totalPages; i++) {
        const page = pages[i];
        page.drawText(`Page ${i + 1} of ${totalPages}`, {
          x: 50,
          y: 30,
          size: 8,
          color: rgb(0.5, 0.5, 0.5),
        });
      }
      const modifiedPdfBytes = await pdfDoc.save();
      fs.writeFileSync(pdfPath, modifiedPdfBytes);
      console.log(`Generated: ${pdfPath}`);
    });
  }

  console.log('All SDS PDFs generated.');
}

main();