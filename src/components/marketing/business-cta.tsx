'use client'

import { motion } from 'framer-motion'
import { Building2, CreditCard, Rocket, DollarSign, ExternalLink, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

interface BusinessCTAProps {
  variant?: 'funnel' | 'funding' | 'services'
}

export function BusinessCTA({ variant = 'funnel' }: BusinessCTAProps) {
  if (variant === 'funnel') {
    return (
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50 border-y border-indigo-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6">
              <Building2 className="w-5 h-5 text-amber-500" />
              <span className="text-amber-600 font-semibold">Need a Complete Business Funnel?</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              We Build 45-Point Compliant Business Structures
            </h2>

            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Our team specializes in complete business setup with legal entity formation,
              integrated payment processing, compliant sales funnels, and automated systems.
            </p>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {[
                { icon: Building2, label: 'Legal Entity Formation' },
                { icon: CreditCard, label: 'Payment Processing' },
                { icon: Rocket, label: 'Sales Funnels' },
                { icon: DollarSign, label: 'Automated Systems' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg border border-slate-200 shadow-sm"
                >
                  <item.icon className="w-6 h-6 text-indigo-500" />
                  <span className="text-sm text-slate-700 text-center">{item.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <span className="text-amber-600 font-semibold">
                AI Prompts customers get 10% OFF!
              </span>
              <motion.a
                href="https://startmybusiness.us"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg flex items-center gap-2 shadow-lg shadow-amber-500/25"
              >
                Get Started
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
              <a href="tel:888-534-4145" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
                <Phone className="w-4 h-4" />
                888-534-4145
              </a>
              <a href="mailto:support@startmybusiness.us" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
                <Mail className="w-4 h-4" />
                support@startmybusiness.us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  if (variant === 'funding') {
    return (
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50 border-y border-green-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
              <DollarSign className="w-5 h-5 text-green-500" />
              <span className="text-green-600 font-semibold">Already Have an Established Business?</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Access Business Growth Capital
            </h2>

            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              We help business owners access lines of credit, equipment financing,
              working capital, and revenue-based funding options.
            </p>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {[
                'Lines of Credit',
                'Equipment Financing',
                'Working Capital',
                'Revenue-Based Funding',
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm"
                >
                  <span className="text-sm text-slate-700">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://startmybusiness.us"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg shadow-lg shadow-green-500/25"
            >
              Explore Funding Options
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    )
  }

  // Services variant for dashboard sidebar
  return (
    <div className="p-4 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl border border-indigo-500/20">
      <div className="flex items-center gap-2 mb-3">
        <Rocket className="w-5 h-5 text-indigo-400" />
        <h3 className="font-semibold text-white">Scale Your Business</h3>
      </div>
      <p className="text-sm text-gray-400 mb-4">
        Our team can help you build complete sales funnels, automated systems, and payment processing.
      </p>
      <div className="text-sm text-amber-400 font-medium mb-3">
        AI Prompts customers get 10% off!
      </div>
      <motion.a
        href="https://startmybusiness.us"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="block w-full text-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold rounded-lg"
      >
        Book Consultation
      </motion.a>
    </div>
  )
}
