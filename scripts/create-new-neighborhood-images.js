const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// New neighborhoods that were added
const newNeighborhoods = [
  'al-safa',
  'al-nahdah', 
  'al-wurud',
  'al-andalus',
  'al-aziziyyah',
  'al-salam',
  'al-balad',
  'corniche'
];

const colors = {
  'al-safa': { bg: '#2563eb', accent: '#3b82f6' }, // Modern blue
  'al-nahdah': { bg: '#059669', accent: '#10b981' }, // Progressive green
  'al-wurud': { bg: '#dc2626', accent: '#ef4444' }, // Rose red
  'al-andalus': { bg: '#7c2d12', accent: '#ea580c' }, // Heritage brown/orange
  'al-aziziyyah': { bg: '#1f2937', accent: '#374151' }, // Central gray
  'al-salam': { bg: '#166534', accent: '#22c55e' }, // Safe green
  'al-balad': { bg: '#7c3aed', accent: '#a855f7' }, // Historical purple
  'corniche': { bg: '#0ea5e9', accent: '#38bdf8' }, // Coastal blue
};

const arabicNames = {
  'al-safa': 'الصفا',
  'al-nahdah': 'النهضة',
  'al-wurud': 'الورود', 
  'al-andalus': 'الأندلس',
  'al-aziziyyah': 'العزيزية',
  'al-salam': 'السلام',
  'al-balad': 'البلد',
  'corniche': 'الكورنيش',
};

async function createNeighborhoodImage(neighborhood, type) {
  const outputDir = path.join(process.cwd(), 'public', 'images', 'neighborhoods');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const filename = `${neighborhood}-${type}.webp`;
  const outputPath = path.join(outputDir, filename);
  
  // Skip if file already exists
  if (fs.existsSync(outputPath)) {
    console.log(`✅ ${filename} already exists, skipping...`);
    return;
  }

  const color = colors[neighborhood];
  const arabicName = arabicNames[neighborhood];
  const title = type === 'hero' ? `تنسيق حدائق ${arabicName}` : `خدمات ${arabicName}`;
  
  try {
    // Create a gradient background
    const width = 1200;
    const height = 800;
    
    // Create SVG with gradient and text
    const svg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${color.bg};stop-opacity:1" />
            <stop offset="100%" style="stop-color:${color.accent};stop-opacity:0.8" />
          </linearGradient>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          </pattern>
        </defs>
        
        <!-- Background gradient -->
        <rect width="100%" height="100%" fill="url(#grad)"/>
        
        <!-- Grid pattern -->
        <rect width="100%" height="100%" fill="url(#grid)"/>
        
        <!-- Decorative shapes -->
        <circle cx="200" cy="150" r="80" fill="rgba(255,255,255,0.1)"/>
        <circle cx="1000" cy="600" r="120" fill="rgba(255,255,255,0.08)"/>
        <circle cx="900" cy="200" r="60" fill="rgba(255,255,255,0.12)"/>
        
        <!-- Main title -->
        <text x="600" y="350" text-anchor="middle" fill="white" 
              font-family="Arial, sans-serif" font-size="48" font-weight="bold">
          ${title}
        </text>
        
        <!-- Subtitle -->
        <text x="600" y="420" text-anchor="middle" fill="rgba(255,255,255,0.9)" 
              font-family="Arial, sans-serif" font-size="24">
          جدة - المملكة العربية السعودية
        </text>
        
        <!-- Bottom accent -->
        <rect x="0" y="${height-100}" width="100%" height="100" fill="rgba(0,0,0,0.2)"/>
        <text x="50" y="${height-40}" fill="rgba(255,255,255,0.8)" 
              font-family="Arial, sans-serif" font-size="18">
          تنسيق حدائق احترافي
        </text>
      </svg>
    `;
    
    await sharp(Buffer.from(svg))
      .webp({ quality: 85 })
      .toFile(outputPath);
    
    console.log(`✅ Created ${filename}`);
  } catch (error) {
    console.error(`❌ Error creating ${filename}:`, error.message);
  }
}

async function createAllImages() {
  console.log('🎨 Creating images for new neighborhoods...\n');
  
  for (const neighborhood of newNeighborhoods) {
    console.log(`📸 Creating images for ${arabicNames[neighborhood]} (${neighborhood}):`);
    await createNeighborhoodImage(neighborhood, 'hero');
    await createNeighborhoodImage(neighborhood, 'features');
    console.log('');
  }
  
  console.log('🎉 All neighborhood images created successfully!');
}

// Run the script
createAllImages().catch(console.error);
