import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to 10x Your AI Results?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join 5,000+ professionals who stopped struggling with AI prompts.
            Get instant access to 1000+ expert-crafted prompts that actually work.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              asChild
              size="xl"
              className="bg-white text-indigo-600 hover:bg-gray-100 shadow-lg"
            >
              <Link href="/get-access">
                Get Instant Access - $39
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-indigo-200 text-sm">
            Rated 5.0/5 by 5,000+ customers
          </p>
        </div>
      </div>
    </section>
  )
}
