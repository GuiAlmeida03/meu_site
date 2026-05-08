import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <div className="scanline bg-void min-h-screen">
      <Navbar />

      <main>
        <Hero />

        {/* Separator */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-600/20 to-transparent" />
        </div>

        <About />

        {/* Separator */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-600/20 to-transparent" />
        </div>

        <Projects />

        {/* Separator */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        </div>

        <Skills />
      </main>

      <Footer />
    </div>
  )
}
