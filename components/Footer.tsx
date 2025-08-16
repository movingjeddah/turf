import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'
import { routes } from '@/lib/routes'
import { siteConfig } from '@/content/site'
import { services } from '@/content/services'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{siteConfig.name}</h3>
            <p className="text-gray-300 mb-4">
              شركة رائدة في مجال تنسيق الحدائق وتركيب العشب الصناعي في جدة والمنطقة الغربية
            </p>
            <div className="flex gap-4">
              <a href={siteConfig.socialMedia.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="w-5 h-5 hover:text-primary transition-colors" />
              </a>
              <a href={siteConfig.socialMedia.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="w-5 h-5 hover:text-primary transition-colors" />
              </a>
              <a href={siteConfig.socialMedia.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="w-5 h-5 hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href={routes.about} className="text-gray-300 hover:text-primary transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href={routes.services.index} className="text-gray-300 hover:text-primary transition-colors">
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link href={routes.portfolio} className="text-gray-300 hover:text-primary transition-colors">
                  أعمالنا
                </Link>
              </li>
              <li>
                <Link href={routes.pricing} className="text-gray-300 hover:text-primary transition-colors">
                  الأسعار
                </Link>
              </li>
              <li>
                <Link href={routes.contact} className="text-gray-300 hover:text-primary transition-colors">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">خدماتنا</h3>
            <ul className="space-y-2">
              {services.slice(0, 5).map((service) => (
                <li key={service.key}>
                  <Link
                    href={routes.services.bySlug(service.slug)}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {service.arabicTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-gray-300 hover:text-primary transition-colors ltr-numbers"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span className="text-gray-300">{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} {siteConfig.name}. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-4 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-primary transition-colors">
                سياسة الخصوصية
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary transition-colors">
                الشروط والأحكام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 