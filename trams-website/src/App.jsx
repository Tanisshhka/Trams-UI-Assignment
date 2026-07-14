import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import WhatWeCanDo from './components/WhatWeCanDo'
import Portfolio from './components/Portfolio'
import CustomerValue from './components/CustomerValue'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import LoadingScreen from './components/LoadingScreen'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <CustomCursor />
      {isLoading && <LoadingScreen />}

      <div className={isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100 transition-opacity duration-700'}>
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Services />
          <WhatWeCanDo />
          <Portfolio />
          <CustomerValue />
        </main>
        <Footer />
      </div>

      <ScrollToTop />
    </>
  )
}
