import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/marketing/hero'
import { FeaturesGrid } from '@/components/marketing/features-grid'
import { SamplePrompts } from '@/components/marketing/sample-prompts'
import { PricingCard } from '@/components/marketing/pricing-card'
import { FAQAccordion } from '@/components/marketing/faq-accordion'
import { CTASection } from '@/components/marketing/cta-section'
import { generateHomePageSchema, generateFAQSchema } from '@/lib/seo'

const faqs = [
  {
    question: 'What AI tools do these prompts work with?',
    answer: 'Our prompts work with all major AI tools including ChatGPT (GPT-4, GPT-4o), Claude (Claude 3.5), Gemini, Copilot, Midjourney, DALL-E 3, Stable Diffusion, Leonardo AI, Sora, Runway, Pika, Suno, Udio, and many more.',
  },
  {
    question: 'How do I get the prompts after purchase?',
    answer: 'Immediately after purchase, you will get instant access to our member dashboard where all 1000+ prompts are organized by category. You can browse, search, filter, and copy any prompt with one click.',
  },
  {
    question: 'What if the prompts do not work for me?',
    answer: 'We offer a 30-day money-back guarantee. If you are not satisfied with the prompts for any reason, just email us and we will refund you in full. No questions asked.',
  },
  {
    question: 'Do I get updates when new prompts are added?',
    answer: 'Yes! Your one-time payment includes lifetime access to all future updates. We add new prompts weekly and continuously improve existing ones as AI tools evolve.',
  },
]

export default function Home() {
  const schemas = generateHomePageSchema()
  const faqSchema = generateFAQSchema(faqs)

  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <Header />
      <main>
        <Hero />
        <FeaturesGrid />
        <SamplePrompts />
        <PricingCard />
        <FAQAccordion />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
