'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { SearchBar } from '@/components/dashboard/search-bar'
import { FilterSidebar } from '@/components/dashboard/filter-sidebar'
import { PromptCard } from '@/components/dashboard/prompt-card'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { Paywall } from '@/components/dashboard/paywall'
import { usePayment } from '@/contexts/payment-context'
import { Grid, List, Filter, X, Gift, Sparkles, Lock } from 'lucide-react'
import bonusData from '@/data/prompts-bonus.json'

export default function BonusPromptsPage() {
  const { hasPaid, isLoading } = usePayment()
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedTool, setSelectedTool] = useState<string | null>(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [favorites, setFavorites] = useState<string[]>([])
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  const prompts = bonusData.prompts

  const filteredPrompts = useMemo(() => {
    return prompts.filter((prompt) => {
      if (search) {
        const searchLower = search.toLowerCase()
        const matchesSearch =
          prompt.title.toLowerCase().includes(searchLower) ||
          prompt.prompt_text.toLowerCase().includes(searchLower) ||
          prompt.category.toLowerCase().includes(searchLower)
        if (!matchesSearch) return false
      }
      if (selectedCategory && prompt.category !== selectedCategory) return false
      if (selectedTool && !prompt.ai_tools.includes(selectedTool)) return false
      if (selectedDifficulty && prompt.difficulty !== selectedDifficulty) return false
      return true
    })
  }, [prompts, search, selectedCategory, selectedTool, selectedDifficulty])

  const handleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    )
  }

  const clearAllFilters = () => {
    setSelectedCategory(null)
    setSelectedTool(null)
    setSelectedDifficulty(null)
    setSearch('')
  }

  const hasFilters = selectedCategory || selectedTool || selectedDifficulty || search

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0F0F23] flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full" />
      </div>
    )
  }

  // Show paywall for non-paying users
  if (!hasPaid) {
    return (
      <div className="min-h-screen bg-[#0F0F23] relative">
        {/* Header */}
        <div className="border-b border-gray-800 bg-[#0a0a1a]">
          <div className="p-4 lg:p-6">
            {/* Locked Banner */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl p-4 mb-6"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center shrink-0">
                    <Gift className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-amber-400">Exclusive Bonus Prompts</h2>
                    <p className="text-sm text-gray-400">
                      500 additional premium prompts - Unlock with purchase
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Lock className="w-4 h-4" />
                  <span className="text-sm font-medium">Locked</span>
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl lg:text-2xl font-bold text-white flex items-center gap-2">
                    <Gift className="w-6 h-6 text-amber-400" />
                    Bonus Prompts
                  </h1>
                  <Lock className="w-5 h-5 text-gray-500" />
                </div>
                <p className="text-gray-400 text-sm">
                  500 bonus prompts - Unlock with purchase
                </p>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Locked Content Preview */}
        <div className="p-4 lg:p-6">
          <div className="relative">
            {/* Blurred preview of prompts */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 blur-sm opacity-50 pointer-events-none">
              {prompts.slice(0, 6).map((prompt) => (
                <div
                  key={prompt.id}
                  className="bg-[#1A1A2E] rounded-xl border border-gray-800 p-5"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 text-xs rounded">
                      {prompt.category}
                    </span>
                    <span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 text-xs rounded">
                      Bonus
                    </span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">{prompt.title}</h3>
                  <p className="text-sm text-gray-400 line-clamp-2">{prompt.prompt_text}</p>
                </div>
              ))}
            </div>

            {/* Paywall Overlay */}
            <Paywall variant="overlay" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0F0F23]">
      {/* Header */}
      <div className="border-b border-gray-800 bg-[#0a0a1a]">
        <div className="p-4 lg:p-6">
          {/* Bonus Banner */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-xl p-4 mb-6"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center shrink-0">
                  <Gift className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h2 className="font-semibold text-amber-400">Exclusive Bonus Prompts</h2>
                  <p className="text-sm text-gray-400">
                    500 additional premium prompts - yours free!
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-amber-400">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Unlocked</span>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-white flex items-center gap-2">
                <Gift className="w-6 h-6 text-amber-400" />
                Bonus Prompts
              </h1>
              <p className="text-gray-400 text-sm">
                {filteredPrompts.length} of {prompts.length} bonus prompts
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <ThemeToggle />

              <div className="flex-1 lg:w-80">
                <SearchBar value={search} onChange={setSearch} />
              </div>

              <button
                onClick={() => setShowMobileFilters(true)}
                className="lg:hidden p-2.5 bg-[#1A1A2E] border border-gray-800 rounded-lg text-gray-400 hover:text-white"
              >
                <Filter className="w-5 h-5" />
              </button>

              <div className="hidden sm:flex border border-gray-800 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2.5 transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-amber-500/10 text-amber-400'
                      : 'bg-[#1A1A2E] text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2.5 transition-colors ${
                    viewMode === 'list'
                      ? 'bg-amber-500/10 text-amber-400'
                      : 'bg-[#1A1A2E] text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {hasFilters && (
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <span className="text-sm text-gray-500">Active filters:</span>
              {selectedCategory && (
                <span className="px-2 py-1 bg-amber-500/10 text-amber-400 text-xs rounded-full flex items-center gap-1">
                  {selectedCategory}
                  <button onClick={() => setSelectedCategory(null)}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedTool && (
                <span className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full flex items-center gap-1">
                  {selectedTool}
                  <button onClick={() => setSelectedTool(null)}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedDifficulty && (
                <span className="px-2 py-1 bg-orange-500/10 text-orange-400 text-xs rounded-full flex items-center gap-1">
                  {selectedDifficulty}
                  <button onClick={() => setSelectedDifficulty(null)}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              <button
                onClick={clearAllFilters}
                className="text-xs text-gray-400 hover:text-white underline"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="p-4 lg:p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-6">
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
          </div>

          {/* Prompts Grid */}
          <div className="flex-1 min-w-0">
            {filteredPrompts.length === 0 ? (
              <div className="text-center py-12 bg-[#1A1A2E] rounded-xl border border-gray-800">
                <p className="text-gray-400 mb-4">
                  No bonus prompts found matching your criteria.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="px-4 py-2 bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded-lg text-sm hover:bg-amber-500/20"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'
                    : 'space-y-4'
                }
              >
                {filteredPrompts.map((prompt, index) => (
                  <motion.div
                    key={prompt.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(index * 0.02, 0.5) }}
                  >
                    <PromptCard
                      prompt={prompt}
                      onFavorite={handleFavorite}
                      isFavorited={favorites.includes(prompt.id)}
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowMobileFilters(false)}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-[#0a0a1a] border-l border-gray-800 p-4 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Filters</h3>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="p-2 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar
              selectedCategory={selectedCategory}
              selectedTool={selectedTool}
              selectedDifficulty={selectedDifficulty}
              onCategoryChange={setSelectedCategory}
              onToolChange={setSelectedTool}
              onDifficultyChange={setSelectedDifficulty}
              onClearAll={clearAllFilters}
            />
          </motion.div>
        </div>
      )}
    </div>
  )
}
