import { useState } from 'react'
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react'
import { useLenis } from '../context/LenisContext'

const navItems = [
  { id: 'hero', label: 'Beranda' },
  { id: 'about', label: 'Tentang' },
  { id: 'skills', label: 'Keahlian' },
  { id: 'projects', label: 'Proyek' },
  { id: 'experience', label: 'Pengalaman' },
  { id: 'contact', label: 'Kontak' },
]

export const Navbar: React.FC = () => {
  const { scrollTo, activeSection, isScrolled } = useLenis()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (id: string) => {
    scrollTo(`#${id}`, { offset: -70 })
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090a0f]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('hero')}
          className="group flex items-center gap-2 text-left focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-200">
            G
          </div>
          <div>
            <div className="font-bold text-white text-base tracking-tight flex items-center gap-1">
              Gilang
              <span className="text-cyan-400 font-mono text-xs px-1.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/60">
                .dev
              </span>
            </div>
            <div className="text-[10px] text-zinc-400 font-medium tracking-wide">
              Web Portfolio
            </div>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-zinc-900/60 border border-white/5 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border border-cyan-500/30 shadow-[0_0_12px_rgba(56,189,248,0.2)]'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            )
          })}
        </nav>

        {/* Action Button & Status */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-medium text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Siap Magang
          </div>

          <button
            onClick={() => handleNavClick('contact')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-semibold shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-200 active:scale-95"
          >
            <span>Hubungi Saya</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-zinc-900/80 border border-white/10 text-zinc-300 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-3 pb-6 bg-[#090a0f]/95 backdrop-blur-xl border-b border-white/10 mt-2">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                      : 'text-zinc-300 hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <Sparkles className="w-3.5 h-3.5 text-cyan-400" />}
                </button>
              )
            })}

            <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-xs text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Status: Terbuka untuk Tawaran Magang
              </div>
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium text-sm shadow-md"
              >
                <span>Mulai Diskusi</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
