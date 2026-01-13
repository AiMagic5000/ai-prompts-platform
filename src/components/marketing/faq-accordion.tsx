'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What AI tools do these prompts work with?',
    answer: 'Our prompts work with all major AI tools including ChatGPT (GPT-4, GPT-4o), Claude (Claude 3.5), Gemini, Copilot, Midjourney, DALL-E 3, Stable Diffusion, Leonardo AI, Sora, Runway, Pika, Suno, Udio, and many more. Each prompt is labeled with compatible tools.',
  },
  {
    question: 'How do I get the prompts after purchase?',
    answer: 'Immediately after purchase, you\'ll get instant access to our member dashboard where all 1000+ prompts are organized by category. You can browse, search, filter, and copy any prompt with one click. No waiting, no download required.',
  },
  {
    question: 'What if the prompts don\'t work for me?',
    answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied with the prompts for any reason, just email us and we\'ll refund you in full. No questions asked. We\'re confident you\'ll love them though!',
  },
  {
    question: 'Do I get updates when new prompts are added?',
    answer: 'Yes! Your one-time payment includes lifetime access to all future updates. We add new prompts weekly and continuously improve existing ones as AI tools evolve. You\'ll automatically have access to everything.',
  },
  {
    question: 'Can I use these prompts for my business/clients?',
    answer: 'Absolutely! You can use these prompts for personal projects, client work, or your business. The only restriction is you cannot resell or redistribute the prompts themselves.',
  },
  {
    question: 'Are the prompts beginner-friendly?',
    answer: 'Yes! Each prompt includes clear instructions and variable placeholders (like [YOUR TOPIC]) that make customization easy. We also include usage notes explaining when and how to use each prompt effectively.',
  },
  {
    question: 'How is this different from free prompts online?',
    answer: 'Free prompts are usually untested, outdated, and generic. Our prompts are professionally crafted by prompt engineers, tested across multiple AI models, regularly updated, and organized for quick access. The difference in output quality is significant.',
  },
  {
    question: 'Is this a subscription?',
    answer: 'No! This is a one-time payment of $39 for lifetime access. No recurring charges, no hidden fees, no upsells. Pay once and you\'re set forever.',
  },
]

export function FAQAccordion() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Got questions? We&apos;ve got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex items-center justify-between w-full px-6 py-4 text-left font-medium text-gray-900 hover:text-indigo-600 transition-colors group">
                    {faq.question}
                    <ChevronDown className="h-5 w-5 text-gray-500 group-data-[state=open]:rotate-180 transition-transform" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  )
}
