const fs = require('fs');

const filesToFix = [
  'c:/Users/HP 640 G4/Downloads/yates/elite-marina-dubai/src/data/yachts.ts',
  'c:/Users/HP 640 G4/Downloads/yates/elite-marina-dubai/src/locales/en.json',
  'c:/Users/HP 640 G4/Downloads/yates/elite-marina-dubai/src/locales/es.json',
  'c:/Users/HP 640 G4/Downloads/yates/elite-marina-dubai/src/locales/ar.json',
  'c:/Users/HP 640 G4/Downloads/yates/elite-marina-dubai/YACHT_SPECIFICATIONS.md',
];

filesToFix.forEach(filePath => {
  if (!fs.existsSync(filePath)) { console.log(`Not found: ${filePath}`); return; }
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix "High Seas YACHT  yacht" (double space + yacht)
  content = content.replace(/High Seas YACHT\s+yacht/gi, 'High Seas Yacht');
  // Fix "High Seas YACHT yacht" (YACHT uppercase + yacht lowercase)
  content = content.replace(/High Seas YACHT yacht/gi, 'High Seas Yacht');
  // Normalize remaining "High Seas YACHT" (all caps) to "High Seas Yacht" in names only
  // Keep "High Seas YACHT" in branding strings (those contain ™ or are standalone brand mentions)
  // For yacht name fields (before feet/AS/Pershing etc), normalize
  content = content.replace(/"name":\s*"High Seas YACHT\s*(.*?)"/g, (match, rest) => {
    return `"name": "High Seas Yacht ${rest.trim()}"`;
  });
  // Fix descriptionText and descriptionFile references
  content = content.replace(/High Seas YACHT (yacht \d+ feet|yacht \d+ feet\.do|48 feet|52 feet|53 feet|55 feet|58 feet|61 feet|72 feet|73 feet|74 feet|75 feet|82 feet|98 feet|101 feet|115 feet)/gi, (match) => {
    return match.replace(/High Seas YACHT/i, 'High Seas Yacht');
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed: ${filePath}`);
});
