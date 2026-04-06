const fs = require('fs');
const path = require('path');

const srcDataFolder = path.join(__dirname, 'src', 'data');
const yachtsTsPath = path.join(srcDataFolder, 'yachts.ts');
const publicYachtsDir = path.join(__dirname, 'public', 'images', 'yachts');
const sourceImagesDir = "C:\\Users\\HP 640 G4\\Downloads\\yates\\NUEVOS YATES";

const rawData = `
High seas yacht 54 feet 
Cabins 3
captain & crew 2
Price per hour 699 aed 
Capacity: up to 12 person

High seas yacht 58 feet  (1)
Cabins 2 
captain & crew 2 
Price per hour  2600 aed 
Capacity: up to 8 person

High seas yacht 58 feet (2)
Cabins 2 
captain & crew 2 
Price per hour  2500 aed 
Capacity: up to 8 person

High seas yacht 70 feet 
Cabins 3
captain & crew 2
Price per hour  1499 aed 
Capacity: up to 18 person

High seas yacht 70 feet (1)
Cabins 3
captain & crew 2
Price per hour  2900 aed 
Capacity: up to 15 person

High seas yacht 70 feet (2)
Cabins 3
captain & crew 2
Price per hour  1699 aed 
Capacity: up to 22 person

High seas yacht 72 feet 
Cabins 3
captain & crew 2
Price per hour  1499 aed 
Capacity: up to 25 person

High seas yacht 72 feet  (1)
Cabins 3
captain & crew 2
Price per hour  1499 aed 
Capacity: up to 18 person

High seas yacht 78 feet 
Cabins 4 
captain & crew 2
Price per hour  4800 aed 
Capacity: up to 18 person

High seas yacht 78 feet  (1)
Cabins 3 
With Jacuzzi
captain & crew 2
Price per hour  4000 aed 
Capacity: up to 12 person

High seas yacht 82 feet 
Cabins 4
captain & crew 4
Price per hour  6000 aed 
Capacity: up to 18 person

High seas yacht 85 feet 
Cabins 3 
With Jacuzzi
captain & crew 3 
Price per hour  1699 aed 
Capacity: up to 25 person

High seas yacht 85 feet (1)
Cabins 4 
captain & crew 3 
Price per hour 4700 aed 
Capacity: up to 15 person

High seas yacht 88 feet 
Cabins 4 
With Jacuzzi
captain & crew 3 
Price per hour  1899 aed 
Capacity: up to 35 person

High seas yacht 90 feet 
Cabins 4 
captain & crew 3 
Price per hour 2300 aed 
Capacity: up to 35 person

High seas yacht 90 feet (1)
Cabins 4 
captain & crew 3 
Price per hour 2500 aed 
Capacity: up to 35 person

High seas yacht 95 feet 
Cabins 4 
With Jacuzzi
captain & crew 3 
Price per hour  4500 aed 
Capacity: up to 20 person   

High seas yacht 101 feet 
Cabins 4 
With Jacuzzi
captain & crew 3 
Price per hour  3000 aed 
Capacity: up to 35 person

High seas yacht 108 feet 
Cabins 4 
With Jacuzzi
captain & crew 3 
Price per hour  4200 aed 
Capacity: up to 25 person

High seas yacht 108 feet (1)
Cabins 4 
With Jacuzzi
captain & crew 3 
Price per hour  5200 aed 
Capacity: up to 25 person

High seas yacht 110 feet 
Cabins 4
captain & crew 3 
Price per hour  8000 aed 
Capacity: up to 30 person

High seas yacht 110 feet (1)
Cabins 3
captain & crew 3 
Price per hour  8000 aed 
Capacity: up to 20 person

High seas yacht 115 feet 
Cabins 3 
With Jacuzzi
captain & crew 3 
Price per hour  2700 aed 
Capacity: up to 50 person

High seas yacht 115 feet (1)
Cabins 5
captain & crew 6
Price per hour  16000 aed 
Capacity: up to 35 person

High seas yacht 120 feet 
Cabins 5
captain & crew 5
Price per hour  16000 aed 
Capacity: up to 25 person

High seas yacht 110 feet (2)
Cabins 5
captain & crew 4
Price per hour 6500 aed 
Capacity: up to 20 person

High seas yacht 125 feet 
Cabins 3 
captain & crew 6 
Price per hour 5000 aed 
Capacity: up to 100 person

High seas yacht 131 feet 
Cabins 5 
With jacuzzi 
captain & crew 9 
Price per hour 14500 aed 
Capacity: up to 30 person   

High seas yacht 154 feet 
Cabins 5 
With jacuzzi 
captain & crew 5 
Price per hour 7000 aed 
Capacity: up to 100 person   

High seas yacht 164 feet 
Cabins 5 
With jacuzzi 
captain & crew 9 
Price per hour 16000  aed 
Capacity: up to 50 person

High seas yacht 160 feet 
Cabins 3
captain & crew 6 
Price per hour 6000 aed 
Capacity: up to 250 person
`;

