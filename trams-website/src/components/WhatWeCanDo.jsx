import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Layers, Database, PenTool, Code2, Users, Lightbulb } from 'lucide-react'

const capabilities = [
  {
    title: 'Digital transformation',
    description: 'End-to-end digital solutions that modernize your business operations and unlock new value.',
    category: 'Strategy',
    icon: Layers,
    gradient: 'from-purple to-purple-deep',
    glow: 'rgba(139,92,246,0.15)',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Cloud & Infrastructure',
    description: 'Scalable, resilient cloud architectures for the modern enterprise.',
    category: 'Engineering',
    icon: Database,
    gradient: 'from-cyan to-emerald',
    glow: 'rgba(6,182,212,0.15)',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Data & analytics',
    description: 'Actionable insights through advanced analytics and data engineering.',
    category: 'Intelligence',
    icon: Lightbulb,
    gradient: 'from-amber to-coral',
    glow: 'rgba(245,158,11,0.15)',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Strategy & Design',
    description: 'Human-centered design that creates meaningful digital experiences.',
    category: 'Design',
    icon: PenTool,
    gradient: 'from-coral to-purple',
    glow: 'rgba(249,112,102,0.15)',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Building digital products',
    description: 'Full-cycle product development from concept to launch and beyond.',
    category: 'Development',
    icon: Code2,
    gradient: 'from-emerald to-cyan',
    glow: 'rgba(16,185,129,0.15)',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Modern workforce',
    description: 'Empower your teams with modern tools, processes, and workflows.',
    category: 'Enablement',
    icon: Users,
    gradient: 'from-purple-light to-purple',
    glow: 'rgba(167,139,250,0.15)',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&q=80',
  },
]

export default function WhatWeCanDo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [hoveredIdx, setHoveredIdx] = useState(null)

  return (
    <section id="culture" className="relative py-24 md:py-36 bg-dark overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-coral/[0.03] blur-[120px]" />
        <div className="absolute top-[10%] right-[20%] w-[300px] h-[300px] rounded-full bg-emerald/[0.03] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16" ref={ref}>
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-coral mb-5">
            <span className="w-8 h-px bg-gradient-to-r from-coral to-transparent" />
            Capabilities
          </span>
          <h2 className="text-[30px] md:text-[38px] lg:text-[44px] font-bold leading-[1.1] tracking-tight text-white">
            What we can{' '}
            <br className="hidden md:block" />
            <span className="gradient-text-cool italic font-light">do together</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon
            const isHovered = hoveredIdx === i

            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group relative rounded-2xl border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 cursor-pointer overflow-hidden"
                style={{
                  backgroundColor: isHovered ? cap.glow : 'rgba(255,255,255,0.02)',
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  boxShadow: isHovered ? `0 20px 60px ${cap.glow}` : 'none',
                }}
              >
                <div className="relative h-[180px] md:h-[200px] overflow-hidden">
                  <img
                    src={cap.image}
                    alt={cap.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />
                  <div className={`absolute top-4 left-4 w-10 h-10 rounded-lg bg-gradient-to-br ${cap.gradient} flex items-center justify-center opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 backdrop-blur-sm`}>
                    <Icon size={18} className="text-white" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="relative p-6 md:p-7">
                  <span className="inline-block text-[10px] font-semibold tracking-[0.15em] uppercase text-white/25 mb-3">
                    {cap.category}
                  </span>

                  <h3 className="text-[18px] md:text-[19px] font-semibold text-white/80 group-hover:text-white leading-snug mb-3 transition-colors duration-300">
                    {cap.title}
                  </h3>

                  <p className="text-[13px] font-light text-white/30 leading-relaxed mb-5 line-clamp-2">
                    {cap.description}
                  </p>

                  <div className="flex items-center gap-2 text-[12px] font-semibold text-white/40 group-hover:text-white/80 transition-all duration-300">
                    <span>Learn more</span>
                    <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
