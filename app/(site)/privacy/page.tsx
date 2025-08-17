import React from 'react'
import { Metadata } from 'next'
import { Shield, Eye, Lock, UserCheck, FileText, Phone } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { routes } from '@/lib/routes'
import { siteConfig } from '@/content/site'

export const metadata: Metadata = {
  title: 'سياسة الخصوصية - تنسيق حدائق جدة',
  description: 'سياسة الخصوصية وحماية البيانات الشخصية لعملاء شركة تنسيق حدائق جدة. التزامنا بحماية معلوماتكم وبياناتكم.',
  keywords: 'سياسة الخصوصية, حماية البيانات, تنسيق حدائق جدة, أمان المعلومات',
}

export default function PrivacyPolicyPage() {
  const breadcrumbs = [
    { name: 'الرئيسية', url: routes.home },
    { name: 'سياسة الخصوصية', url: '/privacy' },
  ]

  const lastUpdated = new Date().toLocaleDateString('ar-SA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <>
      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 py-12">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <div className="text-center mt-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h1 className="arabic-title mb-4">سياسة الخصوصية</h1>
            <p className="arabic-body text-gray-600 max-w-2xl mx-auto">
              نحن في {siteConfig.company} ملتزمون بحماية خصوصيتك وبياناتك الشخصية
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
            
            {/* مقدمة */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">مقدمة</h2>
              </div>
              <div className="prose prose-lg max-w-none arabic-body">
                <p className="mb-4">
                  تحترم شركة {siteConfig.company} خصوصية عملائها وزوار موقعها الإلكتروني. هذه السياسة 
                  توضح كيفية جمع واستخدام وحماية المعلومات الشخصية التي تقدمونها لنا.
                </p>
                <p>
                  نحن ملتزمون بحماية بياناتكم الشخصية وفقاً لأنظمة المملكة العربية السعودية ومعايير 
                  الحماية الدولية المعتمدة.
                </p>
              </div>
            </div>

            {/* المعلومات التي نجمعها */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <UserCheck className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">المعلومات التي نجمعها</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="font-semibold mb-3 text-lg">معلومات الاتصال</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• الاسم الكامل</li>
                    <li>• رقم الهاتف</li>
                    <li>• عنوان البريد الإلكتروني</li>
                    <li>• العنوان الفعلي للمشروع</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="font-semibold mb-3 text-lg">معلومات المشروع</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• نوع الخدمة المطلوبة</li>
                    <li>• تفاصيل المشروع</li>
                    <li>• المساحة والمتطلبات</li>
                    <li>• الميزانية التقديرية</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* كيفية استخدام المعلومات */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">كيفية استخدام معلوماتك</h2>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg">
                <ul className="space-y-3 arabic-body">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">•</span>
                    <span>تقديم خدمات تنسيق الحدائق والاستشارات المطلوبة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">•</span>
                    <span>التواصل معك لتحديد مواعيد الزيارات والمتابعة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">•</span>
                    <span>إرسال عروض الأسعار والتقديرات المالية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">•</span>
                    <span>تحسين خدماتنا وتطوير تجربة العملاء</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">•</span>
                    <span>إرسال تحديثات مهمة حول مشروعك (اختياري)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* حماية المعلومات */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">حماية معلوماتك</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                  <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">تشفير البيانات</h3>
                  <p className="text-sm text-gray-600">جميع البيانات مشفرة ومحمية</p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                  <Lock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">وصول محدود</h3>
                  <p className="text-sm text-gray-600">فقط الموظفون المخولون يمكنهم الوصول</p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                  <UserCheck className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">عدم المشاركة</h3>
                  <p className="text-sm text-gray-600">لا نشارك معلوماتك مع أطراف خارجية</p>
                </div>
              </div>
            </div>

            {/* حقوقك */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <UserCheck className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">حقوقك كعميل</h2>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">حقوق البيانات</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• الحق في معرفة البيانات المخزنة</li>
                      <li>• الحق في تصحيح البيانات الخاطئة</li>
                      <li>• الحق في حذف البيانات</li>
                      <li>• الحق في إيقاف التسويق</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">كيفية الممارسة</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• اتصل بنا عبر الهاتف</li>
                      <li>• أرسل بريد إلكتروني</li>
                      <li>• زيارة مكتبنا شخصياً</li>
                      <li>• استجابة خلال 48 ساعة</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* ملفات تعريف الارتباط */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">ملفات تعريف الارتباط (Cookies)</h2>
              </div>
              <div className="prose prose-lg max-w-none arabic-body">
                <p className="mb-4">
                  نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا، بما في ذلك:
                </p>
                <ul className="space-y-2 mb-4">
                  <li>• تذكر تفضيلاتك وإعداداتك</li>
                  <li>• تحسين أداء وسرعة الموقع</li>
                  <li>• فهم كيفية استخدامك للموقع</li>
                  <li>• تقديم محتوى مخصص لاحتياجاتك</li>
                </ul>
                <p>
                  يمكنك إيقاف ملفات تعريف الارتباط من إعدادات متصفحك، لكن قد يؤثر ذلك على بعض 
                  وظائف الموقع.
                </p>
              </div>
            </div>

            {/* التواصل */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Phone className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">للاستفسارات حول الخصوصية</h2>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                <p className="arabic-body mb-4">
                  إذا كان لديك أي استفسارات حول سياسة الخصوصية أو كيفية التعامل مع بياناتك، 
                  يرجى التواصل معنا:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold">الهاتف</p>
                    <p className="text-sm text-gray-600">{siteConfig.phone}</p>
                  </div>
                  <div className="text-center">
                    <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold">البريد الإلكتروني</p>
                    <p className="text-sm text-gray-600">{siteConfig.email}</p>
                  </div>
                  <div className="text-center">
                    <UserCheck className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold">العنوان</p>
                    <p className="text-sm text-gray-600">{siteConfig.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* إشعار التحديث */}
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <h3 className="font-semibold mb-2 text-yellow-800">تحديثات السياسة</h3>
              <p className="text-yellow-700 text-sm">
                قد نقوم بتحديث هذه السياسة من وقت لآخر. سيتم إشعارك بأي تغييرات مهمة عبر 
                البريد الإلكتروني أو إشعار على الموقع. ننصحك بمراجعة هذه الصفحة دورياً.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
