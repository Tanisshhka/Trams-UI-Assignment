import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'

const teamMembers = [
  { name: 'Sarah Chen', role: 'CEO', color: 'from-purple to-purple-deep', size: 'w-24 h-24 md:w-36 md:h-36', pos: 'top-[5%] right-[18%]' },
  { name: 'James Miller', role: 'CTO', color: 'from-coral to-amber', size: 'w-20 h-20 md:w-28 md:h-28', pos: 'top-[30%] right-[48%]' },
  { name: 'Maria Santos', role: 'Design Lead', color: 'from-emerald to-cyan', size: 'w-28 h-28 md:w-40 md:h-40', pos: 'top-[8%] right-[55%]' },
  { name: 'Alex Kim', role: 'Engineer', color: 'from-cyan to-purple', size: 'w-16 h-16 md:w-24 md:h-24', pos: 'bottom-[22%] right-[12%]' },
  { name: 'David Park', role: 'Strategy', color: 'from-amber to-coral', size: 'w-22 h-22 md:w-32 md:h-32', pos: 'bottom-[8%] right-[38%]' },
  { name: 'Emma Wilson', role: 'Analytics', color: 'from-purple-light to-cyan', size: 'w-18 h-18 md:w-26 md:h-26', pos: 'top-[48%] right-[5%]' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
}

const textVariants = {
  hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}

const blobVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-dark" id="hero">
      <motion.div className="absolute inset-0" style={{ opacity }}>
        <div className="absolute inset-0 bg-mesh" />

        <motion.div
          variants={blobVariants}
          initial="hidden"
          animate="visible"
          className="absolute -top-[200px] -left-[200px] w-[600px] h-[600px] rounded-full bg-purple/[0.07] blur-[120px] animate-blob"
        />
        <motion.div
          variants={blobVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="absolute -bottom-[150px] -right-[150px] w-[500px] h-[500px] rounded-full bg-coral/[0.06] blur-[100px] animate-blob"
          style={{ animationDelay: '3s' }}
        />
        <motion.div
          variants={blobVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="absolute top-[30%] left-[40%] w-[300px] h-[300px] rounded-full bg-cyan/[0.05] blur-[80px] animate-blob"
          style={{ animationDelay: '5s' }}
        />

        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.1, 0.5, 0.1], scale: [1, 1.5, 1] }}
            transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3 }}
          />
        ))}

        <svg className="absolute top-[10%] right-[10%] w-[400px] h-[400px] opacity-[0.03] animate-spin-slow" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="0.5" fill="none" />
          <circle cx="200" cy="200" r="140" stroke="white" strokeWidth="0.3" fill="none" strokeDasharray="8 8" />
          <circle cx="200" cy="200" r="100" stroke="white" strokeWidth="0.3" fill="none" />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 w-full pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[75vh]">
          <motion.div className="lg:col-span-5 xl:col-span-5" style={{ y: y2 }}>
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <motion.div variants={textVariants} className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-semibold tracking-[0.15em] uppercase text-purple-light">
                  <Sparkles size={12} />
                  Trams Agency
                </span>
              </motion.div>

              <motion.h1 variants={textVariants} className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[78px] font-bold leading-[1.02] tracking-tight text-white">
                The thinkers{' '}
                <br className="hidden sm:block" />
                and{' '}
                <span className="relative inline-block">
                  disruptors
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[3px] bg-gradient-to-r from-purple via-coral to-amber rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 1.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  />
                </span>
                <br className="hidden md:block" />
                challenging{' '}
                <br className="hidden sm:block" />
                the{' '}
                <span className="gradient-text">status quo</span>
              </motion.h1>

              <motion.p variants={textVariants} className="mt-8 text-[15px] md:text-[16px] font-light text-white/40 max-w-[420px] leading-relaxed">
                We partner with ambitious organizations to create meaningful change through strategy, design, and technology.
              </motion.p>

              <motion.div variants={textVariants} className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#services"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple to-purple-deep text-white text-[14px] font-semibold rounded-full hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Explore our work
                  <ArrowUpRight size={16} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="inline-flex items-center gap-2 px-8 py-4 text-[14px] font-medium text-white/50 hover:text-white border border-white/10 hover:border-white/25 rounded-full hover:bg-white/[0.04] transition-all duration-300"
                >
                  Get in touch
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div className="lg:col-span-7 xl:col-span-7 relative h-[380px] md:h-[480px] lg:h-[560px]" style={{ y: y1 }}>
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative w-full h-full">
              {teamMembers.map((member, i) => (
                <motion.div
                  key={member.name}
                  variants={{
                    hidden: { opacity: 0, scale: 0.3, y: 40 },
                    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  className={`absolute ${member.size} ${member.pos}`}
                >
                  <motion.div
                    className="w-full h-full rounded-full relative group"
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                    <div className="absolute inset-[3px] rounded-full bg-dark-card/80 backdrop-blur-sm border border-white/10 group-hover:border-white/25 transition-all duration-500 flex flex-col items-center justify-center">
                      <span className="text-[10px] md:text-[12px] font-semibold text-white/80">{member.name.split(' ')[0]}</span>
                      <span className="text-[8px] md:text-[9px] font-light text-white/30 mt-0.5">{member.role}</span>
                    </div>

                    <motion.div
                      className="absolute inset-0 rounded-full"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 4 + i * 0.7, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                    />
                  </motion.div>
                </motion.div>
              ))}

              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 0.04, rotate: 0 }}
                transition={{ duration: 2, delay: 1 }}
              >
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="0.5" fill="none" />
                  <circle cx="200" cy="200" r="150" stroke="white" strokeWidth="0.3" fill="none" strokeDasharray="4 8" />
                  <circle cx="200" cy="200" r="120" stroke="white" strokeWidth="0.3" fill="none" />
                  <line x1="200" y1="20" x2="200" y2="380" stroke="white" strokeWidth="0.2" />
                  <line x1="20" y1="200" x2="380" y2="200" stroke="white" strokeWidth="0.2" />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/20">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
