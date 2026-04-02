const fs = require('fs');
const path = require('path');

const srcDir = 'c:\\Users\\HP 640 G4\\Downloads\\yates\\INFORMACION DEYATES';
const destAssetsDir = 'c:\\Users\\HP 640 G4\\Downloads\\yates\\elite-marina-dubai\\public\\images\\yachts';

if (!fs.existsSync(destAssetsDir)) {
  fs.mkdirSync(destAssetsDir, { recursive: true });
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

const folders = fs.readdirSync(srcDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

const yachtsData = [];

folders.forEach(folderName => {
  const currentSrc = path.join(srcDir, folderName);
  const id = slugify(folderName);
  const currentDest = path.join(destAssetsDir, id);
  
  if (!fs.existsSync(currentDest)) {
    fs.mkdirSync(currentDest, { recursive: true });
  }

  const files = fs.readdirSync(currentSrc);
  
  let principalImage = null;
  const galleryImages = [];
  let descriptionFile = null;

  files.forEach(file => {
    const ext = path.extname(file).toLowerCase();
    const isImage = ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
    const isDoc = ['.doc', '.docx', '.pdf', '.txt'].includes(ext);

    if (isImage) {
      if (file.toLowerCase().includes('principal')) {
        principalImage = `principal${ext}`;
        fs.copyFileSync(path.join(currentSrc, file), path.join(currentDest, principalImage));
      } else {
        const timestamp = Date.now() + Math.floor(Math.random() * 1000);
        const newName = `gallery-${timestamp}${ext}`;
        galleryImages.push(newName);
        fs.copyFileSync(path.join(currentSrc, file), path.join(currentDest, newName));
      }
    } else if (isDoc) {
      descriptionFile = file;
    }
  });

  yachtsData.push({
    id,
    name: folderName,
    principalImage: principalImage ? `/images/yachts/${id}/${principalImage}` : null,
    galleryImages: galleryImages.map(img => `/images/yachts/${id}/${img}`),
    descriptionFile: descriptionFile,
    descriptionText: "", // To be filled manually or extracted later
    pricePerHour: 0,
    pricePerDay: 0,
    capacity: 0,
    cabins: 0,
    length: "Unknown"
  });
});

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

const tsFilePath = 'c:\\Users\\HP 640 G4\\Downloads\\yates\\elite-marina-dubai\\src\\data\\yachts.ts';
if (!fs.existsSync(path.dirname(tsFilePath))) {
  fs.mkdirSync(path.dirname(tsFilePath), { recursive: true });
}

fs.writeFileSync(tsFilePath, tsFileContent, 'utf-8');
console.log('Successfully imported ' + yachtsData.length + ' yachts.');
