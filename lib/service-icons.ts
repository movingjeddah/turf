// أيقونات الخدمات المتاحة
export const serviceIcons = {
  'landscaping': {
    name: 'تنسيق حدائق',
    color: '#22c55e',
    sizes: [48, 64, 96, 128],
    svg: (size = 64) => `/images/services/landscaping-${size}.svg`,
    png: (size = 64) => `/images/services/landscaping-${size}.png`
  },
  'artificial-grass': {
    name: 'عشب صناعي',
    color: '#16a34a',
    sizes: [48, 64, 96, 128],
    svg: (size = 64) => `/images/services/artificial-grass-${size}.svg`,
    png: (size = 64) => `/images/services/artificial-grass-${size}.png`
  },
  'fountains': {
    name: 'شلالات ونوافير',
    color: '#0ea5e9',
    sizes: [48, 64, 96, 128],
    svg: (size = 64) => `/images/services/fountains-${size}.svg`,
    png: (size = 64) => `/images/services/fountains-${size}.png`
  },
  'irrigation': {
    name: 'أنظمة ري',
    color: '#3b82f6',
    sizes: [48, 64, 96, 128],
    svg: (size = 64) => `/images/services/irrigation-${size}.svg`,
    png: (size = 64) => `/images/services/irrigation-${size}.png`
  },
  'maintenance': {
    name: 'صيانة',
    color: '#f59e0b',
    sizes: [48, 64, 96, 128],
    svg: (size = 64) => `/images/services/maintenance-${size}.svg`,
    png: (size = 64) => `/images/services/maintenance-${size}.png`
  },
  'lighting': {
    name: 'إضاءة حدائق',
    color: '#eab308',
    sizes: [48, 64, 96, 128],
    svg: (size = 64) => `/images/services/lighting-${size}.svg`,
    png: (size = 64) => `/images/services/lighting-${size}.png`
  },
  'pergola': {
    name: 'برجولات',
    color: '#8b5cf6',
    sizes: [48, 64, 96, 128],
    svg: (size = 64) => `/images/services/pergola-${size}.svg`,
    png: (size = 64) => `/images/services/pergola-${size}.png`
  },
  'pools': {
    name: 'أحواض سباحة',
    color: '#06b6d4',
    sizes: [48, 64, 96, 128],
    svg: (size = 64) => `/images/services/pools-${size}.svg`,
    png: (size = 64) => `/images/services/pools-${size}.png`
  }
};

export type ServiceIconId = keyof typeof serviceIcons;
