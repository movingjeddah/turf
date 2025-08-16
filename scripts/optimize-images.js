#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Image optimization settings
const optimizationSettings = {
  webp: {
    quality: 85,
    effort: 6,
    smartSubsample: true
  },
  avif: {
    quality: 80,
    effort: 6,
    chromaSubsampling: '4:2:0'
  },
  jpeg: {
    quality: 85,
    progressive: true,
    optimizeScans: true
  },
  png: {
    quality: 85,
    compressionLevel: 9,
    palette: true
  }
};

// Responsive image sizes
const responsiveSizes = [
  { width: 640, suffix: '-sm' },
  { width: 768, suffix: '-md' },
  { width: 1024, suffix: '-lg' },
  { width: 1280, suffix: '-xl' },
  { width: 1920, suffix: '-2xl' }
];

async function optimizeImage(inputPath, outputPath, options = {}) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    console.log(`🖼️  Optimizing: ${path.basename(inputPath)} (${metadata.width}x${metadata.height})`);

    // Generate WebP version
    await image
      .webp(optimizationSettings.webp)
      .toFile(outputPath.replace(path.extname(outputPath), '.webp'));

    // Generate AVIF version (best compression)
    await image
      .avif(optimizationSettings.avif)
      .toFile(outputPath.replace(path.extname(outputPath), '.avif'));

    // Generate responsive sizes for WebP
    for (const size of responsiveSizes) {
      if (metadata.width && metadata.width > size.width) {
        await image
          .resize(size.width, null, { 
            withoutEnlargement: true,
            fastShrinkOnLoad: false 
          })
          .webp(optimizationSettings.webp)
          .toFile(outputPath.replace(path.extname(outputPath), `${size.suffix}.webp`));
      }
    }

    console.log(`✅ Optimized: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`❌ Error optimizing ${path.basename(inputPath)}:`, error.message);
  }
}

async function processDirectory(dirPath, outputDirPath) {
  const items = fs.readdirSync(dirPath);

  for (const item of items) {
    const itemPath = path.join(dirPath, item);
    const outputItemPath = path.join(outputDirPath, item);
    
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      // Create subdirectory in output
      if (!fs.existsSync(outputItemPath)) {
        fs.mkdirSync(outputItemPath, { recursive: true });
      }
      
      // Recursively process subdirectory
      await processDirectory(itemPath, outputItemPath);
    } else if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase();
      
      // Only process image files
      if (['.jpg', '.jpeg', '.png', '.webp', '.tiff', '.bmp'].includes(ext)) {
        await optimizeImage(itemPath, outputItemPath);
      }
    }
  }
}

async function main() {
  console.log('🚀 Starting image optimization...');
  console.log(`📁 Input directory: ${imageDir}`);
  console.log(`📁 Output directory: ${outputDir}`);
  
  const startTime = Date.now();
  
  try {
    await processDirectory(imageDir, outputDir);
    
    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);
    
    console.log(`🎉 Image optimization completed in ${duration}s`);
    
    // Calculate savings
    const getDirectorySize = (dirPath) => {
      let totalSize = 0;
      const items = fs.readdirSync(dirPath);
      
      items.forEach(item => {
        const itemPath = path.join(dirPath, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isFile()) {
          totalSize += stat.size;
        } else if (stat.isDirectory()) {
          totalSize += getDirectorySize(itemPath);
        }
      });
      
      return totalSize;
    };
    
    const originalSize = getDirectorySize(imageDir);
    const optimizedSize = getDirectorySize(outputDir);
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`💾 Size reduction: ${savings}% (${(originalSize / 1024 / 1024).toFixed(1)}MB → ${(optimizedSize / 1024 / 1024).toFixed(1)}MB)`);
    
  } catch (error) {
    console.error('❌ Optimization failed:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { optimizeImage, processDirectory };
