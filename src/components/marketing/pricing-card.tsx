'use client'

import { motion } from 'framer-motion'
import { Check, Shield, RefreshCw, Zap, Gift, ArrowRight, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CountdownTimer } from './countdown-timer'

const features = [
  '500 Expert-Crafted AI Prompts',
  'ChatGPT, Claude, Gemini Compatible',
  'Midjourney & DALL-E Image Prompts',
  'Sora & Runway Video Prompts',
  'SEO & Marketing Prompts',
  'Coding & Development Prompts',
  'Instant Digital Access',
  'Lifetime Updates (Free)',
  'Private Discord Community',
  '30-Day Money-Back Guarantee',
]

const bonuses = [
  { label: '+500 EXTRA AI Prompts', value: '$299 value', highlight: true },
  { label: 'Prompt Engineering Masterclass', value: '$197 value', highlight: false },
  { label: 'AI Tool Comparison Guide', value: '$47 value', highlight: false },
  { label: 'Weekly New Prompts Drop', value: '$97/yr value', highlight: false },
]

// Gumroad product URL
const GUMROAD_URL = 'https://coreypearson.gumroad.com/l/eayfol'

export function PricingCard() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-600 text-sm font-medium mb-4">
            Limited Time Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            One Payment. Lifetime Access.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            No subscriptions. No hidden fees. Pay once and get access forever.
          </p>
        </motion.div>

        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative overflow-hidden bg-white rounded-2xl border-2 border-indigo-500/50 shadow-2xl shadow-indigo-500/20"
          >
            {/* Popular badge */}
            <div className="absolute top-0 right-0">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold px-4 py-1 rounded-bl-lg">
                Best Value
              </div>
            </div>

            <div className="p-8">
              {/* Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  AI Prompts Library
                </h3>
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-slate-400 line-through text-2xl">$97</span>
                  <span className="text-5xl font-bold text-slate-900">$39</span>
                </div>
                <div className="inline-block px-3 py-1 bg-green-500/10 text-green-600 rounded-full text-sm font-semibold border border-green-500/20">
                  Save $58 (60% OFF)
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Bonuses with Timer */}
              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl p-4 mb-6 border border-amber-500/30">
                <div className="flex items-center gap-2 mb-3">
                  <Gift className="h-5 w-5 text-amber-500" />
                  <h4 className="font-semibold text-amber-600">
                    FREE Bonuses (Limited Time!)
                  </h4>
                </div>

                <ul className="space-y-2 mb-4">
                  {bonuses.map((bonus, index) => (
                    <li
                      key={bonus.label}
                      className={`flex items-center justify-between text-sm ${
                        bonus.highlight ? 'text-amber-700 font-semibold' : 'text-slate-700'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-amber-500" />
                        {bonus.label}
                      </span>
                      <span className="text-slate-500">{bonus.value}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-sm text-amber-700 bg-amber-500/10 rounded-lg p-2">
                  <Clock className="w-4 h-4" />
                  <span>Bonus expires in:</span>
                  <CountdownTimer variant="inline" />
                </div>
              </div>

              {/* CTA */}
              <motion.a
                href={GUMROAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full py-4 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-indigo-500/25 text-center transition-all"
              >
                <span className="flex items-center justify-center gap-2">
                  Get Instant Access Now
                  <ArrowRight className="w-5 h-5" />
                </span>
              </motion.a>

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-6 mt-6 text-sm text-slate-500">
                <div className="flex items-center gap-1">
                  <Shield className="h-4 w-4" />
                  Secure Payment
                </div>
                <div className="flex items-center gap-1">
                  <RefreshCw className="h-4 w-4" />
                  30-Day Guarantee
                </div>
              </div>

              {/* Total Value */}
              <div className="mt-6 pt-6 border-t border-slate-200 text-center">
                <p className="text-slate-600 text-sm">
                  Total Value: <span className="text-slate-900 font-bold">$438+</span>
                </p>
                <p className="text-indigo-600 font-semibold">
                  You Pay: Just $39
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
