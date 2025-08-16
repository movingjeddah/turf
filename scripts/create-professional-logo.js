/**
 * إنشاء شعار احترافي لشركة تنسيق حدائق جدة
 * Creates a professional logo for Jeddah Gardens landscaping company
 */

const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

// إنشاء شعار احترافي بتصميم عربي
async function createProfessionalLogo() {
  const logoSizes = [
    { name: 'logo', width: 200, height: 80 },
    { name: 'logo-large', width: 400, height: 160 },
    { name: 'logo-square', width: 200, height: 200 },
    { name: 'logo-horizontal', width: 300, height: 100 }
  ];

  // تصميم الشعار بالـ SVG
  const createLogoSVG = (width, height, isSquare = false) => {
    const aspectRatio = width / height;
    const isHorizontal = aspectRatio > 1.5;
    
    return `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
      <defs>
        <!-- تدرج لوني أخضر -->
        <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#22c55e;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#16a34a;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#15803d;stop-opacity:1" />
        </linearGradient>
        
        <!-- تدرج لوني ذهبي -->
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#fbbf24;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#f59e0b;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#d97706;stop-opacity:1" />
        </linearGradient>
        
        <!-- ظل للنص -->
        <filter id="textShadow">
          <feDropShadow dx="1" dy="1" stdDeviation="1" flood-color="#000" flood-opacity="0.3"/>
        </filter>
      </defs>
      
      <!-- خلفية دائرية للشعار المربع -->
      ${isSquare ? `<circle cx="${width/2}" cy="${height/2}" r="${Math.min(width, height)/2 - 10}" fill="url(#greenGradient)" opacity="0.1"/>` : ''}
      
      <!-- رمز النخلة والأوراق -->
      <g transform="translate(${isHorizontal ? 20 : width/2 - 25}, ${height/2 - 25})">
        <!-- جذع النخلة -->
        <rect x="20" y="25" width="8" height="25" fill="#8b4513" rx="2"/>
        
        <!-- أوراق النخلة -->
        <path d="M24 25 Q15 15 8 20 Q15 10 24 15" fill="url(#greenGradient)"/>
        <path d="M24 25 Q33 15 40 20 Q33 10 24 15" fill="url(#greenGradient)"/>
        <path d="M24 20 Q18 8 12 12 Q20 5 26 12" fill="url(#greenGradient)"/>
        <path d="M24 20 Q30 8 36 12 Q28 5 22 12" fill="url(#greenGradient)"/>
        
        <!-- أوراق جانبية صغيرة -->
        <ellipse cx="10" cy="30" rx="8" ry="4" fill="url(#greenGradient)" opacity="0.8"/>
        <ellipse cx="38" cy="30" rx="8" ry="4" fill="url(#greenGradient)" opacity="0.8"/>
        
        <!-- نقاط ضوء على الأوراق -->
        <circle cx="18" cy="18" r="1.5" fill="#ffffff" opacity="0.7"/>
        <circle cx="30" cy="18" r="1.5" fill="#ffffff" opacity="0.7"/>
        <circle cx="24" cy="12" r="1" fill="#ffffff" opacity="0.8"/>
      </g>
      
      <!-- النص العربي -->
      ${!isSquare ? `
      <text x="${isHorizontal ? 80 : width/2}" y="${height/2 - 5}" 
            font-family="Arial, sans-serif" 
            font-size="${isHorizontal ? 18 : 16}" 
            font-weight="bold" 
            text-anchor="${isHorizontal ? 'start' : 'middle'}" 
            fill="url(#greenGradient)"
            filter="url(#textShadow)">تنسيق حدائق جدة</text>
      
      <text x="${isHorizontal ? 80 : width/2}" y="${height/2 + 15}" 
            font-family="Arial, sans-serif" 
            font-size="${isHorizontal ? 12 : 10}" 
            text-anchor="${isHorizontal ? 'start' : 'middle'}" 
            fill="url(#goldGradient)">Jeddah Gardens</text>
      ` : `
      <text x="${width/2}" y="${height - 35}" 
            font-family="Arial, sans-serif" 
            font-size="14" 
            font-weight="bold" 
            text-anchor="middle" 
            fill="url(#greenGradient)"
            filter="url(#textShadow)">تنسيق حدائق</text>
      
      <text x="${width/2}" y="${height - 20}" 
            font-family="Arial, sans-serif" 
            font-size="10" 
            text-anchor="middle" 
            fill="url(#goldGradient)">جدة</text>
      `}
      
      <!-- عناصر زخرفية -->
      <g opacity="0.3">
        ${isHorizontal ? `
        <circle cx="${width - 30}" cy="20" r="2" fill="url(#goldGradient)"/>
        <circle cx="${width - 20}" cy="30" r="1.5" fill="url(#greenGradient)"/>
        <circle cx="${width - 40}" cy="35" r="1" fill="url(#goldGradient)"/>
        ` : ''}
      </g>
    </svg>
    `;
  };

  try {
    console.log('🎨 إنشاء الشعار الاحترافي...\n');
    
    const imagesDir = path.join(process.cwd(), 'public', 'images');
    await fs.mkdir(imagesDir, { recursive: true });

    for (const size of logoSizes) {
      console.log(`📐 إنشاء ${size.name} (${size.width}x${size.height})...`);
      
      const isSquare = size.width === size.height;
      const logoSvg = createLogoSVG(size.width, size.height, isSquare);
      
      // إنشاء PNG
      await sharp(Buffer.from(logoSvg))
        .png()
        .toFile(path.join(imagesDir, `${size.name}.png`));
      
      // إنشاء SVG
      await fs.writeFile(
        path.join(imagesDir, `${size.name}.svg`),
        logoSvg
      );
      
      console.log(`✅ تم إنشاء ${size.name}.png و ${size.name}.svg`);
    }

    // إنشاء فافيكون احترافي
    console.log('\n🔖 إنشاء فافيكون احترافي...');
    const faviconSvg = createLogoSVG(32, 32, true);
    
    await sharp(Buffer.from(faviconSvg))
      .resize(32, 32)
      .png()
      .toFile(path.join(process.cwd(), 'public', 'favicon.png'));
    
    await sharp(Buffer.from(faviconSvg))
      .resize(16, 16)
      .png()
      .toFile(path.join(process.cwd(), 'public', 'favicon-16x16.png'));
      
    await sharp(Buffer.from(faviconSvg))
      .resize(32, 32)
      .png()
      .toFile(path.join(process.cwd(), 'public', 'favicon-32x32.png'));

    console.log('✅ تم إنشاء الفافيكون');

    console.log('\n🎉 تم إنشاء جميع الشعارات والأيقونات بنجاح!');
    console.log('📁 الملفات المنشأة:');
    console.log('   - logo.png/svg (200x80)');
    console.log('   - logo-large.png/svg (400x160)');  
    console.log('   - logo-square.png/svg (200x200)');
    console.log('   - logo-horizontal.png/svg (300x100)');
    console.log('   - favicon.png, favicon-16x16.png, favicon-32x32.png');
    
  } catch (error) {
    console.error('❌ خطأ في إنشاء الشعار:', error);
    process.exit(1);
  }
}

createProfessionalLogo();
