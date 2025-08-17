'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Calculator, CheckCircle, Phone } from 'lucide-react'
import { Service } from '@/content/services'
import { routes } from '@/lib/routes'

interface NeighborhoodCostCalculatorProps {
  service: Service
  neighborhoodName: string
}

export default function NeighborhoodCostCalculator({ service, neighborhoodName }: NeighborhoodCostCalculatorProps) {
  const [areaSize, setAreaSize] = useState<number>(0)
  const [selectedPriceIndex, setSelectedPriceIndex] = useState(1) // Default to middle tier
  const [calculatedCost, setCalculatedCost] = useState<number | null>(null)

  const calculateCost = () => {
    if (areaSize <= 0) {
      alert('يرجى إدخال مساحة صحيحة')
      return
    }
    
    const selectedTier = service.pricingTiers[selectedPriceIndex]
    if (!selectedTier) return
    
    // Extract price number from string (e.g., "250" from "250 ريال/م²")
    const priceMatch = selectedTier.price.match(/(\d+)/)
    const pricePerUnit = priceMatch ? parseInt(priceMatch[1]) : 0
    
    if (pricePerUnit > 0) {
      const totalCost = areaSize * pricePerUnit
      setCalculatedCost(totalCost)
    }
  }

  return (
    <div className="mt-12 max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
      <div className="flex items-center justify-center mb-4">
        <Calculator className="w-6 h-6 text-primary me-2" />
        <h3 className="text-xl font-semibold text-center">احسب التكلفة التقديرية لـ{neighborhoodName}</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">المساحة (متر مربع)</label>
          <input
            type="number"
            value={areaSize || ''}
            onChange={(e) => setAreaSize(parseInt(e.target.value) || 0)}
            placeholder="مثال: 100"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            min="1"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">نوع الباقة</label>
          <select 
            value={selectedPriceIndex}
            onChange={(e) => setSelectedPriceIndex(parseInt(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
          >
            {service.pricingTiers.map((tier, index) => (
              <option key={index} value={index}>
                {tier.name} - {tier.price} {tier.unit}
              </option>
            ))}
          </select>
        </div>
        
        <button 
          onClick={calculateCost}
          className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
        >
          <Calculator className="w-4 h-4" />
          احسب التكلفة
        </button>
        
        {/* Result Display */}
        {calculatedCost !== null && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600 me-2" />
              <span className="text-sm font-medium text-green-800">التكلفة التقديرية لـ{neighborhoodName}</span>
            </div>
            <div className="text-center mt-2">
              <span className="text-2xl font-bold text-green-700">
                {calculatedCost.toLocaleString('ar-SA')} ريال
              </span>
              <p className="text-xs text-green-600 mt-1">
                للمساحة: {areaSize} م² - {service.pricingTiers[selectedPriceIndex].name}
              </p>
            </div>
            <div className="text-center mt-3">
              <Link
                href={routes.contact}
                className="inline-flex items-center gap-2 text-sm bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
                احصل على عرض سعر دقيق
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
