'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'What AI tools do these prompts work with?',
    answer: 'Our prompts work with all major AI tools including ChatGPT (GPT-4, GPT-4o, GPT-4.5), Claude (Claude 3.5, Claude 4), Gemini, Copilot, Midjourney, DALL-E 3, Stable Diffusion, Leonardo AI, Sora, Runway, Pika, and many more. Each prompt is labeled with compatible tools.',
  },
  {
    question: 'How do I get the prompts after purchase?',
    answer: 'Immediately after purchase, you\'ll create an account and get instant access to our member dashboard where all 500+ prompts are organized by category. You can browse, search, filter, and copy any prompt with one click. No waiting, no download required.',
  },
  {
    question: 'What if the prompts don\'t work for me?',
    answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied with the prompts for any reason, just email us at support@startmybusiness.us and we\'ll refund you in full. No questions asked. We\'re confident you\'ll love them though!',
  },
  {
    question: 'Do I get updates when new prompts are added?',
    answer: 'Yes! Your one-time payment includes lifetime access to all future updates. We add new prompts weekly and continuously improve existing ones as AI tools evolve. You\'ll automatically have access to everything.',
  },
  {
    question: 'What about the bonus prompts?',
    answer: 'If you purchase within the 2-hour bonus window shown on the page, you\'ll receive an additional 500 prompts absolutely FREE. That\'s 1000 prompts total! The bonus also includes our Prompt Engineering Masterclass and AI Tools Guide.',
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
    question: 'Is this a subscription?',
    answer: 'No! This is a one-time payment of $39 for lifetime access. No recurring charges, no hidden fees, no upsells. Pay once and you\'re set forever.',
  },
  {
    question: 'How is this different from free prompts online?',
    answer: 'Free prompts are usually untested, outdated, and generic. Our prompts are professionally crafted by prompt engineers, tested across multiple AI models, regularly updated, and organized for quick access. The difference in output quality is significant.',
  },
  {
    question: 'Do you offer any discounts on your other services?',
    answer: 'Yes! The Prompts Library customers receive 10% off all services at startmybusiness.us (except tradelines). This includes business formation, payment processing setup, funnel building, and more.',
  },
]

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-indigo-500/50 hover:shadow-md transition-all"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-6 py-4 text-left"
      >
        <span className="font-medium text-slate-900 pr-4">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-5 w-5 text-slate-400 shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 pb-4 text-slate-600">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQAccordion() {
  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Got questions? We&apos;ve got answers.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 mb-4">
            Still have questions?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <a
              href="mailto:support@startmybusiness.us"
              className="text-indigo-600 hover:text-indigo-500 transition-colors"
            >
              support@startmybusiness.us
            </a>
            <span className="hidden sm:block text-slate-300">|</span>
            <a
              href="tel:888-534-4145"
              className="text-indigo-600 hover:text-indigo-500 transition-colors"
            >
              888-534-4145
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
