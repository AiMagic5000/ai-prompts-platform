'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useCountdown, formatTime } from '@/hooks/use-countdown'
import { Flame, Clock, Gift, AlertTriangle } from 'lucide-react'

interface CountdownTimerProps {
  variant?: 'header' | 'banner' | 'inline' | 'card'
  className?: string
  showBonus?: boolean
}

export function CountdownTimer({
  variant = 'header',
  className = '',
  showBonus = true
}: CountdownTimerProps) {
  const { hours, minutes, seconds, isExpired, totalSeconds } = useCountdown()

  // Urgency levels based on time remaining
  const isUrgent = totalSeconds < 1800 // Less than 30 minutes
  const isCritical = totalSeconds < 600 // Less than 10 minutes

  if (variant === 'header') {
    return (
      <AnimatePresence mode="wait">
        {!isExpired ? (
          <motion.div
            key="countdown-active"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${
              isCritical
                ? 'bg-red-500/10 border border-red-500/30'
                : isUrgent
                  ? 'bg-orange-500/10 border border-orange-500/30'
                  : 'bg-amber-500/10 border border-amber-500/30'
            } ${className}`}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Flame className={`w-4 h-4 ${
                isCritical ? 'text-red-500' : isUrgent ? 'text-orange-500' : 'text-amber-500'
              }`} />
            </motion.div>
            <span className="text-sm font-semibold text-white drop-shadow-sm">
              Bonus expires in:
            </span>
            <div className="flex items-center gap-1 font-mono font-bold text-sm">
              <TimeBlock value={hours} isCritical={isCritical} isUrgent={isUrgent} />
              <span className={isCritical ? 'text-red-400' : isUrgent ? 'text-orange-400' : 'text-amber-400'}>:</span>
              <TimeBlock value={minutes} isCritical={isCritical} isUrgent={isUrgent} />
              <span className={isCritical ? 'text-red-400' : isUrgent ? 'text-orange-400' : 'text-amber-400'}>:</span>
              <TimeBlock value={seconds} isCritical={isCritical} isUrgent={isUrgent} animate />
            </div>
            {showBonus && (
              <span className="hidden sm:inline text-xs font-bold text-white bg-amber-500 px-2 py-0.5 rounded-full ml-1">
                +500 FREE prompts!
              </span>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="countdown-expired"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 ${className}`}
          >
            <Clock className="w-4 h-4 text-slate-400" />
            <span className="text-sm text-slate-600">
              Bonus period ended
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    )
  }

  if (variant === 'banner') {
    return (
      <AnimatePresence mode="wait">
        {!isExpired ? (
          <motion.div
            key="banner-active"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`w-full bg-gradient-to-r ${
              isCritical
                ? 'from-red-600 to-red-500'
                : isUrgent
                  ? 'from-orange-600 to-amber-500'
                  : 'from-amber-600 to-yellow-500'
            } text-white py-3 ${className}`}
          >
            <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                >
                  <Gift className="w-5 h-5" />
                </motion.div>
                <span className="font-bold text-sm sm:text-base">
                  LIMITED TIME BONUS!
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm">Get +500 EXTRA prompts FREE!</span>
                <div className="flex items-center gap-2 bg-black/20 rounded-lg px-3 py-1">
                  <span className="text-xs opacity-80">Expires in:</span>
                  <div className="flex items-center gap-1 font-mono font-bold">
                    <span>{formatTime(hours)}</span>
                    <span className="animate-pulse">:</span>
                    <span>{formatTime(minutes)}</span>
                    <span className="animate-pulse">:</span>
                    <span>{formatTime(seconds)}</span>
                  </div>
                </div>
              </div>

              {isCritical && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-1 text-white font-bold"
                >
                  <AlertTriangle className="w-4 h-4" />
                  <span className="text-sm">HURRY!</span>
                </motion.div>
              )}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    )
  }

  if (variant === 'card') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl p-6 ${className}`}
      >
        <div className="flex items-center gap-2 mb-4">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Gift className="w-6 h-6 text-amber-500" />
          </motion.div>
          <h3 className="text-lg font-bold text-slate-900">
            {isExpired ? 'Bonus Expired' : 'Limited Time Bonus'}
          </h3>
        </div>

        {!isExpired ? (
          <>
            <p className="text-slate-700 mb-4">
              Purchase now and get <strong className="text-amber-600">500 EXTRA prompts FREE!</strong>
            </p>

            <div className="flex justify-center gap-4">
              <TimeUnit value={hours} label="Hours" />
              <TimeUnit value={minutes} label="Minutes" />
              <TimeUnit value={seconds} label="Seconds" animate />
            </div>

            <div className="mt-4 text-center text-sm text-amber-700">
              Total Value: $438+ for just $39
            </div>
          </>
        ) : (
          <p className="text-slate-600">
            The bonus period has ended. You can still get 500 expert prompts for $39.
          </p>
        )}
      </motion.div>
    )
  }

  // Inline variant
  return (
    <span className={`inline-flex items-center gap-1 font-mono ${className}`}>
      {!isExpired ? (
        <>
          <span className={isCritical ? 'text-red-500' : isUrgent ? 'text-orange-500' : 'text-amber-500'}>
            {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
          </span>
        </>
      ) : (
        <span className="text-slate-500">Expired</span>
      )}
    </span>
  )
}

// Sub-components
function TimeBlock({
  value,
  isCritical,
  isUrgent,
  animate = false
}: {
  value: number
  isCritical: boolean
  isUrgent: boolean
  animate?: boolean
}) {
  return (
    <motion.span
      key={value}
      initial={animate ? { scale: 1.2 } : undefined}
      animate={animate ? { scale: 1 } : undefined}
      className={`px-1.5 py-0.5 rounded ${
        isCritical
          ? 'bg-red-500 text-white'
          : isUrgent
            ? 'bg-orange-500 text-white'
            : 'bg-white/90 text-slate-900'
      }`}
    >
      {formatTime(value)}
    </motion.span>
  )
}

function TimeUnit({
  value,
  label,
  animate = false
}: {
  value: number
  label: string
  animate?: boolean
}) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        key={value}
        initial={animate ? { scale: 1.1 } : undefined}
        animate={animate ? { scale: 1 } : undefined}
        className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-amber-200 shadow-sm"
      >
        <span className="text-2xl font-bold font-mono text-slate-900">
          {formatTime(value)}
        </span>
      </motion.div>
      <span className="text-xs text-slate-500 mt-1">{label}</span>
    </div>
  )
}
