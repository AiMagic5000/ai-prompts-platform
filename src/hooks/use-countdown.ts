'use client'

import { useState, useEffect, useCallback } from 'react'

const COUNTDOWN_KEY = 'promptvault_bonus_countdown'
const COUNTDOWN_DURATION = 2 * 60 * 60 * 1000 // 2 hours in milliseconds

interface CountdownState {
  hours: number
  minutes: number
  seconds: number
  isExpired: boolean
  totalSeconds: number
}

export function useCountdown(): CountdownState & { reset: () => void } {
  const [state, setState] = useState<CountdownState>({
    hours: 2,
    minutes: 0,
    seconds: 0,
    isExpired: false,
    totalSeconds: 7200
  })

  const getStoredEndTime = useCallback(() => {
    if (typeof window === 'undefined') return null
    const stored = localStorage.getItem(COUNTDOWN_KEY)
    if (stored) {
      const endTime = parseInt(stored, 10)
      if (!isNaN(endTime)) {
        return endTime
      }
    }
    return null
  }, [])

  const setStoredEndTime = useCallback((endTime: number) => {
    if (typeof window === 'undefined') return
    localStorage.setItem(COUNTDOWN_KEY, endTime.toString())
  }, [])

  const reset = useCallback(() => {
    if (typeof window === 'undefined') return
    const newEndTime = Date.now() + COUNTDOWN_DURATION
    setStoredEndTime(newEndTime)
    setState({
      hours: 2,
      minutes: 0,
      seconds: 0,
      isExpired: false,
      totalSeconds: 7200
    })
  }, [setStoredEndTime])

  useEffect(() => {
    // Initialize or get existing countdown
    let endTime = getStoredEndTime()

    if (!endTime) {
      // First visit - start new countdown
      endTime = Date.now() + COUNTDOWN_DURATION
      setStoredEndTime(endTime)
    }

    const updateCountdown = () => {
      const now = Date.now()
      const remaining = endTime! - now

      if (remaining <= 0) {
        setState({
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
          totalSeconds: 0
        })
        return
      }

      const totalSeconds = Math.floor(remaining / 1000)
      const hours = Math.floor(totalSeconds / 3600)
      const minutes = Math.floor((totalSeconds % 3600) / 60)
      const seconds = totalSeconds % 60

      setState({
        hours,
        minutes,
        seconds,
        isExpired: false,
        totalSeconds
      })
    }

    // Initial update
    updateCountdown()

    // Update every second
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [getStoredEndTime, setStoredEndTime])

  return { ...state, reset }
}

// Helper to check if bonus is available
export function useBonusEligibility(): boolean {
  const { isExpired } = useCountdown()
  return !isExpired
}

// Format time with leading zeros
export function formatTime(value: number): string {
  return value.toString().padStart(2, '0')
}
