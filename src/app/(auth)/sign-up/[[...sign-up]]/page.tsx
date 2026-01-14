'use client'

import Link from 'next/link'
import { Logo } from '@/components/shared/logo'
import { CheckCircle, Sparkles, Gift, BookOpen, Zap, ArrowRight, ExternalLink } from 'lucide-react'

// Check if Clerk is actually configured with real keys
const CLERK_CONFIGURED = !!(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
  !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes('placeholder') &&
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.startsWith('pk_')
)

// Custom light theme for Clerk (when configured)
const customLightTheme = {
  variables: {
    colorPrimary: '#6366f1',
    colorBackground: '#ffffff',
    colorText: '#1e293b',
    colorTextSecondary: '#64748b',
    colorInputBackground: '#f8fafc',
    colorInputText: '#1e293b',
  },
}

// Gumroad payment link
const GUMROAD_URL = 'https://coreypearson.gumroad.com/l/eayfol'

// Payment required sign-up page - redirects to Gumroad
function PaymentSignUp() {
  return (
    <div className="w-full max-w-md">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Get Full Access</h2>
        <p className="text-slate-600">
          Complete your purchase to unlock all 1000+ AI prompts
        </p>
      </div>

      {/* Purchase Card */}
      <div className="bg-slate-50 border border-slate-200 shadow-xl rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Lifetime Access</h3>
            <p className="text-slate-500 text-sm">One-time payment, forever yours</p>
          </div>
        </div>

        {/* Price */}
        <div className="text-center mb-6 py-4 bg-white border border-slate-200 rounded-xl">
          <div className="flex items-center justify-center gap-3">
            <span className="text-2xl text-slate-400 line-through">$199</span>
            <span className="text-5xl font-bold text-slate-900">$39</span>
          </div>
          <span className="text-amber-600 font-semibold">80% OFF - Limited Time</span>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-slate-700">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>500+ Premium AI Prompts</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>500+ Bonus Prompts</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>250+ N8N Automations</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Masterclass Training</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>AI Tools Guide</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>30-Day Money Back Guarantee</span>
          </div>
        </div>

        <a
          href={GUMROAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:scale-[1.02]"
        >
          Complete Purchase
          <ExternalLink className="w-4 h-4" />
        </a>

        <p className="text-center text-slate-500 text-xs mt-4">
          Secure payment via Gumroad
        </p>
      </div>

      {/* Additional Links */}
      <div className="mt-8 text-center space-y-4">
        <p className="text-slate-600 text-sm">
          Already purchased?{' '}
          <Link href="/sign-in" className="text-indigo-600 hover:text-indigo-500 font-medium">
            Sign in
          </Link>
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 text-sm transition-colors"
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
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Create your account</h2>
        <p className="text-slate-600">
          Sign up to preview The Prompts Library
        </p>
      </div>

      {/* Mobile Benefits */}
      <div className="lg:hidden bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6">
        <p className="text-sm text-slate-700 mb-3">With a free account you get:</p>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-sm text-slate-600">
            <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
            Preview 10 sample prompts
          </li>
          <li className="flex items-center gap-2 text-sm text-slate-600">
            <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
            See what is included before paying
          </li>
          <li className="flex items-center gap-2 text-sm text-slate-600">
            <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
            Unlock all 1000+ prompts for just $39
          </li>
        </ul>
      </div>

      {/* Clerk Sign Up */}
      <SignUp
        appearance={{
          variables: customLightTheme.variables,
          elements: {
            rootBox: 'w-full',
            card: 'bg-slate-50 border border-slate-200 shadow-xl rounded-2xl',
            headerTitle: 'hidden',
            headerSubtitle: 'hidden',
            socialButtonsBlockButton: 'bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 font-medium transition-all duration-200 hover:scale-[1.02] shadow-sm',
            socialButtonsBlockButtonText: 'text-slate-900 font-medium',
            socialButtonsBlockButtonArrow: 'text-slate-600',
            dividerLine: 'bg-slate-200',
            dividerText: 'text-slate-500 text-sm',
            formFieldLabel: 'text-slate-700 font-medium',
            formFieldInput: 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-indigo-500/20 rounded-lg',
            formButtonPrimary: 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-indigo-500/25 font-semibold',
            footerAction: 'justify-center',
            footerActionLink: 'text-indigo-600 hover:text-indigo-500 font-medium',
            identityPreviewEditButton: 'text-indigo-600 hover:text-indigo-500',
            formFieldAction: 'text-indigo-600 hover:text-indigo-500',
            alertText: 'text-red-500',
            formFieldSuccessText: 'text-green-500',
          },
          layout: {
            socialButtonsPlacement: 'top',
            socialButtonsVariant: 'blockButton',
          },
        }}
      />

      {/* Additional Links */}
      <div className="mt-8 text-center space-y-4">
        <p className="text-slate-600 text-sm">
          Already have an account?{' '}
          <Link href="/sign-in" className="text-indigo-600 hover:text-indigo-500 font-medium">
            Sign in
          </Link>
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 text-sm transition-colors"
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
            Get instant access to our complete collection. Unlock everything for just $39.
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
                  <p className="text-xs text-gray-400">N8N workflows</p>
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

          {/* Included Benefits */}
          <div className="space-y-3">
            <p className="text-sm text-gray-400 font-medium">What you get:</p>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
              <span>Lifetime access to all content</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
              <span>30-day money back guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
              <span>Free updates forever</span>
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
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 bg-white">
        {/* Mobile Logo */}
        <div className="lg:hidden mb-8">
          <Logo size="lg" />
        </div>

        {CLERK_CONFIGURED ? <ClerkSignUp /> : <PaymentSignUp />}

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-xs">
            By purchasing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  )
}
