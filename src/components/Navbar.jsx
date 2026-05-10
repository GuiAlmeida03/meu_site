import { useState, useEffect } from 'react'
import { Menu, X, Cpu } from 'lucide-react'

const navLinks = [
  { label: 'Início',        href: '#hero' },
  { label: 'Conquistas',    href: '#awards' },
  { label: 'Trajetória',    href: '#timeline' },
  { label: 'Projetos',      href: '#projects' },
  { label: 'Competências',  href: '#skills' },
  { label: 'Certificações', href: '#certifications' },
  { label: 'Contato',       href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive]       = useState('#hero')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map(l => document.querySelector(l.href))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive('#' + entry.target.id)
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach(s => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNav = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 bg-void/80 backdrop-blur-xl border-b border-purple-600/10' : 'py-5 bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <button onClick={() => handleNav('#hero')} className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600 group-hover:shadow-[0_0_16px_rgba(124,58,237,0.6)] transition-shadow duration-300">
              <Cpu size={16} className="text-white" />
            </div>
            <span className="font-display font-bold text-sm tracking-wide text-slate-200 group-hover:text-white transition-colors">
              GH<span className="text-purple-400">.</span>dev
            </span>
          </button>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`relative px-3 py-2 text-xs font-body font-medium rounded-lg transition-all duration-200 ${
                    active === link.href ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {active === link.href && (
                    <span className="absolute inset-0 rounded-lg bg-purple-600/15 border border-purple-600/20" />
                  )}
                  <span className="relative">{link.label}</span>
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-purple-600/10 transition-all"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-void/90 backdrop-blur-lg" onClick={() => setMobileOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-72 bg-void-2 border-l border-purple-600/20 flex flex-col pt-24 px-6 transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-display font-medium text-base transition-all duration-200 ${
                    active === link.href
                      ? 'text-white bg-purple-600/20 border border-purple-600/30'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
