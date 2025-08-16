'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { routes } from '@/lib/routes'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <AlertTriangle className="mx-auto h-24 w-24 text-yellow-500" />
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          حدث خطأ غير متوقع
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          نعتذر عن الإزعاج. حدث خطأ أثناء معالجة طلبك. يرجى المحاولة مرة أخرى أو العودة للصفحة الرئيسية.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => reset()}
            className="flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            حاول مرة أخرى
          </Button>
          
          <Link href={routes.home}>
            <Button variant="outline" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              العودة للرئيسية
            </Button>
          </Link>
        </div>
        
        {process.env.NODE_ENV === 'development' && error.digest && (
          <div className="mt-8 p-4 bg-gray-100 rounded-lg max-w-2xl mx-auto">
            <p className="text-sm text-gray-600 font-mono text-left">
              Error ID: {error.digest}
            </p>
            <details className="mt-2">
              <summary className="cursor-pointer text-sm text-gray-600">
                تفاصيل الخطأ (للمطورين)
              </summary>
              <pre className="mt-2 text-xs text-left overflow-auto p-2 bg-white rounded">
                {error.stack}
              </pre>
            </details>
          </div>
        )}
      </div>
    </div>
  )
}
