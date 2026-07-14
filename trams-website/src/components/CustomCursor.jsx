import { useState, useEffect, useCallback, useRef } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const trailRef = useRef({ x: -100, y: -100 })
  const rafRef = useRef(null)

  useEffect(() => {
    const ua = navigator.userAgent
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)
    const hasTouch = 'ontouchstart' in window && navigator.maxTouchPoints > 0
    setIsDesktop(!isMobile && (!hasTouch || window.innerWidth > 1024))
  }, [])

  const handleMouseMove = useCallback((e) => {
    setPosition({ x: e.clientX, y: e.clientY })
    setIsVisible(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false)
  }, [])

  useEffect(() => {
    if (!isDesktop) return

    document.body.style.cursor = 'none'

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    const checkHover = (e) => {
      const target = e.target
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, [data-cursor-hover]')
      setIsHovering(!!isInteractive)
    }

    document.addEventListener('mouseover', checkHover)

    return () => {
      document.body.style.cursor = ''
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseover', checkHover)
    }
  }, [isDesktop, handleMouseMove, handleMouseLeave])

  useEffect(() => {
    if (!isDesktop) return

    const animate = () => {
      trailRef.current.x += (position.x - trailRef.current.x) * 0.15
      trailRef.current.y += (position.y - trailRef.current.y) * 0.15
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [isDesktop, position])

  if (!isDesktop) return null

  const dotSize = isHovering ? 0 : 6
  const ringSize = isHovering ? 48 : 36

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>

      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full border border-white"
        animate={{
          x: position.x - ringSize / 2,
          y: position.y - ringSize / 2,
          width: ringSize,
          height: ringSize,
          opacity: isVisible ? 1 : 0,
          borderColor: isHovering ? 'rgba(139,92,246,0.8)' : 'rgba(255,255,255,0.4)',
          backgroundColor: isHovering ? 'rgba(139,92,246,0.1)' : 'transparent',
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 24,
          mass: 0.4,
        }}
      />

      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-white"
        animate={{
          x: position.x - dotSize / 2,
          y: position.y - dotSize / 2,
          width: dotSize,
          height: dotSize,
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 600,
          damping: 30,
          mass: 0.3,
        }}
      />
    </>
  )
}
