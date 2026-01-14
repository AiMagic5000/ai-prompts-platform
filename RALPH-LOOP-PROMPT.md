# AI Prompts Library - Ralph Loop Build Instructions

## Project Overview
- **Domain**: https://prompts.alwaysencrypted.com/
- **Project Path**: /mnt/c/Users/flowc/Documents/AI prompts platform
- **Architecture Provider**: startmybrand.us (display in footer)
- **Support**: 888-534-4145 | support@startmybusiness.us
- **Tech Stack**: Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, Clerk Auth, Gumroad, Cognabase

---

## CRITICAL REQUIREMENTS

### Product Offer Structure
```
MAIN OFFER: $39 (was $97 - Save $58 / 60% OFF)
├── 500 Expert-Crafted AI Prompts (PAID)
├── ChatGPT, Claude, Gemini compatible
├── Midjourney & DALL-E image prompts
├── Sora & Runway video prompts
├── SEO & marketing prompts
├── Coding & development prompts
├── n8n workflow prompts
├── Instant digital download
├── Lifetime updates (free)
├── Private Discord community access
└── 30-day money-back guarantee

BONUS (If purchased within 2 HOURS):
├── +500 EXTRA AI Prompts FREE
├── Prompt Engineering Masterclass ($197 value)
├── AI Tool Comparison Guide ($47 value)
└── Weekly New Prompts Drop ($97/yr value)

TOTAL VALUE: $438+ for just $39
```

### Dashboard Structure
```
/dashboard
├── /prompts (Main 500 paid prompts)
├── /bonus-prompts (500 bonus prompts - unlocked if bought within 2hrs)
├── /masterclass (Prompt Engineering Masterclass with YouTube embeds)
├── /ai-tools-guide (AI Tool Comparison Guide)
├── /resources (Links to startmybusiness.us & startmybrand.us)
├── /settings (User profile & preferences)
└── /support (Help & contact info)
```

---

## PROMPT COLLECTION REQUIREMENTS (1000 TOTAL)

### MAIN COLLECTION (500 Prompts) - Categories:
1. **ChatGPT Prompts** (75)
   - Business & entrepreneurship
   - Content writing & copywriting
   - Customer service
   - Product descriptions
   - Legal & compliance

2. **Claude Prompts** (75)
   - Technical documentation
   - Code review & debugging
   - Research & analysis
   - Creative writing
   - Strategic planning

3. **Gemini Prompts** (50)
   - Multi-modal tasks
   - Data analysis
   - Summarization
   - Translation
   - Educational content

4. **Image Generation - Midjourney/DALL-E** (75)
   - Product photography
   - Social media graphics
   - Logo concepts
   - Marketing materials
   - Website imagery

5. **Video Generation - Sora/Runway** (50)
   - Explainer videos
   - Product demos
   - Social media reels
   - Ad creatives
   - Tutorial content

6. **SEO & Marketing Prompts** (75)
   - Meta descriptions
   - Blog outlines
   - Email campaigns
   - Social media content
   - Ad copy variations

7. **Coding & Development** (50)
   - API development
   - Database queries
   - React components
   - Python scripts
   - DevOps automation

8. **n8n Workflow Prompts** (50)
   - Automation templates
   - Integration workflows
   - Data processing
   - Notification systems
   - CRM integrations

### BONUS COLLECTION (500 Prompts) - Categories:
1. **Advanced ChatGPT** (100)
2. **Advanced Claude** (100)
3. **Premium Image Prompts** (100)
4. **Business Automation** (100)
5. **Marketing Mastery** (100)

---

## PROMPT SOURCES TO SCRAPE

### Primary Sources:
1. **n8n Workflows**: https://n8n.io/workflows/
   - Scrape workflow descriptions and convert to prompts
   - Focus on automation, integration, data processing

2. **GitHub Repositories** (2025-2026 best prompts):
   - f/awesome-chatgpt-prompts
   - promptslab/Awesome-Prompt-Engineering
   - dair-ai/Prompt-Engineering-Guide
   - anthropics/prompt-library
   - microsoft/promptbase

3. **MetricsMule Reference**: Study their prompt organization and UI

