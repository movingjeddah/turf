import { DefaultSeoProps } from 'next-seo'

const config: DefaultSeoProps = {
  titleTemplate: '%s | تنسيق حدائق جدة',
  defaultTitle: 'تنسيق حدائق وعشب صناعي في جدة | أفضل شركة تنسيق حدائق',
  description: 'شركة تنسيق حدائق في جدة متخصصة في تركيب العشب الصناعي، تصميم الحدائق، المظلات والبرجولات، الشلالات والنوافير. أسعار منافسة وضمان على جميع الأعمال.',
  canonical: process.env.NEXT_PUBLIC_SITE_URL,
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'تنسيق حدائق جدة',
    title: 'تنسيق حدائق وعشب صناعي في جدة',
    description: 'شركة تنسيق حدائق في جدة متخصصة في تركيب العشب الصناعي، تصميم الحدائق، المظلات والبرجولات، الشلالات والنوافير.',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'تنسيق حدائق جدة',
      },
    ],
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'keywords',
      content: 'تنسيق حدائق جدة, عشب صناعي جدة, تركيب عشب صناعي, شركة تنسيق حدائق, عشب جداري, ثيل طبيعي, مظلات جدة, برجولات جدة, شلالات صناعية, شبكات ري, صيانة حدائق',
    },
    {
      name: 'author',
      content: 'شركة تنسيق حدائق جدة',
    },
    {
      property: 'og:locale:alternate',
      content: 'en_US',
    },
    {
      name: 'google-site-verification',
      content: process.env.GSC_VERIFICATION || '',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  ],
}

export default config 