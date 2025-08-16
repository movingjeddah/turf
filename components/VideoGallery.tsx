'use client'

import { useState, useRef } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize, X } from 'lucide-react'
import { Video, getVideoPath } from '@/lib/videos'

interface VideoGalleryProps {
  videos: Video[]
  title?: string
  description?: string
  showFilters?: boolean
  columns?: 1 | 2 | 3 | 4
  autoplay?: boolean
}

export default function VideoGallery({ 
  videos, 
  title = 'معرض الفيديوهات',
  description,
  showFilters = true,
  columns = 3,
  autoplay = false
}: VideoGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('الكل')
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const fullscreenRef = useRef<HTMLDivElement>(null)

  // تصفية الفيديوهات حسب الفئة
  const categories = ['الكل', ...Array.from(new Set(videos.map(v => v.category)))]
  const filteredVideos = selectedCategory === 'الكل' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory)

  const handleVideoSelect = (video: Video) => {
    setCurrentVideo(video)
    setIsPlaying(autoplay)
    setIsMuted(true)
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (!isFullscreen && fullscreenRef.current) {
      fullscreenRef.current.requestFullscreen()
      setIsFullscreen(true)
    } else if (document.fullscreenElement) {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const closeVideo = () => {
    setCurrentVideo(null)
    setIsPlaying(false)
  }

  return (
    <section className="section bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        {/* العنوان والوصف */}
        <div className="text-center mb-12">
          <h2 className="arabic-title mb-4">{title}</h2>
          {description && (
            <p className="arabic-body text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* فلاتر الفئات */}
        {showFilters && (
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* شبكة الفيديوهات */}
        <div className={`grid gap-6 mb-8 ${
          columns === 1 ? 'grid-cols-1' :
          columns === 2 ? 'grid-cols-1 md:grid-cols-2' :
          columns === 3 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :
          'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
        }`}>
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer hover-lift"
              onClick={() => handleVideoSelect(video)}
            >
              {/* معاينة الفيديو */}
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  muted
                  preload="metadata"
                >
                  <source src={getVideoPath(video.fileName)} type="video/mp4" />
                </video>
                
                {/* تراكب التشغيل */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-primary mr-1" />
                  </div>
                </div>

                {/* شارة الفئة */}
                <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {video.category.replace('-', ' ')}
                </div>

                {/* المدة */}
                {video.duration && (
                  <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                )}
              </div>

              {/* معلومات الفيديو */}
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {video.description}
                </p>
                
                {/* التصنيفات */}
                <div className="flex flex-wrap gap-2">
                  {video.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* عارض الفيديو المنبثق */}
        {currentVideo && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div ref={fullscreenRef} className="relative w-full max-w-4xl">
              {/* الفيديو */}
              <video
                ref={videoRef}
                className="w-full aspect-video rounded-lg"
                controls={false}
                autoPlay={autoplay}
                muted={isMuted}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src={getVideoPath(currentVideo.fileName)} type="video/mp4" />
              </video>

              {/* أدوات التحكم */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 mr-1" />}
                    </button>
                    
                    <button
                      onClick={toggleMute}
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={toggleFullscreen}
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      <Maximize className="w-5 h-5" />
                    </button>
                    
                    <button
                      onClick={closeVideo}
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* معلومات الفيديو */}
              <div className="absolute top-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
                <h3 className="font-bold text-xl mb-2">{currentVideo.title}</h3>
                <p className="text-sm opacity-90">{currentVideo.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
