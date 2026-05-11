import { useState, useRef } from 'react'
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, User, MessageSquare } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

// ─────────────────────────────────────────────────────────────
// CONFIGURAÇÃO DO EMAILJS
// 1. Crie uma conta gratuita em https://emailjs.com
// 2. Conecte seu Gmail em "Email Services" → copie o Service ID
// 3. Crie um template em "Email Templates" → copie o Template ID
//    No template, use as variáveis: {{from_name}}, {{from_email}}, {{message}}
// 4. Vá em "Account" → copie sua Public Key
// 5. Crie o arquivo .env na raiz do projeto com:
//    VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
//    VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
//    VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
// ─────────────────────────────────────────────────────────────
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const content = {
  pt: {
    sectionLabel: 'Formulário',
    title: 'Envie uma',
    titleGradient: 'mensagem',
    subtitle: 'Preencha o formulário abaixo e responderei o mais rápido possível.',
    fields: {
      name: { label: 'Seu nome', placeholder: 'João Silva' },
      email: { label: 'Seu e-mail', placeholder: 'joao@empresa.com' },
      message: { label: 'Mensagem', placeholder: 'Olá Guilherme, gostaria de conversar sobre...' },
    },
    btn: { idle: 'Enviar mensagem', sending: 'Enviando...', sent: 'Mensagem enviada!', error: 'Erro — tente novamente' },
    success: { title: 'Mensagem enviada!', desc: 'Obrigado pelo contato. Responderei em breve.' },
    errors: {
      name: 'Nome é obrigatório',
      email: 'E-mail inválido',
      message: 'Mensagem muito curta (mín. 10 caracteres)',
      send: 'Falha ao enviar. Verifique sua conexão e tente novamente.',
      config: 'Formulário não configurado. Adicione as variáveis de ambiente do EmailJS.',
    },
  },
  en: {
    sectionLabel: 'Contact form',
    title: 'Send a',
    titleGradient: 'message',
    subtitle: 'Fill in the form below and I\'ll get back to you as soon as possible.',
    fields: {
      name: { label: 'Your name', placeholder: 'John Smith' },
      email: { label: 'Your e-mail', placeholder: 'john@company.com' },
      message: { label: 'Message', placeholder: 'Hi Guilherme, I\'d like to talk about...' },
    },
    btn: { idle: 'Send message', sending: 'Sending...', sent: 'Message sent!', error: 'Error — try again' },
    success: { title: 'Message sent!', desc: 'Thanks for reaching out. I\'ll reply shortly.' },
    errors: {
      name: 'Name is required',
      email: 'Invalid e-mail',
      message: 'Message too short (min. 10 characters)',
      send: 'Failed to send. Check your connection and try again.',
      config: 'Form not configured. Add the EmailJS environment variables.',
    },
  },
}

function validate(form, errors) {
  const errs = {}
  if (!form.name.trim())                    errs.name    = errors.name
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = errors.email
  if (form.message.trim().length < 10)      errs.message = errors.message
  return errs
}

export default function ContactForm() {
  const { lang } = useLang?.() ?? { lang: 'pt' }
  const tr = content[lang] ?? content.pt

  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error
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

    // Check EmailJS is configured
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setSendError(tr.errors.config)
      setStatus('error')
      return
    }

    setStatus('sending')
    setSendError('')

    try {
      // Dynamically import emailjs to avoid bloating initial bundle
      const emailjs = await import('@emailjs/browser')
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      setSendError(tr.errors.send)
      setStatus('error')
    }
  }

  const inputBase = 'w-full bg-void-3 border rounded-xl px-4 py-3 font-body text-sm text-slate-200 placeholder-slate-600 outline-none transition-all duration-200 focus:ring-1'
  const inputOk   = 'border-white/10 focus:border-purple-500/60 focus:ring-purple-500/20'
  const inputErr  = 'border-red-500/50 focus:border-red-500/60 focus:ring-red-500/20'

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
          <CheckCircle2 size={32} className="text-emerald-400" />
        </div>
        <h3 className="font-display font-bold text-xl text-white">{tr.success.title}</h3>
        <p className="font-body text-slate-400 text-sm max-w-xs">{tr.success.desc}</p>
        <button onClick={() => setStatus('idle')} className="mt-2 text-xs font-mono text-purple-400 hover:text-purple-300 transition-colors">
          ← {lang === 'pt' ? 'Enviar outra mensagem' : 'Send another message'}
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
        <input
          type="text" name="name" value={form.name} onChange={handleChange}
          placeholder={tr.fields.name.placeholder}
          className={`${inputBase} ${errors.name ? inputErr : inputOk}`}
        />
        {errors.name && <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
          <Mail size={12} className="text-purple-400" />{tr.fields.email.label}
        </label>
        <input
          type="email" name="email" value={form.email} onChange={handleChange}
          placeholder={tr.fields.email.placeholder}
          className={`${inputBase} ${errors.email ? inputErr : inputOk}`}
        />
        {errors.email && <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.email}</p>}
      </div>

      {/* Message */}
      <div>
        <label className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
          <MessageSquare size={12} className="text-purple-400" />{tr.fields.message.label}
        </label>
        <textarea
          name="message" value={form.message} onChange={handleChange} rows={5}
          placeholder={tr.fields.message.placeholder}
          className={`${inputBase} resize-none ${errors.message ? inputErr : inputOk}`}
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.message}</p>}
      </div>

      {/* Send error */}
      {status === 'error' && sendError && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/25">
          <AlertCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
          <p className="text-sm font-body text-red-300">{sendError}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? (
          <><Loader2 size={16} className="animate-spin" />{tr.btn.sending}</>
        ) : (
          <><Send size={16} />{tr.btn.idle}</>
        )}
      </button>
    </form>
  )
}
