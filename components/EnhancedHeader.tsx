'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Search, 
  ChevronDown,
  ChevronLeft,
  Star,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Settings,
  Shield,
  Award
} from 'lucide-react'
import { routes } from '@/lib/routes'
import { siteConfig } from '@/content/site'

// بيانات الخدمات للقائمة الفرعية
const servicesData = {
  'primary': [
    {
      title: 'تنسيق حدائق',
      href: routes.services.bySlug('landscaping'),
      description: 'تصميم وتنسيق حدائق منزلية وتجارية',
      icon: '🌿',
      featured: true
    },
    {
      title: 'عشب صناعي',
      href: routes.services.bySlug('artificial-grass'),
      description: 'تركيب عشب صناعي عالي الجودة',
      icon: '🌱',
      featured: true
    },
    {
      title: 'شلالات ونوافير',
      href: routes.services.bySlug('water-features'),
      description: 'تنفيذ شلالات ونوافير مائية',
      icon: '💧',
      featured: true
    },
    {
      title: 'مظلات وبرجولات',
      href: routes.services.bySlug('pergolas-shades'),
      description: 'تركيب مظلات وبرجولات عصرية',
      icon: '🏛️',
      featured: true
    }
  ],
  'secondary': [
    {
      title: 'عشب جداري',
      href: routes.services.bySlug('green-wall'),
      description: 'جدران خضراء داخلية وخارجية',
      icon: '🧱'
    },
    {
      title: 'ثيل طبيعي',
      href: routes.services.bySlug('natural-turf'),
      description: 'توريد وزراعة ثيل طبيعي',
      icon: '🌾'
    },
    {
      title: 'أنظمة ري',
      href: routes.services.bySlug('irrigation'),
      description: 'شبكات ري ذكية وتوفير المياه',
      icon: '🚿'
    },
    {
      title: 'صيانة حدائق',
      href: routes.services.bySlug('maintenance'),
      description: 'صيانة دورية ورعاية متكاملة',
      icon: '🛠️'
    }
  ]
}

// القائمة الرئيسية
const mainNavItems = [
  { href: routes.home, label: 'الرئيسية', icon: '🏠' },
  { href: routes.services.index, label: 'خدماتنا', icon: '⚙️', hasSubmenu: true },
  { href: routes.portfolio, label: 'أعمالنا', icon: '🖼️' },
  { href: routes.videos, label: 'الفيديوهات', icon: '🎬' },
  { href: routes.pricing, label: 'الأسعار', icon: '💰' },
  { href: routes.about, label: 'من نحن', icon: '👥' },
  { href: routes.contact, label: 'اتصل بنا', icon: '📞' }
]

