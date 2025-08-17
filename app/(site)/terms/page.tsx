import React from 'react'
import { Metadata } from 'next'
import { FileText, CheckCircle, AlertTriangle, Scale, Phone, Clock } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { routes } from '@/lib/routes'
import { siteConfig } from '@/content/site'

export const metadata: Metadata = {
  title: 'شروط الاستخدام - تنسيق حدائق جدة',
  description: 'شروط وأحكام استخدام خدمات شركة تنسيق حدائق جدة. القوانين والضوابط التي تحكم التعامل مع عملائنا.',
  keywords: 'شروط الاستخدام, أحكام الخدمة, تنسيق حدائق جدة, ضمانات',
}

export default function TermsOfServicePage() {
  const breadcrumbs = [
    { name: 'الرئيسية', url: routes.home },
    { name: 'شروط الاستخدام', url: '/terms' },
  ]

  const lastUpdated = new Date().toLocaleDateString('ar-SA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <>
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-12">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <div className="text-center mt-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <Scale className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="arabic-title mb-4">شروط الاستخدام</h1>
            <p className="arabic-body text-gray-600 max-w-2xl mx-auto">
              الأحكام والشروط التي تحكم استخدام خدمات {siteConfig.company}
            </p>
            <p className="text-sm text-gray-500 mt-4">
              آخر تحديث: {lastUpdated}
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            
            {/* الموافقة على الشروط */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold">الموافقة على الشروط</h2>
              </div>
              <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                <p className="arabic-body text-green-800">
                  باستخدامك لموقعنا أو طلب خدماتنا، فإنك توافق على جميع الشروط والأحكام 
                  المذكورة في هذه الصفحة. يرجى قراءة هذه الشروط بعناية قبل استخدام خدماتنا.
                </p>
              </div>
            </div>

            {/* خدماتنا */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">نطاق الخدمات</h2>
              </div>
              <div className="prose prose-lg max-w-none arabic-body">
                <p className="mb-4">
                  نقدم خدمات تنسيق الحدائق والمناظر الطبيعية في جدة والمنطقة الغربية، تشمل:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <ul className="space-y-2">
                    <li>• تنسيق وتصميم الحدائق</li>
                    <li>• توريد وتركيب العشب الصناعي</li>
                    <li>• إنشاء الجدران الخضراء</li>
                    <li>• أنظمة الري والصرف</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• إنشاء الشلالات والنوافير</li>
                    <li>• تركيب البرجولات والمظلات</li>
                    <li>• صيانة دورية للحدائق</li>
                    <li>• استشارات تنسيق المناظر</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* الأسعار والدفع */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">الأسعار وشروط الدفع</h2>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4 text-lg text-blue-600">💰 سياسة الأسعار</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li>• الأسعار المعروضة تقديرية وقابلة للتغيير</li>
                      <li>• السعر النهائي بعد المعاينة الفعلية للموقع</li>
                      <li>• تشمل الأسعار الضريبة المضافة (15%)</li>
                      <li>• أسعار خاصة للمشاريع الكبيرة</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4 text-lg text-green-600">💳 شروط الدفع</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li>• دفعة مقدمة 30% عند بدء العمل</li>
                      <li>• 40% عند إنجاز 70% من المشروع</li>
                      <li>• 30% عند التسليم النهائي والاستلام</li>
                      <li>• قبول النقد، التحويل، أو الشيكات</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* الضمانات */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">الضمانات والالتزامات</h2>
              </div>
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3 text-green-800">✅ ضماناتنا لك</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• ضمان جودة العمل لمدة سنة كاملة</li>
                    <li>• ضمان نمو النباتات لمدة 6 أشهر</li>
                    <li>• ضمان العشب الصناعي لمدة 10 سنوات</li>
                    <li>• صيانة مجانية خلال فترة الضمان</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3 text-blue-800">📋 التزاماتك كعميل</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• توفير معلومات دقيقة عن المشروع</li>
                    <li>• السماح بالوصول للموقع في المواعيد المحددة</li>
                    <li>• الدفع في المواعيد المتفق عليها</li>
                    <li>• إبلاغنا بأي مشاكل فورياً</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* إخلاء المسؤولية */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-orange-500" />
                <h2 className="text-2xl font-bold">إخلاء المسؤولية</h2>
              </div>
              <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
                <ul className="space-y-3 arabic-body text-orange-800">
                  <li>• لا نتحمل مسؤولية الأضرار الناتجة عن عوامل جوية استثنائية</li>
                  <li>• العميل مسؤول عن صحة المعلومات المقدمة عن الموقع</li>
                  <li>• قد تختلف النتائج النهائية عن التصميم بسبب طبيعة الموقع</li>
                  <li>• لا نتحمل مسؤولية تأخير العمل بسبب ظروف خارجة عن سيطرتنا</li>
                </ul>
              </div>
            </div>

            {/* فض النزاعات */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">فض النزاعات</h2>
              </div>
              <div className="prose prose-lg max-w-none arabic-body">
                <p className="mb-4">
                  في حالة نشوء أي خلاف أو نزاع، نلتزم بحله بالطرق التالية:
                </p>
                <ol className="space-y-2 mb-4">
                  <li><strong>أولاً:</strong> الحوار المباشر مع إدارة الشركة</li>
                  <li><strong>ثانياً:</strong> الوساطة عبر جهة محايدة متخصصة</li>
                  <li><strong>ثالثاً:</strong> اللجوء للمحاكم السعودية المختصة</li>
                </ol>
                <p>
                  جميع الاتفاقيات تخضع لأنظمة المملكة العربية السعودية ومحاكم مدينة جدة.
                </p>
              </div>
            </div>

            {/* التواصل */}
            <div className="bg-primary/5 p-8 rounded-lg border border-primary/10">
              <h3 className="text-xl font-semibold mb-4 text-center">للاستفسارات القانونية</h3>
              <p className="text-center mb-6 arabic-body">
                لأي استفسارات حول الشروط والأحكام، يرجى التواصل معنا
              </p>
              <div className="flex justify-center gap-6">
                <a 
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  اتصل بنا
                </a>
                <a 
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  راسلنا
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
