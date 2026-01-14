'use client'

import { motion } from 'framer-motion'
import {
  Building2,
  CreditCard,
  Rocket,
  DollarSign,
  ExternalLink,
  Phone,
  Mail,
  Globe,
  Palette,
  Code2,
  Shield,
  CheckCircle,
  Gift
} from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Business Formation',
    description: '45-point compliant business structures with LLC formation, EIN, operating agreements, and corporate compliance.',
    features: ['LLC/Corp Formation', 'EIN Registration', 'Operating Agreement', 'Registered Agent'],
    url: 'https://startmybusiness.us',
  },
  {
    icon: CreditCard,
    title: 'Payment Processing',
    description: 'High-risk and standard merchant accounts with competitive rates and quick approval.',
    features: ['Merchant Accounts', 'High-Risk Processing', 'Payment Gateway', 'POS Systems'],
    url: 'https://startmybusiness.us',
  },
  {
    icon: Rocket,
    title: 'Sales Funnels',
    description: 'Conversion-optimized sales funnels designed to maximize your revenue per visitor.',
    features: ['Landing Pages', 'Email Sequences', 'Upsell Flows', 'A/B Testing'],
    url: 'https://startmybusiness.us',
  },
  {
    icon: DollarSign,
    title: 'Business Funding',
    description: 'Access lines of credit, equipment financing, working capital, and revenue-based funding.',
    features: ['Lines of Credit', 'Equipment Finance', 'Working Capital', 'SBA Loans'],
    url: 'https://startmybusiness.us',
  },
]

const brandServices = [
  {
    icon: Palette,
    title: 'Brand Design',
    description: 'Professional logo design, brand identity, and visual guidelines.',
    url: 'https://startmybrand.us',
  },
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Modern, responsive websites built with the latest technologies.',
    url: 'https://startmybrand.us',
  },
  {
    icon: Code2,
    title: 'Custom Development',
    description: 'Full-stack application development and API integrations.',
    url: 'https://startmybrand.us',
  },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[#0F0F23]">
      {/* Header */}
      <div className="border-b border-gray-800 bg-[#0a0a1a]">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-white mb-2">Resources</h1>
          <p className="text-gray-400">
            Explore our business services and exclusive offers for The Prompts Library customers
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Discount Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-xl p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                <Gift className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Exclusive 10% Discount</h2>
                <p className="text-gray-400 text-sm">
                  The Prompts Library customers receive 10% off all services (except tradelines)
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium">Your discount is active!</span>
            </div>
          </div>
        </motion.div>

        {/* Business Services */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-white">Business Services</h2>
              <p className="text-gray-400 text-sm">startmybusiness.us</p>
            </div>
            <a
              href="https://startmybusiness.us"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 text-sm flex items-center gap-1"
            >
              View all services
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1A1A2E] rounded-xl border border-gray-800 p-6 hover:border-indigo-500/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center shrink-0">
                    <service.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-1 text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <a
                      href={service.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm"
                    >
                      Learn more
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Brand & Web Services */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-white">Brand & Web Services</h2>
              <p className="text-gray-400 text-sm">startmybrand.us</p>
            </div>
            <a
              href="https://startmybrand.us"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 text-sm flex items-center gap-1"
            >
              View portfolio
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {brandServices.map((service, index) => (
              <motion.a
                key={service.title}
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-[#1A1A2E] rounded-xl border border-gray-800 p-6 hover:border-purple-500/50 transition-all group"
              >
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                  <service.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-xl font-bold text-white mb-6">Contact Us</h2>
          <div className="bg-[#1A1A2E] rounded-xl border border-gray-800 p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="tel:888-534-4145"
                className="flex items-center gap-4 p-4 bg-[#0F0F23] rounded-lg border border-gray-800 hover:border-indigo-500/50 transition-colors"
              >
                <div className="w-10 h-10 bg-indigo-500/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="text-white font-medium">888-534-4145</p>
                </div>
              </a>

              <a
                href="mailto:support@startmybusiness.us"
                className="flex items-center gap-4 p-4 bg-[#0F0F23] rounded-lg border border-gray-800 hover:border-indigo-500/50 transition-colors"
              >
                <div className="w-10 h-10 bg-indigo-500/10 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-white font-medium">support@startmybusiness.us</p>
                </div>
              </a>

              <a
                href="https://startmybusiness.us"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#0F0F23] rounded-lg border border-gray-800 hover:border-indigo-500/50 transition-colors"
              >
                <div className="w-10 h-10 bg-indigo-500/10 rounded-full flex items-center justify-center">
                  <Globe className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Website</p>
                  <p className="text-white font-medium">startmybusiness.us</p>
                </div>
              </a>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-800 text-center">
              <p className="text-gray-400 text-sm">
                Ready to scale your business? Book a free consultation call with our team.
              </p>
              <motion.a
                href="https://startmybusiness.us"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg shadow-indigo-500/25"
              >
                Schedule Consultation
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
