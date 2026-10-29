import {
  BrainCircuit,
  Code2,
  Database,
  Globe2,
  Settings2,
  ShieldCheck,
  Smartphone,
  UsersRound,
  Wrench,
} from 'lucide-react'
import { skillGroups } from '../data/portfolioData'
import { useReveal } from '../hooks/useGsap'

const skillIcons = [
  Code2,
  Globe2,
  Smartphone,
  ShieldCheck,
  BrainCircuit,
  Database,
  Wrench,
  Settings2,
  UsersRound,
]

export function Skills() {
  const revealRef = useReveal({
    childSelector: '[data-gsap="reveal"]',
    y: 18,
  })

  return (
    <section ref={revealRef} id="skills" className="relative py-2">
      <div className="content-container">
        {/* Section Header */}
        <div data-gsap="reveal" className="text-left space-y-1 mb-3">
          <h2 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
            Minat & Keahlian Teknis
          </h2>
          <p className="text-[10px] text-zinc-400 sm:text-xs">
            Teknologi, lingkungan kerja, dan kemampuan yang sedang dipelajari serta aktif digunakan.
          </p>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 gap-2.5 text-left sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, idx) => {
            const Icon = skillIcons[idx] ?? Code2

            return (
              <div
                key={group.category}
                data-gsap="reveal"
                className="flex h-full min-h-36 flex-col rounded-xl border border-white/10 bg-zinc-900/70 p-3 transition-colors hover:border-white/20 sm:p-3.5"
              >
                <div className="flex items-start gap-2">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/5 text-cyan-300">
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-xs font-bold leading-tight text-white">{group.category}</h3>
                    <p className="mt-1 text-[10px] leading-snug text-zinc-400">{group.description}</p>
                  </div>
                </div>

                <div className="my-2.5 border-t border-white/10" />

                <div className="mt-auto flex flex-wrap gap-1">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[9px] leading-tight text-zinc-300 font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
