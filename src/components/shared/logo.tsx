'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface LogoProps {
  className?: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'full' | 'icon'
  animated?: boolean
  href?: string
}

const sizeMap = {
  sm: { icon: 28, text: 'text-lg' },
  md: { icon: 36, text: 'text-xl' },
  lg: { icon: 44, text: 'text-2xl' },
  xl: { icon: 52, text: 'text-3xl' },
}

export function Logo({
  className = '',
  showText = true,
  size = 'md',
  variant = 'full',
  animated = true,
  href = '/'
}: LogoProps) {
  const { icon: iconSize, text: textSize } = sizeMap[size]

  const content = (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Logo Icon - Lightning Bolt + Brain/Prompt Symbol */}
      <motion.svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={animated ? { scale: 0.8, opacity: 0 } : undefined}
        animate={animated ? { scale: 1, opacity: 1 } : undefined}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.05 }}
      >
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
          <linearGradient id="boltGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#FBBF24" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#6366F1" floodOpacity="0.3"/>
          </filter>
        </defs>

        {/* Background Circle with Glow */}
        <circle
          cx="24"
          cy="24"
          r="23"
          fill="url(#logoGradient)"
          opacity="0.12"
        />
        <circle
          cx="24"
          cy="24"
          r="21"
          stroke="url(#logoGradient)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.3"
        />

        {/* Brain/Lightbulb Base Shape */}
        <path
          d="M24 6C15.163 6 8 13.163 8 22C8 28.075 11.925 33.258 17.5 35.5V39C17.5 40.933 19.067 42.5 21 42.5H27C28.933 42.5 30.5 40.933 30.5 39V35.5C36.075 33.258 40 28.075 40 22C40 13.163 32.837 6 24 6Z"
          fill="url(#logoGradient)"
          filter="url(#dropShadow)"
        />

        {/* Inner Glow */}
        <path
          d="M24 9C17.373 9 12 14.373 12 21C12 25.87 14.925 30.06 19 32.2V35C19 35.552 19.448 36 20 36H28C28.552 36 29 35.552 29 35V32.2C33.075 30.06 36 25.87 36 21C36 14.373 30.627 9 24 9Z"
          fill="url(#logoGradient)"
          opacity="0.3"
        />

        {/* Lightning Bolt */}
        <motion.path
          d="M27 10L17 24H23L20 38L32 22H25L27 10Z"
          fill="url(#boltGradient)"
          stroke="#FFFFFF"
          strokeWidth="0.75"
          filter="url(#glow)"
          initial={animated ? { pathLength: 0 } : undefined}
          animate={animated ? { pathLength: 1 } : undefined}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        {/* Sparkle Effects */}
        <circle cx="14" cy="16" r="1.5" fill="#FFFFFF" opacity="0.8"/>
        <circle cx="34" cy="28" r="1" fill="#FFFFFF" opacity="0.6"/>
        <circle cx="18" cy="30" r="0.8" fill="#FFFFFF" opacity="0.5"/>

        {/* Bottom Connector */}
        <rect x="19" y="42.5" width="10" height="2" rx="1" fill="url(#logoGradient)" opacity="0.5"/>
        <rect x="21" y="45" width="6" height="1.5" rx="0.75" fill="url(#logoGradient)" opacity="0.3"/>
      </motion.svg>

      {/* Logo Text */}
      {(showText && variant === 'full') && (
        <motion.div
          className="flex flex-col"
          initial={animated ? { x: -10, opacity: 0 } : undefined}
          animate={animated ? { x: 0, opacity: 1 } : undefined}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <span className={`font-extrabold ${textSize} bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-600 bg-clip-text text-transparent leading-tight`}>
            PromptVault
          </span>
          <span className="text-[10px] text-gray-500 font-medium tracking-wider uppercase -mt-0.5">
            AI Prompts Library
          </span>
        </motion.div>
      )}
    </div>
  )

  return href ? (
    <Link href={href} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg">
      {content}
    </Link>
  ) : content
}

// Simplified version without Link for dashboard
export function LogoIcon({
  className = '',
  size = 'md',
  animated = false
}: Omit<LogoProps, 'showText' | 'variant' | 'href'>) {
  const { icon: iconSize } = sizeMap[size]

  return (
    <motion.svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      whileHover={animated ? { scale: 1.05 } : undefined}
    >
      <defs>
        <linearGradient id="logoGradientIcon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
        <linearGradient id="boltGradientIcon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#FBBF24" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="23" fill="url(#logoGradientIcon)" opacity="0.12"/>
      <circle cx="24" cy="24" r="21" stroke="url(#logoGradientIcon)" strokeWidth="1.5" fill="none" opacity="0.3"/>
      <path
        d="M24 6C15.163 6 8 13.163 8 22C8 28.075 11.925 33.258 17.5 35.5V39C17.5 40.933 19.067 42.5 21 42.5H27C28.933 42.5 30.5 40.933 30.5 39V35.5C36.075 33.258 40 28.075 40 22C40 13.163 32.837 6 24 6Z"
        fill="url(#logoGradientIcon)"
      />
      <path
        d="M27 10L17 24H23L20 38L32 22H25L27 10Z"
        fill="url(#boltGradientIcon)"
        stroke="#FFFFFF"
        strokeWidth="0.75"
      />
      <circle cx="14" cy="16" r="1.5" fill="#FFFFFF" opacity="0.8"/>
      <rect x="19" y="42.5" width="10" height="2" rx="1" fill="url(#logoGradientIcon)" opacity="0.5"/>
    </motion.svg>
  )
}
