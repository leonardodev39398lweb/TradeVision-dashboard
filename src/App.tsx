import { useEffect, useState } from 'react'
import { ChevronRight, CircleHelp, Clock3, Layers3, ShieldCheck, Sparkles } from 'lucide-react'
import { Header } from './components/Header'
import { MarketOverview } from './components/MarketOverview'
import { MarketChart } from './components/MarketChart'
import { AssetTable } from './components/AssetTable'
import { FavoritesPanel } from './components/FavoritesPanel'
import { MarketNews } from './components/MarketNews'
import { Footer } from './components/Footer'

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => localStorage.getItem('tv-theme') === 'light' ? 'light' : 'dark')
  const [favorites, setFavorites] = useState<string[]>(() => { try { const saved = localStorage.getItem('tv-favorites'); return saved ? JSON.parse(saved) as string[] : ['PETR4', 'ITUB4'] } catch { return ['PETR4', 'ITUB4'] } })
  const [query, setQuery] = useState('')
  const [active, setActive] = useState('overview')
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('tv-theme', theme) }, [theme])
  useEffect(() => { localStorage.setItem('tv-favorites', JSON.stringify(favorites)) }, [favorites])
  useEffect(() => { const onScroll = () => { const sections = ['overview', 'market', 'assets', 'history']; const current = sections.map(id => ({ id, top: document.getElementById(id)?.getBoundingClientRect().top ?? Infinity })).filter(x => x.top < 220).sort((a, b) => b.top - a.top)[0]?.id; if (current) setActive(current) }; window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll) }, [])
  const toggleFavorite = (ticker: string) => setFavorites(prev => prev.includes(ticker) ? prev.filter(item => item !== ticker) : [...prev, ticker])
  const today = new Intl.DateTimeFormat('pt-BR', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' }).format(new Date())
  const todayShort = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date())
  return <div className="app-shell"><Header theme={theme} onTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} query={query} onSearch={setQuery} active={active} onNavigate={setActive}/><main id="overview" className="main-content"><div className="breadcrumb"><span>Workspace</span><ChevronRight size={13}/><b>Visão geral</b><span className="breadcrumb-dot"/><span>{todayShort}</span></div><section className="welcome-row"><div><div className="welcome-kicker"><Sparkles size={13}/> {today.toLocaleUpperCase('pt-BR')}</div><h1>Bom dia, Ana <span>✳</span></h1><p>Acompanhe o mercado e seus ativos em um só lugar.</p></div><div className="welcome-actions"><div className="market-open"><span className="live-dot"/> Sessão demonstrativa <span>·</span> dados simulados</div><span className="help-button"><CircleHelp size={15}/> Projeto de portfólio</span></div></section><div className="disclaimer"><ShieldCheck size={15}/><span>Projeto educacional independente — dados fictícios, sem vínculo com instituições financeiras</span><span className="disclaimer-tag">AMBIENTE SIMULADO</span></div><div className="overview-label"><span>RESUMO DO MERCADO</span><span className="updated"><Clock3 size={12}/> Atualizado há alguns segundos</span></div><MarketOverview/><div className="dashboard-grid"><MarketChart/><FavoritesPanel favorites={favorites} onToggle={toggleFavorite}/></div><div className="lower-grid"><AssetTable query={query} favorites={favorites} onToggle={toggleFavorite}/><MarketNews/></div><div className="bottom-note"><span><Layers3 size={14}/> Este painel não representa valores em tempo real.</span><span>Dados criados exclusivamente para fins demonstrativos.</span></div><Footer/></main></div>
}
export default App
