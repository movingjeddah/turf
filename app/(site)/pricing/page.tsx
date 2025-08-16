import type { Metadata } from 'next'
import EnhancedPricingPage from '@/components/EnhancedPricingPage'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'الأسعار والباقات - أسعار شفافة ومنافسة',
  description: 'أسعار خدمات تنسيق الحدائق في جدة - عشب صناعي، ثيل طبيعي، مظلات، شلالات، وأكثر. أسعار شفافة، باقات متنوعة، وضمان على جميع الأعمال. احسب تكلفة مشروعك الآن.',
  keywords: ['أسعار تنسيق حدائق', 'باقات حدائق', 'تكلفة العشب الصناعي', 'أسعار جدة', 'حاسبة تكلفة'],
  openGraph: {
    title: 'أسعار تنسيق الحدائق في جدة - باقات شاملة ومتنوعة',
    description: 'اكتشف باقاتنا المتنوعة وأسعارنا الشفافة. حاسبة تكلفة مجانية، استشارة مجانية، وأسعار تبدأ من 150 ريال للمتر المربع.',
    type: 'website',
  },
}

export default function PricingPage() {
  return (
    <>
      <EnhancedPricingPage />
      
      <CTA
        title="استثمر في جمال حديقتك اليوم"
        description="أسعار منافسة، جودة عالية، وضمان شامل - احصل على عرض سعر مجاني الآن"
      />
    </>
  )
} 