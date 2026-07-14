import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  Company: ['About', 'Careers', 'Culture', 'Contact'],
  Services: ['Digital Transformation', 'Cloud & Infrastructure', 'Data & Analytics', 'Strategy & Design'],
  Resources: ['Blog', 'Case Studies', 'Insights', 'Events'],
}

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
      setEmail('')
    }
  }

  return (
    <footer id="contact" ref={ref}>
      <section className="relative py-24 md:py-36 bg-sage overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-purple/[0.06] blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-sage-dark/30 blur-[100px]" />
          <svg className="absolute top-[10%] left-[5%] w-[200px] h-[200px] opacity-[0.06] animate-spin-slow" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" stroke="#111" strokeWidth="0.5" fill="none" />
            <circle cx="100" cy="100" r="60" stroke="#111" strokeWidth="0.3" fill="none" strokeDasharray="4 6" />
          </svg>
          <svg className="absolute bottom-[10%] right-[10%] w-[150px] h-[150px] opacity-[0.04]" viewBox="0 0 150 150">
            <rect x="25" y="25" width="100" height="100" rx="20" stroke="#111" strokeWidth="0.5" fill="none" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-[640px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-dark/40 mb-5">
                <span className="w-8 h-px bg-gradient-to-r from-dark/30 to-transparent" />
                Stay Connected
              </span>
              <h2 className="text-[32px] md:text-[42px] lg:text-[50px] font-bold leading-[1.08] tracking-tight text-dark">
                Subscribe to{' '}
                <br className="hidden sm:block" />
                our <span className="italic font-light">newsletter</span>
              </h2>
              <p className="mt-5 text-[15px] font-light text-dark/50 leading-relaxed">
                Get the latest insights, case studies, and industry trends delivered to your inbox.
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col sm:flex-row items-center gap-3 max-w-[500px] mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="relative flex-1 w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-6 py-4 rounded-full bg-white/60 border border-dark/10 text-[14px] font-light text-dark placeholder:text-dark/40 outline-none focus:border-dark/25 focus:ring-2 focus:ring-dark/5 focus:bg-white transition-all duration-300"
                  aria-label="Email address"
                />
              </div>
              <button
                type="submit"
                className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-dark text-white text-[14px] font-semibold rounded-full hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:scale-105 active:scale-95 transition-all duration-300"
                aria-label="Subscribe to newsletter"
              >
                {submitted ? (
                  <>
                    <span>Subscribed!</span>
                    <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-emerald">✓</motion.span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <Send size={14} strokeWidth={2.5} />
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      <section className="relative py-14 md:py-16 bg-dark border-t border-white/[0.04]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            <div className="lg:col-span-4">
              <span className="text-[24px] font-bold tracking-tight text-white">
                trams<span className="text-purple">.</span>
              </span>
              <p className="mt-4 text-[14px] font-light text-white/35 leading-relaxed max-w-[300px]">
                The thinkers and disruptors challenging the status quo. We create meaningful change through strategy, design, and technology.
              </p>
              <div className="flex items-center gap-5 mt-6">
                {['LinkedIn', 'Twitter', 'Dribbble'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="group flex items-center gap-1.5 text-[13px] font-medium text-white/30 hover:text-white transition-colors duration-300"
                    aria-label={social}
                  >
                    {social}
                    <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="lg:col-span-2">
                <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/50 mb-5">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="text-[14px] font-light text-white/30 hover:text-white transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[12px] font-light text-white/20">
              &copy; 2024 Trams. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                <a
                  key={link}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-[12px] font-light text-white/20 hover:text-white/50 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}
