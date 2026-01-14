'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

interface Testimonial {
  name: string
  role: string
  company: string
  avatar: string
  quote: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow Inc",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    quote: "These prompts have completely transformed our content workflow. We're producing 3x more content in half the time. The SEO prompts alone have boosted our organic traffic by 40%.",
    rating: 5
  },
  {
    name: "Marcus Johnson",
    role: "Startup Founder",
    company: "LaunchPad.io",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    quote: "As a solopreneur, this prompt library is like having a team of AI experts. The Midjourney prompts have saved me thousands in design costs.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Content Strategist",
    company: "BrandVoice Agency",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    quote: "The Claude prompts are incredibly well-crafted. Our client deliverables have improved dramatically, and the N8N automation prompts have streamlined our entire operation.",
    rating: 5
  },
  {
    name: "David Kim",
    role: "Full-Stack Developer",
    company: "CodeCraft Studios",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    quote: "The coding prompts are a goldmine. From debugging to documentation, these prompts have made me significantly more productive. Worth every penny.",
    rating: 5
  },
  {
    name: "Jessica Taylor",
    role: "E-commerce Owner",
    company: "Bloom Boutique",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    quote: "The product description prompts and image generation prompts have transformed my store. My conversion rate increased 25% after implementing these.",
    rating: 5
  },
  {
    name: "Michael Brown",
    role: "Video Producer",
    company: "Pixel Motion",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    quote: "The Sora and Runway prompts are next-level. I'm creating professional video content that used to require a full production team.",
    rating: 5
  }
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'fill-amber-400 text-amber-400' : 'text-gray-600'
          }`}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their workflow with our expert-crafted AI prompts.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-indigo-500/30" />
              </div>

              {/* Quote Text */}
              <p className="text-slate-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-100">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '2,500+', label: 'Happy Customers' },
            { value: '500+', label: 'Expert Prompts' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '98%', label: 'Satisfaction Rate' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="text-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm"
            >
              <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
