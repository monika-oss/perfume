import { Jimp } from 'jimp';

async function processImage() {
  const image = await Jimp.read('public/images/footer_perfumes_v3.png');
  const width = image.bitmap.width;
  const height = image.bitmap.height;
  
  // Get color of top-left pixel (assumed to be background)
  const bgColor = image.getPixelColor(0, 0);
  
  // Tolerance for color matching
  const tolerance = 30; // adjust if needed
  
  // Function to calculate difference between two colors
  function colorDiff(c1, c2) {
    const r1 = (c1 >> 24) & 255;
    const g1 = (c1 >> 16) & 255;
    const b1 = (c1 >> 8) & 255;
    const a1 = c1 & 255;
    
    const r2 = (c2 >> 24) & 255;
    const g2 = (c2 >> 16) & 255;
    const b2 = (c2 >> 8) & 255;
    
    return Math.abs(r1 - r2) + Math.abs(g1 - g2) + Math.abs(b1 - b2);
  }
  
  // Iterate through all pixels and make background transparent
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const color = image.getPixelColor(x, y);
      if (colorDiff(color, bgColor) < tolerance) {
        // Set alpha to 0 (transparent)
        image.setPixelColor((color & 0xFFFFFF00) | 0x00, x, y);
      }
    }
  }
  
  await image.write('public/images/footer_perfumes_v4.png');
  console.log('Processed image saved as footer_perfumes_v4.png');
}

processImage().catch(console.error);
