import { Jimp } from 'jimp';

async function processImage() {
  try {
    const image = await Jimp.read('public/images/footer_perfumes_v3.png');
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    
    // The poster background is a dark purple.
    // Let's define a function to check if a color is a dark purple/background color.
    function isBackground(c) {
      const r = (c >> 24) & 255;
      const g = (c >> 16) & 255;
      const b = (c >> 8) & 255;
      
      // The background in the poster is usually a dark purplish color
      // e.g., r < 80, g < 50, b < 120
      // Let's check the hue and brightness. If it's dark purple/blue, we make it transparent.
      // Bottles are golden (high R and G) and violet (some have bright violet).
      // Background is very dark.
      const isDark = r < 70 && g < 40 && b < 130;
      
      // Let's also check a sample from the top-left to get a baseline
      return isDark;
    }

    // We can also just flood fill from the edges to be safe and only remove contiguous background
    const visited = new Uint8Array(width * height);
    const queue = [];
    
    function enqueue(x, y) {
      if (x < 0 || x >= width || y < 0 || y >= height) return;
      if (visited[y * width + x]) return;
      
      const color = image.getPixelColor(x, y);
      const r = (color >> 24) & 255;
      const g = (color >> 16) & 255;
      const b = (color >> 8) & 255;
      
      // If it's relatively dark and purplish (background color)
      // Or if it's very close to black
      if ((r < 90 && g < 60 && b < 150) && (r + g + b < 250)) {
        visited[y * width + x] = 1;
        queue.push({x, y});
      }
    }

    // Add all border pixels to queue
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
      image.setPixelColor(0x00000000, x, y); // make it transparent
      
      enqueue(x + 1, y);
      enqueue(x - 1, y);
      enqueue(x, y + 1);
      enqueue(x, y - 1);
    }
    
    // Also do a secondary pass to feather the edges or remove isolated dark purple spots
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        if (!visited[y * width + x]) {
          const color = image.getPixelColor(x, y);
          const r = (color >> 24) & 255;
          const g = (color >> 16) & 255;
          const b = (color >> 8) & 255;
          // Clean up artifacts that are very dark purple
          if (r < 60 && g < 30 && b < 90) {
            image.setPixelColor(0x00000000, x, y);
          }
        }
      }
    }

    await image.write('public/images/footer_perfumes_v5.png');
    console.log('Processed image with flood fill saved as footer_perfumes_v5.png');
  } catch (e) {
    console.error(e);
  }
}

processImage();
