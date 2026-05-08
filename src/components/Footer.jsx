import { Github, Linkedin, Mail, ArrowUpRight, Cpu, Heart } from 'lucide-react'

const socials = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/',
    color: 'hover:text-blue-400 hover:border-blue-400/40 hover:bg-blue-400/8',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/',
    color: 'hover:text-purple-400 hover:border-purple-400/40 hover:bg-purple-400/8',
  },
  {
    icon: Mail,
    label: 'E-mail',
    href: 'mailto:guilherme@email.com',
    color: 'hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/8',
  },
]

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/5">
      {/* Glow top edge */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-8 bg-purple-500/10 blur-xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-10">
        {/* CTA Block */}
        <div className="text-center mb-16 reveal">
          <span className="section-label justify-center mb-4">
            <span className="text-purple-400">—</span>
            04. Contato
          </span>

          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-6 leading-tight">
            Vamos <span className="text-gradient">conversar</span>?
          </h2>

          <p className="font-body text-slate-400 text-lg max-w-lg mx-auto mb-10">
            Aberto a novas oportunidades em{' '}
            <span className="text-purple-300 font-medium">Dados</span> e{' '}
            <span className="text-blue-300 font-medium">Inteligência Artificial</span>.
            Vamos construir algo incrível juntos.
          </p>

          {/* Social buttons */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {socials.map(({ icon: Icon, label, href, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={`group flex items-center gap-2.5 px-5 py-3 rounded-xl border border-white/10 bg-white/3 text-slate-400 text-sm font-display font-medium transition-all duration-300 hover:-translate-y-1 ${color}`}
              >
                <Icon size={16} />
                {label}
                <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-600 text-xs font-mono">
          <div className="flex items-center gap-2">
            <Cpu size={12} className="text-purple-500" />
            <span>Guilherme Henrique Costa de Almeida</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>Feito com</span>
            <Heart size={10} className="text-purple-500 fill-purple-500" />
            <span>React + Vite + Tailwind</span>
          </div>
          <span>© {new Date().getFullYear()} — Todos os direitos reservados</span>
        </div>
      </div>
    </footer>
  )
}
