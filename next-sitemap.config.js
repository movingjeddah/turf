/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/thank-you'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/thank-you'],
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'}/sitemap.xml`,
    ],
  },
  transform: async (config, path) => {
    // Default priority and changefreq
    let priority = 0.7
    let changefreq = 'weekly'
    
    // Set priority based on path
    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    } else if (path.includes('/services/') && !path.includes('/services/[')) {
      priority = 0.9
      changefreq = 'weekly'
    } else if (path === '/pricing/' || path === '/contact/') {
      priority = 0.8
      changefreq = 'monthly'
    }
    
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
} 