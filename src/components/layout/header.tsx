'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles, ChevronDown, User, LogIn } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/shared/logo'
import { CountdownTimer } from '@/components/marketing/countdown-timer'

const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Top Banner with Countdown */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <CountdownTimer variant="header" showBonus />
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Logo size="md" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <Link href="/sign-in">
              <Button variant="outline" className="hidden sm:flex items-center gap-2 text-slate-700 border-slate-300 hover:bg-slate-50 hover:border-slate-400">
                <LogIn className="w-4 h-4" />
                Login
              </Button>
            </Link>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                asChild
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold shadow-lg shadow-indigo-500/25"
              >
                <Link href="/#pricing" className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span className="hidden sm:inline">Get Access - $39</span>
                  <span className="sm:hidden">$39</span>
                </Link>
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-slate-200 bg-white"
            >
              <nav className="container mx-auto px-4 py-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="block py-2 text-slate-600 font-medium hover:text-slate-900"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <div className="pt-4 space-y-3">
                  <Link
                    href="/sign-in"
                    className="flex items-center gap-2 py-2 text-slate-600 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <LogIn className="w-4 h-4" />
                    Login
                  </Link>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
                  >
                    <Link href="/#pricing" onClick={() => setMobileMenuOpen(false)}>
                      Get Access - $39
                    </Link>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
