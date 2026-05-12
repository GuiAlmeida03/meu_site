import { useState } from 'react'
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, User, MessageSquare } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const content = {
  pt: {
    fields: {
      name:    { label: 'Seu nome',   placeholder: 'João Silva' },
      email:   { label: 'Seu e-mail', placeholder: 'joao@empresa.com' },
      message: { label: 'Mensagem',   placeholder: 'Olá Guilherme, gostaria de conversar sobre...' },
    },
    btn: { idle: 'Enviar mensagem', sending: 'Enviando...', sent: 'Mensagem enviada!' },
    success: { title: 'Mensagem enviada!', desc: 'Obrigado pelo contato. Responderei em breve.' },
    back: 'Enviar outra mensagem',
    errors: {
      name: 'Nome é obrigatório',
      email: 'E-mail inválido',
      message: 'Mensagem muito curta (mín. 10 caracteres)',
      send: 'Falha ao enviar. Verifique sua conexão e tente novamente.',
      config: 'Formulário não configurado. Adicione as variáveis de ambiente do EmailJS.',
    },
  },
  en: {
    fields: {
      name:    { label: 'Your name',  placeholder: 'John Smith' },
      email:   { label: 'Your email', placeholder: 'john@company.com' },
      message: { label: 'Message',    placeholder: "Hi Guilherme, I'd like to talk about..." },
    },
    btn: { idle: 'Send message', sending: 'Sending...', sent: 'Message sent!' },
    success: { title: 'Message sent!', desc: "Thanks for reaching out. I'll reply shortly." },
    back: 'Send another message',
    errors: {
      name: 'Name is required',
      email: 'Invalid email',
      message: 'Message too short (min. 10 characters)',
      send: 'Failed to send. Check your connection and try again.',
      config: 'Form not configured. Add the EmailJS environment variables.',
    },
  },
}

function validate(form, errors) {
  const errs = {}
  if (!form.name.trim()) errs.name = errors.name
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = errors.email
  if (form.message.trim().length < 10) errs.message = errors.message
  return errs
}

export default function ContactForm() {
  const { lang } = useLang()
  const tr = content[lang]

  const [form,      setForm]      = useState({ name: '', email: '', message: '' })
  const [errors,    setErrors]    = useState({})
  const [status,    setStatus]    = useState('idle')
  const [sendError, setSendError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(e => ({ ...e, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(form, tr.errors)
    if (Object.keys(errs).length) { setErrors(errs); return }
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) { setSendError(tr.errors.config); setStatus('error'); return }

    setStatus('sending'); setSendError('')
    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, { from_name: form.name, from_email: form.email, message: form.message }, PUBLIC_KEY)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setSendError(tr.errors.send); setStatus('error')
    }
  }

  const base = 'w-full bg-void-3 border rounded-xl px-4 py-3 font-body text-sm text-slate-200 placeholder-slate-600 outline-none transition-all duration-200 focus:ring-1'
  const ok   = 'border-white/10 focus:border-purple-500/60 focus:ring-purple-500/20'
  const err  = 'border-red-500/50 focus:border-red-500/60 focus:ring-red-500/20'

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
          <CheckCircle2 size={32} className="text-emerald-400" />
        </div>
        <h3 className="font-display font-bold text-xl text-white">{tr.success.title}</h3>
        <p className="font-body text-slate-400 text-sm max-w-xs">{tr.success.desc}</p>
        <button onClick={() => setStatus('idle')} className="mt-2 text-xs font-mono text-purple-400 hover:text-purple-300 transition-colors">
          ← {tr.back}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name */}
      <div>
        <label className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
          <User size={12} className="text-purple-400" />{tr.fields.name.label}
        </label>
        <input type="text" name="name" value={form.name} onChange={handleChange}
          placeholder={tr.fields.name.placeholder} className={`${base} ${errors.name ? err : ok}`} />
        {errors.name && <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
          <Mail size={12} className="text-purple-400" />{tr.fields.email.label}
        </label>
        <input type="email" name="email" value={form.email} onChange={handleChange}
          placeholder={tr.fields.email.placeholder} className={`${base} ${errors.email ? err : ok}`} />
        {errors.email && <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.email}</p>}
      </div>

      {/* Message */}
      <div>
        <label className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
          <MessageSquare size={12} className="text-purple-400" />{tr.fields.message.label}
        </label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={5}
          placeholder={tr.fields.message.placeholder} className={`${base} resize-none ${errors.message ? err : ok}`} />
        {errors.message && <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.message}</p>}
      </div>

      {status === 'error' && sendError && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/25">
          <AlertCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
          <p className="text-sm font-body text-red-300">{sendError}</p>
        </div>
      )}

      <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed">
        {status === 'sending'
          ? <><Loader2 size={16} className="animate-spin" />{tr.btn.sending}</>
          : <><Send size={16} />{tr.btn.idle}</>
        }
      </button>
    </form>
  )
}
