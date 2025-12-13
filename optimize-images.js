import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function optimizeImage(inputPath, outputPath, maxWidth = 1920, quality = 85) {
  try {
    const metadata = await sharp(inputPath).metadata();
    const width = Math.min(metadata.width, maxWidth);
    
    // Create output directory if it doesn't exist
    const outputDir = dirname(outputPath);
    if (!existsSync(outputDir)) {
      await mkdir(outputDir, { recursive: true });
    }
    
    // Optimize and resize
    await sharp(inputPath)
      .resize(width, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ quality, mozjpeg: true })
      .toFile(outputPath);
    
    // Also create WebP version
    const webpPath = outputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    await sharp(inputPath)
      .resize(width, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality })
      .toFile(webpPath);
    
    const stats = await import('fs').then(fs => fs.promises.stat(outputPath));
    console.log(`✓ Optimized: ${inputPath} -> ${outputPath} (${(stats.size / 1024).toFixed(2)}KB)`);
    return { jpg: outputPath, webp: webpPath };
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error.message);
    throw error;
  }
}

// Optimize existing cracked-screen.png
const existingImage = join(__dirname, 'public', 'laptop-repair', 'cracked-screen.png');
const outputImage = join(__dirname, 'public', 'laptop-repair', 'cracked-laptop-screen.jpg');

if (existsSync(existingImage)) {
  optimizeImage(existingImage, outputImage, 1920, 85)
    .then(() => console.log('Existing image optimized!'))
    .catch(err => {
      console.error('Error:', err);
      process.exit(1);
    });
} else {
  console.log('Existing image not found, skipping...');
}



