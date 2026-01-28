'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Copy, Check, Sparkles, FolderPlus, X, Expand, ExternalLink } from 'lucide-react'
import { useToast } from '@/components/ui/toast'

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

const difficultyColors: Record<string, { bg: string; text: string; glow: string }> = {
  beginner: { bg: 'bg-emerald-500/15', text: 'text-emerald-400', glow: 'shadow-emerald-500/20' },
  intermediate: { bg: 'bg-amber-500/15', text: 'text-amber-400', glow: 'shadow-amber-500/20' },
  advanced: { bg: 'bg-rose-500/15', text: 'text-rose-400', glow: 'shadow-rose-500/20' },
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

// Quick Preview Modal
function PreviewModal({ 
  prompt, 
  isOpen, 
  onClose,
  onCopy,
  copied
}: { 
  prompt: Prompt
  isOpen: boolean
  onClose: () => void
  onCopy: () => void
  copied: boolean
}) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        
        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl max-h-[85vh] overflow-hidden bg-[#1A1A2E] rounded-2xl border border-gray-700 shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <div>
              <h3 className="text-lg font-semibold text-white">{prompt.title}</h3>
              <div className="flex items-center gap-2 mt-1">
                {prompt.ai_tools.slice(0, 3).map((tool) => (
                  <span key={tool} className="text-xs text-gray-400">
                    {toolEmojis[tool] || '🤖'} {tool}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Content */}
          <div className="p-4 overflow-y-auto max-h-[60vh]">
            <pre className="text-sm text-gray-300 whitespace-pre-wrap font-sans bg-[#0F0F23] rounded-xl p-4 border border-gray-800">
              {prompt.prompt_text}
            </pre>
          </div>
          
          {/* Footer */}
          <div className="flex items-center justify-between p-4 border-t border-gray-800 bg-[#0F0F23]">
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${difficultyColors[prompt.difficulty]?.bg} ${difficultyColors[prompt.difficulty]?.text}`}>
                {prompt.difficulty}
              </span>
              <span className="px-2.5 py-1 bg-indigo-500/15 text-indigo-400 text-xs rounded-full">
                {categoryNames[prompt.category] || prompt.category}
              </span>
            </div>
            <motion.button
              onClick={onCopy}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`py-2.5 px-6 rounded-xl font-medium text-sm flex items-center gap-2 transition-all ${
                copied
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                  : 'bg-indigo-500 text-white hover:bg-indigo-600 shadow-lg shadow-indigo-500/30'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied to Clipboard!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy Prompt
                </>
              )}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export function PromptCard({ prompt, onFavorite, isFavorited = false }: PromptCardProps) {
  const [copied, setCopied] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const { addToast } = useToast()

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(prompt.prompt_text)
      setCopied(true)
      addToast('Prompt copied to clipboard!', 'copy')
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      addToast('Failed to copy prompt', 'error')
    }
  }, [prompt.prompt_text, addToast])

  const handleFavorite = useCallback(() => {
    onFavorite?.(prompt.id)
    addToast(isFavorited ? 'Removed from favorites' : 'Added to favorites!', 'success')
  }, [onFavorite, prompt.id, isFavorited, addToast])

  const difficultyStyle = difficultyColors[prompt.difficulty] || { bg: 'bg-gray-500/15', text: 'text-gray-400', glow: '' }

  return (
    <>
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="relative bg-gradient-to-br from-[#1A1A2E] to-[#16162a] rounded-2xl border border-gray-800/80 overflow-hidden group hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
      >
        {/* Glow effect on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none"
        />

        {/* Header */}
        <div className="relative p-4 pb-3">
          <div className="flex items-start justify-between gap-2 mb-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${difficultyStyle.bg} ${difficultyStyle.text}`}>
                {prompt.difficulty}
              </span>
              <span className="px-2.5 py-1 bg-indigo-500/15 text-indigo-400 text-xs font-medium rounded-full">
                {categoryNames[prompt.category] || prompt.category}
              </span>
              {prompt.is_featured && (
                <motion.span 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="px-2.5 py-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 text-xs font-medium rounded-full flex items-center gap-1 border border-amber-500/20"
                >
                  <Sparkles className="w-3 h-3" />
                  Featured
                </motion.span>
              )}
            </div>
            <motion.button
              onClick={handleFavorite}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-xl transition-all ${
                isFavorited
                  ? 'bg-gradient-to-br from-rose-500/30 to-pink-500/30 text-rose-400 shadow-lg shadow-rose-500/20'
                  : 'bg-gray-800/50 text-gray-500 hover:text-rose-400 hover:bg-rose-500/10'
              }`}
            >
              <Heart className={`w-4 h-4 transition-all ${isFavorited ? 'fill-current scale-110' : ''}`} />
            </motion.button>
          </div>
          <h3 className="font-semibold text-white group-hover:text-indigo-300 transition-colors line-clamp-2">
            {prompt.title}
          </h3>
        </div>

        {/* Content */}
        <div className="px-4 pb-4">
          {/* AI Tools */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {prompt.ai_tools.slice(0, 4).map((tool) => (
              <span
                key={tool}
                className="px-2 py-1 bg-gray-800/60 text-gray-400 text-xs rounded-lg flex items-center gap-1 border border-gray-700/50"
              >
                <span className="text-sm">{toolEmojis[tool] || '🤖'}</span>
                {tool}
              </span>
            ))}
            {prompt.ai_tools.length > 4 && (
              <span className="px-2 py-1 bg-gray-800/60 text-gray-500 text-xs rounded-lg">
                +{prompt.ai_tools.length - 4}
              </span>
            )}
          </div>

          {/* Prompt Preview */}
          <div 
            onClick={() => setShowPreview(true)}
            className="relative cursor-pointer group/preview"
          >
            <pre className="text-sm text-gray-400 whitespace-pre-wrap font-sans bg-[#0F0F23]/80 rounded-xl p-3 line-clamp-3 border border-gray-800/50 group-hover/preview:border-indigo-500/30 transition-colors">
              {prompt.prompt_text}
            </pre>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/preview:opacity-100 transition-opacity bg-black/40 rounded-xl backdrop-blur-[2px]">
              <span className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg text-white text-sm font-medium">
                <Expand className="w-4 h-4" />
                Preview
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 mt-4">
            <motion.button
              onClick={handleCopy}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex-1 py-2.5 px-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
                copied
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                  : 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border border-indigo-500/30 hover:from-indigo-500/30 hover:to-purple-500/30 hover:border-indigo-500/50'
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
            <motion.button 
              onClick={() => setShowPreview(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-xl bg-gray-800/60 text-gray-400 hover:text-white hover:bg-gray-700/60 transition-all border border-gray-700/50 hover:border-gray-600"
            >
              <Expand className="w-4 h-4" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-xl bg-gray-800/60 text-gray-400 hover:text-white hover:bg-gray-700/60 transition-all border border-gray-700/50 hover:border-gray-600"
            >
              <FolderPlus className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Preview Modal */}
      <PreviewModal
        prompt={prompt}
        isOpen={showPreview}
        onClose={() => setShowPreview(false)}
        onCopy={handleCopy}
        copied={copied}
      />
    </>
  )
}
