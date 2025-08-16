'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { CheckCircle, Users, Award, Clock, Shield, Heart, Star, TrendingUp, Target, Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { getVideoPath } from '@/lib/videos'
import AnimatedCounter from '@/components/AnimatedCounter'

const values = [
  {
    icon: CheckCircle,
    title: 'الجودة والإتقان',
    description: 'نلتزم بأعلى معايير الجودة في جميع مشاريعنا',
    color: 'text-green-600'
  },
  {
    icon: Users,
    title: 'فريق محترف',
    description: 'فريقنا مدرب ومؤهل لتقديم أفضل الخدمات',
    color: 'text-blue-600'
  },
  {
    icon: Award,
    title: 'خبرة طويلة',
    description: 'أكثر من 10 سنوات في مجال تنسيق الحدائق',
    color: 'text-yellow-600'
  },
  {
    icon: Clock,
    title: 'الالتزام بالمواعيد',
    description: 'ننجز مشاريعنا في الوقت المحدد دون تأخير',
    color: 'text-purple-600'
  },
  {
    icon: Shield,
    title: 'ضمان شامل',
    description: 'نقدم ضمان على جميع أعمالنا لراحة بالك',
    color: 'text-orange-600'
  },
  {
    icon: Heart,
    title: 'رضا العملاء',
    description: 'رضاكم هو هدفنا الأول والأخير',
    color: 'text-red-600'
  },
]

const milestones = [
  { 
    year: '2014', 
    event: 'تأسيس الشركة في جدة',
    description: 'بداية الرحلة مع فريق من 5 أشخاص وحلم كبير',
    icon: '🚀'
  },
  { 
    year: '2016', 
    event: 'توسيع نطاق الخدمات لتشمل العشب الصناعي',
    description: 'إدخال التقنيات الحديثة لتركيب العشب الصناعي',
    icon: '🌱'
  },
  { 
    year: '2018', 
    event: 'افتتاح فرع جديد وتوظيف 20 موظف',
    description: 'توسع الشركة لتلبية الطلب المتزايد',
    icon: '🏢'
  },
  { 
    year: '2020', 
    event: 'إطلاق خدمات الصيانة الدورية',
    description: 'إضافة خدمات ما بعد التنفيذ لضمان الاستدامة',
    icon: '🛠️'
  },
  { 
    year: '2022', 
    event: 'تنفيذ أكثر من 500 مشروع',
    description: 'تحقيق إنجاز كبير في خدمة المجتمع',
    icon: '🏆'
  },
  { 
    year: '2024', 
    event: 'الريادة في تنسيق الحدائق بجدة',
    description: 'أصبحنا الخيار الأول لعملاء المنطقة الغربية',
    icon: '👑'
  },
]

const teamStats = [
  { number: 10, title: 'مهندس ومصمم', description: 'متخصصون في التصميم والهندسة' },
  { number: 20, title: 'فني متخصص', description: 'خبراء في التنفيذ والتركيب' },
  { number: 15, title: 'عامل مدرب', description: 'عمالة مدربة على أعلى المعايير' },
  { number: 5, title: 'خدمة عملاء', description: 'فريق متفرغ لخدمتكم على مدار الساعة' },
]

const achievements = [
  { number: 500, title: 'مشروع مكتمل', icon: '🎯' },
  { number: 98, title: '% رضا العملاء', icon: '😊' },
  { number: 10, title: 'سنوات خبرة', icon: '📅' },
  { number: 50, title: 'فريق العمل', icon: '👥' },
]

const certifications = [
  { 
    title: 'ترخيص وزارة التجارة',
    description: 'مرخص رسمياً لممارسة النشاط التجاري',
    number: 'TR-2014-001'
  },
  { 
    title: 'عضو الغرفة التجارية بجدة',
    description: 'عضو فعال في الغرفة التجارية الصناعية',
    number: 'CC-JED-2015'
  },
  { 
    title: 'شهادة الجودة ISO 9001',
    description: 'معتمدون في إدارة الجودة الشاملة',
    number: 'ISO-9001-2020'
  },
  { 
    title: 'شهادة السلامة والصحة المهنية',
    description: 'ملتزمون بأعلى معايير السلامة',
    number: 'OSHA-2021'
  },
]

