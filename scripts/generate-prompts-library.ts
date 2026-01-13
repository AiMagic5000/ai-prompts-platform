/**
 * AI Prompts Library Generator
 * Generates 1000+ expert-crafted prompts across all categories
 */

import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';

// Types
interface GeneratedPrompt {
  title: string;
  slug: string;
  category: string;
  prompt_text: string;
  variables: string[];
  usage_notes: string;
  ai_tools: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  is_pro: boolean;
  tags: string[];
}

// =====================================================
// PROMPT TEMPLATES BY CATEGORY
// =====================================================

const promptTemplates: Record<string, GeneratedPrompt[]> = {
  // ==========================================
  // TEXT GENERATION - ChatGPT/Claude
  // ==========================================
  'text-generation': [
    {
      title: 'Expert Consultant Roleplay',
      slug: 'expert-consultant-roleplay',
      category: 'text-generation',
      prompt_text: `You are a world-class [EXPERTISE] consultant with 20+ years of experience advising Fortune 500 companies. Your approach combines deep industry knowledge with practical, actionable insights.

Background: You have worked with companies like [EXAMPLE_COMPANIES] and have been featured in [PUBLICATIONS].

Communication Style:
- Direct and confident
- Use specific examples and data when possible
- Challenge assumptions when necessary
- Provide actionable recommendations

For this consultation, I need your expert guidance on: [TOPIC]

Please provide:
1. Initial assessment and key observations
2. Strategic recommendations (prioritized)
3. Potential risks and mitigation strategies
4. Implementation roadmap
5. Success metrics to track`,
      variables: ['EXPERTISE', 'EXAMPLE_COMPANIES', 'PUBLICATIONS', 'TOPIC'],
      usage_notes: 'Replace variables with your specific needs. Works best for business strategy, marketing, and professional consulting scenarios.',
      ai_tools: ['chatgpt', 'claude', 'gemini'],
      difficulty: 'intermediate',
      is_pro: true,
      tags: ['consulting', 'business', 'strategy', 'expert']
    },
    {
      title: 'Ultimate Blog Post Writer',
      slug: 'ultimate-blog-post-writer',
      category: 'text-generation',
      prompt_text: `You are an expert content writer specializing in [NICHE]. Write a comprehensive, engaging blog post on the topic: "[TOPIC]"

Target audience: [TARGET_AUDIENCE]
Desired word count: [WORD_COUNT]
Tone: [TONE]

Structure requirements:
1. Hook opening that captures attention
2. Clear H2 and H3 subheadings
3. Bullet points and numbered lists where appropriate
4. Real-world examples and case studies
5. Actionable takeaways
6. Compelling conclusion with CTA

SEO requirements:
- Primary keyword: [PRIMARY_KEYWORD]
- Secondary keywords: [SECONDARY_KEYWORDS]
- Include keyword naturally in first paragraph
- Use keywords in at least 2 subheadings

Write the complete blog post now:`,
      variables: ['NICHE', 'TOPIC', 'TARGET_AUDIENCE', 'WORD_COUNT', 'TONE', 'PRIMARY_KEYWORD', 'SECONDARY_KEYWORDS'],
      usage_notes: 'Specify your niche, target word count (1500-3000 recommended), and SEO keywords for best results.',
      ai_tools: ['chatgpt', 'claude'],
      difficulty: 'intermediate',
      is_pro: true,
      tags: ['blogging', 'content', 'seo', 'writing']
    },
    {
      title: 'Email Sequence Generator',
      slug: 'email-sequence-generator',
      category: 'text-generation',
      prompt_text: `Create a [NUMBER]-email sequence for [PURPOSE].

Product/Service: [PRODUCT]
Target audience: [AUDIENCE]
Desired action: [CTA]
Tone: [TONE]

For each email, provide:
1. Subject line (A/B test options)
2. Preview text
3. Email body with clear formatting
4. Call-to-action button text
5. Best send time recommendation

Sequence structure:
- Email 1: [First email focus]
- Email 2: [Second email focus]
- Email 3: [Third email focus]
[Continue for all emails]

Make each email progressively build urgency while maintaining value. Include personalization tokens where appropriate ([FIRST_NAME], etc).`,
      variables: ['NUMBER', 'PURPOSE', 'PRODUCT', 'AUDIENCE', 'CTA', 'TONE'],
      usage_notes: 'Great for welcome sequences, sales funnels, onboarding, and nurture campaigns.',
      ai_tools: ['chatgpt', 'claude'],
      difficulty: 'advanced',
      is_pro: true,
      tags: ['email', 'marketing', 'sales', 'automation']
    },
    {
      title: 'Social Media Content Calendar',
      slug: 'social-media-content-calendar',
      category: 'text-generation',
      prompt_text: `Create a [TIMEFRAME] social media content calendar for [BRAND/BUSINESS].

Platforms: [PLATFORMS]
Industry: [INDUSTRY]
Content pillars: [PILLARS]
Posting frequency: [FREQUENCY]

For each post include:
- Platform
- Date/Time
- Content type (image, video, carousel, text)
- Caption with hashtags
- Visual description/concept
- Engagement CTA

Content mix:
- Educational: 40%
- Entertaining: 25%
- Promotional: 20%
- User-generated/Community: 15%

Brand voice: [VOICE_DESCRIPTION]
Key themes: [THEMES]`,
      variables: ['TIMEFRAME', 'BRAND/BUSINESS', 'PLATFORMS', 'INDUSTRY', 'PILLARS', 'FREQUENCY', 'VOICE_DESCRIPTION', 'THEMES'],
      usage_notes: 'Specify all platforms you want content for. Include brand voice guidelines for consistency.',
      ai_tools: ['chatgpt', 'claude'],
      difficulty: 'intermediate',
      is_pro: true,
      tags: ['social-media', 'content', 'marketing', 'calendar']
    },
    {
      title: 'Product Description Writer',
      slug: 'product-description-writer',
      category: 'text-generation',
      prompt_text: `Write a compelling product description for: [PRODUCT_NAME]

Product details:
- Category: [CATEGORY]
- Key features: [FEATURES]
- Benefits: [BENEFITS]
- Target customer: [TARGET]
- Price point: [PRICE]
- Unique selling proposition: [USP]

Write in this format:
1. Attention-grabbing headline
2. Opening hook (emotional connection)
3. Key benefits (bullet points)
4. Feature-to-benefit explanations
5. Social proof suggestion
6. Urgency/scarcity element
7. Clear call-to-action

Tone: [TONE]
Length: [LENGTH] words`,
      variables: ['PRODUCT_NAME', 'CATEGORY', 'FEATURES', 'BENEFITS', 'TARGET', 'PRICE', 'USP', 'TONE', 'LENGTH'],
      usage_notes: 'Perfect for e-commerce, Amazon listings, and product pages. Include all features for comprehensive descriptions.',
      ai_tools: ['chatgpt', 'claude'],
      difficulty: 'beginner',
      is_pro: false,
      tags: ['ecommerce', 'product', 'copywriting', 'sales']
    },
    {
      title: 'Meeting Summary Generator',
      slug: 'meeting-summary-generator',
      category: 'text-generation',
      prompt_text: `Summarize the following meeting transcript into a professional meeting summary:

Meeting Details:
- Date: [DATE]
- Attendees: [ATTENDEES]
- Meeting type: [TYPE]

Transcript:
"""
[PASTE_TRANSCRIPT]
"""

Generate a summary with:
1. Meeting Overview (2-3 sentences)
2. Key Discussion Points
3. Decisions Made
4. Action Items (with owners and deadlines)
5. Open Questions/Parking Lot Items
6. Next Steps
7. Next Meeting (if mentioned)

Format as a professional document suitable for sharing with stakeholders.`,
      variables: ['DATE', 'ATTENDEES', 'TYPE', 'PASTE_TRANSCRIPT'],
      usage_notes: 'Paste meeting transcripts from Zoom, Teams, or manual notes. Great for keeping teams aligned.',
      ai_tools: ['chatgpt', 'claude', 'gemini'],
      difficulty: 'beginner',
      is_pro: false,
      tags: ['productivity', 'meetings', 'summary', 'business']
    },
    {
      title: 'Resume Optimizer',
      slug: 'resume-optimizer',
      category: 'text-generation',
      prompt_text: `Optimize my resume for the following job position:

Job Title: [JOB_TITLE]
Company: [COMPANY]
Industry: [INDUSTRY]

Job Description:
"""
[JOB_DESCRIPTION]
"""

My Current Resume:
"""
[CURRENT_RESUME]
"""

Please:
1. Identify key skills and keywords from the job description
2. Rewrite my experience bullets using the STAR method
3. Quantify achievements where possible
4. Suggest skills to highlight
5. Recommend sections to add/remove
6. Provide ATS optimization tips
7. Write a tailored professional summary

Output the optimized resume in a clean, professional format.`,
      variables: ['JOB_TITLE', 'COMPANY', 'INDUSTRY', 'JOB_DESCRIPTION', 'CURRENT_RESUME'],
      usage_notes: 'Include the full job description for best keyword optimization. Works for any industry.',
      ai_tools: ['chatgpt', 'claude'],
      difficulty: 'intermediate',
      is_pro: true,
      tags: ['career', 'resume', 'job-search', 'professional']
    },
    {
      title: 'Story Plot Generator',
      slug: 'story-plot-generator',
      category: 'text-generation',
      prompt_text: `Create a detailed story plot for a [GENRE] story with the following elements:

Setting: [SETTING]
Time period: [TIME_PERIOD]
Main character: [PROTAGONIST]
Antagonist/Conflict: [ANTAGONIST]
Theme: [THEME]
Target length: [LENGTH]

Generate:
1. Logline (1 sentence pitch)
2. Synopsis (1 paragraph)
3. Three-act structure breakdown
4. Character arcs for main characters
5. Key plot points and turning points
6. Subplots
7. Climax and resolution
8. Opening scene suggestion
9. Closing scene suggestion

Include specific scenes and dialogue snippets where impactful.`,
      variables: ['GENRE', 'SETTING', 'TIME_PERIOD', 'PROTAGONIST', 'ANTAGONIST', 'THEME', 'LENGTH'],
      usage_notes: 'Great for novels, screenplays, short stories, and game narratives.',
      ai_tools: ['chatgpt', 'claude'],
      difficulty: 'intermediate',
      is_pro: true,
      tags: ['creative-writing', 'fiction', 'storytelling', 'plot']
    },
    {
      title: 'Technical Documentation Writer',
      slug: 'technical-documentation-writer',
      category: 'text-generation',
      prompt_text: `Write technical documentation for: [FEATURE/SYSTEM]

Documentation type: [TYPE]
Audience: [AUDIENCE]
Technical level: [LEVEL]

Context:
"""
[CONTEXT/CODE/SPECS]
"""

Create documentation including:
1. Overview/Introduction
2. Prerequisites
3. Installation/Setup (if applicable)
4. Core Concepts
5. Step-by-step Instructions
6. Code examples with comments
7. Configuration options
8. Common use cases
9. Troubleshooting section
10. FAQ
11. Related resources

Use clear formatting with headers, code blocks, callouts for warnings/tips, and diagrams described in text.`,
      variables: ['FEATURE/SYSTEM', 'TYPE', 'AUDIENCE', 'LEVEL', 'CONTEXT/CODE/SPECS'],
      usage_notes: 'Types: API docs, user guides, README, architecture docs. Specify technical level clearly.',
      ai_tools: ['chatgpt', 'claude'],
      difficulty: 'advanced',
      is_pro: true,
      tags: ['documentation', 'technical', 'developer', 'writing']
    },
    {
      title: 'Press Release Template',
      slug: 'press-release-template',
      category: 'text-generation',
      prompt_text: `Write a professional press release for:

Company: [COMPANY]
Announcement: [ANNOUNCEMENT]
Date: [DATE]
Location: [LOCATION]

Key details:
- What: [WHAT]
- Why it matters: [SIGNIFICANCE]
- Key quote source: [SPOKESPERSON]
- Supporting data: [DATA]

Follow AP style and include:
1. Compelling headline
2. Subheadline
3. Dateline
4. Lead paragraph (who, what, when, where, why)
5. Supporting paragraphs with quotes
6. Boilerplate about the company
7. Media contact information
8. ### end marker

Make it newsworthy and quotable.`,
      variables: ['COMPANY', 'ANNOUNCEMENT', 'DATE', 'LOCATION', 'WHAT', 'SIGNIFICANCE', 'SPOKESPERSON', 'DATA'],
      usage_notes: 'Follow the standard press release format. Include concrete data and quotable statements.',
      ai_tools: ['chatgpt', 'claude'],
      difficulty: 'intermediate',
      is_pro: false,
      tags: ['pr', 'press-release', 'marketing', 'communications']
    }
  ],

  // ==========================================
  // IMAGE GENERATION - Midjourney/DALL-E/Stable Diffusion
  // ==========================================
  'image-generation': [
    {
      title: 'Professional Product Photography',
      slug: 'professional-product-photography',
      category: 'image-generation',
      prompt_text: `Professional product photography of [PRODUCT], studio lighting setup with [LIGHTING_STYLE], placed on [SURFACE], [BACKGROUND] background, shot with [CAMERA] camera, [LENS]mm lens, f/[APERTURE], product hero shot, commercial advertising quality, ultra sharp focus on product, subtle shadows, [COLOR_SCHEME] color palette, 8k resolution, photorealistic --ar [ASPECT_RATIO] --v 6`,
      variables: ['PRODUCT', 'LIGHTING_STYLE', 'SURFACE', 'BACKGROUND', 'CAMERA', 'LENS', 'APERTURE', 'COLOR_SCHEME', 'ASPECT_RATIO'],
      usage_notes: 'Lighting styles: softbox, rim light, golden hour, dramatic. Surfaces: marble, wood, fabric. Use --ar 1:1 for social, 16:9 for web.',
      ai_tools: ['midjourney', 'dall-e', 'stable-diffusion'],
      difficulty: 'intermediate',
      is_pro: true,
      tags: ['product', 'photography', 'commercial', 'ecommerce']
    },
    {
      title: 'Cinematic Film Still',
      slug: 'cinematic-film-still',
      category: 'image-generation',
      prompt_text: `Cinematic film still from [GENRE] movie, [SCENE_DESCRIPTION], [CHARACTER_DESCRIPTION], [LIGHTING] lighting, shot on [FILM_STOCK], directed by [DIRECTOR_STYLE], [COLOR_GRADING] color grading, anamorphic lens flare, shallow depth of field, atmospheric [ATMOSPHERE], 35mm film grain, movie poster quality, dramatic composition --ar 21:9 --v 6 --style raw`,
      variables: ['GENRE', 'SCENE_DESCRIPTION', 'CHARACTER_DESCRIPTION', 'LIGHTING', 'FILM_STOCK', 'DIRECTOR_STYLE', 'COLOR_GRADING', 'ATMOSPHERE'],
      usage_notes: 'Director styles: Wes Anderson, Christopher Nolan, Denis Villeneuve, Ridley Scott. Film stocks: Kodak Portra, Fujifilm, CineStill.',
      ai_tools: ['midjourney', 'leonardo-ai'],
      difficulty: 'advanced',
      is_pro: true,
      tags: ['cinematic', 'film', 'movie', 'dramatic']
    },
    {
      title: 'Portrait Photography',
      slug: 'portrait-photography',
      category: 'image-generation',
      prompt_text: `Professional portrait photograph of [SUBJECT_DESCRIPTION], [ETHNICITY] [AGE] [GENDER], [EXPRESSION] expression, [POSE], [CLOTHING], [LIGHTING_TYPE] lighting, shot with Canon EOS R5, 85mm f/1.4 lens, [BACKGROUND], bokeh background, natural skin texture, editorial fashion photography, high-end retouching, [MOOD] mood, 8k ultra detailed --ar [ASPECT_RATIO] --v 6`,
      variables: ['SUBJECT_DESCRIPTION', 'ETHNICITY', 'AGE', 'GENDER', 'EXPRESSION', 'POSE', 'CLOTHING', 'LIGHTING_TYPE', 'BACKGROUND', 'MOOD', 'ASPECT_RATIO'],
      usage_notes: 'Lighting types: Rembrandt, butterfly, loop, split, broad. For commercial: use 4:5 for Instagram, 1:1 for profiles.',
      ai_tools: ['midjourney', 'dall-e', 'stable-diffusion', 'leonardo-ai'],
      difficulty: 'intermediate',
      is_pro: true,
      tags: ['portrait', 'photography', 'headshot', 'professional']
    },
    {
      title: 'Fantasy Landscape',
      slug: 'fantasy-landscape',
      category: 'image-generation',
      prompt_text: `Epic fantasy landscape, [ENVIRONMENT] with [FANTASY_ELEMENTS], [TIME_OF_DAY] sky with [SKY_DESCRIPTION], [ATMOSPHERIC_EFFECTS], [ARCHITECTURE/STRUCTURES], [VEGETATION], magical [MAGIC_ELEMENTS], inspired by [ART_STYLE], matte painting quality, vast scale with sense of wonder, volumetric lighting, [COLOR_PALETTE] palette, digital art masterpiece --ar 16:9 --v 6`,
      variables: ['ENVIRONMENT', 'FANTASY_ELEMENTS', 'TIME_OF_DAY', 'SKY_DESCRIPTION', 'ATMOSPHERIC_EFFECTS', 'ARCHITECTURE/STRUCTURES', 'VEGETATION', 'MAGIC_ELEMENTS', 'ART_STYLE', 'COLOR_PALETTE'],
      usage_notes: 'Art styles: Studio Ghibli, Lord of the Rings, Final Fantasy. Great for game art, book covers, concept art.',
      ai_tools: ['midjourney', 'leonardo-ai', 'stable-diffusion'],
      difficulty: 'intermediate',
      is_pro: false,
      tags: ['fantasy', 'landscape', 'digital-art', 'concept-art']
    },
    {
      title: 'Logo Design Concept',
      slug: 'logo-design-concept',
      category: 'image-generation',
      prompt_text: `Minimalist logo design for [COMPANY_TYPE] company named "[COMPANY_NAME]", [CONCEPT/SYMBOL], [STYLE] style, [COLOR_SCHEME] colors, clean vector aesthetic, scalable design, negative space utilization, professional brand identity, logo on white background, simple geometric shapes, modern and memorable, designed by [DESIGNER_STYLE], suitable for all applications --v 6`,
      variables: ['COMPANY_TYPE', 'COMPANY_NAME', 'CONCEPT/SYMBOL', 'STYLE', 'COLOR_SCHEME', 'DESIGNER_STYLE'],
      usage_notes: 'Styles: minimalist, vintage, tech, luxury, playful. Designer styles: Paul Rand, Aaron Draplin, Paula Scher.',
      ai_tools: ['midjourney', 'dall-e'],
      difficulty: 'intermediate',
      is_pro: true,
      tags: ['logo', 'branding', 'design', 'business']
    },
    {
      title: 'Food Photography',
      slug: 'food-photography',
      category: 'image-generation',
      prompt_text: `Professional food photography of [DISH], [PLATING_STYLE] plating, on [PLATE/SURFACE], [GARNISHES], [PROPS], [LIGHTING] lighting, overhead/[ANGLE] angle, [BACKGROUND], appetizing and delicious, food styling by professional chef, [CUISINE] cuisine, Instagram worthy, editorial quality, slight steam/[EFFECTS], vibrant colors, sharp focus, 8k --ar 4:5 --v 6`,
      variables: ['DISH', 'PLATING_STYLE', 'PLATE/SURFACE', 'GARNISHES', 'PROPS', 'LIGHTING', 'ANGLE', 'BACKGROUND', 'CUISINE', 'EFFECTS'],
      usage_notes: 'Angles: 45-degree, flat lay, eye-level. Lighting: natural window, soft diffused, dramatic moody.',
      ai_tools: ['midjourney', 'dall-e', 'stable-diffusion'],
      difficulty: 'intermediate',
      is_pro: false,
      tags: ['food', 'photography', 'culinary', 'restaurant']
    },
    {
      title: 'Architectural Visualization',
      slug: 'architectural-visualization',
      category: 'image-generation',
      prompt_text: `Architectural visualization of [BUILDING_TYPE], [ARCHITECTURAL_STYLE] design by [ARCHITECT_STYLE], [MATERIALS], [SETTING/LOCATION], [TIME_OF_DAY] lighting, [LANDSCAPE], [PEOPLE/LIFE], photorealistic render, Unreal Engine 5 quality, V-Ray rendering, architectural photography, [INTERIOR/EXTERIOR], professional real estate visualization --ar 16:9 --v 6`,
      variables: ['BUILDING_TYPE', 'ARCHITECTURAL_STYLE', 'ARCHITECT_STYLE', 'MATERIALS', 'SETTING/LOCATION', 'TIME_OF_DAY', 'LANDSCAPE', 'PEOPLE/LIFE', 'INTERIOR/EXTERIOR'],
      usage_notes: 'Architect styles: Zaha Hadid, Frank Lloyd Wright, Tadao Ando, Bjarke Ingels. Great for real estate and architecture.',
      ai_tools: ['midjourney', 'stable-diffusion', 'leonardo-ai'],
      difficulty: 'advanced',
      is_pro: true,
      tags: ['architecture', 'visualization', 'real-estate', 'design']
    },
    {
      title: 'Social Media Graphic',
      slug: 'social-media-graphic',
      category: 'image-generation',
      prompt_text: `Eye-catching social media graphic for [PLATFORM], [TOPIC/THEME], [STYLE] design aesthetic, [COLOR_SCHEME] colors, bold typography space for "[TEXT]", [VISUAL_ELEMENTS], clean modern layout, scroll-stopping design, high contrast, [BRAND_ELEMENTS], suitable for [CONTENT_TYPE], engaging and shareable --ar [ASPECT_RATIO] --v 6`,
      variables: ['PLATFORM', 'TOPIC/THEME', 'STYLE', 'COLOR_SCHEME', 'TEXT', 'VISUAL_ELEMENTS', 'BRAND_ELEMENTS', 'CONTENT_TYPE', 'ASPECT_RATIO'],
      usage_notes: 'Instagram: 1:1 or 4:5, Pinterest: 2:3, Twitter: 16:9. Leave space for text overlays.',
      ai_tools: ['midjourney', 'dall-e', 'canva'],
      difficulty: 'beginner',
      is_pro: false,
      tags: ['social-media', 'graphic-design', 'marketing', 'content']
    },
    {
      title: 'Anime Character Design',
      slug: 'anime-character-design',
      category: 'image-generation',
      prompt_text: `Anime character design, [CHARACTER_DESCRIPTION], [HAIR_STYLE] [HAIR_COLOR] hair, [EYE_COLOR] eyes, [OUTFIT], [POSE], [EXPRESSION], [BACKGROUND], [ANIME_STYLE] anime style, inspired by [ANIME/ARTIST], detailed character sheet, dynamic lighting, cel shading, vibrant colors, professional anime quality, key visual --ar 2:3 --niji 6`,
      variables: ['CHARACTER_DESCRIPTION', 'HAIR_STYLE', 'HAIR_COLOR', 'EYE_COLOR', 'OUTFIT', 'POSE', 'EXPRESSION', 'BACKGROUND', 'ANIME_STYLE', 'ANIME/ARTIST'],
      usage_notes: 'Use --niji 6 for Midjourney anime mode. Styles: shonen, shojo, seinen, mecha, slice of life.',
      ai_tools: ['midjourney', 'stable-diffusion', 'leonardo-ai'],
      difficulty: 'intermediate',
      is_pro: false,
      tags: ['anime', 'character', 'illustration', 'manga']
    },
    {
      title: 'Book Cover Design',
      slug: 'book-cover-design',
      category: 'image-generation',
      prompt_text: `Book cover design for [GENRE] novel titled "[TITLE]" by [AUTHOR], [KEY_VISUAL], [MOOD/ATMOSPHERE], [COLOR_SCHEME] color palette, space for title at [POSITION], professional book cover composition, bestseller quality, [ERA/PERIOD], [VISUAL_METAPHOR], compelling and intriguing, print-ready quality --ar 2:3 --v 6`,
      variables: ['GENRE', 'TITLE', 'AUTHOR', 'KEY_VISUAL', 'MOOD/ATMOSPHERE', 'COLOR_SCHEME', 'POSITION', 'ERA/PERIOD', 'VISUAL_METAPHOR'],
      usage_notes: 'Leave clear space for title text. Consider genre conventions: thriller = dark, romance = warm colors.',
      ai_tools: ['midjourney', 'dall-e', 'leonardo-ai'],
      difficulty: 'intermediate',
      is_pro: true,
      tags: ['book-cover', 'publishing', 'design', 'illustration']
    }
  ],

  // ==========================================
  // VIDEO GENERATION - Sora/Runway/Kling
  // ==========================================
  'video-generation': [
    {
      title: 'Cinematic Drone Shot',
      slug: 'cinematic-drone-shot',
      category: 'video-generation',
      prompt_text: `Cinematic aerial drone shot, [LOCATION/SCENE], camera slowly [MOVEMENT] to reveal [REVEAL], golden hour lighting with [SKY_DESCRIPTION], [ATMOSPHERIC_EFFECTS], [SUBJECT/FOCUS], professional cinematography, 4K quality, smooth camera movement, [SPEED] motion, filmic color grading, epic establishing shot`,
      variables: ['LOCATION/SCENE', 'MOVEMENT', 'REVEAL', 'SKY_DESCRIPTION', 'ATMOSPHERIC_EFFECTS', 'SUBJECT/FOCUS', 'SPEED'],
      usage_notes: 'Movements: ascending, descending, orbiting, tracking, push in, pull out. Great for establishing shots.',
      ai_tools: ['sora', 'runway', 'pika', 'kling-ai'],
      difficulty: 'intermediate',
      is_pro: true,
      tags: ['drone', 'cinematic', 'aerial', 'video']
    },
    {
      title: 'Product Commercial',
      slug: 'product-commercial',
      category: 'video-generation',
      prompt_text: `High-end product commercial for [PRODUCT], [PRODUCT_ACTION/MOVEMENT], sleek [SURFACE] surface, [LIGHTING] studio lighting, camera [CAMERA_MOVEMENT], [SPECIAL_EFFECTS], premium brand aesthetic, smooth slow motion, professional color grading, advertising quality, [MOOD], minimalist elegant style`,
      variables: ['PRODUCT', 'PRODUCT_ACTION/MOVEMENT', 'SURFACE', 'LIGHTING', 'CAMERA_MOVEMENT', 'SPECIAL_EFFECTS', 'MOOD'],
      usage_notes: 'Actions: rotating, unwrapping, pouring, assembling. Effects: reflections, particles, liquid splashes.',
      ai_tools: ['sora', 'runway', 'kling-ai'],
      difficulty: 'advanced',
      is_pro: true,
      tags: ['commercial', 'product', 'advertising', 'video']
    },
    {
      title: 'Character Animation',
      slug: 'character-animation',
      category: 'video-generation',
      prompt_text: `[CHARACTER_DESCRIPTION] character, [ACTION/ANIMATION], [SETTING/BACKGROUND], [LIGHTING_STYLE], [ART_STYLE] animation style, [EXPRESSION/EMOTION], smooth fluid motion, [CAMERA_ANGLE], professional animation quality, [COLOR_PALETTE] colors, engaging character performance`,
      variables: ['CHARACTER_DESCRIPTION', 'ACTION/ANIMATION', 'SETTING/BACKGROUND', 'LIGHTING_STYLE', 'ART_STYLE', 'EXPRESSION/EMOTION', 'CAMERA_ANGLE', 'COLOR_PALETTE'],
      usage_notes: 'Art styles: Pixar, anime, stop motion, 2D traditional. Keep actions simple and focused.',
      ai_tools: ['sora', 'runway', 'pika'],
      difficulty: 'advanced',
      is_pro: true,
      tags: ['animation', 'character', 'motion', 'video']
    },
    {
      title: 'Nature Documentary Shot',
      slug: 'nature-documentary-shot',
      category: 'video-generation',
      prompt_text: `Nature documentary footage of [ANIMAL/SUBJECT] in [HABITAT], [BEHAVIOR/ACTION], [TIME_OF_DAY] natural lighting, [WEATHER_CONDITIONS], shot on RED camera, telephoto lens compression, shallow depth of field, National Geographic quality, [MOOD], authentic wildlife behavior, cinematic nature photography`,
      variables: ['ANIMAL/SUBJECT', 'HABITAT', 'BEHAVIOR/ACTION', 'TIME_OF_DAY', 'WEATHER_CONDITIONS', 'MOOD'],
      usage_notes: 'Keep animal behaviors realistic and natural. Great for educational and environmental content.',
      ai_tools: ['sora', 'runway', 'kling-ai'],
      difficulty: 'intermediate',
      is_pro: false,
      tags: ['nature', 'documentary', 'wildlife', 'video']
    },
    {
      title: 'Music Video Sequence',
      slug: 'music-video-sequence',
      category: 'video-generation',
      prompt_text: `Music video sequence, [GENRE] music aesthetic, [PERFORMER/SUBJECT], [SETTING], [LIGHTING_STYLE] lighting with [COLORS], [CAMERA_TECHNIQUE], [VISUAL_EFFECTS], [MOOD/ENERGY] energy, MTV quality production, creative transitions, rhythm-synced visuals, artistic and expressive`,
      variables: ['GENRE', 'PERFORMER/SUBJECT', 'SETTING', 'LIGHTING_STYLE', 'COLORS', 'CAMERA_TECHNIQUE', 'VISUAL_EFFECTS', 'MOOD/ENERGY'],
      usage_notes: 'Camera techniques: whip pan, dolly zoom, tracking, handheld. Match energy to music genre.',
      ai_tools: ['sora', 'runway', 'pika'],
      difficulty: 'advanced',
      is_pro: true,
      tags: ['music-video', 'creative', 'entertainment', 'video']
    },
    {
      title: 'Explainer Animation',
      slug: 'explainer-animation',
      category: 'video-generation',
      prompt_text: `Clean explainer video animation, [TOPIC/CONCEPT] visualization, [VISUAL_METAPHOR], modern flat design style, [COLOR_SCHEME] brand colors, smooth motion graphics, [ICONS/ELEMENTS] animating, professional corporate style, clear visual hierarchy, minimalist aesthetic, suitable for [INDUSTRY/USE]`,
      variables: ['TOPIC/CONCEPT', 'VISUAL_METAPHOR', 'COLOR_SCHEME', 'ICONS/ELEMENTS', 'INDUSTRY/USE'],
      usage_notes: 'Great for SaaS demos, onboarding videos, educational content. Keep visuals simple and clear.',
      ai_tools: ['runway', 'pika'],
      difficulty: 'intermediate',
      is_pro: false,
      tags: ['explainer', 'animation', 'business', 'video']
    },
    {
      title: 'Timelapse Cityscape',
      slug: 'timelapse-cityscape',
      category: 'video-generation',
      prompt_text: `Hyperlapse/timelapse of [CITY/LOCATION], [VIEWPOINT] perspective, [TIME_TRANSITION] transition, [WEATHER], traffic light trails, clouds moving rapidly, city lights turning on, urban energy, professional timelapse quality, smooth motion, [STYLE] cinematography, metropolitan atmosphere`,
      variables: ['CITY/LOCATION', 'VIEWPOINT', 'TIME_TRANSITION', 'WEATHER', 'STYLE'],
      usage_notes: 'Time transitions: day to night, sunrise, sunset, golden hour. Great for travel and real estate.',
      ai_tools: ['sora', 'runway', 'kling-ai'],
      difficulty: 'intermediate',
      is_pro: false,
      tags: ['timelapse', 'city', 'urban', 'video']
    },
    {
      title: 'Action Sports Footage',
      slug: 'action-sports-footage',
      category: 'video-generation',
      prompt_text: `Dynamic action sports footage of [SPORT/ACTIVITY], [ATHLETE] performing [TRICK/MOVE], [LOCATION/VENUE], [CAMERA_ANGLE] angle, slow motion capture, [LIGHTING], adrenaline-pumping energy, GoPro style POV moments, professional sports cinematography, [WEATHER/CONDITIONS], peak action moment`,
      variables: ['SPORT/ACTIVITY', 'ATHLETE', 'TRICK/MOVE', 'LOCATION/VENUE', 'CAMERA_ANGLE', 'LIGHTING', 'WEATHER/CONDITIONS'],
      usage_notes: 'Camera angles: follow cam, POV, wide establishing, close-up action. Great for sports brands.',
      ai_tools: ['sora', 'runway', 'kling-ai'],
      difficulty: 'advanced',
      is_pro: true,
      tags: ['sports', 'action', 'extreme', 'video']
    },
    {
      title: 'Sci-Fi Scene',
      slug: 'scifi-scene',
      category: 'video-generation',
      prompt_text: `Science fiction scene, [SETTING/ENVIRONMENT], [CHARACTERS/SUBJECTS], [TECHNOLOGY/VEHICLES], [LIGHTING_ATMOSPHERE], [ACTION/EVENT], inspired by [REFERENCE], futuristic aesthetic, cinematic VFX quality, [COLOR_GRADING], atmospheric volumetric lighting, epic scale, professional sci-fi production`,
      variables: ['SETTING/ENVIRONMENT', 'CHARACTERS/SUBJECTS', 'TECHNOLOGY/VEHICLES', 'LIGHTING_ATMOSPHERE', 'ACTION/EVENT', 'REFERENCE', 'COLOR_GRADING'],
      usage_notes: 'References: Blade Runner, Dune, Interstellar, Mass Effect. Great for concept trailers and short films.',
      ai_tools: ['sora', 'runway', 'kling-ai'],
      difficulty: 'advanced',
      is_pro: true,
      tags: ['scifi', 'cinematic', 'vfx', 'video']
    },
    {
      title: 'Social Media Reel',
      slug: 'social-media-reel',
      category: 'video-generation',
      prompt_text: `Trendy social media reel/short, [CONTENT_TYPE], [SUBJECT], [STYLE] aesthetic, [TRANSITIONS], vertical 9:16 format, fast-paced engaging cuts, [EFFECTS/FILTERS], mobile-first quality, scroll-stopping opener, [MOOD], platform-native feel, shareable and viral potential`,
      variables: ['CONTENT_TYPE', 'SUBJECT', 'STYLE', 'TRANSITIONS', 'EFFECTS/FILTERS', 'MOOD'],
      usage_notes: 'Styles: aesthetic, cinematic, trendy, minimal. Keep under 30 seconds for best engagement.',
      ai_tools: ['runway', 'pika'],
      difficulty: 'beginner',
      is_pro: false,
      tags: ['social-media', 'reel', 'tiktok', 'video']
    }
  ],

  // ==========================================
  // BUSINESS STRATEGY
  // ==========================================
  'business-strategy': [
    {
      title: 'Business Plan Generator',
      slug: 'business-plan-generator',
      category: 'business-strategy',
      prompt_text: `Create a comprehensive business plan for:

Business: [BUSINESS_NAME]
Industry: [INDUSTRY]
Stage: [STAGE]
Target market: [TARGET_MARKET]
Unique value proposition: [UVP]

Generate a full business plan including:

1. Executive Summary
2. Company Description
3. Market Analysis
   - Industry overview
   - Target market demographics
   - Competitor analysis
4. Organization & Management
5. Products/Services Line
6. Marketing & Sales Strategy
7. Financial Projections (5-year)
   - Revenue model
   - Cost structure
   - Break-even analysis
8. Funding Requirements
9. Risk Analysis & Mitigation
10. Implementation Timeline

Use realistic assumptions and industry benchmarks.`,
      variables: ['BUSINESS_NAME', 'INDUSTRY', 'STAGE', 'TARGET_MARKET', 'UVP'],
      usage_notes: 'Stages: idea, startup, growth, expansion. Provide as much context as possible for accuracy.',
      ai_tools: ['chatgpt', 'claude'],
      difficulty: 'advanced',
      is_pro: true,
      tags: ['business-plan', 'startup', 'strategy', 'planning']
    },
    {
      title: 'Competitive Analysis Framework',
      slug: 'competitive-analysis-framework',
      category: 'business-strategy',
      prompt_text: `Conduct a comprehensive competitive analysis for [COMPANY] in the [INDUSTRY] industry.

Main competitors to analyze: [COMPETITORS]

Analyze each competitor across:

1. Company Overview
   - Size, funding, market position
   - Key leadership

2. Product/Service Analysis
   - Core offerings
   - Pricing strategy
   - Unique features

3. Market Strategy
   - Target audience
   - Positioning
   - Distribution channels

4. Strengths & Weaknesses
   - Competitive advantages
   - Vulnerabilities

5. Marketing Analysis
   - Brand messaging
   - Content strategy
   - Ad spend (estimated)

6. Customer Perception
   - Reviews analysis
   - NPS indicators

7. Strategic Opportunities
   - Gaps in competitor offerings
   - Underserved segments
   - Differentiation opportunities

Conclude with actionable recommendations.`,
      variables: ['COMPANY', 'INDUSTRY', 'COMPETITORS'],
      usage_notes: 'List 3-5 main competitors. Include direct and indirect competitors.',
      ai_tools: ['chatgpt', 'claude'],
      difficulty: 'advanced',
      is_pro: true,
      tags: ['competitive-analysis', 'strategy', 'market-research', 'business']
    },
    {
      title: 'SWOT Analysis Generator',
      slug: 'swot-analysis-generator',
      category: 'business-strategy',
      prompt_text: `Create a detailed SWOT analysis for:

Company/Project: [SUBJECT]
Industry: [INDUSTRY]
Current situation: [CONTEXT]

Generate a comprehensive SWOT with:

**STRENGTHS** (Internal positive factors)
- List 8-10 specific strengths
- Include evidence/examples

**WEAKNESSES** (Internal negative factors)
- List 8-10 specific weaknesses
- Include impact assessment

**OPPORTUNITIES** (External positive factors)
- List 8-10 market opportunities
- Include timing considerations

**THREATS** (External negative factors)
- List 8-10 potential threats
- Include probability assessment

**TOWS MATRIX** (Strategic actions)
- SO Strategies: Use strengths to capture opportunities
- WO Strategies: Overcome weaknesses using opportunities
- ST Strategies: Use strengths to avoid threats
- WT Strategies: Minimize weaknesses and avoid threats

**Priority Actions** (Top 5 immediate recommendations)`,
      variables: ['SUBJECT', 'INDUSTRY', 'CONTEXT'],
      usage_notes: 'Provide current context for more accurate analysis. Works for products, companies, or projects.',
      ai_tools: ['chatgpt', 'claude', 'gemini'],
      difficulty: 'intermediate',
      is_pro: false,
      tags: ['swot', 'analysis', 'strategy', 'planning']
    },
    {
      title: 'Pitch Deck Creator',
      slug: 'pitch-deck-creator',
      category: 'business-strategy',
      prompt_text: `Create a compelling investor pitch deck for:

Startup: [STARTUP_NAME]
Industry: [INDUSTRY]
Stage: [STAGE]
Ask: [FUNDING_AMOUNT]

Create slide-by-slide content for:

1. **Title Slide** - Company name, tagline, logo placement
2. **Problem** - The pain point you're solving
3. **Solution** - Your unique approach
4. **Market Opportunity** - TAM, SAM, SOM with sources
5. **Product** - Key features and demo highlights
6. **Business Model** - Revenue streams, pricing
7. **Traction** - Metrics, growth, milestones
8. **Competition** - Competitive landscape matrix
9. **Go-to-Market** - Growth strategy
10. **Team** - Key players and relevant experience
11. **Financials** - Projections, unit economics
12. **The Ask** - Funding, use of funds, timeline
13. **Vision** - Where you're headed

Include speaker notes and visual suggestions for each slide.`,
      variables: ['STARTUP_NAME', 'INDUSTRY', 'STAGE', 'FUNDING_AMOUNT'],
      usage_notes: 'Stages: pre-seed, seed, Series A, B, C. Include any traction metrics you have.',
      ai_tools: ['chatgpt', 'claude'],
      difficulty: 'advanced',
      is_pro: true,
      tags: ['pitch-deck', 'investor', 'startup', 'fundraising']
    },
    {
      title: 'OKR Framework Builder',
      slug: 'okr-framework-builder',
      category: 'business-strategy',
      prompt_text: `Create an OKR (Objectives and Key Results) framework for:

Company/Team: [COMPANY/TEAM]
Time period: [QUARTER/YEAR]
Focus areas: [FOCUS_AREAS]
Current metrics: [CURRENT_METRICS]

Generate a complete OKR set:

**Company-Level OKRs** (3-5 objectives)
Each with:
- Objective (qualitative, inspiring)
- 3-5 Key Results (quantitative, measurable)
- Initiatives to achieve each KR

**Department/Team OKRs** (aligned to company)
For: [DEPARTMENTS]
- Department Objective
- Key Results
- Owner assignments

**Individual Contributor OKRs** (sample)
- Personal development
- Team contribution

Include:
- Scoring methodology
- Check-in schedule
- Success criteria
- Risk flags`,
      variables: ['COMPANY/TEAM', 'QUARTER/YEAR', 'FOCUS_AREAS', 'CURRENT_METRICS', 'DEPARTMENTS'],
      usage_notes: 'Include current metrics as baseline. Specify departments for team-level OKRs.',
      ai_tools: ['chatgpt', 'claude'],
      difficulty: 'intermediate',
      is_pro: true,
      tags: ['okr', 'goals', 'strategy', 'management']
    }
  ],

  // ==========================================
  // CODING & DEVELOPMENT
  // ==========================================
  'coding-development': [
    {
      title: 'Code Review Expert',
      slug: 'code-review-expert',
      category: 'coding-development',
      prompt_text: `You are a senior software engineer conducting a thorough code review. Review the following code with a focus on:

Language/Framework: [LANGUAGE]
Code type: [CODE_TYPE]
Context: [CONTEXT]

Code to review:
\`\`\`
[CODE]
\`\`\`

Analyze and provide feedback on:

1. **Code Quality**
   - Readability and clarity
   - Naming conventions
   - Code organization

2. **Logic & Correctness**
   - Bugs or potential issues
   - Edge cases
   - Error handling

3. **Performance**
   - Efficiency concerns
   - Memory usage
   - Time complexity

4. **Security**
   - Vulnerabilities (OWASP)
   - Input validation
   - Authentication/Authorization

5. **Best Practices**
   - Design patterns
   - SOLID principles
   - Framework conventions

6. **Suggestions**
   - Refactored code snippets
   - Alternative approaches
   - Testing recommendations

Rate: Critical | Major | Minor | Suggestion`,
      variables: ['LANGUAGE', 'CODE_TYPE', 'CONTEXT', 'CODE'],
      usage_notes: 'Include context about what the code does. Works best with focused code snippets under 500 lines.',
      ai_tools: ['chatgpt', 'claude', 'copilot'],
      difficulty: 'advanced',
      is_pro: true,
      tags: ['code-review', 'development', 'quality', 'programming']
    },
    {
      title: 'API Design Architect',
      slug: 'api-design-architect',
      category: 'coding-development',
      prompt_text: `Design a RESTful API for:

Project: [PROJECT_NAME]
Purpose: [PURPOSE]
Main resources: [RESOURCES]
Authentication: [AUTH_METHOD]

Create a comprehensive API specification including:

1. **API Overview**
   - Base URL structure
   - Versioning strategy
   - Rate limiting

2. **Authentication & Authorization**
   - Auth flow
   - Token management
   - Permission levels

3. **Endpoints** (for each resource)
   - HTTP method
   - URL pattern
   - Request body (JSON schema)
   - Response body (JSON schema)
   - Status codes
   - Error responses

4. **Data Models**
   - Entity definitions
   - Relationships
   - Validation rules

5. **Common Patterns**
   - Pagination
   - Filtering
   - Sorting
   - Error handling format

6. **OpenAPI/Swagger Spec** (YAML format)

Include example requests and responses.`,
      variables: ['PROJECT_NAME', 'PURPOSE', 'RESOURCES', 'AUTH_METHOD'],
      usage_notes: 'Auth methods: JWT, OAuth2, API Key. List main resources for comprehensive design.',
      ai_tools: ['chatgpt', 'claude'],
      difficulty: 'advanced',
      is_pro: true,
      tags: ['api', 'design', 'backend', 'architecture']
    },
    {
      title: 'Debug Detective',
      slug: 'debug-detective',
      category: 'coding-development',
      prompt_text: `Help me debug this issue:

Language/Framework: [LANGUAGE]
Error message: [ERROR]
Expected behavior: [EXPECTED]
Actual behavior: [ACTUAL]

Relevant code:
\`\`\`
[CODE]
\`\`\`

Stack trace (if available):
\`\`\`
[STACK_TRACE]
\`\`\`

What I've tried: [ATTEMPTS]

Please:
1. Identify the root cause
2. Explain why this error occurs
3. Provide the fix with corrected code
4. Suggest preventive measures
5. Recommend debugging tools/techniques for similar issues`,
      variables: ['LANGUAGE', 'ERROR', 'EXPECTED', 'ACTUAL', 'CODE', 'STACK_TRACE', 'ATTEMPTS'],
      usage_notes: 'Include as much context as possible. Stack traces are very helpful for accurate debugging.',
      ai_tools: ['chatgpt', 'claude', 'copilot'],
      difficulty: 'intermediate',
      is_pro: false,
      tags: ['debugging', 'programming', 'troubleshooting', 'development']
    },
    {
      title: 'Unit Test Generator',
      slug: 'unit-test-generator',
      category: 'coding-development',
      prompt_text: `Generate comprehensive unit tests for:

Language: [LANGUAGE]
Testing framework: [FRAMEWORK]
Code to test:
\`\`\`
[CODE]
\`\`\`

Generate tests covering:

1. **Happy Path Tests**
   - Normal input scenarios
   - Expected outputs

2. **Edge Cases**
   - Boundary conditions
   - Empty/null inputs
   - Maximum/minimum values

3. **Error Cases**
   - Invalid inputs
   - Exception handling
   - Error messages

4. **Integration Points** (if applicable)
   - Mock setup
   - Dependency injection

Include:
- Test descriptions
- Arrange/Act/Assert structure
- Mock implementations
- Test data factories
- Code coverage suggestions`,
      variables: ['LANGUAGE', 'FRAMEWORK', 'CODE'],
      usage_notes: 'Frameworks: Jest, PyTest, JUnit, RSpec, etc. Provide the full function/class to test.',
      ai_tools: ['chatgpt', 'claude', 'copilot'],
      difficulty: 'intermediate',
      is_pro: true,
      tags: ['testing', 'unit-tests', 'tdd', 'development']
    },
    {
      title: 'Database Schema Designer',
      slug: 'database-schema-designer',
      category: 'coding-development',
      prompt_text: `Design a database schema for:

Project: [PROJECT_NAME]
Database type: [DB_TYPE]
Main features: [FEATURES]
Scale expectations: [SCALE]

Create:

1. **Entity Relationship Diagram** (text description)
   - Entities and attributes
   - Relationships and cardinality

2. **Table Definitions**
   - Table name
   - Columns (name, type, constraints)
   - Primary keys
   - Foreign keys
   - Indexes

3. **SQL/DDL Statements**
   - CREATE TABLE statements
   - INDEX creation
   - Constraints

4. **Optimization Considerations**
   - Indexing strategy
   - Normalization level
   - Potential denormalization
   - Partitioning (if applicable)

5. **Migration Strategy**
   - Initial migration
   - Seed data
   - Version control approach`,
      variables: ['PROJECT_NAME', 'DB_TYPE', 'FEATURES', 'SCALE'],
      usage_notes: 'DB types: PostgreSQL, MySQL, MongoDB, SQLite. Include expected data volume for optimization.',
      ai_tools: ['chatgpt', 'claude'],
      difficulty: 'advanced',
      is_pro: true,
      tags: ['database', 'schema', 'sql', 'backend']
    }
  ],

  // ==========================================
  // SEO & MARKETING
  // ==========================================
  'seo-marketing': [
    {
      title: 'SEO Content Brief',
      slug: 'seo-content-brief',
      category: 'seo-marketing',
      prompt_text: `Create a comprehensive SEO content brief for:

Target keyword: [KEYWORD]
Secondary keywords: [SECONDARY_KW]
Content type: [CONTENT_TYPE]
Target audience: [AUDIENCE]

Generate:

1. **Keyword Analysis**
   - Search intent
   - Keyword difficulty estimate
   - Related keywords

2. **Content Structure**
   - Recommended title (H1)
   - Meta description
   - H2/H3 outline
   - Word count target
   - URL slug

3. **Content Requirements**
   - Topics to cover
   - Questions to answer
   - Statistics to include
   - Examples needed

4. **On-Page SEO**
   - Keyword placement strategy
   - Internal linking suggestions
   - Image optimization

5. **Competitor Insights**
   - Top ranking content analysis
   - Content gaps to fill
   - Differentiation opportunities

6. **Technical Requirements**
   - Schema markup type
   - Featured snippet opportunity
   - Mobile optimization notes`,
      variables: ['KEYWORD', 'SECONDARY_KW', 'CONTENT_TYPE', 'AUDIENCE'],
      usage_notes: 'Content types: blog post, landing page, product page, guide. Include search volume if known.',
      ai_tools: ['chatgpt', 'claude'],
      difficulty: 'intermediate',
      is_pro: true,
      tags: ['seo', 'content', 'marketing', 'keywords']
    },
    {
      title: 'Google Ads Copy Generator',
      slug: 'google-ads-copy-generator',
      category: 'seo-marketing',
      prompt_text: `Create Google Ads copy for:

Product/Service: [PRODUCT]
Target audience: [AUDIENCE]
Unique selling points: [USP]
CTA goal: [CTA]
Budget level: [BUDGET]

Generate:

**Responsive Search Ads** (3 sets)
Each with:
- 15 Headlines (30 chars max each)
  - Include keyword in at least 3
  - Include numbers in at least 2
  - Include CTA in at least 2
- 4 Descriptions (90 chars max each)
  - Feature-focused
  - Benefit-focused
  - CTA-focused
  - Social proof

**Ad Extensions**
- Sitelinks (4)
- Callouts (4)
- Structured snippets

**Negative Keywords** (suggested)

**A/B Testing Recommendations**`,
      variables: ['PRODUCT', 'AUDIENCE', 'USP', 'CTA', 'BUDGET'],
      usage_notes: 'Respect character limits strictly. Include your main keyword variations.',
      ai_tools: ['chatgpt', 'claude'],
      difficulty: 'intermediate',
      is_pro: true,
      tags: ['google-ads', 'ppc', 'advertising', 'marketing']
    },
    {
      title: 'Landing Page Copy Framework',
      slug: 'landing-page-copy-framework',
      category: 'seo-marketing',
      prompt_text: `Write high-converting landing page copy for:

Product/Service: [PRODUCT]
Main offer: [OFFER]
Target audience: [AUDIENCE]
Pain points: [PAIN_POINTS]
Key benefits: [BENEFITS]

Create copy for each section:

1. **Above the Fold**
   - Headline (hook)
   - Subheadline
   - CTA button text
   - Hero image description

2. **Problem Section**
   - Problem agitation
   - Empathy statements

3. **Solution Section**
   - How it works
   - Key features (3-5)
   - Benefits of each feature

4. **Social Proof**
   - Testimonial prompts
   - Stats/numbers
   - Trust badges

5. **Objection Handling**
   - FAQ section
   - Guarantee copy

6. **Final CTA**
   - Urgency/scarcity
   - Risk reversal
   - CTA button text

Include persuasion techniques used.`,
      variables: ['PRODUCT', 'OFFER', 'AUDIENCE', 'PAIN_POINTS', 'BENEFITS'],
      usage_notes: 'Focus on benefits over features. Include specific pain points for stronger copy.',
      ai_tools: ['chatgpt', 'claude'],
      difficulty: 'advanced',
      is_pro: true,
      tags: ['landing-page', 'copywriting', 'conversion', 'marketing']
    },
    {
      title: 'Email Marketing Campaign',
      slug: 'email-marketing-campaign',
      category: 'seo-marketing',
      prompt_text: `Design an email marketing campaign for:

Campaign goal: [GOAL]
Product/Offer: [PRODUCT]
Target list: [LIST_DESCRIPTION]
Timeline: [TIMELINE]
Brand voice: [VOICE]

Create:

**Campaign Strategy**
- Email sequence structure
- Timing/cadence
- Segmentation recommendations

**Email Templates** (for each email)
1. Subject line (3 A/B options)
2. Preview text
3. Email body
   - Hook
   - Value proposition
   - CTA
4. PS line
5. Send time recommendation

**Automation Triggers**
- Entry conditions
- Branch conditions
- Exit conditions

**Success Metrics**
- Target open rate
- Target click rate
- Conversion goals

**Follow-up Strategy**
- Non-opener sequence
- Non-converter sequence`,
      variables: ['GOAL', 'PRODUCT', 'LIST_DESCRIPTION', 'TIMELINE', 'VOICE'],
      usage_notes: 'Goals: welcome, nurture, sales, re-engagement, announcement. Specify email count needed.',
      ai_tools: ['chatgpt', 'claude'],
      difficulty: 'advanced',
      is_pro: true,
      tags: ['email', 'marketing', 'automation', 'campaign']
    }
  ],

  // ==========================================
  // PROMPT ENGINEERING
  // ==========================================
  'prompt-engineering': [
    {
      title: 'Prompt Optimizer',
      slug: 'prompt-optimizer',
      category: 'prompt-engineering',
      prompt_text: `You are an expert prompt engineer. Analyze and optimize this prompt:

Original prompt:
"""
[ORIGINAL_PROMPT]
"""

Intended use: [USE_CASE]
Target AI: [AI_TOOL]
Current issues: [ISSUES]

Provide:

1. **Analysis**
   - What works well
   - What's missing
   - Why it may not work as intended

2. **Optimized Prompt**
   - Rewritten version
   - Explanation of changes

3. **Prompt Engineering Techniques Applied**
   - Role assignment
   - Context setting
   - Output formatting
   - Examples/few-shot
   - Chain of thought
   - Constraints

4. **Variations**
   - Alternative approach 1
   - Alternative approach 2

5. **Testing Suggestions**
   - Edge cases to test
   - Quality metrics`,
      variables: ['ORIGINAL_PROMPT', 'USE_CASE', 'AI_TOOL', 'ISSUES'],
      usage_notes: 'Include what issues you\'re experiencing for targeted optimization.',
      ai_tools: ['chatgpt', 'claude'],
      difficulty: 'advanced',
      is_pro: true,
      tags: ['prompt-engineering', 'optimization', 'meta', 'ai']
    },
    {
      title: 'System Prompt Creator',
      slug: 'system-prompt-creator',
      category: 'prompt-engineering',
      prompt_text: `Create a comprehensive system prompt for an AI assistant with the following characteristics:

Purpose: [PURPOSE]
Persona: [PERSONA]
Tone: [TONE]
Capabilities: [CAPABILITIES]
Limitations: [LIMITATIONS]
Target users: [USERS]

Generate a system prompt including:

1. **Role Definition**
   - Who the AI is
   - Expertise areas
   - Background context

2. **Behavioral Guidelines**
   - How to respond
   - Communication style
   - Formatting preferences

3. **Knowledge Boundaries**
   - What it knows
   - What it doesn't know
   - How to handle unknowns

4. **Guardrails**
   - What to avoid
   - Safety considerations
   - Ethical guidelines

5. **Response Framework**
   - Structure templates
   - Examples of ideal responses

6. **Edge Case Handling**
   - Off-topic requests
   - Harmful requests
   - Unclear inputs`,
      variables: ['PURPOSE', 'PERSONA', 'TONE', 'CAPABILITIES', 'LIMITATIONS', 'USERS'],
      usage_notes: 'Be specific about persona and capabilities. Great for building custom GPTs and assistants.',
      ai_tools: ['chatgpt', 'claude'],
      difficulty: 'advanced',
      is_pro: true,
      tags: ['system-prompt', 'assistant', 'chatbot', 'ai']
    },
    {
      title: 'Chain of Thought Template',
      slug: 'chain-of-thought-template',
      category: 'prompt-engineering',
      prompt_text: `Create a chain-of-thought prompt template for:

Task type: [TASK_TYPE]
Complexity: [COMPLEXITY]
Domain: [DOMAIN]

Generate a prompt that forces step-by-step reasoning:

**Prompt Structure:**
1. Task introduction
2. Thinking framework
   - Step 1: [First reasoning step]
   - Step 2: [Second reasoning step]
   - Step N: [Continue as needed]
3. Verification step
4. Final answer format

**Example Problem:**
[EXAMPLE]

**Example Solution with CoT:**
[SOLUTION_WITH_REASONING]

**Template for User:**
[REUSABLE_TEMPLATE]

Include tips for when to use CoT vs direct prompting.`,
      variables: ['TASK_TYPE', 'COMPLEXITY', 'DOMAIN', 'EXAMPLE', 'SOLUTION_WITH_REASONING', 'REUSABLE_TEMPLATE'],
      usage_notes: 'Task types: math, logic, analysis, coding, decision-making. CoT improves accuracy on complex tasks.',
      ai_tools: ['chatgpt', 'claude', 'gemini'],
      difficulty: 'advanced',
      is_pro: true,
      tags: ['chain-of-thought', 'reasoning', 'prompt-engineering', 'ai']
    }
  ],

  // ==========================================
  // DATA ANALYSIS
  // ==========================================
  'data-analysis': [
    {
      title: 'Data Analysis Report',
      slug: 'data-analysis-report',
      category: 'data-analysis',
      prompt_text: `Analyze this data and create a comprehensive report:

Data context: [CONTEXT]
Data:
\`\`\`
[DATA]
\`\`\`

Analysis goals: [GOALS]
Audience: [AUDIENCE]

Provide:

1. **Executive Summary**
   - Key findings (3-5 bullets)
   - Main recommendations

2. **Data Overview**
   - Data structure
   - Quality assessment
   - Limitations

3. **Descriptive Statistics**
   - Central tendencies
   - Distributions
   - Outliers

4. **Analysis**
   - Trends and patterns
   - Correlations
   - Anomalies
   - Segmentation insights

5. **Visualizations** (describe)
   - Recommended charts
   - Key data points to highlight

6. **Insights & Recommendations**
   - Actionable insights
   - Business implications
   - Next steps

7. **Statistical Tests** (if applicable)
   - Methodology
   - Results
   - Confidence levels`,
      variables: ['CONTEXT', 'DATA', 'GOALS', 'AUDIENCE'],
      usage_notes: 'Paste CSV data, tables, or describe the dataset. Specify what questions you want answered.',
      ai_tools: ['chatgpt', 'claude', 'gemini'],
      difficulty: 'advanced',
      is_pro: true,
      tags: ['data-analysis', 'statistics', 'reporting', 'business-intelligence']
    },
    {
      title: 'SQL Query Generator',
      slug: 'sql-query-generator',
      category: 'data-analysis',
      prompt_text: `Generate SQL queries for:

Database type: [DB_TYPE]
Tables available:
\`\`\`
[SCHEMA]
\`\`\`

Query requirements: [REQUIREMENTS]

Generate:

1. **Main Query**
   - SQL code
   - Explanation of logic

2. **Query Breakdown**
   - Step-by-step explanation
   - Why each clause is used

3. **Optimization Tips**
   - Index recommendations
   - Performance considerations

4. **Variations**
   - Alternative approaches
   - Different aggregations

5. **Common Modifications**
   - Add date filter
   - Add grouping
   - Add sorting`,
      variables: ['DB_TYPE', 'SCHEMA', 'REQUIREMENTS'],
      usage_notes: 'Include table schemas with column names and types. Specify any joins needed.',
      ai_tools: ['chatgpt', 'claude'],
      difficulty: 'intermediate',
      is_pro: false,
      tags: ['sql', 'database', 'queries', 'data']
    },
    {
      title: 'Dashboard Requirements',
      slug: 'dashboard-requirements',
      category: 'data-analysis',
      prompt_text: `Create dashboard requirements for:

Business function: [FUNCTION]
Users: [USERS]
Key metrics: [METRICS]
Data sources: [SOURCES]

Generate:

1. **Dashboard Overview**
   - Purpose
   - User stories
   - Success metrics

2. **KPIs & Metrics**
   - Metric definitions
   - Calculation formulas
   - Data sources
   - Refresh frequency

3. **Visualizations**
   - Chart types per metric
   - Layout wireframe (text)
   - Interactivity requirements

4. **Filters & Drill-downs**
   - Global filters
   - Chart-specific filters
   - Drill-down paths

5. **Data Requirements**
   - Required fields
   - Transformations needed
   - Data quality checks

6. **Technical Specs**
   - Tool recommendation
   - Performance requirements
   - Access control`,
      variables: ['FUNCTION', 'USERS', 'METRICS', 'SOURCES'],
      usage_notes: 'Functions: sales, marketing, operations, finance, executive. List primary metrics to track.',
      ai_tools: ['chatgpt', 'claude'],
      difficulty: 'intermediate',
      is_pro: true,
      tags: ['dashboard', 'analytics', 'bi', 'visualization']
    }
  ],

  // ==========================================
  // MUSIC GENERATION
  // ==========================================
  'music-generation': [
    {
      title: 'Song Lyrics Generator',
      slug: 'song-lyrics-generator',
      category: 'music-generation',
      prompt_text: `[GENRE] song about [THEME]

Style: [ARTIST_STYLE]
Mood: [MOOD]
Structure: [STRUCTURE]

Create complete lyrics with:
- Verse 1
- Pre-chorus
- Chorus
- Verse 2
- Pre-chorus
- Chorus
- Bridge
- Final Chorus

Include:
- Rhyme scheme notation
- Syllable count guidance
- Melody suggestions
- Vocal delivery notes`,
      variables: ['GENRE', 'THEME', 'ARTIST_STYLE', 'MOOD', 'STRUCTURE'],
      usage_notes: 'Artist styles: Taylor Swift, Ed Sheeran, Billie Eilish, etc. Great for Suno/Udio.',
      ai_tools: ['chatgpt', 'claude', 'suno', 'udio'],
      difficulty: 'intermediate',
      is_pro: false,
      tags: ['lyrics', 'songwriting', 'music', 'creative']
    },
    {
      title: 'Suno Music Prompt',
      slug: 'suno-music-prompt',
      category: 'music-generation',
      prompt_text: `[GENRE], [SUBGENRE], [TEMPO] BPM, [KEY] key, [MOOD] mood, [INSTRUMENTS], [VOCAL_STYLE] vocals, [ERA] era sound, [PRODUCTION_STYLE] production, [SONG_STRUCTURE]

Lyrics:
[VERSE 1]
[CHORUS]
[VERSE 2]
[BRIDGE]
[OUTRO]

Style tags: [STYLE_TAGS]`,
      variables: ['GENRE', 'SUBGENRE', 'TEMPO', 'KEY', 'MOOD', 'INSTRUMENTS', 'VOCAL_STYLE', 'ERA', 'PRODUCTION_STYLE', 'SONG_STRUCTURE', 'STYLE_TAGS'],
      usage_notes: 'Be specific with BPM and key for consistent results. Include metatags in brackets for Suno.',
      ai_tools: ['suno'],
      difficulty: 'intermediate',
      is_pro: true,
      tags: ['suno', 'music', 'ai-music', 'generation']
    },
    {
      title: 'Jingle Creator',
      slug: 'jingle-creator',
      category: 'music-generation',
      prompt_text: `Create a catchy advertising jingle for:

Brand: [BRAND]
Product: [PRODUCT]
Target audience: [AUDIENCE]
Duration: [DURATION] seconds
Mood: [MOOD]
Key message: [MESSAGE]

Provide:
1. Lyrics (singable, memorable)
2. Musical direction (tempo, style, key)
3. Instrumentation suggestions
4. Vocal style guidance
5. Sound design elements`,
      variables: ['BRAND', 'PRODUCT', 'AUDIENCE', 'DURATION', 'MOOD', 'MESSAGE'],
      usage_notes: 'Keep jingles short (15-30 seconds). Focus on brand name repetition and hook.',
      ai_tools: ['chatgpt', 'claude', 'suno', 'udio'],
      difficulty: 'intermediate',
      is_pro: true,
      tags: ['jingle', 'advertising', 'music', 'commercial']
    }
  ],

  // ==========================================
  // REAL ESTATE
  // ==========================================
  'real-estate': [
    {
      title: 'Property Listing Description',
      slug: 'property-listing-description',
      category: 'real-estate',
      prompt_text: `Write a compelling property listing for:

Property type: [PROPERTY_TYPE]
Location: [LOCATION]
Bedrooms: [BEDS]
Bathrooms: [BATHS]
Square footage: [SQFT]
Price: [PRICE]
Key features: [FEATURES]
Unique selling points: [USP]

Create:
1. Attention-grabbing headline
2. Opening hook
3. Property highlights
4. Room-by-room description
5. Lifestyle benefits
6. Neighborhood highlights
7. Call to action

Tone: [TONE]
Word count: [WORD_COUNT]`,
      variables: ['PROPERTY_TYPE', 'LOCATION', 'BEDS', 'BATHS', 'SQFT', 'PRICE', 'FEATURES', 'USP', 'TONE', 'WORD_COUNT'],
      usage_notes: 'Tones: luxury, family-friendly, investor-focused, first-time buyer. Include all key features.',
      ai_tools: ['chatgpt', 'claude'],
      difficulty: 'beginner',
      is_pro: false,
      tags: ['real-estate', 'listing', 'property', 'marketing']
    },
    {
      title: 'Market Analysis Report',
      slug: 'real-estate-market-analysis',
      category: 'real-estate',
      prompt_text: `Create a real estate market analysis for:

Location: [LOCATION]
Property type: [TYPE]
Time period: [PERIOD]
Purpose: [PURPOSE]

Include:
1. Market Overview
2. Price Trends
3. Inventory Levels
4. Days on Market
5. Buyer/Seller Market Indicator
6. Comparable Sales
7. Rental Analysis (if applicable)
8. Future Projections
9. Investment Recommendations`,
      variables: ['LOCATION', 'TYPE', 'PERIOD', 'PURPOSE'],
      usage_notes: 'Purposes: buying, selling, investing, appraisal. Include any specific data you have.',
      ai_tools: ['chatgpt', 'claude'],
      difficulty: 'advanced',
      is_pro: true,
      tags: ['real-estate', 'analysis', 'market', 'investment']
    }
  ],

  // ==========================================
  // SOCIAL MEDIA
  // ==========================================
  'social-media': [
    {
      title: 'Viral Hook Generator',
      slug: 'viral-hook-generator',
      category: 'social-media',
      prompt_text: `Generate viral hooks for [PLATFORM] about [TOPIC].

Target audience: [AUDIENCE]
Content type: [TYPE]
Tone: [TONE]

Create 20 scroll-stopping hooks using these frameworks:
1. Curiosity gap
2. Controversial take
3. Personal story
4. How-to promise
5. Myth-busting
6. Data/statistic lead
7. Question hook
8. Challenge hook
9. Comparison hook
10. Fear of missing out

Each hook should be under [CHARACTER_LIMIT] characters.`,
      variables: ['PLATFORM', 'TOPIC', 'AUDIENCE', 'TYPE', 'TONE', 'CHARACTER_LIMIT'],
      usage_notes: 'Platforms have different character limits. TikTok: 150, Twitter: 280, LinkedIn: 500 recommended.',
      ai_tools: ['chatgpt', 'claude'],
      difficulty: 'beginner',
      is_pro: false,
      tags: ['social-media', 'hooks', 'viral', 'content']
    },
    {
      title: 'LinkedIn Post Template',
      slug: 'linkedin-post-template',
      category: 'social-media',
      prompt_text: `Write a LinkedIn post about [TOPIC].

Post type: [TYPE]
Goal: [GOAL]
Target audience: [AUDIENCE]
Tone: [TONE]

Follow this structure:
1. Hook (first line visible in feed)
2. Line break
3. Opening story/context
4. Key insight/lesson
5. Practical takeaway
6. CTA or question
7. Hashtags (3-5)

Make it:
- Scannable with line breaks
- Personal and authentic
- Value-driven
- Engagement-optimized`,
      variables: ['TOPIC', 'TYPE', 'GOAL', 'AUDIENCE', 'TONE'],
      usage_notes: 'Types: story, tips, hot take, announcement, question. Keep under 1300 characters for full visibility.',
      ai_tools: ['chatgpt', 'claude'],
      difficulty: 'beginner',
      is_pro: false,
      tags: ['linkedin', 'social-media', 'professional', 'content']
    },
    {
      title: 'Twitter Thread Creator',
      slug: 'twitter-thread-creator',
      category: 'social-media',
      prompt_text: `Create a Twitter/X thread about [TOPIC].

Thread length: [LENGTH] tweets
Hook style: [HOOK_STYLE]
CTA: [CTA]

Structure:
Tweet 1: Killer hook with thread indicator (🧵)
Tweets 2-[N-1]: Value points (one per tweet)
Final tweet: Summary + CTA

Requirements:
- Each tweet under 280 characters
- Use numbers for listicles
- Include relevant emojis
- Make each tweet standalone valuable
- End tweets to encourage reading next`,
      variables: ['TOPIC', 'LENGTH', 'HOOK_STYLE', 'CTA'],
      usage_notes: 'Optimal thread length: 7-15 tweets. Hook styles: curiosity, controversy, promise, story.',
      ai_tools: ['chatgpt', 'claude'],
      difficulty: 'beginner',
      is_pro: false,
      tags: ['twitter', 'thread', 'social-media', 'content']
    }
  ],

  // ==========================================
  // PRODUCTIVITY
  // ==========================================
  'productivity': [
    {
      title: 'Weekly Planning Template',
      slug: 'weekly-planning-template',
      category: 'productivity',
      prompt_text: `Help me plan my week:

Role: [ROLE]
Main projects: [PROJECTS]
Recurring commitments: [COMMITMENTS]
This week's priorities: [PRIORITIES]
Available hours: [HOURS]

Create:
1. Weekly objectives (3-5)
2. Daily task breakdown
3. Time blocks for deep work
4. Buffer time for unexpected
5. Weekly review questions

Consider:
- Energy levels throughout week
- Meeting-free focus time
- Personal commitments
- Rest and recovery`,
      variables: ['ROLE', 'PROJECTS', 'COMMITMENTS', 'PRIORITIES', 'HOURS'],
      usage_notes: 'Include any fixed meetings or commitments. Works best with specific projects listed.',
      ai_tools: ['chatgpt', 'claude'],
      difficulty: 'beginner',
      is_pro: false,
      tags: ['productivity', 'planning', 'time-management', 'organization']
    },
    {
      title: 'Decision Matrix Builder',
      slug: 'decision-matrix-builder',
      category: 'productivity',
      prompt_text: `Help me make this decision:

Decision: [DECISION]
Options: [OPTIONS]
Priorities: [PRIORITIES]
Constraints: [CONSTRAINTS]
Timeline: [TIMELINE]

Create:
1. Decision criteria (weighted)
2. Options evaluation matrix
3. Pros/cons for each option
4. Risk assessment
5. Gut check questions
6. Recommendation with reasoning
7. Implementation steps for chosen option`,
      variables: ['DECISION', 'OPTIONS', 'PRIORITIES', 'CONSTRAINTS', 'TIMELINE'],
      usage_notes: 'List all viable options. Include any deal-breakers as constraints.',
      ai_tools: ['chatgpt', 'claude'],
      difficulty: 'intermediate',
      is_pro: false,
      tags: ['decision-making', 'analysis', 'productivity', 'strategy']
    },
    {
      title: 'Learning Plan Generator',
      slug: 'learning-plan-generator',
      category: 'productivity',
      prompt_text: `Create a learning plan for:

Skill: [SKILL]
Current level: [LEVEL]
Goal: [GOAL]
Timeline: [TIMELINE]
Available time: [HOURS_PER_WEEK]

Generate:
1. Learning roadmap with milestones
2. Resource recommendations
3. Practice exercises
4. Weekly study schedule
5. Progress checkpoints
6. Project ideas for application
7. Common pitfalls to avoid`,
      variables: ['SKILL', 'LEVEL', 'GOAL', 'TIMELINE', 'HOURS_PER_WEEK'],
      usage_notes: 'Levels: beginner, intermediate, advanced. Be specific about your goal outcome.',
      ai_tools: ['chatgpt', 'claude'],
      difficulty: 'beginner',
      is_pro: false,
      tags: ['learning', 'education', 'self-improvement', 'productivity']
    }
  ],

  // ==========================================
  // CREATIVE WRITING
  // ==========================================
  'creative-writing': [
    {
      title: 'Character Development',
      slug: 'character-development',
      category: 'creative-writing',
      prompt_text: `Create a detailed character profile for:

Basic concept: [CONCEPT]
Story genre: [GENRE]
Role in story: [ROLE]

Develop:
1. **Demographics**
   - Name, age, appearance
   - Background, occupation

2. **Psychology**
   - Personality type
   - Core beliefs
   - Fears and desires
   - Fatal flaw

3. **Backstory**
   - Formative experiences
   - Key relationships
   - Secrets

4. **Voice**
   - Speech patterns
   - Vocabulary level
   - Catchphrases

5. **Arc**
   - Starting point
   - Transformation
   - End state

6. **Sample Dialogue**
   - 3-5 characteristic exchanges`,
      variables: ['CONCEPT', 'GENRE', 'ROLE'],
      usage_notes: 'Roles: protagonist, antagonist, mentor, sidekick, love interest. Include genre for appropriate traits.',
      ai_tools: ['chatgpt', 'claude'],
      difficulty: 'intermediate',
      is_pro: false,
      tags: ['character', 'creative-writing', 'fiction', 'storytelling']
    },
    {
      title: 'World Building Guide',
      slug: 'world-building-guide',
      category: 'creative-writing',
      prompt_text: `Build a fictional world for:

Genre: [GENRE]
Setting: [SETTING]
Central conflict: [CONFLICT]
Tone: [TONE]

Create:
1. **Geography**
   - Locations and landscapes
   - Climate and resources

2. **Society**
   - Cultures and customs
   - Social structures
   - Economy

3. **History**
   - Major events
   - Legends and myths

4. **Magic/Technology**
   - Systems and rules
   - Limitations

5. **Politics**
   - Power structures
   - Factions and tensions

6. **Daily Life**
   - Food, clothing, shelter
   - Entertainment, religion`,
      variables: ['GENRE', 'SETTING', 'CONFLICT', 'TONE'],
      usage_notes: 'Be specific about time period or technology level. Great for novels, games, and screenplays.',
      ai_tools: ['chatgpt', 'claude'],
      difficulty: 'advanced',
      is_pro: true,
      tags: ['world-building', 'fantasy', 'creative-writing', 'fiction']
    }
  ],

  // ==========================================
  // AI INFLUENCER
  // ==========================================
  'ai-influencer': [
    {
      title: 'AI Influencer Character Design',
      slug: 'ai-influencer-character-design',
      category: 'ai-influencer',
      prompt_text: `Design an AI influencer persona:

Niche: [NICHE]
Target audience: [AUDIENCE]
Platform focus: [PLATFORMS]
Aesthetic: [AESTHETIC]

Create:
1. **Identity**
   - Name and backstory
   - Age, nationality, personality
   - Unique traits

2. **Visual Consistency**
   - Appearance description
   - Signature style elements
   - Color palette
   - Reference images prompt

3. **Content Strategy**
   - Content pillars (3-5)
   - Posting schedule
   - Engagement style
   - Brand voice

4. **Monetization**
   - Revenue streams
   - Brand partnership criteria
   - Products/services

5. **Technical**
   - Image generation prompts
   - Consistency techniques
   - Platform optimization`,
      variables: ['NICHE', 'AUDIENCE', 'PLATFORMS', 'AESTHETIC'],
      usage_notes: 'Aesthetics: minimal, glamorous, sporty, artistic, futuristic. Great for building virtual influencers.',
      ai_tools: ['chatgpt', 'claude', 'midjourney', 'stable-diffusion'],
      difficulty: 'advanced',
      is_pro: true,
      tags: ['ai-influencer', 'virtual', 'social-media', 'content']
    },
    {
      title: 'Consistent Character Prompt',
      slug: 'consistent-character-prompt',
      category: 'ai-influencer',
      prompt_text: `Create consistent AI character images:

Character: [CHARACTER_NAME]
Base description: [BASE_DESCRIPTION]
Scene: [SCENE]
Pose: [POSE]
Outfit: [OUTFIT]

Core prompt elements (never change):
- [FACE_DESCRIPTION]
- [HAIR_DESCRIPTION]
- [BODY_TYPE]
- [AGE_APPEARANCE]

Scene-specific elements:
- [SETTING]
- [LIGHTING]
- [CAMERA_ANGLE]
- [EXPRESSION]

Seed: [SEED_NUMBER]
Parameters: --ar [RATIO] --v 6 --style raw`,
      variables: ['CHARACTER_NAME', 'BASE_DESCRIPTION', 'SCENE', 'POSE', 'OUTFIT', 'FACE_DESCRIPTION', 'HAIR_DESCRIPTION', 'BODY_TYPE', 'AGE_APPEARANCE', 'SETTING', 'LIGHTING', 'CAMERA_ANGLE', 'EXPRESSION', 'SEED_NUMBER', 'RATIO'],
      usage_notes: 'Use --seed to maintain consistency. Keep core elements identical across all images.',
      ai_tools: ['midjourney', 'stable-diffusion', 'leonardo-ai'],
      difficulty: 'advanced',
      is_pro: true,
      tags: ['consistency', 'ai-influencer', 'character', 'image']
    }
  ],

  // ==========================================
  // CONTENT CREATION
  // ==========================================
  'content-creation': [
    {
      title: 'Content Repurposing System',
      slug: 'content-repurposing-system',
      category: 'content-creation',
      prompt_text: `Repurpose this content across platforms:

Original content:
"""
[CONTENT]
"""

Original format: [FORMAT]
Target platforms: [PLATFORMS]

For each platform create:
1. Optimized version
2. Platform-specific hooks
3. Hashtags/keywords
4. Visual suggestions
5. Best posting time
6. Engagement prompts

Maintain core message while adapting for:
- Character limits
- Audience expectations
- Platform culture
- Content formats`,
      variables: ['CONTENT', 'FORMAT', 'PLATFORMS'],
      usage_notes: 'Formats: blog post, video script, podcast, webinar. List all target platforms.',
      ai_tools: ['chatgpt', 'claude'],
      difficulty: 'intermediate',
      is_pro: true,
      tags: ['repurposing', 'content', 'social-media', 'marketing']
    },
    {
      title: 'Script to Video Storyboard',
      slug: 'script-to-storyboard',
      category: 'content-creation',
      prompt_text: `Create a video storyboard from this script:

Script:
"""
[SCRIPT]
"""

Video type: [TYPE]
Duration: [DURATION]
Style: [STYLE]

Generate:
1. Scene-by-scene breakdown
2. Visual descriptions per scene
3. Camera movements
4. On-screen text
5. B-roll suggestions
6. Music/sound cues
7. Transition effects
8. Thumbnail concept`,
      variables: ['SCRIPT', 'TYPE', 'DURATION', 'STYLE'],
      usage_notes: 'Types: YouTube, TikTok, ad, explainer. Include any brand guidelines.',
      ai_tools: ['chatgpt', 'claude'],
      difficulty: 'intermediate',
      is_pro: true,
      tags: ['storyboard', 'video', 'content', 'production']
    }
  ]
};

