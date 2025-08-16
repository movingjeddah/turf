'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Star, 
  Clock, 
  Shield, 
  Award,
  CheckCircle,
  Phone,
  MessageCircle,
  Search,
  Grid,
  List,
  Eye,
  TrendingUp,
  Users
} from 'lucide-react'
import { services } from '@/content/services'
import { routes } from '@/lib/routes'
import { siteConfig } from '@/content/site'
import { getVideoPath } from '@/lib/videos'

const serviceCategories = [
  { id: 'all', name: 'جميع الخدمات', count: services.length },
  { id: 'design', name: 'تصميم وتنسيق', services: ['landscaping', 'green-wall'] },
  { id: 'installation', name: 'تركيب وإنشاء', services: ['artificial-grass', 'natural-turf', 'pergolas-shades', 'water-features'] },
  { id: 'maintenance', name: 'صيانة ورعاية', services: ['irrigation', 'maintenance'] }
]

const serviceHighlights = [
  {
    icon: Shield,
    title: 'ضمان شامل',
    description: 'ضمان على جميع أعمالنا',
    color: 'text-blue-600'
  },
  {
    icon: Clock,
    title: 'تنفيذ سريع',
    description: 'مواعيد محددة والتزام',
    color: 'text-green-600'
  },
  {
    icon: Award,
    title: 'جودة عالية',
    description: 'معايير دولية معتمدة',
    color: 'text-purple-600'
  },
  {
    icon: Users,
    title: 'فريق محترف',
    description: '50+ متخصص مدرب',
    color: 'text-orange-600'
  }
]

export default function EnhancedServicesIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredServices = services.filter(service => {
    const categoryMatch = selectedCategory === 'all' || 
      serviceCategories.find(cat => cat.id === selectedCategory)?.services?.includes(service.slug)
    
    const searchMatch = searchTerm === '' || 
      service.arabicTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
    
    return categoryMatch && searchMatch
  })

  return (
    <div className="space-y-0">
      {/* Hero Section with Video */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={getVideoPath('elevating-your-outdoor-space-or-upgrading-interiors.mp4')} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="container relative z-10">
          <div className="max-w-4xl text-white">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">8 خدمات متخصصة في تنسيق الحدائق</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block mb-2">خدماتنا</span>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                المتخصصة
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              نقدم مجموعة شاملة من خدمات تنسيق الحدائق والمساحات الخضراء في جدة والمنطقة الغربية، 
              من التصميم والتنفيذ إلى الصيانة المستمرة بأعلى معايير الجودة.
            </p>

            {/* Service Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {serviceHighlights.map((highlight, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <highlight.icon className={`w-6 h-6 ${highlight.color}`} />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{highlight.title}</h3>
                  <p className="text-xs text-gray-300">{highlight.description}</p>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                استشارة مجانية
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=مرحباً، أرغب في الاستفسار عن خدماتكم`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                واتساب فوري
              </a>
              <Link
                href={routes.portfolio}
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                <Eye className="w-5 h-5" />
                شاهد أعمالنا
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="section bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="ابحث في الخدمات..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">العرض:</span>
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded transition-colors ${viewMode === 'grid' ? 'bg-white text-primary shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded transition-colors ${viewMode === 'list' ? 'bg-white text-primary shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-75">
                  ({category.id === 'all' ? services.length : category.services?.length || 0})
                </span>
              </button>
            ))}
          </div>

          {/* Services Grid/List */}
          <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}`}>
            {filteredServices.map((service) => (
              <div
                key={service.slug}
                className={`group hover-lift ${viewMode === 'list' ? 'flex gap-6' : ''}`}
              >
                <div className={`bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary/20 ${viewMode === 'list' ? 'flex w-full' : ''}`}>
                  {/* Service Image */}
                  <div className={`relative ${viewMode === 'list' ? 'w-80 h-48 flex-shrink-0' : 'aspect-video'} overflow-hidden bg-gray-900`}>
                    <Image
                      src={service.gallery[0]?.image || '/images/landscape-design-build.webp'}
                      alt={service.arabicTitle}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    
                    {/* Price Badge */}
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      من {service.pricingTiers[0].price} {service.pricingTiers[0].unit}
                    </div>

                    {/* Service Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{service.arabicTitle}</h3>
                      <p className="text-sm opacity-90 line-clamp-2">{service.shortDescription}</p>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    {viewMode === 'list' && (
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold mb-2">{service.arabicTitle}</h3>
                        <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                      </div>
                    )}

                    {/* Service Features */}
                    <div className="space-y-3 mb-6">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Service Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary">{service.pricingTiers.length}</div>
                        <div className="text-xs text-gray-600">باقة</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-secondary">{service.pricingTiers[0].warranty || 'ضمان'}</div>
                        <div className="text-xs text-gray-600">ضمان</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">{service.faqs.length}</div>
                        <div className="text-xs text-gray-600">س&ج</div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <Link
                        href={routes.services.bySlug(service.slug)}
                        className="block w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold text-center hover:bg-primary/90 transition-colors"
                      >
                        تفاصيل الخدمة
                      </Link>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <Link
                          href={routes.pricing}
                          className="text-center py-2 px-3 text-primary border border-primary rounded-lg hover:bg-primary/10 transition-colors text-sm"
                        >
                          الأسعار
                        </Link>
                        <Link
                          href={routes.portfolio}
                          className="text-center py-2 px-3 text-secondary border border-secondary rounded-lg hover:bg-secondary/10 transition-colors text-sm"
                        >
                          الأعمال
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">لا توجد خدمات</h3>
              <p className="text-gray-600 mb-4">لم نجد خدمات تطابق بحثك. جرب البحث بكلمات أخرى.</p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
                }}
                className="text-primary hover:text-primary/80 font-semibold"
              >
                إعادة تعيين الفلترة
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">لماذا تختار خدماتنا؟</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              أكثر من 10 سنوات من الخبرة في تقديم أفضل خدمات تنسيق الحدائق في جدة
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">500+ مشروع</h3>
              <p className="opacity-90">مشاريع مكتملة بنجاح</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">50+ محترف</h3>
              <p className="opacity-90">فريق عمل متخصص</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ضمان شامل</h3>
              <p className="opacity-90">على جميع أعمالنا</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">خدمة 24/7</h3>
              <p className="opacity-90">دعم فني متواصل</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ابدأ مشروع حديقة أحلامك اليوم
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              احصل على استشارة مجانية وعرض سعر مخصص لأي من خدماتنا المتخصصة
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                اتصل للاستشارة المجانية
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=مرحباً، أرغب في الحصول على عرض سعر مخصص لخدماتكم`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                واتساب - رد فوري
              </a>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                ✅ زيارة مجانية للموقع &nbsp;•&nbsp; ✅ تصميم ثلاثي الأبعاد &nbsp;•&nbsp; ✅ عرض سعر شامل &nbsp;•&nbsp; ✅ ضمان معتمد
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
