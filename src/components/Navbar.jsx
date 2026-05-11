import { useState, useEffect } from 'react'
import { Menu, X, Cpu, Globe, Sun, Moon } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { t } from '../i18n/translations'

export default function Navbar() {
  const { lang, toggle: toggleLang } = useLang()
  const { theme, toggle: toggleTheme } = useTheme()
  const tr = t[lang].nav

  const navLinks = [
    { label: tr.inicio,        href: '#hero' },
    { label: tr.conquistas,    href: '#awards' },
    { label: tr.trajetoria,    href: '#timeline' },
    { label: tr.projetos,      href: '#projects' },
    { label: tr.competencias,  href: '#skills' },
    { label: tr.certificacoes, href: '#certifications' },
    { label: tr.contato,       href: '#contact' },
  ]

  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive]         = useState('#hero')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map(l => document.querySelector(l.href))
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) setActive('#' + e.target.id) }) },
      { threshold: 0.4 }
    )
    sections.forEach(s => s && observer.observe(s))
    return () => observer.disconnect()
  }, [lang])

  const handleNav = (href) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const btnClass = 'flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-purple-600/25 bg-purple-600/8 text-purple-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-600/15 transition-all text-xs font-mono font-medium'

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 bg-void/80 backdrop-blur-xl border-b border-purple-600/10' : 'py-5 bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNav('#hero')} className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600 group-hover:shadow-[0_0_16px_rgba(124,58,237,0.6)] transition-shadow duration-300">
              <Cpu size={16} className="text-white" />
            </div>
            <span className="font-display font-bold text-sm tracking-wide text-slate-200 group-hover:text-white transition-colors">
              GH<span className="text-purple-400">.</span>dev
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`relative px-3 py-2 text-xs font-body font-medium rounded-lg transition-all duration-200 ${
                    active === link.href ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {active === link.href && <span className="absolute inset-0 rounded-lg bg-purple-600/15 border border-purple-600/20" />}
                  <span className="relative">{link.label}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className={btnClass}
              title={theme === 'dark' ? 'Modo claro' : 'Modo escuro'}
            >
              {theme === 'dark'
                ? <Sun size={13} className="text-yellow-400" />
                : <Moon size={13} className="text-purple-400" />
              }
            </button>

            {/* Language toggle */}
            <button onClick={toggleLang} className={btnClass} title="Toggle language">
              <Globe size={13} />
              {lang === 'pt' ? 'EN' : 'PT'}
            </button>

            {/* Mobile menu */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-purple-600/10 transition-all"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-void/90 backdrop-blur-lg" onClick={() => setMobileOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-72 bg-void-2 border-l border-purple-600/20 flex flex-col pt-24 px-6 transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <ul className="flex flex-col gap-2 mb-8">
            {navLinks.map(link => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-display font-medium text-base transition-all duration-200 ${
                    active === link.href ? 'text-white bg-purple-600/20 border border-purple-600/30' : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          {/* Mobile controls */}
          <div className="flex gap-2">
            <button onClick={toggleTheme} className={`${btnClass} flex-1 justify-center`}>
              {theme === 'dark' ? <><Sun size={13} className="text-yellow-400" /> Claro</> : <><Moon size={13} /> Escuro</>}
            </button>
            <button onClick={toggleLang} className={`${btnClass} flex-1 justify-center`}>
              <Globe size={13} />{lang === 'pt' ? 'EN' : 'PT'}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
