import { Trophy, Medal, Star, Award } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

const content = {
  pt: {
    sectionLabel: '01. Conquistas',
    title: 'Prêmios &',
    titleGradient: 'Reconhecimentos',
    subtitle: 'Projetos premiados em competições nacionais da FIAP, reconhecidos pela inovação e impacto real na indústria.',
    highlightOrg: 'Destaque — FIAP · 2025',
    highlightTitle: 'Vencedor do NEXT',
    highlightDesc: 'Projeto Sohipren — solução corporativa completa com modelos preditivos de vendas e visão computacional, reconhecida como melhor projeto entre todas as turmas.',
    place1: 'Vencedor',
    placeFirst: '1º Lugar',
    awards: [
      { title: 'NEXT — Projeto Sohipren',                    desc: 'Solução para otimizar vendas e atendimento da Sohipren utilizando modelos preditivos e visão computacional.' },
      { title: 'Global Solution — Protect the Future',       desc: 'Uso de tecnologia e inteligência artificial para previsão de desastres naturais, protegendo comunidades em risco.' },
      { title: 'Global Solution — Green Energy',             desc: 'Integração de IoT e Machine Learning para promover eficiência energética e sustentabilidade.' },
      { title: 'Global Solution — O Futuro do Trabalho',     desc: 'Prova de conceito de processamento neuromórfico utilizando o modelo computacional LIF (Leaky Integrate-and-Fire).' },
    ],
  },
  en: {
    sectionLabel: '01. Awards',
    title: 'Awards &',
    titleGradient: 'Recognition',
    subtitle: 'Award-winning projects in national FIAP competitions, recognized for innovation and real industry impact.',
    highlightOrg: 'Highlight — FIAP · 2025',
    highlightTitle: 'NEXT Winner',
    highlightDesc: 'Sohipren project — a complete corporate solution with predictive sales models and computer vision, recognized as the best project across all classes.',
    place1: 'Winner',
    placeFirst: '1st Place',
    awards: [
      { title: 'NEXT — Sohipren Project',                    desc: 'Solution to optimize sales and customer service at Sohipren using predictive models and computer vision.' },
      { title: 'Global Solution — Protect the Future',       desc: 'Use of technology and artificial intelligence to predict natural disasters and protect at-risk communities.' },
      { title: 'Global Solution — Green Energy',             desc: 'Integration of IoT and Machine Learning to promote energy efficiency and sustainability.' },
      { title: 'Global Solution — The Future of Work',       desc: 'Proof of concept for neuromorphic computing using the LIF (Leaky Integrate-and-Fire) computational model.' },
    ],
  },
}

const icons    = [Trophy, Medal, Star, Award]
const accents  = [
  { from: 'from-yellow-500', to: 'to-amber-400',  icon: 'text-yellow-400', iconBg: 'bg-yellow-500/15', border: 'border-yellow-500/25', bg: 'bg-yellow-500/5',  glow: 'rgba(234,179,8,0.12)',    tag: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/30' },
  { from: 'from-purple-500', to: 'to-blue-500',   icon: 'text-purple-400', iconBg: 'bg-purple-500/15', border: 'border-purple-500/25', bg: 'bg-purple-500/5',  glow: 'rgba(124,58,237,0.12)',   tag: 'bg-purple-500/15 text-purple-300 border-purple-500/30' },
  { from: 'from-emerald-500',to: 'to-cyan-500',   icon: 'text-emerald-400',iconBg: 'bg-emerald-500/15',border: 'border-emerald-500/25',bg: 'bg-emerald-500/5', glow: 'rgba(16,185,129,0.12)',   tag: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' },
  { from: 'from-blue-500',   to: 'to-cyan-400',   icon: 'text-blue-400',   iconBg: 'bg-blue-500/15',   border: 'border-blue-500/25',   bg: 'bg-blue-500/5',   glow: 'rgba(37,99,235,0.12)',    tag: 'bg-blue-500/15 text-blue-300 border-blue-500/30' },
]

export default function Awards() {
  const { lang } = useLang()
  const tr = content[lang]

  return (
    <section id="awards" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-yellow-500/4 blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-purple-600/8 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 reveal">
          <span className="section-label">
            <span className="text-purple-400">—</span>{tr.sectionLabel}
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3 leading-tight">
            {tr.title} <span className="text-gradient">{tr.titleGradient}</span>
          </h2>
          <p className="font-body text-slate-400 mt-4 max-w-xl text-base">{tr.subtitle}</p>
        </div>

        {/* Highlight banner */}
        <div className="reveal mb-6">
          <div className="relative rounded-2xl overflow-hidden border border-yellow-500/30 bg-gradient-to-r from-yellow-500/10 via-amber-500/5 to-transparent p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-500 via-amber-400 to-transparent" />
            <div className="flex items-center gap-4 shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center">
                <Trophy size={28} className="text-yellow-400" />
              </div>
              <div>
                <span className="font-mono text-xs text-yellow-400 tracking-widest uppercase">{tr.highlightOrg}</span>
                <h3 className="font-display font-bold text-xl md:text-2xl text-white mt-0.5">{tr.highlightTitle}</h3>
              </div>
            </div>
            <div className="md:border-l border-yellow-500/20 md:pl-8 flex-1">
              <p className="font-body text-slate-300 text-base leading-relaxed">{tr.highlightDesc}</p>
            </div>
            <div className="absolute top-4 right-6 opacity-20">
              <Star size={48} className="text-yellow-400 fill-yellow-400" />
            </div>
          </div>
        </div>

        {/* Other awards grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {tr.awards.slice(1).map((award, i) => {
            const Icon = icons[i + 1]
            const a   = accents[i + 1]
            return (
              <div
                key={award.title}
                className={`card-glow reveal reveal-delay-${i + 1} group relative flex flex-col rounded-2xl border ${a.border} ${a.bg} p-6 transition-all duration-300 hover:-translate-y-2 overflow-hidden`}
              >
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${a.from} ${a.to}`} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${a.glow}, transparent 70%)` }} />
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-5">
                    <div className={`p-3 rounded-xl ${a.iconBg}`}><Icon size={20} className={a.icon} /></div>
                    <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-lg border ${a.tag}`}>{tr.placeFirst}</span>
                  </div>
                  <h3 className="font-display font-bold text-base text-white leading-snug mb-1">{award.title}</h3>
                  <p className={`font-mono text-xs mb-4 ${a.icon}`}>FIAP</p>
                  <p className="font-body text-slate-400 text-sm leading-relaxed flex-1">{award.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
