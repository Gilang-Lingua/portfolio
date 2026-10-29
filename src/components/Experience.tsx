import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import {
  Calendar,
  MapPin,
  CheckCircle2,
} from 'lucide-react'
import { experienceData } from '../data/portfolioData'
import { useReveal } from '../hooks/useGsap'

const filterTabs = [
  { id: 'all', label: 'Semua' },
  { id: 'Kepanitiaan', label: 'Kepanitiaan' },
  { id: 'Organisasi', label: 'Organisasi' },
]

export function Experience() {
  const [activeTab, setActiveTab] = useState('all')
  const filterRef = useRef<HTMLDivElement>(null)
  const filterIndicatorRef = useRef<HTMLSpanElement>(null)
  const hasPositionedFilter = useRef(false)
  const revealRef = useReveal<HTMLElement>({
    childSelector: '[data-gsap="reveal"]',
    y: 18,
    refreshKey: activeTab,
  })

  const filteredExperience = experienceData.filter((item) => {
    if (activeTab === 'all') return true
    return item.type === activeTab
  })

  useLayoutEffect(() => {
    const filter = filterRef.current
    const indicator = filterIndicatorRef.current
    if (!filter || !indicator) return

    let disposed = false
    const syncIndicator = (animate: boolean) => {
      const activeButton = filter.querySelector<HTMLButtonElement>(`[data-filter-id="${activeTab}"]`)
      if (!activeButton) return

      const filterRect = filter.getBoundingClientRect()
      const buttonRect = activeButton.getBoundingClientRect()
      const position = {
        left: buttonRect.left - filterRect.left - filter.clientLeft,
        top: buttonRect.top - filterRect.top - filter.clientTop,
        width: buttonRect.width,
        height: buttonRect.height,
      }

      if (!animate || !hasPositionedFilter.current) {
        gsap.set(indicator, position)
        hasPositionedFilter.current = true
        return
      }

      gsap.to(indicator, {
        ...position,
        duration: 0.32,
        ease: 'power2.out',
        overwrite: 'auto',
      })
    }

    syncIndicator(hasPositionedFilter.current)
    const syncAfterFontsLoad = () => {
      if (!disposed) syncIndicator(true)
    }

    window.addEventListener('resize', syncAfterFontsLoad)
    void document.fonts.ready.then(syncAfterFontsLoad)

    return () => {
      disposed = true
      window.removeEventListener('resize', syncAfterFontsLoad)
    }
  }, [activeTab])

  return (
    <section ref={revealRef} id="experience" className="relative py-2">
      <div className="content-container">
        {/* Section Header */}
        <div data-gsap="reveal" className="mb-3 flex flex-col justify-between gap-2 text-left sm:flex-row sm:items-end">
          <div className="space-y-0.5">
            <h2 className="text-lg font-extrabold tracking-tight text-white sm:text-xl">
              Kepanitiaan & Organisasi
            </h2>
            <p className="text-[10px] text-zinc-400 sm:text-xs">
              Aktivitas dan rekam jejak peran di kepanitiaan serta organisasi kampus ITS.
            </p>
          </div>

          {/* Filter Tabs */}
          <div
            ref={filterRef}
            className="relative flex items-center gap-0.5 p-1 rounded-full bg-zinc-900/60 border border-white/5 backdrop-blur-md self-start sm:self-auto"
          >
            <span
              ref={filterIndicatorRef}
              aria-hidden="true"
              className="absolute left-0 top-0 rounded-full bg-blue-500/15 border border-blue-400/20 pointer-events-none"
            />
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                data-filter-id={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative z-10 px-3 py-1 rounded-full text-[11px] font-medium transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'text-blue-300'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Container */}
        <div className="grid grid-cols-1 gap-2 text-left lg:grid-cols-2">
          {filteredExperience.map((item) => (
            <div key={item.id} data-gsap="reveal" className="group">
              {/* Card */}
              <div className="space-y-1 rounded-lg border border-white/5 bg-zinc-900/80 p-2.5 transition-all hover:border-white/15">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0 space-y-0.5">
                    <span className="rounded border border-white/5 bg-zinc-800 px-1.5 py-0.5 text-[9px] font-mono text-cyan-300">
                      {item.type}
                    </span>
                    <h3 className="pt-0.5 text-[11px] font-bold leading-tight text-white sm:text-xs">
                      {item.role}
                    </h3>
                    <div className="text-[10px] font-medium leading-tight text-zinc-300">
                      {item.organization}
                    </div>
                  </div>

                  <div className="flex shrink-0 flex-col items-end gap-0.5 text-[9px] font-mono text-zinc-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-2.5 w-2.5 text-zinc-400" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-2.5 w-2.5 text-zinc-400" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {item.bullets && item.bullets.length > 0 && (
                  <div className="border-t border-white/5 pt-1">
                    <div className="space-y-0.5 text-[9px] leading-snug text-zinc-300">
                      {item.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="mt-px h-2.5 w-2.5 shrink-0 text-cyan-400" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
