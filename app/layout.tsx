import React from 'react'
import type { Metadata } from 'next'
import { Noto_Naskh_Arabic } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { siteConfig } from '@/content/site'
import { generateOrganizationSchema, generateWebSiteSchema } from '@/lib/ldjson'
import PWAPrompt from '@/components/PWAPrompt'
import FloatingActionButtons from '@/components/FloatingActionButtons'

const notoNaskhArabic = Noto_Naskh_Arabic({
  weight: ['400', '500', '600', '700'],
  subsets: ['arabic'],
  display: 'swap',
  preload: true,
  variable: '--font-arabic',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'),
  title: {
    template: '%s | تنسيق حدائق جدة',
    default: 'تنسيق حدائق وعشب صناعي في جدة | أفضل شركة تنسيق حدائق',
  },
  description: 'شركة تنسيق حدائق في جدة متخصصة في تركيب العشب الصناعي، تصميم الحدائق، المظلات والبرجولات، الشلالات والنوافير. أسعار منافسة وضمان على جميع الأعمال.',
  keywords: 'تنسيق حدائق جدة, عشب صناعي جدة, تركيب عشب صناعي, شركة تنسيق حدائق, عشب جداري, ثيل طبيعي, مظلات جدة, برجولات جدة, شلالات صناعية, شبكات ري, صيانة حدائق',
  authors: [{ name: siteConfig.company }],
  creator: siteConfig.company,
  publisher: siteConfig.company,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: 'شركة تنسيق حدائق في جدة متخصصة في تركيب العشب الصناعي وتصميم الحدائق',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = generateOrganizationSchema()
  const websiteSchema = generateWebSiteSchema()

  return (
    <html lang="ar" dir="rtl" className={notoNaskhArabic.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#36bf36" />
        
        {/* AI Search & Geographic Meta */}
        <meta name="geo.region" content="SA-02" />
        <meta name="geo.placename" content="جدة" />
        <meta name="geo.position" content="21.485811;39.192505" />
        <meta name="ICBM" content="21.485811, 39.192505" />
        <meta name="language" content="Arabic" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Alternative languages */}
        <link rel="alternate" hrefLang="ar-SA" href={process.env.NEXT_PUBLIC_SITE_URL} />
        <link rel="alternate" hrefLang="ar" href={process.env.NEXT_PUBLIC_SITE_URL} />
        <link rel="alternate" hrefLang="x-default" href={process.env.NEXT_PUBLIC_SITE_URL} />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        
        {/* AI Search Optimization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "تنسيق حدائق جدة",
              "description": "خدمات تنسيق الحدائق الاحترافية في جدة",
              "serviceType": "تنسيق حدائق",
              "provider": {
                "@id": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'}#organization`
              },
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 21.485811,
                  "longitude": 39.192505
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "خدمات تنسيق الحدائق",
                "itemListElement": [
                  {
                    "@type": "OfferCatalog",
                    "name": "تصميم وتنسيق الحدائق"
                  },
                  {
                    "@type": "OfferCatalog", 
                    "name": "تركيب العشب الصناعي"
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "أنظمة الري والصرف"
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${notoNaskhArabic.className} antialiased`}>
        {children}
        <PWAPrompt />
        <FloatingActionButtons />
        
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
} 