import { useState, useEffect } from 'react'
import { Bot, Globe, Layers, X, ArrowRight, Tag, CheckCircle2 } from 'lucide-react'

const projects = [
  {
    id: '01',
    icon: Bot,
    title: 'Soluções Corporativas',
    subtitle: 'Sohipren',
    description: 'Desenvolvimento de um chatbot automatizado e um modelo de predição de vendas focado em resultados de negócio.',
    tags: ['Python', 'Machine Learning', 'Análise de Dados'],
    tagColors: ['bg-purple-600/20 text-purple-300 border-purple-600/30', 'bg-blue-600/20 text-blue-300 border-blue-600/30', 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'],
    accentFrom: 'from-purple-600',
    accentTo: 'to-blue-600',
    glowColor: 'rgba(124,58,237,0.15)',
    fullDescription: 'Projeto corporativo real desenvolvido para a empresa Sohipren, com foco em automação do atendimento e aumento de performance comercial. A solução integra dois sistemas principais: um chatbot inteligente para triagem e suporte ao cliente, e um modelo preditivo de vendas que analisa histórico e padrões para gerar previsões com alta acurácia.',
    highlights: [
      'Chatbot automatizado com fluxo de atendimento customizado',
      'Modelo de predição de vendas com análise de séries temporais',
      'Integração com sistemas existentes da empresa',
      'Projeto premiado como vencedor do NEXT 2025 na FIAP',
    ],
    stack: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas', 'Análise de Dados', 'Automação'],
  },
  {
    id: '02',
    icon: Globe,
    title: 'Sistema Inteligente',
    subtitle: 'YouVisa',
    description: 'Criação de um chatbot com sistema integrado de triagem de status de usuários e desenvolvimento do mascote corporativo.',
    tags: ['IA', 'Automação', 'Lógica de Triagem'],
    tagColors: ['bg-blue-600/20 text-blue-300 border-blue-600/30', 'bg-indigo-600/20 text-indigo-300 border-indigo-600/30', 'bg-violet-600/20 text-violet-300 border-violet-600/30'],
    accentFrom: 'from-blue-600',
    accentTo: 'to-cyan-500',
    glowColor: 'rgba(37,99,235,0.15)',
    fullDescription: 'Solução digital completa desenvolvida para a YouVisa, empresa do setor de consultoria de vistos. O projeto abrangeu desde o design de identidade visual — incluindo o mascote corporativo — até a implementação de um sistema de atendimento inteligente com triagem automatizada de status dos usuários.',
    highlights: [
      'Chatbot com lógica de triagem por status do processo',
      'Desenvolvimento do mascote e identidade visual corporativa',
      'Automação de respostas e redução do tempo de atendimento',
      'Sistema de categorização inteligente de usuários',
    ],
    stack: ['IA', 'Automação', 'Lógica de Triagem', 'UX Design', 'Identidade Visual'],
  },
  {
    id: '03',
    icon: Layers,
    title: 'Crochê Companheiro',
    subtitle: 'App Web',
    description: 'Aplicativo web focado no usuário final para gerenciamento de projetos de crochê, criado com foco em UX/UI e usabilidade.',
    tags: ['React', 'JavaScript', 'Front-end'],
    tagColors: ['bg-cyan-500/20 text-cyan-300 border-cyan-500/30', 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30', 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'],
    accentFrom: 'from-cyan-500',
    accentTo: 'to-purple-600',
    glowColor: 'rgba(6,182,212,0.15)',
    fullDescription: 'Aplicativo web desenvolvido com foco total na experiência do usuário final. O Crochê Companheiro permite gerenciar projetos de crochê de forma intuitiva: controle de materiais, progresso de peças, registros de pontos e histórico. A interface foi projetada priorizando acessibilidade e usabilidade para o público-alvo.',
    highlights: [
      'Interface mobile-first com design intuitivo e acessível',
      'Gerenciamento completo de projetos e materiais',
      'Controle de progresso e registro de pontos',
      'Foco em UX/UI para usuário não-técnico',
    ],
    stack: ['React', 'JavaScript', 'Tailwind CSS', 'Front-end', 'UX/UI'],
  },
]

function Modal({ project, onClose }) {
  const Icon = project.icon

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="absolute inset-0 bg-void/80 backdrop-blur-md" onClick={onClose} />
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-void-3 border border-white/10 shadow-2xl">
        <div className={`h-1 w-full bg-gradient-to-r ${project.accentFrom} ${project.accentTo}`} />
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${project.accentFrom} ${project.accentTo}`}>
                <Icon size={22} className="text-white" />
              </div>
              <div>
                <span className="font-mono text-xs text-slate-500">{project.id}</span>
                <h3 className="font-display font-bold text-xl text-white leading-tight">{project.title}</h3>
                <p className={`font-mono text-xs bg-gradient-to-r ${project.accentFrom} ${project.accentTo} bg-clip-text text-transparent`}>{project.subtitle}</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 rounded-xl text-slate-500 hover:text-white hover:bg-white/8 transition-all shrink-0">
              <X size={18} />
            </button>
          </div>
          <p className="font-body text-slate-300 text-base leading-relaxed mb-6">{project.fullDescription}</p>
          <div className="mb-6">
            <h4 className="font-display font-semibold text-sm text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-purple-400" /> Destaques
            </h4>
            <ul className="space-y-2.5">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm font-body text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />{h}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Tag size={14} className="text-cyan-400" /> Stack utilizada
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span key={t} className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <>
      <section id="projects" className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-void-2/60 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="mb-16 reveal">
            <span className="section-label">
              <span className="text-purple-400">—</span>
              04. Projetos
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3">
              O que já <span className="text-gradient">construí</span>
            </h2>
            <p className="font-body text-slate-400 mt-4 max-w-xl text-base">
              Projetos reais com impacto direto em negócios. Clique em um card para ver os detalhes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, i) => {
              const Icon = project.icon
              return (
                <article
                  key={project.id}
                  onClick={() => setActiveProject(project)}
                  className={`card-glow reveal reveal-delay-${i + 1} group relative flex flex-col rounded-2xl bg-void-3 border border-white/5 overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer`}
                >
                  <div className={`h-0.5 w-full bg-gradient-to-r ${project.accentFrom} ${project.accentTo} opacity-80 group-hover:opacity-100 transition-opacity`} />
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-start justify-between mb-5">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${project.accentFrom} ${project.accentTo} opacity-90`}>
                        <Icon size={20} className="text-white" />
                      </div>
                      <span className="font-mono text-xs text-slate-600 font-medium pt-1">{project.id}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-white leading-tight mb-1">{project.title}</h3>
                    <p className={`font-mono text-xs mb-4 bg-gradient-to-r ${project.accentFrom} ${project.accentTo} bg-clip-text text-transparent`}>{project.subtitle}</p>
                    <p className="font-body text-slate-400 text-sm leading-relaxed flex-1 mb-5">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, j) => (
                        <span key={tag} className={`text-xs font-mono px-2.5 py-1 rounded-md border ${project.tagColors[j]}`}>{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-600 group-hover:text-purple-400 transition-colors mt-auto pt-3 border-t border-white/5">
                      <span>Ver detalhes</span>
                      <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: `radial-gradient(circle at 50% 0%, ${project.glowColor}, transparent 70%)` }} />
                </article>
              )
            })}
          </div>

          <div className="mt-12 text-center reveal">
            <a href="https://github.com/GuiAlmeida03" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-display font-semibold text-sm text-purple-400 hover:text-purple-300 transition-colors group">
              Ver todos no GitHub
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {activeProject && <Modal project={activeProject} onClose={() => setActiveProject(null)} />}
    </>
  )
}
