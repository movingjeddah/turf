import type { Metadata } from 'next'
import VideoGallery from '@/components/VideoGallery'
import { videos } from '@/lib/videos'
import { siteConfig } from '@/content/site'

export const metadata: Metadata = {
  title: 'معرض الفيديوهات - تنسيق حدائق جدة',
  description: 'شاهد مجموعة شاملة من فيديوهات مشاريع تنسيق الحدائق والعشب الصناعي في جدة. أعمال حقيقية ونتائج مذهلة.',
  keywords: 'فيديوهات تنسيق حدائق، عشب صناعي، أعمال جدة، مشاريع حدائق، فيديوهات تعليمية',
  openGraph: {
    title: 'معرض الفيديوهات - تنسيق حدائق جدة',
    description: 'شاهد مجموعة شاملة من فيديوهات مشاريع تنسيق الحدائق والعشب الصناعي في جدة',
    type: 'website',
  },
}

export default function VideosPage() {
  return (
    <div className="min-h-screen">
      {/* هيرو قسم الفيديوهات */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-20">
        <div className="container text-center">
          <h1 className="arabic-title mb-6">معرض الفيديوهات الكامل</h1>
          <p className="arabic-body text-gray-600 max-w-3xl mx-auto mb-8">
            استكشف مكتبة شاملة من الفيديوهات التي تعرض أعمالنا المميزة في تنسيق الحدائق 
            والعشب الصناعي والمشاريع المختلفة في جدة والمنطقة الغربية
          </p>
          
          {/* إحصائيات سريعة */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{videos.length}</div>
              <div className="text-sm text-gray-600">فيديو متاح</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">6</div>
              <div className="text-sm text-gray-600">فئات مختلفة</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">100%</div>
              <div className="text-sm text-gray-600">مشاريع حقيقية</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">HD</div>
              <div className="text-sm text-gray-600">جودة عالية</div>
            </div>
          </div>
        </div>
      </section>

      {/* معرض الفيديوهات الرئيسي */}
      <VideoGallery 
        videos={videos}
        title=""
        showFilters={true}
        columns={3}
        autoplay={false}
      />

      {/* قسم معلومات إضافية */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 12a4 4 0 1 1 8 0v2H8v-2zM6 12v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2a6 6 0 1 0-12 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">فيديوهات تعليمية</h3>
              <p className="text-gray-600">
                تعلم تقنيات تنسيق الحدائق وتركيب العشب الصناعي من خلال فيديوهاتنا التعليمية
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.22l.123.489A2 2 0 0 1 10.955 18H5a2 2 0 0 1-2-2V5zm3.03 4.97a.75.75 0 0 1 1.06.02L8 10.94l.97-.95a.75.75 0 1 1 1.06 1.06l-1.97 1.97a.75.75 0 0 1-1.06 0L5.03 11.03a.75.75 0 0 1 .02-1.06z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">مشاريع حقيقية</h3>
              <p className="text-gray-600">
                جميع الفيديوهات تُظهر مشاريع حقيقية نفذناها لعملائنا في جدة والمنطقة الغربية
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 0 0-6 6c0 4.314 6 10 6 10s6-5.686 6-10a6 6 0 0 0-6-6zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">نتائج مذهلة</h3>
              <p className="text-gray-600">
                شاهد كيف نحول المساحات العادية إلى حدائق استثنائية تفوق التوقعات
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* دعوة للعمل */}
      <section className="section bg-gradient-to-r from-primary to-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">مستوحى من أعمالنا؟</h2>
          <p className="text-xl mb-8 opacity-90">
            احصل على استشارة مجانية وابدأ مشروع حديقة أحلامك اليوم
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              اتصل بنا الآن
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp.replace('+', '')}?text=مرحباً، شاهدت فيديوهاتكم وأرغب في الاستفسار`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              تواصل واتساب
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
