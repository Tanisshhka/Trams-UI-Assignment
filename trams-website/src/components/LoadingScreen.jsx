import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsComplete(true), 400)
          return 100
        }
        const remaining = 100 - prev
        return prev + Math.max(remaining * 0.12, Math.random() * 8 + 3)
      })
    }, 60)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[100] bg-dark flex flex-col items-center justify-center"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0 bg-mesh opacity-50" />

          <motion.div
            className="relative text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, letterSpacing: '0.3em' }}
              animate={{ opacity: 1, scale: 1, letterSpacing: '-0.02em' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[40px] md:text-[48px] font-bold tracking-tight text-white"
            >
              trams<span className="text-purple">.</span>
            </motion.div>

            <div className="mt-10 w-[240px] h-[2px] bg-white/[0.06] rounded-full relative overflow-hidden mx-auto">
              <motion.div
                className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-purple via-coral to-amber"
                initial={{ width: '0%' }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <motion.span
              className="block mt-4 text-[11px] font-medium tracking-[0.2em] uppercase text-white/20 tabular-nums"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {Math.min(Math.round(progress), 100)}%
            </motion.span>
          </motion.div>

          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[300px] h-[300px] rounded-full blur-[120px]"
              style={{
                background: ['rgba(139,92,246,0.06)', 'rgba(249,112,102,0.05)', 'rgba(6,182,212,0.04)', 'rgba(245,158,11,0.04)', 'rgba(16,185,129,0.03)', 'rgba(167,139,250,0.05)'][i],
                top: `${10 + (i * 15)}%`,
                left: `${10 + (i * 14)}%`,
              }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
