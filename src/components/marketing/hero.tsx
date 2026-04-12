'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Star, ArrowRight, Shield, Zap, ChevronRight } from 'lucide-react'
import { CountdownTimer } from './countdown-timer'

const rotatingWords = [
  { text: 'Actually Work', color: 'from-emerald-400 to-cyan-400' },
  { text: 'Save Hours', color: 'from-amber-400 to-orange-400' },
  { text: 'Get Results', color: 'from-violet-400 to-fuchsia-400' },
  { text: '10x Output', color: 'from-pink-400 to-rose-400' },
]

const aiTools = [
  { name: 'ChatGPT', emoji: '\u{1F916}' },
  { name: 'Claude', emoji: '\u{1F9E0}' },
  { name: 'Midjourney', emoji: '\u{1F3A8}' },
  { name: 'Gemini', emoji: '\u{1F48E}' },
  { name: 'Sora', emoji: '\u{1F3AC}' },
  { name: 'N8N', emoji: '\u{26A1}' },
]

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return <span>{count.toLocaleString()}{suffix}</span>
}

export function Hero() {
  const [currentWord, setCurrentWord] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-[#0f0f1a]">
      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-600/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[130px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <motion.div style={{ y }} className="relative z-10">
        <div className="container mx-auto px-4 pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="max-w-5xl mx-auto text-center">

            {/* Announcement pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="#pricing"
                className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-violet-500/30 transition-all mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-sm font-medium text-slate-300">
                  <span className="text-gradient font-semibold">2026&apos;s #1</span> AI Prompts Library
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
            >
              <span className="text-gradient">500+ Expert</span> AI Prompts
              <br />
              <span className="relative inline-block mt-2">
                That{' '}
                <span className="relative">
                  <motion.span
                    key={currentWord}
                    initial={{ opacity: 0, y: 30, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: -30, rotateX: 90 }}
                    transition={{ duration: 0.5 }}
                    className={`inline-block bg-gradient-to-r ${rotatingWords[currentWord].color} bg-clip-text text-transparent`}
                  >
                    {rotatingWords[currentWord].text}
                  </motion.span>
                  <motion.span
                    key={`underline-${currentWord}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full origin-left"
                  />
                </span>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Stop wasting hours on trial and error. Get{' '}
              <span className="text-white font-medium">instant access</span> to battle-tested prompts for
              ChatGPT, Claude, Midjourney, Sora & more.{' '}
              <span className="text-gradient font-semibold">Copy. Paste. Results.</span>
            </motion.p>

            {/* AI Tool badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-2 mb-10"
            >
              {aiTools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <span className="text-sm font-medium text-slate-300">
                    {tool.emoji} {tool.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Price card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative max-w-md mx-auto mb-10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-fuchsia-600/20 rounded-2xl blur-xl" />
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                {/* Discount badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-sm font-bold rounded-full shadow-lg shadow-emerald-500/25">
                    60% OFF -- Limited Time
                  </span>
                </div>

                <div className="flex items-center justify-center gap-4 mb-4 mt-2">
                  <span className="text-3xl text-slate-400 line-through font-light">$97</span>
                  <span className="text-6xl font-bold text-white">$39</span>
                </div>

                <p className="text-sm text-slate-300 mb-6">One-time payment -- Lifetime access -- No subscriptions</p>

                {/* CTA */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="#pricing"
                    className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white text-lg font-semibold rounded-xl shadow-xl shadow-violet-500/30 transition-all duration-300"
                  >
                    Get Instant Access
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>

                {/* Trust */}
                <div className="flex items-center justify-center gap-4 mt-4 text-xs text-slate-300">
                  <span className="flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-emerald-500" />
                    30-Day Guarantee
                  </span>
                  <span className="flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    Instant Download
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-10"
            >
              <CountdownTimer variant="card" />
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <div className="flex -space-x-3">
                {[
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=48&h=48&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=48&h=48&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face',
                ].map((src, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="w-11 h-11 rounded-full border-2 border-[#0f0f1a] overflow-hidden ring-2 ring-violet-500/20"
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                  className="w-11 h-11 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 border-2 border-[#0f0f1a] flex items-center justify-center ring-2 ring-violet-500/20"
                >
                  <span className="text-white text-xs font-bold">+2K</span>
                </motion.div>
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 font-bold text-white">5.0</span>
                </div>
                <p className="text-sm text-slate-400">
                  Trusted by <span className="font-semibold text-white"><AnimatedNumber value={2500} />+</span> professionals
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

    </section>
  )
}
