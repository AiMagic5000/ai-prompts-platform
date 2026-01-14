'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Logo } from '@/components/shared/logo'
import { CheckCircle, Sparkles, Gift, BookOpen, Zap, ArrowRight } from 'lucide-react'

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

// Demo mode sign-up page
function DemoSignUp() {
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
            <p className="text-gray-400 text-sm">No sign-up required</p>
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
      <div className="mt-8 text-center space-y-4">
        <p className="text-gray-400 text-sm">
          Already have an account?{' '}
          <Link href="/sign-in" className="text-indigo-400 hover:text-indigo-300 font-medium">
            Sign in
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

// Clerk sign-up page (only used when Clerk is configured)
function ClerkSignUp() {
  const { SignUp } = require('@clerk/nextjs')

  return (
    <div className="w-full max-w-md">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Create your account</h2>
        <p className="text-gray-400">
          Sign up to preview our AI prompts library
        </p>
      </div>

      {/* Mobile Benefits */}
      <div className="lg:hidden bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 mb-6">
        <p className="text-sm text-gray-300 mb-3">With a free account you get:</p>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-sm text-gray-400">
            <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
            Preview 10 sample prompts
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-400">
            <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
            See what is included before paying
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-400">
            <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
            Unlock all 1000+ prompts for just $39
          </li>
        </ul>
      </div>

      {/* Clerk Sign Up */}
      <SignUp
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
          Already have an account?{' '}
          <Link href="/sign-in" className="text-indigo-400 hover:text-indigo-300 font-medium">
            Sign in
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

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Column - Hero Content */}
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
            Start Your
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              AI Journey Today
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-10 max-w-md">
            Create a free account to preview our collection. Unlock everything for just $39.
          </p>

          {/* What You Get */}
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              What&apos;s Included
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="font-medium text-white">500+ Prompts</p>
                  <p className="text-xs text-gray-400">Main collection</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                  <Gift className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="font-medium text-white">500+ Bonus</p>
                  <p className="text-xs text-gray-400">Extra prompts</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="font-medium text-white">250+ Automations</p>
                  <p className="text-xs text-gray-400">n8n workflows</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="font-medium text-white">Masterclass</p>
                  <p className="text-xs text-gray-400">Video training</p>
                </div>
              </div>
            </div>
          </div>

          {/* Free Account Benefits */}
          <div className="space-y-3">
            <p className="text-sm text-gray-400 font-medium">With your free account:</p>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
              <span>Preview 10 sample prompts</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
              <span>See what&apos;s included before paying</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
              <span>Unlock everything for just $39</span>
            </div>
          </div>

          {/* Pricing Badge */}
          <div className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-xl px-6 py-4">
            <div>
              <span className="text-gray-500 line-through text-lg">$199</span>
              <span className="text-3xl font-bold text-white ml-2">$39</span>
            </div>
            <div className="h-10 w-px bg-gray-700" />
            <div>
              <p className="text-amber-400 font-medium">80% OFF</p>
              <p className="text-gray-400 text-xs">Limited time</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Sign Up Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Mobile Logo */}
        <div className="lg:hidden mb-8">
          <Logo size="lg" />
        </div>

        {CLERK_CONFIGURED ? <ClerkSignUp /> : <DemoSignUp />}

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-xs">
            By signing up, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  )
}
