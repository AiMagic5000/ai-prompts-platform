'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useUser } from '@clerk/nextjs'

interface PaymentContextType {
  hasPaid: boolean
  isLoading: boolean
  checkPaymentStatus: () => Promise<void>
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined)

export function PaymentProvider({ children }: { children: ReactNode }) {
  const { user, isLoaded } = useUser()
  const [hasPaid, setHasPaid] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const checkPaymentStatus = async () => {
    if (!user) {
      setHasPaid(false)
      setIsLoading(false)
      return
    }

    try {
      // Check user's public metadata for payment status
      // This can be set via Gumroad webhook
      const paymentStatus = user.publicMetadata?.hasPaid as boolean
      setHasPaid(paymentStatus || false)
    } catch (error) {
      console.error('Error checking payment status:', error)
      setHasPaid(false)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (isLoaded) {
      checkPaymentStatus()
    }
  }, [user, isLoaded])

  return (
    <PaymentContext.Provider value={{ hasPaid, isLoading, checkPaymentStatus }}>
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
    }
  }
  return context
}
