'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Calendar,
  Headphones,
  Star,
  CheckCircle,
  Send,
  User,
  Building,
  Home,
  Smartphone,
  Shield,
  Award
} from 'lucide-react'
import { siteConfig } from '@/content/site'
import ContactForm from '@/components/ContactForm'

const contactMethods = [
  {
    icon: Phone,
    title: 'اتصل بنا مباشرة',
    description: 'تحدث مع فريق الدعم',
    action: `tel:${siteConfig.phone}`,
    actionText: siteConfig.phone,
    color: 'bg-blue-50 text-blue-600 border-blue-200',
    hoverColor: 'hover:bg-blue-100',
    available: 'متاح 24/7'
  },
  {
    icon: MessageCircle,
    title: 'واتساب فوري',
    description: 'رد سريع خلال دقائق',
    action: `https://wa.me/${siteConfig.whatsapp}?text=مرحباً، أرغب في الاستفسار عن خدماتكم`,
    actionText: 'إرسال رسالة',
    color: 'bg-green-50 text-green-600 border-green-200',
    hoverColor: 'hover:bg-green-100',
    available: 'أسرع طريقة للتواصل'
  },
  {
    icon: Mail,
    title: 'البريد الإلكتروني',
    description: 'لاستفساراتكم التفصيلية',
    action: `mailto:${siteConfig.email}`,
    actionText: siteConfig.email,
    color: 'bg-orange-50 text-orange-600 border-orange-200',
    hoverColor: 'hover:bg-orange-100',
    available: 'رد خلال ساعة'
  },
  {
    icon: Calendar,
    title: 'حجز موعد',
    description: 'زيارة مجانية للموقع',
    action: '#contact-form',
    actionText: 'احجز الآن',
    color: 'bg-purple-50 text-purple-600 border-purple-200',
    hoverColor: 'hover:bg-purple-100',
    available: 'معاينة مجانية'
  }
]

const serviceAreas = [
  { name: 'شمال جدة', areas: ['الصفا', 'حي النهضة', 'حي الروضة', 'حي السلامة'] },
  { name: 'وسط جدة', areas: ['الحمراء', 'النزهة', 'المحمدية', 'الرويس'] },
  { name: 'جنوب جدة', areas: ['حي الزهراء', 'المرجان', 'أبحر', 'الشاطئ'] },
  { name: 'مناطق أخرى', areas: ['رابغ', 'خليص', 'الكامل', 'ثول'] }
]

const workingHours = [
  { day: 'السبت - الخميس', hours: '7:00 ص - 8:00 م', note: 'أيام العمل العادية' },
  { day: 'الجمعة', hours: '2:00 م - 8:00 م', note: 'دوام جزئي' },
  { day: 'الطوارئ', hours: '24/7', note: 'للحالات العاجلة' }
]

const whyChooseUs = [
  {
    icon: CheckCircle,
    title: 'استجابة سريعة',
    description: 'نرد على جميع الاستفسارات خلال ساعة'
  },
  {
    icon: Star,
    title: 'فريق متخصص',
    description: 'مستشارون خبراء لمساعدتك في اتخاذ القرار'
  },
  {
    icon: Shield,
    title: 'ضمان الخدمة',
    description: 'نضمن جودة خدمتنا وسرعة الاستجابة'
  },
  {
    icon: Award,
    title: 'تقييم ممتاز',
    description: '4.9/5 تقييم من عملائنا في خدمة العملاء'
  }
]

