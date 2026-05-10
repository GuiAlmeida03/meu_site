import { useEffect, useRef, useState } from 'react'
import profilePhoto from '../assets/profile.jpg'
import { ArrowDown, Github, Sparkles, Terminal, ChevronRight, User, Download } from 'lucide-react'

// ---------------------------------------------------------------
// FOTO DE PERFIL
// Para usar sua foto real:
//   1. Coloque o arquivo em: public/profile.jpg  (ou .png, .webp)
//   2. Troque PHOTO_SRC abaixo para: '/meu-portfolio/profile.jpg'
//      (use o mesmo nome do `base` no vite.config.js)
// ---------------------------------------------------------------
const PHOTO_SRC = profilePhoto

function ProfilePhoto() {
  const [imgError, setImgError] = useState(false)

  // --- Avatar SVG placeholder (exibido enquanto não há foto) ---
  const Placeholder = () => (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-900/60 to-blue-900/60">
      <User size={64} className="text-purple-300/60 mb-2" />
      <span className="text-[10px] font-mono text-purple-400/60 text-center px-2 leading-tight">
        Adicione sua foto em{'\n'}public/profile.jpg
      </span>
    </div>
  )

  return (
    <div className="relative flex-shrink-0 animate-fade-in">
      {/* Glow rings */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 blur-2xl opacity-30 scale-110 animate-pulse-slow" />
      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 opacity-60 animate-glow" />

      {/* Rotating dashed border */}
      <div
        className="absolute -inset-3 rounded-full border border-dashed border-purple-500/30"
        style={{ animation: 'spin 20s linear infinite' }}
      />
      <div
        className="absolute -inset-5 rounded-full border border-dashed border-blue-500/15"
        style={{ animation: 'spin 30s linear infinite reverse' }}
      />

      {/* Photo frame */}
      <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-purple-500/40 bg-void-3 shadow-2xl">
        {PHOTO_SRC && !imgError ? (
          <img
            src={PHOTO_SRC}
            alt="Guilherme Henrique"
            className="w-full h-full object-cover object-center"
            onError={() => setImgError(true)}
          />
        ) : (
          <Placeholder />
        )}
      </div>

      {/* Status badge */}
      <div className="absolute bottom-2 right-2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-void border border-emerald-500/40 shadow-lg">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[10px] font-mono text-emerald-300 font-medium">Disponível</span>
      </div>
    </div>
  )
}

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles = Array.from({ length: 80 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.3,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        alpha: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.5 ? '124,58,237' : Math.random() > 0.5 ? '37,99,235' : '6,182,212',
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 140) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(124,58,237,${0.08 * (1 - dist / 140)})`
            ctx.lineWidth = 0.6
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color},${p.alpha})`
        ctx.fill()
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
      })
      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-100"
        style={{ maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)' }}
      />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-600/10 blur-[100px] animate-pulse-slow animate-delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-cyan-500/5 blur-[80px]" />
      </div>

      {/* ── CONTENT: foto à esquerda + texto à direita (desktop) ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* Foto */}
          <div className="order-1 md:order-none">
            <ProfilePhoto />
          </div>

          {/* Texto */}
          <div className="flex-1 text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-600/30 bg-purple-600/10 text-purple-300 text-xs font-mono mb-6 animate-fade-in">
              <Sparkles size={12} className="text-cyan-400" />
              <span>Disponível para novas oportunidades</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </div>

            {/* Name */}
            <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight mb-5 animate-slide-up">
              <span className="block text-white">Guilherme</span>
              <span className="block text-gradient">Henrique</span>
            </h1>

            {/* Subtitle */}
            <div className="flex items-center justify-center md:justify-start gap-3 mb-5 animate-slide-up animate-delay-100">
              <Terminal size={15} className="text-cyan-400 shrink-0" />
              <p className="font-mono text-cyan-300 text-sm md:text-base tracking-widest uppercase">
                Desenvolvedor <span className="text-purple-400">|</span> IA <span className="text-purple-400">&</span> Ciência de Dados
              </p>
            </div>

            {/* Description */}
            <p className="font-body text-slate-400 text-lg max-w-xl mb-10 leading-relaxed animate-slide-up animate-delay-200 mx-auto md:mx-0">
              Transformando dados em soluções inteligentes e automatizando processos para o mundo real.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-slide-up animate-delay-300">
              <button onClick={scrollToProjects} className="btn-primary group">
                Ver Projetos
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href={`${import.meta.env.BASE_URL}curriculo-guilherme.pdf`}
                download="Curriculo_Guilherme_Henrique.pdf"
                className="btn-secondary group"
              >
                <Download size={16} />
                Download CV
              </a>
              <a
                href="https://github.com/GuiAlmeida03"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary group"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <span className="text-xs font-mono text-slate-500 tracking-widest uppercase">Scroll</span>
          <ArrowDown size={14} className="text-purple-400" />
        </div>
      </div>
    </section>
  )
}
