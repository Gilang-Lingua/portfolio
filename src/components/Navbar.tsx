import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Lightbulb, Menu, X } from 'lucide-react'
import { useLenis } from '../context/LenisContext'
import type { MouseEvent } from 'react'

const navItems = [
  { id: 'hero', label: 'Beranda' },
  { id: 'about', label: 'Tentang' },
  { id: 'portfolio', label: 'Portofolio' },
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

  const positionIndicator = useCallback((animate: boolean) => {
    const nav = navRef.current
    const indicator = activeIndicatorRef.current
    const activeButton = nav?.querySelector<HTMLButtonElement>(`[data-nav-id="${activeSection}"]`)
    if (!nav || !indicator || !activeButton || nav.clientWidth === 0) return

    const position = {
      x: activeButton.offsetLeft,
      y: activeButton.offsetTop,
      width: activeButton.offsetWidth,
      height: activeButton.offsetHeight,
    }

    if (!hasPositionedIndicator.current) {
      gsap.set(indicator, { ...position, autoAlpha: 1 })
      hasPositionedIndicator.current = true
    } else if (animate) {
      gsap.to(indicator, {
        ...position,
        autoAlpha: 1,
        duration: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 0.75,
        ease: 'power2.inOut',
        overwrite: 'auto',
      })
    } else {
      gsap.set(indicator, { ...position, autoAlpha: 1 })
    }
  }, [activeSection])

  useLayoutEffect(() => {
    const nav = navRef.current
    if (!nav) return

    const handleResize = () => positionIndicator(false)
    positionIndicator(true)

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [activeSection, positionIndicator])

  useEffect(() => () => {
    gsap.killTweensOf(activeIndicatorRef.current)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isScrolled
          ? 'top-4 py-1'
          : 'top-5 bg-transparent py-2'
      }`}
    >
      <div className="content-container relative flex items-center justify-between">
        {/* Desktop Nav Items */}
        <div
          className={`hidden md:flex absolute left-1/2 -translate-x-1/2 origin-top transform-gpu items-center gap-2 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isScrolled ? 'scale-[0.94]' : 'scale-[0.98]'
          }`}
        >
          <nav
            ref={navRef}
            className="navbar-glass relative flex w-max items-center gap-0.5 rounded-full bg-zinc-900/60 border border-white/5 p-1 backdrop-blur-md"
          >
            <span
              ref={activeIndicatorRef}
              aria-hidden="true"
              className="invisible absolute left-0 top-0 rounded-full bg-blue-500/15 border border-blue-400/20 pointer-events-none will-change-[transform,width,height]"
            />
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  data-nav-id={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative z-10 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-colors duration-200 ${
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
            className="navbar-glass flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900/60 text-amber-400 backdrop-blur-md transition-colors hover:bg-zinc-800 border border-white/5"
            title={`Aktifkan tema ${theme === 'dark' ? 'terang' : 'gelap'}`}
            aria-label={`Aktifkan tema ${theme === 'dark' ? 'terang' : 'gelap'}`}
            aria-pressed={theme === 'light'}
          >
            <Lightbulb className="h-4 w-4" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onToggleTheme}
            className={`navbar-glass rounded-full bg-zinc-900/60 border border-white/5 text-amber-400 backdrop-blur-md focus:outline-none flex items-center justify-center transition-all duration-300 ${
              isScrolled ? 'h-9 w-9' : 'h-10 w-10'
            }`}
            title={`Aktifkan tema ${theme === 'dark' ? 'terang' : 'gelap'}`}
            aria-label={`Aktifkan tema ${theme === 'dark' ? 'terang' : 'gelap'}`}
            aria-pressed={theme === 'light'}
          >
            <Lightbulb className="h-5 w-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`navbar-glass rounded-lg bg-zinc-900/80 border border-white/10 text-zinc-300 hover:text-white focus:outline-none transition-all duration-300 ${
              isScrolled ? 'p-1.5' : 'p-2'
            }`}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="navbar-glass md:hidden px-4 pt-3 pb-5 bg-[#090a0f]/95 backdrop-blur-xl border-b border-white/10 mt-2">
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
