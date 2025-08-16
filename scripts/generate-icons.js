/**
 * Script to generate all required icons for PWA
 * Run: node scripts/generate-icons.js
 * 
 * This script creates placeholder icons. In production, replace with actual logo
 */

const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
const dirs = ['public/icons'];
dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// SVG template for the icon (green garden leaf)
const svgTemplate = (size) => `
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
`;

// Icon sizes to generate
const iconSizes = [16, 32, 72, 96, 128, 144, 152, 192, 384, 512];

// Generate SVG icons for each size
iconSizes.forEach(size => {
  const svg = svgTemplate(size);
  const filename = `public/icons/icon-${size}x${size}.svg`;
  fs.writeFileSync(filename, svg);
  console.log(`✅ Generated ${filename}`);
});

// Generate favicon.ico content (simplified)
const faviconSvg = svgTemplate(32);
fs.writeFileSync('public/favicon.svg', faviconSvg);
console.log('✅ Generated public/favicon.svg');

// Create apple-touch-icon
const appleTouchIconSvg = svgTemplate(180);
fs.writeFileSync('public/apple-touch-icon.svg', appleTouchIconSvg);
console.log('✅ Generated public/apple-touch-icon.svg');

// Create a simple favicon.ico reference
const icoContent = `<link rel="icon" type="image/svg+xml" href="/favicon.svg">`;
console.log('\n📌 Add this to your HTML head:', icoContent);

// Create maskable icon for PWA
const maskableSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#36bf36"/>
  <circle cx="256" cy="256" r="200" fill="white" opacity="0.1"/>
  <g transform="translate(256, 256)">
    <path d="M 0,-140 Q -80,-80 -140,0 Q -80,80 0,140 Q 80,80 140,0 Q 80,-80 0,-140" 
          fill="white" 
          opacity="0.9"/>
    <line x1="0" y1="140" x2="0" y2="40" 
          stroke="white" 
          stroke-width="8" 
          opacity="0.9"/>
  </g>
</svg>
`;
fs.writeFileSync('public/icons/maskable-icon-512x512.svg', maskableSvg);
console.log('✅ Generated public/icons/maskable-icon-512x512.svg');

console.log('\n✨ Icon generation complete!');
console.log('📝 Note: These are placeholder SVG icons. Replace with actual PNG/WebP logos for production.');
console.log('🎨 To convert SVG to PNG, use tools like:');
console.log('   - https://cloudconvert.com/svg-to-png');
console.log('   - ImageMagick: convert icon.svg icon.png');
console.log('   - Sharp (Node.js): sharp(input.svg).png().toFile(output.png)');
