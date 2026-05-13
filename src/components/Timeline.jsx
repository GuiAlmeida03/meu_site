import { GraduationCap, Briefcase, Trophy, CalendarDays } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

const content = {
  pt: {
    sectionLabel: '02. Trajetória',
    title: 'Experiência &',
    titleGradient: 'Formação',
    subtitle: 'Graduações simultâneas, projetos corporativos reais e conquistas em competições nacionais.',
    types: { award: 'Prêmio', work: 'Experiência', education: 'Educação' },
    items: [
      { type: 'award',     icon: Trophy,       year: '2025', period: '2025',            title: 'Vencedor do NEXT',             subtitle: 'FIAP',                         desc: 'Melhor projeto entre todas as turmas com a solução corporativa Sohipren — modelos preditivos de vendas e visão computacional.',                                               tags: ['Python', 'Machine Learning', 'Visão Computacional'] },
      { type: 'work',      icon: Briefcase,    year: '2025', period: '2025 — Presente', title: 'Desenvolvedor — Sohipren',     subtitle: 'Projeto Corporativo',          desc: 'Desenvolvimento de chatbot automatizado e modelo de predição de vendas integrado ao fluxo comercial da empresa.',                                                          tags: ['Python', 'Automação', 'Análise de Dados'] },
      { type: 'work',      icon: Briefcase,    year: '2024', period: '2024 — Presente', title: 'Desenvolvedor — YouVisa',      subtitle: 'Projeto Corporativo',          desc: 'Criação de chatbot com triagem inteligente de usuários e desenvolvimento do mascote corporativo da empresa.',                                                              tags: ['IA', 'Automação', 'UX'] },
      { type: 'award',     icon: Trophy,       year: '2024', period: '2024',            title: '3× 1º Lugar — Global Solution',subtitle: 'FIAP',                         desc: 'Três primeiros lugares consecutivos: Protect the Future (IA para desastres), Green Energy (IoT + ML) e O Futuro do Trabalho (processamento neuromórfico LIF).',         tags: ['IA', 'IoT', 'Machine Learning', 'Neuromórfico'] },
      { type: 'education', icon: GraduationCap,year: '2024', period: '2024 — Presente', title: 'Inteligência Artificial',      subtitle: 'FIAP — Graduação Tecnológica', desc: 'Graduação com foco em Machine Learning, Visão Computacional, NLP e desenvolvimento de soluções baseadas em IA aplicada a negócios.',                                     tags: ['Machine Learning', 'NLP', 'Visão Computacional'] },
      { type: 'education', icon: GraduationCap,year: '2024', period: '2024 — Presente', title: 'Ciência de Dados',             subtitle: 'Universidade Federal do Mato Grosso do Sul', desc: 'Graduação com ênfase em estatística, análise preditiva, visualização de dados e fundamentos matemáticos para ciência de dados.',                                          tags: ['Estatística', 'Python', 'Análise Preditiva'] },
    ],
  },
  en: {
    sectionLabel: '02. Journey',
    title: 'Experience &',
    titleGradient: 'Education',
    subtitle: 'Simultaneous degrees, real corporate projects and achievements in national competitions.',
    types: { award: 'Award', work: 'Experience', education: 'Education' },
    items: [
      { type: 'award',     icon: Trophy,       year: '2025', period: '2025',            title: 'NEXT Winner',                  subtitle: 'FIAP',                         desc: 'Best project across all classes with the Sohipren corporate solution — predictive sales models and computer vision.',                                                    tags: ['Python', 'Machine Learning', 'Computer Vision'] },
      { type: 'work',      icon: Briefcase,    year: '2025', period: '2025 — Present',  title: 'Developer — Sohipren',         subtitle: 'Corporate Project',            desc: 'Built an automated chatbot and a sales prediction model integrated into the company\'s commercial workflow.',                                                          tags: ['Python', 'Automation', 'Data Analysis'] },
      { type: 'work',      icon: Briefcase,    year: '2024', period: '2024 — Present',  title: 'Developer — YouVisa',          subtitle: 'Corporate Project',            desc: 'Created a chatbot with intelligent user status triage and developed the corporate mascot.',                                                                            tags: ['AI', 'Automation', 'UX'] },
      { type: 'award',     icon: Trophy,       year: '2024', period: '2024',            title: '3× 1st Place — Global Solution',subtitle: 'FIAP',                        desc: 'Three consecutive first places: Protect the Future (AI for disasters), Green Energy (IoT + ML), and The Future of Work (LIF neuromorphic processing).',               tags: ['AI', 'IoT', 'Machine Learning', 'Neuromorphic'] },
      { type: 'education', icon: GraduationCap,year: '2024', period: '2024 — Present',  title: 'Artificial Intelligence',      subtitle: 'FIAP — Technology Degree',     desc: 'Degree focused on Machine Learning, Computer Vision, NLP and AI-driven business solutions.',                                                                            tags: ['Machine Learning', 'NLP', 'Computer Vision'] },
      { type: 'education', icon: GraduationCap,year: '2024', period: '2024 — Present',  title: 'Data Science',                 subtitle: 'Federal University of Mato Grosso do Sul',     desc: 'Degree with emphasis on statistics, predictive analytics, data visualization and mathematical foundations for data science.',                                           tags: ['Statistics', 'Python', 'Predictive Analytics'] },
    ],
  },
}

