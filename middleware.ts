import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Check if Clerk is properly configured at build time
const isClerkConfigured = !!(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
  !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes('placeholder')
)

export async function middleware(req: NextRequest) {
  // If Clerk is not configured, allow all requests (demo mode)
  if (!isClerkConfigured) {
    return NextResponse.next()
  }

  // Dynamically import Clerk middleware only if configured
  try {
    const { clerkMiddleware, createRouteMatcher } = await import('@clerk/nextjs/server')

    const isProtectedRoute = createRouteMatcher(['/dashboard(.*)'])

    return clerkMiddleware(async (auth, req) => {
      if (isProtectedRoute(req)) {
        await auth.protect()
      }
    })(req, {} as any)
  } catch {
    // If Clerk fails, allow the request
    return NextResponse.next()
  }
}

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
