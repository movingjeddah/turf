import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import { routes } from '@/lib/routes'

export const metadata = {
  title: 'شكراً لك',
  description: 'شكراً لتواصلك معنا. سنقوم بالرد عليك في أقرب وقت ممكن.',
  robots: 'noindex,nofollow',
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full mx-auto p-6">
        <div className="text-center">
          <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          
          <h1 className="text-3xl font-bold mb-4">شكراً لتواصلك معنا!</h1>
          
          <p className="text-gray-600 mb-8">
            تم استلام رسالتك بنجاح. سيقوم فريقنا بمراجعة طلبك والتواصل معك خلال 24 ساعة.
          </p>
          
          <div className="space-y-4">
            <Link href={routes.home} className="block">
              <Button className="w-full">
                العودة للصفحة الرئيسية
              </Button>
            </Link>
            
            <Link href={routes.services.index} className="block">
              <Button variant="outline" className="w-full">
                تصفح خدماتنا
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>نصيحة:</strong> احفظ رقمنا في جوالك لتتمكن من التواصل معنا بسهولة عبر الواتساب.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 