import { ArrowUp } from 'lucide-react'
import { useLenis } from '../context/LenisContext'
import { personalInfo } from '../data/portfolioData'

export function Footer() {
  const { scrollTo } = useLenis()

  return (
    <footer className="relative border-t border-white/10 pt-12 pb-10 text-left">
      <div className="content-container">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-white/5">
          <div className="space-y-1">
            <div className="font-bold text-white text-base tracking-tight">
              {personalInfo.fullName}
            </div>
            <p className="text-xs text-zinc-400">
              Departemen Teknologi Informasi, Institut Teknologi Sepuluh Nopember (ITS)
            </p>
          </div>

          <button
            onClick={() => scrollTo(0, { duration: 1.2 })}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 text-xs transition-colors shrink-0"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

        {/* Bottom copyright and channels */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-zinc-400">
          <div>
            © {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-200 transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href={personalInfo.phoneUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-300 transition-colors"
            >
              WhatsApp
            </a>
            <span>•</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
