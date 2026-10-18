import { useState } from 'react'
import type { ElementType } from 'react'
import {
  Calendar,
  MapPin,
  Briefcase,
  Users,
  History,
  CheckCircle2,
  Trophy,
  Award,
  Scroll,
} from 'lucide-react'
import { experienceData, achievementsData } from '../data/portfolioData'

const typeIcons: Record<string, ElementType> = {
  Kepanitiaan: Briefcase,
  Organisasi: Users,
  Pendidikan: Award,
  Magang: Briefcase,
}

const typeStyles: Record<string, { bg: string; text: string; border: string }> = {
  Kepanitiaan: {
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
    border: 'border-cyan-500/30',
  },
  Organisasi: {
    bg: 'bg-violet-500/10',
    text: 'text-violet-400',
    border: 'border-violet-500/30',
  },
  Pendidikan: {
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    border: 'border-emerald-500/30',
  },
  Magang: {
    bg: 'bg-amber-500/10',
    text: 'text-amber-400',
    border: 'border-amber-500/30',
  },
}

const filterTabs = [
  { id: 'all', label: 'Semua Pengalaman' },
  { id: 'Kepanitiaan', label: 'Kepanitiaan (Committee)' },
  { id: 'Organisasi', label: 'Organisasi (HMIT ITS & Kampus)' },
]

export function Experience() {
  const [activeTab, setActiveTab] = useState('all')

  const filteredExperience = experienceData.filter((item) => {
    if (activeTab === 'all') return true
    return item.type === activeTab
  })

  return (
    <section id="experience" className="py-20 relative bg-zinc-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs font-semibold text-cyan-400">
            <History className="w-3.5 h-3.5" />
            <span>Rekam Jejak & Kontribusi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pengalaman Kepanitiaan & Organisasi
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Pengalaman supervisi operasional, perumusan teknis kompetisi skala nasional, dan manajemen SDM di lingkungan ITS.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/25'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-8">
          {filteredExperience.map((item) => {
            const Icon = typeIcons[item.type] || Briefcase
            const badgeStyle = typeStyles[item.type] || typeStyles.Kepanitiaan

            return (
              <div key={item.id} className="relative group">
                {/* Timeline Node Point */}
                <div className="absolute -left-[37px] sm:-left-[45px] top-1.5 w-8 h-8 rounded-full bg-[#090a0f] border border-white/20 flex items-center justify-center group-hover:border-cyan-400 transition-colors shadow-md">
                  <Icon className="w-3.5 h-3.5 text-cyan-400" />
                </div>

                {/* Experience Card */}
                <div className="p-6 sm:p-7 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900/95 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="space-y-1">
                      <span
                        className={`inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${badgeStyle.bg} ${badgeStyle.text} ${badgeStyle.border}`}
                      >
                        {item.type}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.role}
                      </h3>
                      <div className="text-sm font-semibold text-zinc-300">
                        {item.organization}
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs text-zinc-400 space-y-1 shrink-0">
                      <div className="flex items-center gap-1.5 font-mono text-cyan-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-zinc-400">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bullet points from CV */}
                  {item.bullets && item.bullets.length > 0 && (
                    <div className="space-y-2 pt-1 border-t border-white/5">
                      {item.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] px-2.5 py-0.5 rounded-lg bg-black/50 border border-white/10 text-zinc-300 font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Achievements & Certifications Block */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800/60 text-xs font-semibold text-amber-400">
              <Trophy className="w-3.5 h-3.5" />
              <span>Prestasi & Sertifikasi Resmi</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Pencapaian & Kualifikasi
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              Pengakuan dalam kompetisi keamanan siber nasional dan pelatihan kepemimpinan manajerial mahasiswa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievementsData.map((ach) => (
              <div
                key={ach.id}
                className="p-5 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900/90 border border-white/10 hover:border-amber-500/40 transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {ach.iconType === 'trophy' ? (
                    <Trophy className="w-6 h-6 text-amber-400 animate-pulse" />
                  ) : ach.iconType === 'award' ? (
                    <Award className="w-6 h-6 text-cyan-400" />
                  ) : (
                    <Scroll className="w-6 h-6 text-violet-400" />
                  )}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      {ach.type}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">{ach.year}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                    {ach.title}
                  </h4>
                  <div className="text-xs text-cyan-300 font-medium">{ach.issuer}</div>
                  {ach.description && (
                    <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                      {ach.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
