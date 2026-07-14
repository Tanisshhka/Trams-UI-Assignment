import { useState, useEffect } from 'react'

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return progress
}

export function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState('up')
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    let lastScroll = window.scrollY

    const handleScroll = () => {
      const current = window.scrollY
      setIsAtTop(current < 10)
      setScrollDir(current > lastScroll ? 'down' : 'up')
      lastScroll = current
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { scrollDir, isAtTop }
}
