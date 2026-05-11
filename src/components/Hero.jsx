import { useEffect, useRef, useState } from 'react'
import { ArrowDown, Github, Sparkles, Terminal, ChevronRight, User, Download } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import { t } from '../i18n/translations'
import { useTypewriter } from '../hooks/useTypewriter'
import profilePhoto from '../assets/profile.jpg'

function ProfilePhoto({ available }) {
  const [imgError, setImgError] = useState(false)
  const Placeholder = () => (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-900/60 to-blue-900/60">
      <User size={64} className="text-purple-300/60 mb-2" />
    </div>
  )
  return (
    <div className="relative flex-shrink-0 animate-fade-in">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 blur-2xl opacity-30 scale-110 animate-pulse-slow" />
      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 opacity-60 animate-glow" />
      <div className="absolute -inset-3 rounded-full border border-dashed border-purple-500/30" style={{ animation: 'spin 20s linear infinite' }} />
      <div className="absolute -inset-5 rounded-full border border-dashed border-blue-500/15" style={{ animation: 'spin 30s linear infinite reverse' }} />
      <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-purple-500/40 bg-void-3 shadow-2xl">
        {profilePhoto && !imgError
          ? <img src={profilePhoto} alt="Guilherme Henrique" className="w-full h-full object-cover object-center" onError={() => setImgError(true)} />
          : <Placeholder />}
      </div>
      <div className="absolute bottom-2 right-2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-void border border-emerald-500/40 shadow-lg">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[10px] font-mono text-emerald-300 font-medium">{available}</span>
      </div>
    </div>
  )
}

export default function Hero() {
  const { lang } = useLang()
  const tr = t[lang].hero
  const canvasRef = useRef(null)
  const typed = useTypewriter(tr.typewriter)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId, particles = []
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; init() }
    const init = () => {
      particles = Array.from({ length: 80 }, () => ({
        x: Math.random() * canvas.width, y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.3, vx: (Math.random() - 0.5) * 0.15, vy: (Math.random() - 0.5) * 0.15,
        alpha: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.5 ? '124,58,237' : Math.random() > 0.5 ? '37,99,235' : '6,182,212',
      }))
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 140) { ctx.beginPath(); ctx.strokeStyle = `rgba(124,58,237,${0.08 * (1 - dist / 140)})`; ctx.lineWidth = 0.6; ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke() }
        }
      }
      particles.forEach(p => {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(${p.color},${p.alpha})`; ctx.fill()
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
      })
      animId = requestAnimationFrame(draw)
    }
    resize(); draw()
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100" style={{ maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)' }} />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-600/10 blur-[100px] animate-pulse-slow animate-delay-300" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <ProfilePhoto available={tr.available} />

          <div className="flex-1 text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-600/30 bg-purple-600/10 text-purple-300 text-xs font-mono mb-6 animate-fade-in">
              <Sparkles size={12} className="text-cyan-400" />
              <span>{tr.badge}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </div>

            {/* Name */}
            <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight mb-5 animate-slide-up">
              <span className="block text-white">Guilherme</span>
              <span className="block text-gradient">Henrique</span>
            </h1>

            {/* Typewriter subtitle */}
            <div className="flex items-center justify-center md:justify-start gap-3 mb-5 animate-slide-up animate-delay-100 min-h-[1.75rem]">
              <Terminal size={15} className="text-cyan-400 shrink-0" />
              <p className="font-mono text-cyan-300 text-sm md:text-base tracking-widest uppercase">
                {typed}
                <span className="inline-block w-0.5 h-4 bg-cyan-400 ml-0.5 animate-pulse align-middle" />
              </p>
            </div>

            {/* Description */}
            <p className="font-body text-slate-400 text-lg max-w-xl mb-10 leading-relaxed animate-slide-up animate-delay-200 mx-auto md:mx-0">
              {tr.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-slide-up animate-delay-300">
              <button onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary group">
                {tr.btnProjects}
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
              <a href={`${import.meta.env.BASE_URL}curriculo-guilherme.pdf`} download="Curriculo_Guilherme_Henrique.pdf" className="btn-secondary group">
                <Download size={16} /> {tr.btnCV}
              </a>
              <a href="https://github.com/GuiAlmeida03" target="_blank" rel="noopener noreferrer" className="btn-secondary group">
                <Github size={16} /> GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Scroll */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <span className="text-xs font-mono text-slate-500 tracking-widest uppercase">{tr.scroll}</span>
          <ArrowDown size={14} className="text-purple-400" />
        </div>
      </div>
    </section>
  )
}
