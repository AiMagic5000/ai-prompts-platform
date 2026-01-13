'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Copy, Check, Heart, ExternalLink, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PromptCardProps {
  prompt: {
    id: string
    title: string
    slug: string
    category: string
    prompt_text: string
    ai_tools: string[]
    difficulty: string
    is_pro: boolean
    is_featured: boolean
  }
  onFavorite?: (id: string) => void
  isFavorited?: boolean
}

export function PromptCard({ prompt, onFavorite, isFavorited }: PromptCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt.prompt_text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const categoryLabels: Record<string, string> = {
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
    'ai-influencer': 'AI Influencer',
    'creative-writing': 'Creative',
    'data-analysis': 'Data',
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
      {prompt.is_featured && (
        <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs px-2 py-1 rounded-bl-lg flex items-center gap-1">
          <Sparkles className="h-3 w-3" />
          Featured
        </div>
      )}

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs">
                {categoryLabels[prompt.category] || prompt.category}
              </Badge>
              {prompt.is_pro && (
                <Badge className="bg-indigo-600 text-white text-xs">PRO</Badge>
              )}
            </div>
            <h3 className="font-semibold text-lg leading-tight group-hover:text-indigo-600 transition-colors">
              {prompt.title}
            </h3>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onFavorite?.(prompt.id)}
            className={cn('h-8 w-8', isFavorited && 'text-red-500')}
          >
            <Heart className={cn('h-4 w-4', isFavorited && 'fill-current')} />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="pb-3">
        <div className="bg-slate-50 rounded-lg p-3 font-mono text-sm text-slate-700 max-h-32 overflow-hidden relative">
          <p className="line-clamp-4 whitespace-pre-wrap">{prompt.prompt_text}</p>
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate-50 to-transparent" />
        </div>

        <div className="flex flex-wrap gap-1 mt-3">
          {prompt.ai_tools.slice(0, 3).map((tool) => (
            <Badge key={tool} variant="outline" className="text-xs capitalize">
              {tool}
            </Badge>
          ))}
          {prompt.ai_tools.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{prompt.ai_tools.length - 3}
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between mt-3 text-xs text-slate-500">
          <span className="capitalize">{prompt.difficulty}</span>
        </div>
      </CardContent>

      <CardFooter className="pt-0 gap-2">
        <Button
          onClick={handleCopy}
          className="flex-1"
          variant={copied ? 'secondary' : 'default'}
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 mr-2" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4 mr-2" />
              Copy
            </>
          )}
        </Button>
        <Button variant="outline" size="icon" asChild>
          <Link href={`/dashboard/prompts/${prompt.slug}`}>
            <ExternalLink className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
