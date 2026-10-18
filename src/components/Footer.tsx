import { ArrowUp, Sparkles } from 'lucide-react'
import { useLenis } from '../context/LenisContext'
import { personalInfo } from '../data/portfolioData'

export const Footer: React.FC = () => {
  const { scrollTo } = useLenis()

  const handleBackToTop = () => {
    scrollTo(0, { duration: 1.4 })
  }

  return (
    <footer className="relative border-t border-white/10 bg-zinc-950/80 pt-16 pb-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12 border-b border-white/5">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                G
              </div>
              <span className="font-bold text-white text-base tracking-tight">
                Gilang<span className="text-cyan-400 font-mono text-xs">.dev</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              Portofolio web modern dengan arsitektur React, Tailwind CSS, dan integrasi Lenis Smooth Scrolling untuk performa animasi 60fps.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">Navigasi Halaman</div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => scrollTo('#hero')}
                className="text-left text-zinc-400 hover:text-cyan-300 transition-colors"
              >
                Beranda
              </button>
              <button
                onClick={() => scrollTo('#about')}
                className="text-left text-zinc-400 hover:text-cyan-300 transition-colors"
              >
                Tentang Saya
              </button>
              <button
                onClick={() => scrollTo('#skills')}
                className="text-left text-zinc-400 hover:text-cyan-300 transition-colors"
              >
                Tech Stack
              </button>
              <button
                onClick={() => scrollTo('#projects')}
                className="text-left text-zinc-400 hover:text-cyan-300 transition-colors"
              >
                Daftar Proyek
              </button>
              <button
                onClick={() => scrollTo('#experience')}
                className="text-left text-zinc-400 hover:text-cyan-300 transition-colors"
              >
                Pengalaman
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="text-left text-zinc-400 hover:text-cyan-300 transition-colors"
              >
                Hubungi Saya
              </button>
            </div>
          </div>

          {/* Lenis Badge & Back to Top */}
          <div className="md:col-span-3 flex flex-col md:items-end justify-between space-y-4">
            <div className="p-3 rounded-2xl bg-zinc-900/60 border border-white/5 space-y-1 text-left md:text-right">
              <div className="flex items-center md:justify-end gap-1.5 text-xs font-mono text-cyan-300">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Powered by Lenis</span>
              </div>
              <div className="text-[11px] text-zinc-400">Silky smooth inertial scroll engine</div>
            </div>

            <button
              onClick={handleBackToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 text-xs font-semibold shadow-md transition-all self-start md:self-auto active:scale-95"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-4 h-4 text-cyan-400" />
            </button>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} {personalInfo.fullName}. Hak cipta dilindungi.</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
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