### Scraping Requirements:
- Extract prompt title, description, category
- Clean and format for consistency
- Remove duplicates
- Add proper categorization
- Include usage examples where available

---

## DESIGN SPECIFICATIONS

### Visual Design (NOT Vibe-Coded - Professional Quality)
```
BRAND COLORS:
- Primary: #6366F1 (Indigo)
- Secondary: #8B5CF6 (Purple)
- Accent: #F59E0B (Amber)
- Background: #0F0F23 (Dark Navy)
- Surface: #1A1A2E (Card Dark)
- Text Primary: #FFFFFF
- Text Secondary: #A1A1AA

TYPOGRAPHY:
- Headings: Inter (700, 800)
- Body: Inter (400, 500)
- Code: JetBrains Mono

LOGO:
- Create a professional logo with lightning bolt + prompt symbol
- Text: "PromptVault" or "AI Prompts Library"
- Icon: Stylized brain + lightning bolt combination
- SVG format for scalability
```

### Required High-Quality Images (Unsplash/Pexels):
1. Hero background: AI/tech themed gradient mesh or abstract neural network
2. Testimonial avatars: Professional headshots (diverse)
3. Feature icons: Custom SVG icons for each feature
4. Dashboard screenshots: Actual product screenshots
5. Category illustrations: Modern 3D or isometric icons

### Animations (Framer Motion):
- Hero text fade-in with stagger
- Feature cards slide-up on scroll
- Pricing card hover effects
- Countdown timer pulse animation
- Button hover scale effects
- Page transitions
- Dashboard sidebar slide
- Prompt card flip/expand

---

## PAGE STRUCTURE

### Homepage (/)
```
STICKY HEADER:
├── Logo (left)
├── Navigation: Features | Pricing | Testimonials | FAQ
├── 2-HOUR COUNTDOWN TIMER (amber badge, pulsing)
│   └── "🔥 Bonus expires in: HH:MM:SS - Get 500 EXTRA prompts FREE!"
└── CTA Button: "Get Instant Access - $39"

HERO SECTION:
├── Masked background image (gradient overlay)
├── Badge: "🚀 2026's #1 AI Prompts Library"
├── H1: "500+ Expert AI Prompts to 10x Your Productivity"
├── Subheading: "ChatGPT, Claude, Midjourney, Sora & More"
├── Price: $97 (crossed) → $39 (60% OFF)
├── CTA: "Get Instant Access Now" → Gumroad checkout
├── Trust badges: 30-day guarantee, Instant access, Lifetime updates
└── Social proof: "Join 2,500+ professionals using our prompts"

FEATURES SECTION:
├── What's Included (grid of 8 feature cards with icons)
├── Each card: Icon, Title, Description, Bullet points
└── Animations on scroll

SAMPLE PROMPTS SECTION:
├── Interactive prompt browser preview
├── Category tabs: ChatGPT | Claude | Image | Video | SEO | Code
├── 3-4 sample prompts per category
└── "See all 500+ prompts" CTA

TESTIMONIALS SECTION:
├── Heading: "What Our Customers Say"
├── Grid of 6 testimonial cards
├── Each card: Avatar image, Name, Role, Company, Quote, Stars
└── Real-looking testimonials (diverse industries)

BUSINESS CTA BANNER #1:
├── "Need a Complete Business Funnel?"
├── "We build 45-point compliant business structures with integrated payment processing"
├── CTA: "Learn More" → startmybusiness.us

PRICING SECTION:
├── Single pricing card (featured)
├── Original price: $97 (crossed out)
├── Sale price: $39
├── All included features list
├── Bonus section (with countdown)
├── Gumroad "Buy Now" button
└── Money-back guarantee badge

FAQ SECTION:
├── Accordion with 8-10 questions
├── Include: What's included, How to access, Refund policy, etc.
└── Business services FAQ

BUSINESS CTA BANNER #2:
├── "Already Have a Business? Need Funding?"
├── "We help established businesses access growth capital"
├── CTA: "Explore Options" → startmybusiness.us

FOOTER:
├── Company info: AlwaysEncrypted
├── Links: Support | Privacy | Terms | Contact
├── Support: 888-534-4145 | support@startmybusiness.us
├── Discount note: "AI Prompts buyers get 10% off all services (except tradelines)"
└── Architecture credit: "Architecture by startmybrand.us"
```

