/**
 * إنشاء صور تجريبية للموقع
 * Creates placeholder images for the website
 */

const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

// إنشاء صورة خلفية للهيرو
async function createHeroBg() {
  const width = 1920;
  const height = 1080;
  
  const svgContent = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f0f9f0;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#e8f5e8;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#dcf4dc;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- خلفية متدرجة -->
      <rect width="${width}" height="${height}" fill="url(#heroGradient)"/>
      
      <!-- حديقة منظرية -->
      <ellipse cx="300" cy="800" rx="200" ry="100" fill="#22c55e" opacity="0.3"/>
      <ellipse cx="1200" cy="700" rx="300" ry="150" fill="#16a34a" opacity="0.2"/>
      <ellipse cx="1600" cy="900" rx="250" ry="120" fill="#15803d" opacity="0.25"/>
      
      <!-- أشجار -->
      <g transform="translate(200, 600)">
        <rect x="45" y="80" width="10" height="40" fill="#8b4513"/>
        <circle cx="50" cy="70" r="25" fill="#22c55e" opacity="0.8"/>
        <circle cx="45" cy="60" r="18" fill="#16a34a"/>
        <circle cx="55" cy="60" r="18" fill="#16a34a"/>
      </g>
      
      <g transform="translate(1400, 650)">
        <rect x="45" y="80" width="12" height="50" fill="#8b4513"/>
        <circle cx="51" cy="70" r="30" fill="#22c55e" opacity="0.7"/>
        <circle cx="42" cy="55" r="20" fill="#16a34a"/>
        <circle cx="60" cy="55" r="20" fill="#16a34a"/>
      </g>
      
      <!-- أزهار ونباتات -->
      <circle cx="150" cy="850" r="8" fill="#f59e0b" opacity="0.6"/>
      <circle cx="170" cy="860" r="6" fill="#ef4444" opacity="0.6"/>
      <circle cx="1300" cy="820" r="10" fill="#8b5cf6" opacity="0.6"/>
      <circle cx="1320" cy="835" r="7" fill="#ec4899" opacity="0.6"/>
      
      <!-- مسار حجري -->
      <path d="M 0 900 Q 400 850 800 870 Q 1200 890 1600 850 Q 1800 840 1920 860" 
            stroke="#d6d3d1" stroke-width="40" fill="none" opacity="0.4"/>
            
      <!-- نوافير صغيرة -->
      <circle cx="600" cy="400" r="30" fill="#0ea5e9" opacity="0.3"/>
      <circle cx="600" cy="400" r="20" fill="#0284c7" opacity="0.4"/>
      <circle cx="600" cy="400" r="10" fill="#0369a1" opacity="0.5"/>
      
      <!-- سماء مع غيوم -->
      <ellipse cx="300" cy="150" rx="80" ry="30" fill="white" opacity="0.7"/>
      <ellipse cx="800" cy="100" rx="100" ry="40" fill="white" opacity="0.6"/>
      <ellipse cx="1400" cy="120" rx="90" ry="35" fill="white" opacity="0.8"/>
    </svg>
  `;
  
  return Buffer.from(svgContent);
}

// إنشاء صورة عرض أعمال
async function createShowcaseImage() {
  const width = 600;
  const height = 450;
  
  const svgContent = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="showcaseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#15803d;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#22c55e;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- خلفية -->
      <rect width="${width}" height="${height}" fill="url(#showcaseGradient)"/>
      
      <!-- حديقة مصممة -->
      <ellipse cx="300" cy="350" rx="250" ry="80" fill="#16a34a"/>
      
      <!-- أشجار منسقة -->
      <g>
        <rect x="120" y="250" width="8" height="30" fill="#8b4513"/>
        <circle cx="124" cy="240" r="20" fill="#22c55e"/>
        
        <rect x="220" y="230" width="10" height="40" fill="#8b4513"/>
        <circle cx="225" cy="220" r="25" fill="#16a34a"/>
        
        <rect x="350" y="240" width="9" height="35" fill="#8b4513"/>
        <circle cx="354" cy="230" r="22" fill="#22c55e"/>
        
        <rect x="450" y="235" width="8" height="32" fill="#8b4513"/>
        <circle cx="454" cy="225" r="18" fill="#16a34a"/>
      </g>
      
      <!-- أزهار ملونة -->
      <circle cx="80" cy="320" r="12" fill="#f59e0b"/>
      <circle cx="180" cy="340" r="10" fill="#ef4444"/>
      <circle cx="280" cy="330" r="14" fill="#8b5cf6"/>
      <circle cx="380" cy="345" r="11" fill="#ec4899"/>
      <circle cx="480" cy="325" r="13" fill="#f59e0b"/>
      
      <!-- مسار حجري متقن -->
      <ellipse cx="300" cy="380" rx="200" ry="30" fill="#d6d3d1" opacity="0.8"/>
      <ellipse cx="300" cy="380" rx="180" ry="25" fill="#a8a29e" opacity="0.6"/>
      
      <!-- نافورة مركزية -->
      <circle cx="300" cy="200" r="40" fill="#0ea5e9" opacity="0.6"/>
      <circle cx="300" cy="200" r="30" fill="#0284c7" opacity="0.7"/>
      <circle cx="300" cy="200" r="20" fill="#0369a1" opacity="0.8"/>
      <circle cx="300" cy="200" r="3" fill="white"/>
      
      <!-- تأثير الماء */
      <path d="M 300 200 Q 280 180 260 170 Q 280 175 300 160" fill="#0ea5e9" opacity="0.4"/>
      <path d="M 300 200 Q 320 180 340 170 Q 320 175 300 160" fill="#0ea5e9" opacity="0.4"/>
      
      <!-- إضاءة ليلية */
      <circle cx="150" cy="300" r="25" fill="#fbbf24" opacity="0.3"/>
      <circle cx="450" cy="300" r="25" fill="#fbbf24" opacity="0.3"/>
      
      <!-- نص تجريبي -->
      <text x="300" y="50" font-family="Arial" font-size="24" font-weight="bold" text-anchor="middle" fill="white">حديقة مصممة باحترافية</text>
    </svg>
  `;
  
  return Buffer.from(svgContent);
}

async function generatePlaceholderImages() {
  try {
    console.log('🖼️ إنشاء الصور التجريبية...\n');
    
    const imagesDir = path.join(process.cwd(), 'public', 'images');
    await fs.mkdir(imagesDir, { recursive: true });

    // إنشاء صورة خلفية الهيرو
    console.log('🌅 إنشاء صورة خلفية الهيرو...');
    const heroBgSvg = await createHeroBg();
    await sharp(heroBgSvg)
      .jpeg({ quality: 90 })
      .toFile(path.join(imagesDir, 'hero-bg.jpg'));
    console.log('✅ تم إنشاء hero-bg.jpg');

    // إنشاء صورة عرض الأعمال
    console.log('🏡 إنشاء صورة عرض الأعمال...');
    const showcaseSvg = await createShowcaseImage();
    await sharp(showcaseSvg)
      .jpeg({ quality: 90 })
      .toFile(path.join(imagesDir, 'hero-showcase.jpg'));
    console.log('✅ تم إنشاء hero-showcase.jpg');

    console.log('\n🎉 تم إنشاء جميع الصور التجريبية بنجاح!');
    console.log('📁 الصور المنشأة:');
    console.log('   - hero-bg.jpg (1920x1080)');
    console.log('   - hero-showcase.jpg (600x450)');
    
  } catch (error) {
    console.error('❌ خطأ في إنشاء الصور:', error);
    process.exit(1);
  }
}

generatePlaceholderImages();
