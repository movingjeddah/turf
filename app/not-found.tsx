import Link from 'next/link'
import { Home, Search, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { routes } from '@/lib/routes'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-600 opacity-80">404</h1>
        </div>
        
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          الصفحة غير موجودة
        </h2>
        
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها. قد تكون الصفحة قد تم نقلها أو حذفها.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={routes.home}>
            <Button className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              العودة للرئيسية
            </Button>
          </Link>
          
          <Link href={routes.services.index}>
            <Button variant="outline" className="flex items-center gap-2">
              <Search className="w-4 h-4" />
              استعرض خدماتنا
            </Button>
          </Link>
          
          <Link href={routes.contact}>
            <Button variant="outline" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              اتصل بنا
            </Button>
          </Link>
        </div>
        
        <div className="mt-12 p-6 bg-primary-50 rounded-lg max-w-md mx-auto">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            قد تكون مهتماً بـ:
          </h3>
          <ul className="text-right space-y-2">
            <li>
              <Link href={routes.services.bySlug('landscaping')} className="text-primary hover:underline">
                • تنسيق حدائق في جدة
              </Link>
            </li>
            <li>
              <Link href={routes.services.bySlug('artificial-grass')} className="text-primary hover:underline">
                • تركيب عشب صناعي
              </Link>
            </li>
            <li>
              <Link href={routes.pricing} className="text-primary hover:underline">
                • أسعار خدماتنا
              </Link>
            </li>
            <li>
              <Link href={routes.portfolio} className="text-primary hover:underline">
                • معرض أعمالنا
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
