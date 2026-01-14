'use client'

import { ReactNode } from "react"
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

export function ConditionalClerkProvider({ children }: { children: ReactNode }) {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

  // If no Clerk key is configured, just render children without auth
  if (!publishableKey) {
    console.warn('Clerk publishable key not found. Auth is disabled.')
    return <>{children}</>
  }

  return (
    <ClerkProvider
      publishableKey={publishableKey}
      appearance={{
        baseTheme: dark,
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
