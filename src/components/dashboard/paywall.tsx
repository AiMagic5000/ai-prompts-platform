'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Lock, Sparkles, CheckCircle, Gift, Zap, BookOpen, ArrowRight } from 'lucide-react'

interface PaywallProps {
  variant?: 'overlay' | 'card' | 'inline'
}

// Gumroad payment link - update this with real link
const GUMROAD_LINK = 'https://gumroad.com/l/ai-prompts-library'

export function Paywall({ variant = 'overlay' }: PaywallProps) {
  if (variant === 'card') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-2xl p-8 text-center"
      >
        <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Lock className="w-8 h-8 text-indigo-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Unlock Full Access</h3>
        <p className="text-gray-400 mb-6 max-w-md mx-auto">
          Get instant access to 1000+ expert-crafted AI prompts, bonus content, masterclass, and more.
        </p>

        <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto mb-6">
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <CheckCircle className="w-4 h-4 text-green-400" />
            500+ Prompts
          </div>
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <CheckCircle className="w-4 h-4 text-green-400" />
            500+ Bonus
          </div>
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <CheckCircle className="w-4 h-4 text-green-400" />
            250+ Automations
          </div>
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <CheckCircle className="w-4 h-4 text-green-400" />
            Masterclass
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-gray-500 line-through text-lg">$199</span>
            <span className="text-4xl font-bold text-white">$39</span>
          </div>
          <p className="text-sm text-amber-400">One-time payment • Lifetime access</p>
        </div>

        <motion.a
          href={GUMROAD_LINK}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-lg shadow-lg shadow-indigo-500/25"
        >
          <Sparkles className="w-5 h-5" />
          Get Full Access - $39
          <ArrowRight className="w-5 h-5" />
        </motion.a>

        <p className="text-xs text-gray-500 mt-4">
          30-day money-back guarantee
        </p>
      </motion.div>
    )
  }

  if (variant === 'inline') {
    return (
      <motion.a
        href={GUMROAD_LINK}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-lg hover:border-indigo-500/50 transition-colors"
      >
        <Lock className="w-5 h-5 text-indigo-400" />
        <div className="flex-1">
          <p className="text-white font-medium">Unlock Full Access</p>
          <p className="text-gray-400 text-sm">Get all 1000+ prompts for $39</p>
        </div>
        <ArrowRight className="w-5 h-5 text-indigo-400" />
      </motion.a>
    )
  }

  // Overlay variant (default)
  return (
    <div className="absolute inset-0 bg-[#0F0F23]/95 backdrop-blur-sm flex items-center justify-center z-10 rounded-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8 max-w-md"
      >
        <div className="w-14 h-14 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Lock className="w-7 h-7 text-indigo-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Content Locked</h3>
        <p className="text-gray-400 mb-6">
          Unlock this content and 1000+ more prompts with a one-time payment.
        </p>
        <motion.a
          href={GUMROAD_LINK}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-lg shadow-lg"
        >
          <Sparkles className="w-5 h-5" />
          Unlock for $39
        </motion.a>
      </motion.div>
    </div>
  )
}

export function LockedModuleCard({
  title,
  description,
  icon: Icon,
  badge,
}: {
  title: string
  description: string
  icon: typeof Lock
  badge?: string
}) {
  return (
    <div className="relative bg-[#1A1A2E] border border-gray-800 rounded-xl p-6 opacity-75">
      <div className="absolute inset-0 bg-[#0F0F23]/60 backdrop-blur-[1px] rounded-xl flex items-center justify-center">
        <Lock className="w-8 h-8 text-gray-500" />
      </div>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
          <Icon className="w-5 h-5 text-gray-500" />
        </div>
        {badge && (
          <span className="text-xs bg-gray-800 text-gray-500 px-2 py-1 rounded">
            {badge}
          </span>
        )}
      </div>
      <h3 className="font-semibold text-gray-500 mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}
