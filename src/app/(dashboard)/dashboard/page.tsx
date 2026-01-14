'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FileText,
  Heart,
  FolderOpen,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Gift,
  BookOpen,
  Wrench,
  ExternalLink,
  Zap,
  Lock
} from 'lucide-react'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { usePayment } from '@/contexts/payment-context'
import { Paywall, LockedModuleCard } from '@/components/dashboard/paywall'

const stats = [
  { icon: FileText, label: 'Total Prompts', value: '500+', color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
  { icon: Gift, label: 'Bonus Prompts', value: '500+', color: 'text-amber-400', bg: 'bg-amber-500/10' },
  { icon: Zap, label: 'Automations', value: '250+', color: 'text-orange-400', bg: 'bg-orange-500/10' },
  { icon: Heart, label: 'Favorites', value: '0', color: 'text-red-400', bg: 'bg-red-500/10' },
]

const categories = [
  { name: 'ChatGPT', slug: 'chatgpt', emoji: '🤖', count: 75 },
  { name: 'Claude', slug: 'claude', emoji: '🧠', count: 75 },
  { name: 'Gemini', slug: 'gemini', emoji: '💎', count: 50 },
  { name: 'Midjourney', slug: 'midjourney', emoji: '🎨', count: 75 },
  { name: 'Video AI', slug: 'video', emoji: '🎬', count: 50 },
  { name: 'SEO', slug: 'seo', emoji: '📈', count: 75 },
  { name: 'Coding', slug: 'coding', emoji: '💻', count: 50 },
  { name: 'n8n', slug: 'n8n', emoji: '⚡', count: 50 },
]

const quickActions = [
  {
    icon: FileText,
    title: 'Browse Prompts',
    description: 'Explore 500+ expert-crafted prompts',
    href: '/dashboard/prompts',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Gift,
    title: 'Bonus Prompts',
    description: 'Access 500 extra bonus prompts',
    href: '/dashboard/bonus-prompts',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Zap,
    title: 'n8n Automations',
    description: '250+ ready-to-use workflows',
    href: '/dashboard/automations',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: BookOpen,
    title: 'Masterclass',
    description: 'Learn prompt engineering',
    href: '/dashboard/masterclass',
    color: 'from-green-500 to-emerald-500',
  },
]

// Sample prompts available to free users (same as home page)
const samplePrompts = [
  {
    title: 'Expert Business Consultant',
    category: 'ChatGPT',
    description: 'Act as a world-class business consultant and help me develop a comprehensive strategy...',
    tools: ['GPT-4', 'Claude'],
  },
  {
    title: 'Professional Product Photography',
    category: 'Image',
    description: 'Create a stunning product photograph with professional studio lighting...',
    tools: ['Midjourney', 'DALL-E'],
  },
  {
    title: 'SEO Content Framework',
    category: 'SEO',
    description: 'Generate an SEO-optimized content outline for the topic [TOPIC]...',
    tools: ['ChatGPT', 'Claude'],
  },
]

export default function DashboardPage() {
  const { hasPaid, isLoading } = usePayment()
  // Demo mode - no user authentication required
  const firstName = 'there'

  if (isLoading) {
    return (
      <div className="p-6 lg:p-8 flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full" />
      </div>
    )
  }

  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Welcome back, {firstName}!
            </h1>
            <p className="text-gray-400 mt-1">
              {hasPaid ? 'Access your library of 1000+ AI prompts' : 'Preview mode - Unlock full access for $39'}
            </p>
          </div>
        </div>
        {hasPaid ? (
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/dashboard/prompts"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg shadow-indigo-500/25"
            >
              Browse All Prompts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        ) : (
          <Paywall variant="inline" />
        )}
      </motion.div>

      {/* Paywall Card for Free Users */}
      {!hasPaid && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Paywall variant="card" />
        </motion.div>
      )}

      {/* Stats Grid - Locked for free users */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-[#1A1A2E] rounded-xl border border-gray-800 p-4 ${!hasPaid ? 'opacity-60' : ''}`}
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${stat.bg}`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{hasPaid ? stat.value : <Lock className="w-5 h-5 text-gray-500" />}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions - Locked for free users */}
      {hasPaid ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Link
                href={action.href}
                className="block h-full bg-[#1A1A2E] rounded-xl border border-gray-800 p-5 hover:border-gray-700 transition-colors"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center mb-3`}>
                  <action.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-1">{action.title}</h3>
                <p className="text-sm text-gray-400">{action.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <LockedModuleCard
              key={action.title}
              title={action.title}
              description={action.description}
              icon={action.icon}
            />
          ))}
        </div>
      )}

      {/* Sample Prompts for Free Users */}
      {!hasPaid && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-green-400" />
            <h2 className="text-lg font-semibold text-white">Free Sample Prompts</h2>
            <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded">Preview</span>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {samplePrompts.map((prompt, index) => (
              <motion.div
                key={prompt.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-[#1A1A2E] rounded-xl border border-gray-800 p-5 hover:border-gray-700 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 bg-indigo-500/10 text-indigo-400 text-xs rounded">
                    {prompt.category}
                  </span>
                  <span className="px-2 py-0.5 bg-green-500/10 text-green-400 text-xs rounded">
                    Free Sample
                  </span>
                </div>
                <h3 className="font-semibold text-white mb-2">{prompt.title}</h3>
                <p className="text-sm text-gray-400 mb-3 line-clamp-2">{prompt.description}</p>
                <div className="flex gap-1">
                  {prompt.tools.map((tool) => (
                    <span key={tool} className="px-2 py-0.5 bg-gray-800 text-gray-400 text-xs rounded">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-4 text-sm">
            Unlock all 1000+ prompts with a one-time payment of $39
          </p>
        </div>
      )}

      {/* Categories Grid - Only for paid users */}
      {hasPaid && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">Browse by Category</h2>
            <Link
              href="/dashboard/prompts"
              className="text-sm text-indigo-400 hover:text-indigo-300"
            >
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {categories.map((category, index) => (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  href={`/dashboard/prompts?ai_model=${category.slug}`}
                  className="block bg-[#1A1A2E] rounded-xl border border-gray-800 p-4 text-center hover:border-indigo-500/50 transition-colors"
                >
                  <span className="text-2xl block mb-2">{category.emoji}</span>
                  <h3 className="font-medium text-white text-sm">{category.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{category.count}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Featured Prompts - Only for paid users */}
      {hasPaid && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg font-semibold text-white">Featured Prompts</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Expert Business Consultant', category: 'ChatGPT', tools: ['GPT-4', 'Claude'] },
              { title: 'Professional Product Shot', category: 'Image', tools: ['Midjourney', 'DALL-E'] },
              { title: 'SEO Content Framework', category: 'SEO', tools: ['ChatGPT', 'Claude'] },
            ].map((prompt, index) => (
              <motion.div
                key={prompt.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-[#1A1A2E] rounded-xl border border-gray-800 p-5 hover:border-gray-700 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 bg-indigo-500/10 text-indigo-400 text-xs rounded">
                    {prompt.category}
                  </span>
                  <span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 text-xs rounded">
                    Featured
                  </span>
                </div>
                <h3 className="font-semibold text-white mb-2">{prompt.title}</h3>
                <div className="flex gap-1 mb-4">
                  {prompt.tools.map((tool) => (
                    <span key={tool} className="px-2 py-0.5 bg-gray-800 text-gray-400 text-xs rounded">
                      {tool}
                    </span>
                  ))}
                </div>
                <Link
                  href="/dashboard/prompts"
                  className="text-indigo-400 text-sm hover:text-indigo-300 flex items-center gap-1"
                >
                  View Prompt
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Pro Tip Card - Only for paid users */}
      {hasPaid && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl border border-indigo-500/30 p-6"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Pro Tip</h3>
              <p className="text-gray-300 max-w-2xl">
                Get the most out of your prompts by customizing the [BRACKETED] variables.
                The more specific your input, the better your AI output will be.
                Save your favorites for quick access later!
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/dashboard/masterclass"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors whitespace-nowrap"
              >
                Learn More
                <ExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
