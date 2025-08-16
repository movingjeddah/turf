/**
 * إنشاء أيقونات احترافية للخدمات
 * Creates professional service icons for the landscaping company
 */

const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

// تعريف الخدمات وألوانها
const services = [
  {
    id: 'landscaping',
    name: 'تنسيق حدائق',
    color: '#22c55e',
    icon: 'tree'
  },
  {
    id: 'artificial-grass',
    name: 'عشب صناعي',
    color: '#16a34a',
    icon: 'grass'
  },
  {
    id: 'fountains',
    name: 'شلالات ونوافير',
    color: '#0ea5e9',
    icon: 'fountain'
  },
  {
    id: 'irrigation',
    name: 'أنظمة ري',
    color: '#3b82f6',
    icon: 'irrigation'
  },
  {
    id: 'maintenance',
    name: 'صيانة',
    color: '#f59e0b',
    icon: 'tools'
  },
  {
    id: 'lighting',
    name: 'إضاءة حدائق',
    color: '#eab308',
    icon: 'light'
  },
  {
    id: 'pergola',
    name: 'برجولات',
    color: '#8b5cf6',
    icon: 'pergola'
  },
  {
    id: 'pools',
    name: 'أحواض سباحة',
    color: '#06b6d4',
    icon: 'pool'
  }
];

