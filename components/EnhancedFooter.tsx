'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, MessageCircle, Mail, MapPin, Clock, Star, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import { routes } from '@/lib/routes'
import { siteConfig } from '@/content/site'

const footerLinks = {
  services: [
    { title: 'تنسيق حدائق', href: routes.services.bySlug('landscaping') },
    { title: 'عشب صناعي', href: routes.services.bySlug('artificial-grass') },
    { title: 'شلالات ونوافير', href: routes.services.bySlug('fountains') },
    { title: 'أنظمة ري', href: routes.services.bySlug('irrigation') },
    { title: 'صيانة حدائق', href: routes.services.bySlug('maintenance') }
  ],
  company: [
    { title: 'من نحن', href: routes.about },
    { title: 'أعمالنا', href: routes.portfolio },
    { title: 'أسعارنا', href: routes.pricing },
    { title: 'مدونتنا', href: routes.blog.index },
    { title: 'اتصل بنا', href: routes.contact }
  ],
  locations: [
    { title: 'جدة - الروضة', href: '/jeddah/al-rawdah' },
    { title: 'جدة - النهضة', href: '/jeddah/al-nahdah' },
    { title: 'جدة - الصفا', href: '/jeddah/al-safa' },
    { title: 'جدة - المحمدية', href: '/jeddah/al-mohammadiyyah' },
    { title: 'جميع الأحياء', href: routes.jeddah.index }
  ]
}

const socialLinks = [
  { icon: Facebook, href: '#', label: 'فيسبوك' },
  { icon: Twitter, href: '#', label: 'تويتر' },
  { icon: Instagram, href: '#', label: 'انستقرام' },
  { icon: Youtube, href: '#', label: 'يوتيوب' }
]

const stats = [
  { number: '500+', label: 'مشروع مكتمل' },
  { number: '10+', label: 'سنوات خبرة' },
  { number: '98%', label: 'رضا العملاء' },
  { number: '24/7', label: 'دعم العملاء' }
]

export default function EnhancedFooter() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent('مرحباً، أرغب في الاستفسار عن خدمات تنسيق الحدائق')
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${message}`, '_blank')
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* خلفية زخرفية */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* الجزء العلوي */}
        <div className="container py-16">
          {/* الإحصائيات السريعة */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* معلومات الشركة */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Image 
                  src="/images/logo.png" 
                  alt="شعار تنسيق حدائق جدة" 
                  width={200}
                  height={80}
                  className="h-16 md:h-20 lg:h-24 w-auto mb-4"
                />
                <p className="text-gray-300 leading-relaxed mb-6">
                  الشركة الرائدة في تنسيق الحدائق والعشب الصناعي في جدة والمنطقة الغربية. 
                  نحول أحلامك إلى واقع أخضر جميل.
                </p>
              </div>

              {/* معلومات الاتصال السريع */}
              <div className="space-y-4">
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center gap-3 bg-green-500 hover:bg-green-600 p-3 rounded-lg transition-colors duration-300 group"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>تواصل واتساب</span>
                </button>
                
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="w-full flex items-center gap-3 bg-primary hover:bg-primary-600 p-3 rounded-lg transition-colors duration-300 group"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="ltr-numbers">{siteConfig.phone}</span>
                </a>
              </div>

              {/* التقييمات */}
              <div className="mt-6 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="font-semibold">4.9/5</span>
                </div>
                <div className="text-sm text-gray-300">من 500+ مراجعة عميل</div>
              </div>
            </div>

            {/* روابط الخدمات */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-primary">خدماتنا</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full"></span>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* روابط الشركة */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-secondary">الشركة</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-secondary rounded-full"></span>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* معلومات الاتصال والمواقع */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-green-400">تواصل معنا</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">العنوان</div>
                    <div className="text-sm text-gray-300">جدة، المملكة العربية السعودية</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">ساعات العمل</div>
                    <div className="text-sm text-gray-300">
                      السبت - الخميس: 8:00 ص - 8:00 م<br />
                      الجمعة: 2:00 م - 8:00 م
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">البريد الإلكتروني</div>
                    <div className="text-sm text-gray-300">{siteConfig.email}</div>
                  </div>
                </div>
              </div>

              {/* مواقع الخدمة */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">مناطق الخدمة</h4>
                <ul className="space-y-2">
                  {footerLinks.locations.slice(0, 3).map((location, index) => (
                    <li key={index}>
                      <Link 
                        href={location.href}
                        className="text-sm text-gray-300 hover:text-green-400 transition-colors duration-200"
                      >
                        {location.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link 
                  href={routes.jeddah.index}
                  className="text-sm text-green-400 hover:underline mt-2 inline-block"
                >
                  + جميع أحياء جدة
                </Link>
              </div>

              {/* الشبكات الاجتماعية */}
              <div>
                <h4 className="font-semibold mb-3">تابعنا</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-300 group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* الجزء السفلي */}
        <div className="border-t border-white/10 bg-black/20">
          <div className="container py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-300">
                © 2024 {siteConfig.name}. جميع الحقوق محفوظة.
              </div>
              
              <div className="flex gap-6 text-sm">
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  سياسة الخصوصية
                </Link>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                  شروط الاستخدام
                </Link>
                <Link href="/sitemap" className="text-gray-300 hover:text-white transition-colors">
                  خريطة الموقع
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
