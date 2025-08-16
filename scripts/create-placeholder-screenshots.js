/**
 * Create placeholder PWA screenshots using Sharp
 * Creates realistic-looking screenshots without needing a running server
 */

const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

// Create a realistic mobile screenshot mockup
async function createMobileScreenshot() {
  const width = 540;
  const height = 720;
  
  // Create SVG mockup of mobile homepage
  const svgContent = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <!-- Background -->
      <rect width="${width}" height="${height}" fill="#ffffff"/>
      
      <!-- Header -->
      <rect x="0" y="0" width="${width}" height="80" fill="#36bf36"/>
      <text x="20" y="35" font-family="Arial" font-size="16" font-weight="bold" fill="white">تنسيق حدائق جدة</text>
      <text x="20" y="55" font-family="Arial" font-size="12" fill="white">شركة تنسيق الحدائق الرائدة</text>
      
      <!-- Hero Section -->
      <rect x="0" y="80" width="${width}" height="200" fill="#f0f9f0"/>
      <text x="20" y="140" font-family="Arial" font-size="24" font-weight="bold" fill="#36bf36">تنسيق حدائق وعشب صناعي</text>
      <text x="20" y="165" font-family="Arial" font-size="16" fill="#666">نحول حديقتك إلى واحة خضراء</text>
      <text x="20" y="185" font-family="Arial" font-size="14" fill="#888">خدمات متكاملة في جدة</text>
      
      <!-- Service Cards -->
      <rect x="20" y="300" width="150" height="120" rx="8" fill="#ffffff" stroke="#e0e0e0"/>
      <rect x="25" y="305" width="140" height="60" fill="#36bf36" opacity="0.1"/>
      <text x="30" y="325" font-family="Arial" font-size="14" font-weight="bold" fill="#36bf36">تنسيق حدائق</text>
      <text x="30" y="345" font-family="Arial" font-size="12" fill="#666">تصميم وتنفيذ حدائق</text>
      <text x="30" y="360" font-family="Arial" font-size="12" fill="#666">منزلية احترافية</text>
      
      <rect x="190" y="300" width="150" height="120" rx="8" fill="#ffffff" stroke="#e0e0e0"/>
      <rect x="195" y="305" width="140" height="60" fill="#36bf36" opacity="0.1"/>
      <text x="200" y="325" font-family="Arial" font-size="14" font-weight="bold" fill="#36bf36">عشب صناعي</text>
      <text x="200" y="345" font-family="Arial" font-size="12" fill="#666">تركيب وصيانة</text>
      <text x="200" y="360" font-family="Arial" font-size="12" fill="#666">عشب صناعي عالي الجودة</text>
      
      <rect x="370" y="300" width="150" height="120" rx="8" fill="#ffffff" stroke="#e0e0e0"/>
      <rect x="375" y="305" width="140" height="60" fill="#36bf36" opacity="0.1"/>
      <text x="380" y="325" font-family="Arial" font-size="14" font-weight="bold" fill="#36bf36">شلالات ونوافير</text>
      <text x="380" y="345" font-family="Arial" font-size="12" fill="#666">تصميم وتنفيذ</text>
      <text x="380" y="360" font-family="Arial" font-size="12" fill="#666">عناصر مائية مميزة</text>
      
      <!-- Contact Section -->
      <rect x="0" y="450" width="${width}" height="100" fill="#36bf36"/>
      <text x="20" y="480" font-family="Arial" font-size="18" font-weight="bold" fill="white">اتصل بنا الآن</text>
      <text x="20" y="505" font-family="Arial" font-size="14" fill="white">+966 50 123 4567</text>
      <rect x="20" y="520" width="120" height="30" rx="15" fill="white"/>
      <text x="35" y="540" font-family="Arial" font-size="12" fill="#36bf36">واتساب مباشر</text>
      
      <!-- Features -->
      <text x="20" y="600" font-family="Arial" font-size="16" font-weight="bold" fill="#333">لماذا نحن الأفضل؟</text>
      <text x="20" y="625" font-family="Arial" font-size="12" fill="#666">✓ خبرة أكثر من 10 سنوات</text>
      <text x="20" y="645" font-family="Arial" font-size="12" fill="#666">✓ ضمان على جميع الأعمال</text>
      <text x="20" y="665" font-family="Arial" font-size="12" fill="#666">✓ فريق متخصص ومدرب</text>
      <text x="20" y="685" font-family="Arial" font-size="12" fill="#666">✓ أسعار منافسة وجودة عالية</text>
    </svg>
  `;
  
  return Buffer.from(svgContent);
}

// Create a realistic desktop screenshot mockup
async function createDesktopScreenshot() {
  const width = 1920;
  const height = 1080;
  
  const svgContent = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <!-- Background -->
      <rect width="${width}" height="${height}" fill="#ffffff"/>
      
      <!-- Header -->
      <rect x="0" y="0" width="${width}" height="100" fill="#36bf36"/>
      <text x="50" y="40" font-family="Arial" font-size="28" font-weight="bold" fill="white">تنسيق حدائق جدة</text>
      <text x="50" y="70" font-family="Arial" font-size="16" fill="white">شركة تنسيق الحدائق الرائدة في المملكة العربية السعودية</text>
      
      <!-- Navigation -->
      <text x="800" y="45" font-family="Arial" font-size="14" fill="white">الرئيسية</text>
      <text x="900" y="45" font-family="Arial" font-size="14" fill="white">خدماتنا</text>
      <text x="1000" y="45" font-family="Arial" font-size="14" fill="white">أعمالنا</text>
      <text x="1100" y="45" font-family="Arial" font-size="14" fill="white">المدونة</text>
      <text x="1200" y="45" font-family="Arial" font-size="14" fill="white">اتصل بنا</text>
      
      <!-- Hero Section -->
      <rect x="0" y="100" width="${width}" height="400" fill="url(#heroGradient)"/>
      <defs>
        <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f0f9f0;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#e8f5e8;stop-opacity:1" />
        </linearGradient>
      </defs>
      <text x="100" y="220" font-family="Arial" font-size="48" font-weight="bold" fill="#36bf36">تحويل حديقتك إلى واحة خضراء</text>
      <text x="100" y="270" font-family="Arial" font-size="24" fill="#666">خدمات تنسيق الحدائق والعشب الصناعي في جدة</text>
      <text x="100" y="310" font-family="Arial" font-size="18" fill="#888">نقدم حلول متكاملة لتصميم وتنفيذ وصيانة الحدائق المنزلية والتجارية</text>
      
      <!-- CTA Buttons -->
      <rect x="100" y="350" width="180" height="50" rx="25" fill="#36bf36"/>
      <text x="130" y="380" font-family="Arial" font-size="16" font-weight="bold" fill="white">احصل على عرض سعر</text>
      <rect x="300" y="350" width="150" height="50" rx="25" fill="transparent" stroke="#36bf36" stroke-width="2"/>
      <text x="330" y="380" font-family="Arial" font-size="16" fill="#36bf36">شاهد أعمالنا</text>
      
      <!-- Services Grid -->
      <text x="100" y="580" font-family="Arial" font-size="32" font-weight="bold" fill="#333">خدماتنا المميزة</text>
      
      <!-- Service Cards Row 1 -->
      <rect x="100" y="620" width="280" height="200" rx="12" fill="#ffffff" stroke="#e0e0e0" stroke-width="2"/>
      <rect x="120" y="640" width="240" height="120" fill="#36bf36" opacity="0.1"/>
      <text x="130" y="680" font-family="Arial" font-size="20" font-weight="bold" fill="#36bf36">تنسيق حدائق</text>
      <text x="130" y="710" font-family="Arial" font-size="14" fill="#666">تصميم وتنفيذ حدائق منزلية وتجارية</text>
      <text x="130" y="730" font-family="Arial" font-size="14" fill="#666">بأحدث التقنيات والأساليب العالمية</text>
      <text x="130" y="780" font-family="Arial" font-size="16" font-weight="bold" fill="#36bf36">ابتداءً من 150 ريال/م²</text>
      
      <rect x="420" y="620" width="280" height="200" rx="12" fill="#ffffff" stroke="#e0e0e0" stroke-width="2"/>
      <rect x="440" y="640" width="240" height="120" fill="#36bf36" opacity="0.1"/>
      <text x="450" y="680" font-family="Arial" font-size="20" font-weight="bold" fill="#36bf36">عشب صناعي</text>
      <text x="450" y="710" font-family="Arial" font-size="14" fill="#666">تركيب عشب صناعي عالي الجودة</text>
      <text x="450" y="730" font-family="Arial" font-size="14" fill="#666">مقاوم للحرارة ومناسب لمناخ جدة</text>
      <text x="450" y="780" font-family="Arial" font-size="16" font-weight="bold" fill="#36bf36">ابتداءً من 80 ريال/م²</text>
      
      <rect x="740" y="620" width="280" height="200" rx="12" fill="#ffffff" stroke="#e0e0e0" stroke-width="2"/>
      <rect x="760" y="640" width="240" height="120" fill="#36bf36" opacity="0.1"/>
      <text x="770" y="680" font-family="Arial" font-size="20" font-weight="bold" fill="#36bf36">شلالات ونوافير</text>
      <text x="770" y="710" font-family="Arial" font-size="14" fill="#666">تصميم وتنفيذ عناصر مائية مذهلة</text>
      <text x="770" y="730" font-family="Arial" font-size="14" fill="#666">لإضافة لمسة جمالية لحديقتك</text>
      <text x="770" y="780" font-family="Arial" font-size="16" font-weight="bold" fill="#36bf36">ابتداءً من 2000 ريال</text>
      
      <rect x="1060" y="620" width="280" height="200" rx="12" fill="#ffffff" stroke="#e0e0e0" stroke-width="2"/>
      <rect x="1080" y="640" width="240" height="120" fill="#36bf36" opacity="0.1"/>
      <text x="1090" y="680" font-family="Arial" font-size="20" font-weight="bold" fill="#36bf36">صيانة دورية</text>
      <text x="1090" y="710" font-family="Arial" font-size="14" fill="#666">خدمات صيانة شاملة للحدائق</text>
      <text x="1090" y="730" font-family="Arial" font-size="14" fill="#666">للحفاظ على جمال حديقتك</text>
      <text x="1090" y="780" font-family="Arial" font-size="16" font-weight="bold" fill="#36bf36">ابتداءً من 200 ريال/زيارة</text>
      
      <!-- Stats Section -->
      <rect x="0" y="860" width="${width}" height="120" fill="#f8f9fa"/>
      <text x="200" y="900" font-family="Arial" font-size="32" font-weight="bold" fill="#36bf36">500+</text>
      <text x="200" y="925" font-family="Arial" font-size="14" fill="#666">مشروع مكتمل</text>
      
      <text x="500" y="900" font-family="Arial" font-size="32" font-weight="bold" fill="#36bf36">98%</text>
      <text x="500" y="925" font-family="Arial" font-size="14" fill="#666">رضا العملاء</text>
      
      <text x="800" y="900" font-family="Arial" font-size="32" font-weight="bold" fill="#36bf36">10+</text>
      <text x="800" y="925" font-family="Arial" font-size="14" fill="#666">سنوات خبرة</text>
      
      <text x="1100" y="900" font-family="Arial" font-size="32" font-weight="bold" fill="#36bf36">24/7</text>
      <text x="1100" y="925" font-family="Arial" font-size="14" fill="#666">دعم العملاء</text>
      
      <!-- Contact Bar -->
      <rect x="0" y="980" width="${width}" height="100" fill="#36bf36"/>
      <text x="100" y="1020" font-family="Arial" font-size="24" font-weight="bold" fill="white">جاهزون لتحويل حديقتك؟ اتصل بنا الآن!</text>
      <text x="100" y="1050" font-family="Arial" font-size="16" fill="white">+966 50 123 4567  |  info@jeddahgardens.com</text>
      <rect x="800" y="1000" width="180" height="40" rx="20" fill="white"/>
      <text x="830" y="1025" font-family="Arial" font-size="14" font-weight="bold" fill="#36bf36">واتساب مباشر</text>
    </svg>
  `;
  
  return Buffer.from(svgContent);
}

