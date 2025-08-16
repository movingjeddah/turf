'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Phone, MessageCircle, Play, Pause, VolumeX, Volume2, Star, CheckCircle } from 'lucide-react'
import { routes } from '@/lib/routes'
import { siteConfig } from '@/content/site'
import { getVideoPath } from '@/lib/videos'

const heroVideos = [
  {
    id: 'landscape-design',
    title: 'تصميم وبناء المناظر الطبيعية',
    fileName: 'landscape-design-build.mp4',
    description: 'تحويل أحلامك إلى واقع أخضر جميل'
  },
  {
    id: 'luxury-backyard',
    title: 'أفكار الفناء الخلفي الفاخر',
    fileName: 'inspirational-backyard-ideas-luxury-lifestyle.mp4',
    description: 'مساحات خارجية فاخرة للعيش والاستمتاع'
  },
  {
    id: 'artificial-grass',
    title: 'تركيب العشب الصناعي',
    fileName: 'low-maintenance-artificial-grass-installation-backyard-makeover.mp4',
    description: 'عشب أخضر طوال السنة بدون صيانة'
  }
]

const features = [
  'خبرة أكثر من 10 سنوات',
  'ضمان على جميع الأعمال', 
  'فريق متخصص ومدرب',
  'أسعار منافسة وجودة عالية'
]

export default function VideoHero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setIsVisible(true)
    
    // تغيير الفيديو كل 30 ثانية
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length)
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      if (isPlaying) {
        videoRef.current.play()
      }
    }
  }, [currentVideoIndex])

  const handleWhatsApp = () => {
    const message = encodeURIComponent('مرحباً، أرغب في الحصول على عرض سعر لتنسيق الحديقة')
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${message}`, '_blank')
  }

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const currentVideo = heroVideos[currentVideoIndex]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* فيديو الخلفية */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={getVideoPath(currentVideo.fileName)} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* أدوات التحكم بالفيديو */}
      <div className="absolute top-6 right-6 flex gap-2 z-20">
        <button
          onClick={togglePlayPause}
          className="w-10 h-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all duration-300"
          aria-label={isPlaying ? 'إيقاف الفيديو' : 'تشغيل الفيديو'}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 mr-0.5" />}
        </button>
        
        <button
          onClick={toggleMute}
          className="w-10 h-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all duration-300"
          aria-label={isMuted ? 'تشغيل الصوت' : 'كتم الصوت'}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>

      {/* مؤشرات الفيديوهات */}
      <div className="absolute top-6 left-6 flex gap-2 z-20">
        {heroVideos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVideoIndex(index)}
            className={`w-12 h-1 rounded-full transition-all duration-300 ${
              index === currentVideoIndex 
                ? 'bg-white' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`عرض الفيديو ${index + 1}`}
          />
        ))}
      </div>

      {/* المحتوى الرئيسي */}
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
              {currentVideo.description} - خدمات تنسيق الحدائق والعشب الصناعي في جدة 
              بأحدث التقنيات والتصاميم العالمية.
            </p>

            {/* الميزات */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
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
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 text-center"
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

          {/* معلومات الفيديو الحالي */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                {currentVideo.title}
              </h3>
              
              <p className="text-gray-200 mb-6 leading-relaxed">
                شاهد كيف نحول المساحات العادية إلى حدائق استثنائية باستخدام 
                أحدث التقنيات والمواد عالية الجودة.
              </p>

              {/* إحصائيات سريعة */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">500+</div>
                  <div className="text-xs text-gray-300">مشروع مكتمل</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary mb-1">98%</div>
                  <div className="text-xs text-gray-300">رضا العملاء</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-1">15</div>
                  <div className="text-xs text-gray-300">يوم متوسط التنفيذ</div>
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