// إنشاء أيقونة خدمة بتصميم احترافي
function createServiceIcon(service, size = 64) {
  const iconPath = {
    tree: `
      <g transform="translate(${size/2 - 16}, ${size/2 - 20})">
        <!-- جذع الشجرة -->
        <rect x="12" y="24" width="8" height="16" fill="#8b4513" rx="2"/>
        <!-- أوراق الشجرة -->
        <circle cx="16" cy="16" r="12" fill="${service.color}" opacity="0.8"/>
        <circle cx="12" cy="12" r="8" fill="${service.color}"/>
        <circle cx="20" cy="12" r="8" fill="${service.color}"/>
        <circle cx="16" cy="8" r="6" fill="${service.color}" opacity="0.9"/>
        <!-- نقاط إضاءة -->
        <circle cx="14" cy="10" r="1.5" fill="white" opacity="0.7"/>
        <circle cx="18" cy="14" r="1" fill="white" opacity="0.5"/>
      </g>
    `,
    grass: `
      <g transform="translate(${size/2 - 16}, ${size/2 - 16})">
        <!-- شفرات العشب -->
        <path d="M8 32 Q8 24 6 16 Q8 20 10 16 Q8 24 8 32" fill="${service.color}"/>
        <path d="M12 32 Q12 22 10 14 Q12 18 14 14 Q12 22 12 32" fill="${service.color}"/>
        <path d="M16 32 Q16 20 14 12 Q16 16 18 12 Q16 20 16 32" fill="${service.color}"/>
        <path d="M20 32 Q20 24 18 16 Q20 20 22 16 Q20 24 20 32" fill="${service.color}"/>
        <path d="M24 32 Q24 22 22 14 Q24 18 26 14 Q24 22 24 32" fill="${service.color}"/>
        <!-- أرضية -->
        <rect x="4" y="30" width="24" height="4" fill="#8b4513" rx="2"/>
      </g>
    `,
    fountain: `
      <g transform="translate(${size/2 - 16}, ${size/2 - 16})">
        <!-- قاعدة النافورة -->
        <ellipse cx="16" cy="28" rx="14" ry="4" fill="#666"/>
        <ellipse cx="16" cy="26" rx="12" ry="3" fill="#888"/>
        <!-- مياه النافورة -->
        <path d="M16 26 Q12 20 8 16 Q12 18 16 14 Q20 18 24 16 Q20 20 16 26" fill="${service.color}" opacity="0.7"/>
        <circle cx="16" cy="16" r="2" fill="${service.color}"/>
        <!-- قطرات الماء -->
        <circle cx="12" cy="18" r="1" fill="${service.color}" opacity="0.6"/>
        <circle cx="20" cy="18" r="1" fill="${service.color}" opacity="0.6"/>
        <circle cx="14" cy="12" r="0.8" fill="${service.color}" opacity="0.8"/>
        <circle cx="18" cy="12" r="0.8" fill="${service.color}" opacity="0.8"/>
      </g>
    `,
    irrigation: `
      <g transform="translate(${size/2 - 16}, ${size/2 - 16})">
        <!-- أنبوب الري -->
        <rect x="4" y="14" width="24" height="4" fill="#666" rx="2"/>
        <!-- فتحات المياه -->
        <circle cx="8" cy="16" r="1.5" fill="${service.color}"/>
        <circle cx="16" cy="16" r="1.5" fill="${service.color}"/>
        <circle cx="24" cy="16" r="1.5" fill="${service.color}"/>
        <!-- رذاذ الماء -->
        <path d="M8 16 L6 10 L8 8 L10 10 Z" fill="${service.color}" opacity="0.6"/>
        <path d="M16 16 L14 10 L16 8 L18 10 Z" fill="${service.color}" opacity="0.6"/>
        <path d="M24 16 L22 10 L24 8 L26 10 Z" fill="${service.color}" opacity="0.6"/>
        <!-- قطرات -->
        <circle cx="6" cy="12" r="0.5" fill="${service.color}" opacity="0.4"/>
        <circle cx="14" cy="12" r="0.5" fill="${service.color}" opacity="0.4"/>
        <circle cx="22" cy="12" r="0.5" fill="${service.color}" opacity="0.4"/>
      </g>
    `,
    tools: `
      <g transform="translate(${size/2 - 16}, ${size/2 - 16})">
        <!-- مقص الحديقة -->
        <path d="M8 8 L12 16 L8 24 L4 20 Z" fill="#888"/>
        <path d="M24 8 L20 16 L24 24 L28 20 Z" fill="#888"/>
        <circle cx="6" cy="12" r="3" fill="${service.color}"/>
        <circle cx="26" cy="12" r="3" fill="${service.color}"/>
        <!-- مقبض -->
        <rect x="10" y="15" width="12" height="2" fill="#8b4513" rx="1"/>
      </g>
    `,
    light: `
      <g transform="translate(${size/2 - 16}, ${size/2 - 16})">
        <!-- عمود الإضاءة -->
        <rect x="14" y="20" width="4" height="12" fill="#666" rx="1"/>
        <!-- المصباح -->
        <ellipse cx="16" cy="16" rx="8" ry="6" fill="${service.color}" opacity="0.8"/>
        <ellipse cx="16" cy="14" rx="6" ry="4" fill="${service.color}"/>
        <!-- أشعة الضوء -->
        <path d="M16 8 L14 4 L18 4 Z" fill="${service.color}" opacity="0.6"/>
        <path d="M24 12 L28 10 L28 14 Z" fill="${service.color}" opacity="0.6"/>
        <path d="M8 12 L4 10 L4 14 Z" fill="${service.color}" opacity="0.6"/>
        <path d="M22 20 L26 22 L24 26 Z" fill="${service.color}" opacity="0.6"/>
        <path d="M10 20 L6 22 L8 26 Z" fill="${service.color}" opacity="0.6"/>
      </g>
    `,
    pergola: `
      <g transform="translate(${size/2 - 16}, ${size/2 - 16})">
        <!-- أعمدة البرجولة -->
        <rect x="6" y="12" width="3" height="20" fill="#8b4513"/>
        <rect x="23" y="12" width="3" height="20" fill="#8b4513"/>
        <!-- العارضة العلوية -->
        <rect x="4" y="8" width="24" height="4" fill="#d2691e" rx="2"/>
        <!-- الظل -->
        <rect x="6" y="12" width="20" height="2" fill="${service.color}" opacity="0.3"/>
        <rect x="6" y="16" width="20" height="2" fill="${service.color}" opacity="0.3"/>
        <rect x="6" y="20" width="20" height="2" fill="${service.color}" opacity="0.3"/>
      </g>
    `,
    pool: `
      <g transform="translate(${size/2 - 16}, ${size/2 - 16})">
        <!-- حوض السباحة -->
        <ellipse cx="16" cy="20" rx="14" ry="8" fill="${service.color}" opacity="0.8"/>
        <ellipse cx="16" cy="18" rx="12" ry="6" fill="${service.color}"/>
        <!-- موجات الماء -->
        <path d="M4 18 Q8 16 12 18 Q16 20 20 18 Q24 16 28 18" stroke="white" stroke-width="1" fill="none" opacity="0.6"/>
        <path d="M6 20 Q10 18 14 20 Q18 22 22 20 Q26 18 30 20" stroke="white" stroke-width="1" fill="none" opacity="0.4"/>
        <!-- درج الحوض -->
        <rect x="12" y="26" width="8" height="3" fill="#ccc" rx="1"/>
      </g>
    `
  };

  return `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}">
      <defs>
        <linearGradient id="bg-${service.id}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${service.color};stop-opacity:0.1" />
          <stop offset="100%" style="stop-color:${service.color};stop-opacity:0.05" />
        </linearGradient>
        <filter id="shadow-${service.id}">
          <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.1"/>
        </filter>
      </defs>
      
      <!-- خلفية دائرية -->
      <circle cx="${size/2}" cy="${size/2}" r="${size/2 - 4}" fill="url(#bg-${service.id})" stroke="${service.color}" stroke-width="2" filter="url(#shadow-${service.id})"/>
      
      <!-- الأيقونة -->
      ${iconPath[service.icon] || iconPath.tree}
    </svg>
  `;
}

