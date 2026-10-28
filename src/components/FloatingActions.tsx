import { ArrowUp } from 'lucide-react'
import { useLenis } from '../context/LenisContext'

export function FloatingActions() {
  const { scrollTo, isScrolled, scrollProgress } = useLenis()

  if (!isScrolled) return null

  const size = 44
  const strokeWidth = 2.5
  const center = size / 2
  const radius = center - strokeWidth - 2
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-2 animate-fadeIn">
      {/* Back to top with radial progress border */}
      <button
        onClick={() => scrollTo(0, { duration: 1.3 })}
        className="relative w-11 h-11 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-white/10 shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 group"
        title={`Kembali ke atas (${scrollProgress}%)`}
        aria-label="Kembali ke atas"
      >
        {/* SVG Progress Circle - perfectly centered */}
        <svg
          viewBox="0 0 44 44"
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
        >
          {/* Background circle track */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            className="text-white/10"
            strokeWidth={strokeWidth}
            stroke="currentColor"
            fill="none"
          />
          {/* Dynamic progress circle */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            className="text-cyan-400 transition-all duration-100 ease-out"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="none"
          />
        </svg>

        <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform relative z-10" />
      </button>
    </div>
  )
}
