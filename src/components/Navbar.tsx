import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Lightbulb, Menu, X } from 'lucide-react'
import { useLenis } from '../context/LenisContext'
import type { MouseEvent } from 'react'

const navItems = [
  { id: 'hero', label: 'Beranda' },
  { id: 'about', label: 'Tentang' },
  { id: 'skills', label: 'Minat & Skill' },
  { id: 'experience', label: 'Pengalaman' },
  { id: 'achievements', label: 'Pencapaian' },
  { id: 'contact', label: 'Kontak' },
]

interface NavbarProps {
  theme: 'dark' | 'light'
  onToggleTheme: (event: MouseEvent<HTMLButtonElement>) => void
}

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const { scrollTo, activeSection, isScrolled } = useLenis()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const activeIndicatorRef = useRef<HTMLSpanElement>(null)
  const hasPositionedIndicator = useRef(false)

  const handleNavClick = (id: string) => {
    scrollTo(`#${id}`, { offset: -70 })
    setMobileMenuOpen(false)
  }

  useLayoutEffect(() => {
    const nav = navRef.current
    const indicator = activeIndicatorRef.current
    const activeButton = nav?.querySelector<HTMLButtonElement>(`[data-nav-id="${activeSection}"]`)
    if (!nav || !indicator || !activeButton || nav.clientWidth === 0) return

    const navRect = nav.getBoundingClientRect()
    const buttonRect = activeButton.getBoundingClientRect()
    const indicatorWidth = Math.round(buttonRect.width)
    const indicatorHeight = Math.round(buttonRect.height)
    const position = {
      left: buttonRect.left - navRect.left - nav.clientLeft,
      top: buttonRect.top - navRect.top - nav.clientTop,
      width: indicatorWidth,
      height: indicatorHeight,
    }

    if (!hasPositionedIndicator.current) {
      gsap.set(indicator, position)
      hasPositionedIndicator.current = true
    } else {
      gsap.to(indicator, {
        ...position,
        duration: 0.32,
        ease: 'power2.out',
        overwrite: 'auto',
      })
    }
  }, [activeSection])

  useLayoutEffect(() => {
    const nav = navRef.current
    if (!nav) return

    const updateIndicator = () => {
      const activeButton = nav.querySelector<HTMLButtonElement>(`[data-nav-id="${activeSection}"]`)
      const indicator = activeIndicatorRef.current
      if (!activeButton || !indicator || nav.clientWidth === 0) return

      const navRect = nav.getBoundingClientRect()
      const buttonRect = activeButton.getBoundingClientRect()
      const indicatorWidth = Math.round(buttonRect.width)
      const indicatorHeight = Math.round(buttonRect.height)
      gsap.set(indicator, {
        left: buttonRect.left - navRect.left - nav.clientLeft,
        top: buttonRect.top - navRect.top - nav.clientTop,
        width: indicatorWidth,
        height: indicatorHeight,
      })
    }

    window.addEventListener('resize', updateIndicator)
    return () => window.removeEventListener('resize', updateIndicator)
  }, [activeSection])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090a0f]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="content-container relative flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => handleNavClick('hero')}
          className="group flex items-center gap-2.5 text-left focus:outline-none shrink-0"
        >
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/15 flex items-center justify-center text-cyan-400 font-bold text-sm group-hover:border-cyan-500/50 transition-colors shrink-0">
            GL
          </div>
          <div className="hidden lg:block font-semibold text-white text-sm sm:text-base tracking-tight whitespace-nowrap">
            Gemilang Ananda Lingua
          </div>
        </button>

        {/* Desktop Nav Items */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
          <nav
            ref={navRef}
            className="relative flex items-center gap-1 p-1 rounded-full bg-zinc-900/60 border border-white/5 backdrop-blur-md"
          >
            <span
              ref={activeIndicatorRef}
              aria-hidden="true"
              className="absolute left-0 top-0 rounded-full bg-blue-500/15 border border-blue-400/20 pointer-events-none"
            />
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  data-nav-id={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative z-10 px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-blue-300'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              )
            })}
          </nav>
          <button
            onClick={onToggleTheme}
            className="absolute left-full top-1/2 ml-2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-zinc-900/60 text-amber-400 backdrop-blur-md transition-colors hover:bg-zinc-800 border border-white/5"
            title={`Aktifkan tema ${theme === 'dark' ? 'terang' : 'gelap'}`}
            aria-label={`Aktifkan tema ${theme === 'dark' ? 'terang' : 'gelap'}`}
            aria-pressed={theme === 'light'}
          >
            <Lightbulb className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="w-10 h-10 rounded-full bg-zinc-900/60 border border-white/5 text-amber-400 backdrop-blur-md focus:outline-none flex items-center justify-center"
            title={`Aktifkan tema ${theme === 'dark' ? 'terang' : 'gelap'}`}
            aria-label={`Aktifkan tema ${theme === 'dark' ? 'terang' : 'gelap'}`}
            aria-pressed={theme === 'light'}
          >
            <Lightbulb className="w-5 h-5" />
          </button>
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
        <div className="md:hidden px-4 pt-3 pb-5 bg-[#090a0f]/95 backdrop-blur-xl border-b border-white/10 mt-2">
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
