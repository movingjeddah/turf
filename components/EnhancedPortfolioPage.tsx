'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Filter, 
  Eye, 
  Calendar, 
  MapPin, 
  Star, 
  Award, 
  CheckCircle, 
  TrendingUp,
  Users,
  Clock,
  Ruler,
  Camera,
  Video,
  Grid3X3,
  List,
  Search,
  ArrowRight,
  Heart,
  Share2
} from 'lucide-react'
import { videos, getVideoPath } from '@/lib/videos'
import { services } from '@/content/services'

// Portfolio projects with real video integration
const portfolioProjects = [
  {
    id: 1,
    title: 'فيلا سكنية فاخرة - حي الصفا',
    category: 'مشاريع سكنية',
    type: 'video',
    media: 'landscape-design-build.mp4',
    thumbnail: '/images/landscape-design-build.webp',
    client: 'عائلة الأحمد',
    location: 'جدة - حي الصفا',
    area: '600 متر مربع',
    duration: '25 يوم',
    budget: '150,000 ريال',
    completedDate: '2024-03-15',
    rating: 5,
    description: 'تصميم وتنفيذ حديقة فيلا سكنية بتصميم عصري يجمع بين الجمال والوظيفية',
    features: ['تنسيق حدائق', 'عشب صناعي', 'نظام ري ذكي', 'إضاءة ليلية', 'مناطق جلوس'],
    beforeAfter: true,
    featured: true
  },
  {
    id: 2,
    title: 'تركيب عشب صناعي - حي النهضة',
    category: 'عشب صناعي',
    type: 'video',
    media: 'low-maintenance-artificial-grass-installation-backyard-makeover.mp4',
    thumbnail: '/images/artificial-grass-range.webp',
    client: 'شركة النخبة',
    location: 'جدة - حي النهضة',
    area: '400 متر مربع',
    duration: '12 يوم',
    budget: '35,000 ريال',
    completedDate: '2024-02-20',
    rating: 5,
    description: 'تركيب عشب صناعي عالي الجودة مع تحويل شامل للفناء الخلفي',
    features: ['عشب صناعي مقاوم', 'تصريف مياه', 'حواف احترافية', 'ضمان 10 سنوات'],
    beforeAfter: true,
    featured: true
  },
  {
    id: 3,
    title: 'ملعب جولف منزلي - حي الشاطئ',
    category: 'مشاريع خاصة',
    type: 'video',
    media: 'putting-green-work-in-progress-artificial-turf-ideas.mp4',
    thumbnail: '/images/turf-grass.webp',
    client: 'الأستاذ محمد الزهراني',
    location: 'جدة - حي الشاطئ',
    area: '150 متر مربع',
    duration: '10 أيام',
    budget: '45,000 ريال',
    completedDate: '2024-01-10',
    rating: 5,
    description: 'إنشاء ملعب جولف صغير احترافي في الحديقة المنزلية',
    features: ['عشب جولف متخصص', 'تضاريس طبيعية', 'حفر متعددة', 'إضاءة متخصصة'],
    beforeAfter: false,
    featured: true
  },
  {
    id: 4,
    title: 'حدائق التراس المذهلة - حي الزهراء',
    category: 'حدائق أسطح',
    type: 'video',
    media: 'stunning-terrace-garden-ideas.mp4',
    thumbnail: '/images/green-wall-design.webp',
    client: 'مجمع الياسمين السكني',
    location: 'جدة - حي الزهراء',
    area: '200 متر مربع',
    duration: '18 يوم',
    budget: '85,000 ريال',
    completedDate: '2023-12-05',
    rating: 5,
    description: 'تصميم وتنفيذ حدائق أسطح مع جدران خضراء وأنظمة ري ذكية',
    features: ['جدران خضراء', 'نباتات متنوعة', 'نظام ري ذكي', 'مقاعد مدمجة'],
    beforeAfter: true,
    featured: false
  },
  {
    id: 5,
    title: 'تزيين الفناء الأمامي - حي المحمدية',
    category: 'تنسيق أمامي',
    type: 'video',
    media: 'front-yard-decoration.mp4',
    thumbnail: '/images/landscape-design-build-1.webp',
    client: 'عائلة السعيد',
    location: 'جدة - حي المحمدية',
    area: '180 متر مربع',
    duration: '8 أيام',
    budget: '28,000 ريال',
    completedDate: '2023-11-20',
    rating: 4.5,
    description: 'تزيين وتنسيق الفناء الأمامي لإضافة جمال وجاذبية للمنزل',
    features: ['تصميم جذاب', 'نباتات موسمية', 'ممرات مرصوفة', 'إضاءة ليلية'],
    beforeAfter: true,
    featured: false
  },
  {
    id: 6,
    title: 'برجولا حديثة - حي الروضة',
    category: 'برجولات ومظلات',
    type: 'video',
    media: 'pergolas-modern.mp4',
    thumbnail: '/images/pergola-design.webp',
    client: 'مؤسسة الروضة',
    location: 'جدة - حي الروضة',
    area: '80 متر مربع',
    duration: '15 يوم',
    budget: '55,000 ريال',
    completedDate: '2023-10-12',
    rating: 5,
    description: 'تركيب برجولا حديثة مع مناطق جلوس وإضاءة متكاملة',
    features: ['برجولا خشبية', 'إضاءة LED', 'مقاعد مدمجة', 'نباتات متسلقة'],
    beforeAfter: false,
    featured: false
  }
]

