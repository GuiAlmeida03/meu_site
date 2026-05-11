import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Awards from './components/Awards'
import Stats from './components/Stats'
import Timeline from './components/Timeline'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import CurrentlyBuilding from './components/CurrentlyBuilding'
import Footer from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'

const Sep = ({ color = 'purple' }) => (
  <div className="max-w-6xl mx-auto px-6">
    <div className={`h-px bg-gradient-to-r from-transparent via-${color}-500/20 to-transparent`} />
  </div>
)

export default function App() {
  useScrollReveal()

  return (
    <div className="scanline bg-void min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Sep color="yellow" />
        <Awards />
        <Sep color="purple" />
        <Timeline />
        <Sep color="blue" />
        <About />
        <Sep color="blue" />
        <Projects />
        <Sep color="cyan" />
        <Skills />
        <Sep color="red" />
        <Certifications />
        <Sep color="purple" />
        <CurrentlyBuilding />
      </main>
      <Footer />
    </div>
  )
}