async function generatePlaceholderScreenshots() {
  try {
    console.log('🎨 Generating placeholder PWA screenshots...\n');
    
    const imagesDir = path.join(process.cwd(), 'public', 'images');
    await fs.mkdir(imagesDir, { recursive: true });

    // Generate mobile screenshot
    console.log('📱 Creating mobile screenshot (540x720)...');
    const mobileSvg = await createMobileScreenshot();
    await sharp(mobileSvg)
      .png()
      .toFile(path.join(imagesDir, 'screenshot-mobile.png'));
    console.log('✅ Generated screenshot-mobile.png');

    // Generate desktop screenshot  
    console.log('🖥️  Creating desktop screenshot (1920x1080)...');
    const desktopSvg = await createDesktopScreenshot();
    await sharp(desktopSvg)
      .png()
      .toFile(path.join(imagesDir, 'screenshot-desktop.png'));
    console.log('✅ Generated screenshot-desktop.png');

    // Add screenshots back to manifest
    console.log('\n📝 Don\'t forget to add screenshots section to manifest.json:');
    console.log(`
  "screenshots": [
    {
      "src": "/images/screenshot-mobile.png",
      "type": "image/png",
      "sizes": "540x720",
      "form_factor": "narrow"
    },
    {
      "src": "/images/screenshot-desktop.png", 
      "type": "image/png",
      "sizes": "1920x1080",
      "form_factor": "wide"
    }
  ],`);

    console.log('\n🎉 Placeholder screenshots generated successfully!');
    console.log('💡 For production, replace these with real screenshots of your site');

  } catch (error) {
    console.error('❌ Error generating screenshots:', error);
    process.exit(1);
  }
}

generatePlaceholderScreenshots();