const typeStyle = {
  award:     'bg-yellow-500/10 text-yellow-300 border-yellow-500/25',
  work:      'bg-purple-500/10 text-purple-300 border-purple-500/25',
  education: 'bg-cyan-500/10   text-cyan-300   border-cyan-500/25',
}
const dotColor = {
  award: 'bg-yellow-400', work: 'bg-purple-400', education: 'bg-cyan-400',
}
const iconStyle = {
  award:     { color: 'text-yellow-400', bg: 'bg-yellow-500/15 border-yellow-500/30',  line: 'from-yellow-500/40' },
  work:      { color: 'text-purple-400', bg: 'bg-purple-500/15 border-purple-500/30',  line: 'from-purple-500/40' },
  education: { color: 'text-cyan-400',   bg: 'bg-cyan-500/15 border-cyan-500/30',      line: 'from-cyan-500/40'   },
}

export default function Timeline() {
  const { lang } = useLang()
  const tr = content[lang]

  return (
    <section id="timeline" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-purple-600/6 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-cyan-500/6 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
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

        {/* Legend */}
        <div className="flex flex-wrap gap-3 mb-12 reveal">
          {Object.entries(tr.types).map(([key, label]) => (
            <span key={key} className={`text-xs font-mono px-3 py-1 rounded-lg border ${typeStyle[key]}`}>{label}</span>
          ))}
        </div>

        {/* Items */}
        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/30 via-blue-500/20 to-transparent" />
          <div className="space-y-6">
            {tr.items.map((item, i) => {
              const Icon = item.icon
              const s    = iconStyle[item.type]
              return (
                <div key={i} className={`reveal reveal-delay-${(i % 4) + 1} relative flex gap-6 md:gap-8`}>
                  {/* Icon */}
                  <div className="relative flex-shrink-0 flex flex-col items-center">
                    <div className={`relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-2xl border ${s.bg} flex items-center justify-center shadow-lg`}>
                      <Icon size={20} className={s.color} />
                    </div>
                    <div className={`absolute -left-[1.85rem] md:-left-[2.35rem] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${dotColor[item.type]} ring-4 ring-void`} />
                  </div>

                  {/* Card */}
                  <div className="card-glow flex-1 rounded-2xl bg-void-3 border border-white/5 p-5 md:p-6 hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${s.line} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-display font-bold text-base md:text-lg text-white leading-snug">{item.title}</h3>
                        <p className={`font-mono text-xs mt-0.5 ${s.color}`}>{item.subtitle}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className={`text-xs font-mono px-2.5 py-1 rounded-lg border ${typeStyle[item.type]}`}>{tr.types[item.type]}</span>
                        <span className="flex items-center gap-1 text-xs font-mono text-slate-500 whitespace-nowrap">
                          <CalendarDays size={11} />{item.period}
                        </span>
                      </div>
                    </div>
                    <p className="font-body text-slate-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/4 border border-white/8 text-slate-400">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
