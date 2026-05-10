import { Trophy, Medal, Star, Award } from 'lucide-react'

const awards = [
  {
    icon: Trophy,
    place: 'Vencedor',
    title: 'NEXT — Projeto Sohipren',
    org: 'FIAP',
    year: '2025',
    description:
      'Solução para otimizar vendas e atendimento da Sohipren utilizando modelos preditivos e visão computacional.',
    accentFrom: 'from-yellow-500',
    accentTo: 'to-amber-400',
    iconColor: 'text-yellow-400',
    iconBg: 'bg-yellow-500/15',
    border: 'border-yellow-500/25',
    bg: 'bg-yellow-500/5',
    glow: 'rgba(234,179,8,0.12)',
    tagColor: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/30',
  },
  {
    icon: Medal,
    place: '1º Lugar',
    title: 'Global Solution — Protect the Future',
    org: 'FIAP',
    year: null,
    description:
      'Uso de tecnologia e inteligência artificial para previsão de desastres naturais, protegendo comunidades em risco.',
    accentFrom: 'from-purple-500',
    accentTo: 'to-blue-500',
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-500/15',
    border: 'border-purple-500/25',
    bg: 'bg-purple-500/5',
    glow: 'rgba(124,58,237,0.12)',
    tagColor: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
  },
  {
    icon: Star,
    place: '1º Lugar',
    title: 'Global Solution — Green Energy',
    org: 'FIAP',
    year: null,
    description:
      'Integração de IoT e Machine Learning para promover eficiência energética e sustentabilidade.',
    accentFrom: 'from-emerald-500',
    accentTo: 'to-cyan-500',
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/15',
    border: 'border-emerald-500/25',
    bg: 'bg-emerald-500/5',
    glow: 'rgba(16,185,129,0.12)',
    tagColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  },
  {
    icon: Award,
    place: '1º Lugar',
    title: 'Global Solution — O Futuro do Trabalho',
    org: 'FIAP',
    year: null,
    description:
      'Prova de conceito de processamento neuromórfico utilizando o modelo computacional LIF (Leaky Integrate-and-Fire).',
    accentFrom: 'from-blue-500',
    accentTo: 'to-cyan-400',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/15',
    border: 'border-blue-500/25',
    bg: 'bg-blue-500/5',
    glow: 'rgba(37,99,235,0.12)',
    tagColor: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
  },
]

export default function Awards() {
  return (
    <section id="awards" className="relative py-28 md:py-36 overflow-hidden">
      {/* BG accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-yellow-500/4 blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-purple-600/8 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 reveal">
          <span className="section-label">
            <span className="text-purple-400">—</span>
            01. Conquistas
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3 leading-tight">
            Prêmios & <span className="text-gradient">Reconhecimentos</span>
          </h2>
          <p className="font-body text-slate-400 mt-4 max-w-xl text-base">
            Projetos premiados em competições nacionais da FIAP, reconhecidos pela
            inovação e impacto real na indústria.
          </p>
        </div>

        {/* Highlight banner — NEXT winner */}
        <div className="reveal mb-6">
          <div className="relative rounded-2xl overflow-hidden border border-yellow-500/30 bg-gradient-to-r from-yellow-500/10 via-amber-500/5 to-transparent p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Shimmer bar */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-500 via-amber-400 to-transparent" />

            <div className="flex items-center gap-4 shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center">
                <Trophy size={28} className="text-yellow-400" />
              </div>
              <div>
                <span className="font-mono text-xs text-yellow-400 tracking-widest uppercase">
                  Destaque — FIAP · 2025
                </span>
                <h3 className="font-display font-bold text-xl md:text-2xl text-white mt-0.5">
                  Vencedor do NEXT
                </h3>
              </div>
            </div>

            <div className="md:border-l border-yellow-500/20 md:pl-8 flex-1">
              <p className="font-body text-slate-300 text-base leading-relaxed">
                Projeto <span className="text-yellow-300 font-medium">Sohipren</span> — solução
                corporativa completa com modelos preditivos de vendas e visão computacional,
                reconhecida como melhor projeto entre todas as turmas.
              </p>
            </div>

            {/* Decorative star */}
            <div className="absolute top-4 right-6 opacity-20">
              <Star size={48} className="text-yellow-400 fill-yellow-400" />
            </div>
          </div>
        </div>

        {/* Other awards grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {awards.slice(1).map((award, i) => {
            const Icon = award.icon
            return (
              <div
                key={award.title}
                className={`card-glow reveal reveal-delay-${i + 1} group relative flex flex-col rounded-2xl border ${award.border} ${award.bg} p-6 transition-all duration-300 hover:-translate-y-2 overflow-hidden`}
              >
                {/* Top accent */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${award.accentFrom} ${award.accentTo}`} />

                {/* Glow hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${award.glow}, transparent 70%)` }}
                />

                <div className="relative z-10 flex flex-col flex-1">
                  {/* Icon + place badge */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`p-3 rounded-xl ${award.iconBg}`}>
                      <Icon size={20} className={award.iconColor} />
                    </div>
                    <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-lg border ${award.tagColor}`}>
                      {award.place}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-base text-white leading-snug mb-1">
                    {award.title}
                  </h3>

                  {/* Org + year */}
                  <p className={`font-mono text-xs mb-4 ${award.iconColor}`}>
                    {award.org}{award.year ? ` · ${award.year}` : ''}
                  </p>

                  {/* Description */}
                  <p className="font-body text-slate-400 text-sm leading-relaxed flex-1">
                    {award.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
