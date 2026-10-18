import { useEffect } from 'react'
import {
  X,
  Printer,
  GraduationCap,
  Briefcase,
  Users,
  Trophy,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
} from 'lucide-react'
import { personalInfo, experienceData, achievementsData } from '../data/portfolioData'
import { useLenis } from '../context/LenisContext'
import { LinkedinIcon } from './Icons'

interface CVModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CVModal({ isOpen, onClose }: CVModalProps) {
  const { lenis } = useLenis()

  useEffect(() => {
    if (isOpen && lenis) {
      lenis.stop()
    }
    return () => {
      if (lenis) {
        lenis.start()
      }
    }
  }, [isOpen, lenis])

  if (!isOpen) return null

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl bg-zinc-950 border border-white/20 p-6 sm:p-8 shadow-2xl text-left space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Actions */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs">
              CV
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Curriculum Vitae</h3>
              <p className="text-[11px] text-zinc-400">Gemilang Ananda Lingua • ITS Surabaya</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 text-xs flex items-center gap-1.5 transition-colors"
              title="Cetak / Simpan PDF"
            >
              <Printer className="w-4 h-4 text-cyan-400" />
              <span className="hidden sm:inline">Cetak PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/10 transition-colors"
              aria-label="Tutup Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Identity & Contact Bar */}
        <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-3">
          <div>
            <h4 className="text-2xl font-extrabold text-white tracking-tight uppercase">
              {personalInfo.fullName}
            </h4>
            <div className="text-xs text-cyan-400 font-semibold mt-0.5">
              {personalInfo.headline}
            </div>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-zinc-300 pt-1 font-mono">
            <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-1.5 hover:text-cyan-300">
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>{personalInfo.phone}</span>
            </a>
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 hover:text-cyan-300">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>{personalInfo.email}</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan-300"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>linkedin.com/in/gemilang-lingua</span>
            </a>
            <div className="flex items-center gap-1.5 text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          <p className="text-xs text-zinc-300 leading-relaxed pt-2 border-t border-white/5">
            {personalInfo.bioShort}
          </p>
        </div>

        {/* Education Section */}
        <div className="space-y-3">
          <h5 className="text-xs uppercase tracking-wider font-bold text-zinc-400 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>Education</span>
          </h5>
          <div className="space-y-2">
            {personalInfo.education.map((edu, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-zinc-900/40 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                <div>
                  <div className="font-bold text-white text-sm">{edu.school}</div>
                  <div className="text-cyan-300 font-medium">{edu.degree}</div>
                </div>
                <div className="text-zinc-400 font-mono text-[11px] sm:text-right shrink-0">
                  <div>{edu.location}</div>
                  <div>{edu.period}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Committee Experience */}
        <div className="space-y-3">
          <h5 className="text-xs uppercase tracking-wider font-bold text-zinc-400 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-cyan-400" />
            <span>Committee Experience (Kepanitiaan)</span>
          </h5>
          <div className="space-y-3">
            {experienceData
              .filter((e) => e.type === 'Kepanitiaan')
              .map((item) => (
                <div key={item.id} className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <div className="font-bold text-white text-sm">{item.organization}</div>
                      <div className="text-xs text-cyan-300 font-medium">{item.role}</div>
                    </div>
                    <div className="text-[11px] font-mono text-zinc-400 sm:text-right shrink-0">
                      <div>{item.period}</div>
                      <div>{item.location}</div>
                    </div>
                  </div>

                  {item.bullets && (
                    <div className="space-y-1 pl-1">
                      {item.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>

        {/* Organizational Experience */}
        <div className="space-y-3">
          <h5 className="text-xs uppercase tracking-wider font-bold text-zinc-400 flex items-center gap-2">
            <Users className="w-4 h-4 text-violet-400" />
            <span>Organizational Experience</span>
          </h5>
          <div className="space-y-3">
            {experienceData
              .filter((e) => e.type === 'Organisasi')
              .map((item) => (
                <div key={item.id} className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <div className="font-bold text-white text-sm">{item.organization}</div>
                      <div className="text-xs text-violet-300 font-medium">{item.role}</div>
                    </div>
                    <div className="text-[11px] font-mono text-zinc-400 sm:text-right shrink-0">
                      <div>{item.period}</div>
                      <div>{item.location}</div>
                    </div>
                  </div>

                  {item.bullets && (
                    <div className="space-y-1 pl-1">
                      {item.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>

        {/* Achievements & Certifications */}
        <div className="space-y-3">
          <h5 className="text-xs uppercase tracking-wider font-bold text-zinc-400 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>Achievements & Certifications</span>
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {achievementsData.map((ach) => (
              <div key={ach.id} className="p-3.5 rounded-xl bg-zinc-900/40 border border-white/5 space-y-1">
                <div className="flex justify-between items-start gap-2">
                  <span className="font-bold text-white text-xs">{ach.title}</span>
                  <span className="text-[10px] font-mono text-amber-400 shrink-0">{ach.year}</span>
                </div>
                <div className="text-[11px] text-zinc-400">{ach.issuer}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-[11px] text-zinc-400">
            Resmi dari CV Gemilang Ananda Lingua
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-white transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  )
}
