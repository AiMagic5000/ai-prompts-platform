'use client'

import { ReactNode } from "react"

// Check if Clerk is properly configured (not just present but also not a placeholder)
function isClerkConfigured(): boolean {
  const key = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
  return !!(key && !key.includes('placeholder') && key.startsWith('pk_'))
}

export function ConditionalClerkProvider({ children }: { children: ReactNode }) {
  // If Clerk is not properly configured, just render children without auth
  if (!isClerkConfigured()) {
    return <>{children}</>
  }

  // Only require Clerk when we know it's configured
  const { ClerkProvider } = require('@clerk/nextjs')

  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      appearance={{
        variables: {
          colorPrimary: '#6366f1',
          colorBackground: '#1e293b',
          colorInputBackground: '#334155',
          colorInputText: '#ffffff',
        },
      }}
    >
      {children}
    </ClerkProvider>
  )
}
