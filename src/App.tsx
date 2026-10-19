import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { CircleMarker, MapContainer, Popup, TileLayer, ZoomControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './map.css'
import {
  Activity, ArrowDownRight, ArrowRight, ArrowUpRight, BarChart3, Bell, Check, CheckCircle2, ChevronDown,
  ChevronRight, CircleHelp, Clock3, CloudSun, FileText, Filter, Globe2, Leaf, LogIn, LogOut, MapPin,
  Menu, Plus, Search, ShieldCheck, SlidersHorizontal, Sparkles, Trees, Upload, Users, X, type LucideIcon,
} from 'lucide-react'
import { api, apiConfigured, ApiError } from './api'
import type { Report, ReportStatus, Severity, User } from './types'

type View = 'Home' | 'Dashboard' | 'Report an Issue' | 'Map' | 'Reports' | 'Analytics' | 'SDG Goals'
const nav: { name: View; icon: LucideIcon }[] = [
  { name: 'Home', icon: Leaf }, { name: 'Dashboard', icon: Activity }, { name: 'Report an Issue', icon: Plus },
  { name: 'Map', icon: MapPin }, { name: 'Reports', icon: FileText }, { name: 'Analytics', icon: BarChart3 }, { name: 'SDG Goals', icon: Globe2 },
]
const sampleReports: Report[] = [
  { id: 'ER-1042', user_id: 'u1', type: 'Waste', description: 'Overflowing bins near the park entrance need attention.', location: 'Carter Road, Bandra West', latitude: 19.0596, longitude: 72.8295, severity: 'High', status: 'In Progress', photo_url: null, created_at: '2026-10-18T09:30:00Z', updated_at: '2026-10-19T08:00:00Z', submitter: 'Aarav S.', updates: [{ id: 'up1', report_id: 'ER-1042', changed_by: 'EcoWatch', old_status: null, new_status: 'Pending', note: 'Report received and shared with the local team.', created_at: '2026-10-18T09:30:00Z' }, { id: 'up2', report_id: 'ER-1042', changed_by: 'EcoWatch team', old_status: 'Pending', new_status: 'In Progress', note: 'Cleanup has been scheduled.', created_at: '2026-10-19T08:00:00Z' }] },
  { id: 'ER-1041', user_id: 'u2', type: 'Water', description: 'A leaking public tap is leaving water pooled on the footpath.', location: 'Lake Road, Powai', latitude: 19.1176, longitude: 72.9060, severity: 'Medium', status: 'Pending', photo_url: null, created_at: '2026-10-17T12:10:00Z', updated_at: '2026-10-17T12:10:00Z', submitter: 'Mira P.' },
  { id: 'ER-1040', user_id: 'u3', type: 'Trees', description: 'Several young trees have been damaged beside the road.', location: 'Hiranandani Gardens, Powai', latitude: 19.1197, longitude: 72.9050, severity: 'Low', status: 'Resolved', photo_url: null, created_at: '2026-10-16T07:20:00Z', updated_at: '2026-10-18T15:00:00Z', submitter: 'Dev N.' },
  { id: 'ER-1039', user_id: 'u4', type: 'Air', description: 'Heavy smoke and dust are affecting nearby homes in the evening.', location: 'Andheri East', latitude: 19.1136, longitude: 72.8697, severity: 'High', status: 'In Progress', photo_url: null, created_at: '2026-10-15T15:40:00Z', updated_at: '2026-10-16T09:00:00Z', submitter: 'Sana R.' },
  { id: 'ER-1038', user_id: 'u5', type: 'Noise', description: 'Repeated late-night construction noise is disturbing residents.', location: 'Vashi, Navi Mumbai', latitude: 19.0771, longitude: 72.9980, severity: 'Medium', status: 'Pending', photo_url: null, created_at: '2026-10-14T18:15:00Z', updated_at: '2026-10-14T18:15:00Z', submitter: 'Kabir M.' },
]
const issueTypes = ['Waste', 'Water', 'Air', 'Noise', 'Trees', 'Drainage', 'Other']
const statusClass: Record<ReportStatus, string> = { Pending: 'pending', 'In Progress': 'progress', Resolved: 'resolved' }
const typeIcon: Record<string, string> = { Waste: '♻', Water: '◉', Air: '〰', Noise: '⌁', Trees: '♧', Drainage: '⌁', Other: '✳' }
const readableDate = (date: string) => new Intl.DateTimeFormat('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(date))

export default function App() {
  const [view, setView] = useState<View>('Home')
  const [reports, setReports] = useState(sampleReports)
  const [preview, setPreview] = useState(true)
  const [user, setUser] = useState<User | null>(null)
  const [authOpen, setAuthOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
  const [authBusy, setAuthBusy] = useState(false)
  const [authError, setAuthError] = useState('')
  const [mobileNav, setMobileNav] = useState(false)
  const [detail, setDetail] = useState<Report | null>(null)
  const [toast, setToast] = useState('')
  const [apiNotice, setApiNotice] = useState('')
  const [search, setSearch] = useState('')
  const [filterStatus, setFilterStatus] = useState('All')
  const [filterType, setFilterType] = useState('All issues')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!apiConfigured) { setPreview(true); return }
    api.me().then(({ user: current }) => { setUser(current); setPreview(false) }).catch((err: ApiError) => {
      if (err.status === 401) setPreview(false)
      else setApiNotice(err.message)
    })
    api.reports().then(({ reports: data }) => { setReports(data); setPreview(false); setApiNotice('') }).catch((err: ApiError) => {
      setPreview(true); setApiNotice(err.message)
    })
  }, [])

  useEffect(() => { if (!toast) return; const t = window.setTimeout(() => setToast(''), 3200); return () => window.clearTimeout(t) }, [toast])
  const stats = useMemo(() => ({ total: reports.length, pending: reports.filter(r => r.status === 'Pending').length, progress: reports.filter(r => r.status === 'In Progress').length, resolved: reports.filter(r => r.status === 'Resolved').length }), [reports])
  const filtered = useMemo(() => reports.filter(r => (filterStatus === 'All' || r.status === filterStatus) && (filterType === 'All issues' || r.type === filterType) && `${r.type} ${r.location} ${r.id} ${r.submitter || ''}`.toLowerCase().includes(search.toLowerCase())), [reports, filterStatus, filterType, search])

  function go(next: View) { setView(next); setMobileNav(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  function openAuth(mode: 'login' | 'signup' = 'login') { setAuthMode(mode); setAuthError(''); setAuthOpen(true) }
  async function submitAuth(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setAuthBusy(true); setAuthError('')
    const values = new FormData(event.currentTarget)
    try {
      const result = authMode === 'signup'
        ? await api.signup({ name: String(values.get('name')).trim(), email: String(values.get('email')).trim(), password: String(values.get('password')) })
        : await api.login({ email: String(values.get('email')).trim(), password: String(values.get('password')) })
      setUser(result.user); setAuthOpen(false); setPreview(false); setToast(authMode === 'signup' ? 'Your account is ready.' : `Welcome back, ${result.user.name}.`)
    } catch (e) { setAuthError(e instanceof Error ? e.message : 'Could not sign in. Please try again.') }
    finally { setAuthBusy(false) }
  }
  async function logout() { try { await api.logout(); setUser(null); setToast('You are logged out.') } catch (e) { setToast(e instanceof Error ? e.message : 'Could not log out.') } }
  async function submitReport(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!user) { openAuth('login'); setToast('Sign in to submit a report.'); return }
    setLoading(true)
    const formElement = event.currentTarget
    const form = new FormData(formElement)
    const photo = form.get('photo') as File
    if (!photo?.size) form.delete('photo')
    try {
      const { report } = await api.createReport(form)
      setReports(current => [report, ...current]); formElement.reset(); setPreview(false); setApiNotice(''); setToast('Your report has been submitted.'); go('Reports')
    } catch (e) { setToast(e instanceof Error ? e.message : 'Could not submit report. Please try again.') }
    finally { setLoading(false) }
  }
  async function setStatus(report: Report, status: ReportStatus) {
    if (!user || !['moderator', 'admin'].includes(user.role)) return
    try { const { report: updated } = await api.updateStatus(report.id, status, 'Status updated by EcoWatch team.'); setReports(rs => rs.map(r => r.id === updated.id ? updated : r)); setDetail(updated); setToast('Report status updated.') }
    catch (e) { setToast(e instanceof Error ? e.message : 'Could not update status.') }
  }

  return <div className="app-shell">
    <header className="topbar">
      <button className="brand" onClick={() => go('Home')} aria-label="EcoReport home"><span className="brand-mark"><Leaf size={22} /></span><span>eco<span className="brand-light">report</span><small>TEAM ECOWATCH</small></span></button>
      <button className="mobile-menu" onClick={() => setMobileNav(!mobileNav)} aria-label="Toggle navigation">{mobileNav ? <X /> : <Menu />}</button>
      <nav className={`topnav ${mobileNav ? 'open' : ''}`} aria-label="Main navigation">{nav.map(({ name }) => <button key={name} className={view === name ? 'nav-active' : ''} onClick={() => go(name)}>{name === 'Report an Issue' ? 'Report issue' : name}</button>)}</nav>
      <div className="top-actions">{user ? <><button className="user-chip" title={`${user.name} · ${user.role}`}><span className="avatar">{user.name.slice(0, 1).toUpperCase()}</span><span className="user-name">{user.name.split(' ')[0]}</span><ChevronDown size={14} /></button><button className="icon-button" onClick={logout} aria-label="Log out" title="Log out"><LogOut size={18} /></button></> : <><button className="text-button" onClick={() => openAuth('login')}>Log in</button><button className="button button-dark button-small" onClick={() => openAuth('signup')}>Join the community <ArrowRight size={15} /></button></>}</div>
    </header>

    {preview && <div className="preview-banner"><Sparkles size={14} /> Preview mode <span>Showing sample community reports. Connect the Express API to use live data.</span></div>}
    <div className="layout">
      <aside className={`sidebar ${mobileNav ? 'sidebar-open' : ''}`}><div className="side-label">YOUR SPACE</div>{nav.map(({ name, icon: Icon }) => <button key={name} className={`side-link ${view === name ? 'selected' : ''}`} onClick={() => go(name)}><Icon size={18} strokeWidth={1.8} /><span>{name}</span>{name === 'Report an Issue' && <span className="side-plus"><Plus size={14} /></span>}</button>)}
        <div className="side-bottom"><div className="side-help"><span className="help-icon"><CircleHelp size={17} /></span><b>Small actions matter.</b><p>One report can help your neighborhood get noticed.</p><button onClick={() => go('SDG Goals')}>About the project <ArrowRight size={14} /></button></div><div className="side-foot"><ShieldCheck size={14} /> Community powered · SDG 11 & 13</div></div></aside>
      <main className="main-content">
        {apiNotice && !preview && <div className="notice"><CloudSun size={17} /> {apiNotice}</div>}
        {view === 'Home' && <Home reports={reports} stats={stats} onNavigate={go} onOpenReport={setDetail} />}
        {view === 'Dashboard' && <Dashboard reports={reports} stats={stats} onNavigate={go} onOpenReport={setDetail} />}
        {view === 'Report an Issue' && <ReportForm user={user} onSubmit={submitReport} onLogin={() => openAuth('login')} busy={loading} />}
        {view === 'Reports' && <ReportsView reports={filtered} search={search} setSearch={setSearch} status={filterStatus} setStatus={setFilterStatus} issueType={filterType} setIssueType={setFilterType} onOpen={setDetail} onCreate={() => go('Report an Issue')} />}
        {view === 'Map' && <MapView reports={filtered} issueType={filterType} setIssueType={setFilterType} status={filterStatus} setStatus={setFilterStatus} onOpen={setDetail} />}
        {view === 'Analytics' && <Analytics reports={reports} stats={stats} />}
        {view === 'SDG Goals' && <SdgPage />}
      </main>
    </div>
    <footer className="site-footer"><span><span className="footer-leaf">✳</span> EcoReport <span className="muted">by Team EcoWatch</span></span><span>Local voices. Greener neighborhoods. <span className="footer-dot">●</span></span><span>Built for SDG 11 & 13</span></footer>
    {authOpen && <AuthModal mode={authMode} setMode={m => { setAuthMode(m); setAuthError('') }} busy={authBusy} error={authError} apiReady={apiConfigured} onClose={() => setAuthOpen(false)} onSubmit={submitAuth} />}
    {detail && <ReportModal report={detail} canModerate={!!user && ['moderator', 'admin'].includes(user.role)} onClose={() => setDetail(null)} onStatus={s => setStatus(detail, s)} />}
    {toast && <div className="toast" role="status"><CheckCircle2 size={18} />{toast}<button onClick={() => setToast('')} aria-label="Dismiss"><X size={16} /></button></div>}
  </div>
}

function PageTitle({ eyebrow, title, text, action }: { eyebrow?: string; title: string; text?: string; action?: React.ReactNode }) {
  return <div className="page-heading"><div>{eyebrow && <div className="eyebrow">{eyebrow}</div>}<h1>{title}</h1>{text && <p>{text}</p>}</div>{action}</div>
}
function Home({ reports, stats, onNavigate, onOpenReport }: { reports: Report[]; stats: { total: number; pending: number; progress: number; resolved: number }; onNavigate: (v: View) => void; onOpenReport: (r: Report) => void }) {
  return <>
    <section className="hero-section"><div className="hero-copy"><div className="eyebrow"><span className="pulse" /> A cleaner neighborhood starts here</div><h1>Your neighborhood.<br /><em>Your voice.</em></h1><p>See an environmental issue? Share it with your community and help make local change visible.</p><div className="hero-buttons"><button className="button button-dark" onClick={() => onNavigate('Report an Issue')}>Report an issue <ArrowRight size={17} /></button><button className="button button-plain" onClick={() => onNavigate('Map')}><MapPin size={16} /> Explore the map</button></div><div className="hero-proof"><span className="avatar-stack"><i>R</i><i>A</i><i>M</i><i>+</i></span><span><b>Your community is paying attention</b><small>Reports help build a clearer picture of local needs.</small></span></div></div>
      <div className="hero-art" aria-label="Illustration of a greener city"><div className="sun-disc" /><div className="cloud cloud-one" /><div className="cloud cloud-two" /><div className="hill hill-back" /><div className="hill hill-front" /><div className="city"><div className="building b1"><i /><i /><i /><i /></div><div className="building b2"><i /><i /><i /><i /><i /><i /></div><div className="building b3"><i /><i /><i /><i /></div><div className="building b4"><i /><i /><i /></div></div><div className="tree tree-a"><i /><b /></div><div className="tree tree-b"><i /><b /></div><div className="tree tree-c"><i /><b /></div><div className="hero-label"><span className="tiny-pulse" /> LIVE COMMUNITY VIEW <b>MUMBAI, MH</b></div><div className="floating-pin pin-a"><MapPin size={16} /><span>Air quality</span></div><div className="floating-pin pin-b"><MapPin size={16} /><span>Waste pickup</span></div><div className="hero-art-caption"><span className="caption-icon"><Leaf size={16} /></span><span><b>A little better, together.</b><small>Every report helps tell the local story.</small></span><ArrowUpRight size={16} /></div></div>
    </section>
    <section className="home-stats"><div className="stat-label"><span className="eyebrow">COMMUNITY AT A GLANCE</span><b>When neighbors speak up,<br />change can take root.</b></div><StatTile label="Reports shared" value={stats.total} icon={FileText} tone="green" /><StatTile label="Being addressed" value={stats.progress} icon={Activity} tone="blue" /><StatTile label="Resolved" value={stats.resolved} icon={CheckCircle2} tone="gold" /></section>
    <section className="home-lower"><div className="home-recent"><div className="section-head"><div><div className="eyebrow">FROM AROUND THE COMMUNITY</div><h2>Recent reports</h2></div><button className="link-button" onClick={() => onNavigate('Reports')}>View all reports <ArrowRight size={15} /></button></div><div className="recent-list">{reports.slice(0, 3).map(r => <ReportRow key={r.id} report={r} onClick={() => onOpenReport(r)} />)}</div></div><div className="home-cta"><div className="cta-stamp"><Trees size={23} /></div><span className="eyebrow">YOUR EYES MATTER</span><h3>Notice something?<br /><em>Let’s make it visible.</em></h3><p>Take a moment to share what you see. Your report helps the community understand what needs attention.</p><button className="button button-dark" onClick={() => onNavigate('Report an Issue')}>Share a report <ArrowRight size={16} /></button><div className="cta-decoration">✳</div></div></section>
    <section className="how-section"><div className="section-head"><div><div className="eyebrow">HOW IT WORKS</div><h2>From noticing to action</h2></div><p>Good change starts with a simple observation.</p></div><div className="how-steps"><Step number="01" icon={Search} title="Notice" text="Spot a local environmental issue in your everyday surroundings." /><Step number="02" icon={FileText} title="Report" text="Share the location and a few details with the community." /><Step number="03" icon={Activity} title="Follow" text="Check in as the report moves toward a resolution." /></div></section>
  </>
}
function StatTile({ label, value, icon: Icon, tone }: { label: string; value: number; icon: LucideIcon; tone: string }) { return <div className="stat-tile"><span className={`stat-icon ${tone}`}><Icon size={18} /></span><span className="stat-value">{value}</span><span className="stat-name">{label}</span></div> }
function Step({ number, icon: Icon, title, text }: { number: string; icon: LucideIcon; title: string; text: string }) { return <div className="step-card"><div className="step-top"><span>{number}</span><Icon size={19} /></div><h3>{title}</h3><p>{text}</p></div> }
function Dashboard({ reports, stats, onNavigate, onOpenReport }: { reports: Report[]; stats: { total: number; pending: number; progress: number; resolved: number }; onNavigate: (v: View) => void; onOpenReport: (r: Report) => void }) {
  const rate = stats.total ? Math.round(stats.resolved / stats.total * 100) : 0
  return <div className="page-wrap"><PageTitle eyebrow="YOUR COMMUNITY OVERVIEW" title="Dashboard" text="A quick look at environmental reports around your community." action={<button className="button button-dark" onClick={() => onNavigate('Report an Issue')}><Plus size={16} /> New report</button>} />
    <div className="welcome-strip"><div className="welcome-mark"><Leaf size={19} /></div><div><b>Good things grow when we notice.</b><p>Every report helps your community understand what needs attention.</p></div><span className="welcome-count"><b>{stats.total}</b> community reports</span></div>
    <div className="stat-grid"><StatTile label="Total reports" value={stats.total} icon={FileText} tone="green" /><StatTile label="Awaiting action" value={stats.pending} icon={Clock3} tone="gold" /><StatTile label="In progress" value={stats.progress} icon={Activity} tone="blue" /><StatTile label="Resolved" value={stats.resolved} icon={CheckCircle2} tone="green" /></div>
    <div className="dashboard-grid"><section className="panel recent-panel"><div className="panel-head"><div><span className="eyebrow">LATEST ACTIVITY</span><h2>Recent reports</h2></div><button className="link-button" onClick={() => onNavigate('Reports')}>See all <ArrowRight size={14} /></button></div>{reports.slice(0, 4).map(r => <ReportRow key={r.id} report={r} onClick={() => onOpenReport(r)} />)}</section>
      <section className="panel impact-panel"><div className="panel-head"><div><span className="eyebrow">COMMUNITY IMPACT</span><h2>Resolution progress</h2></div><span className="impact-icon"><Leaf size={18} /></span></div><div className="ring-wrap"><div className="progress-ring" style={{ background: `conic-gradient(#2d674b ${rate * 3.6}deg, #e7eee5 0deg)` }}><div><b>{rate}%</b><small>resolved</small></div></div></div><p className="impact-note">{stats.resolved} of {stats.total} reports have been resolved.</p><button className="link-button" onClick={() => onNavigate('Analytics')}>Explore the numbers <ArrowRight size={14} /></button></section></div>
    <div className="quote-strip"><div className="quote-leaf">✳</div><p>“When we care enough to notice, we’re already part of the solution.”</p><span>— EcoWatch community</span></div>
  </div>
}
function ReportRow({ report, onClick }: { report: Report; onClick: () => void }) { return <button className="report-row" onClick={onClick}><span className={`issue-symbol issue-${report.type.toLowerCase()}`}>{typeIcon[report.type] || '✳'}</span><span className="report-row-main"><b>{report.type} concern <small>· {report.id}</small></b><span><MapPin size={13} /> {report.location}</span></span><span className={`status-pill ${statusClass[report.status]}`}>{report.status}</span><span className="row-date">{readableDate(report.created_at)}</span><ChevronRight size={16} className="row-arrow" /></button> }
function ReportForm({ user, onSubmit, onLogin, busy }: { user: User | null; onSubmit: (e: FormEvent<HTMLFormElement>) => void; onLogin: () => void; busy: boolean }) {
  const [photoName, setPhotoName] = useState('')
  return <div className="page-wrap"><PageTitle eyebrow="HELP YOUR COMMUNITY" title="Report an issue" text="A few details can help make a local environmental concern visible." />
    {!user && <div className="signin-hint"><ShieldCheck size={19} /><span><b>Sign in to submit your report</b><small>Your account helps keep the community reporting process clear and accountable.</small></span><button className="button button-dark button-small" onClick={onLogin}><LogIn size={15} /> Log in</button></div>}
    <form className="report-form panel" onSubmit={onSubmit}><div className="form-intro"><div className="form-step">01 <span> / 01</span></div><div><h2>What did you notice?</h2><p>Share the details you know. You can add a photo if it helps explain the issue.</p></div></div>
      <div className="form-grid"><label className="field"><span>Issue type <i>*</i></span><select name="type" required defaultValue=""><option value="" disabled>Choose a category</option>{issueTypes.map(x => <option key={x} value={x}>{x}</option>)}</select></label>
        <label className="field"><span>Severity <i>*</i></span><select name="severity" required defaultValue="Medium"><option>Low</option><option>Medium</option><option>High</option></select></label>
        <label className="field field-full"><span>Short description <i>*</i></span><textarea name="description" required minLength={12} maxLength={1000} placeholder="What is happening? Add any details that could help someone understand the issue." rows={4} /><small>Keep it clear and respectful. Avoid sharing anyone’s private information.</small></label>
        <label className="field field-full"><span>Location or area <i>*</i></span><div className="input-icon"><MapPin size={17} /><input name="location" required maxLength={180} placeholder="Street, landmark, neighborhood" /></div></label>
        <label className="field"><span>Date noticed</span><input type="date" name="date" defaultValue={new Date().toISOString().slice(0, 10)} /></label>
        <div className="field"><span>Photo <small>(optional)</small></span><label className="upload-box"><Upload size={17} /><span>{photoName || 'Choose a photo to add'}</span><input type="file" name="photo" accept="image/*" onChange={e => setPhotoName(e.target.files?.[0]?.name || '')} /></label></div>
        <details className="coordinate-details field-full"><summary><MapPin size={14} /> Add exact map coordinates <span>(optional)</span><ChevronDown size={14} /></summary><div className="coordinate-grid"><label className="field"><span>Latitude</span><input name="latitude" type="number" min="-90" max="90" step="any" placeholder="e.g. 19.0760" /></label><label className="field"><span>Longitude</span><input name="longitude" type="number" min="-180" max="180" step="any" placeholder="e.g. 72.8777" /></label></div></details>
      </div><div className="form-footer"><span><ShieldCheck size={16} /> Your report will be reviewed by the community team.</span><button className="button button-dark" disabled={busy}>{busy ? 'Sending report…' : 'Submit report'} {!busy && <ArrowRight size={16} />}</button></div>
    </form><p className="form-footnote"><i>*</i> Required fields · Reports should describe real local concerns.</p>
  </div>
}
function ReportsView({ reports, search, setSearch, status, setStatus, issueType, setIssueType, onOpen, onCreate }: { reports: Report[]; search: string; setSearch: (s: string) => void; status: string; setStatus: (s: string) => void; issueType: string; setIssueType: (s: string) => void; onOpen: (r: Report) => void; onCreate: () => void }) {
  return <div className="page-wrap"><PageTitle eyebrow="THE NEIGHBORHOOD JOURNAL" title="Community reports" text="Browse issues shared by people in your area." action={<button className="button button-dark" onClick={onCreate}><Plus size={16} /> New report</button>} />
    <div className="toolbar panel"><div className="search-box"><Search size={17} /><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search reports or locations" aria-label="Search reports" /></div><label className="select-filter"><Filter size={15} /><select value={status} onChange={e => setStatus(e.target.value)} aria-label="Filter by status"><option>All</option><option>Pending</option><option>In Progress</option><option>Resolved</option></select></label><label className="select-filter"><SlidersHorizontal size={15} /><select value={issueType} onChange={e => setIssueType(e.target.value)} aria-label="Filter by issue type"><option>All issues</option>{issueTypes.map(t => <option key={t}>{t}</option>)}</select></label></div>
    <div className="results-meta"><span><b>{reports.length}</b> {reports.length === 1 ? 'report' : 'reports'} found</span><span><span className="legend-dot" /> Community submissions</span></div>
    <div className="reports-table panel"><div className="table-header"><span>ISSUE</span><span>LOCATION</span><span>SEVERITY</span><span>STATUS</span><span>DATE</span><span /></div>{reports.map(r => <button className="table-row" key={r.id} onClick={() => onOpen(r)}><span className="table-issue"><span className={`issue-symbol issue-${r.type.toLowerCase()}`}>{typeIcon[r.type] || '✳'}</span><span><b>{r.type} concern</b><small>{r.id} · {r.submitter || 'Community member'}</small></span></span><span className="table-location"><MapPin size={14} />{r.location}</span><span><i className={`severity-dot sev-${r.severity.toLowerCase()}`} />{r.severity}</span><span><i className={`status-pill ${statusClass[r.status]}`}>{r.status}</i></span><span className="table-date">{readableDate(r.created_at)}</span><ChevronRight size={16} className="row-arrow" /></button>)}{reports.length === 0 && <div className="empty-state"><span><Search size={22} /></span><b>No reports match those filters</b><p>Try a different search or clear one of the filters.</p><button className="link-button" onClick={() => { setSearch(''); setStatus('All'); setIssueType('All issues') }}>Clear filters <X size={14} /></button></div>}</div>
    <div className="reports-footnote"><ShieldCheck size={16} /><span>Reports are community submissions. Their status reflects the latest available update.</span></div>
  </div>
}
function MapView({ reports, issueType, setIssueType, status, setStatus, onOpen }: { reports: Report[]; issueType: string; setIssueType: (s: string) => void; status: string; setStatus: (s: string) => void; onOpen: (r: Report) => void }) {
  const located = reports.filter((report): report is Report & { latitude: number; longitude: number } =>
    Number.isFinite(report.latitude) && Number.isFinite(report.longitude))
  const statusColors: Record<ReportStatus, string> = { Pending: '#d9a44f', 'In Progress': '#638eaa', Resolved: '#678d64' }
  return <div className="page-wrap"><PageTitle eyebrow="EXPLORE INDIA" title="Community map" text="Explore environmental reports across India. Drag to move and zoom in to see local details." />
    <div className="map-filters panel"><span><span className="eyebrow">SHOWING {located.length} LOCATED REPORTS</span><small>Reports appear at their submitted coordinates.</small></span><label className="select-filter"><Filter size={15} /><select value={issueType} onChange={e => setIssueType(e.target.value)}><option>All issues</option>{issueTypes.map(t => <option key={t}>{t}</option>)}</select></label><label className="select-filter"><select value={status} onChange={e => setStatus(e.target.value)}><option>All</option><option>Pending</option><option>In Progress</option><option>Resolved</option></select></label></div>
    <div className="map-layout"><div className="map-canvas india-map">
      <MapContainer bounds={[[6.5, 67.5], [37.2, 97.5]]} boundsOptions={{ padding: [12, 12] }} minZoom={3} maxZoom={18} maxBounds={[[4, 65], [39, 101]]} maxBoundsViscosity={0.8} zoomControl={false} scrollWheelZoom>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <ZoomControl position="topright" />
        {located.map(report => <CircleMarker key={report.id} center={[report.latitude, report.longitude]} radius={8} pathOptions={{ color: '#fff', weight: 2, fillColor: statusColors[report.status], fillOpacity: 0.95 }}>
          <Popup><div className="map-popup"><b>{report.type} concern</b><span>{report.location}</span><span className={`status-pill ${statusClass[report.status]}`}>{report.status}</span><button className="map-popup-action" onClick={() => onOpen(report)}>View report</button></div></Popup>
        </CircleMarker>)}
      </MapContainer>
      <div className="map-stamp"><MapPin size={13} /> INDIA-WIDE REPORT MAP</div>
      <div className="map-legend"><b>REPORT STATUS</b><span><i className="legend-marker pending-marker" /> Pending</span><span><i className="legend-marker progress-marker" /> In progress</span><span><i className="legend-marker resolved-marker" /> Resolved</span></div>
    </div>
      <aside className="map-list panel"><div className="map-list-head"><span className="eyebrow">LOCATED REPORTS</span><b>{located.length} reports on map</b></div>{located.map(r => <button key={r.id} className="map-list-item" onClick={() => onOpen(r)}><span className={`issue-symbol issue-${r.type.toLowerCase()}`}>{typeIcon[r.type] || '✳'}</span><span><b>{r.type} concern</b><small><MapPin size={12} /> {r.location}</small></span><ChevronRight size={15} /></button>)}{located.length === 0 && <p className="small-muted">No reports with coordinates match these filters.</p>}</aside></div>
  </div>
}
function Analytics({ reports, stats }: { reports: Report[]; stats: { total: number; pending: number; progress: number; resolved: number } }) {
  const cats = issueTypes.slice(0, 5).map(type => ({ type, count: reports.filter(r => r.type === type).length }))
  const max = Math.max(1, ...cats.map(c => c.count)); const rate = stats.total ? Math.round(stats.resolved / stats.total * 100) : 0
  return <div className="page-wrap"><PageTitle eyebrow="UNDERSTAND THE PATTERNS" title="Community insights" text="A simple snapshot of the reports shared with EcoReport." />
    <div className="stat-grid"><StatTile label="Total reports" value={stats.total} icon={FileText} tone="green" /><StatTile label="Pending" value={stats.pending} icon={Clock3} tone="gold" /><StatTile label="In progress" value={stats.progress} icon={Activity} tone="blue" /><StatTile label="Resolved" value={stats.resolved} icon={CheckCircle2} tone="green" /></div>
    <div className="analytics-grid"><section className="panel chart-panel"><div className="panel-head"><div><span className="eyebrow">REPORT CATEGORIES</span><h2>What neighbors are noticing</h2></div><span className="period-label">ALL REPORTS</span></div><div className="bars">{cats.map(c => <div className="bar-row" key={c.type}><span>{typeIcon[c.type]} {c.type}</span><div className="bar-track"><i style={{ width: `${Math.max(c.count ? 8 : 0, c.count / max * 100)}%` }} /></div><b>{c.count}</b></div>)}</div><p className="chart-note">Counts are calculated from the currently loaded report records.</p></section>
      <section className="panel rate-panel"><div className="panel-head"><div><span className="eyebrow">FOLLOW-THROUGH</span><h2>Resolution rate</h2></div><span className="rate-icon"><Check size={17} /></span></div><div className="rate-number">{rate}<small>%</small></div><div className="rate-track"><i style={{ width: `${rate}%` }} /></div><p><b>{stats.resolved} reports resolved</b> out of {stats.total} total reports.</p><span className="rate-foot"><ArrowUpRight size={14} /> Keep checking back as updates come in.</span></section></div>
    <div className="analytics-callout"><div className="callout-mark"><CloudSun size={20} /></div><div><b>Every data point starts with a person who noticed.</b><p>These numbers describe the reports currently available to this page, not a complete measure of environmental conditions.</p></div></div>
  </div>
}
function SdgPage() { return <div className="page-wrap"><PageTitle eyebrow="LOCAL ACTION, GLOBAL GOALS" title="A greener future, together." text="EcoReport supports community awareness and participation in environmental care." />
  <div className="sdg-intro"><span className="sdg-leaf"><Leaf size={22} /></span><div><b>Small local actions are part of a bigger picture.</b><p>When communities document local concerns and follow progress, they can build awareness and support more sustainable neighborhoods.</p></div></div>
  <div className="sdg-grid"><article className="sdg-card sdg-11"><div className="sdg-top"><span className="sdg-number">11</span><span className="sdg-wordmark">SUSTAINABLE<br />DEVELOPMENT<br />GOALS</span></div><div className="sdg-card-body"><span className="eyebrow">SUSTAINABLE CITIES & COMMUNITIES</span><h2>Make cities inclusive, safe, resilient and sustainable.</h2><p>EcoReport gives residents a simple way to share concerns about their local surroundings and see what has been reported.</p><div className="sdg-points"><span><Check size={15} /> Supports citizen participation</span><span><Check size={15} /> Makes local concerns easier to see</span><span><Check size={15} /> Encourages cleaner shared spaces</span></div></div></article>
    <article className="sdg-card sdg-13"><div className="sdg-top"><span className="sdg-number">13</span><span className="sdg-wordmark">SUSTAINABLE<br />DEVELOPMENT<br />GOALS</span></div><div className="sdg-card-body"><span className="eyebrow">CLIMATE ACTION</span><h2>Take urgent action to combat climate change.</h2><p>By making environmental observations visible, the project encourages awareness and local action around shared environmental challenges.</p><div className="sdg-points"><span><Check size={15} /> Raises environmental awareness</span><span><Check size={15} /> Helps communities notice patterns</span><span><Check size={15} /> Encourages early local action</span></div></div></article></div>
    <div className="sdg-note"><Globe2 size={18} /><span><b>Project note</b><small>EcoReport is a student initiative that supports awareness and reporting. It is not an official UN or municipal service.</small></span></div>
  </div> }
function AuthModal({ mode, setMode, busy, error, apiReady, onClose, onSubmit }: { mode: 'login' | 'signup'; setMode: (m: 'login' | 'signup') => void; busy: boolean; error: string; apiReady: boolean; onClose: () => void; onSubmit: (e: FormEvent<HTMLFormElement>) => void }) {
  return <div className="modal-backdrop" role="presentation" onMouseDown={e => { if (e.target === e.currentTarget) onClose() }}><section className="auth-modal" role="dialog" aria-modal="true" aria-labelledby="auth-title"><button className="modal-close" onClick={onClose} aria-label="Close"><X size={19} /></button><div className="auth-emblem"><Leaf size={22} /></div><span className="eyebrow">A COMMUNITY THAT NOTICES</span><h2 id="auth-title">{mode === 'login' ? 'Welcome back.' : 'Join your community.'}</h2><p>{mode === 'login' ? 'Sign in to submit reports and follow local updates.' : 'Create an account to share what you notice.'}</p>{!apiReady && <div className="backend-hint"><CircleHelp size={16} /><span><b>Backend not connected yet</b><small>Preview browsing works. Sign in and report submission will work after the Express API is running and configured.</small></span></div>}<div className="auth-tabs"><button className={mode === 'login' ? 'active' : ''} onClick={() => setMode('login')}>Log in</button><button className={mode === 'signup' ? 'active' : ''} onClick={() => setMode('signup')}>Sign up</button></div><form onSubmit={onSubmit} className="auth-form">{mode === 'signup' && <label className="field"><span>Full name</span><input name="name" autoComplete="name" required placeholder="Your name" /></label>}<label className="field"><span>Email</span><input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label><label className="field"><span>Password</span><input name="password" type="password" autoComplete={mode === 'login' ? 'current-password' : 'new-password'} required minLength={8} placeholder="At least 8 characters" /></label>{error && <div className="form-error" role="alert">{error}</div>}<button className="button button-dark auth-submit" disabled={busy || !apiReady}>{busy ? 'Please wait…' : mode === 'login' ? 'Log in to EcoReport' : 'Create account'} {apiReady && !busy && <ArrowRight size={16} />}</button></form><small className="auth-privacy"><ShieldCheck size={14} /> Your account is managed securely by the EcoReport server.</small></section></div>
}
function ReportModal({ report, canModerate, onClose, onStatus }: { report: Report; canModerate: boolean; onClose: () => void; onStatus: (s: ReportStatus) => void }) {
  const updates = report.updates || [{ id: 'created', report_id: report.id, changed_by: report.submitter || 'Community member', old_status: null, new_status: 'Pending' as ReportStatus, note: 'Report shared with the community.', created_at: report.created_at }]
  return <div className="modal-backdrop" role="presentation" onMouseDown={e => { if (e.target === e.currentTarget) onClose() }}><section className="detail-modal" role="dialog" aria-modal="true" aria-labelledby="detail-title"><button className="modal-close" onClick={onClose} aria-label="Close"><X size={19} /></button><div className="detail-topline"><span className="eyebrow">COMMUNITY REPORT · {report.id}</span><span className={`status-pill ${statusClass[report.status]}`}>{report.status}</span></div><div className="detail-title-line"><span className={`issue-symbol issue-${report.type.toLowerCase()}`}>{typeIcon[report.type] || '✳'}</span><div><h2 id="detail-title">{report.type} concern</h2><span>{report.severity} severity · shared {readableDate(report.created_at)}</span></div></div><p className="detail-description">{report.description}</p><div className="detail-location"><MapPin size={17} /><span><b>{report.location}</b><small>{report.latitude != null && report.longitude != null ? 'Location coordinates are available' : 'Approximate area provided by reporter'}</small></span></div><div className="timeline-head"><h3>Report progress</h3><span>{updates.length} {updates.length === 1 ? 'update' : 'updates'}</span></div><div className="timeline">{updates.map((u, i) => <div className="timeline-item" key={u.id}><span className={`timeline-dot ${i === updates.length - 1 ? 'current' : ''}`}>{i === updates.length - 1 && <Check size={11} />}</span><div><b>{u.new_status}</b><small>{u.note || `Status updated by ${u.changed_by}`}</small><span>{readableDate(u.created_at)}</span></div></div>)}</div>{canModerate && <div className="moderator-actions"><span><ShieldCheck size={15} /> Moderator tools</span><select aria-label="Update report status" value={report.status} onChange={e => onStatus(e.target.value as ReportStatus)}><option>Pending</option><option>In Progress</option><option>Resolved</option></select></div>}</section></div>
}
