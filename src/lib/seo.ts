import { Metadata } from 'next'

const siteConfig = {
  name: 'AI Prompts Platform',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://prompts.alwaysencrypted.com',
  description: '1000+ Expert-Crafted AI Prompts That Actually Work',
  twitter: '@alwaysencrypted',
}

interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  noIndex?: boolean
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  canonical,
  ogImage,
  noIndex = false,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
}: SEOConfig): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`
  const url = canonical || siteConfig.url
  const image = ogImage || `${siteConfig.url}/og-default.png`

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: authors?.map((name) => ({ name })),
    creator: siteConfig.name,
    publisher: siteConfig.name,
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: siteConfig.twitter,
    },
  }
}

// Schema.org JSON-LD generators
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/dashboard/prompts?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AlwaysEncrypted',
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@alwaysencrypted.com',
      contactType: 'customer service',
    },
    sameAs: [
      'https://twitter.com/alwaysencrypted',
      'https://youtube.com/@alwaysencrypted',
      'https://linkedin.com/company/alwaysencrypted',
    ],
  }
}

export function generateProductSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'AI Prompts Library',
    description: '1000+ expert-crafted AI prompts for ChatGPT, Claude, Midjourney, and more.',
    brand: {
      '@type': 'Brand',
      name: 'AI Prompts Platform',
    },
    offers: {
      '@type': 'Offer',
      price: '39',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      ratingCount: '5000',
      bestRating: '5',
      worstRating: '1',
    },
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generatePromptSchema(prompt: {
  title: string
  description: string
  category: string
  datePublished: string
  dateModified: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: prompt.title,
    description: prompt.description,
    genre: prompt.category,
    datePublished: prompt.datePublished,
    dateModified: prompt.dateModified,
    creator: {
      '@type': 'Organization',
      name: 'AI Prompts Platform',
    },
    provider: {
      '@type': 'Organization',
      name: 'AlwaysEncrypted',
    },
  }
}

// Generate all schema for homepage
export function generateHomePageSchema() {
  return [
    generateWebsiteSchema(),
    generateOrganizationSchema(),
    generateProductSchema(),
  ]
}
