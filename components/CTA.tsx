import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, MessageCircle } from 'lucide-react'
import { generateWhatsAppUrl } from '@/lib/utils'
import { siteConfig } from '@/content/site'

interface CTAProps {
  title: string
  description?: string
  primaryText?: string
  primaryHref?: string
  secondaryText?: string
  secondaryHref?: string
}

export default function CTA({
  title,
  description,
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref,
}: CTAProps) {
  const whatsappUrl = generateWhatsAppUrl(
    siteConfig.whatsapp,
    'مرحباً، أرغب في الحصول على استشارة مجانية'
  )

  return (
    <section className="section bg-primary text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {description && (
            <p className="text-lg mb-8 text-white/90">{description}</p>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryHref ? (
              <Link href={primaryHref}>
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  {primaryText || 'ابدأ الآن'}
                </Button>
              </Link>
            ) : (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  <MessageCircle className="ms-2 h-5 w-5" />
                  {primaryText || 'احصل على استشارة مجانية'}
                </Button>
              </a>
            )}
            
            {secondaryHref ? (
              <Link href={secondaryHref}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 text-white border-white hover:bg-white hover:text-primary">
                  {secondaryText || 'تعرف على المزيد'}
                </Button>
              </Link>
            ) : (
              <a href={`tel:${siteConfig.phone}`}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 text-white border-white hover:bg-white hover:text-primary">
                  <Phone className="ms-2 h-5 w-5" />
                  {secondaryText || 'اتصل الآن'}
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
} 