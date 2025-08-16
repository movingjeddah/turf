export const routes = {
  home: '/',
  services: {
    index: '/services',
    bySlug: (slug: string) => `/services/${slug}`,
    pricing: (slug: string) => `/services/${slug}/pricing`,
    specs: (slug: string) => `/services/${slug}/specs`,
    works: (slug: string) => `/services/${slug}/works`,
    faq: (slug: string) => `/services/${slug}/faq`,
    design: (slug: string) => `/services/${slug}/design`,
    lighting: (slug: string) => `/services/${slug}/lighting`,
    maintenance: (slug: string) => `/services/${slug}/maintenance`,
    types: (slug: string) => `/services/${slug}/types`,
    indoorOutdoor: (slug: string) => `/services/${slug}/indoor-outdoor`,
    pergolas: (slug: string) => `/services/${slug}/pergolas`,
    carports: (slug: string) => `/services/${slug}/carports`,
    wallWaterfall: (slug: string) => `/services/${slug}/wall-waterfall`,
    fountainsPumps: (slug: string) => `/services/${slug}/fountains-pumps`,
    systems: (slug: string) => `/services/${slug}/systems`,
    irrigationCare: (slug: string) => `/services/${slug}/irrigation-care`,
    lawnTree: (slug: string) => `/services/${slug}/lawn-tree`,
  },
  pricing: '/pricing',
  portfolio: '/portfolio',
  videos: '/videos',
  reviews: '/reviews',
  blog: {
    index: '/blog',
    post: (slug: string) => `/blog/${slug}`,
  },
  about: '/about',
  contact: '/contact',
  thankYou: '/thank-you',
  jeddah: {
    index: '/jeddah',
    neighborhood: (slug: string) => `/jeddah/${slug}`,
    neighborhoodService: (neighborhood: string, service: string) => `/jeddah/${neighborhood}/${service}`,
  },
}

export function getServiceRoute(serviceSlug: string, subpage?: string): string {
  if (subpage) {
    return `/services/${serviceSlug}/${subpage}`
  }
  return `/services/${serviceSlug}`
}

export function getNeighborhoodRoute(neighborhoodSlug: string, serviceSlug?: string): string {
  if (serviceSlug) {
    return `/jeddah/${neighborhoodSlug}/${serviceSlug}`
  }
  return `/jeddah/${neighborhoodSlug}`
}

export function getJeddahServiceRoute(serviceSlug: string): string {
  return `/jeddah/${serviceSlug}`
} 