const lines = rawData.split('\n').map(l => l.trim()).filter(l => l);
const newYachts = [];
let current = {};

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.toLowerCase().startsWith('high seas yacht')) {
    if (Object.keys(current).length > 0) {
      newYachts.push(current);
    }
    current = {
      name: line.replace(/\s+/g, ' ').trim(),
      cabins: 0,
      crew: 0,
      pricePerHour: 0,
      capacity: 0,
      hasJacuzzi: false
    };
  } else if (line.toLowerCase().startsWith('cabins')) {
    current.cabins = parseInt(line.replace(/[^\d]/g, ''), 10) || 0;
  } else if (line.toLowerCase().startsWith('captain')) {
    current.crew = parseInt(line.replace(/[^\d]/g, ''), 10) || 0;
  } else if (line.toLowerCase().startsWith('price per hour')) {
    current.pricePerHour = parseInt(line.replace(/[^\d]/g, ''), 10) || 0;
  } else if (line.toLowerCase().startsWith('capacity')) {
    current.capacity = parseInt(line.replace(/[^\d]/g, ''), 10) || 0;
  } else if (line.toLowerCase().includes('jacuzzi')) {
    current.hasJacuzzi = true;
  }
}
if (Object.keys(current).length > 0) newYachts.push(current);

if (!fs.existsSync(publicYachtsDir)) {
  fs.mkdirSync(publicYachtsDir, { recursive: true });
}

// Generate slug for ID
function slugify(text) {
  return text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
}

const finalYachtsList = [];

// Manually extract length from name
function getLength(name) {
  const match = name.match(/(\d+)\s*feet/i);
  return match ? `${match[1]}ft` : 'Unknown length';
}

const sourceFolders = fs.readdirSync(sourceImagesDir);

