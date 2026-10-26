import {
  GraduationCap,
  MapPin,
  Shield,
  Database,
  Brain,
  Users,
} from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const domains = [
  {
    icon: Shield,
    title: 'Cyber Security',
    description: 'Tertarik mendalami Web Exploitation, Kriptografi, dan Forensik Jaringan melalui kompetisi Capture The Flag.',
    tag: 'Eksplorasi',
  },
  {
    icon: Database,
    title: 'Data Science',
    description: 'Eksplorasi analisis data, pengelolaan database terstruktur, dan pemanfaatan Python & spreadsheets.',
    tag: 'Eksplorasi',
  },
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description: 'Ketertarikan pada dasar-dasar machine learning dan pemanfaatannya untuk otomasi pemecahan masalah.',
    tag: 'Eksplorasi',
  },
  {
    icon: Users,
    title: 'Kerja Tim & Koordinasi',
    description: 'Terbiasa berkolaborasi dan mengkoordinasi dalam kepanitiaan dan organisasi kampus di ITS untuk memastikan alur operasional berjalan rapi.',
    tag: 'Pengalaman',
  },
]

export function About() {
  return (
    <section id="about" className="py-16 relative">
      <div className="content-container">
        {/* Section Header */}
        <div className="text-left space-y-2 mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Tentang Saya
          </h2>
          <p className="text-zinc-400 text-sm">
            Sedikit cerita latar belakang, peminatan, dan aktivitas perkuliahan di ITS.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative & Education */}
          <div className="lg:col-span-7 space-y-5">
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-3.5 text-left">
              {personalInfo.bioLong.map((paragraph, index) => (
                <p key={index} className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-3 border-t border-white/10 flex flex-wrap gap-4 text-xs">
                <div className="flex items-center gap-1.5 text-zinc-300">
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Teknologi Informasi, FTEIC ITS</span>
                </div>
                <div className="flex items-center gap-1.5 text-zinc-300">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Surabaya, Indonesia</span>
                </div>
              </div>
            </div>

            {/* Education History */}
            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-white/5 space-y-3 text-left">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Pendidikan
              </h3>
              <div className="space-y-2.5">
                {personalInfo.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-black/40 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs"
                  >
                    <div>
                      <div className="font-semibold text-white">{edu.school}</div>
                      <div className="text-zinc-400 text-xs">{edu.degree}</div>
                    </div>
                    <div className="text-zinc-400 font-mono text-xs sm:text-right shrink-0">
                      <div>{edu.location}</div>
                      <div>{edu.period}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 4 Interest Domains */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-3 text-left">
            {domains.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-zinc-900/50 hover:bg-zinc-900/80 border border-white/5 transition-all flex items-start gap-3.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-xs sm:text-sm font-bold text-white">
                        {item.title}
                      </h4>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed pt-0.5">
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
