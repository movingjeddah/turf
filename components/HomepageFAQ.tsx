'use client'

import { useState } from 'react'
import { ChevronDown, MessageCircle, Phone } from 'lucide-react'
import { siteConfig } from '@/content/site'

const faqs = [
  {
    question: 'كم تستغرق مدة تنفيذ مشروع تنسيق الحديقة؟',
    answer: 'تختلف مدة التنفيذ حسب حجم المشروع وتعقيده. الحدائق الصغيرة (أقل من 100 متر) تستغرق 5-7 أيام، بينما المشاريع الكبيرة قد تستغرق من 2-4 أسابيع. نقدم جدولاً زمنياً مفصلاً مع كل عرض سعر.'
  },
  {
    question: 'هل تقدمون ضماناً على أعمالكم؟',
    answer: 'نعم، نقدم ضماناً شاملاً يصل إلى 10 سنوات على العشب الصناعي، وسنتين على النباتات الطبيعية، وسنة واحدة على أنظمة الري. كما نقدم خدمة صيانة دورية للحفاظ على جمال حديقتك.'
  },
  {
    question: 'ما هي تكلفة تنسيق الحديقة؟',
    answer: 'تبدأ أسعارنا من 80 ريال للمتر المربع للعشب الصناعي، و150 ريال للمتر المربع للتنسيق الكامل. السعر النهائي يعتمد على نوع التصميم والمواد المطلوبة. نقدم معاينة مجانية وعرض سعر مفصل.'
  },
  {
    question: 'هل العشب الصناعي مناسب لمناخ جدة الحار؟',
    answer: 'نعم، نستخدم عشباً صناعياً عالي الجودة مقاوماً للحرارة والأشعة فوق البنفسجية، مصمماً خصيصاً للمناخ الصحراوي. كما نقدم أنظمة تبريد طبيعية لتقليل درجة حرارة السطح.'
  },
  {
    question: 'هل تقدمون خدمة الصيانة الدورية؟',
    answer: 'نعم، نقدم برامج صيانة شاملة تشمل تنظيف العشب الصناعي، تقليم النباتات، صيانة أنظمة الري، والتحقق من الإضاءة. يمكنك الاختيار بين الزيارات الشهرية أو الفصلية حسب احتياجاتك.'
  },
  {
    question: 'هل يمكنني الحصول على تصميم ثلاثي الأبعاد للحديقة؟',
    answer: 'نعم، نقدم تصاميم ثلاثية الأبعاد احترافية لجميع مشاريعنا مجاناً. هذا يساعدك على رؤية الشكل النهائي للحديقة قبل بدء التنفيذ، مع إمكانية إجراء التعديلات المطلوبة.'
  }
]

export default function HomepageFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent('مرحباً، لدي سؤال حول خدمات تنسيق الحدائق')
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${message}`, '_blank')
  }

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="arabic-title mb-4">الأسئلة الشائعة</h2>
          <p className="arabic-body text-gray-600 max-w-2xl mx-auto">
            إجابات على أكثر الأسئلة شيوعاً حول خدمات تنسيق الحدائق
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-4 text-right flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-primary transition-transform duration-200 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 py-4 bg-white border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* قسم "لم تجد إجابة سؤالك؟" */}
          <div className="mt-12 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 text-center border">
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            
            <h3 className="text-xl font-bold mb-2">لم تجد إجابة سؤالك؟</h3>
            <p className="text-gray-600 mb-6">
              فريقنا جاهز للإجابة على جميع استفساراتك وتقديم الاستشارة المجانية
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                سؤال عبر الواتساب
              </button>
              
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                اتصال مباشر
              </a>
            </div>

            {/* معلومات الاتصال */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <strong>ساعات العمل:</strong> السبت - الخميس، 8:00 ص - 8:00 م
                </div>
                <div>
                  <strong>الرد السريع:</strong> خلال 15 دقيقة عبر الواتساب
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
