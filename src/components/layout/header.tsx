'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ShoppingCart, User, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/shared/logo'

const navLinks = [
  {
    label: 'Prompts',
    href: '/prompts',
    children: [
      { label: 'All Prompts', href: '/prompts' },
      { label: 'ChatGPT Prompts', href: '/prompts?tool=chatgpt' },
      { label: 'Image Prompts', href: '/prompts?category=image-generation' },
      { label: 'Video Prompts', href: '/prompts?category=video-generation' },
    ],
  },
  {
    label: 'Categories',
    href: '/categories',
    children: [
      { label: 'Business', href: '/categories/business-strategy' },
      { label: 'Marketing', href: '/categories/seo-marketing' },
      { label: 'Coding', href: '/categories/coding-development' },
      { label: 'Creative', href: '/categories/creative-writing' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Pricing', href: '/pricing' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <div key={link.href} className="relative group">
              <Link
                href={link.href}
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
              >
                {link.label}
                {link.children && <ChevronDown className="h-4 w-4" />}
              </Link>
              {link.children && (
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-lg shadow-lg border p-2 min-w-[200px]">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative hidden sm:block">
            <ShoppingCart className="h-5 w-5 text-gray-700 hover:text-indigo-600 transition-colors" />
            <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-amber-500 text-[10px] font-bold text-white flex items-center justify-center">
              0
            </span>
          </Link>

          <Link href="/dashboard" className="hidden sm:block">
            <User className="h-5 w-5 text-gray-700 hover:text-indigo-600 transition-colors" />
          </Link>

          <Button asChild variant="accent" className="hidden sm:flex">
            <Link href="/get-access">Get Access</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white animate-fade-in">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 text-gray-700 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-4 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-1.5 text-sm text-gray-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 flex gap-4">
              <Link href="/dashboard" className="flex items-center gap-2 text-gray-700">
                <User className="h-5 w-5" />
                Dashboard
              </Link>
              <Link href="/cart" className="flex items-center gap-2 text-gray-700">
                <ShoppingCart className="h-5 w-5" />
                Cart
              </Link>
            </div>
            <Button asChild variant="accent" className="w-full mt-4">
              <Link href="/get-access">Get Access - $39</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
