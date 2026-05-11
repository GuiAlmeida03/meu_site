import { useEffect, useState } from 'react'
import { Github, Star, GitFork, BookOpen, Users, Activity, ExternalLink } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import { SectionHeader, StaggerContainer, StaggerItem, FadeUp } from './animations'

const GITHUB_USER = 'GuiAlmeida03'

const content = {
  pt: {
    sectionLabel: 'Open Source',
    title: 'GitHub',
    titleGradient: 'Stats',
    subtitle: 'Atividade e projetos públicos — atualizado em tempo real via API do GitHub.',
    viewProfile: 'Ver perfil completo',
    labels: {
      repos: 'Repositórios', followers: 'Seguidores',
      stars: 'Stars totais', forks: 'Forks totais',
      topLangs: 'Linguagens mais usadas', recentRepos: 'Repositórios recentes',
      loading: 'Carregando...', error: 'Não foi possível carregar os dados do GitHub.',
      updated: 'Atualizado agora',
    },
  },
  en: {
    sectionLabel: 'Open Source',
    title: 'GitHub',
    titleGradient: 'Stats',
    subtitle: 'Activity and public projects — updated in real time via GitHub API.',
    viewProfile: 'View full profile',
    labels: {
      repos: 'Repositories', followers: 'Followers',
      stars: 'Total stars', forks: 'Total forks',
      topLangs: 'Top languages', recentRepos: 'Recent repositories',
      loading: 'Loading...', error: 'Could not load GitHub data.',
      updated: 'Updated now',
    },
  },
}

// Language color map
const langColors = {
  Python: '#3572A5', JavaScript: '#f1e05a', TypeScript: '#2b7489',
  HTML: '#e34c26', CSS: '#563d7c', 'Jupyter Notebook': '#DA5B0B',
  Shell: '#89e051', Vue: '#41b883', React: '#61dafb',
}
const getLangColor = (lang) => langColors[lang] || '#8b5cf6'

function StatCard({ icon: Icon, value, label, color, delay = 0 }) {
  return (
    <StaggerItem>
      <div className={`flex flex-col items-center gap-2 p-5 rounded-2xl bg-void-3 border border-white/5 hover:-translate-y-1 transition-all duration-300`}>
        <div className={`p-2.5 rounded-xl bg-purple-600/10`}>
          <Icon size={18} className={color} />
        </div>
        <span className={`font-display font-extrabold text-2xl ${color}`}>{value ?? '—'}</span>
        <span className="font-mono text-xs text-slate-500 text-center">{label}</span>
      </div>
    </StaggerItem>
  )
}

function LangBar({ lang, percent, color }) {
  return (
    <div className="mb-3 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
          <span className="font-mono text-xs text-slate-300">{lang}</span>
        </div>
        <span className="font-mono text-xs text-slate-500">{percent}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{ width: `${percent}%`, background: color }}
        />
      </div>
    </div>
  )
}

