'use client'

import { useEffect } from 'react'

const OptimizedFonts = () => {
  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return
    // Preload critical fonts
    const preloadFont = (href: string, as: string = 'font', type: string = 'font/woff2') => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = href
      link.as = as
      link.type = type
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    }

    // Font display optimization
    const optimizeGoogleFonts = () => {
      const googleFonts = document.querySelectorAll('link[href*="fonts.googleapis.com"]')
      googleFonts.forEach((link) => {
        const href = link.getAttribute('href')
        if (href && !href.includes('display=swap')) {
          const separator = href.includes('?') ? '&' : '?'
          link.setAttribute('href', `${href}${separator}display=swap`)
        }
      })
    }

    // Subset optimization for Arabic fonts
    const optimizeArabicFonts = () => {
      const arabicSubset = 'U+0600-06FF,U+0750-077F,U+08A0-08FF,U+FB50-FDFF,U+FE70-FEFF'
      const latinSubset = 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F'
      
      // Add font-display: swap to existing fonts
      const style = document.createElement('style')
      style.textContent = `
        @font-face {
          font-family: 'Noto Naskh Arabic';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          unicode-range: ${arabicSubset}, ${latinSubset};
        }
      `
      document.head.appendChild(style)
    }

    // Initialize optimizations
    optimizeGoogleFonts()
    optimizeArabicFonts()

    // Preload most used font weights
    preloadFont('https://fonts.gstatic.com/s/notonaskharabic/v6/RrQCbohi_ic6B3yVSzGBrMx6T3zb6k-VBxbBb-wLKbSr.woff2')
    preloadFont('https://fonts.gstatic.com/s/notonaskharabic/v6/RrQEbohi_ic6B3yVSzGBrMx6T3zb6k-VDReEKnK3HMfH.woff2')

  }, [])

  return null
}

export default OptimizedFonts
