const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '../public/images/neighborhoods');

// إنشاء مجلد الصور إذا لم يكن موجوداً
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// تعريف الأحياء وخصائصها
const neighborhoods = [
  {
    slug: 'obhur-north',
    name: 'أبحر الشمالية',
    type: 'luxury',
    color: '#d4af37', // gold for luxury
    description: 'حي راقي بفلل فاخرة'
  },
  {
    slug: 'al-hamdania',
    name: 'الحمدانية',
    type: 'residential',
    color: '#4CAF50', // green for residential
    description: 'حي سكني متنوع'
  },
  {
    slug: 'al-rawdah',
    name: 'الروضة',
    type: 'peaceful',
    color: '#8BC34A', // light green for peaceful
    description: 'حي هادئ ومريح'
  },
  {
    slug: 'as-salamah',
    name: 'السلامة',
    type: 'active',
    color: '#FF9800', // orange for active
    description: 'منطقة حيوية'
  },
  {
    slug: 'az-zahra',
    name: 'الزهراء',
    type: 'family',
    color: '#E91E63', // pink for family
    description: 'حي عائلي آمن'
  },
  {
    slug: 'an-naeem',
    name: 'النعيم',
    type: 'modern',
    color: '#2196F3', // blue for modern
    description: 'منطقة متطورة'
  },
  {
    slug: 'al-mohammedia',
    name: 'المحمدية',
    type: 'luxury',
    color: '#9C27B0', // purple for luxury
    description: 'حي راقي فاخر'
  },
  {
    slug: 'al-basateen',
    name: 'البساتين',
    type: 'green',
    color: '#4CAF50', // green for gardens
    description: 'منطقة خضراء تراثية'
  },
  {
    slug: 'al-khalidiyyah',
    name: 'الخالدية',
    type: 'commercial',
    color: '#607D8B', // blue grey for commercial
    description: 'حي تجاري وسكني'
  },
  {
    slug: 'al-shatiea',
    name: 'الشاطئ',
    type: 'coastal',
    color: '#00BCD4', // cyan for coastal
    description: 'منطقة ساحلية'
  },
  {
    slug: 'al-faisaliyyah',
    name: 'الفيصلية',
    type: 'modern',
    color: '#3F51B5', // indigo for modern
    description: 'حي حديث عصري'
  },
  {
    slug: 'al-marwah',
    name: 'المروة',
    type: 'peaceful',
    color: '#795548', // brown for peaceful
    description: 'منطقة هادئة عائلية'
  }
];

// أنماط مختلفة لكل نوع حي
const patterns = {
  luxury: {
    pattern: 'villa',
    style: 'elegant',
    elements: ['palm trees', 'fountain', 'marble', 'luxury car']
  },
  residential: {
    pattern: 'house',
    style: 'comfortable',
    elements: ['garden', 'trees', 'playground', 'family']
  },
  peaceful: {
    pattern: 'garden',
    style: 'calm',
    elements: ['flowers', 'bench', 'birds', 'peaceful']
  },
  active: {
    pattern: 'street',
    style: 'dynamic',
    elements: ['buildings', 'traffic', 'shops', 'movement']
  },
  family: {
    pattern: 'playground',
    style: 'safe',
    elements: ['children', 'swings', 'slides', 'safety']
  },
  modern: {
    pattern: 'building',
    style: 'contemporary',
    elements: ['glass', 'steel', 'lights', 'technology']
  },
  green: {
    pattern: 'nature',
    style: 'natural',
    elements: ['trees', 'plants', 'heritage', 'organic']
  },
  commercial: {
    pattern: 'mixed',
    style: 'practical',
    elements: ['shops', 'offices', 'parking', 'business']
  },
  coastal: {
    pattern: 'seaside',
    style: 'marine',
    elements: ['water', 'boats', 'seagulls', 'waves']
  }
};

async function createNeighborhoodImage(neighborhood) {
  const { slug, name, type, color, description } = neighborhood;
  const pattern = patterns[type];
  
  try {
    // إنشاء صورة أساسية بلون الحي
    const baseImage = sharp({
      create: {
        width: 1200,
        height: 800,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      }
    });

    // إضافة تدرج لوني
    const gradientSvg = `
      <svg width="1200" height="800">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${color};stop-opacity:0.8" />
            <stop offset="100%" style="stop-color:${color};stop-opacity:0.3" />
          </linearGradient>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <dropshadow dx="2" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.3"/>
          </filter>
        </defs>
        
        <!-- Background gradient -->
        <rect width="1200" height="800" fill="url(#grad1)" />
        
        <!-- Decorative elements based on neighborhood type -->
        ${generatePatternElements(type, color)}
        
        <!-- Text overlay -->
        <rect x="50" y="600" width="400" height="150" fill="rgba(0,0,0,0.7)" rx="10" />
        <text x="70" y="650" font-family="Arial" font-size="32" font-weight="bold" fill="white">${name}</text>
        <text x="70" y="690" font-family="Arial" font-size="18" fill="#ccc">${description}</text>
        <text x="70" y="720" font-family="Arial" font-size="14" fill="#aaa">تنسيق حدائق احترافي</text>
      </svg>
    `;

    // تحويل SVG إلى صورة
    const svgBuffer = Buffer.from(gradientSvg);
    
    const outputPath = path.join(outputDir, `${slug}-hero.webp`);
    
    await sharp(svgBuffer)
      .webp({ quality: 85 })
      .toFile(outputPath);

    console.log(`✅ تم إنشاء صورة ${name}: ${slug}-hero.webp`);

    // إنشاء صورة ثانوية للمميزات
    const featuresImage = await createFeaturesImage(neighborhood);
    const featuresPath = path.join(outputDir, `${slug}-features.webp`);
    
    await sharp(featuresImage)
      .webp({ quality: 85 })
      .toFile(featuresPath);
      
    console.log(`✅ تم إنشاء صورة مميزات ${name}: ${slug}-features.webp`);

  } catch (error) {
    console.error(`❌ خطأ في إنشاء صورة ${name}:`, error.message);
  }
}

