'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, CheckCircle, Clock, BookOpen, Award, ChevronRight, ExternalLink, Lock } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { Paywall } from '@/components/dashboard/paywall'
import { usePayment } from '@/contexts/payment-context'

interface Module {
  id: string
  title: string
  description: string
  duration: string
  videoId: string
  topics: string[]
}

// Real educational YouTube videos for each module
// Sources: freeCodeCamp, n8n Official, Kevin Stratvert, and other educational channels
const modules: Module[] = [
  {
    id: 'module-1',
    title: 'Introduction to Prompt Engineering',
    description: 'Learn the fundamentals of crafting effective AI prompts and understand how language models interpret your instructions.',
    duration: '58 min',
    videoId: '_ZvnD73m40o', // freeCodeCamp - Prompt Engineering Tutorial by Ania Kubow
    topics: ['What is prompt engineering?', 'How AI models understand prompts', 'The anatomy of a great prompt', 'Common mistakes to avoid'],
  },
  {
    id: 'module-2',
    title: 'ChatGPT Mastery',
    description: 'Master ChatGPT with advanced techniques including system prompts, role-playing, chain-of-thought, and output formatting.',
    duration: '27 min',
    videoId: 'jC4v5AS4RIM', // IBM Technology - What is Prompt Engineering?
    topics: ['System vs user prompts', 'Role-based prompting', 'Chain-of-thought reasoning', 'Temperature and parameters'],
  },
  {
    id: 'module-3',
    title: 'Claude Advanced Techniques',
    description: 'Unlock Claude\'s full potential with XML tags, structured outputs, and Anthropic\'s best practices.',
    duration: '22 min',
    videoId: 'T9aRN5JkmL8', // Anthropic/AI tutorial - Claude prompting techniques
    topics: ['Claude\'s unique capabilities', 'Using XML tags effectively', 'Constitutional AI principles', 'Long-form content generation'],
  },
  {
    id: 'module-4',
    title: 'Image Generation (Midjourney/DALL-E)',
    description: 'Create stunning AI artwork with professional prompting techniques for Midjourney, DALL-E, and Stable Diffusion.',
    duration: '35 min',
    videoId: 'Asg1e_IYzR8', // Kevin Stratvert - Midjourney Tutorial
    topics: ['Image prompt structure', 'Style and aesthetic keywords', 'Aspect ratios and parameters', 'Iteration and refinement'],
  },
  {
    id: 'module-5',
    title: 'Video Generation (Sora/Runway)',
    description: 'Master AI video generation with prompts that create professional-quality video content.',
    duration: '18 min',
    videoId: 'HK6y8DAPN_0', // Runway ML Tutorial - AI Video Generation
    topics: ['Video prompt fundamentals', 'Camera movements and shots', 'Temporal consistency', 'Style transfer techniques'],
  },
  {
    id: 'module-6',
    title: 'SEO & Marketing Prompts',
    description: 'Leverage AI for content marketing, SEO optimization, and high-converting copy.',
    duration: '24 min',
    videoId: 'L_Guz73e6fw', // Neil Patel - AI Content Marketing
    topics: ['SEO-optimized content', 'Email marketing prompts', 'Social media content', 'Ad copy generation'],
  },
  {
    id: 'module-7',
    title: 'Coding & Development',
    description: 'Use AI to write better code, debug faster, and automate development workflows.',
    duration: '32 min',
    videoId: 'Fi3AJZZregI', // Fireship - AI Coding Tools
    topics: ['Code generation best practices', 'Debugging with AI', 'Documentation automation', 'Test generation'],
  },
  {
    id: 'module-8',
    title: 'Automation & n8n Workflows',
    description: 'Build powerful AI-powered automations using n8n and other automation tools.',
    duration: '45 min',
    videoId: '4BVTkqbn_tY', // n8n Official - Beginner Course Introduction
    topics: ['AI in automation workflows', 'n8n + AI integration', 'Batch processing prompts', 'Error handling'],
  },
]

function YouTubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  )
}

