import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Phone, MessageCircle } from 'lucide-react'
import { generateWhatsAppUrl } from '@/lib/utils'
import { siteConfig } from '@/content/site'

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  image?: string
  imageAlt?: string
  overlay?: boolean
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  image,
  imageAlt,
  overlay = true,
}: HeroProps) {
  const whatsappUrl = generateWhatsAppUrl(
    siteConfig.whatsapp,
    'مرحباً، أرغب في الاستفسار عن خدماتكم'
  )

  return (
    <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center">
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover"
            priority
          />
          {overlay && (
            <div className="absolute inset-0 bg-black/50" />
          )}
        </div>
      )}

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          {subtitle && (
            <p className="text-secondary text-lg md:text-xl mb-2 font-semibold">
              {subtitle}
            </p>
          )}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          
          {description && (
            <p className="text-lg md:text-xl text-white/90 mb-8">
              {description}
            </p>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            {primaryCTA ? (
              <Link href={primaryCTA.href}>
                <Button size="lg" className="w-full sm:w-auto">
                  {primaryCTA.text}
                </Button>
              </Link>
            ) : (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button size="lg" className="w-full sm:w-auto">
                  <MessageCircle className="ms-2 h-5 w-5" />
                  تواصل واتساب
                </Button>
              </a>
            )}

            {secondaryCTA ? (
              <Link href={secondaryCTA.href}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 text-white border-white hover:bg-white hover:text-primary">
                  {secondaryCTA.text}
                </Button>
              </Link>
            ) : (
              <a href={`tel:${siteConfig.phone}`}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 text-white border-white hover:bg-white hover:text-primary">
                  <Phone className="ms-2 h-5 w-5" />
                  اتصل الآن
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
} 