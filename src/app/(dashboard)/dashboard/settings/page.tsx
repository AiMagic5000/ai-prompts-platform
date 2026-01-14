'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Settings,
  User,
  Bell,
  Palette,
  Shield,
  CreditCard,
  Mail,
  Globe,
  Moon,
  Sun,
  Check,
  ExternalLink
} from 'lucide-react'
import { useTheme } from '@/components/providers/theme-provider'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile')
  const { theme, setTheme } = useTheme()
  const [notifications, setNotifications] = useState({
    email: true,
    newPrompts: true,
    tips: false,
    marketing: false,
  })

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'billing', label: 'Billing', icon: CreditCard },
  ]

  return (
    <div className="min-h-screen bg-[#0F0F23]">
      {/* Header */}
      <div className="border-b border-gray-800 bg-[#0a0a1a]">
        <div className="p-4 lg:p-6">
          <h1 className="text-xl lg:text-2xl font-bold text-white flex items-center gap-2">
            <Settings className="w-6 h-6 text-indigo-400" />
            Settings
          </h1>
          <p className="text-gray-400 text-sm">
            Manage your account preferences
          </p>
        </div>
      </div>

      <div className="p-4 lg:p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Tabs */}
          <div className="lg:w-64 shrink-0">
            <nav className="bg-[#1A1A2E] rounded-xl border border-gray-800 p-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === tab.id
                      ? 'bg-indigo-500/10 text-indigo-400'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#1A1A2E] rounded-xl border border-gray-800 p-6"
            >
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-semibold text-white mb-4">Profile Information</h2>

                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-20 h-20 rounded-full bg-indigo-500/20 flex items-center justify-center overflow-hidden">
                        <User className="w-10 h-10 text-indigo-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">User</h3>
                        <p className="text-sm text-gray-400">user@example.com</p>
                      </div>
                    </div>

                    <div className="grid gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          defaultValue=""
                          placeholder="Your name"
                          className="w-full px-4 py-2.5 bg-[#0F0F23] border border-gray-800 rounded-lg text-white focus:border-indigo-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          defaultValue=""
                          placeholder="your@email.com"
                          disabled
                          className="w-full px-4 py-2.5 bg-[#0F0F23] border border-gray-800 rounded-lg text-gray-500 cursor-not-allowed"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Email is managed through your account provider
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-800">
                    <button className="px-4 py-2 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-600">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}

              {/* Notifications Tab */}
              {activeTab === 'notifications' && (
                <div className="space-y-6">
                  <h2 className="text-lg font-semibold text-white">Notification Preferences</h2>

                  <div className="space-y-4">
                    {[
                      { key: 'email', label: 'Email Notifications', desc: 'Receive important updates via email' },
                      { key: 'newPrompts', label: 'New Prompts', desc: 'Get notified when new prompts are added' },
                      { key: 'tips', label: 'Tips & Tricks', desc: 'Receive prompt engineering tips' },
                      { key: 'marketing', label: 'Marketing', desc: 'Offers and promotional content' },
                    ].map((item) => (
                      <div
                        key={item.key}
                        className="flex items-center justify-between p-4 bg-[#0F0F23] rounded-lg border border-gray-800"
                      >
                        <div>
                          <h3 className="font-medium text-white">{item.label}</h3>
                          <p className="text-sm text-gray-500">{item.desc}</p>
                        </div>
                        <button
                          onClick={() =>
                            setNotifications({
                              ...notifications,
                              [item.key]: !notifications[item.key as keyof typeof notifications],
                            })
                          }
                          className={`w-12 h-6 rounded-full transition-colors ${
                            notifications[item.key as keyof typeof notifications]
                              ? 'bg-indigo-500'
                              : 'bg-gray-700'
                          }`}
                        >
                          <div
                            className={`w-5 h-5 bg-white rounded-full transition-transform ${
                              notifications[item.key as keyof typeof notifications]
                                ? 'translate-x-6'
                                : 'translate-x-0.5'
                            }`}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Appearance Tab */}
              {activeTab === 'appearance' && (
                <div className="space-y-6">
                  <h2 className="text-lg font-semibold text-white">Appearance</h2>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-3">
                      Theme
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'dark', label: 'Dark', icon: Moon },
                        { id: 'light', label: 'Light', icon: Sun },
                        { id: 'system', label: 'System', icon: Globe },
                      ].map((option) => (
                        <button
                          key={option.id}
                          onClick={() => setTheme(option.id as typeof theme)}
                          className={`p-4 rounded-lg border transition-colors ${
                            theme === option.id
                              ? 'bg-indigo-500/10 border-indigo-500/50 text-indigo-400'
                              : 'bg-[#0F0F23] border-gray-800 text-gray-400 hover:border-gray-700'
                          }`}
                        >
                          <option.icon className="w-5 h-5 mx-auto mb-2" />
                          <span className="text-sm font-medium">{option.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Billing Tab */}
              {activeTab === 'billing' && (
                <div className="space-y-6">
                  <h2 className="text-lg font-semibold text-white">Billing & Subscription</h2>

                  <div className="p-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-white">Lifetime Access</h3>
                        <p className="text-sm text-gray-400">
                          1000+ prompts • Unlimited access • All future updates
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-green-400">
                        <Check className="w-5 h-5" />
                        <span className="font-medium">Active</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-[#0F0F23] rounded-lg border border-gray-800">
                    <h3 className="font-medium text-white mb-2">Purchase Details</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Plan</span>
                        <span className="text-white">AI Prompts Library - Lifetime</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Amount Paid</span>
                        <span className="text-white">$39.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Includes</span>
                        <span className="text-white">500 Main + 500 Bonus Prompts</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-800">
                    <a
                      href="https://coreypearson.gumroad.com/l/eayfol"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm"
                    >
                      View on Gumroad
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
