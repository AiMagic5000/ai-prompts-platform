import Link from 'next/link'
import { Check, Shield, RefreshCw, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const features = [
  '1000+ expert-crafted prompts',
  'ChatGPT, Claude, Gemini compatible',
  'Midjourney & DALL-E image prompts',
  'Sora & Runway video prompts',
  'SEO & marketing prompts',
  'Coding & development prompts',
  'Instant digital download',
  'Lifetime updates (free)',
  'Private Discord community',
  '30-day money-back guarantee',
]

const bonuses = [
  'Prompt Engineering Masterclass ($197 value)',
  'AI Tool Comparison Guide ($47 value)',
  'Weekly New Prompts Drop ($97/yr value)',
]

export function PricingCard() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Limited Time Offer
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            One Payment. Lifetime Access.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No subscriptions. No hidden fees. Pay once and get access forever.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <Card className="relative overflow-hidden border-2 border-indigo-200 shadow-xl">
            {/* Popular badge */}
            <div className="absolute top-4 right-4">
              <Badge className="bg-amber-500 text-white hover:bg-amber-500">
                Best Value
              </Badge>
            </div>

            <CardHeader className="text-center pb-2 pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                AI Prompts Library
              </h3>
              <div className="flex items-center justify-center gap-2">
                <span className="text-gray-400 line-through text-2xl">$97</span>
                <span className="text-5xl font-bold text-gray-900">$39</span>
              </div>
              <p className="text-green-600 font-medium mt-1">
                Save $58 (60% OFF)
              </p>
            </CardHeader>

            <CardContent className="pt-6">
              {/* Features */}
              <ul className="space-y-3 mb-6">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Bonuses */}
              <div className="bg-amber-50 rounded-lg p-4 mb-6 border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Free Bonuses Included
                </h4>
                <ul className="space-y-2">
                  {bonuses.map((bonus) => (
                    <li key={bonus} className="flex items-center gap-2 text-sm text-amber-900">
                      <Check className="h-4 w-4 text-amber-600" />
                      {bonus}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Button asChild size="xl" variant="accent" className="w-full shadow-lg">
                <Link href="/get-access">
                  Get Instant Access Now
                </Link>
              </Button>

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Shield className="h-4 w-4" />
                  Secure Payment
                </div>
                <div className="flex items-center gap-1">
                  <RefreshCw className="h-4 w-4" />
                  30-Day Guarantee
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
