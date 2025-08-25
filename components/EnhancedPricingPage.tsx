'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  CheckCircle, 
  X, 
  Crown, 
  Calculator, 
  Clock, 
  Shield, 
  Star,
  Hammer,
  Home,
  Building,
  Phone,
  MessageCircle,
  TrendingUp,
  Award,
  Zap
} from 'lucide-react'
import { services } from '@/content/services'
import { siteConfig } from '@/content/site'
import { routes } from '@/lib/routes'
import PriceTable from '@/components/PriceTable'
import { getVideoPath } from '@/lib/videos'

const pricingCategories = [
  {
    id: 'residential',
    title: 'المشاريع السكنية',
    description: 'حدائق منزلية وفلل خاصة',
    icon: Home,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    id: 'commercial',
    title: 'المشاريع التجارية',
    description: 'مجمعات تجارية وشركات',
    icon: Building,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    id: 'maintenance',
    title: 'الصيانة والرعاية',
    description: 'خدمات دورية ومستمرة',
    icon: Hammer,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  }
]

const pricingFeatures = [
  {
    icon: Calculator,
    title: 'تسعير دقيق وشفاف',
    description: 'لا توجد تكاليف خفية أو مفاجآت'
  },
  {
    icon: Clock,
    title: 'أسعار ثابتة لمدة 30 يوم',
    description: 'العرض صالح لشهر كامل'
  },
  {
    icon: Shield,
    title: 'ضمان شامل',
    description: 'ضمان على المواد والتنفيذ'
  },
  {
    icon: Star,
    title: 'خصومات حصرية',
    description: 'خصومات للمشاريع الكبيرة'
  }
]

const packageComparison = [
  {
    name: 'الباقة الأساسية',
    price: '150',
    period: 'للمتر المربع',
    description: 'مناسبة للمساحات الصغيرة والميزانيات المحدودة',
    features: [
      'تصميم أساسي للحديقة',
      'زراعة نباتات محلية',
      'نظام ري بسيط',
      'ضمان 6 أشهر',
      'صيانة مجانية لمدة شهر'
    ],
    notIncluded: [
      'أنظمة الإضاءة',
      'العشب الصناعي',
      'العناصر المائية'
    ],
    popular: false,
    color: 'border-gray-300'
  },
  {
    name: 'الباقة المتميزة',
    price: '250',
    period: 'للمتر المربع',
    description: 'الخيار الأمثل لمعظم العملاء',
    features: [
      'تصميم متقدم ثلاثي الأبعاد',
      'مجموعة متنوعة من النباتات',
      'نظام ري ذكي',
      'إضاءة LED للحديقة',
      'ضمان سنة كاملة',
      'صيانة مجانية 3 أشهر'
    ],
    notIncluded: [
      'برجولات ومظلات',
      'أحواض سباحة'
    ],
    popular: true,
    color: 'border-primary'
  },
  {
    name: 'الباقة الفاخرة',
    price: '400',
    period: 'للمتر المربع',
    description: 'للعملاء الذين يريدون الأفضل',
    features: [
      'تصميم حصري ومخصص',
      'نباتات نادرة ومستوردة',
      'أنظمة ري وإضاءة ذكية',
      'عناصر مائية وشلالات',
      'برجولات ومناطق جلوس',
      'ضمان سنتين',
      'صيانة مجانية 6 أشهر'
    ],
    notIncluded: [],
    popular: false,
    color: 'border-yellow-400'
  }
]

const additionalServices = [
  {
    service: 'عشب صناعي عالي الجودة',
    price: '45-85',
    unit: 'ريال/م²',
    image: '/images/artificial-grass-range.webp'
  },
  {
    service: 'شلالات ونوافير مائية',
    price: '3,000-15,000',
    unit: 'ريال/قطعة',
    image: '/images/water-features-jeddah.webp'
  },
  {
    service: 'برجولات خشبية حديثة',
    price: '8,000-25,000',
    unit: 'ريال/برجولا',
    image: '/images/pergola-design.webp'
  },
  {
    service: 'أنظمة الإضاءة الذكية',
    price: '150-300',
    unit: 'ريال/م²',
    image: '/images/modern-outdoor-lighting.webp'
  }
]

