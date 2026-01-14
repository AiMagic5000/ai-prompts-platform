'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Copy, Check, Sparkles, FolderPlus } from 'lucide-react'

interface Prompt {
  id: string
  title: string
  slug?: string
  category: string
  prompt_text: string
  ai_tools: string[]
  difficulty: string
  is_pro?: boolean
  is_featured?: boolean
}

interface PromptCardProps {
  prompt: Prompt
  onFavorite?: (id: string) => void
  isFavorited?: boolean
}

const difficultyColors: Record<string, string> = {
  beginner: 'bg-green-500/20 text-green-400',
  intermediate: 'bg-amber-500/20 text-amber-400',
  advanced: 'bg-red-500/20 text-red-400',
}

const toolEmojis: Record<string, string> = {
  chatgpt: '🤖',
  claude: '🧠',
  gemini: '💎',
  midjourney: '🎨',
  'dall-e': '🖼️',
  'stable-diffusion': '🌀',
  sora: '🎬',
  runway: '🎥',
  copilot: '👨‍💻',
  cursor: '⌨️',
  pika: '🎞️',
  'leonardo-ai': '🎭',
}

const categoryNames: Record<string, string> = {
  'text-generation': 'Text',
  'image-generation': 'Image',
  'video-generation': 'Video',
  'music-generation': 'Music',
  'seo-marketing': 'Marketing',
  'business-strategy': 'Business',
  'coding-development': 'Coding',
  'content-creation': 'Content',
  'prompt-engineering': 'Prompts',
  'real-estate': 'Real Estate',
  'social-media': 'Social',
  'productivity': 'Productivity',
  'creative-writing': 'Creative',
  'data-analysis': 'Data',
}

export function PromptCard({ prompt, onFavorite, isFavorited = false }: PromptCardProps) {
  const [copied, setCopied] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.prompt_text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#1A1A2E] rounded-xl border border-gray-800 overflow-hidden hover:border-indigo-500/50 transition-all group"
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`px-2 py-0.5 text-xs font-medium rounded ${difficultyColors[prompt.difficulty] || 'bg-gray-500/20 text-gray-400'}`}>
              {prompt.difficulty}
            </span>
            <span className="px-2 py-0.5 bg-indigo-500/10 text-indigo-400 text-xs rounded">
              {categoryNames[prompt.category] || prompt.category}
            </span>
            {prompt.is_featured && (
              <span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 text-xs rounded flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Featured
              </span>
            )}
            {prompt.is_pro && (
              <span className="px-2 py-0.5 bg-purple-500/10 text-purple-400 text-xs rounded">
                PRO
              </span>
            )}
          </div>
          <button
            onClick={() => onFavorite?.(prompt.id)}
            className={`p-1.5 rounded-lg transition-colors ${
              isFavorited
                ? 'bg-red-500/20 text-red-400'
                : 'bg-gray-800/50 text-gray-500 hover:text-red-400 hover:bg-red-500/10'
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
          </button>
        </div>
        <h3 className="font-semibold text-white group-hover:text-indigo-400 transition-colors">
          {prompt.title}
        </h3>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* AI Tools */}
        <div className="flex flex-wrap gap-1 mb-3">
          {prompt.ai_tools.map((tool) => (
            <span
              key={tool}
              className="px-2 py-0.5 bg-gray-800/50 text-gray-400 text-xs rounded flex items-center gap-1"
            >
              <span>{toolEmojis[tool] || '🤖'}</span>
              {tool}
            </span>
          ))}
        </div>

        {/* Prompt Text */}
        <div className="relative">
          <pre
            className={`text-sm text-gray-400 whitespace-pre-wrap font-sans bg-[#0F0F23] rounded-lg p-3 ${
              expanded ? '' : 'line-clamp-4'
            }`}
          >
            {prompt.prompt_text}
          </pre>
          {prompt.prompt_text.length > 200 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-indigo-400 text-sm hover:text-indigo-300 mt-2"
            >
              {expanded ? 'Show less' : 'Show more'}
            </button>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-800">
          <motion.button
            onClick={handleCopy}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`flex-1 py-2 px-4 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-colors ${
              copied
                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 hover:bg-indigo-500/20'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy
              </>
            )}
          </motion.button>
          <button className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors">
            <FolderPlus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
