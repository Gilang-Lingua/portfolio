import { useState } from 'react'
import {
  Briefcase,
  ExternalLink,
  Info,
  ArrowRight,
} from 'lucide-react'
import { projectsData } from '../data/portfolioData'
import type { Project } from '../types'
import { ProjectModal } from './ProjectModal'
import { GithubIcon } from './Icons'

const projectCategories = ['Semua', 'Cyber Security', 'Data & AI', 'Web Dev']

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Semua')
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null)

  const filteredProjects = projectsData.filter((project) => {
    if (selectedCategory === 'Semua') return true
    return project.category === selectedCategory
  })

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs font-semibold text-cyan-400">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Showcase Karya & Proyek</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Proyek Pilihan yang Pernah Dibangun
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Portofolio aplikasi web fungsional yang merefleksikan problem solving, integrasi sistem, dan implementasi UI modern.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-zinc-900/80 border border-white/5 self-start md:self-auto">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/20'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-zinc-900/50 hover:bg-zinc-900/90 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col overflow-hidden shadow-xl"
            >
              {/* Card Visual Banner / Mockup */}
              <div
                className={`relative h-56 bg-gradient-to-tr ${project.imageBg} p-5 flex flex-col justify-between overflow-hidden border-b border-white/10`}
              >
                {/* Browser top bar mock */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></span>
                  </div>

                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-black/50 text-cyan-300 border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* Central abstract interface highlight */}
                <div className="py-2 flex items-center justify-center">
                  <div className="px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 backdrop-blur-md text-center max-w-xs shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <div className="text-xs font-mono text-zinc-400">Live Project Preview</div>
                    <div className="text-sm font-bold text-white tracking-wide truncate mt-0.5">
                      {project.title.split('-')[0]}
                    </div>
                  </div>
                </div>

                {/* Tags preview on banner */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2 py-0.5 rounded bg-black/60 text-zinc-300 border border-white/10 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[11px] px-2 py-0.5 rounded bg-black/60 text-zinc-400 border border-white/10 font-mono">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Stats / Highlights snippet */}
                {project.stats && (
                  <div className="flex items-center gap-4 py-2 border-y border-white/5 text-xs">
                    {project.stats.map((s, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-zinc-400 text-[10px] uppercase font-mono">{s.label}</span>
                        <span className="text-cyan-300 font-bold">{s.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Card Action Buttons */}
                <div className="pt-2 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 px-3.5 py-2 rounded-xl border border-white/10 transition-colors"
                  >
                    <Info className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Detail Arsitektur</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-white/10 transition-colors"
                        aria-label="Lihat Repository GitHub"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-bold shadow-md shadow-cyan-500/20 transition-all"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Showcase Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-zinc-900/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <GithubIcon className="w-5 h-5 text-cyan-400" />
              <span>Ingin Melihat Lebih Banyak Eksperimen & Repositori?</span>
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Kunjungi profil GitHub saya untuk repositori open source, tugas kuliah, dan side projects lainnya.
            </p>
          </div>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold border border-white/10 shadow-lg shrink-0 transition-colors"
          >
            <span>Buka GitHub Profile</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </a>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  )
}
