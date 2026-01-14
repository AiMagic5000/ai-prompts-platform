'use client'

/**
 * Check if Clerk is configured
 * This is determined at build time through environment variables
 */
export const CLERK_CONFIGURED = !!(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
  !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes('placeholder')
)

// Mock user object for demo mode
export const DEMO_USER = {
  id: 'demo-user',
  firstName: 'Demo',
  lastName: 'User',
  emailAddresses: [{ emailAddress: 'demo@example.com' }],
  imageUrl: null,
}
