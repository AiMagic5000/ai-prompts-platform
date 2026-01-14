'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface PaymentContextType {
  hasPaid: boolean
  isLoading: boolean
  checkPaymentStatus: () => Promise<void>
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined)

// Payment required - no free access to dashboard content
// Users must complete purchase via Gumroad before accessing premium content
export function PaymentProvider({ children }: { children: ReactNode }) {
  // Default: Not paid - users must purchase to access content
  const [hasPaid] = useState(false)
  const [isLoading] = useState(false)

  const checkPaymentStatus = async () => {
    // When Clerk is configured, this would check user.publicMetadata?.hasPaid
    // For now, payment verification happens via Gumroad redirect
  }

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
      hasPaid: false, // Require payment
      isLoading: false,
      checkPaymentStatus: async () => {},
    }
  }
  return context
}