### Dashboard (/dashboard)
```
SIDEBAR:
├── Logo
├── Navigation:
│   ├── 📚 All Prompts (500)
│   ├── 🎁 Bonus Prompts (500) - Badge: "FREE BONUS"
│   ├── 🎓 Masterclass
│   ├── 📊 AI Tools Guide
│   ├── 📁 My Collections
│   ├── ⭐ Favorites
│   ├── 🔗 Resources
│   └── ⚙️ Settings
└── User profile dropdown

MAIN CONTENT AREA:
├── Search bar (global prompt search)
├── Filter sidebar (categories, AI model, use case)
├── Prompt grid (cards with copy button)
└── Pagination

DASHBOARD HOME:
├── Welcome message with user name
├── Quick stats: Prompts available, Favorites, Collections
├── Featured prompts carousel
├── Category quick links
├── Business service CTA card
└── Resources links
```

### Masterclass Page (/dashboard/masterclass)
```
STRUCTURE:
├── Page header: "Prompt Engineering Masterclass"
├── Progress tracker (modules completed)
├── Module list:
│   ├── Module 1: Introduction to Prompt Engineering
│   ├── Module 2: ChatGPT Mastery
│   ├── Module 3: Claude Advanced Techniques
│   ├── Module 4: Image Generation (Midjourney/DALL-E)
│   ├── Module 5: Video Generation (Sora/Runway)
│   ├── Module 6: SEO & Marketing Prompts
│   ├── Module 7: Coding & Development
│   └── Module 8: Automation & n8n
├── Each module:
│   ├── Title and description
│   ├── Embedded YouTube video player (watch without leaving)
│   ├── Key takeaways
│   ├── Related prompts link
│   └── Mark as complete button
└── Certificate of completion (future)

YOUTUBE VIDEOS TO EMBED (Research and curate):
- Search: "prompt engineering tutorial 2025"
- Search: "chatgpt prompts masterclass"
- Search: "midjourney prompt guide"
- Search: "claude ai tutorial"
- Prefer videos with 100k+ views, high ratings
```

### AI Tools Guide (/dashboard/ai-tools-guide)
```
STRUCTURE:
├── Page header: "AI Tool Comparison Guide"
├── Filter: All | Text | Image | Video | Code
├── Comparison table:
│   ├── Tool name & logo
│   ├── Category
│   ├── Pricing (Free/Paid)
│   ├── Best for
│   ├── Pros & cons
│   └── Our rating (1-5 stars)
├── Tools to include:
│   ├── ChatGPT (OpenAI)
│   ├── Claude (Anthropic)
│   ├── Gemini (Google)
│   ├── Midjourney
│   ├── DALL-E 3
│   ├── Stable Diffusion
│   ├── Sora
│   ├── Runway
│   ├── GitHub Copilot
│   ├── Cursor
│   ├── n8n
│   └── Make (Integromat)
└── Detailed tool reviews (expandable)
```

### Resources Page (/dashboard/resources)
```
STRUCTURE:
├── Our Services (startmybusiness.us)
│   ├── Business Formation
│   ├── Compliance Setup
│   ├── Payment Processing
│   ├── Funnel Building
│   └── Business Funding
├── Our Portfolio (startmybrand.us)
│   ├── Website examples
│   ├── Brand design
│   └── Development services
├── 10% Discount Badge (for AI Prompts customers)
├── Contact info
└── Book a consultation CTA
```

---

## AUTHENTICATION (CLERK.COM)

### Clerk Configuration:
```typescript
// Environment Variables
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_xxx (from Clerk dashboard)
CLERK_SECRET_KEY=sk_live_xxx
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

### Auth Flow:
1. User clicks "Get Instant Access" → Gumroad checkout
2. After payment → Redirect to /sign-up with Clerk
3. User creates account → Access dashboard
4. Protected routes: /dashboard/*
5. Public routes: /, /sign-in, /sign-up, /pricing

---

## PAYMENT (GUMROAD)

### Gumroad Product Setup:
```
Product Name: AI Prompts Library - 500+ Expert Prompts
Price: $39
Original Price: $97 (show crossed out)
URL: Create via Gumroad API

