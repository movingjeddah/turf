/**
 * Convert SVG icons to PNG format for better PWA compatibility
 * Especially important for iOS devices
 */

const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

// Icon sizes needed for PWA
const iconSizes = [
  16,   // Favicon
  32,   // Favicon
  72,   // Android
  96,   // Android
  128,  // Chrome Web Store
  144,  // Android
  152,  // iOS
  192,  // Android
  384,  // Android
  512   // Android
];

// SVG template for icon (green leaf design)
const createSvgIcon = (size) => {
  return Buffer.from(`
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${size}" height="${size}" fill="#36bf36"/>
      <g transform="translate(${size/2}, ${size/2})">
        <path d="M 0,-${size*0.35} Q -${size*0.2},-${size*0.2} -${size*0.35},0 Q -${size*0.2},${size*0.2} 0,${size*0.35} Q ${size*0.2},${size*0.2} ${size*0.35},0 Q ${size*0.2},-${size*0.2} 0,-${size*0.35}" 
              fill="white" 
              opacity="0.9"/>
        <line x1="0" y1="${size*0.35}" x2="0" y2="${size*0.1}" 
              stroke="white" 
              stroke-width="${size*0.02}" 
              opacity="0.9"/>
      </g>
      <text x="${size/2}" y="${size*0.85}" 
            font-family="Arial, sans-serif" 
            font-size="${size*0.15}" 
            font-weight="bold" 
            fill="white" 
            text-anchor="middle">
        حدائق
      </text>
    </svg>
  `);
};

async function convertSvgToPng() {
  try {
    // Create icons directory if it doesn't exist
    const iconsDir = path.join(process.cwd(), 'public', 'icons');
    await fs.mkdir(iconsDir, { recursive: true });

    console.log('🎨 Starting icon conversion from SVG to PNG...\n');

    // Generate PNG icons for each size
    for (const size of iconSizes) {
      const svgBuffer = createSvgIcon(size);
      const pngPath = path.join(iconsDir, `icon-${size}x${size}.png`);
      
      await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toFile(pngPath);
      
      console.log(`✅ Generated ${pngPath}`);
    }

    // Generate maskable icon (with padding for safe area)
    const maskableSize = 512;
    const maskableSvg = Buffer.from(`
      <svg width="${maskableSize}" height="${maskableSize}" viewBox="0 0 ${maskableSize} ${maskableSize}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${maskableSize}" height="${maskableSize}" fill="#36bf36"/>
        <circle cx="${maskableSize/2}" cy="${maskableSize/2}" r="200" fill="white" opacity="0.1"/>
        <g transform="translate(${maskableSize/2}, ${maskableSize/2})">
          <path d="M 0,-140 Q -80,-80 -140,0 Q -80,80 0,140 Q 80,80 140,0 Q 80,-80 0,-140" 
                fill="white" 
                opacity="0.9"/>
          <line x1="0" y1="140" x2="0" y2="40" 
                stroke="white" 
                stroke-width="8" 
                opacity="0.9"/>
        </g>
      </svg>
    `);

    await sharp(maskableSvg)
      .resize(maskableSize, maskableSize)
      .png()
      .toFile(path.join(iconsDir, 'maskable-icon-512x512.png'));
    
    console.log(`✅ Generated maskable icon\n`);

    // Generate apple-touch-icon (180x180)
    const appleTouchIcon = createSvgIcon(180);
    await sharp(appleTouchIcon)
      .resize(180, 180)
      .png()
      .toFile(path.join(process.cwd(), 'public', 'apple-touch-icon.png'));
    
    console.log('✅ Generated apple-touch-icon.png');

    // Generate favicon files
    const favicon32 = createSvgIcon(32);
    await sharp(favicon32)
      .resize(32, 32)
      .png()
      .toFile(path.join(process.cwd(), 'public', 'favicon-32x32.png'));
    
    const favicon16 = createSvgIcon(16);
    await sharp(favicon16)
      .resize(16, 16)
      .png()
      .toFile(path.join(process.cwd(), 'public', 'favicon-16x16.png'));
    
    console.log('✅ Generated favicon-32x32.png');
    console.log('✅ Generated favicon-16x16.png');

    // Generate favicon.ico (multi-resolution)
    // Note: For a proper .ico file, you'd need a specialized library
    // For now, we'll create a 16x16 PNG as fallback
    await sharp(favicon16)
      .resize(16, 16)
      .png()
      .toFile(path.join(process.cwd(), 'public', 'favicon.png'));
    
    console.log('✅ Generated favicon.png (use as fallback)\n');

    console.log('🎉 Icon conversion complete!');
    console.log('📝 Note: For favicon.ico, use an online converter or ico library');
    console.log('   Recommended: https://favicon.io/ or https://realfavicongenerator.net/');

  } catch (error) {
    console.error('❌ Error converting icons:', error);
    process.exit(1);
  }
}

// Run the conversion
convertSvgToPng();
