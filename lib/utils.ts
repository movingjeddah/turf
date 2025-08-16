import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: string | number, currency = 'ريال') {
  return `${price} ${currency}`
}

export function formatPhoneNumber(phone: string) {
  // Format Saudi phone numbers
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.startsWith('966')) {
    return `+${cleaned.slice(0, 3)} ${cleaned.slice(3, 5)} ${cleaned.slice(5, 8)} ${cleaned.slice(8)}`
  }
  return phone
}

export function generateWhatsAppUrl(phone: string, message?: string) {
  const cleanPhone = phone.replace(/\D/g, '')
  const params = new URLSearchParams()
  params.set('phone', cleanPhone)
  if (message) {
    params.set('text', message)
  }
  return `https://wa.me/${cleanPhone}${message ? `?text=${encodeURIComponent(message)}` : ''}`
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, '-')
    .replace(/^-+|-+$/g, '')
} 