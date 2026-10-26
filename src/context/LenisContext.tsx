import { createContext, useContext, useEffect, useState, useRef, type ReactNode } from 'react'
import Lenis from 'lenis'

interface LenisContextType {
  lenis: Lenis | null
  scrollTo: (target: string | HTMLElement | number, options?: { offset?: number; duration?: number }) => void
  scrollProgress: number
  activeSection: string
  isScrolled: boolean
}

const LenisContext = createContext<LenisContextType>({
  lenis: null,
  scrollTo: () => {},
  scrollProgress: 0,
  activeSection: 'hero',
  isScrolled: false,
})

export const useLenis = () => useContext(LenisContext)

export function LenisProvider({ children }: { children: ReactNode }) {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)
  const reqIdRef = useRef<number | null>(null)

  useEffect(() => {
    // Initialize Lenis with smooth modern easing
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    })

    setLenisInstance(lenis)

    // Animation frame loop
    function raf(time: number) {
      lenis.raf(time)
      reqIdRef.current = requestAnimationFrame(raf)
    }
    reqIdRef.current = requestAnimationFrame(raf)

    // Listen to scroll events
    const handleScroll = (e: { scroll: number; limit: number; progress: number }) => {
      setScrollProgress(Math.round(e.progress * 100))
      setIsScrolled(e.scroll > 50)

      // Section spy
      const sections = ['hero', 'about', 'skills', 'experience', 'achievements', 'projects', 'contact']
      const scrollPos = e.scroll + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const top = el.offsetTop
          if (scrollPos >= top) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    lenis.on('scroll', handleScroll)

    // Intercept in-page anchor clicks for smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a')
      if (!target) return
      const href = target.getAttribute('href')
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault()
        const targetEl = document.querySelector(href) as HTMLElement | null
        if (targetEl) {
          lenis.scrollTo(targetEl, { offset: -70, duration: 1.2 })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      if (reqIdRef.current) {
        cancelAnimationFrame(reqIdRef.current)
      }
      document.removeEventListener('click', handleAnchorClick)
      lenis.destroy()
    }
  }, [])

  const scrollTo = (target: string | HTMLElement | number, options?: { offset?: number; duration?: number }) => {
    if (!lenisInstance) return

    if (typeof target === 'string') {
      const el = document.querySelector(target) as HTMLElement | null
      if (el) {
        lenisInstance.scrollTo(el, {
          offset: options?.offset ?? -70,
          duration: options?.duration ?? 1.2,
        })
      }
    } else {
      lenisInstance.scrollTo(target, {
        offset: options?.offset ?? -70,
        duration: options?.duration ?? 1.2,
      })
    }
  }

  return (
    <LenisContext.Provider
      value={{
        lenis: lenisInstance,
        scrollTo,
        scrollProgress,
        activeSection,
        isScrolled,
      }}
    >
      {children}
    </LenisContext.Provider>
  )
}
