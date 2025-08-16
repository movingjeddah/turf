'use client'

import React, { useState } from 'react'
import { Phone, MessageCircle, MapPin, Clock, Mail, Send } from 'lucide-react'
import { siteConfig } from '@/content/site'

export default function QuickContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // إرسال رسالة واتساب
    const message = `مرحباً، أود طلب عرض سعر:
الاسم: ${formData.name}
الهاتف: ${formData.phone}
الخدمة: ${formData.service}
التفاصيل: ${formData.message}`
    
    const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent('مرحباً، أرغب في الاستفسار عن خدمات تنسيق الحدائق')
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${message}`, '_blank')
  }

  const handleCall = () => {
    window.location.href = `tel:${siteConfig.phone}`
  }

  return (
    <section className="section bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* خلفية زخرفية */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="arabic-title text-white mb-4">تواصل معنا الآن</h2>
          <p className="arabic-body text-gray-300 max-w-2xl mx-auto">
            احصل على استشارة مجانية وعرض سعر خاص لمشروع حديقتك
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* معلومات الاتصال والأزرار السريعة */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">طرق التواصل السريع</h3>
              
              {/* أزرار التواصل الرئيسية */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <button
                  onClick={handleWhatsApp}
                  className="group flex items-center gap-4 bg-green-500 hover:bg-green-600 p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">واتساب</div>
                    <div className="text-sm opacity-90">رد خلال 5 دقائق</div>
                  </div>
                </button>

                <button
                  onClick={handleCall}
                  className="group flex items-center gap-4 bg-blue-500 hover:bg-blue-600 p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">اتصال مباشر</div>
                    <div className="text-sm opacity-90 ltr-numbers">{siteConfig.phone}</div>
                  </div>
                </button>
              </div>
            </div>

            {/* معلومات إضافية */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">منطقة الخدمة</h4>
                  <p className="text-gray-300 text-sm">جدة والمنطقة الغربية - نصل إليك في أي مكان</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">ساعات العمل</h4>
                  <p className="text-gray-300 text-sm">السبت - الخميس: 8:00 ص - 8:00 م</p>
                  <p className="text-gray-300 text-sm">الجمعة: 2:00 م - 8:00 م</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">البريد الإلكتروني</h4>
                  <p className="text-gray-300 text-sm">{siteConfig.email}</p>
                </div>
              </div>
            </div>

            {/* إحصائيات سريعة */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="font-semibold mb-4">لماذا العملاء يثقون بنا؟</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-xs text-gray-300">دعم العملاء</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">98%</div>
                  <div className="text-xs text-gray-300">رضا العملاء</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">15</div>
                  <div className="text-xs text-gray-300">دقيقة رد</div>
                </div>
              </div>
            </div>
          </div>

          {/* نموذج التواصل السريع */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-bold mb-6">احصل على عرض سعر فوري</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="الاسم الكامل"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="رقم الهاتف"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                >
                  <option value="" className="text-gray-800">اختر الخدمة المطلوبة</option>
                  <option value="تنسيق حدائق" className="text-gray-800">تنسيق حدائق كامل</option>
                  <option value="عشب صناعي" className="text-gray-800">تركيب عشب صناعي</option>
                  <option value="شلالات ونوافير" className="text-gray-800">شلالات ونوافير</option>
                  <option value="أنظمة ري" className="text-gray-800">أنظمة ري</option>
                  <option value="صيانة" className="text-gray-800">صيانة دورية</option>
                  <option value="أخرى" className="text-gray-800">خدمة أخرى</option>
                </select>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="وصف مختصر للمشروع ومساحة الحديقة..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                إرسال عبر الواتساب
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-300">
              <p>⚡ رد فوري خلال 15 دقيقة</p>
              <p>🎁 استشارة مجانية ومعاينة الموقع</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
