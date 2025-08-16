import Link from 'next/link'
import Image from 'next/image'
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react'
import { routes } from '@/lib/routes'
import { blogPosts } from '@/content/blog'

export default function LatestBlogSection() {
  // أحدث 3 مقالات
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <section className="section bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="arabic-title mb-4">أحدث المقالات</h2>
          <p className="arabic-body text-gray-600 max-w-2xl mx-auto">
            اكتشف أحدث النصائح والإرشادات في عالم تنسيق الحدائق والعناية بالنباتات
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {latestPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={routes.blog.post(post.slug)}
              className={`card-hover group ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <article className="h-full flex flex-col">
                {/* صورة المقال */}
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* شارة الفئة */}
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>

                  {/* وقت القراءة */}
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>

                {/* محتوى المقال */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  {/* التاريخ والكاتب */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.publishedAt).toLocaleDateString('ar-SA')}</span>
                    </div>
                  </div>

                  {/* التصنيفات */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* زر القراءة */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-medium group-hover:underline">
                        اقرأ المزيد
                      </span>
                      <ArrowLeft className="w-4 h-4 text-primary group-hover:-translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* رابط المدونة */}
        <div className="text-center">
          <Link
            href={routes.blog.index}
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <span>عرض جميع المقالات</span>
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* إحصائيات المدونة */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{blogPosts.length}</div>
              <div className="text-gray-600">مقال منشور</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">1000+</div>
              <div className="text-gray-600">قارئ شهرياً</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4.8</div>
              <div className="text-gray-600">تقييم المحتوى</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
