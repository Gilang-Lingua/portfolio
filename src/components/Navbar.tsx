import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLenis } from '../context/LenisContext'

const navItems = [
  { id: 'hero', label: 'Beranda' },
  { id: 'about', label: 'Tentang' },
  { id: 'skills', label: 'Minat & Skill' },
  { id: 'experience', label: 'Pengalaman' },
  { id: 'achievements', label: 'Pencapaian' },
  { id: 'contact', label: 'Kontak' },
]

export function Navbar() {
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
      <div className="content-container flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => handleNavClick('hero')}
          className="group flex items-center gap-2.5 text-left focus:outline-none shrink-0"
        >
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/15 flex items-center justify-center text-cyan-400 font-bold text-sm group-hover:border-cyan-500/50 transition-colors shrink-0">
            GL
          </div>
          <div className="font-semibold text-white text-sm sm:text-base tracking-tight whitespace-nowrap">
            Gemilang Ananda Lingua
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
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-zinc-800 text-cyan-300 border border-white/10 shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            )
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={() => handleNavClick('contact')}
            className="px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-xs font-medium text-zinc-200 hover:text-white transition-colors"
          >
            Kontak
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
        <div className="sm:hidden px-4 pt-3 pb-5 bg-[#090a0f]/95 backdrop-blur-xl border-b border-white/10 mt-2">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300'
                      : 'text-zinc-300 hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
