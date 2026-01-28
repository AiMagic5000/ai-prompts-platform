'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  FileText,
  Heart,
  FolderOpen,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Gift,
  Zap,
  BookOpen,
  Wrench,
  Sparkles,
  Crown
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/shared/logo'
import { useState } from 'react'
import { usePayment } from '@/contexts/payment-context'

const mainNavItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard', color: 'text-indigo-400', bg: 'bg-indigo-500/15' },
  { icon: FileText, label: 'All Prompts', href: '/dashboard/prompts', color: 'text-blue-400', bg: 'bg-blue-500/15', badge: '500+' },
  { icon: Gift, label: 'Bonus Prompts', href: '/dashboard/bonus-prompts', color: 'text-amber-400', bg: 'bg-amber-500/15', badge: '500+' },
  { icon: Zap, label: 'Automations', href: '/dashboard/automations', color: 'text-orange-400', bg: 'bg-orange-500/15', badge: '250+' },
  { icon: BookOpen, label: 'Masterclass', href: '/dashboard/masterclass', color: 'text-emerald-400', bg: 'bg-emerald-500/15' },
  { icon: Wrench, label: 'AI Tools Guide', href: '/dashboard/ai-tools-guide', color: 'text-purple-400', bg: 'bg-purple-500/15' },
]

const userNavItems = [
  { icon: Heart, label: 'Favorites', href: '/dashboard/favorites', color: 'text-rose-400', bg: 'bg-rose-500/15' },
  { icon: FolderOpen, label: 'Collections', href: '/dashboard/collections', color: 'text-cyan-400', bg: 'bg-cyan-500/15' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings', color: 'text-gray-400', bg: 'bg-gray-500/15' },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const { hasPaid } = usePayment()

  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 72 : 256 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className="h-screen border-r border-gray-800/50 bg-gradient-to-b from-[#0F0F23] to-[#0a0a1a] sticky top-0 flex flex-col z-30"
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-800/50">
        <div className="flex items-center justify-between">
          <AnimatePresence mode="wait">
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.15 }}
              >
                <Logo variant="dark" />
              </motion.div>
            )}
          </AnimatePresence>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors"
          >
            {collapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </motion.button>
        </div>
      </div>

      {/* User Status */}
      {!collapsed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="px-4 py-3 border-b border-gray-800/50"
        >
          <div className={`flex items-center gap-2 px-3 py-2 rounded-xl ${hasPaid ? 'bg-gradient-to-r from-indigo-500/15 to-purple-500/15 border border-indigo-500/20' : 'bg-amber-500/10 border border-amber-500/20'}`}>
            {hasPaid ? (
              <>
                <Crown className="w-4 h-4 text-indigo-400" />
                <span className="text-sm font-medium text-indigo-300">Pro Member</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-medium text-amber-300">Free Preview</span>
              </>
            )}
          </div>
        </motion.div>
      )}

      {/* Main Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        <AnimatePresence>
          {!collapsed && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2"
            >
              Library
            </motion.p>
          )}
        </AnimatePresence>
        
        {mainNavItems.map((item) => {
          const isActive = pathname === item.href || 
            (item.href !== '/dashboard' && pathname.startsWith(item.href))
          
          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  'relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group',
                  isActive
                    ? `${item.bg} ${item.color} shadow-lg`
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                )}
              >
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 w-1 h-6 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full"
                  />
                )}
                
                <item.icon className={cn('w-5 h-5 shrink-0', isActive ? item.color : 'group-hover:text-white')} />
                
                <AnimatePresence mode="wait">
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.15 }}
                      className="flex-1"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
                
                {!collapsed && item.badge && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={cn(
                      'px-2 py-0.5 text-xs rounded-full',
                      isActive ? 'bg-white/20 text-white' : 'bg-gray-800 text-gray-500'
                    )}
                  >
                    {item.badge}
                  </motion.span>
                )}
              </motion.div>
            </Link>
          )
        })}

        {/* Divider */}
        <div className="my-4 border-t border-gray-800/50" />

        <AnimatePresence>
          {!collapsed && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2"
            >
              Personal
            </motion.p>
          )}
        </AnimatePresence>

        {userNavItems.map((item) => {
          const isActive = pathname === item.href
          
          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group',
                  isActive
                    ? `${item.bg} ${item.color}`
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                )}
              >
                <item.icon className={cn('w-5 h-5 shrink-0', isActive ? item.color : 'group-hover:text-white')} />
                
                <AnimatePresence mode="wait">
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.15 }}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-gray-800/50">
        <Link href="/">
          <motion.div
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all"
          >
            <LogOut className="w-5 h-5 shrink-0" />
            <AnimatePresence mode="wait">
              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.15 }}
                >
                  Exit Dashboard
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </Link>
      </div>
    </motion.aside>
  )
}
