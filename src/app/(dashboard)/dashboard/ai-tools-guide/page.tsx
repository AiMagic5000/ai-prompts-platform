'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Star, ExternalLink, Filter, MessageSquare, Image, Video, Code, Sparkles } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/theme-toggle'

interface AITool {
  name: string
  category: 'text' | 'image' | 'video' | 'code' | 'automation'
  logo: string
  description: string
  pricing: string
  bestFor: string
  pros: string[]
  cons: string[]
  rating: number
  url: string
}

const tools: AITool[] = [
  {
    name: 'ChatGPT',
    category: 'text',
    logo: '🤖',
    description: 'OpenAI\'s flagship conversational AI. Best for general-purpose tasks, coding, and creative writing.',
    pricing: 'Free / $20/mo (Plus) / $200/mo (Pro)',
    bestFor: 'General tasks, coding, analysis',
    pros: ['Versatile', 'Great at coding', 'Huge knowledge base', 'Plugins available'],
    cons: ['Can hallucinate', 'Knowledge cutoff', 'Rate limits on free tier'],
    rating: 4.8,
    url: 'https://chat.openai.com',
  },
  {
    name: 'Claude',
    category: 'text',
    logo: '🧠',
    description: 'Anthropic\'s AI assistant. Excels at long-form content, analysis, and technical documentation.',
    pricing: 'Free / $20/mo (Pro)',
    bestFor: 'Long documents, coding, research',
    pros: ['200K context window', 'Excellent reasoning', 'Less prone to hallucinations', 'Great at code'],
    cons: ['Slower than GPT-4o', 'No internet access', 'Smaller ecosystem'],
    rating: 4.7,
    url: 'https://claude.ai',
  },
  {
    name: 'Gemini',
    category: 'text',
    logo: '💎',
    description: 'Google\'s multimodal AI. Integrated with Google services and excellent at research tasks.',
    pricing: 'Free / $20/mo (Advanced)',
    bestFor: 'Research, Google integration',
    pros: ['Multimodal', 'Google integration', '1M token context', 'Real-time search'],
    cons: ['Inconsistent quality', 'Less refined than GPT-4', 'Privacy concerns'],
    rating: 4.3,
    url: 'https://gemini.google.com',
  },
  {
    name: 'Midjourney',
    category: 'image',
    logo: '🎨',
    description: 'The gold standard for AI image generation. Creates stunning, artistic images with unique aesthetics.',
    pricing: '$10-60/mo',
    bestFor: 'Artistic images, marketing visuals',
    pros: ['Best aesthetics', 'Consistent quality', 'Great community', 'Style variety'],
    cons: ['Discord-only', 'Learning curve', 'No free tier', 'Less photorealistic'],
    rating: 4.9,
    url: 'https://midjourney.com',
  },
  {
    name: 'DALL-E 3',
    category: 'image',
    logo: '🖼️',
    description: 'OpenAI\'s image generator. Great prompt following and text rendering in images.',
    pricing: 'Included in ChatGPT Plus',
    bestFor: 'Precise prompt following, text in images',
    pros: ['Best text rendering', 'Easy to use', 'Integrated with ChatGPT', 'Natural prompts'],
    cons: ['Limited styles', 'Lower resolution', 'Content restrictions'],
    rating: 4.5,
    url: 'https://openai.com/dall-e-3',
  },
  {
    name: 'Stable Diffusion',
    category: 'image',
    logo: '🌀',
    description: 'Open-source image generation. Highly customizable with local deployment options.',
    pricing: 'Free (open source)',
    bestFor: 'Custom models, local generation',
    pros: ['Free & open source', 'Highly customizable', 'Local deployment', 'Community models'],
    cons: ['Technical setup', 'Hardware requirements', 'Inconsistent quality'],
    rating: 4.4,
    url: 'https://stability.ai',
  },
  {
    name: 'Sora',
    category: 'video',
    logo: '🎬',
    description: 'OpenAI\'s video generation model. Creates high-quality, realistic videos from text prompts.',
    pricing: 'Included in ChatGPT Plus/Pro',
    bestFor: 'Short-form video, cinematics',
    pros: ['Stunning quality', 'Physics understanding', 'Long clips', 'Camera control'],
    cons: ['Limited access', 'Generation time', 'No audio'],
    rating: 4.6,
    url: 'https://openai.com/sora',
  },
  {
    name: 'Runway',
    category: 'video',
    logo: '🎥',
    description: 'Professional video AI suite. Offers Gen-3 Alpha video generation plus extensive editing tools.',
    pricing: '$12-76/mo',
    bestFor: 'Professional video production',
    pros: ['Professional tools', 'Good quality', 'Image-to-video', 'Editor suite'],
    cons: ['Expensive', 'Credit-based', 'Shorter clips'],
    rating: 4.4,
    url: 'https://runwayml.com',
  },
  {
    name: 'GitHub Copilot',
    category: 'code',
    logo: '👨‍💻',
    description: 'AI pair programmer. Integrated directly into your IDE for real-time code suggestions.',
    pricing: '$10-39/mo',
    bestFor: 'Code completion, IDE integration',
    pros: ['IDE integration', 'Fast suggestions', 'Multiple languages', 'Context-aware'],
    cons: ['Subscription required', 'Privacy concerns', 'Variable quality'],
    rating: 4.6,
    url: 'https://github.com/features/copilot',
  },
  {
    name: 'Cursor',
    category: 'code',
    logo: '⌨️',
    description: 'AI-first code editor. Built from scratch with AI integration as the core feature.',
    pricing: '$20/mo (Pro)',
    bestFor: 'AI-native coding experience',
    pros: ['Native AI features', 'Great UX', 'Multi-model support', 'Codebase context'],
    cons: ['New product', 'VS Code fork', 'Learning curve'],
    rating: 4.5,
    url: 'https://cursor.sh',
  },
  {
    name: 'n8n',
    category: 'automation',
    logo: '⚡',
    description: 'Open-source workflow automation. Connect AI models with 400+ apps for powerful automations.',
    pricing: 'Free (self-hosted) / $20/mo (cloud)',
    bestFor: 'AI-powered automations',
    pros: ['Open source', 'Visual builder', 'AI integrations', 'Self-hosted option'],
    cons: ['Technical setup', 'Learning curve', 'Complex workflows'],
    rating: 4.7,
    url: 'https://n8n.io',
  },
  {
    name: 'Make (Integromat)',
    category: 'automation',
    logo: '🔗',
    description: 'Visual automation platform. Easier to use than n8n with extensive app integrations.',
    pricing: 'Free / $9-16/mo',
    bestFor: 'No-code automations',
    pros: ['User-friendly', 'Many integrations', 'Good AI apps', 'Visual builder'],
    cons: ['Expensive at scale', 'Limited free tier', 'Slower than n8n'],
    rating: 4.5,
    url: 'https://make.com',
  },
]