// =====================================================
// GENERATE ADDITIONAL PROMPTS ALGORITHMICALLY
// =====================================================

function generateVariations(basePrompts: GeneratedPrompt[], count: number): GeneratedPrompt[] {
  const variations: GeneratedPrompt[] = [];
  const tones = ['professional', 'casual', 'persuasive', 'educational', 'entertaining'];
  const audiences = ['beginners', 'experts', 'businesses', 'creators', 'marketers'];
  const industries = ['tech', 'healthcare', 'finance', 'education', 'ecommerce', 'saas', 'agency'];

  for (const prompt of basePrompts) {
    // Generate tone variations
    for (const tone of tones.slice(0, 2)) {
      const variation: GeneratedPrompt = {
        ...prompt,
        title: `${prompt.title} (${tone} tone)`,
        slug: `${prompt.slug}-${tone}`,
        prompt_text: prompt.prompt_text.replace('[TONE]', tone),
        tags: [...prompt.tags, tone]
      };
      variations.push(variation);
      if (variations.length >= count) return variations;
    }

    // Generate audience variations
    for (const audience of audiences.slice(0, 2)) {
      const variation: GeneratedPrompt = {
        ...prompt,
        title: `${prompt.title} for ${audience}`,
        slug: `${prompt.slug}-for-${audience}`,
        prompt_text: prompt.prompt_text.replace('[AUDIENCE]', audience),
        tags: [...prompt.tags, audience]
      };
      variations.push(variation);
      if (variations.length >= count) return variations;
    }
  }

  return variations;
}

