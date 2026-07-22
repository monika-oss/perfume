import sharp from 'sharp';
import { existsSync } from 'fs';
import { join } from 'path';

const sourceDir = './public/images';

const resizeTasks = [
  // Category Card images (displayed around 126x126 on mobile)
  { file: 'fresh_fragrance.png', width: 250 },
  { file: 'woody_fragrance.png', width: 250 },
  { file: 'floral_fragrance.png', width: 250 },
  { file: 'oriental_fragrance.png', width: 250 },
  { file: 'fruity_fragrance.png', width: 250 },
  { file: 'speciality_fragrance.png', width: 250 },
  // Carousel Hero images (displayed around 376x376 on mobile)
  { file: 'carousel_1.png', width: 800 },
  { file: 'carousel_2.png', width: 800 },
  { file: 'carousel_3.png', width: 800 }
];

async function runResize() {
  console.log('Starting image resizing...');
  for (const task of resizeTasks) {
    const inputPath = join(sourceDir, task.file);
    const outputPath = join(sourceDir, task.file.replace('.png', '.webp'));

    if (existsSync(inputPath)) {
      try {
        await sharp(inputPath)
          .resize({ width: task.width, withoutEnlargement: true }) // Automatically scales height proportionally
          .webp({ quality: 80, effort: 6 })
          .toFile(outputPath);
        console.log(`✅ Resized: ${task.file} down to ${task.width}px width`);
      } catch (err) {
        console.error(`❌ Error resizing ${task.file}:`, err);
      }
    }
  }
  console.log('🎉 Resizing complete!');
}

runResize();
