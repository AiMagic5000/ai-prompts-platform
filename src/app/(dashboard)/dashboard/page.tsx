import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  FileText,
  Heart,
  FolderOpen,
  TrendingUp,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

// Mock data - replace with real data from Supabase
const stats = [
  { icon: FileText, label: 'Total Prompts', value: '1,000+', color: 'text-indigo-600' },
  { icon: Heart, label: 'Favorites', value: '0', color: 'text-red-500' },
  { icon: FolderOpen, label: 'Collections', value: '0', color: 'text-amber-500' },
  { icon: TrendingUp, label: 'Prompts Used', value: '0', color: 'text-green-500' },
]

const featuredCategories = [
  { name: 'ChatGPT Prompts', slug: 'text-generation', emoji: '💬', count: 250 },
  { name: 'Image Generation', slug: 'image-generation', emoji: '🎨', count: 180 },
  { name: 'Marketing & SEO', slug: 'seo-marketing', emoji: '📈', count: 150 },
  { name: 'Coding & Dev', slug: 'coding-development', emoji: '💻', count: 120 },
  { name: 'Video Prompts', slug: 'video-generation', emoji: '🎬', count: 100 },
  { name: 'Social Media', slug: 'social-media', emoji: '📱', count: 80 },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Welcome Back!</h1>
          <p className="text-slate-600 mt-1">
            Access your library of 1000+ AI prompts
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/prompts">
            Browse All Prompts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg bg-slate-100 ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Categories Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-slate-900">
            Browse by Category
          </h2>
          <Link
            href="/dashboard/prompts"
            className="text-sm text-indigo-600 hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {featuredCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/dashboard/prompts?category=${category.slug}`}
              className="group"
            >
              <Card className="hover:border-indigo-300 hover:shadow-md transition-all">
                <CardContent className="pt-6 text-center">
                  <span className="text-3xl mb-2 block">{category.emoji}</span>
                  <h3 className="font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    {category.count} prompts
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Prompts */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="h-5 w-5 text-amber-500" />
          <h2 className="text-xl font-semibold text-slate-900">
            Featured Prompts
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Sample featured prompt cards */}
          {[
            {
              title: 'Expert Business Consultant',
              category: 'Business',
              tools: ['ChatGPT', 'Claude'],
            },
            {
              title: 'Professional Product Photography',
              category: 'Image',
              tools: ['Midjourney', 'DALL-E'],
            },
            {
              title: 'Universal Prompt Improver',
              category: 'Prompts',
              tools: ['ChatGPT', 'Claude'],
            },
          ].map((prompt, i) => (
            <Card key={i} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{prompt.category}</Badge>
                  <Badge className="bg-amber-500 text-white">Featured</Badge>
                </div>
                <CardTitle className="text-lg">{prompt.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-1">
                  {prompt.tools.map((tool) => (
                    <Badge key={tool} variant="outline" className="text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
                <Button asChild className="w-full mt-4">
                  <Link href="/dashboard/prompts">View Prompt</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Tips */}
      <Card className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <CardContent className="py-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">Pro Tip</h3>
              <p className="text-indigo-100 max-w-2xl">
                Get the most out of your prompts by customizing the [BRACKETED]
                variables. The more specific your input, the better your AI
                output will be. Save your favorites for quick access later!
              </p>
            </div>
            <Button
              asChild
              variant="secondary"
              className="bg-white text-indigo-600 hover:bg-indigo-50"
            >
              <Link href="/dashboard/prompts">Explore Prompts</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
