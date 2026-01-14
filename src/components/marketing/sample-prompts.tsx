'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check, ExternalLink, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const samplePrompts = {
  chatgpt: [
    {
      title: 'Business Strategy Expert',
      category: 'Business',
      prompt: `You are a senior business consultant with 20 years of experience helping startups scale to $10M+ revenue. I need help with [BUSINESS CHALLENGE].

Please provide:
1. A diagnostic analysis of the situation
2. 3 strategic options with pros/cons
3. Your recommended approach with implementation steps
4. Key metrics to track success
5. Potential risks and mitigation strategies

Be specific, practical, and data-driven in your response.`,
    },
    {
      title: 'Content Marketing Framework',
      category: 'Marketing',
      prompt: `Act as a content marketing strategist who has generated millions in revenue through content.

I want to create a content strategy for [BUSINESS/NICHE]. My target audience is [AUDIENCE DESCRIPTION].

Please provide:
1. 10 high-converting content pillar topics
2. 5 content formats that work best for this niche
3. A 30-day content calendar
4. SEO keywords to target for each piece
5. Distribution strategy across platforms

Focus on content that drives leads and sales, not just traffic.`,
    },
  ],
  claude: [
    {
      title: 'Technical Documentation Writer',
      category: 'Development',
      prompt: `You are a senior technical writer specializing in developer documentation. Create comprehensive documentation for [PROJECT/API/FEATURE].

Include:
1. Overview and purpose
2. Quick start guide with code examples
3. API reference with parameters and return values
4. Common use cases and examples
5. Troubleshooting section
6. Best practices and tips

Use clear, concise language. Include code blocks in appropriate languages. Follow Google's developer documentation style guide.`,
    },
    {
      title: 'Code Review Assistant',
      category: 'Development',
      prompt: `As an expert code reviewer, analyze the following code for:

1. Security vulnerabilities (OWASP top 10)
2. Performance optimizations
3. Code quality and maintainability
4. Design pattern improvements
5. Error handling gaps
6. Testing recommendations

Provide specific, actionable feedback with code examples for improvements. Rate severity of each issue (Critical/High/Medium/Low).

Code to review:
[PASTE CODE HERE]`,
    },
  ],
  image: [
    {
      title: 'Photorealistic Product Shot',
      category: 'E-commerce',
      prompt: `Professional product photography of [PRODUCT] on a clean white marble surface, soft natural window lighting from the left, shallow depth of field, 85mm lens, high-end commercial photography style, subtle reflection on surface, 8K ultra-detailed, shot on Phase One IQ4 --ar 4:5 --v 6 --style raw`,
    },
    {
      title: 'Modern Brand Hero Image',
      category: 'Branding',
      prompt: `Minimalist hero image for [BRAND TYPE] website, abstract flowing gradients in [COLOR 1] and [COLOR 2], geometric 3D shapes floating in space, glassmorphism elements, soft ambient lighting, modern SaaS aesthetic, wide composition for web banner --ar 16:9 --v 6`,
    },
  ],
  video: [
    {
      title: 'Product Demo Intro',
      category: 'Marketing',
      prompt: `A sleek 5-second product reveal animation: [PRODUCT] emerges from soft particles of light, camera slowly orbits, premium dark gradient background with subtle purple and gold accents, cinematic lighting with rim light, smooth slow motion at 60fps, Apple-style product showcase aesthetic`,
    },
    {
      title: 'Social Media Hook',
      category: 'Content',
      prompt: `Fast-paced 3-second attention grabber: Quick zoom into [SUBJECT], dynamic motion blur transitions, bold text overlay animation, vibrant colors with high contrast, punchy energetic feel, TikTok/Reels optimized vertical format --ar 9:16`,
    },
  ],
  seo: [
    {
      title: 'SEO Blog Post Structure',
      category: 'Content',
      prompt: `Create an SEO-optimized blog post outline for the topic: [TOPIC]

Include:
1. Compelling title with primary keyword
2. Meta description (150-160 characters)
3. H1 and H2 structure with keywords
4. Introduction hook with keyword in first 100 words
5. 5-7 main sections with subheadings
6. FAQ section targeting featured snippets
7. Call-to-action placement
8. Internal linking suggestions
9. Schema markup recommendations

Target keyword: [PRIMARY KEYWORD]
Secondary keywords: [SECONDARY KEYWORDS]`,
    },
  ],
}

type TabKey = keyof typeof samplePrompts

const tabs: { key: TabKey; label: string; icon: string }[] = [
  { key: 'chatgpt', label: 'ChatGPT', icon: '🤖' },
  { key: 'claude', label: 'Claude', icon: '🧠' },
  { key: 'image', label: 'Image', icon: '🎨' },
  { key: 'video', label: 'Video', icon: '🎬' },
  { key: 'seo', label: 'SEO', icon: '📈' },
]

export function SamplePrompts() {
  const [activeTab, setActiveTab] = useState<TabKey>('chatgpt')
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleCopy = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <section id="samples" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-600 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Try Before You Buy
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Sample Prompts
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Here&apos;s a taste of what&apos;s inside. Copy any of these and see the difference quality prompts make.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-8 overflow-x-auto pb-2"
        >
          <div className="inline-flex bg-slate-100 rounded-xl p-1.5 border border-slate-200">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  activeTab === tab.key
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                }`}
              >
                <span>{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Prompt Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {samplePrompts[activeTab].map((prompt, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all"
              >
                <div className="p-5 border-b border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-indigo-500/10 text-indigo-600 text-xs font-medium rounded">
                      {prompt.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900">{prompt.title}</h3>
                </div>
                <div className="p-5 bg-slate-50">
                  <div className="bg-white rounded-lg p-4 font-mono text-sm text-slate-700 max-h-48 overflow-y-auto border border-slate-200">
                    <pre className="whitespace-pre-wrap">{prompt.prompt}</pre>
                  </div>
                  <motion.button
                    onClick={() => handleCopy(prompt.prompt, index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full mt-4 py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors ${
                      copiedIndex === index
                        ? 'bg-green-500/10 text-green-600 border border-green-500/30'
                        : 'bg-indigo-500/10 text-indigo-600 border border-indigo-500/30 hover:bg-indigo-500/20'
                    }`}
                  >
                    {copiedIndex === index ? (
                      <>
                        <Check className="h-4 w-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        Copy Prompt
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-slate-600 mb-4">
            This is just a sample of 500+ prompts. Get the complete library.
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold shadow-lg shadow-indigo-500/25"
            >
              <Link href="/#pricing" className="flex items-center gap-2">
                Get All 500+ Prompts
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