for (const y of newYachts) {
  const id = slugify(y.name);
  const length = getLength(y.name);
  
  // Find matching folder
  // They might have trailing spaces or similar, so let's match closely
  let matchingFolder = sourceFolders.find(f => {
    // Exact match ignoring case and multiple spaces
    const cleanF = f.toLowerCase().replace(/\s+/g, ' ').trim();
    const cleanY = y.name.toLowerCase().replace(/\s+/g, ' ').trim();
    return cleanF === cleanY;
  });
  
  if (!matchingFolder) {
    // Try without numbers in parens for loose match if not found exactly
    const baseName = y.name.replace(/\(\d+\)/g, '').trim().toLowerCase().replace(/\s+/g, ' ');
    matchingFolder = sourceFolders.find(f => {
      const cleanF = f.replace(/\(\d+\)/g, '').trim().toLowerCase().replace(/\s+/g, ' ');
      return cleanF === baseName;
    });
  }
  
  const destDir = path.join(publicYachtsDir, id);
  let galleryImages = [];
  let principalImage = null;

  if (matchingFolder && !matchingFolder.toLowerCase().includes('(pdf)')) {
    const srcDirPath = path.join(sourceImagesDir, matchingFolder);
    if (fs.existsSync(srcDirPath) && fs.statSync(srcDirPath).isDirectory()) {
      if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
      
      const files = fs.readdirSync(srcDirPath)
        .filter(f => f.match(/\.(jpg|jpeg|png|webp)$/i))
        .sort(); // sort alphabetically
        
      if (files.length > 0) {
        // First one is principal
        const principalSrc = path.join(srcDirPath, files[0]);
        const extType = path.extname(files[0]);
        const principalDestName = "principal" + extType;
        fs.copyFileSync(principalSrc, path.join(destDir, principalDestName));
        principalImage = "/images/yachts/" + id + "/" + principalDestName;
        
        // Rest are gallery
        for (let j = 1; j < files.length; j++) {
          const srcFile = path.join(srcDirPath, files[j]);
          const ext = path.extname(files[j]);
          const destName = "gallery-" + j + ext;
          fs.copyFileSync(srcFile, path.join(destDir, destName));
          galleryImages.push("/images/yachts/" + id + "/" + destName);
        }
      }
    }
  }

  // Generate description text
  let desc = y.name + ". Price per hour " + y.pricePerHour + " aed. Capacity " + y.capacity + " pax. Cabins " + y.cabins + ". Crew " + y.crew + ".";
  if (y.hasJacuzzi) desc += " Features a Jacuzzi.";

  finalYachtsList.push({
    id,
    name: y.name,
    principalImage,
    galleryImages,
    descriptionFile: null,
    descriptionText: desc,
    pricePerHour: y.pricePerHour,
    pricePerDay: 0,
    capacity: y.capacity,
    cabins: y.cabins,
    length
  });
}

// Add the original 61, 48, and 52 feet yachts WITH MODIFICATIONS
// I need to extract them from the old yachts.ts, but wait! I already have their data from earlier. 
// I'll just hardcode them based on the views.

const old61 = {
    id: "big-boy-yacht-61-feet",
    name: "High Seas Yacht 61 feet",
    principalImage: "/images/yachts/big-boy-yacht-61-feet/principal.jpeg",
    galleryImages: [
      "/images/yachts/big-boy-yacht-61-feet/gallery-1773497100134.jpeg",
      "/images/yachts/big-boy-yacht-61-feet/gallery-1773497100560.jpeg",
      "/images/yachts/big-boy-yacht-61-feet/gallery-1773497100804.jpeg",
      "/images/yachts/big-boy-yacht-61-feet/gallery-1773497100676.jpeg",
      "/images/yachts/big-boy-yacht-61-feet/gallery-1773497100227.jpeg",
      "/images/yachts/big-boy-yacht-61-feet/gallery-1773497100295.jpeg",
      "/images/yachts/big-boy-yacht-61-feet/gallery-1773497100898.jpeg",
      "/images/yachts/big-boy-yacht-61-feet/gallery-1773497100579.jpeg",
      "/images/yachts/big-boy-yacht-61-feet/gallery-1773497100601.jpeg"
    ],
    descriptionFile: "High Seas Yacht 61 feet.docx",
    descriptionText: "High Seas Yacht 61 feet. Price per hour 750 aed. Capacity 18 pax. Cabins 3",
    pricePerHour: 750,
    pricePerDay: 6500,
    capacity: 18,
    cabins: 3,
    length: "61ft"
};

