import { Code2, Database, Server, BrainCircuit, Globe, Wrench } from 'lucide-react'

const skillGroups = [
  {
    icon: Code2,
    label: 'Linguagens & Frameworks',
    color: 'text-purple-400',
    border: 'border-purple-600/25',
    bg: 'bg-purple-600/8',
    iconBg: 'bg-purple-600/15',
    skills: [
      { name: 'Python', level: 90, bar: 'from-purple-500 to-purple-400' },
      { name: 'React', level: 80, bar: 'from-blue-500 to-cyan-400' },
      { name: 'JavaScript', level: 78, bar: 'from-yellow-500 to-amber-400' },
    ],
  },
  {
    icon: BrainCircuit,
    label: 'Dados & IA',
    color: 'text-blue-400',
    border: 'border-blue-600/25',
    bg: 'bg-blue-600/8',
    iconBg: 'bg-blue-600/15',
    skills: [
      { name: 'Machine Learning', level: 85, bar: 'from-blue-500 to-purple-500' },
      { name: 'Web Scraping', level: 88, bar: 'from-cyan-500 to-blue-500' },
      { name: 'Automação', level: 87, bar: 'from-indigo-500 to-blue-400' },
      { name: 'Análise Preditiva', level: 80, bar: 'from-violet-500 to-purple-400' },
    ],
  },
  {
    icon: Server,
    label: 'Infraestrutura & Hardware',
    color: 'text-cyan-400',
    border: 'border-cyan-500/25',
    bg: 'bg-cyan-500/8',
    iconBg: 'bg-cyan-500/15',
    skills: [
      { name: 'PCs de Alta Performance', level: 95, bar: 'from-cyan-400 to-teal-400' },
      { name: 'Servidores Customizados', level: 85, bar: 'from-teal-500 to-cyan-400' },
    ],
  },
]

function SkillBar({ name, level, bar }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-body text-sm text-slate-300">{name}</span>
        <span className="font-mono text-xs text-slate-500">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${bar} transition-all duration-1000`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

const techTags = [
  'Python', 'React', 'JavaScript', 'Machine Learning', 'Pandas', 'NumPy',
  'Scikit-learn', 'BeautifulSoup', 'Selenium', 'Git', 'Tailwind CSS',
  'FastAPI', 'SQL', 'Power BI', 'Linux',
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-36 overflow-hidden">
      {/* BG */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-purple-600/6 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-cyan-500/6 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 reveal">
          <span className="section-label">
            <span className="text-purple-400">—</span>
            03. Competências
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3">
            Stack <span className="text-gradient">técnico</span>
          </h2>
          <p className="font-body text-slate-400 mt-4 max-w-xl text-base">
            Ferramentas e tecnologias que uso para construir soluções robustas e inteligentes.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {skillGroups.map((group, i) => {
            const Icon = group.icon
            return (
              <div
                key={group.label}
                className={`reveal reveal-delay-${i + 1} card-glow rounded-2xl border ${group.border} ${group.bg} p-6 transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2.5 rounded-xl ${group.iconBg}`}>
                    <Icon size={18} className={group.color} />
                  </div>
                  <h3 className={`font-display font-semibold text-sm ${group.color}`}>
                    {group.label}
                  </h3>
                </div>
                {group.skills.map(skill => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            )
          })}
        </div>

        {/* Tech tag cloud */}
        <div className="reveal">
          <p className="font-mono text-xs text-slate-500 tracking-widest uppercase text-center mb-6">
            Tecnologias &amp; Ferramentas
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {techTags.map((tag, i) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 rounded-lg text-xs font-mono text-slate-400 border border-white/8 bg-white/3 hover:text-purple-300 hover:border-purple-600/30 hover:bg-purple-600/8 transition-all duration-200 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
