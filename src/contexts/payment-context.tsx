'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface PaymentContextType {
  hasPaid: boolean
  isLoading: boolean
  checkPaymentStatus: () => Promise<void>
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined)

// Simplified provider - always grants access in demo mode
// When Clerk is configured properly, this can be updated to check payment status
export function PaymentProvider({ children }: { children: ReactNode }) {
  // Demo mode: grant full access
  const [hasPaid] = useState(true)
  const [isLoading] = useState(false)

  const checkPaymentStatus = async () => {
    // No-op in demo mode
    // When Clerk is configured, this would check user.publicMetadata?.hasPaid
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
      hasPaid: true, // Grant access
      isLoading: false,
      checkPaymentStatus: async () => {},
    }
  }
  return context
}
