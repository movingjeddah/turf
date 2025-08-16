/**
 * إنشاء صور بسيطة للموقع
 * Creates simple images for the website
 */

const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function generateSimpleImages() {
  try {
    console.log('🖼️ إنشاء الصور البسيطة...\n');
    
    const imagesDir = path.join(process.cwd(), 'public', 'images');
    await fs.mkdir(imagesDir, { recursive: true });

    // إنشاء صورة خلفية الهيرو بسيطة
    console.log('🌅 إنشاء صورة خلفية الهيرو...');
    await sharp({
      create: {
        width: 1920,
        height: 1080,
        channels: 3,
        background: { r: 34, g: 197, b: 94 }
      }
    })
    .png()
    .toFile(path.join(imagesDir, 'hero-bg.jpg'));
    
    console.log('✅ تم إنشاء hero-bg.jpg');

    // إنشاء صورة عرض الأعمال بسيطة
    console.log('🏡 إنشاء صورة عرض الأعمال...');
    await sharp({
      create: {
        width: 600,
        height: 450,
        channels: 3,
        background: { r: 22, g: 163, b: 74 }
      }
    })
    .png()
    .toFile(path.join(imagesDir, 'hero-showcase.jpg'));
    
    console.log('✅ تم إنشاء hero-showcase.jpg');

    console.log('\n🎉 تم إنشاء جميع الصور البسيطة بنجاح!');
    
  } catch (error) {
    console.error('❌ خطأ في إنشاء الصور:', error);
    process.exit(1);
  }
}

generateSimpleImages();
