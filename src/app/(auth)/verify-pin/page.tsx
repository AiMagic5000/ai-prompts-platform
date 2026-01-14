'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Logo } from '@/components/shared/logo'
import { Shield, ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

// The universal PIN code for verified purchasers
const VALID_PIN = '197019'

export default function VerifyPinPage() {
  const router = useRouter()
  const [pin, setPin] = useState('')
  const [error, setError] = useState('')
  const [isVerifying, setIsVerifying] = useState(false)
  const [isVerified, setIsVerified] = useState(false)

  // Check if already verified on mount
  useEffect(() => {
    const verified = localStorage.getItem('pin_verified')
    if (verified === 'true') {
      router.push('/dashboard')
    }
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsVerifying(true)

    // Simulate a brief verification delay
    await new Promise(resolve => setTimeout(resolve, 800))

    if (pin === VALID_PIN) {
      // Store verification in localStorage
      localStorage.setItem('pin_verified', 'true')
      localStorage.setItem('pin_verified_at', new Date().toISOString())
      setIsVerified(true)

      // Redirect to dashboard after brief success message
      setTimeout(() => {
        router.push('/dashboard')
      }, 1500)
    } else {
      setError('Invalid PIN code. Please check your purchase confirmation email.')
      setIsVerifying(false)
    }
  }

  const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6)
    setPin(value)
    setError('')
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Column - Info */}
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

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-12 xl:px-20">
          {/* Logo */}
          <div className="mb-12">
            <Logo size="lg" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight">
            Verify Your
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Purchase
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-10 max-w-md">
            Enter the 6-digit PIN code from your purchase confirmation email to unlock full access.
          </p>

          {/* Info Cards */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Secure Verification</h3>
                <p className="text-gray-400 text-sm">Your PIN confirms your purchase</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">One-Time Entry</h3>
                <p className="text-gray-400 text-sm">Only needed on first login</p>
              </div>
            </div>
          </div>

          {/* Help Text */}
          <div className="mt-12 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
            <p className="text-gray-400 text-sm">
              <strong className="text-white">Can&apos;t find your PIN?</strong><br />
              Check your email from Gumroad after purchase. The PIN is in your order confirmation.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column - PIN Entry */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 bg-white">
        {/* Mobile Logo */}
        <div className="lg:hidden mb-8">
          <Logo size="lg" />
        </div>

        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Enter Your PIN</h2>
            <p className="text-slate-600">
              Enter the 6-digit code from your purchase confirmation
            </p>
          </div>

          {/* Success State */}
          {isVerified ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Verified!</h3>
              <p className="text-green-600 mb-4">Redirecting to your dashboard...</p>
              <Loader2 className="w-6 h-6 animate-spin text-green-600 mx-auto" />
            </div>
          ) : (
            <>
              {/* PIN Entry Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="pin" className="block text-sm font-medium text-slate-700 mb-2">
                    6-Digit PIN Code
                  </label>
                  <input
                    type="text"
                    id="pin"
                    value={pin}
                    onChange={handlePinChange}
                    placeholder="000000"
                    className={`w-full px-4 py-4 text-center text-3xl font-mono tracking-[0.5em] border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                      error
                        ? 'border-red-300 focus:ring-red-500/20 focus:border-red-500'
                        : 'border-slate-300 focus:ring-indigo-500/20 focus:border-indigo-500'
                    }`}
                    maxLength={6}
                    autoComplete="off"
                    autoFocus
                  />
                  {error && (
                    <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {error}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={pin.length !== 6 || isVerifying}
                  className="w-full py-4 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 disabled:from-slate-300 disabled:to-slate-400 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isVerifying ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    <>
                      Verify & Continue
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>

              {/* Help Links */}
              <div className="mt-8 space-y-4 text-center">
                <p className="text-slate-500 text-sm">
                  Don&apos;t have a PIN?{' '}
                  <Link href="/sign-up" className="text-indigo-600 hover:text-indigo-500 font-medium">
                    Purchase access
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
            </>
          )}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-xs">
            Need help? Contact support@startmybusiness.us
          </p>
        </div>
      </div>
    </div>
  )
}
