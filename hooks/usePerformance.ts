'use client'

import { useEffect, useCallback, useRef } from 'react'

// Throttle function for performance
export const useThrottle = (callback: (...args: any[]) => void, delay: number) => {
  const throttleRef = useRef<NodeJS.Timeout | null>(null)
  const lastExecutedRef = useRef<number>(0)

  return useCallback((...args: any[]) => {
    const now = Date.now()
    
    if (now - lastExecutedRef.current >= delay) {
      callback(...args)
      lastExecutedRef.current = now
    } else if (!throttleRef.current) {
      throttleRef.current = setTimeout(() => {
        callback(...args)
        lastExecutedRef.current = Date.now()
        throttleRef.current = null
      }, delay - (now - lastExecutedRef.current))
    }
  }, [callback, delay])
}

// Debounce function for performance
export const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
  const debounceRef = useRef<NodeJS.Timeout | null>(null)

  return useCallback((...args: any[]) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }
    
    debounceRef.current = setTimeout(() => {
      callback(...args)
    }, delay)
  }, [callback, delay])
}

// Intersection Observer hook for lazy loading
export const useIntersectionObserver = (
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = {}
) => {
  const elementRef = useRef<HTMLElement | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (!elementRef.current) return

    observerRef.current = new IntersectionObserver(
      ([entry]) => callback(entry),
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    )

    observerRef.current.observe(elementRef.current)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [callback, options])

  return elementRef
}

// Viewport performance optimization
export const useViewportOptimization = () => {
  useEffect(() => {
    // Reduce motion for users who prefer it
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    
    if (mediaQuery.matches) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms')
      document.documentElement.style.setProperty('--transition-duration', '0.01ms')
    }

    // Optimize scrolling performance
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Scroll optimizations can be added here
          ticking = false
        })
        ticking = true
      }
    }

    // Passive listeners for better performance
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])
}

// Resource prefetching
export const usePrefetch = (urls: string[]) => {
  useEffect(() => {
    urls.forEach(url => {
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.href = url
      document.head.appendChild(link)
    })
  }, [urls])
}

// Memory usage optimization
export const useMemoryOptimization = () => {
  useEffect(() => {
    // Clean up unused resources on page unload
    const cleanup = () => {
      // Cancel any pending requests
      if (window.AbortController) {
        const controllers = (window as any)._abortControllers || []
        controllers.forEach((controller: AbortController) => {
          controller.abort()
        })
      }
    }

    window.addEventListener('beforeunload', cleanup)
    return () => {
      window.removeEventListener('beforeunload', cleanup)
      cleanup()
    }
  }, [])
}
