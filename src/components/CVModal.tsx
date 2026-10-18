import { useEffect } from 'react'
import { X, Printer, GraduationCap, Briefcase, Code2 } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'
import { useLenis } from '../context/LenisContext'

interface CVModalProps {
  isOpen: boolean
  onClose: () => void
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-zinc-950 border border-white/20 p-6 sm:p-8 shadow-2xl text-left space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Actions */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
              CV
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Ringkasan Resume / CV</h3>
              <p className="text-[11px] text-zinc-400">Siap untuk keperluan pendaftaran magang</p>
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

        {/* Resume Content View */}
        <div className="space-y-6 text-zinc-300 text-xs sm:text-sm">
          {/* Identity */}
          <div className="p-4 rounded-2xl bg-zinc-900/50 border border-white/5 space-y-1.5">
            <h4 className="text-xl font-bold text-white">{personalInfo.fullName}</h4>
            <div className="text-xs text-cyan-400 font-semibold">{personalInfo.headline}</div>
            <div className="text-xs text-zinc-400 flex flex-wrap gap-x-4 gap-y-1 pt-1">
              <span>Email: {personalInfo.email}</span>
              <span>•</span>
              <span>Lokasi: {personalInfo.location}</span>
              <span>•</span>
              <span>Ketersediaan: Terbuka untuk Magang</span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h5 className="text-xs uppercase tracking-wider font-bold text-zinc-400 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>Pendidikan Formal</span>
            </h5>
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 space-y-1">
              <div className="flex justify-between font-bold text-white">
                <span>S1 Teknologi Informasi — ITS Surabaya</span>
                <span className="text-xs font-mono text-cyan-400">2022 - Sekarang</span>
              </div>
              <p className="text-xs text-zinc-400">
                Fokus Studi: Rekayasa Web Modern, Cloud Computing, Keamanan Informasi, dan Sistem Terdistribusi.
              </p>
            </div>
          </div>

          {/* Core Technical Strengths */}
          <div className="space-y-2">
            <h5 className="text-xs uppercase tracking-wider font-bold text-zinc-400 flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-indigo-400" />
              <span>Keahlian Teknis Utama</span>
            </h5>
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 space-y-2">
              <div>
                <span className="font-semibold text-white">Frontend:</span> React, Next.js, TypeScript, Tailwind CSS, Lenis Smooth Scroll, HTML5/CSS3.
              </div>
              <div>
                <span className="font-semibold text-white">Backend & Database:</span> Node.js, Express, REST API, PostgreSQL, MySQL, Supabase.
              </div>
              <div>
                <span className="font-semibold text-white">Tools & Workflow:</span> Git/GitHub, Vite, Figma to Code, Postman, Linux basics.
              </div>
            </div>
          </div>

          {/* Experience Highlights */}
          <div className="space-y-2">
            <h5 className="text-xs uppercase tracking-wider font-bold text-zinc-400 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-emerald-400" />
              <span>Pengalaman Terpilih</span>
            </h5>
            <div className="space-y-2.5">
              <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-white/5 space-y-1">
                <div className="flex justify-between font-bold text-white text-xs">
                  <span>Asisten Lab Pemrograman Web</span>
                  <span className="font-mono text-zinc-400 text-[11px]">2024 - 2025</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Membimbing mahasiswa dalam proyek web berbasis JavaScript, HTML/CSS, dan pengenalan framework.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-white/5 space-y-1">
                <div className="flex justify-between font-bold text-white text-xs">
                  <span>Divisi IT & Website Organisasi Mahasiswa</span>
                  <span className="font-mono text-zinc-400 text-[11px]">2023 - 2024</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Mengembangkan antarmuka landing page event dan manajemen konten portal organisasi kampus.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-[11px] text-zinc-400">
            Dibuat untuk portofolio resmi Gemilang Ananda Lingua
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
