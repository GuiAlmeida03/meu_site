import { GraduationCap, Cpu, BrainCircuit, FlaskConical } from 'lucide-react'

const highlights = [
  { icon: BrainCircuit, label: 'IA & Machine Learning', color: 'text-purple-400', bg: 'bg-purple-600/10 border-purple-600/20' },
  { icon: FlaskConical,  label: 'Ciência de Dados',      color: 'text-blue-400',   bg: 'bg-blue-600/10 border-blue-600/20' },
  { icon: GraduationCap, label: 'FIAP + UFMS',           color: 'text-cyan-400',   bg: 'bg-cyan-500/10 border-cyan-500/20' },
  { icon: Cpu,           label: 'Infra & Hardware',       color: 'text-emerald-400',bg: 'bg-emerald-500/10 border-emerald-500/20' },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden">
      {/* BG accent */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-600/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-purple-600/8 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 reveal">
          <span className="section-label">
            <span className="text-purple-400">—</span>
            01. Sobre Mim
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3 leading-tight">
            Quem sou <span className="text-gradient">eu</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text block */}
          <div className="reveal reveal-delay-1">
            {/* Decorative line */}
            <div className="w-12 h-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mb-6" />

            <p className="font-body text-slate-300 text-lg leading-relaxed mb-6">
              Sou um profissional apaixonado por tecnologia em todas as suas camadas, do{' '}
              <span className="text-purple-300 font-medium">hardware ao software</span>. Atualmente,
              curso duas graduações tecnológicas simultaneamente:{' '}
              <span className="text-blue-300 font-medium">Inteligência Artificial na FIAP</span> e{' '}
              <span className="text-cyan-300 font-medium">Ciência de Dados na UFMS</span>.
            </p>

            <p className="font-body text-slate-400 text-base leading-relaxed">
              Tenho um perfil prático, unindo forte conhecimento em infraestrutura e montagem de
              setups de alto desempenho com o desenvolvimento de algoritmos de{' '}
              <span className="text-purple-300 font-medium">Machine Learning</span>, web scraping e
              criação de interfaces.
            </p>

            {/* Decorative code snippet */}
            <div className="mt-8 p-4 rounded-xl bg-void-3 border border-purple-600/15 font-mono text-xs text-slate-400 leading-relaxed">
              <span className="text-purple-400">const</span>{' '}
              <span className="text-cyan-300">guilherme</span>{' '}
              <span className="text-slate-500">=</span>{' '}
              <span className="text-blue-400">{'{'}</span>
              <br />
              &nbsp;&nbsp;
              <span className="text-slate-300">paixão</span>
              <span className="text-slate-500">:</span>{' '}
              <span className="text-emerald-300">"tecnologia"</span>
              <span className="text-slate-500">,</span>
              <br />
              &nbsp;&nbsp;
              <span className="text-slate-300">foco</span>
              <span className="text-slate-500">:</span>{' '}
              <span className="text-emerald-300">["IA", "Dados", "Automação"]</span>
              <span className="text-slate-500">,</span>
              <br />
              &nbsp;&nbsp;
              <span className="text-slate-300">disponível</span>
              <span className="text-slate-500">:</span>{' '}
              <span className="text-purple-300">true</span>
              <br />
              <span className="text-blue-400">{'}'}</span>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-2 gap-4 reveal reveal-delay-2">
            {highlights.map(({ icon: Icon, label, color, bg }) => (
              <div
                key={label}
                className={`card-glow flex flex-col items-center gap-3 p-6 rounded-2xl border ${bg} transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`p-3 rounded-xl ${bg}`}>
                  <Icon size={22} className={color} />
                </div>
                <span className={`font-display font-semibold text-xs text-center leading-tight ${color}`}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
