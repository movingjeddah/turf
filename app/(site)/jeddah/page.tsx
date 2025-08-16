import Hero from '@/components/Hero'
import CTA from '@/components/CTA'
import Link from 'next/link'
import { services } from '@/content/services'
import { neighborhoods } from '@/content/neighborhoods'
import { routes } from '@/lib/routes'
import { MapPin, ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'تنسيق حدائق في جدة',
  description: 'خدمات تنسيق الحدائق الشاملة في جميع أحياء جدة. عشب صناعي، ثيل طبيعي، مظلات، شلالات، وأكثر.',
}

export default function JeddahPage() {
  return (
    <>
      <Hero
        title="تنسيق حدائق في جدة"
        subtitle="خدمة جميع أحياء جدة"
        description="نغطي جميع أحياء جدة بخدماتنا المتميزة في تنسيق الحدائق وتركيب العشب الصناعي"
        image="/images/landscape-design-build-1.webp"
      />
      
      {/* Services in Jeddah */}
      <section className="section">
        <div className="container">
          <h2 className="arabic-title text-center mb-12">خدماتنا في جدة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.key}
                href={routes.services.bySlug(service.slug)}
                className="card p-6 hover:shadow-lg transition-shadow text-center"
              >
                <h3 className="text-lg font-semibold mb-2">{service.arabicTitle}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {service.shortDescription}
                </p>
                <span className="text-primary font-medium inline-flex items-center gap-1">
                  تفاصيل الخدمة
                  <ArrowLeft className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="arabic-title text-center mb-4">أحياء جدة التي نخدمها</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            نقدم خدماتنا في جميع أحياء جدة مع فريق متخصص وأسعار منافسة
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {neighborhoods.map((neighborhood) => (
              <div
                key={neighborhood.slug}
                className="bg-white rounded-lg p-4 border hover:border-primary transition-colors"
              >
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{neighborhood.arabicName}</h3>
                    <p className="text-sm text-gray-500">{neighborhood.englishName}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              وجميع الأحياء الأخرى في جدة والمنطقة المحيطة
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas Map */}
      <section className="section">
        <div className="container">
          <h2 className="arabic-title text-center mb-12">نطاق خدماتنا</h2>
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238134.54920266867!2d39.1925!3d21.4858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0x984f0c6163c6a78c!2sJeddah%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1625000000000!5m2!1sen!2ssa"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="نطاق خدماتنا في جدة"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us in Jeddah */}
      <section className="section bg-primary text-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            لماذا نحن الأفضل في جدة؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">سريع</div>
              <p className="text-white/90">خدمة سريعة في جميع أحياء جدة</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">محترف</div>
              <p className="text-white/90">فريق مدرب ومتخصص</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">مضمون</div>
              <p className="text-white/90">ضمان على جميع الأعمال</p>
            </div>
          </div>
        </div>
      </section>
      
      <CTA
        title="احصل على خدمتك في جدة اليوم"
        description="فريقنا جاهز لخدمتك في أي حي من أحياء جدة"
      />
    </>
  )
} 