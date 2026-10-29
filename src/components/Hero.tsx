import { lazy, Suspense, useState, useEffect } from 'react'
import {
  Mail,
  GraduationCap,
  ArrowDown,
} from 'lucide-react'
import { personalInfo } from '../data/portfolioData'
import { useLenis } from '../context/LenisContext'

const TYPING_WORDS = ['Gemilang Ananda Lingua', 'Gilang']
const Lanyard = lazy(() => import('./Lanyard'))

export function Hero() {
  const { scrollTo } = useLenis()
  const [wordIndex, setWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState(TYPING_WORDS[0])
  const [isDeleting, setIsDeleting] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)')
    const updateViewport = () => setIsDesktop(mediaQuery.matches)
    updateViewport()
    mediaQuery.addEventListener('change', updateViewport)
    return () => mediaQuery.removeEventListener('change', updateViewport)
  }, [])

  useEffect(() => {
    const currentWord = TYPING_WORDS[wordIndex]
    let timer: ReturnType<typeof setTimeout>

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1))
        }, 95)
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true)
        }, 2000)
      }
    } else if (displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length - 1))
      }, 55)
    } else {
      timer = setTimeout(() => {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % TYPING_WORDS.length)
      }, 300)
    }

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, wordIndex])

  return (
    <section
      id="hero"
      className="relative min-h-[82vh] flex items-center justify-center pb-16 pt-0 lg:pt-28"
    >
      {/* Subtle ambient background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none -z-10"
      />

      {isDesktop && (
        <div
          role="img"
          aria-label={`Kartu identitas ${personalInfo.fullName} tergantung dari atas halaman. Seret kartu ke mana saja di layar atau klik untuk membalik.`}
          className="absolute inset-x-0 top-0 z-[5] h-screen pointer-events-none"
        >
          <Suspense fallback={null}>
            <Lanyard
              frontImage="/lanyard-front.png"
              backImage="/lanyard-back.png"
              strapImage="/lanyard-strap.png"
              cardColor="#ffffff"
              strapColor="#090b10"
              finish="glossy"
              metal="silver"
              anchor="right"
              strapWidth={0.75}
              size={0.48}
              strapLength={0.3}
              breeze={0}
              damping={0.65}
            />
          </Suspense>
        </div>
      )}

      <div className="content-container relative z-10 w-full">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Mobile Lanyard */}
          {!isDesktop && (
            <div className="flex justify-center lg:hidden">
              <div className="h-[min(72vh,620px)] w-full max-w-[480px]">
                <Suspense fallback={<div className="h-full w-full rounded-3xl bg-gradient-to-br from-white/5 to-transparent" aria-hidden="true" />}>
                  <Lanyard
                    frontImage="/lanyard-front.png"
                    backImage="/lanyard-back.png"
                    strapImage="/lanyard-strap.png"
                    cardColor="#ffffff"
                    strapColor="#090b10"
                    finish="glossy"
                    metal="silver"
                    strapWidth={0.75}
                    size={0.68}
                    strapLength={0.62}
                    breeze={0}
                    damping={0.65}
                  />
                </Suspense>
              </div>
            </div>
          )}

          {/* Left Column: Introduction */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs text-zinc-300">
              <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
              <span>Teknologi Informasi • Institut Teknologi Sepuluh Nopember (ITS)</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight min-h-[2.4em] sm:min-h-[1.9em] lg:min-h-[1.3em]">
                Halo, saya{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
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
                onClick={() => scrollTo('#contact', { offset: -70 })}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/5 text-xs transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
                <span>Kontak</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
