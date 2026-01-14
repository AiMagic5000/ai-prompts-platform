'use client'

import { motion } from 'framer-motion'
import { X, ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface FilterSidebarProps {
  selectedCategory: string | null
  selectedTool: string | null
  selectedDifficulty: string | null
  onCategoryChange: (category: string | null) => void
  onToolChange: (tool: string | null) => void
  onDifficultyChange: (difficulty: string | null) => void
  onClearAll: () => void
}

// Categories matching the actual data
const categories = [
  { slug: 'chatgpt', label: 'ChatGPT', emoji: '🤖' },
  { slug: 'claude', label: 'Claude', emoji: '🧠' },
  { slug: 'gemini', label: 'Gemini', emoji: '💎' },
  { slug: 'image', label: 'Image Generation', emoji: '🎨' },
  { slug: 'video', label: 'Video Generation', emoji: '🎬' },
  { slug: 'seo', label: 'SEO & Marketing', emoji: '📈' },
  { slug: 'coding', label: 'Coding & Development', emoji: '💻' },
  { slug: 'n8n', label: 'N8N Workflows', emoji: '⚡' },
]

// AI Tools matching the actual data (using exact tool names from data)
const aiTools = [
  { slug: 'ChatGPT', label: 'ChatGPT', emoji: '🤖' },
  { slug: 'Claude', label: 'Claude', emoji: '🧠' },
  { slug: 'Gemini', label: 'Gemini', emoji: '💎' },
  { slug: 'Midjourney', label: 'Midjourney', emoji: '🎨' },
  { slug: 'DALL-E', label: 'DALL-E', emoji: '🖼️' },
  { slug: 'Stable Diffusion', label: 'Stable Diffusion', emoji: '🌀' },
  { slug: 'Sora', label: 'Sora', emoji: '🎬' },
  { slug: 'Runway', label: 'Runway', emoji: '🎥' },
  { slug: 'Pika', label: 'Pika', emoji: '📹' },
  { slug: 'Kling', label: 'Kling', emoji: '🎞️' },
  { slug: 'Leonardo AI', label: 'Leonardo AI', emoji: '🎭' },
  { slug: 'Ideogram', label: 'Ideogram', emoji: '✨' },
  { slug: 'Canva AI', label: 'Canva AI', emoji: '🖌️' },
  { slug: 'GitHub Copilot', label: 'GitHub Copilot', emoji: '👨‍💻' },
  { slug: 'Cursor', label: 'Cursor', emoji: '⌨️' },
  { slug: 'n8n', label: 'N8N', emoji: '⚡' },
]

const difficulties = [
  { slug: 'beginner', label: 'Beginner', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
  { slug: 'intermediate', label: 'Intermediate', color: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
  { slug: 'advanced', label: 'Advanced', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
]

function FilterSection({
  title,
  children,
  defaultOpen = true
}: {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-gray-800 pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-2 text-left"
      >
        <span className="text-sm font-semibold text-white">{title}</span>
        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-2 space-y-1"
        >
          {children}
        </motion.div>
      )}
    </div>
  )
}

export function FilterSidebar({
  selectedCategory,
  selectedTool,
  selectedDifficulty,
  onCategoryChange,
  onToolChange,
  onDifficultyChange,
  onClearAll,
}: FilterSidebarProps) {
  const hasFilters = selectedCategory || selectedTool || selectedDifficulty

  return (
    <div className="w-full lg:w-64 bg-[#1A1A2E] rounded-xl border border-gray-800 p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-white">Filters</h3>
        {hasFilters && (
          <button
            onClick={onClearAll}
            className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
          >
            <X className="w-3 h-3" />
            Clear all
          </button>
        )}
      </div>

      {/* Difficulty */}
      <FilterSection title="Difficulty">
        <div className="flex flex-wrap gap-2">
          {difficulties.map((difficulty) => (
            <button
              key={difficulty.slug}
              onClick={() => onDifficultyChange(selectedDifficulty === difficulty.slug ? null : difficulty.slug)}
              className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors ${
                selectedDifficulty === difficulty.slug
                  ? difficulty.color
                  : 'bg-gray-800/50 text-gray-400 border-gray-700 hover:border-gray-600'
              }`}
            >
              {difficulty.label}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Categories */}
      <FilterSection title="Categories">
        <div className="max-h-60 overflow-y-auto space-y-1 pr-2 scrollbar-thin scrollbar-thumb-gray-700">
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => onCategoryChange(selectedCategory === category.slug ? null : category.slug)}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                selectedCategory === category.slug
                  ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/30'
                  : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
              }`}
            >
              <span>{category.emoji}</span>
              <span className="flex-1 text-left truncate">{category.label}</span>
            </button>
          ))}
        </div>
      </FilterSection>

      {/* AI Tools */}
      <FilterSection title="AI Tool">
        <div className="max-h-60 overflow-y-auto space-y-1 pr-2 scrollbar-thin scrollbar-thumb-gray-700">
          {aiTools.map((tool) => (
            <button
              key={tool.slug}
              onClick={() => onToolChange(selectedTool === tool.slug ? null : tool.slug)}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                selectedTool === tool.slug
                  ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/30'
                  : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
              }`}
            >
              <span>{tool.emoji}</span>
              <span className="flex-1 text-left">{tool.label}</span>
            </button>
          ))}
        </div>
      </FilterSection>
    </div>
  )
}
