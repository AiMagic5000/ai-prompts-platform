'use client'

import { useState } from 'react'
import { Copy, Check, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const samplePrompts = {
  chatgpt: [
    {
      title: 'Business Strategy Expert',
      category: 'Business',
      prompt: `You are a senior business consultant with 20 years of experience helping startups scale to $10M+ revenue. I need help with [BUSINESS CHALLENGE].

Please provide:
1. A diagnostic analysis of the situation
2. 3 strategic options with pros/cons
3. Your recommended approach with implementation steps
4. Key metrics to track success
5. Potential risks and mitigation strategies

Be specific, practical, and data-driven in your response.`,
    },
    {
      title: 'Content Marketing Framework',
      category: 'Marketing',
      prompt: `Act as a content marketing strategist who has generated millions in revenue through content.

I want to create a content strategy for [BUSINESS/NICHE]. My target audience is [AUDIENCE DESCRIPTION].

Please provide:
1. 10 high-converting content pillar topics
2. 5 content formats that work best for this niche
3. A 30-day content calendar
4. SEO keywords to target for each piece
5. Distribution strategy across platforms

Focus on content that drives leads and sales, not just traffic.`,
    },
  ],
  image: [
    {
      title: 'Photorealistic Product Shot',
      category: 'E-commerce',
      prompt: `Professional product photography of [PRODUCT] on a clean white marble surface, soft natural window lighting from the left, shallow depth of field, 85mm lens, high-end commercial photography style, subtle reflection on surface, 8K ultra-detailed, shot on Phase One IQ4 --ar 4:5 --v 6 --style raw`,
    },
    {
      title: 'Modern Brand Hero Image',
      category: 'Branding',
      prompt: `Minimalist hero image for [BRAND TYPE] website, abstract flowing gradients in [COLOR 1] and [COLOR 2], geometric 3D shapes floating in space, glassmorphism elements, soft ambient lighting, modern SaaS aesthetic, wide composition for web banner --ar 16:9 --v 6`,
    },
  ],
  video: [
    {
      title: 'Product Demo Intro',
      category: 'Marketing',
      prompt: `A sleek 5-second product reveal animation: [PRODUCT] emerges from soft particles of light, camera slowly orbits, premium dark gradient background with subtle purple and gold accents, cinematic lighting with rim light, smooth slow motion at 60fps, Apple-style product showcase aesthetic`,
    },
  ],
}

type TabKey = keyof typeof samplePrompts

export function SamplePrompts() {
  const [activeTab, setActiveTab] = useState<TabKey>('chatgpt')
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleCopy = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'chatgpt', label: 'ChatGPT' },
    { key: 'image', label: 'Image Generation' },
    { key: 'video', label: 'Video Prompts' },
  ]

  return (
    <section id="samples" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sample Prompts (Try Before You Buy)
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here&apos;s a taste of what&apos;s inside. Copy any of these and see the difference quality prompts make.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-lg p-1 shadow-sm border">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab.key
                    ? 'bg-indigo-600 text-white shadow'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Prompt Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {samplePrompts[activeTab].map((prompt, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      {prompt.category}
                    </Badge>
                    <h3 className="font-semibold text-lg">{prompt.title}</h3>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-slate-100 max-h-48 overflow-y-auto">
                  <pre className="whitespace-pre-wrap">{prompt.prompt}</pre>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button
                    onClick={() => handleCopy(prompt.prompt, index)}
                    className="flex-1"
                    variant={copiedIndex === index ? 'secondary' : 'default'}
                  >
                    {copiedIndex === index ? (
                      <>
                        <Check className="h-4 w-4 mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 mr-2" />
                        Copy Prompt
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            This is just 5 of 1000+ prompts. Get the complete library.
          </p>
          <Button asChild size="lg" variant="accent">
            <a href="/get-access">
              Get All 1000+ Prompts
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
