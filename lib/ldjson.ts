import { siteConfig } from '@/content/site'

export function generateOrganizationSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}#organization`,
    name: siteConfig.company,
    alternateName: siteConfig.name,
    url: siteUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address,
      addressLocality: 'جدة',
      addressRegion: 'مكة المكرمة',
      addressCountry: 'SA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lng,
    },
    openingHours: siteConfig.openingHours,
    areaServed: siteConfig.coverage.map(city => ({
      '@type': 'City',
      name: city,
    })),
    sameAs: Object.values(siteConfig.socialMedia),
    image: `${siteUrl}/images/logo.png`,
    priceRange: '$$',
  }
}

export function generateLocalBusinessSchema({
  name,
  description,
  address,
  telephone,
  url,
}: {
  name: string
  description: string
  address: string
  telephone: string
  url: string
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    description,
    url: `${siteUrl}${url}`,
    telephone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address,
      addressLocality: 'جدة',
      addressRegion: 'مكة المكرمة',
      addressCountry: 'SA',
    },
    priceRange: '$$',
    parentOrganization: {
      '@id': `${siteUrl}#organization`,
    },
  }
}

export function generateServiceSchema(service: any) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.arabicTitle,
    description: service.longDescription,
    provider: {
      '@id': `${siteUrl}#organization`,
    },
    areaServed: {
      '@type': 'City',
      name: 'جدة',
    },
    url: `${siteUrl}/services/${service.slug}`,
    image: service.gallery[0]?.image ? `${siteUrl}${service.gallery[0].image}` : undefined,
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  }
}

export function generateProductSchema(service: any, pricingTier: any) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${service.arabicTitle} - ${pricingTier.name}`,
    description: service.shortDescription,
    image: service.gallery[0]?.image ? `${siteUrl}${service.gallery[0].image}` : undefined,
    brand: {
      '@type': 'Brand',
      name: siteConfig.company,
    },
    offers: {
      '@type': 'Offer',
      price: pricingTier.price,
      priceCurrency: 'SAR',
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      availability: 'https://schema.org/InStock',
      seller: {
        '@id': `${siteUrl}#organization`,
      },
      warranty: pricingTier.warranty,
    },
  }
}

export function generateReviewSchema(reviews: Array<{ author: string; rating: number; text: string; date: string }>) {
  return reviews.map(review => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
    },
    reviewBody: review.text,
    datePublished: review.date,
  }))
}

export function generateBlogPostSchema(post: any) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image ? `${siteUrl}${post.image}` : undefined,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Organization',
      name: siteConfig.company,
    },
    publisher: {
      '@id': `${siteUrl}#organization`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${post.slug}`,
    },
  }
}

export function generateWebPageSchema(page: {
  title: string
  description: string
  url: string
  breadcrumbs?: Array<{ name: string; url: string }>
  lastModified?: string
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: page.description,
    url: `${siteUrl}${page.url}`,
    inLanguage: 'ar-SA',
    dateModified: page.lastModified || new Date().toISOString(),
    about: {
      '@type': 'Thing',
      name: 'تنسيق حدائق وعشب صناعي في جدة',
      description: 'خدمات تنسيق حدائق شاملة في جدة'
    },
    breadcrumb: page.breadcrumbs ? generateBreadcrumbSchema(page.breadcrumbs) : undefined,
    publisher: {
      '@id': `${siteUrl}#organization`,
    },
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${siteUrl}#website`,
      name: siteConfig.name,
      url: siteUrl
    }
  }
}

export function generateWebSiteSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}#website`,
    name: siteConfig.name,
    alternateName: siteConfig.company,
    url: siteUrl,
    description: 'شركة تنسيق حدائق في جدة متخصصة في تركيب العشب الصناعي وتصميم الحدائق',
    inLanguage: 'ar-SA',
    publisher: {
      '@id': `${siteUrl}#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  }
}

export function generateAggregateRatingSchema(ratings: {
  averageRating: number
  reviewCount: number
  organizationName?: string
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}#organization`,
    name: ratings.organizationName || siteConfig.company,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ratings.averageRating.toString(),
      reviewCount: ratings.reviewCount.toString(),
      bestRating: '5',
      worstRating: '1'
    }
  }
}

export function generateServiceAreaSchema(areas: string[]) {
  return areas.map(area => ({
    '@type': 'Place',
    '@id': `#servicearea-${area.toLowerCase().replace(/\s+/g, '-')}`,
    name: area,
    containedInPlace: {
      '@type': 'City',
      name: 'جدة',
      containedInPlace: {
        '@type': 'State',
        name: 'مكة المكرمة',
        containedInPlace: {
          '@type': 'Country',
          name: 'المملكة العربية السعودية'
        }
      }
    }
  }))
}

export function generateHowToSchema(service: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `كيفية ${service.arabicTitle}`,
    description: service.shortDescription,
    image: service.gallery?.[0]?.image,
    totalTime: 'P1D', // قابل للتخصيص حسب الخدمة
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'SAR',
      value: service.pricingTiers?.[0]?.price?.replace(/[^\d]/g, '') || '500'
    },
    supply: service.features?.map((feature: string) => ({
      '@type': 'HowToSupply',
      name: feature
    })) || [],
    step: [
      {
        '@type': 'HowToStep',
        name: 'التواصل والاستشارة',
        text: 'تواصل معنا للحصول على استشارة مجانية وتقييم الموقع'
      },
      {
        '@type': 'HowToStep', 
        name: 'التصميم والتخطيط',
        text: 'نضع تصميم مخصص يناسب احتياجاتك ومساحتك'
      },
      {
        '@type': 'HowToStep',
        name: 'التنفيذ',
        text: 'فريقنا المتخصص ينفذ المشروع بأعلى معايير الجودة'
      },
      {
        '@type': 'HowToStep',
        name: 'التسليم والضمان',
        text: 'تسليم المشروع مع ضمان شامل وخدمة صيانة'
      }
    ]
  }
} 