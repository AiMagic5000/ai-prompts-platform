'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Logo } from '@/components/shared/logo'
import { Sparkles, Zap, Shield, ArrowRight, CheckCircle } from 'lucide-react'

// Check if Clerk is configured
const CLERK_CONFIGURED = !!(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
  !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes('placeholder')
)

// Custom dark theme for Clerk (when configured)
const customDarkTheme = {
  variables: {
    colorPrimary: '#6366f1',
    colorBackground: '#1e293b',
    colorText: '#f1f5f9',
    colorTextSecondary: '#94a3b8',
    colorInputBackground: '#334155',
    colorInputText: '#f1f5f9',
  },
}

// Demo mode sign-in page
function DemoSignIn() {
  const router = useRouter()

  return (
    <div className="w-full max-w-md">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Demo Mode Active</h2>
        <p className="text-gray-400">
          Authentication is currently disabled. You have full access to all features.
        </p>
      </div>

      {/* Demo Access Card */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 shadow-2xl rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-green-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Full Access Granted</h3>
            <p className="text-gray-400 text-sm">No sign-in required</p>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-gray-300">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>1000+ AI Prompts</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>250+ Automations</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>Masterclass Access</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>AI Tools Guide</span>
          </div>
        </div>

        <button
          onClick={() => router.push('/dashboard')}
          className="w-full py-3 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:scale-[1.02]"
        >
          Go to Dashboard
        </button>
      </div>

      {/* Additional Links */}
      <div className="mt-8 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-white text-sm transition-colors"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          Back to home
        </Link>
      </div>
    </div>
  )
}

// Clerk sign-in page (only used when Clerk is configured)
function ClerkSignIn() {
  const { SignIn } = require('@clerk/nextjs')

  return (
    <div className="w-full max-w-md">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Welcome back</h2>
        <p className="text-gray-400">
          Sign in to access your AI prompts library
        </p>
      </div>

      {/* Clerk Sign In */}
      <SignIn
        appearance={{
          variables: customDarkTheme.variables,
          elements: {
            rootBox: 'w-full',
            card: 'bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 shadow-2xl rounded-2xl',
            headerTitle: 'hidden',
            headerSubtitle: 'hidden',
            socialButtonsBlockButton: 'bg-white hover:bg-gray-100 border-0 text-slate-900 font-medium transition-all duration-200 hover:scale-[1.02]',
            socialButtonsBlockButtonText: 'text-slate-900 font-medium',
            socialButtonsBlockButtonArrow: 'text-slate-600',
            dividerLine: 'bg-slate-600',
            dividerText: 'text-gray-400 text-sm',
            formFieldLabel: 'text-gray-300 font-medium',
            formFieldInput: 'bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500/20 rounded-lg',
            formButtonPrimary: 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-indigo-500/25 font-semibold',
            footerAction: 'justify-center',
            footerActionLink: 'text-indigo-400 hover:text-indigo-300 font-medium',
            identityPreviewEditButton: 'text-indigo-400 hover:text-indigo-300',
            formFieldAction: 'text-indigo-400 hover:text-indigo-300',
            alertText: 'text-red-400',
            formFieldSuccessText: 'text-green-400',
          },
          layout: {
            socialButtonsPlacement: 'top',
            socialButtonsVariant: 'blockButton',
          },
        }}
      />

      {/* Additional Links */}
      <div className="mt-8 text-center space-y-4">
        <p className="text-gray-400 text-sm">
          Don&apos;t have an account?{' '}
          <Link href="/sign-up" className="text-indigo-400 hover:text-indigo-300 font-medium">
            Sign up for free
          </Link>
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-white text-sm transition-colors"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          Back to home
        </Link>
      </div>
    </div>
  )
}

export default function SignInPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Column - Hero Image & Content */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Gradient Overlays */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-12 xl:px-20">
          {/* Logo */}
          <div className="mb-12">
            <Logo size="lg" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight">
            Unlock the Power of
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              AI Prompts
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-10 max-w-md">
            Access 1000+ expert-crafted prompts, masterclasses, and automation templates to supercharge your productivity.
          </p>

          {/* Feature List */}
          <div className="space-y-4 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">1000+ Premium Prompts</h3>
                <p className="text-gray-400 text-sm">For ChatGPT, Claude, Midjourney & more</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">250+ Automations</h3>
                <p className="text-gray-400 text-sm">Ready-to-use n8n workflows</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Lifetime Access</h3>
                <p className="text-gray-400 text-sm">One-time payment, forever yours</p>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 border-2 border-slate-900 flex items-center justify-center"
                >
                  <span className="text-white text-xs font-medium">
                    {String.fromCharCode(64 + i)}
                  </span>
                </div>
              ))}
            </div>
            <div>
              <p className="text-white font-medium">10,000+ creators</p>
              <p className="text-gray-400 text-sm">already using our prompts</p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-8 left-12 flex items-center gap-2 text-gray-500 text-sm">
          <span>Trusted by professionals worldwide</span>
        </div>
      </div>

      {/* Right Column - Sign In Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Mobile Logo */}
        <div className="lg:hidden mb-8">
          <Logo size="lg" />
        </div>

        {CLERK_CONFIGURED ? <ClerkSignIn /> : <DemoSignIn />}

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-xs">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  )
}
