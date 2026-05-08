import { Bot, Globe, Layers, ExternalLink, ArrowRight } from 'lucide-react'

const projects = [
  {
    id: '01',
    icon: Bot,
    title: 'Soluções Corporativas',
    subtitle: 'Sohipren',
    description:
      'Desenvolvimento de um chatbot automatizado e um modelo de predição de vendas focado em resultados de negócio, integrando automação inteligente ao fluxo comercial da empresa.',
    tags: ['Python', 'Machine Learning', 'Análise de Dados'],
    tagColors: ['bg-purple-600/20 text-purple-300 border-purple-600/30', 'bg-blue-600/20 text-blue-300 border-blue-600/30', 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'],
    accentFrom: 'from-purple-600',
    accentTo: 'to-blue-600',
    glowColor: 'rgba(124,58,237,0.15)',
  },
  {
    id: '02',
    icon: Globe,
    title: 'Sistema Inteligente',
    subtitle: 'YouVisa',
    description:
      'Criação de um chatbot com sistema integrado de triagem de status de usuários e desenvolvimento do mascote corporativo, otimizando a experiência de atendimento digital.',
    tags: ['IA', 'Automação', 'Lógica de Triagem'],
    tagColors: ['bg-blue-600/20 text-blue-300 border-blue-600/30', 'bg-indigo-600/20 text-indigo-300 border-indigo-600/30', 'bg-violet-600/20 text-violet-300 border-violet-600/30'],
    accentFrom: 'from-blue-600',
    accentTo: 'to-cyan-500',
    glowColor: 'rgba(37,99,235,0.15)',
  },
  {
    id: '03',
    icon: Layers,
    title: 'Crochê Companheiro',
    subtitle: 'App Web',
    description:
      'Aplicativo web focado no usuário final para gerenciamento de projetos de crochê, criado com ênfase em UX/UI moderna e máxima usabilidade para o público-alvo.',
    tags: ['React', 'JavaScript', 'Front-end'],
    tagColors: ['bg-cyan-500/20 text-cyan-300 border-cyan-500/30', 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30', 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'],
    accentFrom: 'from-cyan-500',
    accentTo: 'to-purple-600',
    glowColor: 'rgba(6,182,212,0.15)',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-36 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-void-2/60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 reveal">
          <span className="section-label">
            <span className="text-purple-400">—</span>
            02. Projetos
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3">
            O que já <span className="text-gradient">construí</span>
          </h2>
          <p className="font-body text-slate-400 mt-4 max-w-xl text-base">
            Projetos reais com impacto direto em negócios, combinando dados, automação e interfaces modernas.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon
            return (
              <article
                key={project.id}
                className={`card-glow reveal reveal-delay-${i + 1} group relative flex flex-col rounded-2xl bg-void-3 border border-white/5 overflow-hidden transition-all duration-300 hover:-translate-y-2`}
                style={{ '--glow': project.glowColor }}
              >
                {/* Top accent bar */}
                <div className={`h-0.5 w-full bg-gradient-to-r ${project.accentFrom} ${project.accentTo} opacity-80 group-hover:opacity-100 transition-opacity`} />

                <div className="flex flex-col flex-1 p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${project.accentFrom} ${project.accentTo} opacity-90`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <span className="font-mono text-xs text-slate-600 font-medium pt-1">
                      {project.id}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-white leading-tight mb-1">
                    {project.title}
                  </h3>
                  <p className={`font-mono text-xs mb-4 bg-gradient-to-r ${project.accentFrom} ${project.accentTo} bg-clip-text text-transparent`}>
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="font-body text-slate-400 text-sm leading-relaxed flex-1 mb-5">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, j) => (
                      <span
                        key={tag}
                        className={`text-xs font-mono px-2.5 py-1 rounded-md border ${project.tagColors[j]}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover glow overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${project.glowColor}, transparent 70%)` }}
                />
              </article>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center reveal">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-display font-semibold text-sm text-purple-400 hover:text-purple-300 transition-colors group"
          >
            Ver todos no GitHub
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
