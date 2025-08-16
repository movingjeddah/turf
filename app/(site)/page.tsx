import VideoHero from '@/components/VideoHero'
import ServicesGrid from '@/components/ServicesGrid'
import Features from '@/components/Features'
import StatsSection from '@/components/StatsSection'
import PortfolioShowcase from '@/components/PortfolioShowcase'
import FeaturedVideosSection from '@/components/FeaturedVideosSection'
import ClientsSection from '@/components/ClientsSection'
import Testimonials from '@/components/Testimonials'
import LatestBlogSection from '@/components/LatestBlogSection'
import HomepageFAQ from '@/components/HomepageFAQ'
import QuickContactSection from '@/components/QuickContactSection'
import CTA from '@/components/CTA'

export default function HomePage() {
  return (
    <>
      {/* هيرو فيديو تفاعلي */}
      <VideoHero />
      
      {/* شبكة الخدمات */}
      <ServicesGrid />
      
      {/* الإحصائيات والإنجازات */}
      <StatsSection />
      
      {/* عرض الأعمال المميزة بالفيديو */}
      <PortfolioShowcase />
      
      {/* قسم الفيديوهات المميزة */}
      <FeaturedVideosSection />
      
      {/* الميزات الأساسية */}
      <Features />
      
      {/* العملاء والشراكات */}
      <ClientsSection />
      
      {/* آراء العملاء */}
      <Testimonials />
      
      {/* أحدث المقالات */}
      <LatestBlogSection />
      
      {/* الأسئلة الشائعة */}
      <HomepageFAQ />
      
      {/* التواصل السريع */}
      <QuickContactSection />
      
      {/* دعوة للعمل النهائية */}
      <CTA
        title="ابدأ مشروع حديقة أحلامك اليوم"
        description="انضم إلى آلاف العملاء الراضين واحصل على استشارة مجانية وعرض سعر مخصص"
      />
    </>
  )
} 