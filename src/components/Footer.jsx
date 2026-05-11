import { Github, Linkedin, Mail, ArrowUpRight, Cpu, Heart } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import { t } from '../i18n/translations'
import ContactForm from './ContactForm'

const socials = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/guilherme-almeida-a7a845324', color: 'hover:text-blue-400 hover:border-blue-400/40 hover:bg-blue-400/8' },
  { icon: Github,   label: 'GitHub',   href: 'https://github.com/GuiAlmeida03',                         color: 'hover:text-purple-400 hover:border-purple-400/40 hover:bg-purple-400/8' },
  { icon: Mail,     label: 'E-mail',   href: 'mailto:guibson0309@gmail.com',                            color: 'hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/8' },
]

export default function Footer() {
  const { lang } = useLang()
  const tr = t[lang].footer

  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-8 bg-purple-500/10 blur-xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-10">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="section-label justify-center mb-4">
            <span className="text-purple-400">—</span>{tr.sectionLabel}
          </span>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-4 leading-tight">
            {tr.title} <span className="text-gradient">{tr.titleGradient}</span>
          </h2>
          <p className="font-body text-slate-400 text-lg max-w-lg mx-auto">{tr.subtitle}</p>
        </div>

        {/* Two-column layout: form + info */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
          {/* Contact form */}
          <div className="bg-void-3 border border-white/5 rounded-2xl p-6 md:p-8">
            <ContactForm />
          </div>

          {/* Social links + info */}
          <div className="flex flex-col justify-center gap-8">
            <div>
              <p className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-4">
                {lang === 'pt' ? 'Ou fale direto por' : 'Or reach me directly via'}
              </p>
              <div className="flex flex-col gap-3">
                {socials.map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 px-5 py-3.5 rounded-xl border border-white/10 bg-white/3 text-slate-400 text-sm font-display font-medium transition-all duration-300 hover:-translate-x-1 ${color}`}
                  >
                    <Icon size={16} />
                    <span className="flex-1">{label}</span>
                    <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="p-5 rounded-2xl bg-emerald-500/8 border border-emerald-500/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs text-emerald-400 font-semibold">
                  {lang === 'pt' ? 'Disponível agora' : 'Available now'}
                </span>
              </div>
              <p className="font-body text-slate-400 text-sm leading-relaxed">
                {lang === 'pt'
                  ? 'Aberto a oportunidades em Dados e IA — CLT, PJ ou freelance. Respondo em até 24h.'
                  : 'Open to opportunities in Data and AI — full-time or contract. I reply within 24h.'}
              </p>
            </div>
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
            <span>{tr.madeWith}</span>
            <Heart size={10} className="text-purple-500 fill-purple-500" />
            <span>React + Vite + Tailwind</span>
          </div>
          <span>© {new Date().getFullYear()} — {tr.rights}</span>
        </div>
      </div>
    </footer>
  )
}
