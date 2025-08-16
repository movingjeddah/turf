import type { Metadata } from 'next'
import EnhancedPortfolioPage from '@/components/EnhancedPortfolioPage'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'معرض أعمالنا - مشاريع تنسيق الحدائق في جدة',
  description: 'استكشف معرض شامل لأعمالنا المتميزة في تنسيق الحدائق والعشب الصناعي في جدة. شاهد فيديوهات حقيقية لمشاريعنا المكتملة، صور قبل وبعد، وتفاصيل كل مشروع.',
  keywords: ['معرض أعمال', 'مشاريع حدائق', 'قبل وبعد', 'جدة', 'عشب صناعي', 'تنسيق حدائق', 'فيديوهات مشاريع'],
  openGraph: {
    title: 'معرض أعمالنا - 500+ مشروع مكتمل في جدة',
    description: 'شاهد مشاريعنا الحقيقية بالفيديو والصور. من حدائق منزلية صغيرة إلى مجمعات تجارية كبيرة، نحول الأحلام إلى واقع أخضر.',
    type: 'website',
  },
}

export default function PortfolioPage() {
  return (
    <>
      <EnhancedPortfolioPage />
      
      <CTA
        title="مشروعك القادم ينتظرك"
        description="انضم إلى 500+ عميل راضٍ وحول حديقتك إلى قصة نجاح جديدة في معرضنا"
      />
    </>
  )
} 