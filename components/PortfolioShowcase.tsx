'use client'

import Link from 'next/link'
import { ArrowLeft, Play } from 'lucide-react'
import { routes } from '@/lib/routes'
import { getVideoPath } from '@/lib/videos'

const portfolioItems = [
  {
    id: 1,
    title: 'تصميم وتنفيذ المناظر الطبيعية',
    category: 'تنسيق حدائق',
    videoFileName: 'landscape-design-build.mp4',
    description: 'مشروع متكامل لتصميم وتنفيذ المناظر الطبيعية من البداية حتى النهاية',
    features: ['تصميم احترافي', 'تنفيذ متكامل', 'نباتات مختارة', 'صيانة شاملة'],
    location: 'جدة - حي الصفا',
    area: '400 متر مربع',
    duration: '20 يوم'
  },
  {
    id: 2,
    title: 'أفكار الفناء الخلفي الفاخر',
    category: 'حدائق فاخرة',
    videoFileName: 'inspirational-backyard-ideas-luxury-lifestyle.mp4',
    description: 'تحويل الفناء الخلفي إلى مساحة معيشة فاخرة للاستمتاع والاسترخاء',
    features: ['تصميم فاخر', 'مناطق جلوس', 'إضاءة مميزة', 'عناصر مائية'],
    location: 'جدة - حي الروضة',
    area: '600 متر مربع',
    duration: '25 يوم'
  },
  {
    id: 3,
    title: 'تركيب العشب الصناعي المتطور',
    category: 'عشب صناعي',
    videoFileName: 'low-maintenance-artificial-grass-installation-backyard-makeover.mp4',
    description: 'تركيب عشب صناعي عالي الجودة قليل الصيانة مع تحويل شامل للفناء',
    features: ['عشب صناعي', 'قليل الصيانة', 'مقاوم للحرارة', 'ضمان 10 سنوات'],
    location: 'جدة - حي النهضة',
    area: '300 متر مربع',
    duration: '12 يوم'
  },
  {
    id: 4,
    title: 'حدائق التراس المذهلة',
    category: 'حدائق أسطح',
    videoFileName: 'stunning-terrace-garden-ideas.mp4',
    description: 'تصميم وتنفيذ حدائق الأسطح والتراسات لاستغلال المساحات العلوية',
    features: ['تراس مميز', 'نباتات متنوعة', 'نظام ري ذكي', 'عزل حراري'],
    location: 'جدة - حي الزهراء',
    area: '150 متر مربع',
    duration: '15 يوم'
  },
  {
    id: 5,
    title: 'ملعب جولف منزلي',
    category: 'ملاعب رياضية',
    videoFileName: 'putting-green-work-in-progress-artificial-turf-ideas.mp4',
    description: 'إنشاء ملعب جولف صغير احترافي في الحديقة المنزلية',
    features: ['ملعب جولف', 'عشب متخصص', 'تصميم احترافي', 'معدات كاملة'],
    location: 'جدة - حي الشاطئ',
    area: '100 متر مربع',
    duration: '10 أيام'
  },
  {
    id: 6,
    title: 'تزيين الفناء الأمامي',
    category: 'تنسيق أمامي',
    videoFileName: 'front-yard-decoration.mp4',
    description: 'تزيين وتنسيق الفناء الأمامي لإضافة جمال وجاذبية للمنزل',
    features: ['تصميم جذاب', 'نباتات موسمية', 'ممرات مرصوفة', 'إضاءة ليلية'],
    location: 'جدة - حي المحمدية',
    area: '200 متر مربع',
    duration: '8 أيام'
  }
]

export default function PortfolioShowcase() {
  return (
    <section className="section bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="arabic-title mb-4">أعمالنا المميزة</h2>
          <p className="arabic-body text-gray-600 max-w-2xl mx-auto">
            اكتشف مجموعة من أفضل أعمالنا التي نفذناها لعملائنا في جدة والمنطقة الغربية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-8">
          {portfolioItems.slice(0, 6).map((item) => (
            <div 
              key={item.id}
              className="card-hover group"
            >
              <div className="relative h-64 overflow-hidden rounded-t-lg bg-gray-900">
                {/* فيديو المعاينة */}
                <video
                  className="w-full h-full object-cover"
                  muted
                  loop
                  preload="metadata"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause()
                    e.currentTarget.currentTime = 0
                  }}
                >
                  <source src={getVideoPath(item.videoFileName)} type="video/mp4" />
                </video>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                
                {/* شارة الفئة */}
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {item.category}
                </div>

                {/* زر تشغيل الفيديو */}
                <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="w-4 h-4 text-primary mr-0.5" />
                </div>

                {/* معلومات المشروع */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-200 mb-3 line-clamp-2">{item.description}</p>
                  
                  {/* الميزات */}
                  <div className="flex flex-wrap gap-2">
                    {item.features.slice(0, 2).map((feature, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-primary/80 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    {item.features.length > 2 && (
                      <span className="text-xs text-gray-300">
                        +{item.features.length - 2} المزيد
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* تفاصيل إضافية */}
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">الموقع</div>
                    <div className="font-semibold text-xs">{item.location}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">المساحة</div>
                    <div className="font-semibold text-xs">{item.area}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">المدة</div>
                    <div className="font-semibold text-xs">{item.duration}</div>
                  </div>
                </div>

                {/* قائمة الميزات الكاملة */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap gap-1">
                    {item.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* رابط عرض المزيد */}
        <div className="text-center">
          <Link
            href={routes.portfolio}
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <span>عرض جميع الأعمال</span>
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* إحصائيات سريعة */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">500+</div>
            <div className="text-sm text-gray-600">مشروع مكتمل</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary mb-1">98%</div>
            <div className="text-sm text-gray-600">رضا العملاء</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">15</div>
            <div className="text-sm text-gray-600">يوم متوسط التنفيذ</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary mb-1">10</div>
            <div className="text-sm text-gray-600">سنوات ضمان</div>
          </div>
        </div>
      </div>
    </section>
  )
}