// =====================================================
// MAIN GENERATION FUNCTION
// =====================================================

async function generatePromptsLibrary() {
  console.log('Generating AI Prompts Library...\n');

  const allPrompts: GeneratedPrompt[] = [];
  let promptId = 1;

  // Collect all template prompts
  for (const [category, prompts] of Object.entries(promptTemplates)) {
    console.log(`Processing category: ${category} (${prompts.length} base prompts)`);
    for (const prompt of prompts) {
      allPrompts.push({
        ...prompt,
        title: prompt.title,
        slug: `${prompt.slug}-${promptId}`,
      });
      promptId++;
    }
  }

  console.log(`\nBase prompts: ${allPrompts.length}`);

  // Generate variations to reach 1000+
  const targetCount = 1000;
  const neededVariations = targetCount - allPrompts.length;

  if (neededVariations > 0) {
    console.log(`Generating ${neededVariations} variations...`);
    const variations = generateVariations(allPrompts, neededVariations);
    allPrompts.push(...variations);
  }

  console.log(`\nTotal prompts generated: ${allPrompts.length}`);

  // Category distribution
  const categoryCount: Record<string, number> = {};
  for (const prompt of allPrompts) {
    categoryCount[prompt.category] = (categoryCount[prompt.category] || 0) + 1;
  }
  console.log('\nCategory distribution:');
  for (const [cat, count] of Object.entries(categoryCount)) {
    console.log(`  ${cat}: ${count}`);
  }

  // Save to JSON file
  const outputPath = './data/prompts-library.json';
  const dataDir = './data';

  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, JSON.stringify(allPrompts, null, 2));
  console.log(`\nSaved to ${outputPath}`);

  // Generate SQL seed file
  const sqlPath = './data/seed-prompts.sql';
  let sql = `-- AI Prompts Library Seed Data
-- Generated: ${new Date().toISOString()}
-- Total prompts: ${allPrompts.length}

`;

  for (const prompt of allPrompts) {
    const escapedText = prompt.prompt_text.replace(/'/g, "''");
    const escapedTitle = prompt.title.replace(/'/g, "''");
    const escapedNotes = prompt.usage_notes.replace(/'/g, "''");

    sql += `INSERT INTO prompts (title, slug, category, prompt_text, usage_notes, ai_tools, difficulty, is_pro, tags)
VALUES (
  '${escapedTitle}',
  '${prompt.slug}',
  '${prompt.category}',
  '${escapedText}',
  '${escapedNotes}',
  ARRAY[${prompt.ai_tools.map(t => `'${t}'`).join(', ')}],
  '${prompt.difficulty}',
  ${prompt.is_pro},
  ARRAY[${prompt.tags.map(t => `'${t}'`).join(', ')}]
);\n\n`;
  }

  fs.writeFileSync(sqlPath, sql);
  console.log(`Saved SQL to ${sqlPath}`);

  return allPrompts;
}

// Run generation
generatePromptsLibrary().then(prompts => {
  console.log(`\n✓ Successfully generated ${prompts.length} prompts!`);
}).catch(err => {
  console.error('Error generating prompts:', err);
});