export default function EnhancedAboutPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  return (
    <div className="space-y-0">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay={isVideoPlaying}
            muted={isMuted}
            loop
            playsInline
          >
            <source src={getVideoPath('landscape-design-build.mp4')} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        {/* Video Controls */}
        <div className="absolute top-6 right-6 flex gap-2 z-20">
          <button
            onClick={() => setIsVideoPlaying(!isVideoPlaying)}
            className="w-10 h-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all duration-300"
          >
            {isVideoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 mr-0.5" />}
          </button>
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="w-10 h-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all duration-300"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>

        {/* Hero Content */}
        <div className="container relative z-10">
          <div className="max-w-4xl text-white">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium">رواد تنسيق الحدائق في جدة منذ 2014</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block mb-2">نحن لا نصمم حدائق</span>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                نخلق أحلاماً
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              منذ 10 سنوات ونحن نحول المساحات العادية إلى واحات خضراء استثنائية، 
              بفضل فريق من 50+ محترف وخبرة في تنفيذ 500+ مشروع ناجح
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-1">{achievement.icon}</div>
                  <div className="text-3xl font-bold text-primary">
                    <AnimatedCounter end={achievement.number} />
                    {achievement.title.includes('%') && '%'}
                    {achievement.title.includes('+') && '+'}
                  </div>
                  <div className="text-sm text-gray-300">{achievement.title.replace(/[+%]/g, '')}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Story with Rich Media */}
      <section className="section bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium">قصة نجاح ملهمة</span>
              </div>
              
              <h2 className="arabic-title mb-6">رحلتنا من البداية</h2>
              
              <div className="space-y-6 text-gray-700">
                <div className="bg-white p-6 rounded-xl shadow-sm border-r-4 border-primary">
                  <h3 className="font-bold text-lg mb-2 text-primary">البداية (2014)</h3>
                  <p className="leading-relaxed">
                    بدأت رحلتنا بحلم بسيط: تحويل جدة إلى مدينة أكثر خضرة وجمالاً. 
                    انطلقنا بفريق من 5 أشخاص وورشة صغيرة، لكن برؤية كبيرة وطموح لا يحده حدود.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border-r-4 border-secondary">
                  <h3 className="font-bold text-lg mb-2 text-secondary">النمو (2016-2020)</h3>
                  <p className="leading-relaxed">
                    مع كل مشروع، نمت خبرتنا وثقة عملائنا. أضفنا خدمات جديدة كالعشب الصناعي 
                    والأنظمة الذكية، ووسعنا فريقنا ليشمل مهندسين ومصممين متخصصين.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border-r-4 border-green-500">
                  <h3 className="font-bold text-lg mb-2 text-green-600">الريادة (2021-2024)</h3>
                  <p className="leading-relaxed">
                    اليوم، نفخر بأننا الخيار الأول لآلاف العائلات في جدة. نمتلك فريقاً من 50+ محترف 
                    ونفذنا أكثر من 500 مشروع، من الحدائق المنزلية إلى المجمعات الكبيرة.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Before/After Showcase */}
              <div className="relative h-80 rounded-2xl overflow-hidden group">
                <Image
                  src="/images/before-after-outdoor.webp"
                  alt="قبل وبعد - تحويل المساحات"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold mb-2">تحويل حقيقي للمساحات</h3>
                  <p className="text-sm opacity-90">شاهد كيف نحول الأحلام إلى واقع</p>
                </div>
              </div>

              {/* Team Photo */}
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <Image
                  src="/images/landscape-design-build-1.webp"
                  alt="فريق العمل المتخصص"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold mb-2">فريق من المحترفين</h3>
                  <p className="text-sm opacity-90">خبرة تراكمية تزيد عن 200 سنة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Enhanced */}
      <section className="section bg-gradient-to-r from-primary to-primary-600 text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">رؤيتنا ورسالتنا</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              نؤمن أن كل مساحة خضراء هي استثمار في جودة الحياة والبيئة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">رؤيتنا</h3>
              </div>
              <p className="text-lg leading-relaxed opacity-90">
                أن نصبح الشركة الرائدة في المملكة العربية السعودية لخدمات تنسيق الحدائق والمساحات الخضراء، 
                ونساهم في تحويل كل مدينة إلى واحة خضراء مستدامة تعكس جمال وثراء بيئتنا العربية.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">رسالتنا</h3>
              </div>
              <p className="text-lg leading-relaxed opacity-90">
                نلتزم بتقديم خدمات تنسيق حدائق استثنائية تجمع بين الإبداع والاستدامة والجودة العالية، 
                مستخدمين أحدث التقنيات والممارسات البيئية لخلق مساحات خضراء تثري حياة عملائنا.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="arabic-title mb-4">القيم التي تحركنا</h2>
            <p className="arabic-body text-gray-600 max-w-2xl mx-auto">
              نؤمن أن النجاح الحقيقي يبدأ من القيم الراسخة والمبادئ الأصيلة
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group hover-lift">
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-primary/10 group-hover:to-primary/20 transition-all duration-300`}>
                    <value.icon className={`w-8 h-8 ${value.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center group-hover:text-primary transition-colors">{value.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="section bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="arabic-title mb-4">مسيرة عشر سنوات من النجاح</h2>
            <p className="arabic-body text-gray-600 max-w-2xl mx-auto">
              كل عام كان محطة مهمة في رحلتنا نحو التميز والريادة
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute right-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary opacity-30" />
              
              {/* Timeline Items */}
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-center group">
                    {/* Timeline Dot */}
                    <div className="absolute right-6 w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-300 z-10">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    
                    {/* Content Card */}
                    <div className="mr-16 flex-1">
                      <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 group-hover:-translate-y-1">
                        <div className="flex items-start gap-4">
                          <div className="text-3xl">{milestone.icon}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-3">
                              <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                              <div className="h-px bg-gradient-to-r from-primary/50 to-transparent flex-1" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                            <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Statistics with Animation */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="arabic-title mb-4">فريقنا المتميز</h2>
            <p className="arabic-body text-gray-600 max-w-2xl mx-auto">
              نفخر بفريقنا المكون من نخبة من المحترفين المتخصصين في جميع جوانب تنسيق الحدائق
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <div key={index} className="text-center group hover-lift">
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl border border-gray-100 hover:border-primary/20 transition-all duration-300">
                  <div className="text-5xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                    <AnimatedCounter end={stat.number} />+
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{stat.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Team Showcase Images */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-2xl overflow-hidden group">
              <Image
                src="/images/green-wall-design.webp"
                alt="فريق التصميم"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-bold">فريق التصميم</h3>
                <p className="text-sm opacity-90">مهندسون ومصممون محترفون</p>
              </div>
            </div>
            
            <div className="relative h-64 rounded-2xl overflow-hidden group">
              <Image
                src="/images/irrigation-jeddah.webp"
                alt="فريق التنفيذ"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-bold">فريق التنفيذ</h3>
                <p className="text-sm opacity-90">فنيون وعمال متخصصون</p>
              </div>
            </div>
            
            <div className="relative h-64 rounded-2xl overflow-hidden group">
              <Image
                src="/images/garden-maintenance-jeddah.webp"
                alt="فريق الصيانة"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-bold">فريق الصيانة</h3>
                <p className="text-sm opacity-90">خبراء الرعاية والصيانة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Certifications */}
      <section className="section bg-gray-900 text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">شهاداتنا وتراخيصنا</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              حاصلون على جميع التراخيص والشهادات المطلوبة ومعتمدون من أعلى الجهات
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 group hover-lift">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-center">{cert.title}</h3>
                <p className="text-sm text-gray-300 text-center mb-3 leading-relaxed">{cert.description}</p>
                <div className="text-xs text-primary font-mono text-center opacity-75">{cert.number}</div>
              </div>
            ))}
          </div>
          
          {/* Trust Badges */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-8 p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm">مؤمن بالكامل</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-sm">معتمد رسمياً</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400" />
                <span className="text-sm">ضمان شامل</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-400" />
                <span className="text-sm">خدمة 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
