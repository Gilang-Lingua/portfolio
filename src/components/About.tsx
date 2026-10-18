import {
  GraduationCap,
  Briefcase,
  MapPin,
  CheckCircle2,
  Shield,
  Database,
  Brain,
  Users,
  Award,
} from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const domains = [
  {
    icon: Shield,
    title: 'Cyber Security',
    subtitle: 'CTF & Network Security',
    description: 'Fokus pada Web Exploitation, Kriptografi, dan Forensik Jaringan. Finalis Capture The Flag (CTF) Interfest Telkom University.',
    gradient: 'from-rose-500 to-red-600',
  },
  {
    icon: Database,
    title: 'Data Science',
    subtitle: 'Data Analytics & Databases',
    description: 'Pengolahan dan manajemen data dalam skala ratusan peserta, analisis berbasis Python, dan pemeliharaan struktur database akurat.',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    subtitle: 'Machine Learning & Models',
    description: 'Eksplorasi model kecerdasan buatan untuk automasi proses, klasifikasi data, dan pemecahan tantangan komputasi nyata.',
    gradient: 'from-fuchsia-500 to-purple-600',
  },
  {
    icon: Users,
    title: 'Team Coordination & Leadership',
    subtitle: 'Cross-Functional Management',
    description: 'Berpengalaman mengoordinasikan tim lintas fungsi, mensupervisi alur kerja staf, dan mengontrol eksekusi live event kepanitiaan besar.',
    gradient: 'from-emerald-500 to-teal-600',
  },
]

export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs font-semibold text-cyan-400">
            <Award className="w-3.5 h-3.5" />
            <span>Profil & Peminatan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tentang Gemilang Ananda Lingua
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Mengombinasikan wawasan teknis keamanan siber, data science, dan koordinasi kepemimpinan adaptif.
          </p>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Personal Narrative & Education */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-7 rounded-2xl bg-zinc-900/60 border border-white/10 backdrop-blur-md space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Dedikasi & Orientasi Karir</span>
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
                    <span>Perguruan Tinggi</span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-zinc-200">Teknologi Informasi, ITS</div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Status Peluang</span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-emerald-400">Open for Internship</div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Domisili</span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-zinc-200">Surabaya (Hybrid/Remote)</div>
                </div>
              </div>
            </div>

            {/* Education History Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/10 space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>Riwayat Pendidikan Resmi</span>
              </h4>
              <div className="space-y-3 pt-1">
                {personalInfo.education.map((edu, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="text-sm font-bold text-white">{edu.school}</div>
                      <div className="text-xs text-cyan-300 font-medium">{edu.degree}</div>
                      <div className="text-[11px] text-zinc-400 mt-0.5">{edu.highlight}</div>
                    </div>
                    <div className="text-xs font-mono text-zinc-400 sm:text-right shrink-0">
                      <div>{edu.location}</div>
                      <div className="text-zinc-400 text-[11px]">{edu.period}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Commitment Highlight */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-indigo-950/30 to-zinc-900/50 border border-cyan-800/40 space-y-3">
              <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Kesiapan Kontribusi Teknis & Kolaborasi Tim</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Berbekal keahlian koordinasi kepanitiaan berskala ratusan peserta serta ketertarikan mendalam pada keamanan siber dan data, saya siap berkontribusi secara nyata dalam dinamika tim teknologi.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Interest Domains */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {domains.map((item, index) => {
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
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <div className="text-[11px] font-mono text-cyan-400/90">{item.subtitle}</div>
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
