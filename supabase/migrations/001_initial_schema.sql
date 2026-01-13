-- AI Prompts Platform - Initial Database Schema
-- Run this against your Cognabase/Supabase instance

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users/profiles table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  subscription_tier TEXT DEFAULT 'free' CHECK (subscription_tier IN ('free', 'pro', 'lifetime')),
  subscription_status TEXT DEFAULT 'inactive',
  stripe_customer_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Prompts table
CREATE TABLE IF NOT EXISTS public.prompts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL,
  subcategory TEXT,
  prompt_text TEXT NOT NULL,
  variables JSONB DEFAULT '[]',
  usage_notes TEXT,
  ai_tools TEXT[] DEFAULT '{}',
  source_url TEXT,
  source_article TEXT,
  difficulty TEXT DEFAULT 'beginner' CHECK (difficulty IN ('beginner', 'intermediate', 'advanced')),
  is_pro BOOLEAN DEFAULT false,
  is_featured BOOLEAN DEFAULT false,
  tags TEXT[] DEFAULT '{}',
  view_count INTEGER DEFAULT 0,
  copy_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- User favorites
CREATE TABLE IF NOT EXISTS public.favorites (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  prompt_id UUID REFERENCES public.prompts(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, prompt_id)
);

-- User collections
CREATE TABLE IF NOT EXISTS public.collections (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  is_public BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Collection prompts (many-to-many)
CREATE TABLE IF NOT EXISTS public.collection_prompts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  collection_id UUID REFERENCES public.collections(id) ON DELETE CASCADE NOT NULL,
  prompt_id UUID REFERENCES public.prompts(id) ON DELETE CASCADE NOT NULL,
  added_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(collection_id, prompt_id)
);

