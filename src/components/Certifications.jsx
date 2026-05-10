import { useState } from 'react'
import { ExternalLink, Award, ChevronDown, ChevronUp } from 'lucide-react'

const certifications = [
  // FIAP
  {
    name: 'Aprendizado de Máquina',
    full: 'Certificado de Qualificação Profissional em Aprendizado de Máquina',
    issuer: 'FIAP',
    date: 'Dez 2024',
    category: 'IA & Dados',
    color: 'text-red-400',
    bg: 'bg-red-500/10 border-red-500/25',
    tag: 'bg-red-500/10 text-red-300 border-red-500/25',
    credentialUrl: 'https://www.linkedin.com/in/guilherme-almeida-a7a845324',
  },
  {
    name: 'Serviços Cognitivos',
    full: 'Certificado de Qualificação Profissional em Serviços Cognitivos',
    issuer: 'FIAP',
    date: 'Jun 2025',
    category: 'IA & Dados',
    color: 'text-red-400',
    bg: 'bg-red-500/10 border-red-500/25',
    tag: 'bg-red-500/10 text-red-300 border-red-500/25',
    credentialUrl: 'https://www.linkedin.com/in/guilherme-almeida-a7a845324',
  },
  {
    name: 'Data Visualization',
    full: 'Data Visualization',
    issuer: 'FIAP',
    date: 'Nov 2025',
    category: 'IA & Dados',
    color: 'text-red-400',
    bg: 'bg-red-500/10 border-red-500/25',
    tag: 'bg-red-500/10 text-red-300 border-red-500/25',
    credentialUrl: 'https://on.fiap.com.br/certificate/8c7010dd8dd4f10bb900e4da1848d0dd',
  },
  {
    name: 'Data Modeling',
    full: 'Data Modeling',
    issuer: 'FIAP',
    date: 'Out 2025',
    category: 'IA & Dados',
    color: 'text-red-400',
    bg: 'bg-red-500/10 border-red-500/25',
    tag: 'bg-red-500/10 text-red-300 border-red-500/25',
    credentialUrl: 'https://on.fiap.com.br/certificate/cf31e56cd61c6a777b11420f5bd70b2c',
  },
  {
    name: 'Banco de Dados Oracle',
    full: 'Banco de Dados Oracle',
    issuer: 'FIAP',
    date: 'Out 2024',
    category: 'Banco de Dados',
    color: 'text-red-400',
    bg: 'bg-red-500/10 border-red-500/25',
    tag: 'bg-orange-500/10 text-orange-300 border-orange-500/25',
    credentialUrl: 'https://on.fiap.com.br/certificate/dfc2c9339f90b573c36b611b3e9c8b0a',
  },
  {
    name: 'Formação Social e Sustentabilidade',
    full: 'Formação Social e Sustentabilidade',
    issuer: 'FIAP',
    date: 'Out 2024',
    category: 'Formação',
    color: 'text-red-400',
    bg: 'bg-red-500/10 border-red-500/25',
    tag: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/25',
    credentialUrl: 'https://on.fiap.com.br/certificate/1bdd6256bdfd153fc873b773638d87e3',
  },
  {
    name: 'GS 2025.2 — Future at Work',
    full: 'Global Solution 2025.2 — Future at Work',
    issuer: 'FIAP',
    date: 'Dez 2025',
    category: 'Global Solution',
    color: 'text-red-400',
    bg: 'bg-red-500/10 border-red-500/25',
    tag: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/25',
    credentialUrl: 'https://www.linkedin.com/in/guilherme-almeida-a7a845324',
  },
  {
    name: 'GS 2025.1 — Protect the Future',
    full: 'Global Solution 2025.1 — Protect the Future',
    issuer: 'FIAP',
    date: 'Jul 2025',
    category: 'Global Solution',
    color: 'text-red-400',
    bg: 'bg-red-500/10 border-red-500/25',
    tag: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/25',
    credentialUrl: 'https://www.linkedin.com/in/guilherme-almeida-a7a845324',
  },
  {
    name: 'GS 2024.2 — Green Energy',
    full: 'Global Solution 2024.2 — Green Energy',
    issuer: 'FIAP',
    date: '2024',
    category: 'Global Solution',
    color: 'text-red-400',
    bg: 'bg-red-500/10 border-red-500/25',
    tag: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/25',
    credentialUrl: 'https://www.linkedin.com/in/guilherme-almeida-a7a845324',
  },
  // Alura
  {
    name: 'Power BI: Cálculos com DAX',
    full: 'Power BI: construindo cálculos com Dax',
    issuer: 'Alura',
    date: 'Mar 2026',
    category: 'Dados',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/25',
    tag: 'bg-blue-500/10 text-blue-300 border-blue-500/25',
    credentialUrl: 'https://cursos.alura.com.br/certificate/224b3de1-f8d6-4d36-babd-47a48fa4b13c',
  },
  {
    name: 'Power BI: Visualização e Análise',
    full: 'Power BI: visualizando e analisando dados',
    issuer: 'Alura',
    date: 'Mar 2026',
    category: 'Dados',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/25',
    tag: 'bg-blue-500/10 text-blue-300 border-blue-500/25',
    credentialUrl: 'https://cursos.alura.com.br/certificate/9babd504-19e6-4036-86f4-3081b97e0636',
  },
  {
    name: 'Power BI Desktop Dashboard',
    full: 'Power BI Desktop Dashboard',
    issuer: 'Alura',
    date: 'Fev 2026',
    category: 'Dados',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/25',
    tag: 'bg-blue-500/10 text-blue-300 border-blue-500/25',
    credentialUrl: 'https://cursos.alura.com.br/certificate/603c5c09-b67e-478c-82c5-ed53db390d3d',
  },
  {
    name: 'Power BI Desktop ETL Power Query',
    full: 'Power BI Desktop ETL Power Query',
    issuer: 'Alura',
    date: 'Fev 2026',
    category: 'Dados',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/25',
    tag: 'bg-blue-500/10 text-blue-300 border-blue-500/25',
    credentialUrl: 'https://cursos.alura.com.br/certificate/8c49dc60-1e45-48a5-9d6a-31281a9f86a4',
  },
  // Hashtag
  {
    name: 'Imersão IA — N8N',
    full: 'Imersão Inteligência Artificial — N8N',
    issuer: 'Hashtag Treinamentos',
    date: '2025',
    category: 'IA & Automação',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/25',
    tag: 'bg-purple-500/10 text-purple-300 border-purple-500/25',
    credentialUrl: 'https://www.linkedin.com/in/guilherme-almeida-a7a845324',
  },
]

