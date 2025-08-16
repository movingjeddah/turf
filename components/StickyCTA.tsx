'use client'

import React, { useState, useEffect } from 'react'
import { Phone, MessageCircle, ChevronUp, Headphones, Calculator, Calendar } from 'lucide-react'
import { siteConfig } from '@/content/site'
import { generateWhatsAppUrl } from '@/lib/utils'
import { routes } from '@/lib/routes'

export default function StickyCTA() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const whatsappMessage = 'مرحباً، أرغب في الاستفسار عن خدمات تنسيق الحدائق'
  const whatsappUrl = generateWhatsAppUrl(siteConfig.whatsapp, whatsappMessage)

  const quickActions = [
    {
      icon: MessageCircle,
      label: 'واتساب',
      action: () => window.open(whatsappUrl, '_blank'),
      color: 'bg-green-500 hover:bg-green-600',
      pulse: true
    },
    {
      icon: Phone,
      label: 'اتصال',
      action: () => window.open(`tel:${siteConfig.phone}`, '_self'),
      color: 'bg-primary hover:bg-primary-600'
    },
    {
      icon: Calculator,
      label: 'حاسبة التكلفة',
      action: () => window.open(routes.pricing, '_self'),
      color: 'bg-secondary hover:bg-secondary-600'
    },
    {
      icon: Calendar,
      label: 'حجز موعد',
      action: () => window.open(routes.contact, '_self'),
      color: 'bg-blue-500 hover:bg-blue-600'
    }
  ]

  if (!isVisible) return null

  return (
    <div className={`fixed bottom-6 left-6 z-50 transition-all duration-300 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
    }`}>
      {/* الأزرار المنبثقة */}
      <div className={`flex flex-col gap-3 mb-3 transition-all duration-300 ${
        isExpanded ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        {quickActions.slice(1).map((action, index) => {
          const Icon = action.icon
          return (
            <div
              key={index}
              className={`group relative transform transition-all duration-300 delay-${index * 50}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <button
                onClick={action.action}
                className={`${action.color} text-white p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group-hover:rotate-12`}
                aria-label={action.label}
              >
                <Icon className="w-5 h-5" />
              </button>
              
              {/* تولتيب */}
              <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {action.label}
                <div className="absolute left-0 top-1/2 transform translate-x-full -translate-y-1/2 border-4 border-transparent border-r-gray-900"></div>
              </div>
            </div>
          )
        })}
      </div>

      {/* زر واتساب الرئيسي */}
      <div className="relative">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
          aria-label="القائمة السريعة"
        >
          <div className="relative">
            <MessageCircle className={`w-6 h-6 transition-transform duration-300 ${
              isExpanded ? 'rotate-45 scale-75' : 'rotate-0 scale-100'
            }`} />
            <ChevronUp className={`w-4 h-4 absolute top-0 left-0 transition-all duration-300 ${
              isExpanded ? 'rotate-180 opacity-100 scale-100' : 'rotate-0 opacity-0 scale-50'
            }`} />
          </div>
        </button>

        {/* نقطة النشاط */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></div>

        {/* تولتيب للزر الرئيسي */}
        {!isExpanded && (
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-green-700 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none animate-pulse">
            💬 تواصل معنا الآن!
            <div className="absolute left-0 top-1/2 transform translate-x-full -translate-y-1/2 border-4 border-transparent border-r-green-700"></div>
          </div>
        )}
      </div>

      {/* شريط المساعدة */}
      {isExpanded && (
        <div className="absolute right-full mr-4 bottom-0 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-64 animate-scale-in">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
              <Headphones className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">كيف يمكننا مساعدتك؟</h4>
              <p className="text-xs text-gray-600">فريق الدعم متاح 24/7</p>
            </div>
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>استشارة مجانية</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>رد فوري على الواتساب</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span>زيارة مجانية للموقع</span>
            </div>
          </div>

          <button
            onClick={quickActions[0].action}
            className="w-full mt-4 bg-gradient-to-r from-green-500 to-green-600 text-white py-2 px-4 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105"
          >
            ابدأ المحادثة الآن
          </button>
        </div>
      )}
    </div>
  )
} 