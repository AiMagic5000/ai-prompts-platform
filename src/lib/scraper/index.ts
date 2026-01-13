import * as cheerio from 'cheerio';
import { ScrapedPrompt, PromptCategory, AITool, Variable } from '@/types/prompt';
import { slugify } from '@/lib/utils';

interface ScrapingConfig {
  baseUrl: string;
  maxConcurrent: number;
  delayMs: number;
  retryAttempts: number;
}

const config: ScrapingConfig = {
  baseUrl: 'https://metricsmule.com',
  maxConcurrent: 3,
  delayMs: 1000,
  retryAttempts: 3,
};

// Target URLs to scrape
const targetUrls = [
  '/blog/',
  '/ai/awesome-chatgpt-prompts/',
  '/seo-google/chatgpt-seo-prompts/',
  '/chatgpt-prompt-genius/',
  '/ai/prompt-engineering-playbook-2026/',
  '/ai/ai-filmmaking-prompts/',
  '/ai/best-nano-banana-prompts/',
  '/ai/unique-ai-image-prompts/',
  '/ai/realistic-ai-image-prompts/',
  '/ai/sora-2-prompts/',
  '/ai/ai-music-prompts/',
  '/uncategorized/real-estate-prompts/',
  '/ai/content-creation-prompts/',
  '/ai/ai-agent/',
  '/ai/chatgpt-tokens/',
  '/ai/ai-video-prompt-generators/',
  '/ai/ai-influencer-prompts/',
  '/ai/ai-movie-prompts/',
  '/ai/free-prompts/',
  '/ai/prompt-generators-for-ai-images/',
  '/ai/best-way-to-prompt-for-chatgpt/',
  '/ai/chatgpt-ai-video-prompts/',
  '/ai/chatgpt-prompting-ai-images/',
  '/ai/metricsmule-youtube/',
  '/ai/create-ai-influencers/',
  '/uncategorized/call-chatgpt/',
  '/ai/claude-prompt-improver/',
  '/ai/ai-video-prompts/',
  '/ai/pdf-in-chatgpt/',
  '/ai/prompt-engineers-for-chatgpt/',
  '/ai/become-a-prompt-engineer/',
  '/canva/canva-dream-lab/',
  '/ai/create-a-prompt-generator/',
  '/ai/freepik-mystic/',
  '/ai/prompt-engineer-ai-images/',
  '/ai/leonardo-ai-finetuned-models/',
  '/apps/appsumo-black-friday/',
  '/apps/prompt-tips/',
  '/apps/loupedeck-review/',
  '/apps/claid-ai/',
  '/apps/leonardo-ai-image-guidance/',
  '/apps/chatgpt-prompts-for-investing/',
  '/apps/rendernet/',
  '/apps/akool/',
  '/apps/promeai/',
  '/canva/canva-pro-free-link/',
  '/canva/best-canva-apps/',
  '/canva/canva-magic-eraser/',
  '/canva/canva-magic-edit/',
  '/apps/canva-ai-magic-write/',
];

async function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWithRetry(url: string, attempts: number = config.retryAttempts): Promise<string | null> {
  for (let i = 0; i < attempts; i++) {
    try {
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
        },
      });

      if (response.ok) {
        return await response.text();
      }
      console.error(`Attempt ${i + 1}: HTTP ${response.status} for ${url}`);
    } catch (error) {
      console.error(`Attempt ${i + 1}: Error fetching ${url}:`, error);
    }
    await delay(config.delayMs * (i + 1));
  }
  return null;
}