export default function EnhancedContactPage() {
  const [formStep, setFormStep] = useState(1)
  const [selectedService, setSelectedService] = useState('')

  return (
    <div className="space-y-0">
      {/* Hero Section with Contact Options */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/landscape-design-build-1.webp"
            alt="تواصل معنا"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
                <Headphones className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">فريق خدمة العملاء متاح 24/7</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="block mb-2">تواصل معنا</span>
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  الآن
                </span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                فريقنا جاهز لمساعدتك في تحويل حديقتك إلى واحة خضراء جميلة. 
                احصل على استشارة مجانية وعرض سعر مخصص لاحتياجاتك.
              </p>

              {/* Quick Contact Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-gray-300">دعم فني</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-1">&lt;1h</div>
                  <div className="text-sm text-gray-300">وقت الاستجابة</div>
                </div>
              </div>

              {/* Why Choose Our Support */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : '_self'}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`group ${method.color} border-2 p-6 rounded-2xl ${method.hoverColor} transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <method.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{method.title}</h3>
                    <p className="text-sm mb-3 opacity-80">{method.description}</p>
                    <div className="font-semibold text-sm">{method.actionText}</div>
                    <div className="text-xs mt-2 opacity-70">{method.available}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="arabic-subtitle mb-6">معلومات التواصل</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">مقرنا الرئيسي</h3>
                      <p className="text-gray-600 leading-relaxed">{siteConfig.address}</p>
                      <p className="text-sm text-primary mt-1">جدة، المملكة العربية السعودية</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">أرقام التواصل</h3>
                      <a href={`tel:${siteConfig.phone}`} className="text-gray-600 hover:text-primary ltr-numbers block">
                        {siteConfig.phone} (الرئيسي)
                      </a>
                      <a href={`tel:+966505123456`} className="text-gray-600 hover:text-primary ltr-numbers block text-sm">
                        +966 50 512 3456 (الطوارئ)
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">البريد الإلكتروني</h3>
                      <a href={`mailto:${siteConfig.email}`} className="text-gray-600 hover:text-primary block">
                        {siteConfig.email}
                      </a>
                      <a href="mailto:support@example.com" className="text-gray-600 hover:text-primary block text-sm">
                        support@example.com (الدعم)
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  ساعات العمل
                </h3>
                <div className="space-y-3">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-gray-100">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium">{schedule.day}</span>
                        <span className="text-primary font-semibold ltr-numbers">{schedule.hours}</span>
                      </div>
                      <p className="text-sm text-gray-600">{schedule.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Areas */}
              <div>
                <h3 className="font-semibold mb-4">مناطق خدمتنا</h3>
                <div className="space-y-3">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-gray-100">
                      <h4 className="font-medium text-primary mb-2">{area.name}</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.areas.map((location, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                          >
                            {location}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Enhanced Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                <div className="mb-8">
                  <h2 className="arabic-subtitle mb-4">أرسل لنا رسالة</h2>
                  <p className="text-gray-600">
                    املأ النموذج أدناه وسنتواصل معك خلال ساعة واحدة لمناقشة مشروعك
                  </p>
                </div>

                {/* Progress Indicator */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`flex items-center gap-2 ${formStep >= 1 ? 'text-primary' : 'text-gray-400'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${formStep >= 1 ? 'bg-primary text-white' : 'bg-gray-200'}`}>
                        <User className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium">بياناتك</span>
                    </div>
                    <div className={`flex items-center gap-2 ${formStep >= 2 ? 'text-primary' : 'text-gray-400'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${formStep >= 2 ? 'bg-primary text-white' : 'bg-gray-200'}`}>
                        <Home className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium">تفاصيل المشروع</span>
                    </div>
                    <div className={`flex items-center gap-2 ${formStep >= 3 ? 'text-primary' : 'text-gray-400'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${formStep >= 3 ? 'bg-primary text-white' : 'bg-gray-200'}`}>
                        <Send className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium">إرسال</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(formStep / 3) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <ContactForm />

                {/* Contact Features */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <h4 className="font-semibold text-sm mb-1">استشارة مجانية</h4>
                      <p className="text-xs text-gray-600">زيارة وتقييم مجاني للموقع</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Clock className="w-6 h-6 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-sm mb-1">رد سريع</h4>
                      <p className="text-xs text-gray-600">نرد خلال ساعة واحدة</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Shield className="w-6 h-6 text-orange-600" />
                      </div>
                      <h4 className="font-semibold text-sm mb-1">خصوصية آمنة</h4>
                      <p className="text-xs text-gray-600">بياناتك محمية بالكامل</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section Enhanced */}
      <section className="section bg-gray-100">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="arabic-title mb-4">موقعنا على الخريطة</h2>
            <p className="arabic-body text-gray-600 max-w-2xl mx-auto">
              نقع في موقع استراتيجي بجدة يسهل الوصول إلينا من جميع أحياء المدينة
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238134.54920266867!2d${siteConfig.geo.lng}!3d${siteConfig.geo.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0x984f0c6163c6a78c!2sJeddah%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1625000000000!5m2!1sen!2ssa`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقعنا على الخريطة"
              />
            </div>
            
            {/* Map Information */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-sm mb-1">العنوان الكامل</h4>
                <p className="text-xs text-gray-600">{siteConfig.address}</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-sm mb-1">ساعات الزيارة</h4>
                <p className="text-xs text-gray-600">السبت - الخميس، 7 ص - 8 م</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Phone className="w-6 h-6 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-sm mb-1">للاستفسار</h4>
                <p className="text-xs text-gray-600 ltr-numbers">{siteConfig.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="arabic-title mb-4">أسئلة شائعة حول التواصل</h2>
            <p className="arabic-body text-gray-600 max-w-2xl mx-auto">
              إجابات سريعة على أكثر الأسئلة شيوعاً حول خدمة العملاء والتواصل
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'كم يستغرق الرد على الاستفسارات؟',
                a: 'نرد على جميع الاستفسارات خلال ساعة واحدة في أوقات العمل، وخلال 24 ساعة في أيام الإجازات.'
              },
              {
                q: 'هل الاستشارة والمعاينة مجانية؟',
                a: 'نعم، نقدم استشارة ومعاينة مجانية تماماً لجميع عملائنا في جدة والمناطق المجاورة.'
              },
              {
                q: 'ما هي أسرع طريقة للتواصل؟',
                a: 'أسرع طريقة هي الواتساب، حيث نرد خلال دقائق معدودة. يمكنك أيضاً الاتصال المباشر.'
              },
              {
                q: 'هل تقدمون خدمة الطوارئ؟',
                a: 'نعم، لدينا خدمة طوارئ 24/7 للحالات العاجلة مثل مشاكل أنظمة الري أو الصيانة الطارئة.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h4 className="font-semibold text-lg mb-3 text-primary">{faq.q}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