const categories = [
  { key: 'all', label: 'All Tools', icon: Sparkles },
  { key: 'text', label: 'Text AI', icon: MessageSquare },
  { key: 'image', label: 'Image AI', icon: Image },
  { key: 'video', label: 'Video AI', icon: Video },
  { key: 'code', label: 'Code AI', icon: Code },
  { key: 'automation', label: 'Automation', icon: Filter },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < Math.floor(rating)
              ? 'fill-amber-400 text-amber-400'
              : i < rating
                ? 'fill-amber-400/50 text-amber-400'
                : 'text-gray-600'
          }`}
        />
      ))}
      <span className="ml-1 text-sm text-gray-400">{rating.toFixed(1)}</span>
    </div>
  )
}

export default function AIToolsGuidePage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredTools = tools.filter(tool => {
    const matchesCategory = activeCategory === 'all' || tool.category === activeCategory
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-[#0F0F23]">
      {/* Header */}
      <div className="border-b border-gray-800 bg-[#0a0a1a]">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-white mb-2">AI Tools Comparison Guide</h1>
          <p className="text-gray-400">
            Compare the best AI tools for text, image, video, code, and automation
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#1A1A2E] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
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
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-[#1A1A2E] rounded-xl border border-gray-800 overflow-hidden hover:border-indigo-500/50 transition-colors"
            >
              {/* Header */}
              <div className="p-5 border-b border-gray-800">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{tool.logo}</span>
                    <div>
                      <h3 className="font-semibold text-white">{tool.name}</h3>
                      <span className="text-xs text-indigo-400 capitalize">{tool.category}</span>
                    </div>
                  </div>
                  <StarRating rating={tool.rating} />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-gray-400 text-sm mb-4">
                  {tool.description}
                </p>

                <div className="space-y-3">
                  <div>
                    <span className="text-xs text-gray-500">Pricing</span>
                    <p className="text-sm text-white">{tool.pricing}</p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500">Best For</span>
                    <p className="text-sm text-white">{tool.bestFor}</p>
                  </div>
                </div>

                {/* Pros/Cons */}
                <div className="mt-4 pt-4 border-t border-gray-800 grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs text-green-400 font-medium">Pros</span>
                    <ul className="mt-1 space-y-1">
                      {tool.pros.slice(0, 3).map((pro, i) => (
                        <li key={i} className="text-xs text-gray-400">+ {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-xs text-red-400 font-medium">Cons</span>
                    <ul className="mt-1 space-y-1">
                      {tool.cons.slice(0, 3).map((con, i) => (
                        <li key={i} className="text-xs text-gray-400">- {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 py-2 px-4 bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 rounded-lg text-sm font-medium hover:bg-indigo-500/20 transition-colors"
                >
                  Visit {tool.name}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No tools found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
