import type { Metadata } from 'next'
import EnhancedAboutPage from '@/components/EnhancedAboutPage'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'من نحن - قصة نجاح منذ 2014',
  description: 'تعرف على شركة تنسيق الحدائق الرائدة في جدة. أكثر من 10 سنوات من الخبرة، 500+ مشروع مكتمل، وفريق من 50+ محترف في تحويل المساحات الخارجية إلى واحات خضراء.',
  keywords: ['تنسيق حدائق جدة', 'شركة حدائق', 'من نحن', 'فريق عمل', 'خبرة', 'تراخيص'],
  openGraph: {
    title: 'من نحن - شركة تنسيق حدائق جدة الرائدة',
    description: 'قصة نجاح 10 سنوات من التميز في تنسيق الحدائق والعشب الصناعي في جدة والمنطقة الغربية',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <>
      <EnhancedAboutPage />
      
      <CTA
        title="انضم إلى عائلة عملائنا الراضين"
        description="دعنا نحول حديقتك إلى تحفة فنية تفوق توقعاتك - استشارة مجانية وضمان شامل"
      />
    </>
  )
} 