'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star, ArrowRight, Sparkles, Check } from 'lucide-react'

const rotatingWords = [
  'Actually Work',
  'Save Hours',
  'Get Results',
  'Boost Productivity',
]

const features = [
  '1000+ tested prompts',
  'Works with all AI tools',
  'One-time payment',
  'Lifetime updates',
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
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50 py-20 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20 -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
            <Sparkles className="h-4 w-4 mr-2 text-amber-500" />
            1000+ Expert-Crafted Prompts
          </Badge>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            AI Prompts That{' '}
            <span className="relative inline-block">
              <span className="text-indigo-600 transition-all duration-500">
                {rotatingWords[currentWord]}
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-amber-500 rounded-full" />
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Stop wasting hours on trial and error. Get instant access to 1000+
            expert-tested prompts for ChatGPT, Claude, Midjourney, and more.
            Copy, paste, get results.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-1.5 text-sm text-gray-600"
              >
                <Check className="h-4 w-4 text-green-500" />
                {feature}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              asChild
              size="xl"
              variant="accent"
              className="shadow-lg shadow-amber-500/25"
            >
              <Link href="/get-access">
                Get Instant Access - $39
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link href="#samples">See Sample Prompts</Link>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Avatar Stack */}
            <div className="flex -space-x-3">
              {['#6366f1', '#8b5cf6', '#a855f7', '#d946ef', '#ec4899'].map((color, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold border-2 border-white"
                  style={{ backgroundColor: color }}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>

            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                  />
                ))}
                <span className="ml-2 font-bold text-gray-900">5.0</span>
              </div>
              <p className="text-sm text-gray-600">
                Trusted by <strong>5,000+</strong> professionals
              </p>
            </div>
          </div>
        </div>

        {/* Category Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-12">
          {[
            { emoji: '🤖', label: 'ChatGPT', href: '/prompts?tool=chatgpt' },
            { emoji: '🎨', label: 'AI Art', href: '/prompts?category=image-generation' },
            { emoji: '🎬', label: 'Video', href: '/prompts?category=video-generation' },
            { emoji: '📣', label: 'Marketing', href: '/prompts?category=seo-marketing' },
            { emoji: '💻', label: 'Coding', href: '/prompts?category=coding-development' },
            { emoji: '✍️', label: 'Writing', href: '/prompts?category=content-creation' },
          ].map((category) => (
            <Link
              key={category.label}
              href={category.href}
              className="px-4 py-2 bg-white rounded-full border shadow-sm hover:shadow-md hover:border-indigo-300 transition-all text-sm font-medium"
            >
              {category.emoji} {category.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