export default function EnhancedHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isTopBarVisible, setIsTopBarVisible] = useState(true)
  
  const pathname = usePathname()
  const servicesRef = useRef<HTMLLIElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  // تأثير الـ scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 20)
      setIsTopBarVisible(scrollPosition < 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // إغلاق القوائم عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // فوكس على البحث عند فتحه
  useEffect(() => {
    if (isSearchOpen && searchRef.current) {
      searchRef.current.focus()
    }
  }, [isSearchOpen])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // تنفيذ البحث (يمكن توصيله بصفحة نتائج البحث)
      console.log('البحث عن:', searchQuery)
      setIsSearchOpen(false)
      setSearchQuery('')
    }
  }

  const isActiveLink = (href: string) => {
    if (href === routes.home) {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent('مرحباً، أرغب في الاستفسار عن خدماتكم')
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${message}`, '_blank')
  }

  return (
    <>
      {/* الشريط العلوي */}
      <div className={`bg-gradient-to-r from-primary to-primary-600 text-white transition-all duration-300 ${
        isTopBarVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="container py-2">
          <div className="flex items-center justify-between text-sm">
            {/* معلومات الاتصال */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-1">
                <Phone className="w-3 h-3" />
                <span className="ltr-numbers">{siteConfig.phone}</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="w-3 h-3" />
                <span>{siteConfig.email}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{siteConfig.openingHours}</span>
              </div>
            </div>

            {/* وسائل التواصل الاجتماعي */}
            <div className="flex items-center gap-3">
              <span className="hidden md:inline text-xs opacity-75">تابعونا:</span>
              <div className="flex items-center gap-2">
                <a href={siteConfig.socialMedia.facebook} target="_blank" rel="noopener noreferrer" 
                   className="hover:text-secondary transition-colors">
                  <Facebook className="w-3 h-3" />
                </a>
                <a href={siteConfig.socialMedia.instagram} target="_blank" rel="noopener noreferrer"
                   className="hover:text-secondary transition-colors">
                  <Instagram className="w-3 h-3" />
                </a>
                <a href={siteConfig.socialMedia.twitter} target="_blank" rel="noopener noreferrer"
                   className="hover:text-secondary transition-colors">
                  <Twitter className="w-3 h-3" />
                </a>

              </div>
            </div>

            {/* عرض خاص للموبايل */}
            <div className="md:hidden flex items-center gap-2 text-xs">
              <Award className="w-3 h-3" />
              <span>أفضل شركة تنسيق حدائق</span>
            </div>
          </div>
        </div>
      </div>

      {/* القائمة الرئيسية */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/70 backdrop-blur-lg shadow-2xl border-b border-white/20' 
          : 'bg-white shadow-md'
      }`}>
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* الشعار */}
            <Link href={routes.home} className="flex items-center group">
              <div className="relative">
                <Image 
                  src="/images/logo.png" 
                  alt="شعار تنسيق حدائق جدة" 
                  className="h-12 md:h-14 lg:h-16 w-auto group-hover:scale-105 transition-transform duration-300"
                  width={200}
                  height={80}
                  priority
                />
                {/* تأثير الإضاءة */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </Link>

            {/* التنقل المكتبي */}
            <nav className="hidden lg:flex items-center">
              <ul className="flex items-center space-x-1 space-x-reverse">
                {mainNavItems.map((item) => (
                  <li key={item.href} className="relative" ref={item.hasSubmenu ? servicesRef : null}>
                    {item.hasSubmenu ? (
                      <button
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                          isActiveLink(item.href)
                            ? 'text-primary bg-primary/10 font-medium'
                            : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                        }`}
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        <span className="text-base">{item.icon}</span>
                        <span className="font-medium">{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          isServicesOpen ? 'rotate-180' : ''
                        }`} />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                          isActiveLink(item.href)
                            ? 'text-primary bg-primary/10 font-medium'
                            : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                        }`}
                      >
                        <span className="text-base">{item.icon}</span>
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    )}

                    {/* القائمة الفرعية للخدمات */}
                    {item.hasSubmenu && (
                      <div 
                        className={`absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-4xl transition-all duration-300 ${
                          isServicesOpen 
                            ? 'opacity-100 visible translate-y-0' 
                            : 'opacity-0 invisible -translate-y-2'
                        }`}
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 mt-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* الخدمات الرئيسية */}
                            <div>
                              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Star className="w-5 h-5 text-primary" />
                                الخدمات الرئيسية
                              </h3>
                              <div className="space-y-3">
                                {servicesData.primary.map((service) => (
                                  <Link
                                    key={service.href}
                                    href={service.href}
                                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 transition-all duration-300 group"
                                    onClick={() => setIsServicesOpen(false)}
                                  >
                                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                      {service.icon}
                                    </span>
                                    <div>
                                      <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                                        {service.title}
                                      </h4>
                                      <p className="text-sm text-gray-600 leading-relaxed">
                                        {service.description}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* الخدمات الإضافية */}
                            <div>
                              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Settings className="w-5 h-5 text-secondary" />
                                خدمات متخصصة
                              </h3>
                              <div className="space-y-3">
                                {servicesData.secondary.map((service) => (
                                  <Link
                                    key={service.href}
                                    href={service.href}
                                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-secondary/5 hover:to-primary/5 transition-all duration-300 group"
                                    onClick={() => setIsServicesOpen(false)}
                                  >
                                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                      {service.icon}
                                    </span>
                                    <div>
                                      <h4 className="font-semibold text-gray-900 group-hover:text-secondary transition-colors">
                                        {service.title}
                                      </h4>
                                      <p className="text-sm text-gray-600 leading-relaxed">
                                        {service.description}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>

                              {/* رابط جميع الخدمات */}
                              <Link
                                href={routes.services.index}
                                className="mt-6 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                عرض جميع الخدمات
                                <ChevronLeft className="w-4 h-4" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* الأدوات والأزرار */}
            <div className="flex items-center gap-3">
              {/* البحث */}
              <div className="relative hidden md:block">
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    isSearchOpen 
                      ? 'bg-primary text-white' 
                      : 'text-gray-600 hover:text-primary hover:bg-gray-100'
                  }`}
                  aria-label="البحث"
                >
                  <Search className="w-5 h-5" />
                </button>

                {/* شريط البحث */}
                {isSearchOpen && (
                  <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 p-4 animate-scale-in">
                    <form onSubmit={handleSearch}>
                      <div className="relative">
                        <input
                          ref={searchRef}
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="ابحث عن الخدمات..."
                          className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      </div>
                      <div className="mt-3 text-xs text-gray-500">
                        اكتب كلمة مفتاحية للبحث عن الخدمات والمحتوى
                      </div>
                    </form>
                  </div>
                )}
              </div>

              {/* واتساب */}
              <button
                onClick={handleWhatsApp}
                className="hidden md:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                aria-label="تواصل واتساب"
              >
                <MessageCircle className="w-4 h-4 group-hover:animate-pulse" />
                <span className="font-medium">واتساب</span>
              </button>

              {/* الاتصال */}
              <a
                href={`tel:${siteConfig.phone}`}
                className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-5 py-2.5 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <Phone className="w-4 h-4 group-hover:animate-bounce" />
                <span className="font-semibold ltr-numbers">{siteConfig.phone}</span>
              </a>

              {/* زر القائمة للموبايل */}
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="تبديل القائمة"
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 top-2.5' : 'top-1'
                  }`}></span>
                  <span className={`absolute block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'top-2.5'
                  }`}></span>
                  <span className={`absolute block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 top-2.5' : 'top-4'
                  }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* القائمة المحمولة */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white border-t border-gray-100">
            <div className="container py-6">
              {/* البحث في الموبايل */}
              <form onSubmit={handleSearch} className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="ابحث عن الخدمات..."
                    className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </form>

              {/* روابط التنقل */}
              <nav className="space-y-2 mb-6">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                      isActiveLink(item.href)
                        ? 'bg-gradient-to-r from-primary/10 to-secondary/10 text-primary font-semibold'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
              </nav>

              {/* أزرار الاتصال */}
              <div className="space-y-3 pt-6 border-t border-gray-100">
                <button
                  onClick={() => {
                    handleWhatsApp()
                    setIsMenuOpen(false)
                  }}
                  className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition-colors font-medium"
                >
                  <MessageCircle className="w-5 h-5" />
                  تواصل واتساب
                </button>
                
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-primary-600 text-white py-3 rounded-lg font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="w-5 h-5" />
                  <span className="ltr-numbers">{siteConfig.phone}</span>
                </a>
              </div>

              {/* معلومات إضافية */}
              <div className="mt-6 pt-6 border-t border-gray-100 space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{siteConfig.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{siteConfig.openingHours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>ضمان على جميع الأعمال</span>
                </div>
              </div>

              {/* وسائل التواصل */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-600 mb-3">تابعونا على:</p>
                <div className="flex items-center gap-4">
                  <a href={siteConfig.socialMedia.facebook} target="_blank" rel="noopener noreferrer" 
                     className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href={siteConfig.socialMedia.instagram} target="_blank" rel="noopener noreferrer"
                     className="p-2 bg-pink-50 text-pink-600 rounded-lg hover:bg-pink-100 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href={siteConfig.socialMedia.twitter} target="_blank" rel="noopener noreferrer"
                     className="p-2 bg-sky-50 text-sky-600 rounded-lg hover:bg-sky-100 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
