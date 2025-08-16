import type { Metadata } from 'next'
import EnhancedContactPage from '@/components/EnhancedContactPage'

export const metadata: Metadata = {
  title: 'اتصل بنا - تواصل مع خبراء تنسيق الحدائق',
  description: 'تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مخصص لخدمات تنسيق الحدائق في جدة. فريق دعم متاح 24/7، استجابة سريعة خلال ساعة.',
  keywords: ['اتصل بنا', 'تواصل', 'استشارة مجانية', 'جدة', 'تنسيق حدائق', 'خدمة عملاء'],
  openGraph: {
    title: 'اتصل بنا - شركة تنسيق حدائق جدة',
    description: 'فريق خدمة العملاء متاح 24/7 لمساعدتك. استشارة مجانية، زيارة مجانية للموقع، واستجابة سريعة خلال ساعة واحدة.',
    type: 'website',
  },
}

export default function ContactPage() {
  return <EnhancedContactPage />
} 