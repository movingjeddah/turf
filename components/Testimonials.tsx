'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, ChevronRight, ChevronLeft, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'محسن الغامدي',
    location: 'حي الروضة',
    rating: 5,
    text: 'خدمة ممتازة وسريعة، قاموا بتحويل حديقتي إلى تحفة فنية. الفريق محترف ومواعيدهم دقيقة، أنصح بهم بشدة.',
    service: 'تنسيق حدائق',
    image: '/images/customers/mohsen.webp',
    project: 'حديقة فيلا 400م²',
  },
  {
    id: 2,
    name: 'يوسف القحطاني',
    location: 'أبحر الشمالية',
    rating: 5,
    text: 'تركيب العشب الصناعي كان احترافي جداً، والنتيجة فاقت توقعاتي. جودة عالية وضمان ممتاز.',
    service: 'عشب صناعي',
    image: '/images/customers/yousef-alqahtani.webp',
    project: 'عشب صناعي 300م²',
  },
  {
    id: 3,
    name: 'عبدالله الدوسري',
    location: 'حي الزهراء',
    rating: 5,
    text: 'الشلال الجداري الذي ركبوه أصبح محور جذب في الحديقة. صوت الماء مريح جداً والتصميم راقي.',
    service: 'شلالات ونوافير',
    image: '/images/customers/abdullah-aldosari.webp',
    project: 'شلال جداري مع إضاءة',
  },
  {
    id: 4,
    name: 'فهد العتيبي',
    location: 'حي السلامة',
    rating: 5,
    text: 'البرجولا الخشبية رائعة والتنفيذ دقيق. أضافت جمال خاص لمنطقة الجلوس في الحديقة.',
    service: 'مظلات وبرجولات',
    image: '/images/customers/fahad-alotaibi.webp',
    project: 'برجولا خشبية 4×6م',
  },
  {
    id: 5,
    name: 'سارة الفايز',
    location: 'حي المحمدية',
    rating: 5,
    text: 'الجدار الأخضر أحدث فرق كبير في منظر البيت. النباتات صحية والنظام الري ذكي وعملي.',
    service: 'جدران خضراء',
    image: '/images/customers/sarah-alfayez.webp',
    project: 'جدار أخضر 15م²',
  },
  {
    id: 6,
    name: 'خالد الشمري',
    location: 'الحمدانية',
    rating: 5,
    text: 'نظام الري الجديد وفر علي كثير من الوقت والماء. التحكم من الهاتف شيء رائع.',
    service: 'شبكات ري',
    image: '/images/customers/khalid-alshammari.webp',
    project: 'نظام ري ذكي شامل',
  },
  {
    id: 7,
    name: 'نورا الحربي',
    location: 'حي النعيم',
    rating: 5,
    text: 'صيانة الحديقة أصبحت منتظمة وممتازة. الأشجار أصبحت أكثر خضرة والورود تزهر باستمرار.',
    service: 'صيانة حدائق',
    image: '/images/customers/noura-alharbi.webp',
    project: 'صيانة شهرية شاملة',
  },
  {
    id: 8,
    name: 'محمد علي',
    location: 'حي الأندلس',
    rating: 5,
    text: 'التصميم كان إبداعي والتنفيذ ممتاز. حولوا المساحة الصغيرة إلى حديقة خلابة.',
    service: 'تصميم حدائق',
    image: '/images/customers/mohamed-ali.webp',
    project: 'تصميم حديقة 150م²',
  },
  {
    id: 9,
    name: 'أسماء الزهراني',
    location: 'حي البساتين',
    rating: 5,
    text: 'العشب الطبيعي أصبح أخضر وكثيف. خدمة زراعة ممتازة ومتابعة مستمرة.',
    service: 'عشب طبيعي',
    image: '/images/customers/asmaa.webp',
    project: 'زراعة عشب طبيعي 250م²',
  },
  {
    id: 10,
    name: 'إبراهيم الأحمدي',
    location: 'حي الشاطئ',
    rating: 5,
    text: 'المظلة المعدنية قوية ومقاومة للرياح البحرية. تصميم عملي وجميل.',
    service: 'مظلات معدنية',
    image: '/images/customers/ebrahim.webp',
    project: 'مظلة معدنية للسيارات',
  },
  {
    id: 11,
    name: 'هاجر العمري',
    location: 'حي الورود',
    rating: 5,
    text: 'حديقة الورود أصبحت حلمي الذي تحقق. أنواع جميلة من الورود ورائحة عطرة دائمة.',
    service: 'زراعة ورود',
    image: '/images/customers/hagar.webp',
    project: 'حديقة ورود متنوعة',
  },
  {
    id: 12,
    name: 'ناصر الغامدي',
    location: 'حي السلام',
    rating: 5,
    text: 'المشروع كامل من التصميم للتنفيذ والصيانة. فريق متكامل وخدمة شاملة ممتازة.',
    service: 'مشروع متكامل',
    image: '/images/customers/nasser.webp',
    project: 'حديقة فيلا متكاملة 500م²',
  },
  {
    id: 13,
    name: 'أسامة الجابر',
    location: 'حي الفيصلية',
    rating: 5,
    text: 'التصميم الحديث للحديقة رائع جداً. استخدام التقنيات الذكية في الري والإضاءة مذهل.',
    service: 'تصميم حديث',
    image: '/images/customers/osama.webp',
    project: 'حديقة تقنية ذكية',
  },
  {
    id: 14,
    name: 'عبد الهادي المطيري',
    location: 'حي الحمدانية',
    rating: 5,
    text: 'شركة محترمة ومواعيدها دقيقة. العمال مدربين والنتيجة النهائية أكثر من ممتازة.',
    service: 'تركيب شامل',
    image: '/images/customers/abdelhadi.webp',
    project: 'تجديد حديقة كاملة',
  },
  {
    id: 15,
    name: 'فضل الأحمدي',
    location: 'حي النهضة',
    rating: 5,
    text: 'نظام الري بالتنقيط وفر علي 50% من فاتورة المياه. استثمار مربح على المدى الطويل.',
    service: 'نظام ري متطور',
    image: '/images/customers/fadl.webp',
    project: 'ري ذكي موفر للمياه',
  },
  {
    id: 16,
    name: 'عامر السبيعي',
    location: 'حي الخالدية',
    rating: 5,
    text: 'خدمة الصيانة ممتازة والفريق ملتزم بالمواعيد. حديقتي دائماً في أفضل حال.',
    service: 'صيانة دورية',
    image: '/images/customers/amer.webp',
    project: 'عقد صيانة سنوي',
  },
  {
    id: 17,
    name: 'بدر القحطاني',
    location: 'حي العزيزية',
    rating: 5,
    text: 'المظلة الذكية القابلة للطي تتحكم بالمناخ تلقائياً. تقنية رائعة ومفيدة جداً.',
    service: 'مظلات ذكية',
    image: '/images/customers/badr-1.webp',
    project: 'مظلة ذكية متحركة',
  },
  {
    id: 18,
    name: 'بسمة الأحمدي',
    location: 'حي الصفا',
    rating: 5,
    text: 'تصميم الحديقة العائلية رائع والنباتات المختارة مناسبة للأطفال وآمنة.',
    service: 'حديقة عائلية',
    image: '/images/customers/basma-1.webp',
    project: 'حديقة آمنة للأطفال',
  },
  {
    id: 19,
    name: 'خالد المطيري',
    location: 'حي الكورنيش',
    rating: 5,
    text: 'النباتات المقاومة للملوحة نجحت بشكل ممتاز في البيئة الساحلية. خبرة عالية.',
    service: 'نباتات ساحلية',
    image: '/images/customers/khaled-1.webp',
    project: 'حديقة مقاومة للملوحة',
  },
  {
    id: 20,
    name: 'مروة الزهراني',
    location: 'حي الأندلس',
    rating: 5,
    text: 'الحديقة التراثية بالطابع الأندلسي جميلة جداً. التفاصيل الدقيقة رائعة.',
    service: 'تصميم تراثي',
    image: '/images/customers/marwa-1.webp',
    project: 'حديقة أندلسية تراثية',
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="section bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="arabic-title mb-6">آراء عملائنا</h2>
          <p className="arabic-body text-gray-600 max-w-2xl mx-auto text-lg">
            نفتخر بثقة عملائنا ورضاهم عن خدماتنا في جميع أنحاء جدة
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-80 lg:h-auto">
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Quote className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Service Badge */}
                  <div className="absolute bottom-6 right-6 left-6">
                    <div className="bg-primary/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                      {current.service}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  {/* Rating */}
                  <div className="flex justify-center lg:justify-start mb-6">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                    "{current.text}"
                  </blockquote>
                  
                  {/* Customer Info */}
                  <div className="border-t pt-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{current.name}</h4>
                    <p className="text-gray-500 mb-1">{current.location}</p>
                    <p className="text-primary font-medium text-sm">{current.project}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
              aria-label="Previous testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-primary transition-colors" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
              aria-label="Next testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-primary transition-colors" />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-10 bg-primary' 
                    : 'w-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">800+</div>
              <div className="text-gray-600">عميل راضي</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">99%</div>
              <div className="text-gray-600">معدل الرضا</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-gray-600">سنة خبرة</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">دعم العملاء</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}