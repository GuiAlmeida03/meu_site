import { useEffect, useRef, useState } from 'react'
import { Trophy, GraduationCap, Briefcase, Award } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import { t } from '../i18n/translations'

const statsConfig = [
  { icon: Trophy,       key: 'awards',   value: 4,  suffix: '',  color: 'text-yellow-400', iconBg: 'bg-yellow-500/15', border: 'border-yellow-500/20', glow: 'rgba(234,179,8,0.15)' },
  { icon: GraduationCap,key: 'degrees',  value: 2,  suffix: '',  color: 'text-cyan-400',   iconBg: 'bg-cyan-500/15',   border: 'border-cyan-500/20',   glow: 'rgba(6,182,212,0.15)' },
  { icon: Briefcase,    key: 'projects', value: 3,  suffix: '+', color: 'text-purple-400', iconBg: 'bg-purple-500/15', border: 'border-purple-500/20', glow: 'rgba(124,58,237,0.15)' },
  { icon: Award,        key: 'certs',    value: 14, suffix: '',  color: 'text-blue-400',   iconBg: 'bg-blue-500/15',   border: 'border-blue-500/20',   glow: 'rgba(37,99,235,0.15)' },
]

function useCountUp(target, duration = 1600, enabled = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!enabled) return
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, enabled])
  return count
}

function StatCard({ cfg, tr }) {
  const ref = useRef(null)
  const [active, setActive] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true) }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  const count = useCountUp(cfg.value, 1600, active)
  const Icon = cfg.icon
  return (
    <div ref={ref} className={`reveal group relative flex flex-col items-center text-center rounded-2xl border ${cfg.border} bg-void-3 p-8 transition-all duration-300 hover:-translate-y-2 overflow-hidden`}>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: `radial-gradient(circle at 50% 100%, ${cfg.glow}, transparent 70%)` }} />
      <div className={`relative z-10 p-4 rounded-2xl ${cfg.iconBg} mb-5`}><Icon size={24} className={cfg.color} /></div>
      <div className={`relative z-10 font-display font-extrabold text-5xl md:text-6xl ${cfg.color} mb-2 leading-none`}>{count}{cfg.suffix}</div>
      <p className="relative z-10 font-display font-semibold text-white text-sm mb-1">{tr[cfg.key].label}</p>
      <p className="relative z-10 font-mono text-xs text-slate-500">{tr[cfg.key].sub}</p>
    </div>
  )
}

export default function Stats() {
  const { lang } = useLang()
  const tr = t[lang].stats
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-blue-600/5 to-cyan-500/5 pointer-events-none" />
      <div className="absolute inset-0 bg-void-2/70 pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {statsConfig.map(cfg => <StatCard key={cfg.key} cfg={cfg} tr={tr} />)}
        </div>
      </div>
    </section>
  )
}
