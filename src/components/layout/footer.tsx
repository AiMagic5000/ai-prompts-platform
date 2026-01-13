import Link from 'next/link'
import { Logo } from '@/components/shared/logo'
import { Twitter, Youtube, Linkedin, Mail } from 'lucide-react'

const footerLinks = {
  prompts: {
    title: 'Prompts',
    links: [
      { label: 'All Prompts', href: '/prompts' },
      { label: 'ChatGPT', href: '/prompts?tool=chatgpt' },
      { label: 'Image Generation', href: '/prompts?category=image-generation' },
      { label: 'Video Prompts', href: '/prompts?category=video-generation' },
      { label: 'Marketing', href: '/prompts?category=seo-marketing' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Prompt Guide', href: '/guide' },
      { label: 'AI Tools', href: '/tools' },
      { label: 'Free Samples', href: '/free' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Affiliates', href: '/affiliates' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Refund Policy', href: '/refunds' },
    ],
  },
}

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/alwaysencrypted', label: 'Twitter' },
  { icon: Youtube, href: 'https://youtube.com/@alwaysencrypted', label: 'YouTube' },
  { icon: Linkedin, href: 'https://linkedin.com/company/alwaysencrypted', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:support@alwaysencrypted.com', label: 'Email' },
]

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="mb-4">
              <Logo className="text-white" />
            </div>
            <p className="text-sm text-slate-400 mb-4 max-w-xs">
              1000+ expert-crafted AI prompts that actually work. Save hours and get better results with ChatGPT, Claude, Midjourney, and more.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} AlwaysEncrypted. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-500">Secure payments with</span>
            <div className="flex gap-2">
              <div className="h-6 w-10 bg-slate-700 rounded flex items-center justify-center text-[10px] font-bold">VISA</div>
              <div className="h-6 w-10 bg-slate-700 rounded flex items-center justify-center text-[10px] font-bold">MC</div>
              <div className="h-6 w-10 bg-slate-700 rounded flex items-center justify-center text-[10px] font-bold">AMEX</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
