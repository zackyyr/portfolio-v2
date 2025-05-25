import './App.css'
import About from './components/About'
import Header from './components/Header'
import Hero from './components/Hero'
import Work from './components/Work'
import Education from './components/Education'
import Skill from './components/Skill'
import Project from './components/Project'
import CTA from './components/CTA'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

function App() {
  const smootherRef = useRef()

  useEffect(() => {
    // Inisialisasi scroll smoother
    smootherRef.current = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5, // kehalusan scroll
      effects: true // aktifkan efek untuk animasi parallax, dsb
    })

    return () => {
      // Bersihkan saat unmount
      smootherRef.current?.kill()
    }
  }, [])

  return (
    <div id="smooth-wrapper">
      <Header />
      <div id="smooth-content">
        <main>
          <Hero />
          <About />
          <Work />
          <Education />
          <Skill />
          <Project />
          <CTA />
        </main>
      </div>
    </div>
  )
}

export default App
