'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, MessageCircle, Play, Star, CheckCircle } from 'lucide-react'
import { routes } from '@/lib/routes'
import { siteConfig } from '@/content/site'

const features = [
  'خبرة أكثر من 10 سنوات',
  'ضمان على جميع الأعمال', 
  'فريق متخصص ومدرب',
  'أسعار منافسة وجودة عالية'
]

export default function EnhancedHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleWhatsApp = () => {
    const message = encodeURIComponent('مرحباً، أرغب في الحصول على عرض سعر لتنسيق الحديقة')
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${message}`, '_blank')
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* خلفية متحركة */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="تنسيق حدائق جدة"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        
        {/* عناصر زخرفية متحركة */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-primary rounded-full animate-bounce delay-75"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-secondary rounded-full animate-bounce delay-150"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-primary rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-20 left-40 w-5 h-5 bg-secondary/50 rounded-full animate-pulse"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* المحتوى النصي */}
          <div className={`text-white transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            {/* شارة الجودة */}
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium">الشركة الرائدة في تنسيق الحدائق</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block mb-2">نحول حديقتك إلى</span>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                واحة خضراء
              </span>
            </h1>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              خدمات تنسيق الحدائق والعشب الصناعي في جدة بأحدث التقنيات والتصاميم العالمية. 
              نقدم حلول متكاملة لتصميم وتنفيذ وصيانة الحدائق المنزلية والتجارية.
            </p>

            {/* الميزات */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-gray-200">{feature}</span>
                </div>
              ))}
            </div>

            {/* أزرار العمل */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={routes.contact}
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">احصل على عرض سعر مجاني</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>

              <button
                onClick={handleWhatsApp}
                className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                تواصل واتساب
              </button>
            </div>

            {/* معلومات الاتصال */}
            <div className="flex items-center gap-6 mt-8 pt-8 border-t border-white/20">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="ltr-numbers font-medium">{siteConfig.phone}</span>
              </a>
              
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-200 mr-2">(500+ مراجعة)</span>
              </div>
            </div>
          </div>

          {/* عرض مرئي */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            {/* فيديو أو صورة مميزة */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-w-16 aspect-h-12">
                <Image
                  src="/images/hero-showcase.jpg"
                  alt="عرض أعمال تنسيق الحدائق"
                  width={600}
                  height={450}
                  className="object-cover"
                />
              </div>
              
              {/* زر تشغيل الفيديو */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group">
                  <Play className="w-8 h-8 text-primary mr-1 group-hover:scale-110 transition-transform" />
                </button>
              </div>

              {/* إطار زخرفي */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl"></div>
            </div>

            {/* كارد عائم للإحصائيات */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-600 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800">500+</div>
                  <div className="text-sm text-gray-600">مشروع مكتمل</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* مؤشر التمرير */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