Product Description:
- 500 Expert-Crafted AI Prompts
- ChatGPT, Claude, Gemini compatible
- Midjourney & DALL-E image prompts
- Sora & Runway video prompts
- SEO & marketing prompts
- Coding & development prompts
- Instant digital download
- Lifetime updates (free)
- Private Discord community
- 30-day money-back guarantee

BONUS (displayed separately):
- +500 EXTRA prompts (2-hour limit)
- Prompt Engineering Masterclass
- AI Tool Comparison Guide
- Weekly New Prompts Drop
```

### Gumroad API Integration:
```typescript
// Create product link via API
// On successful payment webhook:
// 1. Create user in Clerk (if not exists)
// 2. Store purchase in database
// 3. Check if within 2-hour bonus window
// 4. Grant appropriate access (with or without bonus)
// 5. Send confirmation email
```

---

## COUNTDOWN TIMER LOGIC

### 2-Hour Bonus Window:
```typescript
// On first page visit:
// 1. Check localStorage for existing timer
// 2. If no timer, set 2-hour countdown from NOW
// 3. Store start time in localStorage
// 4. Display countdown in sticky header
// 5. On purchase:
//    - If within 2 hours: Grant full access (500 + 500 bonus)
//    - If expired: Grant base access (500 prompts only)

// Timer Display:
// "🔥 Bonus expires in: 01:45:32 - Get 500 EXTRA prompts FREE!"
// When expired: "⏰ Bonus period ended - Get 500 prompts for $39"
```

---

## DATABASE SCHEMA (COGNABASE/SUPABASE)

```sql
-- Users (synced with Clerk)
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  clerk_id TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  has_purchased BOOLEAN DEFAULT FALSE,
  has_bonus BOOLEAN DEFAULT FALSE,
  purchase_date TIMESTAMPTZ,
  bonus_expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Prompts (1000 total)
CREATE TABLE prompts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  prompt_text TEXT NOT NULL,
  category TEXT NOT NULL,
  subcategory TEXT,
  ai_model TEXT NOT NULL, -- chatgpt, claude, gemini, midjourney, dalle, sora, runway, n8n
  use_case TEXT,
  is_bonus BOOLEAN DEFAULT FALSE, -- TRUE for bonus collection
  tags TEXT[],
  example_output TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Categories
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  icon TEXT,
  prompt_count INTEGER DEFAULT 0
);

-- User Favorites
CREATE TABLE favorites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  prompt_id UUID REFERENCES prompts(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, prompt_id)
);

-- User Collections
CREATE TABLE collections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Collection Prompts (many-to-many)
CREATE TABLE collection_prompts (
  collection_id UUID REFERENCES collections(id),
  prompt_id UUID REFERENCES prompts(id),
  PRIMARY KEY (collection_id, prompt_id)
);

-- Masterclass Progress
CREATE TABLE masterclass_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  module_id TEXT NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMPTZ,
  UNIQUE(user_id, module_id)
);
```

---

## TESTIMONIALS (6 Required)

```typescript
const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow Inc",
    avatar: "/testimonials/sarah.jpg", // Unsplash professional headshot
    quote: "These prompts have completely transformed our content workflow. We're producing 3x more content in half the time. The SEO prompts alone have boosted our organic traffic by 40%.",
    rating: 5
  },
  {
    name: "Marcus Johnson",
    role: "Startup Founder",
    company: "LaunchPad.io",
    avatar: "/testimonials/marcus.jpg",
    quote: "As a solopreneur, this prompt library is like having a team of AI experts. The Midjourney prompts have saved me thousands in design costs.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Content Strategist",
    company: "BrandVoice Agency",
    avatar: "/testimonials/emily.jpg",
    quote: "The Claude prompts are incredibly well-crafted. Our client deliverables have improved dramatically, and the n8n automation prompts have streamlined our entire operation.",
    rating: 5
  },
  {
    name: "David Kim",
    role: "Full-Stack Developer",
    company: "CodeCraft Studios",
    avatar: "/testimonials/david.jpg",
    quote: "The coding prompts are a goldmine. From debugging to documentation, these prompts have made me significantly more productive. Worth every penny.",
    rating: 5
  },
  {
    name: "Jessica Taylor",
    role: "E-commerce Owner",
    company: "Bloom Boutique",
    avatar: "/testimonials/jessica.jpg",
    quote: "The product description prompts and image generation prompts have transformed my store. My conversion rate increased 25% after implementing these.",
    rating: 5
  },
  {
    name: "Michael Brown",
    role: "Video Producer",
    company: "Pixel Motion",
    avatar: "/testimonials/michael.jpg",
    quote: "The Sora and Runway prompts are next-level. I'm creating professional video content that used to require a full production team.",
    rating: 5
  }
];
```

---

## BUSINESS CTA MESSAGES

### CTA #1 (After Testimonials):
```
🏗️ Need a Complete Business Funnel Built?

