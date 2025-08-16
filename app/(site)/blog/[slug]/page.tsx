import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/Hero'
import CTA from '@/components/CTA'
import Breadcrumbs from '@/components/Breadcrumbs'
import { blogPosts } from '@/content/blog'
import { routes } from '@/lib/routes'
import { generateBlogPostSchema, generateBreadcrumbSchema } from '@/lib/ldjson'
import { Calendar, Clock, User, Tag, ArrowLeft } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import ShareButtons from '@/components/ShareButtons'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug)
  if (!post) return {}
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags: post.tags,
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug)
  
  if (!post) {
    notFound()
  }
  
  const breadcrumbs = [
    { name: 'الرئيسية', url: routes.home },
    { name: 'المدونة', url: routes.blog.index },
    { name: post.title, url: routes.blog.post(post.slug) },
  ]
  
  const blogPostSchema = generateBlogPostSchema(post)
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)
  
  // Get related posts (same category, different post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([blogPostSchema, breadcrumbSchema]),
        }}
      />
      
      <Hero
        title={post.title}
        description={post.excerpt}
        image={post.image}
      />
      
      <Breadcrumbs items={breadcrumbs} />
      
      <article className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-8">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString('ar-SA', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime} دقائق قراءة
              </span>
              <span className="flex items-center gap-1">
                <Tag className="w-4 h-4" />
                {post.category}
              </span>
            </div>
            
            {/* Featured Image */}
            <div className="relative h-96 rounded-lg overflow-hidden mb-8">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
            
            {/* Tags */}
            <div className="mt-8 pt-8 border-t">
              <h3 className="text-lg font-semibold mb-4">الوسوم</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Share Buttons */}
            <ShareButtons title={post.title} />
          </div>
        </div>
      </article>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section bg-gray-50">
          <div className="container">
            <h2 className="arabic-title text-center mb-12">مقالات ذات صلة</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={routes.blog.post(relatedPost.slug)}
                  className="card-hover group"
                >
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {relatedPost.excerpt}
                    </p>
                    <span className="text-primary font-medium inline-flex items-center gap-1 text-sm">
                      اقرأ المزيد
                      <ArrowLeft className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      
      <CTA
        title="هل تحتاج مساعدة في تنسيق حديقتك؟"
        description="فريقنا من الخبراء جاهز لتحويل أفكارك إلى واقع"
      />
    </>
  )
} 