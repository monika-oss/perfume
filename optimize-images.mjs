import sharp from 'sharp';
import { readdirSync, existsSync } from 'fs';
import { join, extname } from 'path';

const sourceDir = './public/images';
const destDir = './public/images'; 

async function optimizeImages() {
  console.log(`Scanning for .png files in ${sourceDir}...`);
  
  if (!existsSync(sourceDir)) {
    console.error(`Directory ${sourceDir} does not exist!`);
    return;
  }

  const files = readdirSync(sourceDir);
  const pngFiles = files.filter(file => extname(file).toLowerCase() === '.png');

  if (pngFiles.length === 0) {
    console.log('No .png files found.');
    return;
  }

  console.log(`Found ${pngFiles.length} PNG files. Converting to WebP...`);

  for (const file of pngFiles) {
    const inputPath = join(sourceDir, file);
    const fileNameWithoutExt = file.replace(/\.[^/.]+$/, "");
    const outputPath = join(destDir, `${fileNameWithoutExt}.webp`);

    try {
      await sharp(inputPath)
        .webp({ quality: 80, effort: 6 })
        .toFile(outputPath);
      console.log(`✅ Converted: ${file} -> ${fileNameWithoutExt}.webp`);
    } catch (err) {
      console.error(`❌ Error converting ${file}:`, err);
    }
  }
  
  console.log('🎉 All images processed successfully!');
}

optimizeImages();
