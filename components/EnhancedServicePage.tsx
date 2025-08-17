'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  CheckCircle, 
  Star, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX,
  Clock,
  Shield,
  Award,
  Phone,
  MessageCircle,
  Calculator,
  ArrowLeft,
  Target
} from 'lucide-react'
import { Service } from '@/content/services'
import { routes } from '@/lib/routes'
import { siteConfig } from '@/content/site'
import PriceTable from '@/components/PriceTable'
import FAQ from '@/components/FAQ'
import Gallery from '@/components/Gallery'
import { getVideoPath } from '@/lib/videos'

interface EnhancedServicePageProps {
  service: Service
}

// Match videos to services intelligently
const getServiceVideo = (serviceSlug: string): { url: string; isVideo: boolean } | null => {
  const videoMapping: Record<string, string> = {
    'landscaping': 'landscape-design-build.mp4',
    'artificial-grass': 'low-maintenance-artificial-grass-installation-backyard-makeover.mp4',
    'green-wall': 'backyard-goals-living-green-wall-edition.mp4',
    'natural-turf': 'best-artificial-grass-for-landscapes.mp4',
    'pergolas-shades': 'pergolas-modern.mp4',
    'water-features': 'outdoor-flooring-lighting.mp4',
    'irrigation': 'irrigation-turf-jeddah.webp', // This will fallback to image
    'maintenance': 'garden-maintenance-jeddah.webp' // This will fallback to image
  }
  
  const fileName = videoMapping[serviceSlug]
  if (!fileName) return null
  
  const isVideo = fileName.endsWith('.mp4') || fileName.endsWith('.webm') || fileName.endsWith('.mov')
  const url = isVideo ? getVideoPath(fileName) : `/images/${fileName}`
  
  return { url, isVideo }
}

const relatedServices = [
  { 
    slug: 'landscaping', 
    title: 'تنسيق حدائق', 
    image: '/images/landscape-design-build.webp',
    price: 'من 150 ريال/م²'
  },
  { 
    slug: 'artificial-grass', 
    title: 'عشب صناعي', 
    image: '/images/artificial-grass-range.webp',
    price: 'من 65 ريال/م²'
  },
  { 
    slug: 'water-features', 
    title: 'شلالات ونوافير', 
    image: '/images/water-features.webp',
    price: 'من 2,500 ريال'
  },
  { 
    slug: 'pergolas-shades', 
    title: 'مظلات وبرجولات', 
    image: '/images/pergola.webp',
    price: 'من 350 ريال/م²'
  }
]