function generatePatternElements(type, color) {
  const patterns = {
    luxury: `
      <!-- Luxury villa pattern -->
      <circle cx="900" cy="200" r="80" fill="${color}" opacity="0.6" />
      <circle cx="950" cy="150" r="60" fill="${color}" opacity="0.4" />
      <rect x="800" y="300" width="300" height="200" fill="${color}" opacity="0.3" rx="10" />
      <circle cx="200" cy="100" r="40" fill="gold" opacity="0.8" />
      <polygon points="100,400 200,350 300,400 200,450" fill="${color}" opacity="0.5" />
    `,
    coastal: `
      <!-- Coastal wave pattern -->
      <path d="M0,400 Q300,350 600,400 T1200,400 L1200,800 L0,800 Z" fill="${color}" opacity="0.4" />
      <path d="M0,450 Q300,400 600,450 T1200,450 L1200,800 L0,800 Z" fill="${color}" opacity="0.3" />
      <circle cx="900" cy="150" r="50" fill="white" opacity="0.8" />
      <circle cx="950" cy="120" r="30" fill="white" opacity="0.6" />
    `,
    family: `
      <!-- Family playground pattern -->
      <rect x="800" y="200" width="60" height="120" fill="${color}" opacity="0.6" rx="30" />
      <circle cx="830" cy="180" r="20" fill="${color}" opacity="0.8" />
      <rect x="900" y="220" width="80" height="100" fill="${color}" opacity="0.5" rx="10" />
      <polygon points="200,200 250,150 300,200 250,250" fill="${color}" opacity="0.7" />
    `,
    modern: `
      <!-- Modern building pattern -->
      <rect x="800" y="100" width="80" height="300" fill="${color}" opacity="0.6" />
      <rect x="900" y="150" width="100" height="250" fill="${color}" opacity="0.5" />
      <rect x="1020" y="200" width="60" height="200" fill="${color}" opacity="0.7" />
      <circle cx="150" cy="150" r="60" fill="${color}" opacity="0.4" />
    `,
    green: `
      <!-- Green nature pattern -->
      <circle cx="200" cy="200" r="100" fill="${color}" opacity="0.6" />
      <circle cx="300" cy="250" r="80" fill="${color}" opacity="0.5" />
      <circle cx="150" cy="300" r="60" fill="${color}" opacity="0.7" />
      <circle cx="900" cy="150" r="90" fill="${color}" opacity="0.4" />
      <path d="M800,300 Q850,250 900,300 Q950,250 1000,300" stroke="${color}" stroke-width="20" fill="none" opacity="0.5" />
    `,
    default: `
      <!-- Default residential pattern -->
      <rect x="850" y="200" width="200" height="150" fill="${color}" opacity="0.5" rx="10" />
      <polygon points="850,200 950,150 1050,200" fill="${color}" opacity="0.7" />
      <circle cx="200" cy="200" r="80" fill="${color}" opacity="0.4" />
      <rect x="150" y="300" width="100" height="80" fill="${color}" opacity="0.6" rx="5" />
    `
  };
  
  return patterns[type] || patterns.default;
}

async function createFeaturesImage(neighborhood) {
  const { slug, name, type, color } = neighborhood;
  
  const featuresSvg = `
    <svg width="800" height="600">
      <defs>
        <linearGradient id="featGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color};stop-opacity:0.1" />
          <stop offset="100%" style="stop-color:${color};stop-opacity:0.05" />
        </linearGradient>
      </defs>
      
      <rect width="800" height="600" fill="url(#featGrad)" />
      
      <!-- Feature icons pattern -->
      <circle cx="150" cy="150" r="60" fill="${color}" opacity="0.3" />
      <circle cx="400" cy="150" r="60" fill="${color}" opacity="0.3" />
      <circle cx="650" cy="150" r="60" fill="${color}" opacity="0.3" />
      
      <circle cx="275" cy="350" r="60" fill="${color}" opacity="0.3" />
      <circle cx="525" cy="350" r="60" fill="${color}" opacity="0.3" />
      
      <!-- Title -->
      <text x="400" y="50" text-anchor="middle" font-family="Arial" font-size="24" font-weight="bold" fill="${color}">مميزات ${name}</text>
    </svg>
  `;
  
  return Buffer.from(featuresSvg);
}

// إنشاء الصور لجميع الأحياء
async function createAllNeighborhoodImages() {
  console.log('🎨 بدء إنشاء صور الأحياء...');
  
  for (const neighborhood of neighborhoods) {
    await createNeighborhoodImage(neighborhood);
  }
  
  console.log('✅ تم إنشاء جميع صور الأحياء بنجاح!');
  console.log(`📁 تم حفظ الصور في: ${outputDir}`);
}

// تشغيل السكريبت
createAllNeighborhoodImages().catch(console.error);
