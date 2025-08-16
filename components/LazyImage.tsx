'use client'

import { useState, useEffect } from 'react'
import Image, { ImageProps } from 'next/image'
import { cn } from '@/lib/utils'

interface LazyImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  fallback?: string
  threshold?: number
}

export default function LazyImage({
  src,
  alt,
  className,
  fallback = '/images/placeholder.webp',
  threshold = 0.1,
  ...props
}: LazyImageProps) {
  const [imageSrc, setImageSrc] = useState<string>(fallback)
  const [imageRef, setImageRef] = useState<HTMLDivElement | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!imageRef) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      { threshold }
    )

    observer.observe(imageRef)

    return () => {
      observer.disconnect()
    }
  }, [imageRef, threshold])

  useEffect(() => {
    if (isInView && src) {
      setImageSrc(src as string)
    }
  }, [isInView, src])

  return (
    <div ref={setImageRef} className={cn('relative overflow-hidden', className)}>
      <Image
        {...props}
        src={imageSrc}
        alt={alt}
        className={cn(
          'transition-opacity duration-300',
          isLoaded ? 'opacity-100' : 'opacity-0',
          className
        )}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  )
}
