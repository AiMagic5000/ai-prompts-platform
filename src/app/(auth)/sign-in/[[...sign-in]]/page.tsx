'use client'

import Link from 'next/link'
import { Logo } from '@/components/shared/logo'
import { Sparkles, Zap, Shield, ArrowRight, CheckCircle, ExternalLink } from 'lucide-react'

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

// User testimonial images (using professional stock photos)
const userImages = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
]

// Simple sign-in for returning customers - redirects to PIN verification
function SimpleSignIn() {
  return (
    <div className="w-full max-w-md">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
          <Shield className="w-8 h-8 text-indigo-600" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back</h2>
        <p className="text-slate-600">
          Already purchased? Access your dashboard with your PIN code.
        </p>
      </div>

      {/* Access Card */}
      <div className="bg-slate-50 border border-slate-200 shadow-xl rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Returning Customer</h3>
            <p className="text-slate-500 text-sm">Use your purchase PIN to sign in</p>
          </div>
        </div>

        <p className="text-slate-600 text-sm mb-6">
          After your Gumroad purchase, you received a 6-digit PIN code in your confirmation email.
          Enter that PIN to access all your premium content.
        </p>

        <Link
          href="/verify-pin"
          className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:scale-[1.02]"
        >
          Enter PIN Code
          <ArrowRight className="w-4 h-4" />
        </Link>

        <div className="mt-6 pt-6 border-t border-slate-200">
          <p className="text-slate-500 text-sm text-center mb-4">
            Haven&apos;t purchased yet?
          </p>
          <Link
            href="/sign-up"
            className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-white border border-slate-200 hover:bg-slate-50 text-slate-900 font-semibold rounded-lg transition-all duration-200"
          >
            <Sparkles className="w-4 h-4 text-indigo-500" />
            Get Full Access - $39
          </Link>
        </div>
      </div>

      {/* Additional Links */}
      <div className="mt-8 text-center">
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

// Clerk sign-in page (only used when Clerk is configured)
function ClerkSignIn() {
  const { SignIn } = require('@clerk/nextjs')

  return (
    <div className="w-full max-w-md">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Welcome back</h2>
        <p className="text-slate-600">
          Sign in to access your AI prompts library
        </p>
      </div>

      {/* Clerk Sign In */}
      <SignIn
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
          Don&apos;t have an account?{' '}
          <Link href="/sign-up" className="text-indigo-600 hover:text-indigo-500 font-medium">
            Sign up for free
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

          {/* Social Proof with Real Photos */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {userImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`User ${i + 1}`}
                  className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover"
                />
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
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 bg-white">
        {/* Mobile Logo */}
        <div className="lg:hidden mb-8">
          <Logo size="lg" />
        </div>

        {CLERK_CONFIGURED ? <ClerkSignIn /> : <SimpleSignIn />}

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-xs">
            By purchasing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  )
}
