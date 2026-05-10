import { GraduationCap, Briefcase, Trophy, CalendarDays } from 'lucide-react'

const timeline = [
  {
    type: 'award',
    icon: Trophy,
    iconColor: 'text-yellow-400',
    iconBg: 'bg-yellow-500/15 border-yellow-500/30',
    dotColor: 'bg-yellow-400',
    lineColor: 'from-yellow-500/40',
    year: '2025',
    period: '2025',
    title: 'Vencedor do NEXT',
    subtitle: 'FIAP',
    description: 'Melhor projeto entre todas as turmas com a solução corporativa Sohipren — modelos preditivos de vendas e visão computacional.',
    tags: ['Python', 'Machine Learning', 'Visão Computacional'],
  },
  {
    type: 'work',
    icon: Briefcase,
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-500/15 border-purple-500/30',
    dotColor: 'bg-purple-400',
    lineColor: 'from-purple-500/40',
    year: '2025',
    period: '2025 — Presente',
    title: 'Desenvolvedor — Sohipren',
    subtitle: 'Projeto Corporativo',
    description: 'Desenvolvimento de chatbot automatizado e modelo de predição de vendas integrado ao fluxo comercial da empresa.',
    tags: ['Python', 'Automação', 'Análise de Dados'],
  },
  {
    type: 'work',
    icon: Briefcase,
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/15 border-blue-500/30',
    dotColor: 'bg-blue-400',
    lineColor: 'from-blue-500/40',
    year: '2024',
    period: '2024 — Presente',
    title: 'Desenvolvedor — YouVisa',
    subtitle: 'Projeto Corporativo',
    description: 'Criação de chatbot com triagem inteligente de usuários e desenvolvimento do mascote corporativo da empresa.',
    tags: ['IA', 'Automação', 'UX'],
  },
  {
    type: 'award',
    icon: Trophy,
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/15 border-emerald-500/30',
    dotColor: 'bg-emerald-400',
    lineColor: 'from-emerald-500/40',
    year: '2024',
    period: '2024',
    title: '3× 1º Lugar — Global Solution',
    subtitle: 'FIAP',
    description: 'Três primeiros lugares consecutivos: Protect the Future (IA para desastres), Green Energy (IoT + ML) e O Futuro do Trabalho (processamento neuromórfico LIF).',
    tags: ['IA', 'IoT', 'Machine Learning', 'Neuromórfico'],
  },
  {
    type: 'education',
    icon: GraduationCap,
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/15 border-cyan-500/30',
    dotColor: 'bg-cyan-400',
    lineColor: 'from-cyan-500/40',
    year: '2024',
    period: '2024 — Presente',
    title: 'Inteligência Artificial',
    subtitle: 'FIAP — Graduação Tecnológica',
    description: 'Graduação com foco em Machine Learning, Visão Computacional, NLP e desenvolvimento de soluções baseadas em IA aplicada a negócios.',
    tags: ['Machine Learning', 'NLP', 'Visão Computacional'],
  },
  {
    type: 'education',
    icon: GraduationCap,
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-500/15 border-violet-500/30',
    dotColor: 'bg-violet-400',
    lineColor: 'from-violet-500/40',
    year: '2024',
    period: '2024 — Presente',
    title: 'Ciência de Dados',
    subtitle: 'UFMS — Graduação Tecnológica',
    description: 'Graduação com ênfase em estatística, análise preditiva, visualização de dados e fundamentos matemáticos para ciência de dados.',
    tags: ['Estatística', 'Python', 'Análise Preditiva'],
  },
]

const typeLabel = {
  award: 'Prêmio',
  work: 'Experiência',
  education: 'Educação',
}

const typeBadge = {
  award:     'bg-yellow-500/10 text-yellow-300 border-yellow-500/25',
  work:      'bg-purple-500/10 text-purple-300 border-purple-500/25',
  education: 'bg-cyan-500/10   text-cyan-300   border-cyan-500/25',
}

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-28 md:py-36 overflow-hidden">
      {/* BG */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-purple-600/6 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-cyan-500/6 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 reveal">
          <span className="section-label">
            <span className="text-purple-400">—</span>
            02. Trajetória
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3 leading-tight">
            Experiência &amp; <span className="text-gradient">Formação</span>
          </h2>
          <p className="font-body text-slate-400 mt-4 max-w-xl text-base">
            Graduações simultâneas, projetos corporativos reais e conquistas em competições nacionais.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-3 mb-12 reveal">
          {Object.entries(typeLabel).map(([key, label]) => (
            <span key={key} className={`text-xs font-mono px-3 py-1 rounded-lg border ${typeBadge[key]}`}>
              {label}
            </span>
          ))}
        </div>

        {/* Timeline items */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/30 via-blue-500/20 to-transparent" />

          <div className="space-y-6">
            {timeline.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className={`reveal reveal-delay-${(i % 4) + 1} relative flex gap-6 md:gap-8`}
                >
                  {/* Dot + Icon */}
                  <div className="relative flex-shrink-0 flex flex-col items-center">
                    <div className={`relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-2xl border ${item.iconBg} flex items-center justify-center shadow-lg`}>
                      <Icon size={20} className={item.iconColor} />
                    </div>
                    {/* Dot on timeline */}
                    <div className={`absolute -left-[1.85rem] md:-left-[2.35rem] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${item.dotColor} ring-4 ring-void`} />
                  </div>

                  {/* Card */}
                  <div className="card-glow flex-1 rounded-2xl bg-void-3 border border-white/5 p-5 md:p-6 hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                    {/* Top accent */}
                    <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.lineColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-display font-bold text-base md:text-lg text-white leading-snug">
                          {item.title}
                        </h3>
                        <p className={`font-mono text-xs mt-0.5 ${item.iconColor}`}>
                          {item.subtitle}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className={`text-xs font-mono px-2.5 py-1 rounded-lg border ${typeBadge[item.type]}`}>
                          {typeLabel[item.type]}
                        </span>
                        <span className="flex items-center gap-1 text-xs font-mono text-slate-500 whitespace-nowrap">
                          <CalendarDays size={11} />
                          {item.period}
                        </span>
                      </div>
                    </div>

                    <p className="font-body text-slate-400 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/4 border border-white/8 text-slate-400"
                        >
                          {tag}
                        </span>
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
