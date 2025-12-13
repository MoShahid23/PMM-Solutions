import sharp from 'sharp';
import { createWriteStream } from 'fs';
import { existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import { promisify } from 'util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Image URLs from Unsplash (free, no attribution required for commercial use)
// Using Unsplash Source API for direct downloads
const imageSources = {
  'phone-repair': [
    'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1920&q=80', // Cracked phone
    'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=1920&q=80', // Phone repair
  ],
  'data-recovery': [
    'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=1920&q=80', // Hard drive
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80', // SSD
  ],
  'computer-repair': [
    'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=1920&q=80', // Computer internals
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80', // Mac repair
  ],
  'apple-repair': [
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1920&q=80', // MacBook
    'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=1920&q=80', // iPad
  ],
  'virus-removal': [
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&q=80', // Computer screen error
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80', // Security
  ],
  'business-it-support': [
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80', // Server room
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80', // Network
  ],
  'hardware-upgrades': [
    'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=1920&q=80', // RAM/Components
    'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=1920&q=80', // SSD upgrade
  ],
  'system-tuneup': [
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80', // Computer performance
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&q=80', // Optimization
  ],
  'remote-support': [
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80', // Remote desktop
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&q=80', // Tech support
  ],
  'software-installation': [
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80', // Installation screen
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&q=80', // Software setup
  ],
};

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const dir = dirname(filepath);
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }
    
    const file = createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve(filepath);
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirect
        file.close();
        downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
      } else {
        file.close();
        reject(new Error(`Failed to download: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      reject(err);
    });
  });
}

async function optimizeImage(inputPath, outputJpg, outputWebp, maxWidth = 1920) {
  try {
    const metadata = await sharp(inputPath).metadata();
    const width = Math.min(metadata.width, maxWidth);
    
    // Create JPEG
    await sharp(inputPath)
      .resize(width, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ quality: 70, mozjpeg: true })
      .toFile(outputJpg);
    
    // Create WebP
    await sharp(inputPath)
      .resize(width, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: 80 })
      .toFile(outputWebp);
    
    const jpgStats = await import('fs').then(fs => fs.promises.stat(outputJpg));
    const webpStats = await import('fs').then(fs => fs.promises.stat(outputWebp));
    console.log(`✓ ${outputJpg}: ${(jpgStats.size / 1024).toFixed(2)}KB, WebP: ${(webpStats.size / 1024).toFixed(2)}KB`);
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error.message);
    throw error;
  }
}

async function processService(serviceName, imageUrls, imageNames) {
  console.log(`\nProcessing ${serviceName}...`);
  const serviceDir = join(__dirname, 'public', 'services', serviceName);
  
  for (let i = 0; i < imageUrls.length; i++) {
    const url = imageUrls[i];
    const name = imageNames[i];
    const tempPath = join(serviceDir, `temp-${name}.jpg`);
    const jpgPath = join(serviceDir, `${name}.jpg`);
    const webpPath = join(serviceDir, `${name}.webp`);
    
    try {
      console.log(`  Downloading ${name}...`);
      await downloadImage(url, tempPath);
      await optimizeImage(tempPath, jpgPath, webpPath);
      // Remove temp file
      await import('fs').then(fs => fs.promises.unlink(tempPath));
    } catch (error) {
      console.error(`  Error processing ${name}:`, error.message);
    }
  }
}

// Process all services
async function main() {
  const services = {
    'phone-repair': {
      urls: [
        'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1920&q=80',
        'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=1920&q=80',
      ],
      names: ['cracked-phone-screen', 'phone-repair-service']
    },
    'data-recovery': {
      urls: [
        'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=1920&q=80',
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
      ],
      names: ['damaged-hard-drive', 'ssd-data-recovery']
    },
    'computer-repair': {
      urls: [
        'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=1920&q=80',
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80',
      ],
      names: ['computer-internals-repair', 'mac-desktop-repair']
    },
    'apple-repair': {
      urls: [
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1920&q=80',
        'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=1920&q=80',
      ],
      names: ['macbook-repair', 'ipad-repair']
    },
    'virus-removal': {
      urls: [
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&q=80',
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80',
      ],
      names: ['computer-virus-error', 'antivirus-protection']
    },
    'business-it-support': {
      urls: [
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80',
      ],
      names: ['server-room', 'business-network']
    },
    'hardware-upgrades': {
      urls: [
        'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=1920&q=80',
        'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=1920&q=80',
      ],
      names: ['ram-upgrade', 'ssd-upgrade']
    },
    'system-tuneup': {
      urls: [
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&q=80',
      ],
      names: ['computer-performance', 'system-optimization']
    },
    'remote-support': {
      urls: [
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&q=80',
      ],
      names: ['remote-desktop-support', 'tech-support']
    },
    'software-installation': {
      urls: [
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&q=80',
      ],
      names: ['os-installation', 'software-setup']
    },
  };

  for (const [serviceName, config] of Object.entries(services)) {
    await processService(serviceName, config.urls, config.names);
  }
  
  console.log('\n✓ All images processed!');
}

main().catch(console.error);



