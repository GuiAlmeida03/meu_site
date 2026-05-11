import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer, Tooltip,
} from 'recharts'
import { Code2, BrainCircuit, Server } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import { SectionHeader, StaggerContainer, StaggerItem, FadeUp } from './animations'

const content = {
  pt: {
    sectionLabel: '06. Competências', title: 'Stack', titleGradient: 'técnico',
    subtitle: 'Ferramentas e tecnologias que uso para construir soluções robustas e inteligentes.',
    techLabel: 'Tecnologias & Ferramentas',
    skillGroups: [
      {
        icon: BrainCircuit, label: 'Dados & IA',
        color: 'text-purple-400', border: 'border-purple-600/25', bg: 'bg-purple-600/8', iconBg: 'bg-purple-600/15',
        stroke: 'rgba(139,92,246,0.9)', fill: 'rgba(139,92,246,0.18)', dot: '#8b5cf6', bar: 'from-purple-500 to-purple-400',
        skills: [
          { name: 'Machine Learning', level: 85 },
          { name: 'Web Scraping',     level: 88 },
          { name: 'Automação',        level: 87 },
          { name: 'An. Preditiva',    level: 80 },
          { name: 'Power BI',         level: 78 },
        ],
      },
      {
        icon: Code2, label: 'Linguagens & Frameworks',
        color: 'text-blue-400', border: 'border-blue-600/25', bg: 'bg-blue-600/8', iconBg: 'bg-blue-600/15',
        stroke: 'rgba(59,130,246,0.9)', fill: 'rgba(59,130,246,0.18)', dot: '#3b82f6', bar: 'from-blue-500 to-cyan-400',
        skills: [
          { name: 'Python',      level: 90 },
          { name: 'React',       level: 80 },
          { name: 'JavaScript',  level: 78 },
          { name: 'SQL',         level: 75 },
        ],
      },
      {
        icon: Server, label: 'Infra & Hardware',
        color: 'text-cyan-400', border: 'border-cyan-500/25', bg: 'bg-cyan-500/8', iconBg: 'bg-cyan-500/15',
        stroke: 'rgba(6,182,212,0.9)', fill: 'rgba(6,182,212,0.18)', dot: '#06b6d4', bar: 'from-cyan-400 to-teal-400',
        skills: [
          { name: 'Alta Perf.', level: 95 },
          { name: 'Servidores', level: 85 },
          { name: 'Linux',      level: 72 },
        ],
      },
    ],
  },
  en: {
    sectionLabel: '06. Skills', title: 'Tech', titleGradient: 'stack',
    subtitle: 'Tools and technologies I use to build robust, intelligent solutions.',
    techLabel: 'Technologies & Tools',
    skillGroups: [
      {
        icon: BrainCircuit, label: 'Data & AI',
        color: 'text-purple-400', border: 'border-purple-600/25', bg: 'bg-purple-600/8', iconBg: 'bg-purple-600/15',
        stroke: 'rgba(139,92,246,0.9)', fill: 'rgba(139,92,246,0.18)', dot: '#8b5cf6', bar: 'from-purple-500 to-purple-400',
        skills: [
          { name: 'Machine Learning', level: 85 },
          { name: 'Web Scraping',     level: 88 },
          { name: 'Automation',       level: 87 },
          { name: 'Pred. Analytics',  level: 80 },
          { name: 'Power BI',         level: 78 },
        ],
      },
      {
        icon: Code2, label: 'Languages & Frameworks',
        color: 'text-blue-400', border: 'border-blue-600/25', bg: 'bg-blue-600/8', iconBg: 'bg-blue-600/15',
        stroke: 'rgba(59,130,246,0.9)', fill: 'rgba(59,130,246,0.18)', dot: '#3b82f6', bar: 'from-blue-500 to-cyan-400',
        skills: [
          { name: 'Python',      level: 90 },
          { name: 'React',       level: 80 },
          { name: 'JavaScript',  level: 78 },
          { name: 'SQL',         level: 75 },
        ],
      },
      {
        icon: Server, label: 'Infra & Hardware',
        color: 'text-cyan-400', border: 'border-cyan-500/25', bg: 'bg-cyan-500/8', iconBg: 'bg-cyan-500/15',
        stroke: 'rgba(6,182,212,0.9)', fill: 'rgba(6,182,212,0.18)', dot: '#06b6d4', bar: 'from-cyan-400 to-teal-400',
        skills: [
          { name: 'High Perf.',  level: 95 },
          { name: 'Servers',     level: 85 },
          { name: 'Linux',       level: 72 },
        ],
      },
    ],
  },
}

