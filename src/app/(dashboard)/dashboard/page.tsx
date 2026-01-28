'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FileText,
  Heart,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Gift,
  BookOpen,
  ExternalLink,
  Zap,
  Lock,
  Clock,
  Star,
  ChevronRight,
  Rocket,
  Target,
  Wand2
} from 'lucide-react'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { usePayment } from '@/contexts/payment-context'
import { Paywall, LockedModuleCard } from '@/components/dashboard/paywall'
import { AnimatedCounter } from '@/components/dashboard/animated-counter'

const stats = [
  { 
    icon: FileText, 
    label: 'Main Prompts', 
    value: 500, 
    suffix: '+',
    color: 'text-indigo-400', 
    bg: 'bg-gradient-to-br from-indigo-500/20 to-indigo-600/10',
    border: 'border-indigo-500/20',
    glow: 'group-hover:shadow-indigo-500/20'
  },
  { 
    icon: Gift, 
    label: 'Bonus Prompts', 
    value: 500, 
    suffix: '+',
    color: 'text-amber-400', 
    bg: 'bg-gradient-to-br from-amber-500/20 to-orange-600/10',
    border: 'border-amber-500/20',
    glow: 'group-hover:shadow-amber-500/20'
  },
  { 
    icon: Zap, 
    label: 'Automations', 
    value: 250, 
    suffix: '+',
    color: 'text-orange-400', 
    bg: 'bg-gradient-to-br from-orange-500/20 to-red-600/10',
    border: 'border-orange-500/20',
    glow: 'group-hover:shadow-orange-500/20'
  },
  { 
    icon: Heart, 
    label: 'Your Favorites', 
    value: 0, 
    color: 'text-rose-400', 
    bg: 'bg-gradient-to-br from-rose-500/20 to-pink-600/10',
    border: 'border-rose-500/20',
    glow: 'group-hover:shadow-rose-500/20'
  },
]

const categories = [
  { name: 'ChatGPT', slug: 'chatgpt', emoji: '🤖', count: 75, gradient: 'from-emerald-500/20 to-emerald-600/5' },
  { name: 'Claude', slug: 'claude', emoji: '🧠', count: 75, gradient: 'from-purple-500/20 to-purple-600/5' },
  { name: 'Gemini', slug: 'gemini', emoji: '💎', count: 50, gradient: 'from-blue-500/20 to-blue-600/5' },
  { name: 'Midjourney', slug: 'midjourney', emoji: '🎨', count: 75, gradient: 'from-pink-500/20 to-pink-600/5' },
  { name: 'Video AI', slug: 'video', emoji: '🎬', count: 50, gradient: 'from-red-500/20 to-red-600/5' },
  { name: 'SEO', slug: 'seo', emoji: '📈', count: 75, gradient: 'from-amber-500/20 to-amber-600/5' },
  { name: 'Coding', slug: 'coding', emoji: '💻', count: 50, gradient: 'from-cyan-500/20 to-cyan-600/5' },
  { name: 'N8N', slug: 'n8n', emoji: '⚡', count: 50, gradient: 'from-orange-500/20 to-orange-600/5' },
]

const quickActions = [
  {
    icon: FileText,
    title: 'Browse Prompts',
    description: 'Explore 500+ expert-crafted prompts',
    href: '/dashboard/prompts',
    gradient: 'from-indigo-500 to-purple-600',
    iconBg: 'bg-indigo-500/20',
  },
  {
    icon: Gift,
    title: 'Bonus Prompts',
    description: 'Access 500 extra bonus prompts',
    href: '/dashboard/bonus-prompts',
    gradient: 'from-amber-500 to-orange-600',
    iconBg: 'bg-amber-500/20',
  },
  {
    icon: Zap,
    title: 'N8N Automations',
    description: '250+ ready-to-use workflows',
    href: '/dashboard/automations',
    gradient: 'from-orange-500 to-red-600',
    iconBg: 'bg-orange-500/20',
  },
  {
    icon: BookOpen,
    title: 'Masterclass',
    description: 'Learn prompt engineering',
    href: '/dashboard/masterclass',
    gradient: 'from-emerald-500 to-teal-600',
    iconBg: 'bg-emerald-500/20',
  },
]

