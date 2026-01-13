import {
  Zap,
  Copy,
  Layers,
  RefreshCw,
  Shield,
  Clock
} from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: '1000+ Expert Prompts',
    description: 'Access a massive library of professionally crafted prompts across 15 categories. No more trial and error.',
  },
  {
    icon: Copy,
    title: 'Copy & Paste Ready',
    description: 'Every prompt is ready to use immediately. Just copy, customize the [VARIABLES], and get instant results.',
  },
  {
    icon: Layers,
    title: 'Works With All AI Tools',
    description: 'Compatible with ChatGPT, Claude, Gemini, Midjourney, DALL-E, Stable Diffusion, Sora, and more.',
  },
  {
    icon: RefreshCw,
    title: 'Lifetime Updates',
    description: 'Get free updates forever. As AI evolves, so do our prompts. Stay ahead without paying extra.',
  },
  {
    icon: Shield,
    title: 'Battle-Tested Quality',
    description: 'Every prompt has been tested across multiple AI models to ensure consistent, high-quality outputs.',
  },
  {
    icon: Clock,
    title: 'Save 20+ Hours Weekly',
    description: 'Stop wasting time crafting prompts from scratch. Our users report saving 20+ hours per week.',
  },
]

export function FeaturesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why 5,000+ Professionals Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stop struggling with AI outputs. Get the prompts that actually work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl border border-gray-100 bg-white hover:border-indigo-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <feature.icon className="h-6 w-6 text-indigo-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
