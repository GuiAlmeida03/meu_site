import { useState, useEffect } from 'react'
import { Bot, Globe, Layers, X, ArrowRight, Tag, CheckCircle2 } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import { t } from '../i18n/translations'

const projectMeta = [
  { id: '01', icon: Bot,    tags: ['Python','Machine Learning','Análise de Dados'], tagColors: ['bg-purple-600/20 text-purple-300 border-purple-600/30','bg-blue-600/20 text-blue-300 border-blue-600/30','bg-cyan-500/20 text-cyan-300 border-cyan-500/30'], accentFrom: 'from-purple-600', accentTo: 'to-blue-600', glowColor: 'rgba(124,58,237,0.15)', stack: ['Python','Machine Learning','Scikit-learn','Pandas','Automação'] },
  { id: '02', icon: Globe,  tags: ['IA','Automação','Lógica de Triagem'],           tagColors: ['bg-blue-600/20 text-blue-300 border-blue-600/30','bg-indigo-600/20 text-indigo-300 border-indigo-600/30','bg-violet-600/20 text-violet-300 border-violet-600/30'], accentFrom: 'from-blue-600', accentTo: 'to-cyan-500', glowColor: 'rgba(37,99,235,0.15)', stack: ['IA','Automação','Lógica de Triagem','UX Design','Identidade Visual'] },
  { id: '03', icon: Layers, tags: ['React','JavaScript','Front-end'],               tagColors: ['bg-cyan-500/20 text-cyan-300 border-cyan-500/30','bg-yellow-500/20 text-yellow-300 border-yellow-500/30','bg-emerald-500/20 text-emerald-300 border-emerald-500/30'], accentFrom: 'from-cyan-500', accentTo: 'to-purple-600', glowColor: 'rgba(6,182,212,0.15)', stack: ['React','JavaScript','Tailwind CSS','Front-end','UX/UI'] },
]

function Modal({ project, meta, tr, onClose }) {
  const Icon = meta.icon
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', handleKey) }
  }, [onClose])
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="absolute inset-0 bg-void/80 backdrop-blur-md" onClick={onClose} />
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-void-3 border border-white/10 shadow-2xl">
        <div className={`h-1 w-full bg-gradient-to-r ${meta.accentFrom} ${meta.accentTo}`} />
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${meta.accentFrom} ${meta.accentTo}`}><Icon size={22} className="text-white" /></div>
              <div>
                <span className="font-mono text-xs text-slate-500">{meta.id}</span>
                <h3 className="font-display font-bold text-xl text-white">{project.title}</h3>
                <p className={`font-mono text-xs bg-gradient-to-r ${meta.accentFrom} ${meta.accentTo} bg-clip-text text-transparent`}>{project.subtitle}</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 rounded-xl text-slate-500 hover:text-white hover:bg-white/8 transition-all"><X size={18} /></button>
          </div>
          <p className="font-body text-slate-300 text-base leading-relaxed mb-6">{project.fullDesc}</p>
          <div className="mb-6">
            <h4 className="font-display font-semibold text-sm text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-purple-400" />{tr.modal.highlights}
            </h4>
            <ul className="space-y-2.5">
              {project.highlights.map(h => (
                <li key={h} className="flex items-start gap-3 text-sm font-body text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />{h}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Tag size={14} className="text-cyan-400" />{tr.modal.stack}
            </h4>
            <div className="flex flex-wrap gap-2">
              {meta.stack.map(s => <span key={s} className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300">{s}</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const { lang } = useLang()
  const tr = t[lang].projects
  const [activeIdx, setActiveIdx] = useState(null)

  return (
    <>
      <section id="projects" className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-void-2/60 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-[150px] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="mb-16 reveal">
            <span className="section-label"><span className="text-purple-400">—</span>{tr.sectionLabel}</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3">
              {tr.title} <span className="text-gradient">{tr.titleGradient}</span>
            </h2>
            <p className="font-body text-slate-400 mt-4 max-w-xl text-base">{tr.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tr.items.map((item, i) => {
              const meta = projectMeta[i]
              const Icon = meta.icon
              return (
                <article key={meta.id} onClick={() => setActiveIdx(i)}
                  className={`card-glow reveal reveal-delay-${i + 1} group relative flex flex-col rounded-2xl bg-void-3 border border-white/5 overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer`}>
                  <div className={`h-0.5 w-full bg-gradient-to-r ${meta.accentFrom} ${meta.accentTo} opacity-80 group-hover:opacity-100 transition-opacity`} />
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-start justify-between mb-5">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${meta.accentFrom} ${meta.accentTo} opacity-90`}><Icon size={20} className="text-white" /></div>
                      <span className="font-mono text-xs text-slate-600 pt-1">{meta.id}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-white leading-tight mb-1">{item.title}</h3>
                    <p className={`font-mono text-xs mb-4 bg-gradient-to-r ${meta.accentFrom} ${meta.accentTo} bg-clip-text text-transparent`}>{item.subtitle}</p>
                    <p className="font-body text-slate-400 text-sm leading-relaxed flex-1 mb-5">{item.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {meta.tags.map((tag, j) => <span key={tag} className={`text-xs font-mono px-2.5 py-1 rounded-md border ${meta.tagColors[j]}`}>{tag}</span>)}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-600 group-hover:text-purple-400 transition-colors mt-auto pt-3 border-t border-white/5">
                      <span>{tr.seeDetails}</span>
                      <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: `radial-gradient(circle at 50% 0%, ${meta.glowColor}, transparent 70%)` }} />
                </article>
              )
            })}
          </div>
          <div className="mt-12 text-center reveal">
            <a href="https://github.com/GuiAlmeida03" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-display font-semibold text-sm text-purple-400 hover:text-purple-300 transition-colors group">
              {tr.seeAll}<ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
      {activeIdx !== null && (
        <Modal project={tr.items[activeIdx]} meta={projectMeta[activeIdx]} tr={tr} onClose={() => setActiveIdx(null)} />
      )}
    </>
  )
}
