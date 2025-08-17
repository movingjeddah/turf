'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Play, Clock, Eye, ArrowLeft } from 'lucide-react'
import { getFeaturedVideos, getVideoPath } from '@/lib/videos'
import { routes } from '@/lib/routes'

export default function FeaturedVideosSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const featuredVideos = getFeaturedVideos()

  const handleVideoPlay = (videoId: string) => {
    setSelectedVideo(videoId)
  }

  return (
    <section className="section bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="arabic-title mb-4">شاهد أعمالنا في الفيديو</h2>
          <p className="arabic-body text-gray-600 max-w-2xl mx-auto">
            مجموعة مختارة من أفضل مشاريعنا المصورة لترى كيف نحول أحلامك إلى واقع أخضر جميل
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* الفيديو الرئيسي */}
          {featuredVideos[0] && (
            <div className="lg:row-span-2">
              <div className="relative h-96 lg:h-full rounded-2xl overflow-hidden group cursor-pointer bg-gradient-to-br from-primary/20 to-secondary/20">
                <video
                  className="w-full h-full object-cover"
                  muted
                  loop
                  preload="metadata"
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause()
                    e.currentTarget.currentTime = 0
                  }}
                  onTouchStart={(e) => e.currentTarget.play()}
                  onClick={(e) => {
                    if (e.currentTarget.paused) {
                      e.currentTarget.play()
                    } else {
                      e.currentTarget.pause()
                    }
                  }}
                >
                  <source src={getVideoPath(featuredVideos[0].fileName)} type="video/mp4" />
                </video>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                
                {/* زر التشغيل الكبير */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => handleVideoPlay(featuredVideos[0].id)}
                    className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-transform duration-300 touch-manipulation"
                  >
                    <Play className="w-10 h-10 text-primary mr-1" />
                  </button>
                </div>

                {/* معلومات الفيديو */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="mb-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      مميز
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {featuredVideos[0].title}
                  </h3>
                  <p className="text-gray-200 mb-4 leading-relaxed">
                    {featuredVideos[0].description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-white/80">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{featuredVideos[0].duration || '3:30'}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">1.2K مشاهدة</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* الفيديوهات الجانبية */}
          <div className="space-y-6">
            {featuredVideos.slice(1, 3).map((video) => (
              <div
                key={video.id}
                className="flex gap-4 group cursor-pointer hover:bg-white active:bg-gray-50 p-4 rounded-xl transition-colors duration-300 touch-manipulation"
                onClick={() => handleVideoPlay(video.id)}
              >
                <div className="relative w-32 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-primary/20 to-secondary/20">
                  <video
                    className="w-full h-full object-cover"
                    muted
                    preload="metadata"
                    playsInline
                    onTouchStart={(e) => e.currentTarget.play()}
                    onClick={(e) => {
                      e.preventDefault()
                      handleVideoPlay(video.id)
                    }}
                  >
                    <source src={getVideoPath(video.fileName)} type="video/mp4" />
                  </video>
                  
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-300">
                      <Play className="w-4 h-4 text-primary mr-0.5" />
                    </div>
                  </div>

                  {/* المدة */}
                  <div className="absolute bottom-1 right-1 bg-black/70 text-white px-1 py-0.5 rounded text-xs">
                    {video.duration || '2:45'}
                  </div>
                </div>

                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {video.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                    {video.description}
                  </p>
                  
                  <div className="flex items-center gap-3 text-gray-500 text-xs">
                    <span>{video.category.replace('-', ' ')}</span>
                    <span>•</span>
                    <span>500+ مشاهدة</span>
                  </div>
                </div>
              </div>
            ))}

            {/* كارد دعوة لمشاهدة المزيد */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl border border-primary/20">
              <h4 className="font-bold text-xl mb-2">شاهد المزيد من أعمالنا</h4>
              <p className="text-gray-600 mb-4">
                اكتشف مكتبة كاملة من الفيديوهات التعليمية والمشاريع المنجزة
              </p>
              <Link
                href={routes.portfolio}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
              >
                معرض الفيديوهات الكامل
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* إحصائيات سريعة */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-gray-600 text-sm">فيديو مشروع</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">50K+</div>
              <div className="text-gray-600 text-sm">مشاهدة إجمالية</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500 mb-2">4.9</div>
              <div className="text-gray-600 text-sm">تقييم المحتوى</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-500 mb-2">100%</div>
              <div className="text-gray-600 text-sm">مشاريع حقيقية</div>
            </div>
          </div>
        </div>

        {/* عارض الفيديو المنبثق */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-8 md:-top-12 right-0 text-white text-xl hover:text-gray-300 active:text-gray-400 transition-colors touch-manipulation bg-black/50 rounded-full w-8 h-8 md:w-auto md:h-auto md:bg-transparent flex items-center justify-center"
              >
                ✕ <span className="hidden md:inline mr-2">إغلاق</span>
              </button>
              
              <video
                className="w-full aspect-video rounded-lg"
                controls
                autoPlay
                playsInline
                controlsList="nodownload"
                onContextMenu={(e) => e.preventDefault()}
              >
                <source 
                  src={getVideoPath(featuredVideos.find(v => v.id === selectedVideo)?.fileName || '')} 
                  type="video/mp4" 
                />
                المتصفح الخاص بك لا يدعم تشغيل الفيديو.
              </video>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
