import EnhancedHeader from '@/components/EnhancedHeader'
import EnhancedFooter from '@/components/EnhancedFooter'
import StickyCTA from '@/components/StickyCTA'

import React from 'react'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <EnhancedHeader />
      <main className="min-h-screen">
        {children}
      </main>
      <EnhancedFooter />
      <StickyCTA />
    </>
  )
} 