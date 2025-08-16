import Head from 'next/head'
import Script from 'next/script'
import { 
  generateWebPageSchema,
  generateWebSiteSchema,
  generateFAQSchema,
  generateAggregateRatingSchema,
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateHowToSchema,
  generateArticleSchema,
  generateReviewSchema
} from '@/lib/ldjson'

interface SmartSEOProps {
  // Basic SEO
  title: string
  description: string
  keywords?: string
  canonical?: string
  noindex?: boolean
  
  // Open Graph & Social
  ogImage?: string
  ogType?: 'website' | 'article' | 'product' | 'service'
  
  // Page specific
  pageType?: 'homepage' | 'service' | 'blog' | 'neighborhood' | 'general'
  lastModified?: string
  
  // Structured Data
  breadcrumbs?: Array<{ name: string; url: string }>
  faqs?: Array<{ question: string; answer: string }>
  service?: any
  article?: any
  reviews?: Array<{ author: string; rating: number; text: string; date: string }>
  
  // AI Search optimization
  entityData?: {
    name: string
    type: string
    description: string
    properties?: Record<string, any>
  }
  
  // Local SEO
  location?: string
  serviceArea?: string[]
}

export default function SmartSEO({
  title,
  description,
  keywords,
  canonical,
  noindex = false,
  ogImage,
  ogType = 'website',
  pageType = 'general',
  lastModified,
  breadcrumbs,
  faqs,
  service,
  article,
  reviews,
  entityData,
  location,
  serviceArea
}: SmartSEOProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : undefined
  const defaultOgImage = `${siteUrl}/images/og-image.jpg`
  const fullOgImage = ogImage ? `${siteUrl}${ogImage}` : defaultOgImage
  
  // Generate optimized title for AI search
  const optimizedTitle = pageType === 'homepage' 
    ? title
    : location 
      ? `${title} في ${location} | تنسيق حدائق جدة`
      : `${title} | تنسيق حدائق جدة`

  // Generate AI-optimized description
  const aiOptimizedDescription = location
    ? `${description} نخدم ${location} وجميع أنحاء جدة بأفضل الأسعار وأعلى جودة. استشارة مجانية وضمان شامل.`
    : `${description} في جدة بأسعار منافسة وجودة عالية. خدمة 24/7 وضمان شامل على جميع الأعمال.`

  // Generate comprehensive keywords for AI
  const aiKeywords = [
    keywords,
    location ? `تنسيق حدائق ${location}` : undefined,
    'تنسيق حدائق جدة',
    'عشب صناعي',
    'شركة تنسيق حدائق',
    service?.category,
    entityData?.type
  ].filter(Boolean).join(', ')

  // Generate JSON-LD schemas
  const schemas = []

  // Website schema (for homepage)
  if (pageType === 'homepage') {
    schemas.push(generateWebSiteSchema())
  }

  // WebPage schema (for all pages)
  schemas.push(generateWebPageSchema({
    title: optimizedTitle,
    description: aiOptimizedDescription,
    url: canonical || '/',
    breadcrumbs,
    lastModified
  }))

  // FAQ schema
  if (faqs && faqs.length > 0) {
    schemas.push(generateFAQSchema(faqs))
  }

  // Service schema
  if (service) {
    schemas.push(generateServiceSchema(service))
    schemas.push(generateHowToSchema(service))
  }

  // Article schema
  if (article) {
    schemas.push(generateArticleSchema(article))
  }

  // Reviews schema
  if (reviews && reviews.length > 0) {
    schemas.push(generateAggregateRatingSchema({
      averageRating: reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length,
      reviewCount: reviews.length
    }))
  }

  // Breadcrumb schema
  if (breadcrumbs && breadcrumbs.length > 1) {
    schemas.push(generateBreadcrumbSchema(breadcrumbs))
  }

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{optimizedTitle}</title>
        <meta name="description" content={aiOptimizedDescription} />
        {keywords && <meta name="keywords" content={aiKeywords} />}
        {fullCanonical && <link rel="canonical" href={fullCanonical} />}
        
        {/* Robots */}
        {noindex ? (
          <meta name="robots" content="noindex,nofollow" />
        ) : (
          <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        )}
        
        {/* Open Graph */}
        <meta property="og:type" content={ogType} />
        <meta property="og:title" content={optimizedTitle} />
        <meta property="og:description" content={aiOptimizedDescription} />
        <meta property="og:image" content={fullOgImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={title} />
        {fullCanonical && <meta property="og:url" content={fullCanonical} />}
        <meta property="og:site_name" content="تنسيق حدائق جدة" />
        <meta property="og:locale" content="ar_SA" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={optimizedTitle} />
        <meta name="twitter:description" content={aiOptimizedDescription} />
        <meta name="twitter:image" content={fullOgImage} />
        <meta name="twitter:image:alt" content={title} />
        
        {/* AI Search Optimization */}
        {entityData && (
          <meta name="entity" content={JSON.stringify(entityData)} />
        )}
        
        {/* Geographic targeting */}
        {location && <meta name="geo.placename" content={location} />}
        <meta name="geo.region" content="SA-02" />
        <meta name="geo.position" content="21.485811;39.192505" />
        <meta name="ICBM" content="21.485811, 39.192505" />
        
        {/* Hreflang for Arabic */}
        <link rel="alternate" hrefLang="ar-SA" href={fullCanonical || siteUrl} />
        <link rel="alternate" hrefLang="ar" href={fullCanonical || siteUrl} />
        
        {/* Additional meta for AI */}
        <meta name="article:section" content="خدمات تنسيق الحدائق" />
        <meta name="article:tag" content={aiKeywords} />
        {lastModified && <meta name="article:modified_time" content={lastModified} />}
        
        {/* Schema-specific meta */}
        {service && (
          <>
            <meta name="product:category" content={service.category} />
            <meta name="product:availability" content="in stock" />
            <meta name="product:price:currency" content="SAR" />
          </>
        )}
        
        {/* Rich snippets hints */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="format-detection" content="address=yes" />
        <meta name="format-detection" content="email=yes" />
      </Head>

      {/* JSON-LD Structured Data */}
      {schemas.map((schema, index) => (
        <Script
          key={index}
          id={`schema-${index}`}
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 0)
          }}
        />
      ))}
      
      {/* Additional AI Search Signals */}
      <Script
        id="ai-search-signals"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", "h2", ".arabic-title", ".arabic-body"]
            },
            "accessibilityFeature": [
              "alternativeText",
              "readingOrder",
              "structuralNavigation"
            ],
            "accessibilityHazard": "none",
            "accessibilityControl": [
              "fullKeyboardControl",
              "fullMouseControl",
              "fullTouchControl"
            ]
          }, null, 0)
        }}
      />

      {/* Preload critical resources */}
      <Head>
        <link rel="preload" href="/fonts/noto-naskh-arabic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </Head>
    </>
  )
}

// Helper function to generate entity data for AI
export function generateEntityData(type: string, data: any) {
  const entityTypes: Record<string, any> = {
    service: {
      name: data.arabicTitle,
      type: 'Service',
      description: data.shortDescription,
      properties: {
        category: data.category,
        priceRange: data.pricingTiers?.[0]?.price,
        serviceType: data.slug,
        areaServed: 'جدة'
      }
    },
    neighborhood: {
      name: data.arabicName,
      type: 'Place',
      description: data.description,
      properties: {
        addressLocality: 'جدة',
        addressRegion: 'مكة المكرمة',
        addressCountry: 'SA'
      }
    },
    article: {
      name: data.title,
      type: 'Article',
      description: data.excerpt,
      properties: {
        category: data.category,
        author: data.author,
        publishDate: data.publishedAt
      }
    }
  }

  return entityTypes[type] || null
}
