import { Check } from 'lucide-react'
import { siteConfig } from '@/content/site'

export default function Features() {
  return (
    <section className="section bg-primary text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              لماذا نحن الاختيار الأفضل لتنسيق حديقتك؟
            </h2>
            <p className="text-lg mb-8 text-white/90">
              نجمع بين الخبرة الطويلة والتقنيات الحديثة لنقدم لك أفضل خدمات تنسيق الحدائق في جدة
            </p>
            
            <ul className="space-y-4">
              {siteConfig.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold mb-2">+1000</div>
                <div className="text-sm">مشروع منجز</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-sm">رضا العملاء</div>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold mb-2">+10</div>
                <div className="text-sm">سنوات خبرة</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-sm">دعم العملاء</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 