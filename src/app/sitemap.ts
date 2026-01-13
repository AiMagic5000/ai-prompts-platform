import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prompts.alwaysencrypted.com'

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/register`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
  ]

  // Category pages
  const categories = [
    'text-generation',
    'image-generation',
    'video-generation',
    'music-generation',
    'seo-marketing',
    'business-strategy',
    'coding-development',
    'content-creation',
    'prompt-engineering',
    'real-estate',
    'social-media',
    'productivity',
    'ai-influencer',
    'creative-writing',
    'data-analysis',
  ]

  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/categories/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // In production, you would fetch prompts from Supabase
  // const { data: prompts } = await supabase.from('prompts').select('slug, updated_at')
  // const promptPages = prompts.map(prompt => ({
  //   url: `${baseUrl}/prompts/${prompt.slug}`,
  //   lastModified: new Date(prompt.updated_at),
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.6,
  // }))

  return [...staticPages, ...categoryPages]
}
