import { FolderGit2, ExternalLink } from 'lucide-react'
import { projectsData } from '../data/portfolioData'
import { GithubIcon } from './Icons'

export function Projects() {
  return (
    <section id="projects" className="py-16 relative">
      <div className="content-container">
        {/* Section Header */}
        <div className="text-left space-y-2 mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Eksplorasi & Proyek Sederhana
          </h2>
          <p className="text-zinc-400 text-sm">
            Beberapa catatan, eksplorasi keamanan siber, dan pengelolaan data yang sedang dikerjakan.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="p-5 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/15 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-cyan-400">
                    <FolderGit2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                    {project.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white">{project.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mt-1">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-0.5 rounded bg-black/40 text-zinc-400 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:underline"
                    >
                      <span>Lihat</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
