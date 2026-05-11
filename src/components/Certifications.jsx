import { useState, useEffect, useRef } from 'react'
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'

const LINKEDIN = 'https://www.linkedin.com/in/guilherme-almeida-a7a845324'

const certifications = [
  {
    name: 'Aprendizado de Máquina',
    issuer: 'FIAP',
    date: 'Dez 2024',
    category: 'IA & Dados',
    credentialUrl: LINKEDIN,
  },
  {
    name: 'Serviços Cognitivos',
    issuer: 'FIAP',
    date: 'Jun 2025',
    category: 'IA & Dados',
    credentialUrl: LINKEDIN,
  },
  {
    name: 'Data Visualization',
    issuer: 'FIAP',
    date: 'Nov 2025',
    category: 'IA & Dados',
    credentialUrl: LINKEDIN,
  },
  {
    name: 'Data Modeling',
    issuer: 'FIAP',
    date: 'Out 2025',
    category: 'IA & Dados',
    credentialUrl: LINKEDIN,
  },
  {
    name: 'Banco de Dados Oracle',
    issuer: 'FIAP',
    date: 'Out 2024',
    category: 'Banco de Dados',
    credentialUrl: LINKEDIN,
  },
  {
    name: 'Formação Social e Sustentabilidade',
    issuer: 'FIAP',
    date: 'Out 2024',
    category: 'Formação',
    credentialUrl: LINKEDIN,
  },
  {
    name: 'GS 2025.2 — Future at Work',
    issuer: 'FIAP',
    date: 'Dez 2025',
    category: 'Global Solution',
    credentialUrl: LINKEDIN,
  },
  {
    name: 'GS 2025.1 — Protect the Future',
    issuer: 'FIAP',
    date: 'Jul 2025',
    category: 'Global Solution',
    credentialUrl: LINKEDIN,
  },
  {
    name: 'GS 2024.2 — Green Energy',
    issuer: 'FIAP',
    date: '2024',
    category: 'Global Solution',
    credentialUrl: LINKEDIN,
  },
  {
    name: 'Power BI: Cálculos com DAX',
    issuer: 'Alura',
    date: 'Mar 2026',
    category: 'Dados',
    credentialUrl: 'https://cursos.alura.com.br/certificate/224b3de1-f8d6-4d36-babd-47a48fa4b13c',
  },
  {
    name: 'Power BI: Visualização e Análise',
    issuer: 'Alura',
    date: 'Mar 2026',
    category: 'Dados',
    credentialUrl: 'https://cursos.alura.com.br/certificate/9babd504-19e6-4036-86f4-3081b97e0636',
  },
  {
    name: 'Power BI Desktop Dashboard',
    issuer: 'Alura',
    date: 'Fev 2026',
    category: 'Dados',
    credentialUrl: 'https://cursos.alura.com.br/certificate/603c5c09-b67e-478c-82c5-ed53db390d3d',
  },
  {
    name: 'Power BI Desktop ETL Power Query',
    issuer: 'Alura',
    date: 'Fev 2026',
    category: 'Dados',
    credentialUrl: 'https://cursos.alura.com.br/certificate/8c49dc60-1e45-48a5-9d6a-31281a9f86a4',
  },
  {
    name: 'Imersão IA — N8N',
    issuer: 'Hashtag Treinamentos',
    date: '2025',
    category: 'IA & Automação',
    credentialUrl: LINKEDIN,
  },
]

const issuerStyle = {
  'FIAP':                   { dot: 'bg-red-400',    text: 'text-red-400',    card: 'border-red-500/20 bg-red-500/5',    tag: 'bg-red-500/10 text-red-300 border-red-500/25' },
  'Alura':                  { dot: 'bg-blue-400',   text: 'text-blue-400',   card: 'border-blue-500/20 bg-blue-500/5',  tag: 'bg-blue-500/10 text-blue-300 border-blue-500/25' },
  'Hashtag Treinamentos':   { dot: 'bg-purple-400', text: 'text-purple-400', card: 'border-purple-500/20 bg-purple-500/5', tag: 'bg-purple-500/10 text-purple-300 border-purple-500/25' },
}

const VISIBLE_DEFAULT = 6

function CertCard({ cert }) {
  const style = issuerStyle[cert.issuer]
  return (
    <div className={`group relative flex flex-col rounded-xl border ${style.card} p-5 transition-all duration-300 hover:-translate-y-1`}>
      {/* header row */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full shrink-0 ${style.dot}`} />
          <span className={`font-mono text-xs font-semibold ${style.text}`}>{cert.issuer}</span>
        </div>
        <span className="font-mono text-xs text-slate-600 shrink-0">{cert.date}</span>
      </div>

      {/* name */}
      <h3 className="font-display font-semibold text-sm text-white leading-snug flex-1 mb-3">
        {cert.name}
      </h3>

      {/* footer row */}
      <div className="flex items-center justify-between pt-3 border-t border-white/5">
        <span className={`text-xs font-mono px-2 py-0.5 rounded-md border ${style.tag}`}>
          {cert.category}
        </span>
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          className="flex items-center gap-1 text-xs font-mono text-slate-500 hover:text-purple-400 transition-colors"
        >
          Ver credencial
          <ExternalLink size={10} />
        </a>
      </div>
    </div>
  )
}

export default function Certifications() {
  const [showAll, setShowAll] = useState(false)
  const extraRef = useRef(null)

  // When expanding, scroll extra cards into view smoothly
  useEffect(() => {
    if (showAll && extraRef.current) {
      setTimeout(() => {
        extraRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }, 50)
    }
  }, [showAll])

  const visible   = certifications.slice(0, VISIBLE_DEFAULT)
  const extra     = certifications.slice(VISIBLE_DEFAULT)

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

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-10 reveal">
          {Object.entries(issuerStyle).map(([name, s]) => (
            <div key={name} className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${s.dot}`} />
              <span className={`font-mono text-xs ${s.text}`}>{name}</span>
            </div>
          ))}
        </div>

        {/* Always-visible cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {visible.map(cert => <CertCard key={cert.name} cert={cert} />)}
        </div>

        {/* Extra cards — rendered always, just hidden via CSS */}
        <div
          ref={extraRef}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 overflow-hidden transition-all duration-500 ${
            showAll ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          {extra.map(cert => <CertCard key={cert.name} cert={cert} />)}
        </div>

        {/* Toggle button */}
        <div className="text-center">
          <button
            onClick={() => setShowAll(prev => !prev)}
            className="inline-flex items-center gap-2 font-display font-semibold text-sm text-purple-400 hover:text-purple-300 transition-colors px-5 py-2.5 rounded-xl border border-purple-600/20 hover:border-purple-600/40 hover:bg-purple-600/8"
          >
            {showAll
              ? <><ChevronUp size={15} /> Mostrar menos</>
              : <><ChevronDown size={15} /> Ver todas as {certifications.length} certificações</>
            }
          </button>
        </div>
      </div>
    </section>
  )
}
