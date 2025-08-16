'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  className = ''
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const countRef = useRef<HTMLSpanElement>(null)
  const rafRef = useRef<number>()

  // Optimized easing function
  const easeOutCubic = useCallback((t: number) => {
    return 1 - Math.pow(1 - t, 3)
  }, [])

  // Optimized intersection observer
  useEffect(() => {
    const current = countRef.current
    if (!current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          observer.unobserve(current)
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    observer.observe(current)
    return () => observer.disconnect()
  }, [isVisible])

  // Optimized animation
  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easedProgress = easeOutCubic(progress)
      const newCount = Math.floor(easedProgress * end)
      
      // Only update if count actually changed
      setCount(prevCount => {
        return prevCount !== newCount ? newCount : prevCount
      })

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [isVisible, end, duration, easeOutCubic])

  // Memoized formatted count
  const formattedCount = count.toLocaleString('ar-SA')

  return (
    <span 
      ref={countRef} 
      className={`gpu-accelerated ${className}`}
      role="progressbar"
      aria-valuenow={count}
      aria-valuemax={end}
      aria-label={`${prefix}${formattedCount}${suffix}`}
    >
      {prefix}{formattedCount}{suffix}
    </span>
  )
}
