'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Star, ArrowRight, Sparkles, Check, Shield, Zap, Gift } from 'lucide-react'
import { CountdownTimer } from './countdown-timer'

const rotatingWords = [
  'Actually Work',
  'Save Hours',
  'Get Results',
  '10x Productivity',
]

const features = [
  '500+ Expert Prompts',
  'All Major AI Tools',
  'One-Time Payment',
  'Lifetime Updates',
]

const trustBadges = [
  { icon: Shield, label: '30-Day Guarantee' },
  { icon: Zap, label: 'Instant Access' },
  { icon: Gift, label: 'Bonus Included' },
]

export function Hero() {
  const [currentWord, setCurrentWord] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 lg:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-indigo-500/5 to-transparent rounded-full" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4 text-amber-500" />
              2026&apos;s #1 AI Prompts Library
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6"
          >
            500+ Expert AI Prompts That{' '}
            <span className="relative inline-block">
              <motion.span
                key={currentWord}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
              >
                {rotatingWords[currentWord]}
              </motion.span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto"
          >
            Stop wasting hours on trial and error. Get instant access to expert-tested prompts for{' '}
            <span className="text-slate-900 font-semibold">ChatGPT, Claude, Midjourney, Sora</span> & more.
            Copy, paste, get results.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-sm text-slate-700"
              >
                <Check className="h-4 w-4 text-green-500" />
                {feature}
              </motion.div>
            ))}
          </motion.div>

          {/* Price Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="text-2xl text-slate-400 line-through">$97</span>
            <span className="text-5xl font-bold text-slate-900">$39</span>
            <span className="px-3 py-1 bg-green-500/10 text-green-600 rounded-full text-sm font-semibold border border-green-500/20">
              Save 60%
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                asChild
                size="lg"
                className="px-8 py-6 text-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold shadow-lg shadow-indigo-500/25"
              >
                <Link href="/#pricing" className="flex items-center gap-2">
                  Get Instant Access Now
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900"
            >
              <Link href="#samples">See Sample Prompts</Link>
            </Button>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mb-8"
          >
            <CountdownTimer variant="card" />
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {trustBadges.map((badge, index) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 text-sm text-slate-600"
              >
                <badge.icon className="w-4 h-4 text-indigo-500" />
                {badge.label}
              </div>
            ))}
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8"
          >
            {/* Avatar Stack */}
            <div className="flex -space-x-3">
              {[
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
              ].map((src, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm"
                >
                  <img
                    src={src}
                    alt={`Customer ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                  />
                ))}
                <span className="ml-2 font-bold text-slate-900">5.0</span>
              </div>
              <p className="text-sm text-slate-600">
                Trusted by <span className="text-slate-900 font-semibold">2,500+</span> professionals
              </p>
            </div>
          </motion.div>
        </div>

        {/* Category Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-3 mt-12"
        >
          {[
            { emoji: '🤖', label: 'ChatGPT', href: '/dashboard/prompts?ai_model=chatgpt' },
            { emoji: '🧠', label: 'Claude', href: '/dashboard/prompts?ai_model=claude' },
            { emoji: '🎨', label: 'Midjourney', href: '/dashboard/prompts?ai_model=midjourney' },
            { emoji: '🎬', label: 'Sora', href: '/dashboard/prompts?ai_model=sora' },
            { emoji: '📣', label: 'Marketing', href: '/dashboard/prompts?category=seo' },
            { emoji: '💻', label: 'Coding', href: '/dashboard/prompts?category=coding' },
          ].map((category) => (
            <motion.div
              key={category.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={category.href}
                className="px-4 py-2 bg-white rounded-full border border-slate-200 hover:border-indigo-500/50 hover:bg-indigo-50 transition-all text-sm font-medium text-slate-700 shadow-sm"
              >
                {category.emoji} {category.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