const samplePrompts = [
  {
    title: 'Expert Business Consultant',
    category: 'ChatGPT',
    description: 'Act as a world-class business consultant and help me develop a comprehensive strategy...',
    tools: ['GPT-4', 'Claude'],
    emoji: '💼',
  },
  {
    title: 'Professional Product Photography',
    category: 'Image',
    description: 'Create a stunning product photograph with professional studio lighting...',
    tools: ['Midjourney', 'DALL-E'],
    emoji: '📸',
  },
  {
    title: 'SEO Content Framework',
    category: 'SEO',
    description: 'Generate an SEO-optimized content outline for the topic [TOPIC]...',
    tools: ['ChatGPT', 'Claude'],
    emoji: '📈',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function DashboardPage() {
  const { hasPaid, isLoading } = usePayment()
  const firstName = 'there'

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0F0F23] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 border-4 border-indigo-500/30 rounded-full animate-spin border-t-indigo-500" />
            <Sparkles className="absolute inset-0 m-auto w-5 h-5 text-indigo-400" />
          </div>
          <p className="text-gray-400 text-sm">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-4 lg:p-8 space-y-8"
    >
      {/* Welcome Section */}
      <motion.div variants={itemVariants} className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A1A2E] to-[#16162a] border border-gray-800/50 p-6 lg:p-8">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-amber-500/10 to-transparent rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" />
        
        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30">
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl lg:text-3xl font-bold text-white">
                  Welcome back{hasPaid ? '!' : ', ' + firstName + '!'}
                </h1>
                <ThemeToggle />
              </div>
              <p className="text-gray-400">
                {hasPaid 
                  ? 'Your AI prompt library is ready. What will you create today?' 
                  : 'Preview mode active — Unlock full access for just $39'}
              </p>
            </div>
          </div>
          
          {hasPaid ? (
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/dashboard/prompts"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all"
              >
                Browse All Prompts
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          ) : (
            <Paywall variant="inline" />
          )}
        </div>
      </motion.div>

      {/* Paywall Card for Free Users */}
      {!hasPaid && (
        <motion.div variants={itemVariants}>
          <Paywall variant="card" />
        </motion.div>
      )}

      {/* Stats Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className={`group relative overflow-hidden ${stat.bg} rounded-2xl border ${stat.border} p-5 transition-all hover:shadow-xl ${stat.glow} ${!hasPaid ? 'opacity-60' : ''}`}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-white/5 to-transparent" />
            
            <div className="relative flex items-start justify-between">
              <div>
                <div className={`inline-flex p-2.5 rounded-xl ${stat.bg} mb-3`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <p className="text-3xl font-bold text-white mb-1">
                  {hasPaid ? (
                    <AnimatedCounter value={stat.value} suffix={stat.suffix || ''} />
                  ) : (
                    <Lock className="w-6 h-6 text-gray-500" />
                  )}
                </p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Quick Actions */}
      {hasPaid ? (
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-indigo-400" />
            <h2 className="text-lg font-semibold text-white">Quick Access</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Link
                  href={action.href}
                  className="group block h-full bg-gradient-to-br from-[#1A1A2E] to-[#16162a] rounded-2xl border border-gray-800/50 p-5 hover:border-gray-700 transition-all hover:shadow-xl"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-1 group-hover:text-indigo-300 transition-colors">{action.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">{action.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-indigo-400 group-hover:gap-2 transition-all">
                    Explore <ChevronRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-2 mb-4">
            <Lock className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-semibold text-white">Quick Access</h2>
            <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-xs rounded-full">Locked</span>
          </div>
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
        </motion.div>
      )}

      {/* Sample Prompts for Free Users */}
      {!hasPaid && (
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-emerald-400" />
            <h2 className="text-lg font-semibold text-white">Free Sample Prompts</h2>
            <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">Preview</span>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {samplePrompts.map((prompt, index) => (
              <motion.div
                key={prompt.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-gradient-to-br from-[#1A1A2E] to-[#16162a] rounded-2xl border border-gray-800/50 p-5 hover:border-emerald-500/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{prompt.emoji}</span>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-indigo-500/15 text-indigo-400 text-xs rounded-full">
                      {prompt.category}
                    </span>
                    <span className="px-2 py-0.5 bg-emerald-500/15 text-emerald-400 text-xs rounded-full">
                      Free
                    </span>
                  </div>
                </div>
                <h3 className="font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">{prompt.title}</h3>
                <p className="text-sm text-gray-400 mb-3 line-clamp-2">{prompt.description}</p>
                <div className="flex gap-1.5">
                  {prompt.tools.map((tool) => (
                    <span key={tool} className="px-2 py-0.5 bg-gray-800/60 text-gray-400 text-xs rounded-lg">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-6 text-sm">
            Unlock all <span className="text-white font-medium">1000+ prompts</span> with a one-time payment of <span className="text-emerald-400 font-semibold">$39</span>
          </p>
        </motion.div>
      )}

      {/* Categories Grid - Only for paid users */}
      {hasPaid && (
        <motion.div variants={itemVariants}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Wand2 className="w-5 h-5 text-purple-400" />
              <h2 className="text-lg font-semibold text-white">Browse by Category</h2>
            </div>
            <Link
              href="/dashboard/prompts"
              className="text-sm text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
            >
              View all <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {categories.map((category, index) => (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Link
                  href={`/dashboard/prompts?ai_model=${category.slug}`}
                  className={`block bg-gradient-to-br ${category.gradient} rounded-2xl border border-gray-800/50 p-4 text-center hover:border-indigo-500/50 transition-all`}
                >
                  <span className="text-3xl block mb-2">{category.emoji}</span>
                  <h3 className="font-medium text-white text-sm">{category.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{category.count} prompts</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Featured Prompts - Only for paid users */}
      {hasPaid && (
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            <h2 className="text-lg font-semibold text-white">Featured Prompts</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Expert Business Consultant', category: 'ChatGPT', tools: ['GPT-4', 'Claude'], emoji: '💼' },
              { title: 'Professional Product Shot', category: 'Image', tools: ['Midjourney', 'DALL-E'], emoji: '📸' },
              { title: 'SEO Content Framework', category: 'SEO', tools: ['ChatGPT', 'Claude'], emoji: '📈' },
            ].map((prompt, index) => (
              <motion.div
                key={prompt.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-gradient-to-br from-[#1A1A2E] to-[#16162a] rounded-2xl border border-gray-800/50 p-5 hover:border-amber-500/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{prompt.emoji}</span>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 bg-indigo-500/15 text-indigo-400 text-xs rounded-full">
                      {prompt.category}
                    </span>
                    <span className="px-2.5 py-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 text-xs rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      Featured
                    </span>
                  </div>
                </div>
                <h3 className="font-semibold text-white mb-2 group-hover:text-amber-300 transition-colors">{prompt.title}</h3>
                <div className="flex gap-1.5 mb-4">
                  {prompt.tools.map((tool) => (
                    <span key={tool} className="px-2 py-0.5 bg-gray-800/60 text-gray-400 text-xs rounded-lg">
                      {tool}
                    </span>
                  ))}
                </div>
                <Link
                  href="/dashboard/prompts"
                  className="inline-flex items-center gap-1 text-indigo-400 text-sm hover:text-indigo-300 group-hover:gap-2 transition-all"
                >
                  View Prompt <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Pro Tip Card - Only for paid users */}
      {hasPaid && (
        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-indigo-500/20 p-6"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-500/20 rounded-xl">
                <Sparkles className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Pro Tip 💡</h3>
                <p className="text-gray-300 max-w-xl">
                  Customize <span className="text-indigo-300 font-medium">[BRACKETED]</span> variables for best results. 
                  The more specific your input, the better your AI output!
                </p>
              </div>
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/dashboard/masterclass"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white font-medium rounded-xl hover:bg-white/20 transition-all whitespace-nowrap border border-white/10"
              >
                Learn More
                <ExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
