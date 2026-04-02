const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');
const pdfParse = require('pdf-parse');

const srcDir = 'c:\\Users\\HP 640 G4\\Downloads\\yates\\INFORMACION DEYATES';
const tsFilePath = 'c:\\Users\\HP 640 G4\\Downloads\\yates\\elite-marina-dubai\\src\\data\\yachts.ts';

async function extractText() {
  // We need to read the current yachtsData from the file or just re-generate it
  // Since we already generated it, let's just parse the JSON array from the file.
  const content = fs.readFileSync(tsFilePath, 'utf-8');
  
  // Extract JSON part
  const jsonMatch = content.match(/export const yachts: Yacht\[\] = (\[[\s\S]*\]);/);
  if (!jsonMatch) {
    console.error("Could not find yachts array in " + tsFilePath);
    return;
  }
  
  const yachtsData = eval(jsonMatch[1]);
  
  for (let yacht of yachtsData) {
    if (yacht.descriptionFile) {
      const docPath = path.join(srcDir, yacht.name, yacht.descriptionFile);
      if (fs.existsSync(docPath)) {
        const ext = path.extname(docPath).toLowerCase();
        let text = "";
        try {
          if (ext === '.docx') {
            const result = await mammoth.extractRawText({ path: docPath });
            text = result.value;
          } else if (ext === '.pdf') {
            const dataBuffer = fs.readFileSync(docPath);
            const data = await pdfParse(dataBuffer);
            text = data.text;
          } else if (ext === '.doc' || ext === '.txt') {
             // Basic attempt to read as binary and strip non-printables
             const buffer = fs.readFileSync(docPath);
             const rawStr = buffer.toString('utf-8');
             text = rawStr.replace(/[^\x20-\x7E\n\r]/g, "").replace(/\s{2,}/g, " ").trim();
          }
        } catch (e) {
          console.error(`Failed to parse ${docPath}: ${e.message}`);
        }
        
        if (text) {
          // Clean up the text a bit
          yacht.descriptionText = text.trim();
        }
      }
    }
  }
  
  const tsFileContent = `export interface Yacht {
  id: string;
  name: string;
  principalImage: string | null;
  galleryImages: string[];
  descriptionFile: string | null;
  descriptionText: string;
  pricePerHour: number;
  pricePerDay: number;
  capacity: number;
  cabins: number;
  length: string;
}

export const yachts: Yacht[] = ${JSON.stringify(yachtsData, null, 2)};
`;

  fs.writeFileSync(tsFilePath, tsFileContent, 'utf-8');
  console.log('Descriptions successfully extracted.');
}

extractText();
