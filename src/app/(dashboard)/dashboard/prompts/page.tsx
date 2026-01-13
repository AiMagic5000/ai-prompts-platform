'use client'

import { useState, useMemo } from 'react'
import { SearchBar } from '@/components/dashboard/search-bar'
import { FilterSidebar } from '@/components/dashboard/filter-sidebar'
import { PromptCard } from '@/components/dashboard/prompt-card'
import { Button } from '@/components/ui/button'
import { Grid, List } from 'lucide-react'
import { cn } from '@/lib/utils'

// Sample prompts data - in production, this would come from Supabase
const samplePrompts = [
  {
    id: '1',
    title: 'Expert Business Consultant',
    slug: 'expert-business-consultant',
    category: 'business-strategy',
    prompt_text: `You are a senior business consultant with 20 years of experience helping startups scale to $10M+ revenue. I need help with [BUSINESS_CHALLENGE].

Please provide:
1. A diagnostic analysis of the situation
2. 3 strategic options with pros/cons
3. Your recommended approach with implementation steps
4. Key metrics to track success
5. Potential risks and mitigation strategies`,
    ai_tools: ['chatgpt', 'claude', 'gemini'],
    difficulty: 'intermediate',
    is_pro: false,
    is_featured: true,
  },
  {
    id: '2',
    title: 'Content Marketing Strategy',
    slug: 'content-marketing-strategy',
    category: 'seo-marketing',
    prompt_text: `Act as a content marketing strategist who has generated millions in revenue through content. I want to create a content strategy for [BUSINESS_NICHE].`,
    ai_tools: ['chatgpt', 'claude'],
    difficulty: 'intermediate',
    is_pro: true,
    is_featured: true,
  },
  {
    id: '3',
    title: 'Professional Product Photography',
    slug: 'professional-product-photography',
    category: 'image-generation',
    prompt_text: `Professional product photography of [PRODUCT] on a clean white marble surface, soft natural window lighting from the left, shallow depth of field, 85mm lens, high-end commercial photography style`,
    ai_tools: ['midjourney', 'dall-e', 'stable-diffusion'],
    difficulty: 'beginner',
    is_pro: false,
    is_featured: true,
  },
  {
    id: '4',
    title: 'Code Review Expert',
    slug: 'code-review-expert',
    category: 'coding-development',
    prompt_text: `You are a senior software engineer conducting a thorough code review. Analyze the following [LANGUAGE] code for bugs, performance, security, best practices, and readability.`,
    ai_tools: ['chatgpt', 'claude', 'copilot'],
    difficulty: 'advanced',
    is_pro: true,
    is_featured: true,
  },
  {
    id: '5',
    title: 'Product Reveal Animation',
    slug: 'product-reveal-animation',
    category: 'video-generation',
    prompt_text: `A sleek 5-second product reveal animation: [PRODUCT] emerges from soft particles of light, camera slowly orbits around the object, premium dark gradient background`,
    ai_tools: ['sora', 'runway', 'pika'],
    difficulty: 'intermediate',
    is_pro: true,
    is_featured: true,
  },
  {
    id: '6',
    title: 'SEO Article Writer',
    slug: 'seo-article-writer',
    category: 'content-creation',
    prompt_text: `You are an expert SEO content writer. Write a comprehensive article about "[TOPIC]" targeting the keyword "[KEYWORD]".`,
    ai_tools: ['chatgpt', 'claude'],
    difficulty: 'beginner',
    is_pro: false,
    is_featured: false,
  },
  {
    id: '7',
    title: 'Universal Prompt Improver',
    slug: 'universal-prompt-improver',
    category: 'prompt-engineering',
    prompt_text: `You are an expert prompt engineer. Take the following prompt and improve it to get better AI outputs. Add role definition, context, format requirements, and quality criteria.`,
    ai_tools: ['chatgpt', 'claude', 'gemini'],
    difficulty: 'intermediate',
    is_pro: true,
    is_featured: true,
  },
  {
    id: '8',
    title: 'LinkedIn Post Generator',
    slug: 'linkedin-post-generator',
    category: 'social-media',
    prompt_text: `Write a viral LinkedIn post about [TOPIC] that will drive engagement. Start with a compelling first line, use short paragraphs, include hashtags, end with a question.`,
    ai_tools: ['chatgpt', 'claude'],
    difficulty: 'beginner',
    is_pro: false,
    is_featured: false,
  },
]

export default function PromptsPage() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedTool, setSelectedTool] = useState<string | null>(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [favorites, setFavorites] = useState<string[]>([])

  const filteredPrompts = useMemo(() => {
    return samplePrompts.filter((prompt) => {
      // Search filter
      if (search) {
        const searchLower = search.toLowerCase()
        const matchesSearch =
          prompt.title.toLowerCase().includes(searchLower) ||
          prompt.prompt_text.toLowerCase().includes(searchLower) ||
          prompt.category.toLowerCase().includes(searchLower)
        if (!matchesSearch) return false
      }

      // Category filter
      if (selectedCategory && prompt.category !== selectedCategory) {
        return false
      }

      // Tool filter
      if (selectedTool && !prompt.ai_tools.includes(selectedTool)) {
        return false
      }

      // Difficulty filter
      if (selectedDifficulty && prompt.difficulty !== selectedDifficulty) {
        return false
      }

      return true
    })
  }, [search, selectedCategory, selectedTool, selectedDifficulty])

  const handleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((fid) => fid !== id)
        : [...prev, id]
    )
  }

  const clearAllFilters = () => {
    setSelectedCategory(null)
    setSelectedTool(null)
    setSelectedDifficulty(null)
    setSearch('')
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">All Prompts</h1>
          <p className="text-slate-600">
            {filteredPrompts.length} prompts found
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-64">
            <SearchBar value={search} onChange={setSearch} />
          </div>
          <div className="flex border rounded-lg overflow-hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setViewMode('grid')}
              className={cn(
                'rounded-none',
                viewMode === 'grid' && 'bg-slate-100'
              )}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setViewMode('list')}
              className={cn(
                'rounded-none',
                viewMode === 'list' && 'bg-slate-100'
              )}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex gap-6">
        {/* Sidebar */}
        <div className="hidden lg:block">
          <FilterSidebar
            selectedCategory={selectedCategory}
            selectedTool={selectedTool}
            selectedDifficulty={selectedDifficulty}
            onCategoryChange={setSelectedCategory}
            onToolChange={setSelectedTool}
            onDifficultyChange={setSelectedDifficulty}
            onClearAll={clearAllFilters}
          />
        </div>

        {/* Prompts Grid/List */}
        <div className="flex-1">
          {filteredPrompts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-600 mb-4">
                No prompts found matching your criteria.
              </p>
              <Button variant="outline" onClick={clearAllFilters}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <div
              className={cn(
                viewMode === 'grid'
                  ? 'grid md:grid-cols-2 xl:grid-cols-3 gap-4'
                  : 'space-y-4'
              )}
            >
              {filteredPrompts.map((prompt) => (
                <PromptCard
                  key={prompt.id}
                  prompt={prompt}
                  onFavorite={handleFavorite}
                  isFavorited={favorites.includes(prompt.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