We specialize in 45-point compliant business structures with:
✓ Legal entity formation
✓ Credit card processing integration
✓ Compliant sales funnels
✓ Automated payment systems

10% OFF for AI Prompts customers (except tradelines)

[Get Started] → startmybusiness.us
Call: 888-534-4145
```

### CTA #2 (Before Footer):
```
💰 Already Have an Established Business?

We help business owners access:
✓ Business lines of credit
✓ Equipment financing
✓ Working capital
✓ Revenue-based funding

[Explore Funding Options] → startmybusiness.us
Email: support@startmybusiness.us
```

### Dashboard CTA (Sidebar or Card):
```
🚀 Scale Your Business

Our team can help you build:
• Complete sales funnels
• Automated systems
• Payment processing

AI Prompts customers get 10% off!

[Book Consultation] → startmybusiness.us
```

---

## SEO & LLMO REQUIREMENTS

### Meta Tags:
```html
<title>AI Prompts Library - 500+ Expert ChatGPT, Claude, Midjourney Prompts | $39</title>
<meta name="description" content="Get 500+ expert-crafted AI prompts for ChatGPT, Claude, Gemini, Midjourney, Sora & more. 60% OFF - Only $39. Instant access, lifetime updates, 30-day guarantee.">
<meta name="keywords" content="AI prompts, ChatGPT prompts, Claude prompts, Midjourney prompts, DALL-E prompts, Sora prompts, prompt engineering, AI automation">
```

### robots.txt:
```
User-agent: *
Allow: /

# AI Crawlers Welcome
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: https://prompts.alwaysencrypted.com/sitemap.xml
```

### llms.txt:
```
# AI Prompts Library
> 500+ expert-crafted AI prompts for ChatGPT, Claude, Midjourney, Sora & more

## About
Premium AI prompt library for professionals and businesses. Categories include: ChatGPT, Claude, Gemini, Midjourney, DALL-E, Sora, Runway, SEO, Marketing, Coding, n8n workflows.

## Pricing
$39 one-time (was $97) - 60% OFF

## Features
- 500 expert-crafted prompts
- Lifetime updates
- Private Discord community
- 30-day money-back guarantee
- Bonus: +500 prompts if purchased within 2 hours

## Contact
Support: support@startmybusiness.us
Phone: 888-534-4145

