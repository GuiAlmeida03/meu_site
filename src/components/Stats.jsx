import { useEffect, useRef, useState } from 'react'
import { Trophy, GraduationCap, Briefcase, Award } from 'lucide-react'

const stats = [
  {
    icon: Trophy,
    value: 4,
    suffix: '',
    label: 'Prêmios conquistados',
    sublabel: 'em competições nacionais',
    color: 'text-yellow-400',
    iconBg: 'bg-yellow-500/15',
    border: 'border-yellow-500/20',
    glow: 'rgba(234,179,8,0.15)',
  },
  {
    icon: GraduationCap,
    value: 2,
    suffix: '',
    label: 'Graduações simultâneas',
    sublabel: 'FIAP + UFMS',
    color: 'text-cyan-400',
    iconBg: 'bg-cyan-500/15',
    border: 'border-cyan-500/20',
    glow: 'rgba(6,182,212,0.15)',
  },
  {
    icon: Briefcase,
    value: 3,
    suffix: '+',
    label: 'Projetos corporativos',
    sublabel: 'com impacto real',
    color: 'text-purple-400',
    iconBg: 'bg-purple-500/15',
    border: 'border-purple-500/20',
    glow: 'rgba(124,58,237,0.15)',
  },
  {
    icon: Award,
    value: 15,
    suffix: '',
    label: 'Certificações',
    sublabel: 'FIAP, Alura e mais',
    color: 'text-blue-400',
    iconBg: 'bg-blue-500/15',
    border: 'border-blue-500/20',
    glow: 'rgba(37,99,235,0.15)',
  },
]

function useCountUp(target, duration = 1800, enabled = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!enabled) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, enabled])

  return count
}

function StatCard({ stat, delay }) {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const count = useCountUp(stat.value, 1600, active)
  const Icon = stat.icon

  return (
    <div
      ref={ref}
      className={`reveal group relative flex flex-col items-center text-center rounded-2xl border ${stat.border} bg-void-3 p-8 transition-all duration-300 hover:-translate-y-2 overflow-hidden`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 100%, ${stat.glow}, transparent 70%)` }}
      />

      {/* Icon */}
      <div className={`relative z-10 p-4 rounded-2xl ${stat.iconBg} mb-5`}>
        <Icon size={24} className={stat.color} />
      </div>

      {/* Counter */}
      <div className={`relative z-10 font-display font-extrabold text-5xl md:text-6xl ${stat.color} mb-2 leading-none`}>
        {count}{stat.suffix}
      </div>

      {/* Label */}
      <p className="relative z-10 font-display font-semibold text-white text-sm mb-1">
        {stat.label}
      </p>
      <p className="relative z-10 font-mono text-xs text-slate-500">
        {stat.sublabel}
      </p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Full-width subtle BG */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-blue-600/5 to-cyan-500/5 pointer-events-none" />
      <div className="absolute inset-0 bg-void-2/70 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
