'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQ as FAQType } from '@/content/services'

interface FAQProps {
  items: FAQType[]
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Safety check
  if (!items || items.length === 0) {
    return null
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border"
          >
            <button
              className="w-full px-6 py-4 text-right flex items-center justify-between hover:bg-gray-50 transition-colors"
              onClick={() => toggleItem(index)}
              aria-expanded={openIndex === index}
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {item.question}
              </h3>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            {openIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-gray-700 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
} 