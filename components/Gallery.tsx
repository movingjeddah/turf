'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { Gallery as GalleryType } from '@/content/services'

interface GalleryProps {
  items: GalleryType[]
}

export default function Gallery({ items }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onClick={() => setSelectedImage(index)}
          >
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src={item.image}
                alt={item.caption}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {item.beforeAfter && (
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-md text-sm">
                  قبل/بعد
                </div>
              )}
            </div>
            <p className="mt-2 text-center text-gray-700">{item.caption}</p>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="relative max-w-4xl max-h-[90vh]">
            <Image
              src={items[selectedImage].image}
              alt={items[selectedImage].caption}
              width={1200}
              height={800}
              className="object-contain"
            />
            <p className="text-white text-center mt-4">
              {items[selectedImage].caption}
            </p>
          </div>
        </div>
      )}
    </>
  )
} 