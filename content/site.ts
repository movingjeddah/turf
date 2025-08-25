export const siteConfig = {
  name: 'تنسيق حدائق جدة',
  company: process.env.COMPANY_NAME || 'شركة تنسيق الحدائق المتميزة',
  phone: process.env.COMPANY_PHONE || '+966548923300',
  whatsapp: process.env.COMPANY_PHONE || '+966548923300',
  email: 'info@turfksa.com',
  address: process.env.COMPANY_ADDRESS || 'جدة، المملكة العربية السعودية',
  geo: {
    lat: parseFloat(process.env.COMPANY_GEO_LAT || '21.4858'),
    lng: parseFloat(process.env.COMPANY_GEO_LNG || '39.1925'),
  },
  openingHours: process.env.OPENING_HOURS || 'السبت-الخميس: 8:00 ص - 10:00 م',
  coverage: [
    'جدة',
    'مكة المكرمة',
    'المدينة المنورة',
    'الطائف',
  ],
  socialMedia: {
    twitter: 'https://twitter.com/turfksa',
    instagram: 'https://instagram.com/turfksa',
    facebook: 'https://facebook.com/turfksa',
  },
  features: [
    'ضمان على جميع الأعمال',
    'فريق محترف ومدرب',
    'أسعار منافسة',
    'خدمة عملاء على مدار الساعة',
    'مواد عالية الجودة',
    'تصاميم عصرية وحديثة',
  ],
} 