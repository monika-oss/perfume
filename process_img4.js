import { Jimp } from 'jimp';

async function processImage() {
  try {
    const image = await Jimp.read('public/images/footer_perfumes_v7.png');
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    
    // We expect the generated image to have a white background.
    const visited = new Uint8Array(width * height);
    const queue = [];
    
    function enqueue(x, y) {
      if (x < 0 || x >= width || y < 0 || y >= height) return;
      if (visited[y * width + x]) return;
      
      const color = image.getPixelColor(x, y);
      const r = (color >> 24) & 255;
      const g = (color >> 16) & 255;
      const b = (color >> 8) & 255;
      
      // Check if it is close to white (high RGB)
      if (r > 230 && g > 230 && b > 230) {
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
      
      // Make it transparent
      image.setPixelColor(0x00000000, x, y);
      
      enqueue(x + 1, y);
      enqueue(x - 1, y);
      enqueue(x, y + 1);
      enqueue(x, y - 1);
    }
    
    // Smooth edges
    for (let x = 1; x < width - 1; x++) {
      for (let y = 1; y < height - 1; y++) {
        if (!visited[y * width + x]) {
          if (visited[(y-1) * width + x] || visited[(y+1) * width + x] || visited[y * width + x - 1] || visited[y * width + x + 1]) {
            const color = image.getPixelColor(x, y);
            const r = (color >> 24) & 255;
            const g = (color >> 16) & 255;
            const b = (color >> 8) & 255;
            if (r > 200 && g > 200 && b > 200) {
                const newAlpha = 150; // semi transparent
                const newColor = ((r << 24) | (g << 16) | (b << 8) | newAlpha) >>> 0;
                image.setPixelColor(newColor, x, y);
            }
          }
        }
      }
    }

    await image.write('public/images/footer_perfumes_v8.png');
    console.log('Saved v8 with white background removed via flood fill');
  } catch (e) {
    console.error(e);
  }
}

processImage();