-- User activity/history
CREATE TABLE IF NOT EXISTS public.user_activity (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  prompt_id UUID REFERENCES public.prompts(id) ON DELETE CASCADE NOT NULL,
  action_type TEXT NOT NULL CHECK (action_type IN ('view', 'copy', 'favorite', 'unfavorite')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Categories table
CREATE TABLE IF NOT EXISTS public.categories (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  icon TEXT,
  prompt_count INTEGER DEFAULT 0,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security Policies
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.prompts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.collection_prompts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_activity ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

-- Profiles: Users can read all, update own
DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON public.profiles;
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- Prompts: Everyone can read
DROP POLICY IF EXISTS "Prompts are viewable by everyone" ON public.prompts;
CREATE POLICY "Prompts are viewable by everyone" ON public.prompts FOR SELECT USING (true);

-- Allow service role to insert/update prompts
DROP POLICY IF EXISTS "Service role can manage prompts" ON public.prompts;
CREATE POLICY "Service role can manage prompts" ON public.prompts FOR ALL USING (true) WITH CHECK (true);

-- Favorites: Users can manage their own
DROP POLICY IF EXISTS "Users can view own favorites" ON public.favorites;
CREATE POLICY "Users can view own favorites" ON public.favorites FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can create own favorites" ON public.favorites;
CREATE POLICY "Users can create own favorites" ON public.favorites FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can delete own favorites" ON public.favorites;
CREATE POLICY "Users can delete own favorites" ON public.favorites FOR DELETE USING (auth.uid() = user_id);

-- Collections: Users can manage their own, view public
DROP POLICY IF EXISTS "Users can view own and public collections" ON public.collections;
CREATE POLICY "Users can view own and public collections" ON public.collections
  FOR SELECT USING (auth.uid() = user_id OR is_public = true);

DROP POLICY IF EXISTS "Users can create own collections" ON public.collections;
CREATE POLICY "Users can create own collections" ON public.collections
  FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own collections" ON public.collections;
CREATE POLICY "Users can update own collections" ON public.collections
  FOR UPDATE USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can delete own collections" ON public.collections;
CREATE POLICY "Users can delete own collections" ON public.collections
  FOR DELETE USING (auth.uid() = user_id);

-- Categories: Everyone can read
DROP POLICY IF EXISTS "Categories are viewable by everyone" ON public.categories;
CREATE POLICY "Categories are viewable by everyone" ON public.categories FOR SELECT USING (true);

-- Functions
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, avatar_url)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'avatar_url'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user creation (drop first if exists)
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update prompt counts on category
CREATE OR REPLACE FUNCTION public.update_category_counts()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE public.categories SET prompt_count = prompt_count + 1 WHERE slug = NEW.category;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE public.categories SET prompt_count = prompt_count - 1 WHERE slug = OLD.category;
  ELSIF TG_OP = 'UPDATE' AND OLD.category != NEW.category THEN
    UPDATE public.categories SET prompt_count = prompt_count - 1 WHERE slug = OLD.category;
    UPDATE public.categories SET prompt_count = prompt_count + 1 WHERE slug = NEW.category;
  END IF;
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS update_category_counts_trigger ON public.prompts;
CREATE TRIGGER update_category_counts_trigger
  AFTER INSERT OR UPDATE OR DELETE ON public.prompts
  FOR EACH ROW EXECUTE FUNCTION public.update_category_counts();

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_prompts_category ON public.prompts(category);
CREATE INDEX IF NOT EXISTS idx_prompts_slug ON public.prompts(slug);
CREATE INDEX IF NOT EXISTS idx_prompts_ai_tools ON public.prompts USING GIN(ai_tools);
CREATE INDEX IF NOT EXISTS idx_prompts_tags ON public.prompts USING GIN(tags);
CREATE INDEX IF NOT EXISTS idx_prompts_is_featured ON public.prompts(is_featured);
CREATE INDEX IF NOT EXISTS idx_favorites_user_id ON public.favorites(user_id);
CREATE INDEX IF NOT EXISTS idx_favorites_prompt_id ON public.favorites(prompt_id);
CREATE INDEX IF NOT EXISTS idx_user_activity_user_id ON public.user_activity(user_id);
CREATE INDEX IF NOT EXISTS idx_user_activity_created_at ON public.user_activity(created_at DESC);

-- Seed initial categories
INSERT INTO public.categories (name, slug, description, icon, display_order) VALUES
  ('Text Generation', 'text-generation', 'Prompts for generating text content with ChatGPT, Claude, etc.', 'MessageSquare', 1),
  ('Image Generation', 'image-generation', 'Prompts for creating AI images with Midjourney, DALL-E, etc.', 'Image', 2),
  ('Video Generation', 'video-generation', 'Prompts for AI video creation with Sora, Runway, Pika', 'Video', 3),
  ('Music Generation', 'music-generation', 'Prompts for AI music with Suno, Udio', 'Music', 4),
  ('SEO & Marketing', 'seo-marketing', 'Prompts for SEO, marketing, and growth', 'TrendingUp', 5),
  ('Business Strategy', 'business-strategy', 'Prompts for business planning and strategy', 'Briefcase', 6),
  ('Coding & Development', 'coding-development', 'Prompts for programming and development', 'Code', 7),
  ('Content Creation', 'content-creation', 'Prompts for blogs, articles, and content', 'FileText', 8),
  ('Prompt Engineering', 'prompt-engineering', 'Meta-prompts and prompt improvement', 'Zap', 9),
  ('Real Estate', 'real-estate', 'Prompts for real estate professionals', 'Home', 10),
  ('Social Media', 'social-media', 'Prompts for social media content', 'Share2', 11),
  ('Productivity', 'productivity', 'Prompts for workflow and productivity', 'Clock', 12),
  ('AI Influencer', 'ai-influencer', 'Prompts for creating AI influencers', 'Users', 13),
  ('Creative Writing', 'creative-writing', 'Prompts for fiction and creative content', 'Pen', 14),
  ('Data Analysis', 'data-analysis', 'Prompts for data analysis and insights', 'BarChart', 15)
ON CONFLICT (slug) DO NOTHING;
