'use client'

import { motion } from 'framer-motion'
import {
  Zap,
  Copy,
  Layers,
  RefreshCw,
  Shield,
  Clock,
  Brain,
  Video
} from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: '500+ Expert Prompts',
    description: 'Access a massive library of professionally crafted prompts across 8 categories. No more trial and error.',
  },
  {
    icon: Copy,
    title: 'Copy & Paste Ready',
    description: 'Every prompt is ready to use immediately. Just copy, customize the [VARIABLES], and get instant results.',
  },
  {
    icon: Layers,
    title: 'Works With All AI Tools',
    description: 'Compatible with ChatGPT, Claude, Gemini, Midjourney, DALL-E, Stable Diffusion, Sora, and more.',
  },
  {
    icon: RefreshCw,
    title: 'Lifetime Updates',
    description: 'Get free updates forever. As AI evolves, so do our prompts. Stay ahead without paying extra.',
  },
  {
    icon: Shield,
    title: 'Battle-Tested Quality',
    description: 'Every prompt has been tested across multiple AI models to ensure consistent, high-quality outputs.',
  },
  {
    icon: Clock,
    title: 'Save 20+ Hours Weekly',
    description: 'Stop wasting time crafting prompts from scratch. Our users report saving 20+ hours per week.',
  },
  {
    icon: Brain,
    title: 'Masterclass Included',
    description: 'Get access to our Prompt Engineering Masterclass with video tutorials from AI experts.',
  },
  {
    icon: Video,
    title: 'Video Prompts',
    description: 'Create stunning videos with Sora, Runway, and Pika using our tested video generation prompts.',
  },
]

export function FeaturesGrid() {
  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why 2,500+ Professionals Choose Us
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Stop struggling with AI outputs. Get the prompts that actually work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group p-6 rounded-xl border border-slate-200 bg-white hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                <feature.icon className="h-6 w-6 text-indigo-500" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
