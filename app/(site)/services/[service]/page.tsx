import { notFound } from 'next/navigation'
import { services } from '@/content/services'
import { routes } from '@/lib/routes'
import { generateServiceSeo } from '@/lib/seo'
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/ldjson'
import EnhancedServicePage from '@/components/EnhancedServicePage'
import Breadcrumbs from '@/components/Breadcrumbs'

export async function generateStaticParams() {
  return services.map((service) => ({
    service: service.slug,
  }))
}

export async function generateMetadata({ params }: { params: { service: string } }) {
  const service = services.find(s => s.slug === params.service)
  
  if (!service) return {}
  
  return generateServiceSeo(service)
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const service = services.find(s => s.slug === params.service)
  
  if (!service) {
    notFound()
  }
  
  const breadcrumbs = [
    { name: 'الرئيسية', url: routes.home },
    { name: 'خدماتنا', url: routes.services.index },
    { name: service.arabicTitle, url: routes.services.bySlug(service.slug) },
  ]
  
  const serviceSchema = generateServiceSchema(service)
  const faqSchema = generateFAQSchema(service.faqs)
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, faqSchema, breadcrumbSchema]),
        }}
      />
      
      <Breadcrumbs items={breadcrumbs} />
      
      <EnhancedServicePage service={service} />
    </>
  )
}