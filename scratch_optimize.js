const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'public/DSC_4999.jpg');
const webOutputPath = path.join(__dirname, 'public/hero-optimized.webp');
const ogOutputPath = path.join(__dirname, 'public/og-preview.jpg');

async function optimize() {
  try {
    console.log('Optimizing images...');
    
    // 1. Web main photo: WebP format, width 800px, quality 80
    const info1 = await sharp(inputPath)
      .resize({ width: 800 })
      .webp({ quality: 80 })
      .toFile(webOutputPath);
    console.log(`Created web hero: public/hero-optimized.webp (${(info1.size / 1024).toFixed(2)} KB)`);

    // 2. OpenGraph / WhatsApp Preview: JPEG format, 1200x630 (landscape), quality 70
    // JPEG is 100% compatible with all mobile messaging clients.
    const info2 = await sharp(inputPath)
      .resize({
        width: 1200,
        height: 630,
        fit: 'cover',
        position: 'entropy'
      })
      .jpeg({ quality: 70, progressive: true })
      .toFile(ogOutputPath);
    console.log(`Created openGraph preview: public/og-preview.jpg (${(info2.size / 1024).toFixed(2)} KB)`);

    console.log('Optimization complete!');
  } catch (err) {
    console.error('Error optimizing image:', err);
  }
}

optimize();
