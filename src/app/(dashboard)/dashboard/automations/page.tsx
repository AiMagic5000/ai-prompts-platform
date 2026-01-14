'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Zap,
  Download,
  ExternalLink,
  Sparkles,
  CheckCircle,
  Clock,
  Users,
  Shield,
  ArrowRight,
  Mail,
  Calendar,
  Database,
  MessageSquare,
  FileText,
  ShoppingCart,
  BarChart,
  Workflow,
  Copy,
  Check,
  Lock
} from 'lucide-react'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { Paywall } from '@/components/dashboard/paywall'
import { usePayment } from '@/contexts/payment-context'

interface AutomationTemplate {
  id: string
  title: string
  description: string
  category: string
  icon: typeof Zap
  useCases: string[]
  complexity: 'beginner' | 'intermediate' | 'advanced'
}

const categories = [
  { key: 'all', label: 'All', icon: Workflow },
  { key: 'marketing', label: 'Marketing', icon: Mail },
  { key: 'sales', label: 'Sales', icon: ShoppingCart },
  { key: 'operations', label: 'Operations', icon: Database },
  { key: 'communication', label: 'Communication', icon: MessageSquare },
  { key: 'analytics', label: 'Analytics', icon: BarChart },
]

const featuredAutomations: AutomationTemplate[] = [
  {
    id: 'lead-capture',
    title: 'Lead Capture to CRM',
    description: 'Automatically capture leads from forms and add to your CRM with follow-up sequences',
    category: 'sales',
    icon: Users,
    useCases: ['Website forms', 'Landing pages', 'Social media'],
    complexity: 'beginner',
  },
  {
    id: 'email-sequences',
    title: 'Email Marketing Sequences',
    description: 'Trigger personalized email sequences based on user actions and behaviors',
    category: 'marketing',
    icon: Mail,
    useCases: ['Welcome series', 'Abandoned cart', 'Re-engagement'],
    complexity: 'intermediate',
  },
  {
    id: 'invoice-automation',
    title: 'Invoice & Payment Automation',
    description: 'Generate invoices, send reminders, and track payments automatically',
    category: 'operations',
    icon: FileText,
    useCases: ['Billing', 'Subscription renewals', 'Payment tracking'],
    complexity: 'intermediate',
  },
  {
    id: 'social-scheduling',
    title: 'Social Media Scheduler',
    description: 'Schedule and publish content across multiple social platforms simultaneously',
    category: 'marketing',
    icon: Calendar,
    useCases: ['Content calendar', 'Cross-posting', 'Engagement tracking'],
    complexity: 'beginner',
  },
  {
    id: 'customer-support',
    title: 'Customer Support Ticketing',
    description: 'Route support tickets, auto-respond, and escalate based on priority',
    category: 'communication',
    icon: MessageSquare,
    useCases: ['Help desk', 'Live chat', 'Email support'],
    complexity: 'advanced',
  },
  {
    id: 'data-sync',
    title: 'Multi-App Data Sync',
    description: 'Keep data synchronized across multiple applications in real-time',
    category: 'operations',
    icon: Database,
    useCases: ['CRM sync', 'Inventory management', 'Contact management'],
    complexity: 'advanced',
  },
  {
    id: 'reporting-dashboard',
    title: 'Automated Reporting',
    description: 'Generate and send business reports on schedule with real-time data',
    category: 'analytics',
    icon: BarChart,
    useCases: ['Weekly reports', 'KPI tracking', 'Executive summaries'],
    complexity: 'intermediate',
  },
  {
    id: 'ecommerce-workflow',
    title: 'E-commerce Order Workflow',
    description: 'Process orders, update inventory, and notify fulfillment automatically',
    category: 'sales',
    icon: ShoppingCart,
    useCases: ['Order processing', 'Shipping notifications', 'Inventory alerts'],
    complexity: 'advanced',
  },
]

const benefits = [
  { icon: Clock, title: 'Save Hours Daily', description: 'Automate repetitive tasks and focus on growth' },
  { icon: Zap, title: 'Instant Setup', description: 'Ready-to-use templates, just import and configure' },
  { icon: Users, title: '10,000+ Users', description: 'Proven templates used by businesses worldwide' },
  { icon: Shield, title: '30-Day Support', description: 'Professional setup includes full support' },
]

