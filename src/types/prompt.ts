export interface ScrapedPrompt {
  id: string;
  title: string;
  slug: string;
  category: PromptCategory;
  subcategory: string;
  promptText: string;
  variables: Variable[];
  usageNotes: string;
  aiTools: AITool[];
  sourceUrl: string;
  sourceArticle: string;
  dateScraped: Date;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  isPro: boolean;
  tags: string[];
  relatedPrompts: string[];
}

export interface Variable {
  name: string;
  placeholder: string;
  description: string;
  examples: string[];
  required: boolean;
}

export type PromptCategory =
  | 'text-generation'
  | 'image-generation'
  | 'video-generation'
  | 'music-generation'
  | 'seo-marketing'
  | 'business-strategy'
  | 'coding-development'
  | 'content-creation'
  | 'prompt-engineering'
  | 'real-estate'
  | 'social-media'
  | 'productivity'
  | 'ai-influencer'
  | 'creative-writing'
  | 'data-analysis';

export type AITool =
  | 'chatgpt'
  | 'claude'
  | 'gemini'
  | 'midjourney'
  | 'leonardo-ai'
  | 'dall-e'
  | 'stable-diffusion'
  | 'flux'
  | 'freepik'
  | 'sora'
  | 'runway'
  | 'kling-ai'
  | 'pika'
  | 'suno'
  | 'udio'
  | 'canva'
  | 'copilot';

export interface PromptFilters {
  category?: PromptCategory;
  aiTool?: AITool;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  isPro?: boolean;
  search?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  perPage: number;
  hasMore: boolean;
}
