import React from 'react'
import {
  Code,
  Sparkles,
  Zap,
  Users,
  GraduationCap,
  Briefcase,
  MapPin,
  CheckCircle2,
} from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const highlights = [
  {
    icon: Code,
    title: 'Clean & Type-Safe Code',
    description: 'Terbiasa menulis kode modular, rapi, dan terdokumentasi dengan TypeScript dan linting standar industri.',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Sparkles,
    title: 'Smooth UI & Motion',
    description: 'Mengintegrasikan Lenis smooth scrolling dan mikro-interaksi untuk impresi visual yang elegan dan berkelas.',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: Zap,
    title: 'Fast Learner & Adaptable',
    description: 'Selalu bersemangat mengeksplorasi teknologi baru, cepat beradaptasi dengan stack tim, dan rajin problem solving.',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    icon: Users,
    title: 'Collaborative Mindset',
    description: 'Siap bekerja dalam tim agile, aktif berdiskusi teknis, dan menghargai constructive feedback dari rekan & mentor.',
    gradient: 'from-emerald-500 to-teal-600',
  },
]

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs font-semibold text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kenali Saya Lebih Dekat</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tentang Saya & Visi Pengembangan Web
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Menggabungkan keilmuan akademis informatika dengan dedikasi praktik pembuatan software nyata.
          </p>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-7 rounded-2xl bg-zinc-900/60 border border-white/10 backdrop-blur-md space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Perjalanan & Passion di Bidang Rekayasa Web</span>
              </h3>
              {personalInfo.bioLong.map((paragraph, index) => (
                <p key={index} className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-2 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Jurusan</span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-zinc-200">Teknik Informatika</div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Status Magang</span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-emerald-400">Siap Ditempatkan</div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Lokasi</span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-zinc-200">Indonesia (Remote/WFO)</div>
                </div>
              </div>
            </div>

            {/* Why Hire for Internship banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-indigo-950/30 to-zinc-900/50 border border-cyan-800/40 space-y-3">
              <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Siap Menghasilkan Dampak Nyata di Tempat Magang</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Saya tidak hanya mencari nilai atau formalitas magang, namun berkomitmen menjadi kontributor aktif yang membantu tim mencapai target sprint, mengurai backlog, dan menulis kode yang bersih.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Core Competency Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="group p-5 rounded-2xl bg-zinc-900/50 hover:bg-zinc-900/80 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 flex items-start gap-4"
                >
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${item.gradient} p-0.5 shrink-0 shadow-md group-hover:scale-105 transition-transform duration-200`}
                  >
                    <div className="w-full h-full rounded-[10px] bg-[#0c0e15] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
