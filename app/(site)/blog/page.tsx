import Hero from '@/components/Hero'
import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '@/content/blog'
import { routes } from '@/lib/routes'
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'المدونة',
  description: 'نصائح ومقالات مفيدة حول تنسيق الحدائق، العشب الصناعي، والعناية بالحدائق في جدة.',
}

export default function BlogPage() {
  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )

  // Get featured post (first post)
  const featuredPost = sortedPosts[0]
  const otherPosts = sortedPosts.slice(1)

  return (
    <>
      <Hero
        title="مدونة تنسيق الحدائق"
        description="نصائح الخبراء ومقالات مفيدة لمساعدتك في تحويل حديقتك إلى واحة خضراء"
        image="/images/landscape-design-build-1.webp"
      />
      
      <section className="section">
        <div className="container">
          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-16">
              <h2 className="arabic-subtitle mb-8">المقال المميز</h2>
              <Link href={routes.blog.post(featuredPost.slug)} className="group">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 card p-0 overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.publishedAt).toLocaleDateString('ar-SA')}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime} دقائق قراءة
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Tag className="w-4 h-4 text-primary" />
                        <span className="text-sm text-primary">{featuredPost.category}</span>
                      </div>
                      <span className="text-primary font-semibold inline-flex items-center gap-1">
                        اقرأ المزيد
                        <ArrowLeft className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Categories Filter */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">الفئات</h3>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-primary text-white rounded-full">
                جميع المقالات
              </button>
              {Array.from(new Set(blogPosts.map(post => post.category))).map(category => (
                <button
                  key={category}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Other Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPosts.map((post) => (
              <Link
                key={post.slug}
                href={routes.blog.post(post.slug)}
                className="card-hover group"
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-md text-sm">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.publishedAt).toLocaleDateString('ar-SA')}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime} دقائق
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <span className="text-primary font-medium inline-flex items-center gap-1 text-sm">
                    اقرأ المزيد
                    <ArrowLeft className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 bg-primary/5 rounded-lg p-8 text-center">
            <h2 className="arabic-subtitle mb-4">اشترك في نشرتنا البريدية</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              احصل على أحدث النصائح والمقالات حول تنسيق الحدائق مباشرة في بريدك الإلكتروني
            </p>
            <form className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                dir="ltr"
              />
              <button
                type="submit"
                className="btn btn-primary"
              >
                اشترك الآن
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
} 