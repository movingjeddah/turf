import type { Metadata } from 'next'
import EnhancedServicesIndexPage from '@/components/EnhancedServicesIndexPage'

export const metadata: Metadata = {
  title: 'خدماتنا المتخصصة في جدة - تنسيق حدائق شامل',
  description: 'نقدم 8 خدمات متخصصة في تنسيق الحدائق في جدة: عشب صناعي، ثيل طبيعي، مظلات وبرجولات، شلالات ونوافير، عشب جداري، شبكات ري، وصيانة دورية. استشارة مجانية وضمان شامل.',
  keywords: ['خدمات تنسيق حدائق', 'جدة', 'عشب صناعي', 'ثيل طبيعي', 'مظلات', 'شلالات', 'صيانة حدائق'],
  openGraph: {
    title: 'خدمات تنسيق الحدائق في جدة - 8 خدمات متخصصة',
    description: 'من التصميم والتنفيذ إلى الصيانة المستمرة. 500+ مشروع مكتمل، فريق من 50+ محترف، ضمان شامل وخدمة 24/7.',
    type: 'website',
  },
}

export default function ServicesPage() {
  return <EnhancedServicesIndexPage />
}