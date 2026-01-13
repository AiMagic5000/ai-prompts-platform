import Link from 'next/link'
import { Sparkles } from 'lucide-react'

interface LogoProps {
  className?: string
  showText?: boolean
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
        <Sparkles className="h-5 w-5" />
      </div>
      {showText && (
        <span className="font-bold text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          AI Prompts
        </span>
      )}
    </Link>
  )
}