export default function MasterclassPage() {
  const { hasPaid, isLoading } = usePayment()
  const [activeModule, setActiveModule] = useState<string>(modules[0].id)
  const [completedModules, setCompletedModules] = useState<Set<string>>(new Set())

  const currentModule = modules.find(m => m.id === activeModule) || modules[0]
  const progress = (completedModules.size / modules.length) * 100

  const toggleComplete = (moduleId: string) => {
    setCompletedModules(prev => {
      const next = new Set(prev)
      if (next.has(moduleId)) {
        next.delete(moduleId)
      } else {
        next.add(moduleId)
      }
      return next
    })
  }

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0F0F23] flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full" />
      </div>
    )
  }

  // Show paywall for non-paying users
  if (!hasPaid) {
    return (
      <div className="min-h-screen bg-[#0F0F23]">
        {/* Header */}
        <div className="border-b border-gray-800 bg-[#0a0a1a]">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-6 h-6 text-indigo-400" />
                  <h1 className="text-2xl font-bold text-white">Prompt Engineering Masterclass</h1>
                  <Lock className="w-5 h-5 text-gray-500" />
                </div>
                <p className="text-gray-400">
                  Complete video training to master AI prompting - Unlock with purchase
                </p>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Locked Content Preview */}
        <div className="container mx-auto px-4 py-8">
          <div className="relative">
            {/* Blurred preview */}
            <div className="grid lg:grid-cols-3 gap-8 blur-sm opacity-50 pointer-events-none">
              <div className="lg:col-span-1 space-y-3">
                <h2 className="text-lg font-semibold text-white mb-4">Course Modules</h2>
                {modules.slice(0, 4).map((module, index) => (
                  <div
                    key={module.id}
                    className="w-full text-left p-4 rounded-xl border bg-[#1A1A2E] border-gray-800"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-gray-800 text-gray-400">
                        <span className="text-sm font-semibold">{index + 1}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium truncate text-gray-300">
                          {module.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="w-3 h-3 text-gray-500" />
                          <span className="text-xs text-gray-500">{module.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-2">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-800 flex items-center justify-center">
                  <Play className="w-16 h-16 text-gray-600" />
                </div>
              </div>
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
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-6 h-6 text-indigo-400" />
                <h1 className="text-2xl font-bold text-white">Prompt Engineering Masterclass</h1>
              </div>
              <p className="text-gray-400">
                Complete video training to master AI prompting
              </p>
            </div>
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <ThemeToggle />

              <div className="text-right">
                <p className="text-sm text-gray-400">Your Progress</p>
                <p className="text-xl font-bold text-white">{Math.round(progress)}% Complete</p>
              </div>
              <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Module List */}
          <div className="lg:col-span-1 space-y-3">
            <h2 className="text-lg font-semibold text-white mb-4">Course Modules</h2>
            {modules.map((module, index) => (
              <motion.button
                key={module.id}
                onClick={() => setActiveModule(module.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left p-4 rounded-xl border transition-colors ${
                  activeModule === module.id
                    ? 'bg-indigo-500/10 border-indigo-500/50'
                    : 'bg-[#1A1A2E] border-gray-800 hover:border-gray-700'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    completedModules.has(module.id)
                      ? 'bg-green-500/20 text-green-400'
                      : activeModule === module.id
                        ? 'bg-indigo-500/20 text-indigo-400'
                        : 'bg-gray-800 text-gray-400'
                  }`}>
                    {completedModules.has(module.id) ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <span className="text-sm font-semibold">{index + 1}</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-medium truncate ${
                      activeModule === module.id ? 'text-white' : 'text-gray-300'
                    }`}>
                      {module.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-3 h-3 text-gray-500" />
                      <span className="text-xs text-gray-500">{module.duration}</span>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 shrink-0 ${
                    activeModule === module.id ? 'text-indigo-400' : 'text-gray-600'
                  }`} />
                </div>
              </motion.button>
            ))}

            {/* Certificate Card */}
            <div className="mt-6 p-4 bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-amber-400" />
                <h3 className="font-semibold text-amber-400">Certificate</h3>
              </div>
              <p className="text-sm text-gray-400 mb-3">
                Complete all modules to earn your Prompt Engineering certificate.
              </p>
              <div className="text-xs text-gray-500">
                {completedModules.size}/{modules.length} modules completed
              </div>
            </div>
          </div>

          {/* Video Player & Content */}
          <div className="lg:col-span-2">
            <motion.div
              key={currentModule.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Video */}
              <div className="mb-6">
                <YouTubeEmbed videoId={currentModule.videoId} title={currentModule.title} />
              </div>

              {/* Module Info */}
              <div className="bg-[#1A1A2E] rounded-xl border border-gray-800 p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-2">
                      {currentModule.title}
                    </h2>
                    <p className="text-gray-400">
                      {currentModule.description}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleComplete(currentModule.id)}
                    className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 shrink-0 transition-colors ${
                      completedModules.has(currentModule.id)
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 hover:bg-indigo-500/20'
                    }`}
                  >
                    {completedModules.has(currentModule.id) ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        Completed
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" />
                        Mark Complete
                      </>
                    )}
                  </button>
                </div>

                {/* Topics */}
                <div className="border-t border-gray-800 pt-4">
                  <h3 className="text-sm font-semibold text-gray-400 mb-3">What you&apos;ll learn</h3>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {currentModule.topics.map((topic, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Related Prompts Link */}
                <div className="border-t border-gray-800 pt-4 mt-4">
                  <a
                    href="/dashboard/prompts"
                    className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-sm"
                  >
                    View related prompts
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
