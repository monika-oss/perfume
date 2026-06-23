import { Jimp } from 'jimp';

async function analyzeImage() {
  const image = await Jimp.read('public/images/footer_perfumes_v3.png');
  const width = image.bitmap.width;
  const height = image.bitmap.height;
  
  let hasTransparency = false;
  let transparentPixels = 0;
  
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const color = image.getPixelColor(x, y);
      const rgba = Jimp.intToRGBA(color);
      if (rgba.a < 255) {
        hasTransparency = true;
        transparentPixels++;
      }
    }
  }
  
  const topLeftColor = Jimp.intToRGBA(image.getPixelColor(0, 0));
  
  console.log(`Dimensions: ${width}x${height}`);
  console.log(`Has Transparency: ${hasTransparency} (${transparentPixels} pixels)`);
  console.log(`Top Left Pixel: rgba(${topLeftColor.r}, ${topLeftColor.g}, ${topLeftColor.b}, ${topLeftColor.a})`);
}

analyzeImage();
