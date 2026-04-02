const fs = require('fs');
const path = require('path');

const rootDir = process.argv[2] || './src';

function walk(dir, callback) {
  fs.readdirSync(dir).forEach( f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ?
      walk(dirPath, callback) : callback(path.join(dir, f));
  });
};

const replacements = [
  { search: /Elite/g, replace: 'Premier' },
  { search: /elite/g, replace: 'premier' },
  { search: /ELITE/g, replace: 'PREMIER' }
];

walk(rootDir, (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.json') || filePath.endsWith('.css')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Specifically handle the email/domain case as requested by omission (actually user said "omit that part" about the note, but didn't say keep or change it. Better to avoid changing tech IDs if not sure, but user said "dondequiera que este".)
    // However, changing elitemarinadubai.com might break things. I'll stick to text patterns.
    
    replacements.forEach(r => {
      content = content.replace(r.search, r.replace);
    });

    if (content !== original) {
      console.log(`Updated: ${filePath}`);
      fs.writeFileSync(filePath, content, 'utf8');
    }
  }
});
