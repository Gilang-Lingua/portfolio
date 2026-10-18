import { ArrowUp, Mail } from 'lucide-react'
import { useLenis } from '../context/LenisContext'

export function FloatingActions() {
  const { scrollTo, isScrolled, scrollProgress } = useLenis()

  if (!isScrolled) return null

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-2 animate-fadeIn">
      {/* Quick Email / Contact Action */}
      <button
        onClick={() => scrollTo('#contact', { offset: -70 })}
        className="w-11 h-11 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-cyan-400 border border-white/10 shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
        title="Hubungi Saya"
        aria-label="Scroll ke Kontak"
      >
        <Mail className="w-4 h-4" />
      </button>

      {/* Back to top with radial progress border */}
      <button
        onClick={() => scrollTo(0, { duration: 1.3 })}
        className="relative w-11 h-11 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-white/10 shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 group"
        title={`Kembali ke atas (${scrollProgress}%)`}
        aria-label="Kembali ke atas"
      >
        {/* SVG Progress Circle */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5">
          <circle
            cx="20"
            cy="20"
            r="16"
            className="text-white/10"
            strokeWidth="2.5"
            stroke="currentColor"
            fill="transparent"
          />
          <circle
            cx="20"
            cy="20"
            r="16"
            className="text-cyan-400 transition-all duration-75"
            strokeWidth="2.5"
            strokeDasharray={100}
            strokeDashoffset={100 - scrollProgress}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
          />
        </svg>

        <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </div>
  )
}
