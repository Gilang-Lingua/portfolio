import { useState } from 'react'
import {
  Calendar,
  MapPin,
  CheckCircle2,
} from 'lucide-react'
import { experienceData } from '../data/portfolioData'

const filterTabs = [
  { id: 'all', label: 'Semua' },
  { id: 'Kepanitiaan', label: 'Kepanitiaan' },
  { id: 'Organisasi', label: 'Organisasi' },
]

export function Experience() {
  const [activeTab, setActiveTab] = useState('all')

  const filteredExperience = experienceData.filter((item) => {
    if (activeTab === 'all') return true
    return item.type === activeTab
  })

  return (
    <section id="experience" className="py-16 relative">
      <div className="content-container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 text-left">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Kepanitiaan & Organisasi
            </h2>
            <p className="text-zinc-400 text-sm">
              Aktivitas dan rekam jejak peran di kepanitiaan serta organisasi kampus ITS.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-900 border border-white/5 self-start sm:self-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-zinc-800 text-cyan-300 border border-white/10'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-3 sm:ml-4 space-y-8 pl-5 sm:pl-7 text-left">
          {filteredExperience.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Point */}
              <div className="absolute -left-[27px] sm:-left-[35px] top-1.5 w-5 h-5 rounded-full bg-[#090a0f] border-2 border-cyan-400 shadow-sm" />

              {/* Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/60 border border-white/5 hover:border-white/15 transition-all space-y-3">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="space-y-0.5">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-800 text-cyan-300 border border-white/5">
                      {item.type}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white pt-1">
                      {item.role}
                    </h3>
                    <div className="text-xs text-zinc-300 font-medium">
                      {item.organization}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-zinc-400 font-mono shrink-0">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {item.bullets && item.bullets.length > 0 && (
                  <div className="space-y-1.5 pt-1 border-t border-white/5">
                    {item.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
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
