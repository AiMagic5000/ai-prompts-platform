'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Logo } from '@/components/shared/logo'
import { Phone, Mail, ExternalLink, Shield, CreditCard, RefreshCw } from 'lucide-react'

const footerLinks = {
  product: {
    title: 'Product',
    links: [
      { label: 'All Prompts', href: '/dashboard/prompts' },
      { label: 'Bonus Prompts', href: '/dashboard/bonus-prompts' },
      { label: 'Masterclass', href: '/dashboard/masterclass' },
      { label: 'AI Tools Guide', href: '/dashboard/ai-tools-guide' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Get Started', href: '/sign-up' },
      { label: 'Pricing', href: '/#pricing' },
      { label: 'FAQ', href: '/#faq' },
      { label: 'Support', href: 'mailto:support@startmybusiness.us' },
    ],
  },
  services: {
    title: 'Our Services',
    links: [
      { label: 'Business Formation', href: 'https://startmybusiness.us', external: true },
      { label: 'Website Design', href: 'https://startmybrand.us', external: true },
      { label: 'Payment Processing', href: 'https://startmybusiness.us', external: true },
      { label: 'Business Funding', href: 'https://startmybusiness.us', external: true },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Refund Policy', href: '/refunds' },
    ],
  },
}

const trustBadges = [
  { icon: Shield, label: '30-Day Guarantee' },
  { icon: CreditCard, label: 'Secure Checkout' },
  { icon: RefreshCw, label: 'Lifetime Updates' },
]

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Business CTA Banner */}
      <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-b border-amber-500/20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">
                Need a Complete Business Built?
              </h3>
              <p className="text-slate-400 text-sm">
                We specialize in 45-point compliant business structures with integrated payment processing.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <span className="text-amber-400 text-sm font-medium">
                AI Prompts customers get 10% off!
              </span>
              <motion.a
                href="https://startmybusiness.us"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg flex items-center gap-2"
              >
                Learn More
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <Logo size="lg" className="mb-4" />
            <p className="text-sm text-slate-400 mb-6 max-w-xs">
              500+ expert-crafted AI prompts that actually work. Save hours and get better results with ChatGPT, Claude, Midjourney, and more.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <a
                href="tel:888-534-4145"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                888-534-4145
              </a>
              <a
                href="mailto:support@startmybusiness.us"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                support@startmybusiness.us
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-1.5 px-2 py-1 bg-slate-800/50 rounded text-xs text-slate-400"
                >
                  <badge.icon className="w-3 h-3" />
                  {badge.label}
                </div>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                      >
                        {link.label}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-slate-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Discount Notice */}
        <div className="mt-8 p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-lg">
          <p className="text-sm text-center text-indigo-300">
            <span className="font-semibold">Special Offer:</span> AI Prompts Library customers receive 10% off all services at{' '}
            <a href="https://startmybusiness.us" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
              startmybusiness.us
            </a>{' '}
            (except tradelines)
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} AlwaysEncrypted. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span>Secure payments via Gumroad</span>
            <div className="flex gap-2">
              <div className="h-6 w-10 bg-slate-800 rounded flex items-center justify-center text-[10px] font-bold text-slate-400">VISA</div>
              <div className="h-6 w-10 bg-slate-800 rounded flex items-center justify-center text-[10px] font-bold text-slate-400">MC</div>
              <div className="h-6 w-10 bg-slate-800 rounded flex items-center justify-center text-[10px] font-bold text-slate-400">AMEX</div>
            </div>
          </div>
        </div>

        {/* Architecture Credit */}
        <div className="mt-6 text-center">
          <p className="text-xs text-slate-600">
            Architecture by{' '}
            <a
              href="https://startmybrand.us"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              startmybrand.us
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
