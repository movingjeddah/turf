'use client'

import { Share2 } from 'lucide-react'

interface ShareButtonsProps {
  url?: string
  title: string
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '')

  const handleFacebookShare = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')
  }

  const handleTwitterShare = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`, '_blank')
  }

  const handleWhatsAppShare = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(title + ' ' + shareUrl)}`, '_blank')
  }

  return (
    <div className="mt-8 pt-8 border-t">
      <h3 className="text-lg font-semibold mb-4">شارك المقال</h3>
      <div className="flex gap-4">
        <button
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          onClick={handleFacebookShare}
        >
          <Share2 className="w-4 h-4" />
          فيسبوك
        </button>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          onClick={handleTwitterShare}
        >
          <Share2 className="w-4 h-4" />
          إكس (تويتر)
        </button>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          onClick={handleWhatsAppShare}
        >
          <Share2 className="w-4 h-4" />
          واتساب
        </button>
      </div>
    </div>
  )
}
