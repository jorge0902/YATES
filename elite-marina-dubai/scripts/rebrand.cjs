const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'c:/Users/HP 640 G4/Downloads/yates/elite-marina-dubai/src/locales/en.json',
  'c:/Users/HP 640 G4/Downloads/yates/elite-marina-dubai/src/locales/es.json',
  'c:/Users/HP 640 G4/Downloads/yates/elite-marina-dubai/src/locales/ar.json',
  'c:/Users/HP 640 G4/Downloads/yates/elite-marina-dubai/src/data/yachts.ts',
  'c:/Users/HP 640 G4/Downloads/yates/elite-marina-dubai/YACHT_SPECIFICATIONS.md'
];

const replacements = [
  { search: /BIG BOY/g, replace: 'High Seas YACHT' },
  { search: /Big Boy/g, replace: 'High Seas YACHT' },
  { search: /big boy/g, replace: 'High Seas YACHT' }
];

filesToUpdate.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    replacements.forEach(r => {
      content = content.replace(r.search, r.replace);
    });
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});
