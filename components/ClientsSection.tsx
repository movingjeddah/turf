'use client'

import { useState, useEffect } from 'react'
import { Star, Users, Building, Home } from 'lucide-react'

const clients = [
  {
    name: 'مجموعة الحكير',
    type: 'تجاري',
    logo: 'https://via.placeholder.com/120x60/22c55e/ffffff?text=الحكير',
    projects: 12
  },
  {
    name: 'شركة أرامكو السعودية',
    type: 'مؤسسي',
    logo: 'https://via.placeholder.com/120x60/16a34a/ffffff?text=أرامكو',
    projects: 8
  },
  {
    name: 'جامعة الملك عبدالعزيز',
    type: 'تعليمي',
    logo: 'https://via.placeholder.com/120x60/15803d/ffffff?text=جامعة',
    projects: 15
  },
  {
    name: 'فندق شيراتون جدة',
    type: 'فندقي',
    logo: 'https://via.placeholder.com/120x60/22c55e/ffffff?text=شيراتون',
    projects: 6
  },
  {
    name: 'مستشفى الملك فهد',
    type: 'طبي',
    logo: 'https://via.placeholder.com/120x60/16a34a/ffffff?text=مستشفى',
    projects: 10
  },
  {
    name: 'مجمع العرب مول',
    type: 'تجاري',
    logo: 'https://via.placeholder.com/120x60/15803d/ffffff?text=العرب',
    projects: 4
  }
]

const clientTypes = [
  {
    icon: Building,
    title: 'المؤسسات الحكومية',
    count: 25,
    description: 'مشاريع للجهات الحكومية والمؤسسات العامة'
  },
  {
    icon: Home,
    title: 'العملاء الأفراد',
    count: 350,
    description: 'فلل ومنازل سكنية في جدة والمنطقة الغربية'
  },
  {
    icon: Users,
    title: 'الشركات الخاصة',
    count: 125,
    description: 'مكاتب ومجمعات تجارية ومرافق خاصة'
  }
]

export default function ClientsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="arabic-title mb-4">عملاؤنا وشركاؤنا</h2>
          <p className="arabic-body text-gray-600 max-w-2xl mx-auto">
            نفخر بثقة العديد من المؤسسات والأفراد المميزين في خدماتنا
          </p>
        </div>

        {/* أنواع العملاء */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {clientTypes.map((type, index) => (
            <div key={index} className="text-center group hover-lift">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <type.icon className="w-10 h-10 text-white" />
                </div>
                
                {/* رقم العدد */}
                <div className="absolute -top-2 -right-2 bg-secondary text-white text-sm font-bold px-2 py-1 rounded-full shadow-lg">
                  {type.count}+
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{type.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{type.description}</p>
            </div>
          ))}
        </div>

        {/* شعارات العملاء المتحركة */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border">
          <h3 className="text-xl font-semibold text-center mb-8">بعض من عملائنا المميزين</h3>
          
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${currentIndex * -200}px)` }}
            >
              {clients.concat(clients).map((client, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-48 mx-4 p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300"
                >
                  <div className="h-16 flex items-center justify-center mb-3 bg-gray-50 rounded-lg">
                    <div className="text-sm font-bold text-primary">{client.name}</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">{client.type}</div>
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-sm font-semibold">{client.projects}</span>
                      <span className="text-xs text-gray-500">مشروع</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* مؤشرات */}
          <div className="flex justify-center gap-2 mt-6">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* شهادات سريعة */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-gradient-to-r from-primary/5 to-transparent p-6 rounded-xl border border-primary/10">
            <div className="flex items-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
              <span className="font-semibold">4.9/5</span>
            </div>
            <blockquote className="text-gray-700 italic mb-3">
              &ldquo;خدمة متميزة وجودة عالية في التنفيذ. تم إنجاز المشروع في الوقت المحدد.&rdquo;
            </blockquote>
            <div className="text-sm text-gray-600">
              - مدير عام، شركة تطوير المشاريع
            </div>
          </div>

          <div className="bg-gradient-to-r from-secondary/5 to-transparent p-6 rounded-xl border border-secondary/10">
            <div className="flex items-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
              <span className="font-semibold">5.0/5</span>
            </div>
            <blockquote className="text-gray-700 italic mb-3">
              &ldquo;فريق محترف ومتعاون. النتيجة فاقت توقعاتنا بمراحل.&rdquo;
            </blockquote>
            <div className="text-sm text-gray-600">
              - صاحب فيلا، حي الروضة
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