export default function EnhancedServicePage({ service }: EnhancedServicePageProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [selectedPriceIndex, setSelectedPriceIndex] = useState(1) // Default to middle tier
  const [areaSize, setAreaSize] = useState<number>(0)
  const [calculatedCost, setCalculatedCost] = useState<number | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  
  const serviceMedia = getServiceVideo(service.slug)
  const hasVideo = serviceMedia?.isVideo || false
  const hasMedia = !!serviceMedia

  // Cost Calculator Logic
  const calculateCost = () => {
    if (areaSize <= 0) {
      alert('يرجى إدخال مساحة صحيحة')
      return
    }
    
    const selectedTier = service.pricingTiers[selectedPriceIndex]
    if (!selectedTier) return
    
    // Extract price number from string (e.g., "250" from "250 ريال/م²")
    const priceMatch = selectedTier.price.match(/(\d+)/)
    const pricePerUnit = priceMatch ? parseInt(priceMatch[1]) : 0
    
    if (pricePerUnit > 0) {
      const totalCost = areaSize * pricePerUnit
      setCalculatedCost(totalCost)
    }
  }

  const handleVideoControl = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const filteredRelatedServices = relatedServices.filter(rs => rs.slug !== service.slug)

  return (
    <div className="space-y-0">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Media */}
        <div className="absolute inset-0">
          {hasMedia && hasVideo ? (
            <>
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                muted={isMuted}
                loop
                playsInline
                onPlay={() => setIsVideoPlaying(true)}
                onPause={() => setIsVideoPlaying(false)}
              >
                <source src={serviceMedia!.url} type="video/mp4" />
              </video>
              {/* Video Controls */}
              <div className="absolute top-6 right-6 flex gap-2 z-20">
                <button
                  onClick={handleVideoControl}
                  className="w-10 h-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all duration-300"
                >
                  {isVideoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 mr-0.5" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="w-10 h-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all duration-300"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>
            </>
          ) : (
            <Image
              src={(hasMedia && !hasVideo) ? serviceMedia!.url : (service.gallery[0]?.image || '/images/landscape-design-build.webp')}
              alt={service.arabicTitle}
              fill
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="container relative z-10">
          <div className="max-w-4xl text-white">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">خدمة متخصصة ومعتمدة</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {service.arabicTitle}
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
              {service.longDescription}
            </p>

            {/* Service Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Shield className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-semibold">ضمان شامل</div>
                  <div className="text-sm opacity-80">{service.pricingTiers[0]?.warranty || 'ضمان معتمد'}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Clock className="w-6 h-6 text-secondary" />
                <div>
                  <div className="font-semibold">تنفيذ سريع</div>
                  <div className="text-sm opacity-80">حسب حجم المشروع</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Award className="w-6 h-6 text-green-400" />
                <div>
                  <div className="font-semibold">جودة عالية</div>
                  <div className="text-sm opacity-80">معايير دولية</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                احصل على عرض سعر
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=مرحباً، أرغب في الاستفسار عن خدمة ${service.arabicTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                واتساب فوري
              </a>
              <Link
                href="#pricing"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                <Calculator className="w-5 h-5" />
                الأسعار
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="section bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium">نبذة تفصيلية</span>
              </div>
              
              <h2 className="arabic-title mb-6">لماذا تختار خدمتنا؟</h2>
              <p className="arabic-body text-gray-600 mb-8 leading-relaxed">
                {service.longDescription}
              </p>

              {/* Key Benefits */}
              {service.benefits && service.benefits.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">المزايا الرئيسية</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {service.benefits.slice(0, 5).map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Visual Content */}
            <div className="space-y-6">
              {/* Main Image */}
              <div className="relative h-80 rounded-2xl overflow-hidden group">
                <Image
                  src={service.gallery[1]?.image || service.gallery[0]?.image || '/images/landscape-design-build.webp'}
                  alt={`${service.arabicTitle} - عمل متميز`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold mb-2">أعمال متميزة</h3>
                  <p className="text-sm opacity-90">شاهد نماذج من أعمالنا في {service.arabicTitle}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-gray-600">مشروع مكتمل</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-secondary mb-1">98%</div>
                  <div className="text-sm text-gray-600">رضا العملاء</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-green-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">دعم فني</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      {service.process && service.process.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="arabic-title mb-4">خطوات العمل</h2>
              <p className="arabic-body text-gray-600 max-w-2xl mx-auto">
                نتبع منهجية علمية مدروسة لضمان تنفيذ مشروعك بأعلى جودة وفي الوقت المحدد
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.process.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white text-lg">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2 text-gray-900">الخطوة {index + 1}</h3>
                        <p className="text-gray-600 leading-relaxed">{step}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Connection Line */}
                  {service.process && index < service.process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary transform -translate-y-1/2 z-10"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing Section */}
      <section id="pricing" className="section bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="arabic-title mb-4">باقات الأسعار</h2>
            <p className="arabic-body text-gray-600 max-w-2xl mx-auto">
              اختر الباقة التي تناسب احتياجاتك وميزانيتك - جميع الأسعار شاملة الضمان
            </p>
          </div>

          <PriceTable tiers={service.pricingTiers} />

          {/* Pricing Calculator */}
          <div className="mt-12 max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center justify-center mb-4">
              <Calculator className="w-6 h-6 text-primary me-2" />
              <h3 className="text-xl font-semibold text-center">احسب التكلفة التقديرية</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">المساحة (متر مربع)</label>
                <input
                  type="number"
                  value={areaSize || ''}
                  onChange={(e) => setAreaSize(parseInt(e.target.value) || 0)}
                  placeholder="مثال: 100"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  min="1"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">نوع الباقة</label>
                <select 
                  value={selectedPriceIndex}
                  onChange={(e) => setSelectedPriceIndex(parseInt(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                >
                  {service.pricingTiers.map((tier, index) => (
                    <option key={index} value={index}>
                      {tier.name} - {tier.price} {tier.unit}
                    </option>
                  ))}
                </select>
              </div>
              
              <button 
                onClick={calculateCost}
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4" />
                احسب التكلفة
              </button>
              
              {/* Result Display */}
              {calculatedCost !== null && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600 me-2" />
                    <span className="text-sm font-medium text-green-800">التكلفة التقديرية</span>
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-2xl font-bold text-green-700">
                      {calculatedCost.toLocaleString('ar-SA')} ريال
                    </span>
                    <p className="text-xs text-green-600 mt-1">
                      للمساحة: {areaSize} م² - {service.pricingTiers[selectedPriceIndex].name}
                    </p>
                  </div>
                  <div className="text-center mt-3">
                    <Link
                      href={routes.contact}
                      className="inline-flex items-center gap-2 text-sm bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      احصل على عرض سعر دقيق
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {service.gallery && service.gallery.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="arabic-title mb-4">معرض الأعمال</h2>
              <p className="arabic-body text-gray-600 max-w-2xl mx-auto">
                شاهد نماذج من أعمالنا المتميزة في {service.arabicTitle}
              </p>
            </div>

            <Gallery items={service.gallery} />
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="section bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="arabic-title mb-4">أسئلة شائعة</h2>
              <p className="arabic-body text-gray-600 max-w-2xl mx-auto">
                إجابات على أكثر الأسئلة شيوعاً حول {service.arabicTitle}
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <FAQ items={service.faqs} />
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="arabic-title mb-4">خدمات ذات صلة</h2>
            <p className="arabic-body text-gray-600 max-w-2xl mx-auto">
              خدمات أخرى قد تهمك لإكمال مشروع حديقتك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRelatedServices.slice(0, 3).map((relatedService) => (
              <Link
                key={relatedService.slug}
                href={routes.services.bySlug(relatedService.slug)}
                className="group hover-lift"
              >
                <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={relatedService.image}
                      alt={relatedService.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-bold text-lg mb-1">{relatedService.title}</h3>
                      <p className="text-sm opacity-90">{relatedService.price}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-semibold">اعرف المزيد</span>
                      <ArrowLeft className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              جاهز لبدء مشروع {service.arabicTitle}؟
            </h2>
            <p className="text-xl mb-8 opacity-90">
              احصل على استشارة مجانية وعرض سعر مخصص لمشروعك
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                اتصل الآن - استشارة مجانية
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=مرحباً، أرغب في الحصول على عرض سعر لخدمة ${service.arabicTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                واتساب - رد فوري
              </a>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm opacity-80">
                ✅ استشارة مجانية &nbsp;•&nbsp; ✅ عرض سعر مخصص &nbsp;•&nbsp; ✅ ضمان شامل &nbsp;•&nbsp; ✅ خدمة 24/7
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