export default function GitHubStats() {
  const { lang } = useLang()
  const tr = content[lang]
  const lb = tr.labels

  const [profile,  setProfile]  = useState(null)
  const [repos,    setRepos]    = useState([])
  const [langs,    setLangs]    = useState({})
  const [loading,  setLoading]  = useState(true)
  const [error,    setError]    = useState(false)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(false)

    const fetchAll = async () => {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USER}`),
          fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=6`),
        ])
        if (!profileRes.ok || !reposRes.ok) throw new Error('GitHub API error')

        const profileData = await profileRes.json()
        const reposData   = await reposRes.json()

        if (cancelled) return

        setProfile(profileData)
        setRepos(reposData)

        // Aggregate languages
        const langMap = {}
        reposData.forEach(r => {
          if (r.language) langMap[r.language] = (langMap[r.language] || 0) + 1
        })
        const total = Object.values(langMap).reduce((a, b) => a + b, 0)
        const sorted = Object.entries(langMap)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([name, count]) => ({ name, percent: Math.round((count / total) * 100) }))
        setLangs(sorted)
        setLoading(false)
      } catch {
        if (!cancelled) { setError(true); setLoading(false) }
      }
    }

    fetchAll()
    return () => { cancelled = true }
  }, [])

  const totalStars = repos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0)
  const totalForks = repos.reduce((acc, r) => acc + (r.forks_count || 0), 0)

  return (
    <section id="github" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-purple-600/6 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-blue-600/6 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <SectionHeader className="mb-16">
          <span className="section-label">
            <span className="text-purple-400">—</span>{tr.sectionLabel}
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3 leading-tight">
            {tr.title} <span className="text-gradient">{tr.titleGradient}</span>
          </h2>
          <p className="font-body text-slate-400 mt-4 max-w-xl text-base">{tr.subtitle}</p>
        </SectionHeader>

        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="flex items-center gap-3 text-slate-500 font-mono text-sm">
              <Github size={18} className="animate-spin" />
              {lb.loading}
            </div>
          </div>
        )}

        {error && (
          <FadeUp>
            <div className="flex items-center justify-center py-20">
              <p className="text-slate-500 font-mono text-sm">{lb.error}</p>
            </div>
          </FadeUp>
        )}

        {!loading && !error && (
          <>
            {/* Profile summary */}
            <FadeUp className="flex items-center gap-4 mb-10 p-5 rounded-2xl bg-void-3 border border-white/5">
              {profile?.avatar_url && (
                <img src={profile.avatar_url} alt={GITHUB_USER} className="w-14 h-14 rounded-full border-2 border-purple-500/40" />
              )}
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-bold text-white text-base leading-tight">{profile?.name || GITHUB_USER}</h3>
                {profile?.bio && <p className="font-body text-slate-400 text-sm mt-0.5 truncate">{profile.bio}</p>}
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono text-emerald-300">{lb.updated}</span>
              </div>
            </FadeUp>

            {/* Stat cards */}
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10" stagger={0.08}>
              <StatCard icon={BookOpen} value={profile?.public_repos} label={lb.repos}     color="text-purple-400" />
              <StatCard icon={Users}    value={profile?.followers}     label={lb.followers} color="text-blue-400"   />
              <StatCard icon={Star}     value={totalStars}             label={lb.stars}     color="text-yellow-400" />
              <StatCard icon={GitFork}  value={totalForks}             label={lb.forks}     color="text-cyan-400"   />
            </StaggerContainer>

            {/* Languages + Recent repos */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Languages */}
              <FadeUp delay={0.1} className="p-6 rounded-2xl bg-void-3 border border-white/5">
                <h3 className="font-display font-semibold text-sm text-slate-400 uppercase tracking-wider mb-5 flex items-center gap-2">
                  <Activity size={14} className="text-purple-400" />{lb.topLangs}
                </h3>
                {langs.length > 0
                  ? langs.map(({ name, percent }) => (
                      <LangBar key={name} lang={name} percent={percent} color={getLangColor(name)} />
                    ))
                  : <p className="text-slate-500 font-mono text-xs">Sem dados de linguagem</p>
                }
              </FadeUp>

              {/* Recent repos */}
              <FadeUp delay={0.2} className="p-6 rounded-2xl bg-void-3 border border-white/5">
                <h3 className="font-display font-semibold text-sm text-slate-400 uppercase tracking-wider mb-5 flex items-center gap-2">
                  <BookOpen size={14} className="text-blue-400" />{lb.recentRepos}
                </h3>
                <div className="space-y-3">
                  {repos.slice(0, 4).map(repo => (
                    <a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start justify-between gap-3 p-3 rounded-xl bg-white/3 border border-white/5 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-200 group"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="font-mono text-xs text-purple-300 font-medium truncate group-hover:text-purple-200">{repo.name}</p>
                        {repo.description && (
                          <p className="font-body text-xs text-slate-500 mt-0.5 line-clamp-1">{repo.description}</p>
                        )}
                        <div className="flex items-center gap-3 mt-1.5">
                          {repo.language && (
                            <span className="flex items-center gap-1 text-[10px] font-mono text-slate-500">
                              <span className="w-2 h-2 rounded-full" style={{ background: getLangColor(repo.language) }} />
                              {repo.language}
                            </span>
                          )}
                          {repo.stargazers_count > 0 && (
                            <span className="flex items-center gap-1 text-[10px] font-mono text-slate-500">
                              <Star size={9} /> {repo.stargazers_count}
                            </span>
                          )}
                        </div>
                      </div>
                      <ExternalLink size={12} className="text-slate-600 group-hover:text-purple-400 transition-colors shrink-0 mt-0.5" />
                    </a>
                  ))}
                </div>
              </FadeUp>
            </div>

            {/* CTA */}
            <FadeUp delay={0.3} className="mt-8 text-center">
              <a
                href={`https://github.com/${GITHUB_USER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-display font-semibold text-sm text-purple-400 hover:text-purple-300 transition-colors group"
              >
                <Github size={15} />
                {tr.viewProfile}
              </a>
            </FadeUp>
          </>
        )}
      </div>
    </section>
  )
}