const filterCategories = [
  { id: 'all', name: 'جميع المشاريع', count: portfolioProjects.length },
  { id: 'مشاريع سكنية', name: 'مشاريع سكنية', count: portfolioProjects.filter(p => p.category === 'مشاريع سكنية').length },
  { id: 'عشب صناعي', name: 'عشب صناعي', count: portfolioProjects.filter(p => p.category === 'عشب صناعي').length },
  { id: 'مشاريع خاصة', name: 'مشاريع خاصة', count: portfolioProjects.filter(p => p.category === 'مشاريع خاصة').length },
  { id: 'حدائق أسطح', name: 'حدائق أسطح', count: portfolioProjects.filter(p => p.category === 'حدائق أسطح').length },
  { id: 'تنسيق أمامي', name: 'تنسيق أمامي', count: portfolioProjects.filter(p => p.category === 'تنسيق أمامي').length },
  { id: 'برجولات ومظلات', name: 'برجولات ومظلات', count: portfolioProjects.filter(p => p.category === 'برجولات ومظلات').length },
]

const achievementStats = [
  { number: 500, title: 'مشروع مكتمل', icon: TrendingUp, color: 'text-blue-600' },
  { number: 98, title: '% رضا العملاء', icon: Heart, color: 'text-red-600' },
  { number: 50, title: 'فريق محترف', icon: Users, color: 'text-green-600' },
  { number: 10, title: 'سنوات خبرة', icon: Award, color: 'text-purple-600' }
]

