'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface FilterSidebarProps {
  selectedCategory: string | null
  selectedTool: string | null
  selectedDifficulty: string | null
  onCategoryChange: (category: string | null) => void
  onToolChange: (tool: string | null) => void
  onDifficultyChange: (difficulty: string | null) => void
  onClearAll: () => void
}

const categories = [
  { slug: 'text-generation', label: 'Text Generation', emoji: '💬' },
  { slug: 'image-generation', label: 'Image Generation', emoji: '🎨' },
  { slug: 'video-generation', label: 'Video Generation', emoji: '🎬' },
  { slug: 'music-generation', label: 'Music Generation', emoji: '🎵' },
  { slug: 'seo-marketing', label: 'SEO & Marketing', emoji: '📈' },
  { slug: 'business-strategy', label: 'Business Strategy', emoji: '💼' },
  { slug: 'coding-development', label: 'Coding & Dev', emoji: '💻' },
  { slug: 'content-creation', label: 'Content Creation', emoji: '✍️' },
  { slug: 'prompt-engineering', label: 'Prompt Engineering', emoji: '⚡' },
  { slug: 'social-media', label: 'Social Media', emoji: '📱' },
  { slug: 'productivity', label: 'Productivity', emoji: '⏰' },
  { slug: 'creative-writing', label: 'Creative Writing', emoji: '📝' },
  { slug: 'data-analysis', label: 'Data Analysis', emoji: '📊' },
  { slug: 'real-estate', label: 'Real Estate', emoji: '🏠' },
]

const aiTools = [
  { slug: 'chatgpt', label: 'ChatGPT' },
  { slug: 'claude', label: 'Claude' },
  { slug: 'gemini', label: 'Gemini' },
  { slug: 'midjourney', label: 'Midjourney' },
  { slug: 'dall-e', label: 'DALL-E' },
  { slug: 'stable-diffusion', label: 'Stable Diffusion' },
  { slug: 'sora', label: 'Sora' },
  { slug: 'runway', label: 'Runway' },
  { slug: 'leonardo-ai', label: 'Leonardo AI' },
]

const difficulties = [
  { slug: 'beginner', label: 'Beginner', color: 'bg-green-100 text-green-800' },
  { slug: 'intermediate', label: 'Intermediate', color: 'bg-amber-100 text-amber-800' },
  { slug: 'advanced', label: 'Advanced', color: 'bg-red-100 text-red-800' },
]

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
    <div className="w-64 space-y-6">
      {hasFilters && (
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-700">Active Filters</span>
          <Button variant="ghost" size="sm" onClick={onClearAll}>
            Clear All
          </Button>
        </div>
      )}

      {/* Categories */}
      <div>
        <h3 className="text-sm font-semibold text-slate-900 mb-3">Categories</h3>
        <div className="space-y-1">
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() =>
                onCategoryChange(
                  selectedCategory === category.slug ? null : category.slug
                )
              }
              className={cn(
                'w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-left transition-colors',
                selectedCategory === category.slug
                  ? 'bg-indigo-50 text-indigo-600 font-medium'
                  : 'text-slate-600 hover:bg-slate-100'
              )}
            >
              <span>{category.emoji}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* AI Tools */}
      <div>
        <h3 className="text-sm font-semibold text-slate-900 mb-3">AI Tools</h3>
        <div className="flex flex-wrap gap-2">
          {aiTools.map((tool) => (
            <Badge
              key={tool.slug}
              variant={selectedTool === tool.slug ? 'default' : 'outline'}
              className={cn(
                'cursor-pointer transition-colors',
                selectedTool === tool.slug
                  ? 'bg-indigo-600 text-white'
                  : 'hover:bg-slate-100'
              )}
              onClick={() =>
                onToolChange(selectedTool === tool.slug ? null : tool.slug)
              }
            >
              {tool.label}
            </Badge>
          ))}
        </div>
      </div>

      {/* Difficulty */}
      <div>
        <h3 className="text-sm font-semibold text-slate-900 mb-3">Difficulty</h3>
        <div className="space-y-2">
          {difficulties.map((diff) => (
            <button
              key={diff.slug}
              onClick={() =>
                onDifficultyChange(
                  selectedDifficulty === diff.slug ? null : diff.slug
                )
              }
              className={cn(
                'w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors',
                selectedDifficulty === diff.slug
                  ? 'ring-2 ring-indigo-500'
                  : 'hover:bg-slate-100'
              )}
            >
              <span>{diff.label}</span>
              <span
                className={cn(
                  'px-2 py-0.5 rounded-full text-xs font-medium',
                  diff.color
                )}
              >
                {diff.slug === 'beginner' && 'Easy'}
                {diff.slug === 'intermediate' && 'Medium'}
                {diff.slug === 'advanced' && 'Hard'}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
