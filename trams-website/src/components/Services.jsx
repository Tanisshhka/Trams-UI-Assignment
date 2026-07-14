import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Zap, Globe, Cloud, BarChart3 } from 'lucide-react'

const services = [
  {
    number: '01',
    icon: Zap,
    title: 'Transform your IT for tomorrow\'s challenges',
    description: 'Modernize your technology infrastructure to stay ahead in a rapidly evolving digital landscape.',
    gradient: 'from-purple to-purple-deep',
    bgGlow: 'rgba(139,92,246,0.08)',
  },
  {
    number: '02',
    icon: Globe,
    title: 'Digital strategy and solutions',
    description: 'Craft comprehensive digital strategies that align with your business objectives and drive growth.',
    gradient: 'from-coral to-amber',
    bgGlow: 'rgba(249,112,102,0.08)',
  },
  {
    number: '03',
    icon: Cloud,
    title: 'Cloud and Infrastructure',
    description: 'Build resilient, scalable cloud architectures that reduce costs and accelerate innovation.',
    gradient: 'from-cyan to-emerald',
    bgGlow: 'rgba(6,182,212,0.08)',
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Data and Analytics',
    description: 'Unlock actionable insights from your data to make informed decisions and discover new opportunities.',
    gradient: 'from-amber to-coral',
    bgGlow: 'rgba(245,158,11,0.08)',
  },
]

function CountUp({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!inView) return
    const end = parseInt(target)
    const duration = 2000
    const increment = end / (duration / 16)
    let start = 0
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="services" className="relative py-24 md:py-36 bg-dark overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-[20%] right-0 w-[400px] h-[400px] rounded-full bg-purple/[0.03] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-purple-light mb-5">
              <span className="w-8 h-px bg-gradient-to-r from-purple to-transparent" />
              Services
            </span>
            <h2 className="text-[30px] md:text-[38px] lg:text-[44px] font-bold leading-[1.1] tracking-tight text-white">
              Services we can{' '}
              <br className="hidden md:block" />
              help you{' '}
              <span className="gradient-text italic font-light">transform</span>
            </h2>
            <p className="mt-6 text-[15px] font-light text-white/40 leading-relaxed max-w-[360px]">
              We deliver end-to-end solutions that drive real business outcomes across every touchpoint.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { value: '150', suffix: '+', label: 'Projects' },
                { value: '98', suffix: '%', label: 'Satisfaction' },
                { value: '12', suffix: '+', label: 'Years' },
                { value: '40', suffix: '+', label: 'Team' },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-[24px] md:text-[28px] font-bold text-white">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[11px] font-medium text-white/30 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-8">
            <div className="space-y-3">
              {services.map((service, i) => {
                const Icon = service.icon
                const isHovered = hoveredIndex === i

                return (
                  <motion.div
                    key={service.number}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="group relative p-6 md:p-8 rounded-2xl border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 cursor-pointer overflow-hidden"
                    style={{ backgroundColor: isHovered ? service.bgGlow : 'transparent' }}
                  >
                    <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[80px]"
                      style={{ background: service.bgGlow }}
                    />

                    <div className="relative flex items-start gap-5 md:gap-6">
                      <div className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300`}>
                        <Icon size={20} className="text-white" strokeWidth={1.5} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <span className="text-[11px] font-medium text-white/20">{service.number}</span>
                            <h3 className="text-[18px] md:text-[20px] font-semibold text-white/80 group-hover:text-white leading-snug transition-colors duration-300">
                              {service.title}
                            </h3>
                          </div>
                          <div className={`shrink-0 w-10 h-10 rounded-full border border-white/10 group-hover:border-white/20 flex items-center justify-center transition-all duration-300 ${isHovered ? 'bg-white/10 scale-110' : ''}`}>
                            <ArrowUpRight size={16} className="text-white/30 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </div>
                        </div>
                        <p className="mt-2.5 text-[14px] font-light text-white/30 leading-relaxed max-w-[500px] max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