## Architecture
Website architecture by startmybrand.us
```

---

## FILE STRUCTURE

```
src/
├── app/
│   ├── (auth)/
│   │   ├── sign-in/[[...sign-in]]/page.tsx
│   │   └── sign-up/[[...sign-up]]/page.tsx
│   ├── (dashboard)/
│   │   ├── layout.tsx
│   │   └── dashboard/
│   │       ├── page.tsx (Dashboard home)
│   │       ├── prompts/page.tsx (Main 500 prompts)
│   │       ├── bonus-prompts/page.tsx (Bonus 500 prompts)
│   │       ├── masterclass/page.tsx
│   │       ├── ai-tools-guide/page.tsx
│   │       ├── resources/page.tsx
│   │       ├── collections/page.tsx
│   │       ├── favorites/page.tsx
│   │       └── settings/page.tsx
│   ├── (marketing)/
│   │   └── layout.tsx
│   ├── api/
│   │   ├── webhooks/
│   │   │   ├── clerk/route.ts
│   │   │   └── gumroad/route.ts
│   │   └── prompts/route.ts
│   ├── page.tsx (Homepage)
│   ├── layout.tsx
│   ├── globals.css
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── ui/ (shadcn components)
│   ├── layout/
│   │   ├── header.tsx (with countdown timer)
│   │   ├── footer.tsx (with startmybrand.us credit)
│   │   ├── mobile-nav.tsx
│   │   └── dashboard-sidebar.tsx
│   ├── marketing/
│   │   ├── hero.tsx
│   │   ├── features.tsx
│   │   ├── sample-prompts.tsx
│   │   ├── testimonials.tsx
│   │   ├── pricing.tsx
│   │   ├── faq.tsx
│   │   ├── business-cta.tsx
│   │   └── countdown-timer.tsx
│   ├── dashboard/
│   │   ├── prompt-card.tsx
│   │   ├── prompt-grid.tsx
│   │   ├── search-bar.tsx
│   │   ├── filter-sidebar.tsx
│   │   ├── category-tabs.tsx
│   │   ├── masterclass-module.tsx
│   │   ├── youtube-embed.tsx
│   │   └── tool-comparison-table.tsx
│   └── shared/
│       ├── logo.tsx (professional SVG logo)
│       └── loading.tsx
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   └── server.ts
│   ├── clerk/
│   │   └── config.ts
│   ├── gumroad/
│   │   └── client.ts
│   ├── utils.ts
│   ├── constants.ts
│   └── prompts-data.ts (1000 prompts JSON)
├── hooks/
│   ├── use-countdown.ts
│   ├── use-prompts.ts
│   └── use-purchase-status.ts
├── types/
│   └── index.ts
└── data/
    ├── prompts-main.json (500 prompts)
    ├── prompts-bonus.json (500 prompts)
    ├── masterclass-modules.json
    └── ai-tools.json

public/
├── images/
│   ├── logo.svg
│   ├── hero-bg.jpg
│   ├── testimonials/
│   └── icons/
├── llms.txt
└── favicon.ico
```

---

## DEPLOYMENT

### Coolify Configuration:
- Build command: `npm run build`
- Start command: `npm run start`
- Port: 3000
- Environment variables from .env.local

### Required Environment Variables:
```env
# App
NEXT_PUBLIC_APP_URL=https://prompts.alwaysencrypted.com
NEXT_PUBLIC_APP_NAME=AI Prompts Library

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_xxx
CLERK_SECRET_KEY=sk_live_xxx
CLERK_WEBHOOK_SECRET=whsec_xxx

# Supabase (Cognabase)
NEXT_PUBLIC_SUPABASE_URL=https://db.cognabase.com
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
SUPABASE_SERVICE_ROLE_KEY=xxx

# Gumroad
GUMROAD_ACCESS_TOKEN=xxx
GUMROAD_PRODUCT_ID=xxx
GUMROAD_WEBHOOK_SECRET=xxx

# Analytics
NEXT_PUBLIC_UMAMI_WEBSITE_ID=xxx
```

---

## SUCCESS CRITERIA

- [ ] Professional logo created (not vibe-coded)
- [ ] Mobile-first responsive design on all viewports
- [ ] Framer Motion animations implemented
- [ ] 500 main prompts loaded and searchable
- [ ] 500 bonus prompts loaded (conditional access)
- [ ] 2-hour countdown timer functional
- [ ] Clerk authentication working
- [ ] Gumroad payment integration complete
- [ ] Dashboard with all sections functional
- [ ] Masterclass with embedded YouTube videos
- [ ] AI Tools comparison guide complete
- [ ] Resources page with business CTAs
- [ ] Testimonials with real images
- [ ] Business CTA messages throughout
- [ ] Footer with startmybrand.us credit
- [ ] SEO/LLMO implementation complete
- [ ] Production deployment successful
- [ ] Zero TypeScript errors
- [ ] Lighthouse score >= 90

---

## COMPLETION PROMISE

Output "COMPLETE" when:
1. All 1000 prompts are loaded in database
2. Website is fully functional with all features
3. Authentication and payments work
4. Deployed to production at https://prompts.alwaysencrypted.com
5. All success criteria checked
