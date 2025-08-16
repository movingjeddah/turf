'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, Phone, X, Plus } from 'lucide-react'
import { siteConfig } from '@/content/site'

export default function FloatingActionButtons() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // إظهار الأزرار بعد التمرير 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhatsApp = () => {
    const message = encodeURIComponent('مرحباً، أرغب في الاستفسار عن خدمات تنسيق الحدائق')
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${message}`, '_blank')
  }

  const handleCall = () => {
    window.location.href = `tel:${siteConfig.phone}`
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* أزرار الإجراءات */}
      <div className={`flex flex-col gap-3 mb-3 transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        {/* زر الاتصال */}
        <button
          onClick={handleCall}
          className="group relative w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="اتصال مباشر"
        >
          <Phone className="w-5 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          
          {/* تلميح */}
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            اتصال مباشر
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-full border-4 border-transparent border-r-gray-800"></div>
          </div>
        </button>

        {/* زر الواتساب */}
        <button
          onClick={handleWhatsApp}
          className="group relative w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="تواصل عبر الواتساب"
        >
          <MessageCircle className="w-5 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          
          {/* تلميح */}
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            تواصل عبر الواتساب
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-full border-4 border-transparent border-r-gray-800"></div>
          </div>
        </button>
      </div>

      {/* الزر الرئيسي */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 bg-primary hover:bg-primary-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center ${
          isOpen ? 'rotate-45' : 'rotate-0'
        }`}
        aria-label={isOpen ? 'إغلاق القائمة' : 'فتح قائمة التواصل'}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Plus className="w-6 h-6" />
        )}
      </button>

      {/* نبضة للفت الانتباه */}
      {!isOpen && (
        <div className="absolute inset-0 w-14 h-14 bg-primary rounded-full animate-ping opacity-20"></div>
      )}
    </div>
  )
}