export default function AutomationsPage() {
  const { hasPaid, isLoading } = usePayment()
  const [activeCategory, setActiveCategory] = useState('all')
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const filteredAutomations = activeCategory === 'all'
    ? featuredAutomations
    : featuredAutomations.filter(a => a.category === activeCategory)

  const handleCopy = (id: string) => {
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0F0F23] flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full" />
      </div>
    )
  }

  // Show paywall for non-paying users
  if (!hasPaid) {
    return (
      <div className="min-h-screen bg-[#0F0F23]">
        {/* Header */}
        <div className="border-b border-gray-800 bg-[#0a0a1a]">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-6 h-6 text-amber-400" />
                    <h1 className="text-2xl font-bold text-white">n8n Automation Templates</h1>
                    <Lock className="w-5 h-5 text-gray-500" />
                  </div>
                  <p className="text-gray-400">
                    250+ ready-to-use automations - Unlock with purchase
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Locked Content Preview */}
        <div className="container mx-auto px-4 py-8">
          <div className="relative">
            {/* Blurred preview */}
            <div className="blur-sm opacity-50 pointer-events-none">
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-8 mb-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-6 h-6 text-amber-400" />
                      <span className="text-amber-400 font-semibold">FREE ACCESS</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">
                      Transform Your Business with 250+ Ready-to-Use Automations
                    </h2>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {featuredAutomations.slice(0, 4).map((automation) => (
                  <div
                    key={automation.id}
                    className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-5"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center">
                        <automation.icon className="w-5 h-5 text-indigo-400" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-white mb-2">
                      {automation.title}
                    </h4>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {automation.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Paywall Overlay */}
            <Paywall variant="overlay" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0F0F23]">
      {/* Header */}
      <div className="border-b border-gray-800 bg-[#0a0a1a]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-6 h-6 text-amber-400" />
                  <h1 className="text-2xl font-bold text-white">n8n Automation Templates</h1>
                </div>
                <p className="text-gray-400">
                  250+ ready-to-use automations to transform your business
                </p>
              </div>
            </div>
            <motion.a
              href="https://dashboard.startmybusiness.us/training"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg shadow-lg shadow-amber-500/25"
            >
              <Download className="w-5 h-5" />
              Access Free Automations
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-8 mb-8"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-amber-400" />
                <span className="text-amber-400 font-semibold">FREE ACCESS</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Transform Your Business with 250+ Ready-to-Use Automations
              </h2>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Save hours of manual work daily
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Streamline operations across all departments
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Proven templates used by 10,000+ businesses
                </li>
              </ul>
              <motion.a
                href="https://dashboard.startmybusiness.us/training"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg shadow-lg"
              >
                Access Your Free Automations
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>

            {/* Professional n8n Setup Service */}
            <div className="lg:w-96 bg-[#1A1A2E] border border-indigo-500/30 rounded-xl p-6">
              <div className="text-center mb-4">
                <span className="text-amber-400 text-sm font-semibold uppercase tracking-wide">
                  Prompt Vault Exclusive Bonus
                </span>
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">
                Your Own n8n Instance
              </h3>
              <div className="text-center mb-2">
                <span className="text-gray-500 text-sm line-through">$50 setup fee</span>
                <span className="text-green-400 font-bold ml-2">FREE</span>
              </div>
              <div className="text-center mb-4">
                <span className="text-3xl font-bold text-white">2 Months FREE</span>
                <p className="text-gray-400 text-sm mt-1">then just $11.95/mo</p>
              </div>
              <p className="text-gray-400 text-center text-sm mb-4">
                We&apos;ll set up your own self-hosted n8n instance so you can import all automations from the training and start building your own workflows.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Your own dedicated n8n server
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Import all 250+ automation templates
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Professional setup included
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Cancel anytime after 2 months
                </li>
              </ul>
              <motion.a
                href="https://dashboard.startmybusiness.us/training"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-amber-500/25"
              >
                Claim Your Free n8n Setup
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-4 text-center"
            >
              <benefit.icon className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
              <h4 className="font-semibold text-white text-sm">{benefit.title}</h4>
              <p className="text-gray-400 text-xs mt-1">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors ${
                activeCategory === cat.key
                  ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30'
                  : 'bg-[#1A1A2E] text-gray-400 border border-gray-800 hover:text-white'
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Featured Automations Grid */}
        <h3 className="text-xl font-bold text-white mb-4">Featured Automation Templates</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {filteredAutomations.map((automation, index) => (
            <motion.div
              key={automation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-5 hover:border-indigo-500/50 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center">
                  <automation.icon className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                    automation.complexity === 'beginner'
                      ? 'bg-green-500/10 text-green-400'
                      : automation.complexity === 'intermediate'
                        ? 'bg-amber-500/10 text-amber-400'
                        : 'bg-purple-500/10 text-purple-400'
                  }`}>
                    {automation.complexity}
                  </span>
                </div>
              </div>

              <h4 className="font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                {automation.title}
              </h4>
              <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                {automation.description}
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {automation.useCases.map((use) => (
                  <span
                    key={use}
                    className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded"
                  >
                    {use}
                  </span>
                ))}
              </div>

              <motion.a
                href="https://dashboard.startmybusiness.us/training"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 font-medium rounded-lg transition-colors text-sm"
              >
                <Download className="w-4 h-4" />
                Get Template
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Automate Your Business?
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Get instant access to our complete library of 250+ automation templates.
            Import them directly into n8n and start saving hours every day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://dashboard.startmybusiness.us/training"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg shadow-lg"
            >
              <Download className="w-5 h-5" />
              Access Free Automations
            </motion.a>
            <motion.a
              href="https://dashboard.startmybusiness.us/training"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-500 text-white font-bold rounded-lg"
            >
              Get Your Own n8n - 2 Months FREE
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
