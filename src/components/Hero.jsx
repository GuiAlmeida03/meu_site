import { useEffect, useRef } from 'react'
import { ArrowDown, Github, Sparkles, Terminal, ChevronRight } from 'lucide-react'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    // Animated particle/star field
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

      // Draw connections
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

      // Draw particles
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
      {/* Canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-100"
        style={{ maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)' }}
      />

      {/* Mesh gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-600/10 blur-[100px] animate-pulse-slow animate-delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-cyan-500/5 blur-[80px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-600/30 bg-purple-600/10 text-purple-300 text-xs font-mono mb-8 animate-fade-in">
          <Sparkles size={12} className="text-cyan-400" />
          <span>Disponível para novas oportunidades</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        </div>

        {/* Name */}
        <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-6 animate-slide-up">
          <span className="block text-white">Guilherme</span>
          <span className="block text-gradient">Henrique</span>
        </h1>

        {/* Subtitle with terminal style */}
        <div className="flex items-center justify-center gap-3 mb-6 animate-slide-up animate-delay-100">
          <Terminal size={16} className="text-cyan-400 shrink-0" />
          <p className="font-mono text-cyan-300 text-sm md:text-base tracking-widest uppercase">
            Desenvolvedor <span className="text-purple-400">|</span> IA <span className="text-purple-400">&</span> Ciência de Dados
          </p>
        </div>

        {/* Description */}
        <p className="font-body text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up animate-delay-200">
          Transformando dados em soluções inteligentes e automatizando processos para o mundo real.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animate-delay-300">
          <button onClick={scrollToProjects} className="btn-primary group">
            Ver Projetos
            <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary group"
          >
            <Github size={16} />
            GitHub
          </a>
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
