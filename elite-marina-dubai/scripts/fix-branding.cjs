const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'c:/Users/HP 640 G4/Downloads/yates/elite-marina-dubai/src/locales/en.json',
  'c:/Users/HP 640 G4/Downloads/yates/elite-marina-dubai/src/locales/es.json',
  'c:/Users/HP 640 G4/Downloads/yates/elite-marina-dubai/src/locales/ar.json',
  'c:/Users/HP 640 G4/Downloads/yates/elite-marina-dubai/src/data/yachts.ts',
  'c:/Users/HP 640 G4/Downloads/yates/elite-marina-dubai/YACHT_SPECIFICATIONS.md'
];

filesToUpdate.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/High Seas YACHT YACHT/g, 'High Seas YACHT');
    content = content.replace(/High Seas Yacht YACHT/g, 'High Seas YACHT'); // Just in case
    content = content.replace(/YACHT YACHT/g, 'YACHT');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed ${filePath}`);
  }
});
