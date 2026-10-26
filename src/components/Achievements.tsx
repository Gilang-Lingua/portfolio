import { Trophy, Scroll, CheckCircle } from 'lucide-react'
import { competitionsData, certificationsData } from '../data/portfolioData'

export function Achievements() {
  const finalists = competitionsData.filter((c) => c.status === 'Finalist')
  const participants = competitionsData.filter((c) => c.status === 'Participant')

  return (
    <section id="achievements" className="py-16 relative bg-zinc-950/40">
      <div className="content-container">
        {/* Section Header */}
        <div className="text-left space-y-2 mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Pencapaian & Sertifikasi
          </h2>
          <p className="text-zinc-400 text-sm">
            Catatan keikutsertaan kompetisi keamanan siber serta pelatihan kepemimpinan resmi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-start">
          {/* Left Column: Pencapaian Kompetisi (CTF) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-base pb-1 border-b border-white/10">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>Pencapaian Kompetisi (Capture The Flag)</span>
            </div>

            {/* Finalist Group */}
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-amber-400/90 font-semibold">
                ★ Finalis
              </div>
              {finalists.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl bg-gradient-to-r from-amber-950/20 to-zinc-900/60 border border-amber-500/30 flex items-start justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                        Finalist
                      </span>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    </div>
                    <div className="text-xs text-zinc-300">{item.event}</div>
                  </div>
                  <span className="text-xs font-mono text-amber-400 shrink-0 font-semibold">
                    {item.year}
                  </span>
                </div>
              ))}
            </div>

            {/* Participants Group */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                Peserta Kompetisi
              </div>
              <div className="space-y-2">
                {participants.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-white/15 flex items-center justify-between gap-3 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                      <div>
                        <div className="text-xs font-semibold text-white">{item.title}</div>
                        <div className="text-xs text-zinc-400">{item.event}</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-zinc-400 shrink-0">
                      {item.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sertifikasi & Pelatihan */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-base pb-1 border-b border-white/10">
              <Scroll className="w-4 h-4 text-cyan-400" />
              <span>Sertifikasi & Pelatihan</span>
            </div>

            <div className="space-y-2.5">
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  className="p-4 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-white/15 transition-colors space-y-1"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-xs sm:text-sm font-semibold text-white leading-snug">
                      {cert.title}
                    </h4>
                    <span className="text-xs font-mono text-cyan-400 shrink-0">
                      {cert.year}
                    </span>
                  </div>
                  <div className="text-xs text-zinc-400">{cert.issuer}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
