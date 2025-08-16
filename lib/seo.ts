export interface SeoProps {
  title: string
  description: string
  keywords?: string
  canonical?: string
  ogImage?: string
  noindex?: boolean
}

export function generateMetaTags({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  noindex = false,
}: SeoProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
  const defaultOgImage = `${siteUrl}/images/og-image.jpg`
  
  return {
    title,
    description,
    canonical: canonical ? `${siteUrl}${canonical}` : undefined,
    openGraph: {
      title,
      description,
      url: canonical ? `${siteUrl}${canonical}` : siteUrl,
      images: [
        {
          url: ogImage || defaultOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [ogImage || defaultOgImage],
    },
    additionalMetaTags: [
      ...(keywords ? [{ name: 'keywords', content: keywords }] : []),
      ...(noindex ? [{ name: 'robots', content: 'noindex,nofollow' }] : []),
    ],
  }
}

export function generateServiceSeo(service: any, subpage?: string) {
  let title = service.arabicTitle
  let description = service.longDescription
  let keywords = service.keywords.join(', ')
  
  if (subpage) {
    const subpageTitles: Record<string, string> = {
      pricing: `أسعار ${service.arabicTitle}`,
      specs: `مواصفات ${service.arabicTitle}`,
      works: `أعمال ${service.arabicTitle} - قبل وبعد`,
      faq: `الأسئلة الشائعة - ${service.arabicTitle}`,
      design: `تصميم ${service.arabicTitle}`,
      lighting: `إنارة ${service.arabicTitle}`,
      maintenance: `صيانة ${service.arabicTitle}`,
    }
    
    title = subpageTitles[subpage] || title
  }
  
  return generateMetaTags({
    title,
    description,
    keywords,
    canonical: subpage ? `/services/${service.slug}/${subpage}` : `/services/${service.slug}`,
  })
}

export function generateNeighborhoodSeo(neighborhood: any, service: any) {
  const title = `${service.arabicTitle} في ${neighborhood.arabicName}`
  const description = `نقدم خدمات ${service.arabicTitle} احترافية في ${neighborhood.arabicName} بأفضل الأسعار وأعلى جودة. ${neighborhood.description || ''}`
  
  return generateMetaTags({
    title,
    description,
    keywords: `${service.keywords.join(', ')}, ${neighborhood.arabicName}`,
    canonical: `/jeddah/${neighborhood.slug}/${service.slug}`,
  })
} 