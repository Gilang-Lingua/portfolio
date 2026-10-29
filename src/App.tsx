import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import type { MouseEvent } from 'react'
import { LenisProvider } from './context/LenisContext'
import { ScrollProgress } from './components/ScrollProgress'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Achievements } from './components/Achievements'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { FloatingActions } from './components/FloatingActions'
import { InteractiveBackground } from './components/InteractiveBackground'

export function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => (
    window.localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark'
  ))
  const [themeReveal, setThemeReveal] = useState<{
    x: number
    y: number
    radius: number
    background: string
  } | null>(null)
  const themeRevealRef = useRef<HTMLDivElement>(null)
  const isThemeAnimatingRef = useRef(false)

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = (origin: { x: number; y: number }) => {
    if (isThemeAnimatingRef.current) return

    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    const radius = Math.ceil(
      Math.max(
        Math.hypot(origin.x, origin.y),
        Math.hypot(window.innerWidth - origin.x, origin.y),
        Math.hypot(origin.x, window.innerHeight - origin.y),
        Math.hypot(window.innerWidth - origin.x, window.innerHeight - origin.y)
      )
    )

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTheme(nextTheme)
      return
    }

    isThemeAnimatingRef.current = true
    setThemeReveal({
      ...origin,
      radius,
      background: nextTheme === 'light' ? '#f7f8fc' : '#090a0f',
    })

    requestAnimationFrame(() => {
      const reveal = themeRevealRef.current
      if (!reveal) {
        setTheme(nextTheme)
        setThemeReveal(null)
        isThemeAnimatingRef.current = false
        return
      }

      gsap.timeline()
        .fromTo(
        reveal,
        { clipPath: `circle(0px at ${origin.x}px ${origin.y}px)` },
        {
          clipPath: `circle(${radius}px at ${origin.x}px ${origin.y}px)`,
          duration: 0.9,
          ease: 'power2.inOut',
        }
      )
        .call(() => setTheme(nextTheme), [], 0.72)
        .to(reveal, {
          opacity: 0,
          duration: 0.16,
          ease: 'power1.out',
          onComplete: () => {
            setThemeReveal(null)
            isThemeAnimatingRef.current = false
          },
        })
    })
  }

  const handleThemeToggle = (event: MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    toggleTheme({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    })
  }

  return (
    <LenisProvider>
      <div
        data-theme={theme}
        className="relative min-h-screen bg-[#090a0f] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/25 selection:text-cyan-200"
      >
        {/* Interactive Cursor-Revealed Background Grid */}
        <InteractiveBackground />

        {/* Top Scroll Indicator */}
        <ScrollProgress />

        {/* Global Navigation Bar */}
        <Navbar theme={theme} onToggleTheme={handleThemeToggle} />

        {/* Main Sections */}
        <main className="relative z-10 flex-1">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Achievements />
          <Projects />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Quick Navigation */}
        <FloatingActions />

        {themeReveal && (
          <div
            ref={themeRevealRef}
            aria-hidden="true"
            className="fixed inset-0 z-[100] pointer-events-none"
            style={{
              backgroundColor: themeReveal.background,
              clipPath: `circle(0px at ${themeReveal.x}px ${themeReveal.y}px)`,
              willChange: 'clip-path',
            }}
          />
        )}
      </div>
    </LenisProvider>
  )
}

export default App
