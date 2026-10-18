import { useEffect } from 'react'
import { X, ExternalLink, CheckCircle2, Layers, BarChart3 } from 'lucide-react'
import type { Project } from '../types'
import { GithubIcon } from './Icons'
import { useLenis } from '../context/LenisContext'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { lenis } = useLenis()

  // Pause Lenis scroll when modal is open
  useEffect(() => {
    if (project && lenis) {
      lenis.stop()
    }
    return () => {
      if (lenis) {
        lenis.start()
      }
    }
  }, [project, lenis])

  if (!project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-zinc-950 border border-white/15 p-6 sm:p-8 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          aria-label="Tutup Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/60 text-xs font-semibold text-cyan-300">
            <span>{project.category}</span>
            {project.featured && <span>• Unggulan</span>}
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{project.title}</h3>
          <p className="text-sm sm:text-base text-zinc-400 font-medium">{project.tagline}</p>
        </div>

        {/* Visual Banner Simulation */}
        <div
          className={`mt-6 h-44 rounded-2xl bg-gradient-to-tr ${project.imageBg} border border-white/10 p-5 flex flex-col justify-between shadow-inner`}
        >
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Project Architecture Preview</span>
            </span>
            <span className="px-2 py-0.5 rounded bg-black/40 text-cyan-300">Active Build</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-black/60 border border-white/10 text-xs text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mt-6 space-y-4 text-zinc-300 text-sm leading-relaxed">
          <h4 className="text-base font-bold text-white">Deskripsi Lengkap Proyek:</h4>
          <p>{project.description}</p>

          {/* Stats if available */}
          {project.stats && (
            <div className="grid grid-cols-2 gap-3 py-2">
              {project.stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-zinc-900/80 border border-white/5">
                  <div className="text-xs text-zinc-400">{stat.label}</div>
                  <div className="text-base font-bold text-cyan-400 mt-0.5">{stat.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Key Highlights */}
          <div className="space-y-2 pt-2">
            <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4 text-indigo-400" />
              <span>Fitur Utama & Implementasi Teknis:</span>
            </h4>
            <div className="space-y-1.5 pl-1">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons in Modal */}
        <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs shadow-md transition-colors"
              >
                <span>Kunjungi Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-white font-semibold text-xs transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
                <span>Lihat Source Code</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
          >
            Tutup Jendela
          </button>
        </div>
      </div>
    </div>
  )
}