const VISIBLE_DEFAULT = 6

const issuerStyles = {
  FIAP:                  { dot: 'bg-red-400',    label: 'text-red-400' },
  Alura:                 { dot: 'bg-blue-400',   label: 'text-blue-400' },
  'Hashtag Treinamentos':{ dot: 'bg-purple-400', label: 'text-purple-400' },
}

export default function Certifications() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? certifications : certifications.slice(0, VISIBLE_DEFAULT)

  return (
    <section id="certifications" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-blue-600/6 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-red-500/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-6 reveal">
          <span className="section-label">
            <span className="text-purple-400">—</span>
            05. Certificações
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3 leading-tight">
            Licenças &amp; <span className="text-gradient">Certificados</span>
          </h2>
          <p className="font-body text-slate-400 mt-4 max-w-xl text-base">
            {certifications.length} certificações em IA, dados, visualização e automação.
          </p>
        </div>

        {/* Issuer legend */}
        <div className="flex flex-wrap gap-4 mb-10 reveal">
          {Object.entries(issuerStyles).map(([name, s]) => (
            <div key={name} className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${s.dot}`} />
              <span className={`font-mono text-xs ${s.label}`}>{name}</span>
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {visible.map((cert, i) => {
            const style = issuerStyles[cert.issuer] || issuerStyles['FIAP']
            return (
              <div
                key={cert.name}
                className={`card-glow reveal reveal-delay-${(i % 3) + 1} group relative flex flex-col rounded-xl border ${cert.bg} p-5 transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-2 h-2 rounded-full shrink-0 ${style.dot}`} />
                    <span className={`font-mono text-xs font-semibold ${style.label}`}>
                      {cert.issuer}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-slate-600 shrink-0">{cert.date}</span>
                </div>

                <h3 className="font-display font-semibold text-sm text-white leading-snug mb-2 flex-1">
                  {cert.name}
                </h3>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
                  <span className={`text-xs font-mono px-2 py-0.5 rounded-md border ${cert.tag}`}>
                    {cert.category}
                  </span>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-mono text-slate-500 hover:text-purple-400 transition-colors"
                  >
                    Ver credencial
                    <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Show more/less */}
        {certifications.length > VISIBLE_DEFAULT && (
          <div className="text-center reveal">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 font-display font-semibold text-sm text-purple-400 hover:text-purple-300 transition-colors px-5 py-2.5 rounded-xl border border-purple-600/20 hover:border-purple-600/40 hover:bg-purple-600/8"
            >
              {showAll ? (
                <><ChevronUp size={15} /> Mostrar menos</>
              ) : (
                <><ChevronDown size={15} /> Ver todas as {certifications.length} certificações</>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
