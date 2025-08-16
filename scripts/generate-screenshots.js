/**
 * Generate PWA screenshots for better installation experience
 * Creates mobile and desktop screenshots using Puppeteer
 */

const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const path = require('path');

async function generateScreenshots() {
  let browser;
  
  try {
    console.log('🚀 Starting PWA screenshot generation...\n');
    
    // Launch browser
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    
    // Navigate to the home page
    const url = 'http://localhost:3000';
    console.log(`📱 Navigating to ${url}...`);
    
    await page.goto(url, { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });

    // Wait for content to load
    await page.waitForTimeout(3000);

    // Create images directory
    const imagesDir = path.join(process.cwd(), 'public', 'images');
    await fs.mkdir(imagesDir, { recursive: true });

    // Mobile Screenshot (540x720 - typical PWA install dialog size)
    console.log('📱 Generating mobile screenshot...');
    await page.setViewport({ width: 540, height: 720 });
    await page.waitForTimeout(1000);
    
    await page.screenshot({
      path: path.join(imagesDir, 'screenshot-mobile.png'),
      fullPage: false,
      clip: { x: 0, y: 0, width: 540, height: 720 }
    });
    console.log('✅ Generated screenshot-mobile.png (540x720)');

    // Desktop Screenshot (1920x1080 - standard desktop resolution)
    console.log('🖥️  Generating desktop screenshot...');
    await page.setViewport({ width: 1920, height: 1080 });
    await page.waitForTimeout(1000);
    
    await page.screenshot({
      path: path.join(imagesDir, 'screenshot-desktop.png'),
      fullPage: false,
      clip: { x: 0, y: 0, width: 1920, height: 1080 }
    });
    console.log('✅ Generated screenshot-desktop.png (1920x1080)');

    // Tablet Screenshot (768x1024 - optional)
    console.log('📱 Generating tablet screenshot...');
    await page.setViewport({ width: 768, height: 1024 });
    await page.waitForTimeout(1000);
    
    await page.screenshot({
      path: path.join(imagesDir, 'screenshot-tablet.png'),
      fullPage: false,
      clip: { x: 0, y: 0, width: 768, height: 1024 }
    });
    console.log('✅ Generated screenshot-tablet.png (768x1024)');

    console.log('\n🎉 PWA screenshots generated successfully!');
    console.log('📝 Screenshots created:');
    console.log('   - screenshot-mobile.png (540x720)');
    console.log('   - screenshot-desktop.png (1920x1080)');
    console.log('   - screenshot-tablet.png (768x1024)');

  } catch (error) {
    if (error.name === 'TimeoutError') {
      console.error('❌ Error: Could not connect to http://localhost:3000');
      console.error('   Make sure the development server is running with: npm run dev');
    } else {
      console.error('❌ Error generating screenshots:', error.message);
    }
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Check if running from npm script
if (require.main === module) {
  generateScreenshots();
}

module.exports = { generateScreenshots };
