'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from '@/components/shared/logo'
import { BusinessCTA } from '@/components/marketing/business-cta'
import { PaymentProvider, usePayment } from '@/contexts/payment-context'
import {
  LayoutDashboard,
  FileText,
  Gift,
  GraduationCap,
  Wrench,
  FolderOpen,
  Star,
  Link as LinkIcon,
  Settings,
  Menu,
  X,
  User,
  Zap,
  Lock,
  Crown,
  LogOut
} from 'lucide-react'
import { ThemeToggle } from '@/components/ui/theme-toggle'

// Check if Clerk is configured - must be done at runtime for server components
function isClerkConfigured(): boolean {
  const key = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
  return !!(key && !key.includes('placeholder'))
}

// Mock user object for demo mode
const DEMO_USER = {
  id: 'demo-user',
  firstName: 'Demo',
  lastName: 'User',
  emailAddresses: [{ emailAddress: 'demo@example.com' }],
  imageUrl: null,
}

const navItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard', free: true },
  { href: '/dashboard/prompts', icon: FileText, label: 'All Prompts', badge: '500', free: false },
  { href: '/dashboard/bonus-prompts', icon: Gift, label: 'Bonus Prompts', badge: '500', special: true, free: false },
  { href: '/dashboard/automations', icon: Zap, label: 'n8n Automations', badge: '250+', free: false },
  { href: '/dashboard/masterclass', icon: GraduationCap, label: 'Masterclass', free: false },
  { href: '/dashboard/ai-tools-guide', icon: Wrench, label: 'AI Tools Guide', free: false },
  { href: '/dashboard/collections', icon: FolderOpen, label: 'My Collections', free: false },
  { href: '/dashboard/favorites', icon: Star, label: 'Favorites', free: false },
  { href: '/dashboard/resources', icon: LinkIcon, label: 'Resources', free: false },
  { href: '/dashboard/settings', icon: Settings, label: 'Settings', free: true },
]

// Demo mode user section
function DemoUserSection({ hasPaid }: { hasPaid: boolean }) {
  return (
    <div className="p-4 border-t border-gray-800">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
          <User className="w-5 h-5 text-indigo-400" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-white truncate">
            {DEMO_USER.firstName}
          </p>
          <p className="text-xs text-gray-500">
            {hasPaid ? 'Lifetime Access' : 'Free Account'}
          </p>
        </div>
      </div>
      <Link
        href="/"
        className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
      >
        <LogOut className="w-4 h-4" />
        Exit to Home
      </Link>
    </div>
  )
}

function DemoUserAvatar() {
  return (
    <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
      <User className="w-5 h-5 text-indigo-400" />
    </div>
  )
}

// User section that renders demo mode always (for now, until Clerk is configured)
function UserSection({ hasPaid }: { hasPaid: boolean }) {
  // Always use demo mode for now
  return <DemoUserSection hasPaid={hasPaid} />
}

function UserAvatar() {
  // Always use demo mode for now
  return <DemoUserAvatar />
}

function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const pathname = usePathname()
  const { hasPaid } = usePayment()

  return (
    <>
      {/* Overlay for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar - Fixed on mobile, static on desktop */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-[#0a0a1a] border-r border-gray-800 flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:z-auto
        `}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <Logo size="sm" />
          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <ThemeToggle />
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Access Status Banner */}
        {!hasPaid && (
          <div className="mx-4 mt-4 p-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-lg">
            <div className="flex items-center gap-2 text-amber-400 text-sm font-medium mb-1">
              <Lock className="w-4 h-4" />
              Free Preview Mode
            </div>
            <p className="text-xs text-gray-400">
              Unlock all 1000+ prompts for just $39
            </p>
          </div>
        )}

        {hasPaid && (
          <div className="mx-4 mt-4 p-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-lg">
            <div className="flex items-center gap-2 text-indigo-400 text-sm font-medium">
              <Crown className="w-4 h-4" />
              Lifetime Access
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const isLocked = !hasPaid && !item.free

            return (
              <Link
                key={item.href}
                href={isLocked ? '#' : item.href}
                onClick={(e) => {
                  if (isLocked) {
                    e.preventDefault()
                  } else {
                    onClose()
                  }
                }}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isLocked
                    ? 'opacity-50 cursor-not-allowed text-gray-500'
                    : isActive
                    ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                } ${item.special && !isLocked ? 'border border-amber-500/30 bg-amber-500/5' : ''}`}
              >
                <item.icon className={`w-5 h-5 ${item.special && !isLocked ? 'text-amber-400' : ''}`} />
                <span className="flex-1">{item.label}</span>
                {isLocked ? (
                  <Lock className="w-4 h-4 text-gray-600" />
                ) : item.badge ? (
                  <span className={`px-2 py-0.5 text-xs rounded-full ${
                    item.special
                      ? 'bg-amber-500/20 text-amber-400'
                      : 'bg-indigo-500/20 text-indigo-400'
                  }`}>
                    {item.badge}
                  </span>
                ) : null}
              </Link>
            )
          })}
        </nav>

        {/* Business CTA */}
        <div className="p-4 border-t border-gray-800">
          <BusinessCTA variant="services" />
        </div>

        {/* User Section */}
        <UserSection hasPaid={hasPaid} />
      </aside>
    </>
  )
}

function DashboardContent({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { hasPaid, isLoading } = usePayment()
  const router = useRouter()

  // Redirect to PIN verification if not verified
  useEffect(() => {
    if (!isLoading && !hasPaid) {
      router.push('/verify-pin')
    }
  }, [hasPaid, isLoading, router])

  // Show loading state while checking verification
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0F0F23] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  // Redirect if not paid (will happen in useEffect)
  if (!hasPaid) {
    return (
      <div className="min-h-screen bg-[#0F0F23] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Verifying access...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0F0F23]">
      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-30 bg-[#0a0a1a] border-b border-gray-800 px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 text-gray-400 hover:text-white"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
        <Logo size="sm" />
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <UserAvatar />
        </div>
      </header>

      <div className="lg:flex">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content - Full width on mobile, flex-1 on desktop */}
        <main className="flex-1 w-full min-w-0">
          {children}
        </main>
      </div>
    </div>
  )
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PaymentProvider>
      <DashboardContent>{children}</DashboardContent>
    </PaymentProvider>
  )
}
