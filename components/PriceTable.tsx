import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { generateWhatsAppUrl } from '@/lib/utils'
import { siteConfig } from '@/content/site'
import { PricingTier } from '@/content/services'

interface PriceTableProps {
  tiers: PricingTier[]
}

export default function PriceTable({ tiers }: PriceTableProps) {
  const getWhatsAppMessage = (tierName: string) => {
    return `مرحباً، أرغب في الاستفسار عن ${tierName}`
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tiers.map((tier, index) => {
        const whatsappUrl = generateWhatsAppUrl(
          siteConfig.whatsapp,
          getWhatsAppMessage(tier.name)
        )
        
        return (
          <div
            key={index}
            className={`card p-6 ${index === 1 ? 'border-primary shadow-lg scale-105' : ''}`}
          >
            {index === 1 && (
              <div className="bg-primary text-white text-center py-2 -mt-6 -mx-6 mb-6 rounded-t-lg">
                <span className="text-sm font-semibold">الأكثر طلباً</span>
              </div>
            )}
            
            <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
            <div className="mb-6">
              <span className="text-3xl font-bold text-primary">{tier.price}</span>
              <span className="text-gray-600 ms-2">{tier.unit}</span>
            </div>
            
            <ul className="space-y-3 mb-6">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            {tier.warranty && (
              <div className="text-center mb-4 py-2 bg-primary/10 rounded">
                <span className="text-primary font-semibold">ضمان: {tier.warranty}</span>
              </div>
            )}
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button
                className="w-full"
                variant={index === 1 ? 'default' : 'outline'}
              >
                احصل على هذه الباقة
              </Button>
            </a>
          </div>
        )
      })}
    </div>
  )
} 