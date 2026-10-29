import { Trophy, Scroll, CheckCircle } from 'lucide-react'
import { competitionsData, certificationsData } from '../data/portfolioData'
import { useReveal } from '../hooks/useGsap'

export function Achievements() {
  const revealRef = useReveal({
    childSelector: '[data-gsap="reveal"]',
    y: 18,
  })

  const finalists = competitionsData.filter((c) => c.status === 'Finalist')
  const participants = competitionsData.filter((c) => c.status === 'Participant')

  return (
    <section ref={revealRef} id="achievements" className="relative py-2">
      <div className="content-container">
        {/* Section Header */}
        <div data-gsap="reveal" className="mb-3 space-y-1 text-left">
          <h2 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
            Pencapaian & Sertifikasi
          </h2>
          <p className="text-[10px] text-zinc-400 sm:text-xs">
            Catatan keikutsertaan kompetisi keamanan siber serta pelatihan kepemimpinan resmi.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-3 text-left lg:grid-cols-12">
          {/* Left Column: Pencapaian Kompetisi (CTF) */}
          <div className="space-y-2 lg:col-span-7">
            <div className="flex items-center gap-2 border-b border-white/10 pb-1 text-sm font-bold text-white">
              <Trophy className="h-3.5 w-3.5 text-amber-400" />
              <span>Pencapaian Kompetisi (Capture The Flag)</span>
            </div>

            {/* Finalist Group */}
            <div className="space-y-1">
              <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-amber-400/90">
                ★ Finalis
              </div>
              {finalists.map((item) => (
                <div
                  key={item.id}
                  data-gsap="reveal"
                  className="flex items-start justify-between gap-2 rounded-lg border border-amber-500/30 bg-zinc-900/80 p-2"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="rounded border border-amber-500/40 bg-amber-500/20 px-1.5 py-0.5 text-[9px] font-bold text-amber-300">
                        Finalist
                      </span>
                      <h4 className="text-[10px] font-bold text-white">{item.title}</h4>
                    </div>
                    <div className="text-[10px] text-zinc-300">{item.event}</div>
                  </div>
                  <span className="shrink-0 text-[10px] font-mono font-semibold text-amber-400">
                    {item.year}
                  </span>
                </div>
              ))}
            </div>

            {/* Participants Group */}
            <div className="space-y-1 pt-1">
              <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-zinc-400">
                Peserta Kompetisi
              </div>
              <div className="space-y-1">
                {participants.map((item) => (
                  <div
                    key={item.id}
                    data-gsap="reveal"
                    className="flex items-center justify-between gap-2 rounded-lg border border-white/5 bg-zinc-900/80 p-2 transition-colors hover:border-white/15"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 shrink-0 text-cyan-400" />
                      <div>
                        <div className="text-[10px] font-semibold text-white">{item.title}</div>
                        <div className="text-[10px] text-zinc-400">{item.event}</div>
                      </div>
                    </div>
                    <span className="shrink-0 text-[10px] font-mono text-zinc-400">
                      {item.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sertifikasi & Pelatihan */}
          <div className="space-y-2 lg:col-span-5">
            <div className="flex items-center gap-2 border-b border-white/10 pb-1 text-sm font-bold text-white">
              <Scroll className="h-3.5 w-3.5 text-cyan-400" />
              <span>Sertifikasi & Pelatihan</span>
            </div>

            <div className="space-y-1">
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  data-gsap="reveal"
                  className="space-y-0.5 rounded-lg border border-white/5 bg-zinc-900/80 p-2 transition-colors hover:border-white/15"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-[10px] font-semibold leading-snug text-white sm:text-xs">
                      {cert.title}
                    </h4>
                    <span className="shrink-0 text-[10px] font-mono text-cyan-400">
                      {cert.year}
                    </span>
                  </div>
                  <div className="text-[10px] leading-tight text-zinc-400">{cert.issuer}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
