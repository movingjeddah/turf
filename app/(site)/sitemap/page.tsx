import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Map, Home, Wrench, Building, Phone, FileText, Users, Video, Star, MapPin } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { routes } from '@/lib/routes'
import { services } from '@/content/services'
import { neighborhoods } from '@/content/neighborhoods'
import { blogPosts } from '@/content/blog'

export const metadata: Metadata = {
  title: 'خريطة الموقع - تنسيق حدائق جدة',
  description: 'خريطة شاملة لجميع صفحات وخدمات موقع تنسيق حدائق جدة. دليل سهل للوصول لكل المحتوى.',
  keywords: 'خريطة الموقع, صفحات الموقع, تنسيق حدائق جدة, فهرس المحتوى',
}

export default function SitemapPage() {
  const breadcrumbs = [
    { name: 'الرئيسية', url: routes.home },
    { name: 'خريطة الموقع', url: '/sitemap' },
  ]

  return (
    <>
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-12">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <div className="text-center mt-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-6">
              <Map className="w-10 h-10 text-purple-600" />
            </div>
            <h1 className="arabic-title mb-4">خريطة الموقع</h1>
            <p className="arabic-body text-gray-600 max-w-2xl mx-auto">
              دليل شامل لجميع صفحات وخدمات موقع تنسيق حدائق جدة
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* الصفحات الرئيسية */}
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <Home className="w-6 h-6 text-blue-600" />
                    <h2 className="text-xl font-bold">الصفحات الرئيسية</h2>
                  </div>
                  <ul className="space-y-3">
                    <li>
                      <Link href={routes.home} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                        <span>•</span> الصفحة الرئيسية
                      </Link>
                    </li>
                    <li>
                      <Link href={routes.about} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                        <span>•</span> من نحن
                      </Link>
                    </li>
                    <li>
                      <Link href={routes.services.index} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                        <span>•</span> خدماتنا
                      </Link>
                    </li>
                    <li>
                      <Link href={routes.portfolio} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                        <span>•</span> أعمالنا
                      </Link>
                    </li>
                    <li>
                      <Link href={routes.pricing} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                        <span>•</span> الأسعار
                      </Link>
                    </li>
                    <li>
                      <Link href={routes.contact} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                        <span>•</span> اتصل بنا
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* خدمات جدة */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="w-6 h-6 text-green-600" />
                    <h2 className="text-xl font-bold">خدمات جدة</h2>
                  </div>
                  <ul className="space-y-3">
                    <li>
                      <Link href={routes.jeddah.index} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                        <span>•</span> خدمات جدة الرئيسية
                      </Link>
                    </li>
                    {neighborhoods.slice(0, 5).map((neighborhood) => (
                      <li key={neighborhood.slug}>
                        <Link 
                          href={routes.jeddah.neighborhood(neighborhood.slug)} 
                          className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors text-sm"
                        >
                          <span>→</span> {neighborhood.arabicName}
                        </Link>
                      </li>
                    ))}
                    <li className="text-gray-500 text-sm">
                      ... و{neighborhoods.length - 5} أحياء أخرى
                    </li>
                  </ul>
                </div>

                {/* صفحات إضافية */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <FileText className="w-6 h-6 text-purple-600" />
                    <h2 className="text-xl font-bold">صفحات إضافية</h2>
                  </div>
                  <ul className="space-y-3">
                    <li>
                      <Link href={routes.videos} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                        <Video className="w-4 h-4" />
                        معرض الفيديوهات
                      </Link>
                    </li>
                    <li>
                      <Link href="/reviews" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                        <Star className="w-4 h-4" />
                        آراء العملاء
                      </Link>
                    </li>
                    <li>
                      <Link href="/thank-you" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                        <span>•</span> صفحة الشكر
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                        <span>•</span> سياسة الخصوصية
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                        <span>•</span> شروط الاستخدام
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* الخدمات والمدونة */}
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <Wrench className="w-6 h-6 text-orange-600" />
                    <h2 className="text-xl font-bold">خدماتنا المتخصصة ({services.length})</h2>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {services.map((service) => (
                      <Link 
                        key={service.slug}
                        href={routes.services.bySlug(service.slug)}
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors p-2 rounded hover:bg-primary/5"
                      >
                        <span>•</span>
                        <span>{service.arabicTitle}</span>
                        <span className="text-xs text-gray-500">({service.slug})</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <FileText className="w-6 h-6 text-teal-600" />
                    <h2 className="text-xl font-bold">مقالات المدونة ({blogPosts.length})</h2>
                  </div>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/blog" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
                        <span>•</span> المدونة الرئيسية
                      </Link>
                    </li>
                    {blogPosts.map((post) => (
                      <li key={post.slug}>
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors text-sm p-1 rounded hover:bg-gray-50"
                        >
                          <span>→</span>
                          <span>{post.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <Building className="w-6 h-6 text-indigo-600" />
                    <h2 className="text-xl font-bold">أحياء جدة ({neighborhoods.length})</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {neighborhoods.map((neighborhood) => (
                      <Link 
                        key={neighborhood.slug}
                        href={routes.jeddah.neighborhood(neighborhood.slug)}
                        className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors text-sm p-2 rounded hover:bg-gray-50"
                      >
                        <span>•</span>
                        <span>{neighborhood.arabicName}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* إحصائيات الموقع */}
            <div className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg border border-primary/20">
              <h3 className="text-2xl font-bold text-center mb-8">إحصائيات الموقع</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary mb-1">{services.length}</div>
                  <div className="text-sm text-gray-600">خدمة متخصصة</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-green-600 mb-1">{neighborhoods.length}</div>
                  <div className="text-sm text-gray-600">حي في جدة</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{blogPosts.length}</div>
                  <div className="text-sm text-gray-600">مقال تقني</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-purple-600 mb-1">207</div>
                  <div className="text-sm text-gray-600">إجمالي الصفحات</div>
                </div>
              </div>
            </div>

            {/* ملاحظة مهمة */}
            <div className="mt-8 bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <h3 className="font-semibold mb-2 text-yellow-800">📍 ملاحظة مهمة</h3>
              <p className="text-yellow-700 text-sm">
                هذه خريطة تفاعلية للموقع. للحصول على ملف XML sitemap للمحركات البحث، 
                <a href="/sitemap.xml" className="text-yellow-600 hover:text-yellow-800 underline mx-1">اضغط هنا</a>
                أو زر الصفحة الرئيسية لمحركات البحث.
              </p>
            </div>

            {/* أزرار التواصل */}
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-6">لم تجد ما تبحث عنه؟</h3>
              <div className="flex justify-center gap-4">
                <Link
                  href={routes.contact}
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  تواصل معنا
                </Link>
                <Link
                  href={routes.services.index}
                  className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors"
                >
                  <Wrench className="w-4 h-4" />
                  تصفح الخدمات
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