export default function EnhancedPortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProject, setSelectedProject] = useState<typeof portfolioProjects[0] | null>(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const filteredProjects = portfolioProjects.filter(project => {
    const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory
    const searchMatch = searchTerm === '' || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase())
    return categoryMatch && searchMatch
  })

  const featuredProjects = portfolioProjects.filter(p => p.featured)

  const handleVideoControl = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="space-y-0">
      {/* Hero Section with Featured Project Video */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted={isMuted}
            loop
            playsInline
            onPlay={() => setIsVideoPlaying(true)}
            onPause={() => setIsVideoPlaying(false)}
          >
            <source src={getVideoPath('inspirational-backyard-ideas-luxury-lifestyle.mp4')} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        {/* Video Controls */}
        <div className="absolute top-6 right-6 flex gap-2 z-20">
          <button
            onClick={handleVideoControl}
            className="w-10 h-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all duration-300"
          >
            {isVideoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 mr-0.5" />}
          </button>
          <button
            onClick={toggleMute}
            className="w-10 h-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all duration-300"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>

        {/* Hero Content */}
        <div className="container relative z-10">
          <div className="max-w-4xl text-white">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">500+ مشروع مكتمل بنجاح</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block mb-2">معرض</span>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                أعمالنا المميزة
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              نفخر بعرض مجموعة من أفضل مشاريعنا في تنسيق الحدائق والعشب الصناعي 
              في جدة والمنطقة الغربية. كل مشروع قصة نجاح وحلم أصبح حقيقة.
            </p>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {achievementStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">
                    {stat.number}{stat.title.includes('%') && '%'}+
                  </div>
                  <div className="text-sm text-gray-300">{stat.title.replace(/[+%]/g, '')}</div>
                </div>
              ))}
            </div>

            {/* Quick Navigation */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                استعرض جميع المشاريع
              </button>
              <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                المشاريع المميزة
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="section bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="ابحث في المشاريع..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">العرض:</span>
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded transition-colors ${viewMode === 'grid' ? 'bg-white text-primary shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded transition-colors ${viewMode === 'list' ? 'bg-white text-primary shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            {filterCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>

          {/* Projects Grid/List */}
          <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}`}>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`group cursor-pointer hover-lift ${viewMode === 'list' ? 'flex gap-6' : ''}`}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Media */}
                <div className={`relative overflow-hidden rounded-2xl ${viewMode === 'list' ? 'w-80 h-48 flex-shrink-0' : 'aspect-video'} bg-gray-900`}>
                  <video
                    className="w-full h-full object-cover"
                    muted
                    loop
                    preload="metadata"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause()
                      e.currentTarget.currentTime = 0
                    }}
                  >
                    <source src={getVideoPath(project.media)} type="video/mp4" />
                  </video>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                      <Play className="w-8 h-8 text-primary mr-1" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 left-4 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < project.rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
                      />
                    ))}
                  </div>

                  {/* Project Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm opacity-90 mb-3 line-clamp-2">{project.description}</p>
                    
                    {/* Project Details */}
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Ruler className="w-3 h-3" />
                        <span>{project.area}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{project.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* List View Content */}
                {viewMode === 'list' && (
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">{project.budget}</div>
                        <div className="text-sm text-gray-500">الميزانية</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-500">العميل</div>
                        <div className="font-medium">{project.client}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">المساحة</div>
                        <div className="font-medium">{project.area}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">المدة</div>
                        <div className="font-medium">{project.duration}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">التقييم</div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="font-medium">{project.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.features.slice(0, 4).map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 4 && (
                        <span className="text-xs text-gray-500">+{project.features.length - 4} المزيد</span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">لا توجد مشاريع</h3>
              <p className="text-gray-600 mb-4">لم نجد مشاريع تطابق بحثك. جرب البحث بكلمات أخرى.</p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
                }}
                className="text-primary hover:text-primary/80 font-semibold"
              >
                إعادة تعيين الفلترة
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="relative">
              <div className="aspect-video bg-gray-900 rounded-t-2xl overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                >
                  <source src={getVideoPath(selectedProject.media)} type="video/mp4" />
                </video>
              </div>
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all duration-300"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                  <p className="text-gray-600 text-lg">{selectedProject.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{selectedProject.budget}</div>
                  <div className="text-sm text-gray-500">الميزانية الإجمالية</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold">{selectedProject.client}</div>
                  <div className="text-sm text-gray-500">العميل</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold">{selectedProject.location}</div>
                  <div className="text-sm text-gray-500">الموقع</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Ruler className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold">{selectedProject.area}</div>
                  <div className="text-sm text-gray-500">المساحة</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold">{selectedProject.duration}</div>
                  <div className="text-sm text-gray-500">مدة التنفيذ</div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">ميزات المشروع</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {selectedProject.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < selectedProject.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">تقييم العميل: {selectedProject.rating}/5</span>
                </div>
                
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    <Heart className="w-4 h-4" />
                    إعجاب
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    <Share2 className="w-4 h-4" />
                    مشاركة
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Statistics Section */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">إحصائيات مشاريعنا</h2>
            <p className="text-xl opacity-90">أرقام تتحدث عن خبرتنا وجودة أعمالنا</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-3">500+</div>
              <div className="text-lg opacity-90">حديقة منزلية</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-3">200+</div>
              <div className="text-lg opacity-90">مشروع عشب صناعي</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-3">150+</div>
              <div className="text-lg opacity-90">مظلة وبرجولا</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-3">100+</div>
              <div className="text-lg opacity-90">شلال ونافورة</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
