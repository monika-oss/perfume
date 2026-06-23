import { Jimp } from 'jimp';

async function cropPerfect() {
  try {
    const response = await fetch('https://5.imimg.com/data5/SELLER/Logo/2024/1/378442154/OP/FY/KK/44209622/sai-tirupati-logo-90x90.jpeg');
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    const image = await Jimp.read(buffer);
    // Crop exactly to height 77 to include the entire circle (ends at y=74) and exclude the text (starts at y=80)
    const cropped = image.clone().crop({ x: 0, y: 0, w: 90, h: 77 });
    await cropped.write('public/images/logo.png');
    console.log('Perfectly cropped logo saved to public/images/logo.png!');
  } catch (err) {
    console.error('Error during cropPerfect:', err.message);
  }
}

cropPerfect();
