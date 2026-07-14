import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const portfolioItems = [
  {
    title: 'Financial Services Platform',
    category: 'Digital Transformation',
    year: '2024',
    description: 'A comprehensive digital platform transforming how users interact with financial services.',
    accent: 'purple',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80',
  },
  {
    title: 'Healthcare Analytics Suite',
    category: 'Data & Analytics',
    year: '2024',
    description: 'Real-time analytics dashboard empowering healthcare providers with actionable insights.',
    accent: 'coral',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop&q=80',
  },
  {
    title: 'Retail Cloud Migration',
    category: 'Cloud & Infrastructure',
    year: '2023',
    description: 'End-to-end cloud migration reducing infrastructure costs by 60% while improving performance.',
    accent: 'cyan',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop&q=80',
  },
]

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="work" className="relative py-24 md:py-36 bg-dark overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-purple/[0.04] blur-[150px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-coral/[0.03] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16" ref={ref}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-emerald mb-5">
              <span className="w-8 h-px bg-gradient-to-r from-emerald to-transparent" />
              Featured Work
            </span>
            <h2 className="text-[30px] md:text-[38px] lg:text-[44px] font-bold leading-[1.1] tracking-tight text-white">
              Where ideas become{' '}
              <br className="hidden md:block" />
              <span className="italic font-light gradient-text">reality</span>
            </h2>
          </motion.div>

          <motion.a
            href="#work"
            onClick={(e) => e.preventDefault()}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="group inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-white/25 text-[13px] font-medium text-white/50 hover:text-white rounded-full hover:bg-white/[0.04] transition-all duration-300"
          >
            View all projects
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </div>

        <div className="space-y-5 md:space-y-6">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 cursor-pointer">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                  <div className="md:col-span-5 h-[200px] md:h-[300px] relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark/80 hidden md:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent md:hidden" />
                  </div>

                  <div className="md:col-span-7 p-7 md:p-10 flex flex-col justify-center relative">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-purple-light/60">
                        {item.category}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span className="text-[10px] font-light text-white/25">{item.year}</span>
                    </div>
                    <h3 className="text-[22px] md:text-[26px] lg:text-[30px] font-bold text-white leading-snug mb-3 group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-[14px] font-light text-white/35 leading-relaxed mb-6 max-w-[400px]">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 text-[13px] font-semibold text-white/50 group-hover:text-white transition-all duration-300">
                      <span>View project</span>
                      <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
