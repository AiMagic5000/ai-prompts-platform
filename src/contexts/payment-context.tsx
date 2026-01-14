'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface PaymentContextType {
  hasPaid: boolean
  isLoading: boolean
  checkPaymentStatus: () => Promise<void>
  verifyPin: (pin: string) => boolean
  clearVerification: () => void
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined)

// The universal PIN code for verified purchasers
const VALID_PIN = '197019'

export function PaymentProvider({ children }: { children: ReactNode }) {
  const [hasPaid, setHasPaid] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Check localStorage for PIN verification on mount
  useEffect(() => {
    const checkVerification = () => {
      if (typeof window !== 'undefined') {
        const verified = localStorage.getItem('pin_verified')
        setHasPaid(verified === 'true')
      }
      setIsLoading(false)
    }

    checkVerification()

    // Listen for storage changes (in case user verifies in another tab)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'pin_verified') {
        setHasPaid(e.newValue === 'true')
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  const checkPaymentStatus = async () => {
    if (typeof window !== 'undefined') {
      const verified = localStorage.getItem('pin_verified')
      setHasPaid(verified === 'true')
    }
  }

  const verifyPin = (pin: string): boolean => {
    if (pin === VALID_PIN) {
      localStorage.setItem('pin_verified', 'true')
      localStorage.setItem('pin_verified_at', new Date().toISOString())
      setHasPaid(true)
      return true
    }
    return false
  }

  const clearVerification = () => {
    localStorage.removeItem('pin_verified')
    localStorage.removeItem('pin_verified_at')
    setHasPaid(false)
  }

  return (
    <PaymentContext.Provider value={{ hasPaid, isLoading, checkPaymentStatus, verifyPin, clearVerification }}>
      {children}
    </PaymentContext.Provider>
  )
}

export function usePayment() {
  const context = useContext(PaymentContext)
  if (context === undefined) {
    // Return default values if not wrapped in provider (for SSR)
    return {
      hasPaid: false,
      isLoading: true,
      checkPaymentStatus: async () => {},
      verifyPin: () => false,
      clearVerification: () => {},
    }
  }
  return context
}