async function generateServiceIcons() {
  try {
    console.log('🎨 إنشاء أيقونات الخدمات الاحترافية...\n');
    
    const iconsDir = path.join(process.cwd(), 'public', 'images', 'services');
    await fs.mkdir(iconsDir, { recursive: true });

    const sizes = [48, 64, 96, 128];

    for (const service of services) {
      console.log(`🔧 إنشاء أيقونات ${service.name}...`);
      
      for (const size of sizes) {
        const iconSvg = createServiceIcon(service, size);
        
        // حفظ SVG
        await fs.writeFile(
          path.join(iconsDir, `${service.id}-${size}.svg`),
          iconSvg
        );
        
        // تحويل إلى PNG
        await sharp(Buffer.from(iconSvg))
          .png()
          .toFile(path.join(iconsDir, `${service.id}-${size}.png`));
      }
      
      console.log(`✅ تم إنشاء أيقونات ${service.name} (${sizes.length} أحجام)`);
    }

    // إنشاء ملف فهرس الأيقونات
    const indexContent = `// أيقونات الخدمات المتاحة
export const serviceIcons = {
${services.map(service => `  '${service.id}': {
    name: '${service.name}',
    color: '${service.color}',
    sizes: [48, 64, 96, 128],
    svg: (size = 64) => \`/images/services/${service.id}-\${size}.svg\`,
    png: (size = 64) => \`/images/services/${service.id}-\${size}.png\`
  }`).join(',\n')}
};

export type ServiceIconId = keyof typeof serviceIcons;
`;

    await fs.writeFile(
      path.join(process.cwd(), 'lib', 'service-icons.ts'),
      indexContent
    );

    console.log('\n🎉 تم إنشاء جميع أيقونات الخدمات بنجاح!');
    console.log(`📊 الإحصائيات:`);
    console.log(`   - ${services.length} خدمات`);
    console.log(`   - ${sizes.length} أحجام لكل خدمة`);
    console.log(`   - ${services.length * sizes.length * 2} ملف (SVG + PNG)`);
    console.log(`   - ملف فهرس TypeScript متاح في lib/service-icons.ts`);
    
  } catch (error) {
    console.error('❌ خطأ في إنشاء أيقونات الخدمات:', error);
    process.exit(1);
  }
}

generateServiceIcons();
