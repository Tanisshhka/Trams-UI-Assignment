import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const stats = [
  { value: 150, suffix: '+', label: 'Projects delivered', color: 'text-purple' },
  { value: 98, suffix: '%', label: 'Client satisfaction', color: 'text-coral' },
  { value: 12, suffix: '+', label: 'Years of experience', color: 'text-cyan' },
  { value: 40, suffix: '+', label: 'Team members', color: 'text-amber' },
]

function AnimatedCounter({ value, suffix, inView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let current = 0
    const end = value
    const duration = 2000
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

export default function CustomerValue() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="relative py-24 md:py-36 bg-dark overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] rounded-full bg-amber/[0.03] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-amber mb-5">
              <span className="w-8 h-px bg-gradient-to-r from-amber to-transparent" />
              About Us
            </span>
            <h2 className="text-[30px] md:text-[38px] lg:text-[44px] font-bold leading-[1.1] tracking-tight text-white">
              We create a{' '}
              <span className="gradient-text italic font-light">customer-centric</span>{' '}
              approach
            </h2>
            <p className="mt-6 text-[15px] font-light text-white/40 leading-relaxed max-w-[420px]">
              Our methodology puts the end user at the heart of every decision. We combine deep industry expertise with cutting-edge technology to deliver solutions that truly matter.
            </p>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="group inline-flex items-center gap-3 mt-8 px-8 py-4 bg-gradient-to-r from-amber to-coral text-dark text-[14px] font-semibold rounded-full hover:shadow-[0_0_40px_rgba(245,158,11,0.3)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Work with us
              <ArrowUpRight size={16} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="group p-6 md:p-8 rounded-2xl border border-white/[0.06] hover:border-white/[0.12] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 cursor-default"
                >
                  <div className={`text-[36px] md:text-[42px] font-bold ${stat.color} leading-none`}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
                  </div>
                  <p className="mt-3 text-[13px] md:text-[14px] font-light text-white/35">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
