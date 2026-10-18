import { Calendar, MapPin, Briefcase, GraduationCap, Users, History } from 'lucide-react'
import { experienceData } from '../data/portfolioData'

const typeIcons: Record<string, React.ElementType> = {
  Magang: Briefcase,
  Pendidikan: GraduationCap,
  Organisasi: Users,
}

const typeStyles: Record<string, { bg: string; text: string; border: string }> = {
  Magang: {
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    border: 'border-emerald-500/30',
  },
  Pendidikan: {
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
    border: 'border-cyan-500/30',
  },
  Organisasi: {
    bg: 'bg-violet-500/10',
    text: 'text-violet-400',
    border: 'border-violet-500/30',
  },
}

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-zinc-950/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs font-semibold text-cyan-400">
            <History className="w-3.5 h-3.5" />
            <span>Rekam Jejak</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pengalaman & Aktivitas Kampus
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Perjalanan belajar, kepemimpinan organisasi mahasiswa, dan kontribusi teknis.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-8">
          {experienceData.map((item) => {
            const Icon = typeIcons[item.type] || Briefcase
            const badgeStyle = typeStyles[item.type] || typeStyles.Magang

            return (
              <div key={item.id} className="relative group">
                {/* Timeline Node Point */}
                <div className="absolute -left-[37px] sm:-left-[45px] top-1.5 w-8 h-8 rounded-full bg-[#090a0f] border border-white/20 flex items-center justify-center group-hover:border-cyan-400 transition-colors shadow-md">
                  <Icon className="w-3.5 h-3.5 text-cyan-400" />
                </div>

                {/* Experience Card */}
                <div className="p-6 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900/90 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <span
                        className={`inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full border mb-1.5 ${badgeStyle.bg} ${badgeStyle.text} ${badgeStyle.border}`}
                      >
                        {item.type}
                      </span>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.role}
                      </h3>
                      <div className="text-sm font-semibold text-zinc-300 mt-0.5">
                        {item.organization}
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs text-zinc-400 space-y-1">
                      <div className="flex items-center gap-1.5 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-zinc-400">
                        <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-1">
                    {item.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] px-2.5 py-0.5 rounded-lg bg-black/40 border border-white/5 text-zinc-400 font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
