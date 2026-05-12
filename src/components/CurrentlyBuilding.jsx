import { Hammer, BookOpen, Zap } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

const content = {
  pt: {
    sectionLabel: 'Em andamento',
    title: 'Atualmente',
    titleGradient: 'construindo',
    subtitle: 'Projetos e estudos em progresso — porque aprender nunca para.',
    status: 'Em progresso',
    progressLabel: 'Progresso',
    items: [
      { icon: Hammer,   type: 'Projeto', title: 'Portfolio Pessoal',       desc: 'Este próprio site — iterando constantemente com novas features, animações e conteúdo atualizado.',                                                    tags: ['React', 'Vite', 'Tailwind'],      progress: 85, color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/25', bar: 'from-purple-500 to-blue-500' },
      { icon: BookOpen, type: 'Estudo',  title: 'LangChain & LLMs',        desc: 'Explorando orquestração de Large Language Models e construção de agentes com memória e ferramentas.',                                                 tags: ['Python', 'LangChain', 'OpenAI'],  progress: 45, color: 'text-blue-400',   bg: 'bg-blue-500/10 border-blue-500/25',   bar: 'from-blue-500 to-cyan-400' },
      { icon: Zap,      type: 'Estudo',  title: 'MLOps & Deploy de Modelos',desc: 'Aprendendo pipelines de deploy de modelos de ML em produção com Docker, FastAPI e monitoramento.',                                                   tags: ['Docker', 'FastAPI', 'MLflow'],    progress: 30, color: 'text-cyan-400',   bg: 'bg-cyan-500/10 border-cyan-500/25',   bar: 'from-cyan-500 to-teal-400' },
    ],
  },
  en: {
    sectionLabel: 'In progress',
    title: 'Currently',
    titleGradient: 'building',
    subtitle: 'Projects and studies in progress — because learning never stops.',
    status: 'In progress',
    progressLabel: 'Progress',
    items: [
      { icon: Hammer,   type: 'Project', title: 'Personal Portfolio',       desc: 'This very site — constantly iterating with new features, animations and updated content.',                                                            tags: ['React', 'Vite', 'Tailwind'],      progress: 85, color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/25', bar: 'from-purple-500 to-blue-500' },
      { icon: BookOpen, type: 'Study',   title: 'LangChain & LLMs',         desc: 'Exploring Large Language Model orchestration and building agents with memory and tools.',                                                             tags: ['Python', 'LangChain', 'OpenAI'],  progress: 45, color: 'text-blue-400',   bg: 'bg-blue-500/10 border-blue-500/25',   bar: 'from-blue-500 to-cyan-400' },
      { icon: Zap,      type: 'Study',   title: 'MLOps & Model Deployment',  desc: 'Learning ML model deployment pipelines in production with Docker, FastAPI and monitoring.',                                                          tags: ['Docker', 'FastAPI', 'MLflow'],    progress: 30, color: 'text-cyan-400',   bg: 'bg-cyan-500/10 border-cyan-500/25',   bar: 'from-cyan-500 to-teal-400' },
    ],
  },
}

export default function CurrentlyBuilding() {
  const { lang } = useLang()
  const tr = content[lang]

  return (
    <section id="building" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-64 rounded-full bg-purple-600/6 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="mb-16 reveal">
          <span className="section-label">
            <span className="text-purple-400">—</span>
            {tr.sectionLabel}
            <span className="flex items-center gap-1.5 ml-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 normal-case tracking-normal font-mono text-xs">live</span>
            </span>
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3 leading-tight">
            {tr.title} <span className="text-gradient">{tr.titleGradient}</span>
          </h2>
          <p className="font-body text-slate-400 mt-4 max-w-xl text-base">{tr.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tr.items.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={item.title} className={`card-glow reveal reveal-delay-${i + 1} group relative flex flex-col rounded-2xl border ${item.bg} p-6 transition-all duration-300 hover:-translate-y-2 overflow-hidden`}>
                <div className={`absolute top-0 left-0 h-0.5 bg-gradient-to-r ${item.bar} transition-all duration-700`} style={{ width: `${item.progress}%` }} />

                <div className="flex items-start justify-between mb-5">
                  <div className={`p-3 rounded-xl ${item.bg}`}><Icon size={20} className={item.color} /></div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-emerald-300">{tr.status}</span>
                  </div>
                </div>

                <span className={`font-mono text-xs ${item.color} mb-1`}>{item.type}</span>
                <h3 className="font-display font-bold text-base text-white leading-snug mb-3">{item.title}</h3>
                <p className="font-body text-slate-400 text-sm leading-relaxed flex-1 mb-5">{item.desc}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/4 border border-white/8 text-slate-400">{tag}</span>
                  ))}
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs font-mono text-slate-500">{tr.progressLabel}</span>
                    <span className={`text-xs font-mono font-semibold ${item.color}`}>{item.progress}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div className={`h-full rounded-full bg-gradient-to-r ${item.bar}`} style={{ width: `${item.progress}%` }} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