export default function EnhancedPricingPage() {
  const [selectedCategory, setSelectedCategory] = useState('residential')
  const [selectedPackage, setSelectedPackage] = useState('الباقة المتميزة')
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false)
  const [areaSize, setAreaSize] = useState('')
  const [calculatedPrice, setCalculatedPrice] = useState(0)

  const calculatePrice = () => {
    const area = parseFloat(areaSize)
    if (area && selectedPackage) {
      const packagePrice = packageComparison.find(p => p.name === selectedPackage)?.price || '250'
      const total = area * parseFloat(packagePrice)
      setCalculatedPrice(total)
    }
  }

  return (
    <div className="space-y-0">
      {/* Hero Section with Video */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={getVideoPath('front-yard-decoration.mp4')} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="container relative z-10">
          <div className="max-w-4xl text-white">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Calculator className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">أسعار شفافة ومنافسة - بدون مفاجآت</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block mb-2">أسعارنا</span>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                شفافة وعادلة
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              نقدم أفضل الأسعار مع الحفاظ على أعلى معايير الجودة. 
              جميع أسعارنا تشمل الضمان والصيانة الأولية.
            </p>

            {/* Pricing Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {pricingFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Quick Calculator Button */}
            <button
              onClick={() => setIsCalculatorOpen(!isCalculatorOpen)}
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Calculator className="w-5 h-5" />
              احسب تكلفة مشروعك
            </button>
          </div>
        </div>
      </section>

      {/* Quick Calculator Modal */}
      {isCalculatorOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">حاسبة التكلفة السريعة</h3>
              <button
                onClick={() => setIsCalculatorOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">مساحة الحديقة (متر مربع)</label>
                <input
                  type="number"
                  value={areaSize}
                  onChange={(e) => setAreaSize(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="مثال: 100"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">نوع الباقة</label>
                <select
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {packageComparison.map((pkg) => (
                    <option key={pkg.name} value={pkg.name}>
                      {pkg.name} - {pkg.price} ريال/م²
                    </option>
                  ))}
                </select>
              </div>
              
              <button
                onClick={calculatePrice}
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                احسب التكلفة
              </button>
              
              {calculatedPrice > 0 && (
                <div className="bg-primary/10 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {calculatedPrice.toLocaleString()} ريال
                  </div>
                  <div className="text-sm text-gray-600">تكلفة تقديرية (شاملة الضريبة)</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Category Selection */}
      <section className="section bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="arabic-title mb-4">اختر نوع مشروعك</h2>
            <p className="arabic-body text-gray-600 max-w-2xl mx-auto">
              لدينا أسعار مخصصة لكل نوع من المشاريع لضمان حصولك على أفضل قيمة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {pricingCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-8 rounded-2xl border-2 transition-all duration-300 text-center hover:scale-105 ${
                  selectedCategory === category.id
                    ? `${category.borderColor} ${category.bgColor} shadow-lg`
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  selectedCategory === category.id ? category.bgColor : 'bg-gray-100'
                }`}>
                  <category.icon className={`w-8 h-8 ${
                    selectedCategory === category.id ? category.color : 'text-gray-600'
                  }`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Package Comparison */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="arabic-title mb-4">باقاتنا المتنوعة</h2>
            <p className="arabic-body text-gray-600 max-w-2xl mx-auto">
              اختر الباقة التي تناسب احتياجاتك وميزانيتك
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packageComparison.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl border-2 ${pkg.color} ${
                  pkg.popular ? 'transform scale-105' : ''
                } transition-all duration-300 hover:shadow-2xl`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Crown className="w-4 h-4" />
                      الأكثر طلباً
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 mb-4">{pkg.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                      <span className="text-gray-600"> {pkg.period}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-green-600 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      شامل في الباقة
                    </h4>
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                    
                    {pkg.notIncluded.length > 0 && (
                      <>
                        <h4 className="font-semibold text-red-600 flex items-center gap-2 mt-6">
                          <X className="w-5 h-5" />
                          غير شامل
                        </h4>
                        {pkg.notIncluded.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-500">{feature}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>

                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}>
                    اختر هذه الباقة
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Pricing */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="arabic-title mb-4">أسعار الخدمات المتخصصة</h2>
            <p className="arabic-body text-gray-600 max-w-2xl mx-auto">
              أسعار تفصيلية لجميع خدماتنا المتخصصة
            </p>
          </div>

          {services.slice(0, 4).map((service, index) => (
            <div key={service.key} className="mb-16">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Service Image */}
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={service.gallery[0]?.image || '/images/landscape-design-build.webp'}
                      alt={service.arabicTitle}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-2xl font-bold mb-2">{service.arabicTitle}</h3>
                      <p className="text-sm opacity-90">{service.shortDescription}</p>
                    </div>
                  </div>

                  {/* Pricing Content */}
                  <div className="p-8">
                    <div className="mb-6">
                      <Link
                        href={routes.services.bySlug(service.slug)}
                        className="text-primary hover:text-primary/80 font-semibold text-lg flex items-center gap-2"
                      >
                        تفاصيل الخدمة
                        <TrendingUp className="w-4 h-4" />
                      </Link>
                    </div>
                    
                    <PriceTable tiers={service.pricingTiers} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="arabic-title mb-4">خدمات إضافية</h2>
            <p className="arabic-body text-gray-600 max-w-2xl mx-auto">
              خدمات تكميلية لإكمال مشروع حديقتك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.service}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-lg font-bold text-primary bg-white/90 px-2 py-1 rounded">
                      {service.price} {service.unit}
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{service.service}</h3>
                  <p className="text-sm text-gray-600">سعر يشمل المواد والتركيب</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="section bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="arabic-title mb-4">ملاحظات مهمة</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">جميع الأسعار تشمل المواد والعمالة والنقل</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">ضمان شامل على جميع أعمالنا حسب نوع الخدمة</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">معاينة وتقييم مجاني لتحديد السعر النهائي</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">خصومات خاصة للمشاريع الكبيرة والعقود السنوية</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-700">الأسعار قابلة للتفاوض حسب حجم المشروع</p>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-gray-700">سرعة في التنفيذ مع الحفاظ على الجودة</p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">تأمين شامل ضد جميع المخاطر</p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">دعم فني مجاني لمدة سنة بعد التسليم</p>
                </div>
              </div>
            </div>

            {/* Contact for Quote */}
            <div className="mt-12 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4">احصل على عرض سعر مخصص</h3>
                <p className="text-gray-600 mb-6">
                  كل مشروع فريد، تواصل معنا للحصول على عرض سعر مفصل يناسب احتياجاتك تماماً
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    اتصل للحصول على عرض
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp.replace('+', '')}?text=مرحباً، أرغب في الحصول على عرض سعر مخصص`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    واتساب فوري
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
