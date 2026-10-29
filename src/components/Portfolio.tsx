import { useCallback, useLayoutEffect, useRef, useState, type KeyboardEvent } from 'react'
import { Award, BriefcaseBusiness, Code2, FolderGit2 } from 'lucide-react'
import gsap from 'gsap'
import { Achievements } from './Achievements'
import { Experience } from './Experience'
import { Projects } from './Projects'
import { Skills } from './Skills'

const portfolioTabs = [
  { id: 'skills', label: 'Minat & Skill', icon: Code2 },
  { id: 'experience', label: 'Pengalaman', icon: BriefcaseBusiness },
  { id: 'achievements', label: 'Pencapaian', icon: Award },
  { id: 'exploration', label: 'Eksplorasi', icon: FolderGit2 },
] as const

type PortfolioTab = (typeof portfolioTabs)[number]['id']

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<PortfolioTab>('skills')
  const tabListRef = useRef<HTMLDivElement>(null)
  const activeIndicatorRef = useRef<HTMLSpanElement>(null)
  const hasPositionedIndicator = useRef(false)

  const positionIndicator = useCallback((animate: boolean) => {
    const tabList = tabListRef.current
    const indicator = activeIndicatorRef.current
    const activeButton = tabList?.querySelector<HTMLButtonElement>(`[data-portfolio-tab="${activeTab}"]`)
    if (!tabList || !indicator || !activeButton || tabList.clientWidth === 0) return

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
  }, [activeTab])

  useLayoutEffect(() => {
    const tabList = tabListRef.current
    if (!tabList) return

    const handleResize = () => positionIndicator(false)
    positionIndicator(true)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [activeTab, positionIndicator])

  useLayoutEffect(() => () => {
    gsap.killTweensOf(activeIndicatorRef.current)
  }, [])

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const currentIndex = portfolioTabs.findIndex((tab) => tab.id === activeTab)
    let nextIndex = currentIndex

    if (event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % portfolioTabs.length
    else if (event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + portfolioTabs.length) % portfolioTabs.length
    else if (event.key === 'Home') nextIndex = 0
    else if (event.key === 'End') nextIndex = portfolioTabs.length - 1
    else return

    event.preventDefault()
    const nextTab = portfolioTabs[nextIndex]
    setActiveTab(nextTab.id)
    document.getElementById(`portfolio-tab-${nextTab.id}`)?.focus()
  }

  return (
    <section id="portfolio" className="relative py-8 sm:py-10">
      <div className="content-container">
        <h2 className="mb-3 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Portofolio
        </h2>

        <div
          ref={tabListRef}
          role="tablist"
          aria-label="Kategori portfolio"
          className="relative mx-auto mb-1 flex w-max max-w-full items-center gap-0 rounded-full border border-white/5 bg-zinc-900/60 p-0.5 backdrop-blur-md"
        >
          <span
            ref={activeIndicatorRef}
            aria-hidden="true"
            className="invisible absolute left-0 top-0 rounded-full border border-blue-400/20 bg-blue-500/15 pointer-events-none will-change-[transform,width,height]"
          />
          {portfolioTabs.map(({ id, label, icon: Icon }) => {
            const isActive = activeTab === id

            return (
              <button
                key={id}
                id={`portfolio-tab-${id}`}
                data-portfolio-tab={id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="portfolio-panel"
                onClick={() => setActiveTab(id)}
                onKeyDown={handleTabKeyDown}
                className={`relative z-10 flex min-h-6 items-center justify-center gap-1 rounded-full px-1.5 py-0.5 text-[10px] font-medium transition-colors duration-200 sm:min-h-7 sm:gap-1 sm:px-2 sm:py-0.5 sm:text-[10px] ${
                  isActive ? 'text-blue-300' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Icon className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                <span>{label}</span>
              </button>
            )
          })}
        </div>

        <div
          id="portfolio-panel"
          role="tabpanel"
          aria-labelledby={`portfolio-tab-${activeTab}`}
          tabIndex={0}
        >
          {activeTab === 'skills' && <Skills />}
          {activeTab === 'experience' && <Experience />}
          {activeTab === 'achievements' && <Achievements />}
          {activeTab === 'exploration' && <Projects />}
        </div>
      </div>
    </section>
  )
}
