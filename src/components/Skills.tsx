import { skillGroups } from '../data/portfolioData'

export function Skills() {
  return (
    <section id="skills" className="py-16 relative bg-zinc-950/40">
      <div className="content-container">
        {/* Section Header */}
        <div className="text-left space-y-2 mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Minat & Keahlian Teknis
          </h2>
          <p className="text-zinc-400 text-sm">
            Teknologi, lingkungan kerja, dan kemampuan yang sedang dipelajari serta aktif digunakan.
          </p>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5 hover:border-white/10 transition-colors space-y-3"
            >
              <div>
                <h3 className="text-base font-bold text-white">{group.category}</h3>
                <p className="text-xs text-zinc-400 mt-0.5">{group.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {group.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="text-xs px-3 py-1.5 rounded-lg bg-black/40 border border-white/5 text-zinc-300 font-mono"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
