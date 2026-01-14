'use client'

import Link from 'next/link'
import { useUser, SignOutButton, SignedIn, SignedOut } from '@clerk/nextjs'
import { User, LogOut } from 'lucide-react'

export function ClerkUserSection({ hasPaid }: { hasPaid: boolean }) {
  const { user } = useUser()

  return (
    <div className="p-4 border-t border-gray-800">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center overflow-hidden">
          {user?.imageUrl ? (
            <img src={user.imageUrl} alt="" className="w-full h-full object-cover" />
          ) : (
            <User className="w-5 h-5 text-indigo-400" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-white truncate">
            {user?.firstName || user?.emailAddresses?.[0]?.emailAddress || 'Member'}
          </p>
          <p className="text-xs text-gray-500">
            {hasPaid ? 'Lifetime Access' : 'Free Account'}
          </p>
        </div>
      </div>
      <SignedIn>
        <SignOutButton>
          <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors w-full">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </SignOutButton>
      </SignedIn>
      <SignedOut>
        <Link
          href="/sign-in"
          className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Sign In
        </Link>
      </SignedOut>
    </div>
  )
}

export function ClerkUserAvatar() {
  const { user } = useUser()

  return (
    <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center overflow-hidden">
      {user?.imageUrl ? (
        <img src={user.imageUrl} alt="" className="w-full h-full object-cover" />
      ) : (
        <User className="w-5 h-5 text-indigo-400" />
      )}
    </div>
  )
}
