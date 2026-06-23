import { Jimp } from 'jimp';
import fs from 'fs';

const inputFiles = [
  'C:\\Users\\preet\\.gemini\\antigravity-ide\\brain\\ce0daf13-9137-4e35-af62-4b0907a46bc7\\carousel_perfume_1_1782146829449.png',
  'C:\\Users\\preet\\.gemini\\antigravity-ide\\brain\\ce0daf13-9137-4e35-af62-4b0907a46bc7\\carousel_perfume_2_1782146843762.png',
  'C:\\Users\\preet\\.gemini\\antigravity-ide\\brain\\ce0daf13-9137-4e35-af62-4b0907a46bc7\\carousel_perfume_3_1782146859295.png'
];

const outputFiles = [
  'public/images/carousel_1.png',
  'public/images/carousel_2.png',
  'public/images/carousel_3.png'
];

async function processImage(inputPath, outputPath) {
  try {
    const image = await Jimp.read(inputPath);
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    
    const visited = new Uint8Array(width * height);
    const queue = [];
    
    function enqueue(x, y) {
      if (x < 0 || x >= width || y < 0 || y >= height) return;
      if (visited[y * width + x]) return;
      
      const color = image.getPixelColor(x, y);
      const r = (color >> 24) & 255;
      const g = (color >> 16) & 255;
      const b = (color >> 8) & 255;
      
      // If close to white, add to queue
      if (r > 220 && g > 220 && b > 220) {
        visited[y * width + x] = 1;
        queue.push({x, y});
      }
    }

    // Border
    for (let x = 0; x < width; x++) {
      enqueue(x, 0);
      enqueue(x, height - 1);
    }
    for (let y = 0; y < height; y++) {
      enqueue(0, y);
      enqueue(width - 1, y);
    }

    let i = 0;
    while (i < queue.length) {
      const {x, y} = queue[i++];
      image.setPixelColor(0x00000000, x, y);
      
      enqueue(x + 1, y);
      enqueue(x - 1, y);
      enqueue(x, y + 1);
      enqueue(x, y - 1);
    }
    
    // Smooth
    for (let x = 1; x < width - 1; x++) {
      for (let y = 1; y < height - 1; y++) {
        if (!visited[y * width + x]) {
          if (visited[(y-1) * width + x] || visited[(y+1) * width + x] || visited[y * width + x - 1] || visited[y * width + x + 1]) {
            const color = image.getPixelColor(x, y);
            const r = (color >> 24) & 255;
            const g = (color >> 16) & 255;
            const b = (color >> 8) & 255;
            if (r > 200 && g > 200 && b > 200) {
                const newColor = ((r << 24) | (g << 16) | (b << 8) | 120) >>> 0;
                image.setPixelColor(newColor, x, y);
            }
          }
        }
      }
    }

    await image.write(outputPath);
    console.log(`Saved ${outputPath}`);
  } catch (e) {
    console.error(`Error processing ${inputPath}:`, e);
  }
}

async function runAll() {
    for (let i=0; i<3; i++) {
        await processImage(inputFiles[i], outputFiles[i]);
    }
}
runAll();
