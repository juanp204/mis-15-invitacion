const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'public/DSC_4999.jpg');
const webOutputPath = path.join(__dirname, 'public/hero-optimized.webp');
const ogOutputPath = path.join(__dirname, 'public/og-preview.webp');

async function optimize() {
  try {
    console.log('Optimizing images keeping original size (2016x3024) with low quality...');
    
    // 1. Web main photo (Original dimensions 2016x3024, quality 60)
    const info1 = await sharp(inputPath)
      .webp({ quality: 60 })
      .toFile(webOutputPath);
    console.log(`Created web hero: public/hero-optimized.webp (${(info1.size / 1024).toFixed(2)} KB)`);

    // 2. OpenGraph / WhatsApp Preview (Original dimensions 2016x3024, quality 40)
    const info2 = await sharp(inputPath)
      .webp({ quality: 40 })
      .toFile(ogOutputPath);
    console.log(`Created openGraph preview: public/og-preview.webp (${(info2.size / 1024).toFixed(2)} KB)`);

    console.log('Optimization complete!');
  } catch (err) {
    console.error('Error optimizing image:', err);
  }
}

optimize();
