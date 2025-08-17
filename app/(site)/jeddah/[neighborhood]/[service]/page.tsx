import { notFound } from 'next/navigation'
import Hero from '@/components/Hero'
import PriceTable from '@/components/PriceTable'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import Breadcrumbs from '@/components/Breadcrumbs'
import NeighborhoodCostCalculator from '@/components/NeighborhoodCostCalculator'
import { services } from '@/content/services'
import { neighborhoods } from '@/content/neighborhoods'
import { routes } from '@/lib/routes'
import { generateNeighborhoodSeo } from '@/lib/seo'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/ldjson'

export async function generateStaticParams() {
  const params = []
  
  for (const neighborhood of neighborhoods) {
    for (const service of services) {
      params.push({
        neighborhood: neighborhood.slug,
        service: service.slug,
      })
    }
  }
  
  return params
}

export async function generateMetadata({ params }: { params: { neighborhood: string; service: string } }) {
  const neighborhood = neighborhoods.find(n => n.slug === params.neighborhood)
  const service = services.find(s => s.slug === params.service)
  
  if (!neighborhood || !service) return {}
  
  return generateNeighborhoodSeo(neighborhood, service)
}

export default function NeighborhoodServicePage({ 
  params 
}: { 
  params: { neighborhood: string; service: string } 
}) {
  const neighborhood = neighborhoods.find(n => n.slug === params.neighborhood)
  const service = services.find(s => s.slug === params.service)
  
  if (!neighborhood || !service) {
    notFound()
  }
  
  const breadcrumbs = [
    { name: 'الرئيسية', url: routes.home },
    { name: 'جدة', url: routes.jeddah.index },
    { name: service.arabicTitle, url: routes.services.bySlug(service.slug) },
    { name: neighborhood.arabicName, url: routes.jeddah.neighborhoodService(neighborhood.slug, service.slug) },
  ]
  
  const serviceSchema = generateServiceSchema(service)
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)
  const faqSchema = generateFAQSchema(service.faqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      
      <Hero
        title={`${service.arabicTitle} في ${neighborhood.arabicName}`}
        description={`أفضل خدمة ${service.arabicTitle} في ${neighborhood.arabicName} بأسعار منافسة وجودة عالية`}
        image={service.gallery[0]?.image}
      />
      
      <Breadcrumbs items={breadcrumbs} />
      
      {/* Service in Neighborhood */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="arabic-subtitle mb-6">
              {service.arabicTitle} في {neighborhood.arabicName} - {neighborhood.englishName}
            </h2>
            
            <p className="arabic-body text-gray-700 mb-6">
              نقدم خدمة {service.arabicTitle} المتميزة لسكان {neighborhood.arabicName}. 
              {neighborhood.description && ` ${neighborhood.description}`}
            </p>
            
            <p className="arabic-body text-gray-700 mb-8">
              {service.longDescription}
            </p>
            
            {/* Local Benefits */}
            <div className="bg-primary/5 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">مميزات خدمتنا في {neighborhood.arabicName}</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>فريق محلي قريب من {neighborhood.arabicName} لسرعة الوصول</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>معرفة بطبيعة المنطقة وخصائص التربة والمناخ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>خدمة عملاء سريعة الاستجابة لسكان الحي</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>أسعار خاصة لمشاريع {neighborhood.arabicName}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="arabic-title text-center mb-12">
            أسعار {service.arabicTitle} في {neighborhood.arabicName}
          </h2>
          <PriceTable tiers={service.pricingTiers} />
          
          <NeighborhoodCostCalculator 
            service={service} 
            neighborhoodName={neighborhood.arabicName} 
          />
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              * أسعار خاصة لسكان {neighborhood.arabicName}
            </p>
            <p className="text-sm text-gray-500">
              قد تختلف الأسعار حسب حجم المشروع والمتطلبات الخاصة
            </p>
          </div>
        </div>
      </section>

      {/* Service Process */}
      {service.process && service.process.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="arabic-title text-center mb-12">
                خطوات تنفيذ {service.arabicTitle} في {neighborhood.arabicName}
              </h2>
              <div className="space-y-4">
                {service.process.map((step, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 flex-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Local Content */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="arabic-subtitle mb-6">
              لماذا نحن الأفضل في {neighborhood.arabicName}؟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h3 className="font-semibold mb-2">خبرة محلية</h3>
                <p className="text-gray-600">
                  نفهم احتياجات سكان {neighborhood.arabicName} ونقدم حلولاً مخصصة تناسب طبيعة المنطقة
                </p>
              </div>
              <div className="card p-6">
                <h3 className="font-semibold mb-2">استجابة سريعة</h3>
                <p className="text-gray-600">
                  فريقنا قريب من {neighborhood.arabicName} مما يضمن سرعة الوصول والتنفيذ
                </p>
              </div>
              <div className="card p-6">
                <h3 className="font-semibold mb-2">أسعار تنافسية</h3>
                <p className="text-gray-600">
                  نقدم أفضل الأسعار لسكان {neighborhood.arabicName} مع الحفاظ على الجودة
                </p>
              </div>
              <div className="card p-6">
                <h3 className="font-semibold mb-2">ضمان محلي</h3>
                <p className="text-gray-600">
                  ضمان شامل مع خدمة صيانة سريعة لجميع عملائنا في الحي
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="arabic-title text-center mb-12">
              أسئلة شائعة عن {service.arabicTitle} في {neighborhood.arabicName}
            </h2>
            <FAQ items={service.faqs} />
          </div>
        </section>
      )}
      
      <CTA
        title={`احجز ${service.arabicTitle} في ${neighborhood.arabicName} الآن`}
        description="تواصل معنا للحصول على استشارة مجانية وعرض سعر فوري"
      />
    </>
  )
} 