const old48 = {
    id: "big-boy-yacht-48",
    name: "High Seas Yacht 48",
    principalImage: "/images/yachts/big-boy-yacht-48/principal.jpeg",
    galleryImages: [
      "/images/yachts/big-boy-yacht-48/gallery-1773497100074.jpeg",
      "/images/yachts/big-boy-yacht-48/gallery-1773497100614.jpeg",
      "/images/yachts/big-boy-yacht-48/gallery-1773497100731.jpeg",
      "/images/yachts/big-boy-yacht-48/gallery-1773497099990.jpeg",
      "/images/yachts/big-boy-yacht-48/gallery-1773497100474.jpeg",
      "/images/yachts/big-boy-yacht-48/gallery-1773497100588.jpeg",
      "/images/yachts/big-boy-yacht-48/gallery-1773497100191.jpeg",
      "/images/yachts/big-boy-yacht-48/gallery-1773497100381.jpeg",
      "/images/yachts/big-boy-yacht-48/gallery-1773497100080.jpeg",
      "/images/yachts/big-boy-yacht-48/gallery-1773497100465.jpeg",
      "/images/yachts/big-boy-yacht-48/gallery-1773497100147.jpeg"
    ],
    descriptionFile: "High Seas Yacht 48 feet.docx",
    descriptionText: "High Seas Yacht 48 feet. Price per hour 550 aed. Cabins 2. Captain and crew 2.",
    pricePerHour: 550,
    pricePerDay: 5000,
    capacity: 10,
    cabins: 2, // MODIFIED
    length: "48ft"
};

const old52 = {
    id: "big-boy-yacht-52-feet",
    name: "High Seas Yacht 52 feet",
    principalImage: "/images/yachts/big-boy-yacht-52-feet/principal.jpeg",
    galleryImages: [
      "/images/yachts/big-boy-yacht-52-feet/gallery-1773497100825.jpeg",
      "/images/yachts/big-boy-yacht-52-feet/gallery-1773497100423.jpeg",
      "/images/yachts/big-boy-yacht-52-feet/gallery-1773497100308.jpeg",
      "/images/yachts/big-boy-yacht-52-feet/gallery-1773497100314.jpeg",
      "/images/yachts/big-boy-yacht-52-feet/gallery-1773497100212.jpeg",
      "/images/yachts/big-boy-yacht-52-feet/gallery-1773497100526.jpeg",
      "/images/yachts/big-boy-yacht-52-feet/gallery-1773497100661.jpeg",
      "/images/yachts/big-boy-yacht-52-feet/gallery-1773497100220.jpeg",
      "/images/yachts/big-boy-yacht-52-feet/gallery-1773497100422.jpeg",
      "/images/yachts/big-boy-yacht-52-feet/gallery-1773497100331.jpeg",
      "/images/yachts/big-boy-yacht-52-feet/gallery-1773497100297.jpeg",
      "/images/yachts/big-boy-yacht-52-feet/gallery-1773497100694.jpeg",
      "/images/yachts/big-boy-yacht-52-feet/gallery-1773497100087.jpeg",
      "/images/yachts/big-boy-yacht-52-feet/gallery-1773497100823.jpeg"
    ],
    descriptionFile: "High Seas Yacht 52 feet.docx",
    descriptionText: "High Seas Yacht 52 feet. Price per hour 650 aed. Capacity 3 pax. Cabins 3.", // MODIFIED
    pricePerHour: 650, // MODIFIED
    pricePerDay: 5000,
    capacity: 3, // MODIFIED
    cabins: 3, // MODIFIED
    length: "52ft"
};

finalYachtsList.push(old48, old52, old61);

const tsContent = "export interface Yacht {\\n  id: string;\\n  name: string;\\n  principalImage: string | null;\\n  galleryImages: string[];\\n  descriptionFile: string | null;\\n  descriptionText: string;\\n  pricePerHour: number;\\n  pricePerDay: number;\\n  capacity: number;\\n  cabins: number;\\n  length: string;\\n}\\n\\nexport const yachts: Yacht[] = " + JSON.stringify(finalYachtsList, null, 2) + ";\\n";

fs.writeFileSync(yachtsTsPath, tsContent, 'utf8');

console.log("Migration complete. Extracted", finalYachtsList.length, "yachts.");
