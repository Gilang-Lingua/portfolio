import {
  ArrowDown,
  Sparkles,
  Mail,
  FileText,
  Code2,
  Terminal,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { useLenis } from '../context/LenisContext'
import { personalInfo } from '../data/portfolioData'

interface HeroProps {
  onOpenCV: () => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  const { scrollTo } = useLenis()

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Background radial glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-600/15 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/4 w-[380px] h-[380px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[320px] h-[320px] bg-fuchsia-600/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Status Beacon */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 text-xs font-medium text-zinc-300 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-zinc-200">{personalInfo.status}</span>
              <span className="text-zinc-600">•</span>
              <span className="text-cyan-400 font-mono text-[11px]">Mahasiswa Teknologi Informasi ITS</span>
            </div>

            {/* Main Title */}
            <div className="space-y-3">
              <div className="text-sm font-semibold tracking-wider uppercase text-cyan-400/90 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Halo, Saya {personalInfo.name} 👋</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Membangun Pengalaman Web{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400">
                  Modern, Cepat,
                </span>{' '}
                & Interaktif.
              </h1>
            </div>

            {/* Bio Description */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl">
              {personalInfo.bioShort} Dilengkapi dengan{' '}
              <span className="text-cyan-300 font-medium underline underline-offset-4 decoration-cyan-500/50">
                Lenis Smooth Scroll
              </span>{' '}
              untuk pengalaman navigasi super mulus.
            </p>

            {/* Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('#projects', { offset: -70 })}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 active:scale-98"
              >
                <span>Lihat Proyek Saya</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>

              <button
                onClick={onOpenCV}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-white/10 font-semibold text-sm transition-all duration-200 active:scale-98"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Lihat CV / Resume</span>
              </button>

              <button
                onClick={() => scrollTo('#contact', { offset: -70 })}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/5 font-medium text-sm transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-zinc-400" />
                <span className="hidden sm:inline">Kontak</span>
              </button>
            </div>

            {/* Social Links & Quick Contact */}
            <div className="pt-4 flex items-center gap-4 text-zinc-400">
              <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                Hubungkan:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 text-zinc-300 hover:text-white hover:border-cyan-500/40 transition-all duration-200"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 text-zinc-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <button
                  onClick={() => scrollTo('#contact', { offset: -70 })}
                  className="p-2.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-200"
                  aria-label="Kirim Pesan"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Profile Card / Visual Element */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative outer glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/40 via-indigo-500/40 to-fuchsia-500/30 rounded-3xl blur-xl opacity-75 transition duration-500 group-hover:opacity-100" />

              {/* Glass Card Container */}
              <div className="relative rounded-2xl bg-zinc-950/90 border border-white/15 p-6 shadow-2xl backdrop-blur-xl space-y-6">
                {/* Header Mock Terminal bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-400 font-mono text-xs">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>gemilang-portfolio.tsx</span>
                  </div>
                  <div className="w-6"></div>
                </div>

                {/* Profile Avatar & Info Badge */}
                <div className="flex items-center gap-4">
                  <div className="relative group">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-fuchsia-500 p-[2px] shadow-lg shadow-cyan-500/30">
                      <div className="w-full h-full rounded-[14px] bg-[#0d0f17] flex items-center justify-center overflow-hidden">
                        {/* Custom Stylized Avatar Representation */}
                        <div className="relative flex flex-col items-center justify-center">
                          <Code2 className="w-9 h-9 text-cyan-400 animate-pulse" />
                          <span className="text-[10px] font-mono text-zinc-400 mt-0.5">DEV</span>
                        </div>
                      </div>
                    </div>
                    {/* Live Online Beacon */}
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-zinc-900 flex items-center justify-center border border-white/10">
                      <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
                    </span>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-white tracking-tight">{personalInfo.fullName}</h2>
                    <p className="text-xs text-zinc-400 flex items-center gap-1.5 mt-0.5">
                      <span>Teknologi Informasi — ITS Surabaya</span>
                    </p>
                    <div className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-md bg-cyan-950/70 border border-cyan-800/60 text-[11px] font-medium text-cyan-300">
                      <Sparkles className="w-3 h-3" />
                      <span>Ready to contribute</span>
                    </div>
                  </div>
                </div>

                {/* Interactive Code Snippet Mock */}
                <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-white/10 font-mono text-xs space-y-1.5 text-zinc-300">
                  <div className="text-zinc-400">// Karakteristik & Fokus</div>
                  <div className="flex gap-2">
                    <span className="text-fuchsia-400">const</span>
                    <span className="text-cyan-300">developer</span>
                    <span className="text-white">=</span>
                    <span className="text-amber-300">&#123;</span>
                  </div>
                  <div className="pl-4 text-zinc-300">
                    <span className="text-indigo-300">coreStack</span>: [<span className="text-emerald-300">'React'</span>, <span className="text-emerald-300">'TypeScript'</span>, <span className="text-emerald-300">'Node'</span>],
                  </div>
                  <div className="pl-4 text-zinc-300">
                    <span className="text-indigo-300">smoothScroll</span>: <span className="text-amber-400">true</span>, <span className="text-zinc-400">// Lenis</span>
                  </div>
                  <div className="pl-4 text-zinc-300">
                    <span className="text-indigo-300">readyForInternship</span>: <span className="text-cyan-400">true</span>
                  </div>
                  <div className="text-amber-300">&#125;;</div>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  {personalInfo.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-cyan-500/30 transition-colors"
                    >
                      <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-cyan-300">
                        {stat.value}
                      </div>
                      <div className="text-[11px] text-zinc-400 mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
