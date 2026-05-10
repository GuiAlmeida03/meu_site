import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Awards from './components/Awards'
import Stats from './components/Stats'
import Timeline from './components/Timeline'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Footer from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <div className="scanline bg-void min-h-screen">
      <Navbar />

      <main>
        <Hero />

        {/* Stats logo abaixo do Hero para impacto imediato */}
        <Stats />

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />
        </div>

        <Awards />

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-600/20 to-transparent" />
        </div>

        <Timeline />

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-600/20 to-transparent" />
        </div>

        <About />

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-600/20 to-transparent" />
        </div>

        <Projects />

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        </div>

        <Skills />

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-red-500/15 to-transparent" />
        </div>

        <Certifications />
      </main>

      <Footer />
    </div>
  )
}