function detectCategory(text: string, url: string): PromptCategory {
  const lowText = text.toLowerCase();
  const lowUrl = url.toLowerCase();

  if (lowUrl.includes('image') || lowText.includes('midjourney') || lowText.includes('dall-e') || lowText.includes('stable diffusion')) {
    return 'image-generation';
  }
  if (lowUrl.includes('video') || lowText.includes('sora') || lowText.includes('runway') || lowText.includes('pika')) {
    return 'video-generation';
  }
  if (lowUrl.includes('music') || lowText.includes('suno') || lowText.includes('udio')) {
    return 'music-generation';
  }
  if (lowUrl.includes('seo') || lowText.includes('marketing') || lowText.includes('seo')) {
    return 'seo-marketing';
  }
  if (lowUrl.includes('real-estate') || lowText.includes('real estate')) {
    return 'real-estate';
  }
  if (lowText.includes('code') || lowText.includes('programming') || lowText.includes('developer')) {
    return 'coding-development';
  }
  if (lowUrl.includes('influencer') || lowText.includes('influencer')) {
    return 'ai-influencer';
  }
  if (lowUrl.includes('prompt-engineer') || lowText.includes('prompt engineering')) {
    return 'prompt-engineering';
  }
  if (lowText.includes('content') || lowText.includes('writing') || lowText.includes('blog')) {
    return 'content-creation';
  }
  if (lowText.includes('business') || lowText.includes('strategy')) {
    return 'business-strategy';
  }
  if (lowText.includes('social media') || lowText.includes('instagram') || lowText.includes('twitter')) {
    return 'social-media';
  }
  if (lowText.includes('productivity') || lowText.includes('workflow')) {
    return 'productivity';
  }
  if (lowText.includes('creative') || lowText.includes('story') || lowText.includes('fiction')) {
    return 'creative-writing';
  }
  if (lowText.includes('data') || lowText.includes('analysis') || lowText.includes('analytics')) {
    return 'data-analysis';
  }

  return 'text-generation';
}

function detectAITools(text: string): AITool[] {
  const tools: AITool[] = [];
  const lowText = text.toLowerCase();

  const toolPatterns: [AITool, string[]][] = [
    ['chatgpt', ['chatgpt', 'chat gpt', 'gpt-4', 'gpt-3', 'openai']],
    ['claude', ['claude', 'anthropic']],
    ['gemini', ['gemini', 'google ai', 'bard']],
    ['midjourney', ['midjourney', 'mid journey']],
    ['leonardo-ai', ['leonardo', 'leonardo.ai']],
    ['dall-e', ['dall-e', 'dalle', 'dall e']],
    ['stable-diffusion', ['stable diffusion', 'stablediffusion']],
    ['flux', ['flux']],
    ['freepik', ['freepik', 'mystic']],
    ['sora', ['sora']],
    ['runway', ['runway']],
    ['kling-ai', ['kling']],
    ['pika', ['pika']],
    ['suno', ['suno']],
    ['udio', ['udio']],
    ['canva', ['canva']],
    ['copilot', ['copilot', 'github copilot']],
  ];

  for (const [tool, patterns] of toolPatterns) {
    if (patterns.some(p => lowText.includes(p))) {
      tools.push(tool);
    }
  }

  if (tools.length === 0) {
    tools.push('chatgpt'); // Default
  }

  return tools;
}

function extractVariables(promptText: string): Variable[] {
  const variables: Variable[] = [];
  const bracketRegex = /\[([^\]]+)\]/g;
  const matches = promptText.matchAll(bracketRegex);

  const seen = new Set<string>();
  for (const match of matches) {
    const name = match[1];
    if (!seen.has(name.toLowerCase())) {
      seen.add(name.toLowerCase());
      variables.push({
        name: name,
        placeholder: `[${name}]`,
        description: `Enter your ${name.toLowerCase()}`,
        examples: [],
        required: true,
      });
    }
  }

  return variables;
}