const techTags = [
  'Python','React','JavaScript','Machine Learning','Pandas','NumPy',
  'Scikit-learn','BeautifulSoup','Selenium','Git','Tailwind CSS',
  'FastAPI','SQL','Power BI','Linux','N8N','LangChain',
]

const CustomTooltip = ({ active, payload }) => {
  if (active && payload?.length) {
    return (
      <div className="px-3 py-2 rounded-lg bg-void-3 border border-white/15 font-mono text-xs text-slate-200 shadow-lg">
        {payload[0].payload.name}: <span className="font-bold">{payload[0].value}%</span>
      </div>
    )
  }
  return null
}

function SkillBar({ name, level, bar }) {
  return (
    <div className="mb-3 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-body text-sm text-slate-300">{name}</span>
        <span className="font-mono text-xs text-slate-500">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <div className={`h-full rounded-full bg-gradient-to-r ${bar}`} style={{ width: `${level}%` }} />
      </div>
    </div>
  )
}

function SkillCard({ group, delay }) {
  const Icon = group.icon
  // Convert skills to radar-compatible data
  const radarData = group.skills.map(s => ({ name: s.name, value: s.level }))

  return (
    <StaggerItem>
      <div className={`rounded-2xl border ${group.border} ${group.bg} overflow-hidden h-full`}>
        {/* Header */}
        <div className="flex items-center gap-3 px-6 pt-6 pb-4">
          <div className={`p-2.5 rounded-xl ${group.iconBg}`}>
            <Icon size={18} className={group.color} />
          </div>
          <h3 className={`font-display font-semibold text-sm ${group.color}`}>{group.label}</h3>
        </div>

        {/* Radar chart */}
        <div className="px-2 pb-2">
          <ResponsiveContainer width="100%" height={200}>
            <RadarChart data={radarData} margin={{ top: 8, right: 20, bottom: 8, left: 20 }}>
              <PolarGrid gridType="polygon" stroke="rgba(255,255,255,0.06)" />
              <PolarAngleAxis
                dataKey="name"
                tick={{ fill: '#94a3b8', fontSize: 9, fontFamily: 'JetBrains Mono' }}
              />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar
                dataKey="value"
                stroke={group.stroke}
                fill={group.fill}
                strokeWidth={2}
                dot={{ fill: group.dot, r: 3, strokeWidth: 0 }}
                activeDot={{ fill: '#22d3ee', r: 5, strokeWidth: 0 }}
              />
              <Tooltip content={<CustomTooltip />} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Skill bars */}
        <div className="px-6 pb-6 border-t border-white/5 pt-4">
          {group.skills.map(s => (
            <SkillBar key={s.name} name={s.name} level={s.level} bar={group.bar} />
          ))}
        </div>
      </div>
    </StaggerItem>
  )
}

export default function Skills() {
  const { lang } = useLang()
  const tr = content[lang]

  return (
    <section id="skills" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-purple-600/6 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-cyan-500/6 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <SectionHeader className="mb-16">
          <span className="section-label">
            <span className="text-purple-400">—</span>{tr.sectionLabel}
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3">
            {tr.title} <span className="text-gradient">{tr.titleGradient}</span>
          </h2>
          <p className="font-body text-slate-400 mt-4 max-w-xl text-base">{tr.subtitle}</p>
        </SectionHeader>

        {/* 3 cards each with its own radar */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-12" stagger={0.12} delayStart={0.1}>
          {tr.skillGroups.map((group, i) => (
            <SkillCard key={group.label} group={group} delay={i * 0.12} />
          ))}
        </StaggerContainer>

        {/* Tech tag cloud */}
        <FadeUp delay={0.3}>
          <p className="font-mono text-xs text-slate-500 tracking-widest uppercase text-center mb-6">
            {tr.techLabel}
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {techTags.map(tag => (
              <span
                key={tag}
                className="px-3.5 py-1.5 rounded-lg text-xs font-mono text-slate-400 border border-white/8 bg-white/3 hover:text-purple-300 hover:border-purple-600/30 hover:bg-purple-600/8 transition-all duration-200 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
