/**
 * Seed Script for AI Prompts Platform
 * Run with: npx tsx scripts/seed-prompts.ts
 */

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

interface SeedPrompt {
  title: string
  slug: string
  category: string
  prompt_text: string
  variables: { name: string; placeholder: string; description: string }[]
  ai_tools: string[]
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  is_pro: boolean
  is_featured: boolean
  tags: string[]
}

const promptsData: SeedPrompt[] = [
  // Text Generation - ChatGPT
  {
    title: 'Expert Business Consultant',
    slug: 'expert-business-consultant',
    category: 'business-strategy',
    prompt_text: `You are a senior business consultant with 20 years of experience helping startups scale to $10M+ revenue. I need help with [BUSINESS_CHALLENGE].

Please provide:
1. A diagnostic analysis of the situation
2. 3 strategic options with pros/cons
3. Your recommended approach with implementation steps
4. Key metrics to track success
5. Potential risks and mitigation strategies

Be specific, practical, and data-driven in your response.`,
    variables: [
      { name: 'BUSINESS_CHALLENGE', placeholder: '[BUSINESS_CHALLENGE]', description: 'Describe your specific business challenge' }
    ],
    ai_tools: ['chatgpt', 'claude', 'gemini'],
    difficulty: 'intermediate',
    is_pro: false,
    is_featured: true,
    tags: ['business', 'strategy', 'consulting', 'startup'],
  },
  {
    title: 'Content Marketing Strategy',
    slug: 'content-marketing-strategy',
    category: 'seo-marketing',
    prompt_text: `Act as a content marketing strategist who has generated millions in revenue through content.

I want to create a content strategy for [BUSINESS_NICHE]. My target audience is [TARGET_AUDIENCE].

Please provide:
1. 10 high-converting content pillar topics
2. 5 content formats that work best for this niche
3. A 30-day content calendar
4. SEO keywords to target for each piece
5. Distribution strategy across platforms

Focus on content that drives leads and sales, not just traffic.`,
    variables: [
      { name: 'BUSINESS_NICHE', placeholder: '[BUSINESS_NICHE]', description: 'Your business niche or industry' },
      { name: 'TARGET_AUDIENCE', placeholder: '[TARGET_AUDIENCE]', description: 'Description of your target audience' }
    ],
    ai_tools: ['chatgpt', 'claude', 'gemini'],
    difficulty: 'intermediate',
    is_pro: true,
    is_featured: true,
    tags: ['marketing', 'content', 'seo', 'strategy'],
  },
  {
    title: 'Code Review Expert',
    slug: 'code-review-expert',
    category: 'coding-development',
    prompt_text: `You are a senior software engineer conducting a thorough code review. Analyze the following [LANGUAGE] code for:

1. **Bugs & Logic Errors**: Identify any potential bugs or logical issues
2. **Performance**: Suggest optimizations for better performance
3. **Security**: Flag any security vulnerabilities (injection, XSS, etc.)
4. **Best Practices**: Check adherence to [LANGUAGE] best practices
5. **Readability**: Suggest improvements for maintainability

Code to review:
\`\`\`[LANGUAGE]
[CODE]
\`\`\`

Provide specific line-by-line feedback with code examples for fixes.`,
    variables: [
      { name: 'LANGUAGE', placeholder: '[LANGUAGE]', description: 'Programming language (e.g., Python, JavaScript)' },
      { name: 'CODE', placeholder: '[CODE]', description: 'The code you want reviewed' }
    ],
    ai_tools: ['chatgpt', 'claude', 'copilot'],
    difficulty: 'advanced',
    is_pro: true,
    is_featured: true,
    tags: ['coding', 'code-review', 'development', 'software'],
  },
  {
    title: 'SEO Article Writer',
    slug: 'seo-article-writer',
    category: 'content-creation',
    prompt_text: `You are an expert SEO content writer. Write a comprehensive article about "[TOPIC]" targeting the keyword "[KEYWORD]".

Requirements:
- Length: 1500-2000 words
- Include H2 and H3 subheadings (optimize for featured snippets)
- Write a compelling meta title (under 60 characters)
- Write a meta description (under 160 characters)
- Include 5-7 internal linking opportunities (mark as [INTERNAL LINK])
- Add a FAQ section with 5 questions
- Use the keyword naturally 5-7 times
- Include a clear call-to-action

Tone: Professional yet conversational
Target audience: [AUDIENCE]`,
    variables: [
      { name: 'TOPIC', placeholder: '[TOPIC]', description: 'The main topic of the article' },
      { name: 'KEYWORD', placeholder: '[KEYWORD]', description: 'Primary SEO keyword to target' },
      { name: 'AUDIENCE', placeholder: '[AUDIENCE]', description: 'Your target audience' }
    ],
    ai_tools: ['chatgpt', 'claude', 'gemini'],
    difficulty: 'beginner',
    is_pro: false,
    is_featured: true,
    tags: ['seo', 'writing', 'content', 'blogging'],
  },
  {
    title: 'Email Sequence Generator',
    slug: 'email-sequence-generator',
    category: 'seo-marketing',
    prompt_text: `Create a [NUMBER]-email welcome sequence for [BUSINESS_TYPE].

For each email, provide:
1. Subject line (+ 2 A/B test variations)
2. Preview text
3. Email body (conversational tone)
4. CTA button text
5. Optimal send timing

The sequence should:
- Email 1: Welcome + immediate value
- Email 2: Story/credibility building
- Email 3: Address common objections
- Email 4: Social proof
- Email 5: Soft pitch
- Email 6: Hard pitch with urgency

Target audience: [AUDIENCE]
Main offer: [OFFER]`,
    variables: [
      { name: 'NUMBER', placeholder: '[NUMBER]', description: 'Number of emails (e.g., 6)' },
      { name: 'BUSINESS_TYPE', placeholder: '[BUSINESS_TYPE]', description: 'Type of business' },
      { name: 'AUDIENCE', placeholder: '[AUDIENCE]', description: 'Target audience description' },
      { name: 'OFFER', placeholder: '[OFFER]', description: 'Main product or offer' }
    ],
    ai_tools: ['chatgpt', 'claude'],
    difficulty: 'intermediate',
    is_pro: true,
    is_featured: false,
    tags: ['email', 'marketing', 'copywriting', 'automation'],
  },
  // Image Generation Prompts
  {
    title: 'Professional Product Photography',
    slug: 'professional-product-photography',
    category: 'image-generation',
    prompt_text: `Professional product photography of [PRODUCT] on a clean white marble surface, soft natural window lighting from the left, shallow depth of field, 85mm lens, high-end commercial photography style, subtle reflection on surface, 8K ultra-detailed, shot on Phase One IQ4 --ar 4:5 --v 6 --style raw`,
    variables: [
      { name: 'PRODUCT', placeholder: '[PRODUCT]', description: 'Description of your product' }
    ],
    ai_tools: ['midjourney', 'dall-e', 'stable-diffusion'],
    difficulty: 'beginner',
    is_pro: false,
    is_featured: true,
    tags: ['product', 'photography', 'ecommerce', 'commercial'],
  },
  {
    title: 'Cinematic Portrait',
    slug: 'cinematic-portrait',
    category: 'image-generation',
    prompt_text: `Cinematic portrait of [SUBJECT], dramatic Rembrandt lighting with strong shadows, film grain, shallow depth of field at f/1.4, shot on Arri Alexa, color graded like [FILM_STYLE], 4:5 aspect ratio, ultra realistic skin texture, catchlight in eyes --ar 4:5 --v 6 --style raw`,
    variables: [
      { name: 'SUBJECT', placeholder: '[SUBJECT]', description: 'Description of the person/character' },
      { name: 'FILM_STYLE', placeholder: '[FILM_STYLE]', description: 'Film reference (e.g., Blade Runner 2049, Dune)' }
    ],
    ai_tools: ['midjourney', 'leonardo-ai', 'flux'],
    difficulty: 'intermediate',
    is_pro: true,
    is_featured: false,
    tags: ['portrait', 'cinematic', 'lighting', 'photography'],
  },
  {
    title: 'Modern Logo Design',
    slug: 'modern-logo-design',
    category: 'image-generation',
    prompt_text: `Minimalist modern logo design for [COMPANY_NAME], a [INDUSTRY] company. Clean geometric shapes, [COLOR_SCHEME] color palette, flat design aesthetic, scalable vector-style, negative space usage, professional corporate identity, white background --ar 1:1 --v 6`,
    variables: [
      { name: 'COMPANY_NAME', placeholder: '[COMPANY_NAME]', description: 'Name of the company' },
      { name: 'INDUSTRY', placeholder: '[INDUSTRY]', description: 'Industry or business type' },
      { name: 'COLOR_SCHEME', placeholder: '[COLOR_SCHEME]', description: 'Preferred colors (e.g., blue and silver)' }
    ],
    ai_tools: ['midjourney', 'dall-e'],
    difficulty: 'beginner',
    is_pro: false,
    is_featured: false,
    tags: ['logo', 'branding', 'design', 'business'],
  },
  // Video Prompts
  {
    title: 'Product Reveal Animation',
    slug: 'product-reveal-animation',
    category: 'video-generation',
    prompt_text: `A sleek 5-second product reveal animation: [PRODUCT] emerges from soft particles of light, camera slowly orbits around the object, premium dark gradient background with subtle [COLOR] accents, cinematic lighting with rim light highlighting edges, smooth slow motion at 60fps, Apple-style product showcase aesthetic, depth of field blur on background`,
    variables: [
      { name: 'PRODUCT', placeholder: '[PRODUCT]', description: 'Description of your product' },
      { name: 'COLOR', placeholder: '[COLOR]', description: 'Accent color (e.g., purple and gold)' }
    ],
    ai_tools: ['sora', 'runway', 'pika', 'kling-ai'],
    difficulty: 'intermediate',
    is_pro: true,
    is_featured: true,
    tags: ['video', 'product', 'animation', 'commercial'],
  },
  {
    title: 'Social Media Video Hook',
    slug: 'social-media-video-hook',
    category: 'video-generation',
    prompt_text: `Dynamic 3-second attention-grabbing hook for social media: [SUBJECT] in center frame, dramatic zoom-in effect with motion blur, [MOOD] color grading, text "[HOOK_TEXT]" appearing with kinetic typography, high energy pacing, vertical 9:16 format optimized for TikTok/Reels, trendy transitions`,
    variables: [
      { name: 'SUBJECT', placeholder: '[SUBJECT]', description: 'Main visual subject' },
      { name: 'MOOD', placeholder: '[MOOD]', description: 'Color mood (e.g., vibrant, moody, warm)' },
      { name: 'HOOK_TEXT', placeholder: '[HOOK_TEXT]', description: 'Text overlay to display' }
    ],
    ai_tools: ['sora', 'runway', 'pika'],
    difficulty: 'beginner',
    is_pro: false,
    is_featured: false,
    tags: ['social-media', 'video', 'tiktok', 'reels'],
  },
  // Productivity
  {
    title: 'Meeting Notes Summarizer',
    slug: 'meeting-notes-summarizer',
    category: 'productivity',
    prompt_text: `Summarize the following meeting notes into a clear, actionable format:

Meeting Notes:
[MEETING_NOTES]

Please provide:
1. **Meeting Summary** (2-3 sentences)
2. **Key Decisions Made** (bullet points)
3. **Action Items** (with owner and deadline if mentioned)
4. **Open Questions/Blockers**
5. **Next Steps**

Format the output for easy sharing via email or Slack.`,
    variables: [
      { name: 'MEETING_NOTES', placeholder: '[MEETING_NOTES]', description: 'Paste your meeting notes or transcript' }
    ],
    ai_tools: ['chatgpt', 'claude', 'gemini'],
    difficulty: 'beginner',
    is_pro: false,
    is_featured: false,
    tags: ['productivity', 'meetings', 'summary', 'work'],
  },
  {
    title: 'Weekly Report Generator',
    slug: 'weekly-report-generator',
    category: 'productivity',
    prompt_text: `Generate a professional weekly status report based on the following information:

Accomplishments this week:
[ACCOMPLISHMENTS]

Challenges/Blockers:
[CHALLENGES]

Next week priorities:
[PRIORITIES]

Format the report with:
1. Executive Summary (3 bullet points)
2. Completed Tasks (organized by project/category)
3. In Progress Items (with % completion)
4. Blockers & Requests
5. Next Week Focus Areas
6. Key Metrics/KPIs (if applicable)

Keep it concise and executive-friendly.`,
    variables: [
      { name: 'ACCOMPLISHMENTS', placeholder: '[ACCOMPLISHMENTS]', description: 'What you completed this week' },
      { name: 'CHALLENGES', placeholder: '[CHALLENGES]', description: 'Any blockers or challenges' },
      { name: 'PRIORITIES', placeholder: '[PRIORITIES]', description: 'Next week priorities' }
    ],
    ai_tools: ['chatgpt', 'claude'],
    difficulty: 'beginner',
    is_pro: false,
    is_featured: false,
    tags: ['productivity', 'reports', 'work', 'management'],
  },
  // Prompt Engineering
  {
    title: 'Universal Prompt Improver',
    slug: 'universal-prompt-improver',
    category: 'prompt-engineering',
    prompt_text: `You are an expert prompt engineer. Take the following prompt and improve it to get better AI outputs:

Original Prompt:
"[ORIGINAL_PROMPT]"

Improve this prompt by:
1. Adding specific role/persona definition
2. Including context and constraints
3. Specifying output format requirements
4. Adding examples if helpful
5. Including quality criteria

Provide:
1. The improved prompt (ready to copy/paste)
2. Explanation of each improvement made
3. Tips for further customization`,
    variables: [
      { name: 'ORIGINAL_PROMPT', placeholder: '[ORIGINAL_PROMPT]', description: 'The prompt you want to improve' }
    ],
    ai_tools: ['chatgpt', 'claude', 'gemini'],
    difficulty: 'intermediate',
    is_pro: true,
    is_featured: true,
    tags: ['prompt-engineering', 'meta', 'optimization'],
  },
  {
    title: 'Image Prompt Generator',
    slug: 'image-prompt-generator',
    category: 'prompt-engineering',
    prompt_text: `Generate 5 detailed image generation prompts based on this concept: [CONCEPT]

For each prompt include:
- Subject description with specific details
- Art style reference (photorealistic, anime, oil painting, etc.)
- Lighting specifications
- Camera angle and lens
- Color palette
- Mood/atmosphere
- Technical parameters (aspect ratio, version, style)

Target AI tool: [AI_TOOL]

Format each prompt ready to copy/paste directly into the AI tool.`,
    variables: [
      { name: 'CONCEPT', placeholder: '[CONCEPT]', description: 'Your image concept or idea' },
      { name: 'AI_TOOL', placeholder: '[AI_TOOL]', description: 'Target tool (Midjourney, DALL-E, Stable Diffusion)' }
    ],
    ai_tools: ['chatgpt', 'claude'],
    difficulty: 'intermediate',
    is_pro: true,
    is_featured: false,
    tags: ['prompt-engineering', 'image', 'generator', 'midjourney'],
  },
  // Social Media
  {
    title: 'LinkedIn Post Generator',
    slug: 'linkedin-post-generator',
    category: 'social-media',
    prompt_text: `Write a viral LinkedIn post about [TOPIC] that will drive engagement.

Requirements:
- Hook: Start with a compelling first line (pattern interrupt)
- Length: 150-200 words (optimal for LinkedIn algorithm)
- Format: Short paragraphs, white space, easy to scan
- Include 3-5 relevant hashtags
- End with a question or CTA to drive comments
- Tone: [TONE] (professional, inspirational, controversial, etc.)

My industry: [INDUSTRY]
My goal: [GOAL] (build authority, generate leads, grow network)

Provide 3 variations with different hooks.`,
    variables: [
      { name: 'TOPIC', placeholder: '[TOPIC]', description: 'Topic of the post' },
      { name: 'TONE', placeholder: '[TONE]', description: 'Tone of voice' },
      { name: 'INDUSTRY', placeholder: '[INDUSTRY]', description: 'Your industry' },
      { name: 'GOAL', placeholder: '[GOAL]', description: 'What you want to achieve' }
    ],
    ai_tools: ['chatgpt', 'claude'],
    difficulty: 'beginner',
    is_pro: false,
    is_featured: false,
    tags: ['linkedin', 'social-media', 'content', 'personal-brand'],
  },
  {
    title: 'Twitter/X Thread Writer',
    slug: 'twitter-thread-writer',
    category: 'social-media',
    prompt_text: `Write a Twitter/X thread (10 tweets) about [TOPIC] that will go viral.

Requirements:
- Tweet 1: Hook that makes people stop scrolling (use curiosity gap)
- Tweets 2-9: Deliver value, each tweet should stand alone but build the narrative
- Tweet 10: CTA (follow for more, link, etc.)
- Use emojis strategically (1-2 per tweet max)
- Include thread breaks for readability
- Add engagement hooks ("Reply if you agree", "Which one resonates?")

Target audience: [AUDIENCE]
My expertise: [EXPERTISE]

Format: Number each tweet and keep under 280 characters each.`,
    variables: [
      { name: 'TOPIC', placeholder: '[TOPIC]', description: 'Thread topic' },
      { name: 'AUDIENCE', placeholder: '[AUDIENCE]', description: 'Target audience' },
      { name: 'EXPERTISE', placeholder: '[EXPERTISE]', description: 'Your area of expertise' }
    ],
    ai_tools: ['chatgpt', 'claude'],
    difficulty: 'beginner',
    is_pro: false,
    is_featured: false,
    tags: ['twitter', 'x', 'social-media', 'threads', 'viral'],
  },
  // Creative Writing
  {
    title: 'Story Scene Writer',
    slug: 'story-scene-writer',
    category: 'creative-writing',
    prompt_text: `Write a compelling scene for a [GENRE] story with the following parameters:

Setting: [SETTING]
Characters: [CHARACTERS]
Conflict/Goal: [CONFLICT]
Mood: [MOOD]

Requirements:
- Length: 500-800 words
- Show, don't tell
- Include sensory details (sight, sound, smell, touch, taste)
- Write snappy dialogue that reveals character
- Build tension throughout
- End on a hook that makes readers want more

Writing style: [STYLE] (e.g., Hemingway-esque sparse, flowery literary, fast-paced thriller)`,
    variables: [
      { name: 'GENRE', placeholder: '[GENRE]', description: 'Story genre (thriller, romance, sci-fi)' },
      { name: 'SETTING', placeholder: '[SETTING]', description: 'Where and when the scene takes place' },
      { name: 'CHARACTERS', placeholder: '[CHARACTERS]', description: 'Characters in the scene' },
      { name: 'CONFLICT', placeholder: '[CONFLICT]', description: 'The central conflict or goal' },
      { name: 'MOOD', placeholder: '[MOOD]', description: 'Emotional tone' },
      { name: 'STYLE', placeholder: '[STYLE]', description: 'Writing style preference' }
    ],
    ai_tools: ['chatgpt', 'claude'],
    difficulty: 'intermediate',
    is_pro: true,
    is_featured: false,
    tags: ['creative-writing', 'fiction', 'storytelling', 'scenes'],
  },
  // Data Analysis
  {
    title: 'Data Insights Analyst',
    slug: 'data-insights-analyst',
    category: 'data-analysis',
    prompt_text: `Act as a senior data analyst. Analyze the following data and provide actionable insights:

Data:
[DATA]

Please provide:
1. **Executive Summary** (3 key takeaways)
2. **Trend Analysis** (what patterns do you see?)
3. **Anomaly Detection** (anything unusual?)
4. **Comparative Analysis** (how does this compare to benchmarks?)
5. **Recommendations** (what actions should be taken?)
6. **Visualization Suggestions** (what charts would best represent this?)

Context: [CONTEXT]
Business question: [QUESTION]`,
    variables: [
      { name: 'DATA', placeholder: '[DATA]', description: 'Paste your data (CSV, numbers, or description)' },
      { name: 'CONTEXT', placeholder: '[CONTEXT]', description: 'Business context for the data' },
      { name: 'QUESTION', placeholder: '[QUESTION]', description: 'What question are you trying to answer?' }
    ],
    ai_tools: ['chatgpt', 'claude', 'gemini'],
    difficulty: 'advanced',
    is_pro: true,
    is_featured: false,
    tags: ['data', 'analysis', 'insights', 'business-intelligence'],
  },
  // Real Estate
  {
    title: 'Property Listing Generator',
    slug: 'property-listing-generator',
    category: 'real-estate',
    prompt_text: `Create a compelling real estate listing for the following property:

Property Details:
- Type: [PROPERTY_TYPE]
- Bedrooms: [BEDROOMS]
- Bathrooms: [BATHROOMS]
- Square Footage: [SQFT]
- Special Features: [FEATURES]
- Location: [LOCATION]
- Price: [PRICE]

Generate:
1. **Headline** (attention-grabbing, under 10 words)
2. **Opening Hook** (first 2 sentences that sell the lifestyle)
3. **Feature Highlights** (bullet points for key features)
4. **Full Description** (200-300 words, evocative language)
5. **Call-to-Action** (schedule showing, contact agent)

Tone: Professional but warm, emphasize lifestyle benefits over specs.`,
    variables: [
      { name: 'PROPERTY_TYPE', placeholder: '[PROPERTY_TYPE]', description: 'Type of property' },
      { name: 'BEDROOMS', placeholder: '[BEDROOMS]', description: 'Number of bedrooms' },
      { name: 'BATHROOMS', placeholder: '[BATHROOMS]', description: 'Number of bathrooms' },
      { name: 'SQFT', placeholder: '[SQFT]', description: 'Square footage' },
      { name: 'FEATURES', placeholder: '[FEATURES]', description: 'Special features' },
      { name: 'LOCATION', placeholder: '[LOCATION]', description: 'Location/neighborhood' },
      { name: 'PRICE', placeholder: '[PRICE]', description: 'Listing price' }
    ],
    ai_tools: ['chatgpt', 'claude'],
    difficulty: 'beginner',
    is_pro: false,
    is_featured: false,
    tags: ['real-estate', 'listing', 'property', 'marketing'],
  },
]

async function seedPrompts() {
  console.log('Starting to seed prompts...')

  for (const prompt of promptsData) {
    try {
      const { error } = await supabase
        .from('prompts')
        .upsert({
          ...prompt,
          source_url: 'https://prompts.alwaysencrypted.com',
          source_article: 'AI Prompts Platform - Curated Collection',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }, {
          onConflict: 'slug',
        })

      if (error) {
        console.error(`Error inserting prompt ${prompt.slug}:`, error)
      } else {
        console.log(`✓ Inserted: ${prompt.title}`)
      }
    } catch (err) {
      console.error(`Error with prompt ${prompt.slug}:`, err)
    }
  }

  console.log(`\nSeeding complete! Inserted ${promptsData.length} prompts.`)
}

seedPrompts().catch(console.error)
