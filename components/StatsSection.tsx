import AnimatedCounter from './AnimatedCounter'
import { Trophy, Users, Calendar, Star } from 'lucide-react'

const stats = [
  {
    icon: Trophy,
    value: 500,
    suffix: '+',
    label: 'مشروع مكتمل',
    description: 'نجحنا في تنفيذ أكثر من 500 مشروع بجودة عالية'
  },
  {
    icon: Users,
    value: 98,
    suffix: '%',
    label: 'رضا العملاء',
    description: 'نسبة رضا عملائنا تزيد عن 98% من جميع المشاريع'
  },
  {
    icon: Calendar,
    value: 10,
    suffix: '+',
    label: 'سنوات خبرة',
    description: 'أكثر من عقد من الخبرة في تنسيق الحدائق'
  },
  {
    icon: Star,
    value: 4,
    suffix: '.9',
    label: 'تقييم العملاء',
    description: 'متوسط تقييمات عملائنا على جميع المنصات'
  }
]

export default function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="arabic-title mb-4">إنجازاتنا بالأرقام</h2>
          <p className="arabic-body text-gray-600 max-w-2xl mx-auto">
            نفخر بما حققناه من نجاحات وثقة عملائنا على مدار السنوات
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              {/* أيقونة مع خلفية متدرجة */}
              <div className="relative mx-auto w-20 h-20 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-600 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-primary to-primary-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* الرقم المتحرك */}
              <div className="mb-2">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2500}
                  className="text-4xl font-bold text-gray-800"
                />
              </div>

              {/* التسمية */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {stat.label}
              </h3>

              {/* الوصف */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {stat.description}
              </p>

              {/* خط تحتي متحرك */}
              <div className="mt-4 mx-auto w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-16 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* عنصر زخرفي */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-full shadow-lg border">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">متاحون 24/7</span>
            </div>
            <div className="w-px h-6 bg-gray-200"></div>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-gray-700">ضمان الجودة</span>
            </div>
            <div className="w-px h-6 bg-gray-200"></div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-gray-700">خدمة مميزة</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
