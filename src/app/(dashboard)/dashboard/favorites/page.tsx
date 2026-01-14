'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, Search, Grid, List, Trash2 } from 'lucide-react'
import { PromptCard } from '@/components/dashboard/prompt-card'
import { SearchBar } from '@/components/dashboard/search-bar'

// In production, this would come from user's saved favorites in database
const sampleFavorites = [
  {
    id: 'fav-1',
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
    id: 'fav-2',
    title: 'Professional Product Photography',
    slug: 'professional-product-photography',
    category: 'image-generation',
    prompt_text: `Professional product photography of [PRODUCT] on a clean white marble surface, soft natural window lighting from the left, shallow depth of field, 85mm lens, high-end commercial photography style, subtle reflections, minimalist composition`,
    ai_tools: ['midjourney', 'dall-e', 'stable-diffusion'],
    difficulty: 'beginner',
    is_pro: false,
    is_featured: true,
  },
  {
    id: 'fav-3',
    title: 'SEO-Optimized Blog Post',
    slug: 'seo-optimized-blog-post',
    category: 'seo-marketing',
    prompt_text: `Write a comprehensive, SEO-optimized blog post about [TOPIC] targeting the keyword "[KEYWORD]".

Structure:
- Compelling H1 title with keyword
- Meta description (155 chars)
- Introduction with hook
- 5-7 H2 subheadings
- Bullet points and numbered lists
- FAQ section with schema markup
- Call-to-action conclusion

Target: 2000+ words, Flesch Reading Ease: 60-70`,
    ai_tools: ['chatgpt', 'claude'],
    difficulty: 'intermediate',
    is_pro: true,
    is_featured: false,
  },
]

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState(sampleFavorites)
  const [search, setSearch] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filteredFavorites = favorites.filter((prompt) => {
    if (!search) return true
    const searchLower = search.toLowerCase()
    return (
      prompt.title.toLowerCase().includes(searchLower) ||
      prompt.prompt_text.toLowerCase().includes(searchLower) ||
      prompt.category.toLowerCase().includes(searchLower)
    )
  })

  const handleRemoveFavorite = (id: string) => {
    setFavorites(favorites.filter((f) => f.id !== id))
  }

  return (
    <div className="min-h-screen bg-[#0F0F23]">
      {/* Header */}
      <div className="border-b border-gray-800 bg-[#0a0a1a]">
        <div className="p-4 lg:p-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-white flex items-center gap-2">
                <Heart className="w-6 h-6 text-red-400 fill-current" />
                My Favorites
              </h1>
              <p className="text-gray-400 text-sm">
                {favorites.length} saved prompts
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex-1 lg:w-80">
                <SearchBar value={search} onChange={setSearch} placeholder="Search favorites..." />
              </div>

              <div className="hidden sm:flex border border-gray-800 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2.5 transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-indigo-500/10 text-indigo-400'
                      : 'bg-[#1A1A2E] text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2.5 transition-colors ${
                    viewMode === 'list'
                      ? 'bg-indigo-500/10 text-indigo-400'
                      : 'bg-[#1A1A2E] text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 lg:p-6">
        {favorites.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 bg-[#1A1A2E] rounded-xl border border-gray-800"
          >
            <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">No Favorites Yet</h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Start adding prompts to your favorites by clicking the heart icon on any prompt card.
            </p>
            <a
              href="/dashboard/prompts"
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white font-medium rounded-lg"
            >
              Browse Prompts
            </a>
          </motion.div>
        ) : filteredFavorites.length === 0 ? (
          <div className="text-center py-12 bg-[#1A1A2E] rounded-xl border border-gray-800">
            <p className="text-gray-400">No favorites found matching your search.</p>
          </div>
        ) : (
          <div
            className={
              viewMode === 'grid'
                ? 'grid md:grid-cols-2 xl:grid-cols-3 gap-4'
                : 'space-y-4'
            }
          >
            {filteredFavorites.map((prompt, index) => (
              <motion.div
                key={prompt.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="relative group"
              >
                <PromptCard
                  prompt={prompt}
                  onFavorite={handleRemoveFavorite}
                  isFavorited={true}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
