import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowLeft, 
  Trees, 
  Mountain, 
  Waves, 
  Droplets, 
  Wrench, 
  Lightbulb, 
  Home, 
  Circle,
  Leaf,
  Shield
} from 'lucide-react'
import { services } from '@/content/services'
import { routes } from '@/lib/routes'

// أيقونات احترافية لكل خدمة
const getServiceIcon = (serviceKey: string) => {
  const iconMap = {
    'landscaping': { icon: Trees, color: 'text-green-600', bg: 'bg-green-50' },
    'artificial-grass': { icon: Mountain, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    'green-wall': { icon: Leaf, color: 'text-lime-600', bg: 'bg-lime-50' },
    'natural-turf': { icon: Shield, color: 'text-green-700', bg: 'bg-green-100' },
    'pergolas-shades': { icon: Home, color: 'text-purple-600', bg: 'bg-purple-50' },
    'water-features': { icon: Waves, color: 'text-blue-600', bg: 'bg-blue-50' },
    'irrigation': { icon: Droplets, color: 'text-cyan-600', bg: 'bg-cyan-50' },
    'maintenance': { icon: Wrench, color: 'text-orange-600', bg: 'bg-orange-50' },
    'lighting': { icon: Lightbulb, color: 'text-yellow-600', bg: 'bg-yellow-50' },
    'pools': { icon: Circle, color: 'text-teal-600', bg: 'bg-teal-50' }
  }
  
  return iconMap[serviceKey as keyof typeof iconMap] || { 
    icon: Trees, 
    color: 'text-gray-600', 
    bg: 'bg-gray-50' 
  }
}

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
                <div className={`absolute top-4 right-4 w-14 h-14 ${getServiceIcon(service.key).bg} backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl border border-white/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  {(() => {
                    const IconComponent = getServiceIcon(service.key).icon
                    return (
                      <IconComponent 
                        className={`w-8 h-8 ${getServiceIcon(service.key).color} group-hover:scale-110 transition-transform duration-300`}
                        strokeWidth={2.5}
                      />
                    )
                  })()}
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