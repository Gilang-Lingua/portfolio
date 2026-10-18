import { useState } from 'react'
import type { ElementType } from 'react'
import {
  Sparkles,
  Atom,
  FileCode2,
  Globe,
  Palette,
  Code,
  Layout,
  Server,
  Cpu,
  Network,
  Database,
  DatabaseZap,
  Flame,
  GitBranch,
  Zap,
  Send,
  Layers,
} from 'lucide-react'
import { skillsData } from '../data/portfolioData'
import type { SkillItem } from '../types'
import { FigmaIcon } from './Icons'

// Map string icon names to icon components
const iconMap: Record<string, ElementType> = {
  Atom,
  FileCode2,
  Globe,
  Palette,
  Code,
  Layout,
  Sparkles,
  Server,
  Cpu,
  Network,
  Database,
  DatabaseZap,
  Flame,
  GitBranch,
  Zap,
  Figma: FigmaIcon,
  Send,
}

const categories = [
  { id: 'all', label: 'Semua Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend & API' },
  { id: 'database', label: 'Database' },
  { id: 'tools', label: 'Tools & DevOps' },
]

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredSkills = skillsData.filter((skill) => {
    if (selectedCategory === 'all') return true
    return skill.category === selectedCategory
  })

  return (
    <section id="skills" className="py-20 relative bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-xs font-semibold text-indigo-400">
            <Layers className="w-3.5 h-3.5" />
            <span>Keahlian & Teknologi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tech Stack yang Biasa Digunakan
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Kombinasi teknologi modern untuk menghasilkan aplikasi web yang tangguh, responsif, dan mudah dipelihara.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill: SkillItem, index: number) => {
            const Icon = iconMap[skill.iconName] || Code
            return (
              <div
                key={index}
                className="group relative p-4 sm:p-5 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900/95 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-start justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${skill.color} p-0.5 shadow-md group-hover:scale-110 transition-transform duration-200`}
                  >
                    <div className="w-full h-full rounded-[10px] bg-[#0c0e15] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                      skill.level === 'Mahir'
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                        : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                  <div className="text-[11px] text-zinc-400 capitalize mt-0.5">
                    {skill.category}
                  </div>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-3 w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-500 ${
                      skill.level === 'Mahir' ? 'w-4/5' : 'w-3/5'
                    }`}
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* Highlight Note for Lenis */}
        <div className="mt-12 p-5 rounded-2xl bg-gradient-to-r from-violet-950/40 via-cyan-950/30 to-zinc-900/50 border border-violet-800/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-violet-400 animate-spin" style={{ animationDuration: '8s' }} />
            </div>
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <span>Dioptimalkan dengan Lenis Smooth Scroll</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
                  Active 60fps
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                Pengalaman scrolling yang halus dan sinkron tanpa lag, cocok untuk website presentasi & portofolio modern.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
