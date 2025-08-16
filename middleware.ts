import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Clone the request headers
  const requestHeaders = new Headers(request.headers)
  
  // Add security headers
  requestHeaders.set('X-DNS-Prefetch-Control', 'on')
  requestHeaders.set('X-Frame-Options', 'SAMEORIGIN')
  requestHeaders.set('X-Content-Type-Options', 'nosniff')
  requestHeaders.set('Referrer-Policy', 'origin-when-cross-origin')
  
  // Create response
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
  
  // Add security headers to response
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin')
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 