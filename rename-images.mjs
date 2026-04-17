import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'public', 'images');

console.log('Starting image rename process...\n');
console.log(`Looking in: ${imagesDir}\n`);

const files = fs.readdirSync(imagesDir);

files.forEach(file => {
  const oldPath = path.join(imagesDir, file);
  
  // Only process image files
  if (!file.match(/\.(png|jpg|jpeg|gif|svg)$/i)) {
    return;
  }
  
  // Remove spaces and special characters, keep only alphanumeric and dots
  const newFileName = file
    .replace(/\s+/g, '')  // Remove all spaces
    .replace(/&/g, '')     // Remove ampersands
    .replace(/[()]/g, ''); // Remove parentheses
  
  const newPath = path.join(imagesDir, newFileName);
  
  // Only rename if the name actually changed
  if (oldPath !== newPath) {
    fs.renameSync(oldPath, newPath);
    console.log(`✓ Renamed: "${file}" → "${newFileName}"`);
  } else {
    console.log(`- Skipped: "${file}" (no changes needed)`);
  }
});

console.log('\n✅ Image renaming complete!');
