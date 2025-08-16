import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { services } from '@/content/services'
import { routes } from '@/lib/routes'
import { serviceIcons } from '@/lib/service-icons'

export default function ServicesGrid() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="arabic-title mb-4">خدماتنا المتميزة</h2>
          <p className="arabic-body text-gray-600 max-w-2xl mx-auto">
            نقدم مجموعة شاملة من خدمات تنسيق الحدائق لتلبية جميع احتياجاتك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.key}
              href={routes.services.bySlug(service.slug)}
              className="card-hover group"
            >
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                {service.gallery[0] && (
                  <Image
                    src={service.gallery[0].image}
                    alt={service.arabicTitle}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* أيقونة الخدمة الاحترافية */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {serviceIcons[service.key as keyof typeof serviceIcons] && (
                    <Image 
                      src={serviceIcons[service.key as keyof typeof serviceIcons].svg(48)}
                      alt={`أيقونة ${service.arabicTitle}`}
                      className="w-8 h-8"
                      width={32}
                      height={32}
                    />
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.arabicTitle}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {service.shortDescription}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">
                    ابتداءً من {service.pricingTiers[0].price} {service.pricingTiers[0].unit}
                  </span>
                  <ArrowLeft className="w-5 h-5 text-primary group-hover:-translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href={routes.services.index}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
          >
            عرض جميع الخدمات
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
} 