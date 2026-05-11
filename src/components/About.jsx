import { GraduationCap, Cpu, BrainCircuit, FlaskConical } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import { t } from '../i18n/translations'

const icons = [BrainCircuit, FlaskConical, GraduationCap, Cpu]
const styles = [
  { color: 'text-purple-400', bg: 'bg-purple-600/10 border-purple-600/20' },
  { color: 'text-blue-400',   bg: 'bg-blue-600/10 border-blue-600/20' },
  { color: 'text-cyan-400',   bg: 'bg-cyan-500/10 border-cyan-500/20' },
  { color: 'text-emerald-400',bg: 'bg-emerald-500/10 border-emerald-500/20' },
]

export default function About() {
  const { lang } = useLang()
  const tr = t[lang].about
  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-600/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-purple-600/8 blur-[100px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 reveal">
          <span className="section-label"><span className="text-purple-400">—</span>{tr.sectionLabel}</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3 leading-tight">
            {tr.title} <span className="text-gradient">{tr.titleGradient}</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="reveal reveal-delay-1">
            <div className="w-12 h-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mb-6" />
            <p className="font-body text-slate-300 text-lg leading-relaxed mb-6">{tr.p1}</p>
            <p className="font-body text-slate-400 text-base leading-relaxed">{tr.p2}</p>
            <div className="mt-8 p-4 rounded-xl bg-void-3 border border-purple-600/15 font-mono text-xs text-slate-400 leading-relaxed">
              <span className="text-purple-400">const</span> <span className="text-cyan-300">guilherme</span> <span className="text-slate-500">=</span> <span className="text-blue-400">{'{'}</span><br />
              &nbsp;&nbsp;<span className="text-slate-500">// {tr.codeComment.replace('// ', '')}</span><br />
              &nbsp;&nbsp;<span className="text-slate-300">disponível</span><span className="text-slate-500">:</span> <span className="text-purple-300">true</span><br />
              <span className="text-blue-400">{'}'}</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 reveal reveal-delay-2">
            {tr.highlights.map((label, i) => {
              const Icon = icons[i]
              const s = styles[i]
              return (
                <div key={label} className={`card-glow flex flex-col items-center gap-3 p-6 rounded-2xl border ${s.bg} transition-all duration-300 hover:-translate-y-1`}>
                  <div className={`p-3 rounded-xl ${s.bg}`}><Icon size={22} className={s.color} /></div>
                  <span className={`font-display font-semibold text-xs text-center leading-tight ${s.color}`}>{label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
