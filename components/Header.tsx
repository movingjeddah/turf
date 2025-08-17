'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { routes } from '@/lib/routes'
import { siteConfig } from '@/content/site'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: routes.home, label: 'الرئيسية' },
    { href: routes.services.index, label: 'خدماتنا' },
    { href: routes.pricing, label: 'الأسعار' },
    { href: routes.portfolio, label: 'أعمالنا' },
    { href: routes.videos, label: 'الفيديوهات' },
    { href: routes.about, label: 'من نحن' },
    { href: routes.contact, label: 'اتصل بنا' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={routes.home} className="flex items-center">
            <Image 
              src="/images/logo.png" 
              alt="شعار تنسيق حدائق جدة" 
              className="h-12 md:h-14 lg:h-16 w-auto hover:scale-105 transition-transform duration-200"
              width={200}
              height={80}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Phone CTA */}
          <div className="hidden md:flex items-center">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="ltr-numbers">{siteConfig.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container py-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block text-gray-700 hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center justify-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="ltr-numbers">{siteConfig.phone}</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
} 