function extractPromptsFromHtml(html: string, sourceUrl: string): ScrapedPrompt[] {
  const $ = cheerio.load(html);
  const prompts: ScrapedPrompt[] = [];

  const articleTitle = $('h1').first().text().trim() || $('title').text().trim();

  // Find all code blocks, pre elements, and blockquotes that look like prompts
  const promptSelectors = [
    'pre code',
    'pre',
    'blockquote',
    '.prompt',
    '.code-block',
    '[data-prompt]',
  ];

  let promptIndex = 0;

  for (const selector of promptSelectors) {
    $(selector).each((_, element) => {
      let text = $(element).text().trim();

      // Filter out non-prompt content
      if (text.length < 50) return;
      if (text.length > 5000) return;
      if (!text.includes(' ')) return;

      // Check if it looks like a prompt (has instruction-like language or variables)
      const promptIndicators = [
        /\[.*\]/,
        /^(you are|act as|i want you to|write|create|generate|analyze|explain)/i,
        /^(as a|pretend|imagine|help me|give me)/i,
        /please|could you|would you/i,
      ];

      const looksLikePrompt = promptIndicators.some(regex => regex.test(text));
      if (!looksLikePrompt) return;

      promptIndex++;
      const category = detectCategory(text, sourceUrl);
      const aiTools = detectAITools(text);
      const variables = extractVariables(text);

      // Create a title from the prompt if none from context
      const prevHeading = $(element).prevAll('h2, h3, h4').first().text().trim();
      const title = prevHeading || `${articleTitle} - Prompt ${promptIndex}`;

      const prompt: ScrapedPrompt = {
        id: `prompt-${Date.now()}-${promptIndex}-${Math.random().toString(36).substr(2, 9)}`,
        title: title.slice(0, 100),
        slug: slugify(title.slice(0, 80)),
        category,
        subcategory: '',
        promptText: text,
        variables,
        usageNotes: '',
        aiTools,
        sourceUrl,
        sourceArticle: articleTitle,
        dateScraped: new Date(),
        difficulty: variables.length > 3 ? 'advanced' : variables.length > 1 ? 'intermediate' : 'beginner',
        isPro: variables.length > 2,
        tags: [...aiTools, category],
        relatedPrompts: [],
      };

      prompts.push(prompt);
    });
  }

  // Also look for numbered lists that might be prompts
  $('ol li, ul li').each((_, element) => {
    const text = $(element).text().trim();

    if (text.length < 100) return;
    if (text.length > 3000) return;

    const promptIndicators = [
      /\[.*\]/,
      /^(you are|act as|i want you to|write|create|generate)/i,
    ];

    if (!promptIndicators.some(regex => regex.test(text))) return;

    promptIndex++;
    const category = detectCategory(text, sourceUrl);
    const aiTools = detectAITools(text);
    const variables = extractVariables(text);

    const title = `${articleTitle} - Prompt ${promptIndex}`;

    const prompt: ScrapedPrompt = {
      id: `prompt-${Date.now()}-${promptIndex}-${Math.random().toString(36).substr(2, 9)}`,
      title: title.slice(0, 100),
      slug: slugify(title.slice(0, 80)),
      category,
      subcategory: '',
      promptText: text,
      variables,
      usageNotes: '',
      aiTools,
      sourceUrl,
      sourceArticle: articleTitle,
      dateScraped: new Date(),
      difficulty: 'intermediate',
      isPro: false,
      tags: [...aiTools, category],
      relatedPrompts: [],
    };

    prompts.push(prompt);
  });

  return prompts;
}

export async function scrapeMetricsMule(): Promise<ScrapedPrompt[]> {
  console.log('Starting MetricsMule scrape...');
  const allPrompts: ScrapedPrompt[] = [];
  const seenPromptTexts = new Set<string>();

  for (const urlPath of targetUrls) {
    const fullUrl = config.baseUrl + urlPath;
    console.log(`Scraping: ${fullUrl}`);

    const html = await fetchWithRetry(fullUrl);
    if (!html) {
      console.error(`Failed to fetch: ${fullUrl}`);
      continue;
    }

    const prompts = extractPromptsFromHtml(html, fullUrl);

    // Dedupe by prompt text
    for (const prompt of prompts) {
      const normalized = prompt.promptText.toLowerCase().trim().slice(0, 200);
      if (!seenPromptTexts.has(normalized)) {
        seenPromptTexts.add(normalized);
        allPrompts.push(prompt);
      }
    }

    console.log(`Found ${prompts.length} prompts from ${urlPath}`);
    await delay(config.delayMs);
  }

  // Also scrape paginated blog pages
  for (let page = 2; page <= 20; page++) {
    const pageUrl = `${config.baseUrl}/blog/page/${page}/`;
    console.log(`Scraping: ${pageUrl}`);

    const html = await fetchWithRetry(pageUrl);
    if (!html) {
      console.log(`No more pages at page ${page}`);
      break;
    }

    // Extract article links
    const $ = cheerio.load(html);
    const articleLinks: string[] = [];

    $('a[href*="/ai/"], a[href*="/apps/"], a[href*="/canva/"]').each((_, el) => {
      const href = $(el).attr('href');
      if (href && !articleLinks.includes(href)) {
        articleLinks.push(href);
      }
    });

    for (const link of articleLinks.slice(0, 10)) {
      const articleHtml = await fetchWithRetry(link);
      if (!articleHtml) continue;

      const prompts = extractPromptsFromHtml(articleHtml, link);
      for (const prompt of prompts) {
        const normalized = prompt.promptText.toLowerCase().trim().slice(0, 200);
        if (!seenPromptTexts.has(normalized)) {
          seenPromptTexts.add(normalized);
          allPrompts.push(prompt);
        }
      }

      await delay(config.delayMs);
    }
  }

  console.log(`Total unique prompts scraped: ${allPrompts.length}`);
  return allPrompts;
}

export { config, targetUrls };
