import Hero from '@/components/Hero'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import { Star } from 'lucide-react'

export const metadata = {
  title: 'آراء العملاء',
  description: 'اقرأ تقييمات وآراء عملائنا عن خدمات تنسيق الحدائق وتركيب العشب الصناعي في جدة.',
}

const reviews = [
  {
    id: 1,
    name: 'أحمد الغامدي',
    location: 'حي الروضة',
    rating: 5,
    text: 'خدمة ممتازة وسريعة، قاموا بتحويل حديقتي إلى تحفة فنية. الفريق محترف جداً والأسعار معقولة. أنصح بهم بشدة.',
    service: 'تنسيق حدائق',
    date: '2024-01-15',
  },
  {
    id: 2,
    name: 'محمد السالم',
    location: 'أبحر الشمالية',
    rating: 5,
    text: 'تركيب العشب الصناعي كان احترافي جداً، والنتيجة فاقت توقعاتي. الجودة ممتازة والضمان مريح. شكراً لكم.',
    service: 'عشب صناعي',
    date: '2024-01-10',
  },
  {
    id: 3,
    name: 'عبدالله الحربي',
    location: 'حي الزهراء',
    rating: 5,
    text: 'فريق محترف ومتعاون، الأسعار مناسبة جداً مقارنة بالجودة المقدمة. قاموا بتركيب شلال رائع في حديقتي.',
    service: 'شلالات ونوافير',
    date: '2024-01-05',
  },
  {
    id: 4,
    name: 'فيصل القحطاني',
    location: 'حي السلامة',
    rating: 5,
    text: 'المظلة التي قاموا بتركيبها أضافت لمسة جمالية رائعة للحديقة، وجودة ممتازة. التعامل راقي والتنفيذ في الوقت المحدد.',
    service: 'مظلات وبرجولات',
    date: '2023-12-28',
  },
  {
    id: 5,
    name: 'سعد المالكي',
    location: 'حي المحمدية',
    rating: 5,
    text: 'أفضل شركة تعاملت معها في تنسيق الحدائق. النتيجة رائعة والسعر مناسب. الحديقة أصبحت مكان مفضل للعائلة.',
    service: 'تنسيق حدائق',
    date: '2023-12-20',
  },
  {
    id: 6,
    name: 'خالد الزهراني',
    location: 'حي الخالدية',
    rating: 5,
    text: 'شبكة الري التي قاموا بتركيبها وفرت علي الكثير من الوقت والماء. نظام ذكي وفعال.',
    service: 'شبكات ري',
    date: '2023-12-15',
  },
  {
    id: 7,
    name: 'نايف الشهري',
    location: 'حي الفيصلية',
    rating: 5,
    text: 'الثيل الطبيعي الذي قاموا بتوريده ممتاز، والعناية به أصبحت سهلة بفضل نصائحهم. شكراً على الخدمة المميزة.',
    service: 'ثيل طبيعي',
    date: '2023-12-10',
  },
  {
    id: 8,
    name: 'ماجد العتيبي',
    location: 'حي المروة',
    rating: 5,
    text: 'خدمة الصيانة الدورية ممتازة، الحديقة دائماً في أفضل حالة. فريق العمل متعاون ومحترف.',
    service: 'صيانة حدائق',
    date: '2023-12-05',
  },
]

export default function ReviewsPage() {
  const totalReviews = reviews.length
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews

  return (
    <>
      <Hero
        title="آراء عملائنا"
        description="نفتخر بثقة عملائنا ورضاهم عن خدماتنا في تنسيق الحدائق"
        image="/images/landscape-design-build-1.webp"
      />
      
      <section className="section">
        <div className="container">
          {/* Rating Summary */}
          <div className="text-center mb-12 py-8 bg-gray-50 rounded-lg">
            <div className="flex justify-center items-center gap-2 mb-4">
              <span className="text-5xl font-bold">{averageRating.toFixed(1)}</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-600">
              بناءً على {totalReviews} تقييم من عملائنا
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {reviews.map((review) => (
              <div key={review.id} className="card p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{review.text}</p>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-primary font-medium">{review.service}</span>
                  <span className="text-gray-500">{review.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center py-8 bg-primary/5 rounded-lg">
            <h2 className="arabic-subtitle mb-4">شاركنا رأيك</h2>
            <p className="text-gray-700 mb-6">
              نسعد بسماع آرائكم وملاحظاتكم لتحسين خدماتنا
            </p>
            <a
              href="https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              اكتب تقييمك على جوجل
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="arabic-title text-center mb-12">قالوا عنا</h2>
          <Testimonials />
        </div>
      </section>
      
      <CTA
        title="انضم لقائمة عملائنا السعداء"
        description="دعنا نقدم لك خدمة تستحق تقييم 5 نجوم"
      />
    </>
  )
} 