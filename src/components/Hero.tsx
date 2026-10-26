import { useState, useEffect } from 'react'
import {
  FileText,
  Mail,
  MapPin,
  GraduationCap,
  ArrowDown,
} from 'lucide-react'
import { personalInfo } from '../data/portfolioData'
import { useLenis } from '../context/LenisContext'
import { LinkedinIcon } from './Icons'

interface HeroProps {
  onOpenCV: () => void
}

const TYPING_WORDS = ['Gemilang Ananda Lingua', 'Gilang']

export function Hero({ onOpenCV }: HeroProps) {
  const { scrollTo } = useLenis()
  const [wordIndex, setWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = TYPING_WORDS[wordIndex]
    let timer: ReturnType<typeof setTimeout>

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1))
        }, 95)
      } else {
        // Pause after full typing before backspacing
        timer = setTimeout(() => {
          setIsDeleting(true)
        }, 2000)
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length - 1))
        }, 55)
      } else {
        // Pause briefly after deletion before typing next name
        timer = setTimeout(() => {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % TYPING_WORDS.length)
        }, 300)
      }
    }

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, wordIndex])

  return (
    <section
      id="hero"
      className="relative min-h-[82vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="content-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Introduction */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs text-zinc-300">
              <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
              <span>Teknologi Informasi • Institut Teknologi Sepuluh Nopember (ITS)</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight min-h-[2.4em] sm:min-h-[1.9em] lg:min-h-[1.3em]">
                Halo, saya{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300">
                  {displayText}
                </span>
                <span
                  className="inline-block w-[3px] h-[0.9em] bg-cyan-400 align-baseline ml-1 rounded-sm animate-cursor-blink"
                  aria-hidden="true"
                />
              </h1>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl">
                Mahasiswa Departemen Teknologi Informasi ITS dengan minat utama di bidang{' '}
                <span className="text-white font-medium">Cyber Security</span>,{' '}
                <span className="text-white font-medium">Data Science</span>, dan{' '}
                <span className="text-white font-medium">Artificial Intelligence</span>.
              </p>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-lg">
              Aktif berkontribusi dalam berbagai kepanitiaan dan organisasi kampus seperti HMIT ITS, ARA, dan GERIGI ITS dalam koordinasi operasional dan tim teknis.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('#about', { offset: -70 })}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs shadow-md transition-all active:scale-98"
              >
                <span>Tentang Saya</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenCV}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-white/10 font-medium text-xs transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>Lihat CV Lengkap</span>
              </button>

              <button
                onClick={() => scrollTo('#contact', { offset: -70 })}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/5 text-xs transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
                <span>Kontak</span>
              </button>
            </div>
          </div>

          {/* Right Column: Clean Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm rounded-2xl bg-zinc-900/70 border border-white/10 p-6 shadow-xl backdrop-blur-md space-y-5 text-left">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-lg">
                  GL
                </div>
                <div>
                  <h2 className="text-base font-bold text-white leading-snug">{personalInfo.fullName}</h2>
                  <div className="text-xs text-zinc-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Focus Areas */}
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">Peminatan Utama</div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-xs px-2.5 py-1 rounded-md bg-zinc-800 text-cyan-300 border border-white/5">
                    Cyber Security (CTF)
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-zinc-800 text-indigo-300 border border-white/5">
                    Data Science
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-zinc-800 text-violet-300 border border-white/5">
                    Artificial Intelligence
                  </span>
                </div>
              </div>

              {/* Direct Channels */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-zinc-400">Hubungi langsung:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={personalInfo.phoneUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-emerald-400 transition-colors"
                    title="WhatsApp"
                  >
                    WA
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-cyan-400 transition-colors"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                    title="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
