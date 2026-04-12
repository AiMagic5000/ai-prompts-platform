'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles, LogIn } from 'lucide-react'
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
      <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <CountdownTimer variant="header" showBonus />
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full bg-[#0f0f1a]/95 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Logo size="md" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <Link href="/sign-in">
              <Button variant="outline" className="hidden sm:flex items-center gap-2 text-slate-300 border-white/10 bg-white/5 hover:bg-white/10 hover:text-white hover:border-white/20">
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
                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-semibold shadow-lg shadow-violet-500/25 border-0"
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
              className="md:hidden p-2 text-slate-400 hover:text-white"
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
              className="md:hidden border-t border-white/5 bg-[#0f0f1a]"
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
                      className="block py-2 text-slate-400 font-medium hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <div className="pt-4 space-y-3">
                  <Link
                    href="/sign-in"
                    className="flex items-center gap-2 py-2 text-slate-400 font-medium hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <LogIn className="w-4 h-4" />
                    Login
                  </Link>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white border-0"
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
