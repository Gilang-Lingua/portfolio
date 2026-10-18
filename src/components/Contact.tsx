import { useState } from 'react'
import {
  Mail,
  Copy,
  Check,
  Send,
  MessageSquare,
  MapPin,
  Clock,
  CheckCircle2,
} from 'lucide-react'
import confetti from 'canvas-confetti'
import { personalInfo } from '../data/portfolioData'
import type { ContactFormData } from '../types'
import { LinkedinIcon } from './Icons'

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)

    // Fire festive celebratory confetti
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#38bdf8', '#818cf8', '#c084fc', '#34d399'],
    })

    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setLoading(true)

    // Simulate transmission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#38bdf8', '#34d399', '#f43f5e'],
      })

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    }, 600)
  }

  return (
    <section id="contact" className="py-20 relative">
      {/* Background soft glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-xs font-semibold text-emerald-400">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Mulai Terhubung</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hubungi Saya & Diskusikan Peluang Magang
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Punya lowongan magang, proyek menarik, atau sekadar ingin berdiskusi teknis seputar web development? Silakan hubungi saya!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards & Quick Copy */}
          <div className="lg:col-span-5 space-y-5">
            {/* Quick Email Copy Card */}
            <div className="p-6 rounded-3xl bg-zinc-900/70 border border-white/10 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-mono text-zinc-400">Email Utama</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  Respon &lt; 24 Jam
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-black/50 border border-white/5 flex items-center justify-between gap-3 font-mono text-xs text-cyan-300 overflow-x-auto">
                <span className="truncate">{personalInfo.email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors shrink-0"
                  title="Salin ke Clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {copied && (
                <div className="text-xs text-emerald-400 flex items-center gap-1.5 animate-fadeIn">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Email berhasil disalin ke clipboard!</span>
                </div>
              )}

              <a
                href={`mailto:${personalInfo.email}?subject=Tawaran%20Magang%20Web%20Developer`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs shadow-md transition-all active:scale-98"
              >
                <Mail className="w-4 h-4" />
                <span>Kirim Email Langsung (Mailto)</span>
              </a>
            </div>

            {/* Quick Status and Location */}
            <div className="p-6 rounded-3xl bg-zinc-900/50 border border-white/5 space-y-3 text-xs sm:text-sm text-zinc-300">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <div className="text-zinc-400 text-xs">Lokasi & Kampus</div>
                  <div className="font-semibold text-white">Surabaya, Indonesia (ITS)</div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-zinc-400 text-xs">Ketersediaan Waktu</div>
                  <div className="font-semibold text-emerald-400">Open for Internship & Projects</div>
                </div>
              </div>
            </div>

            {/* Social Cards */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={personalInfo.phoneUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-zinc-900/60 hover:bg-zinc-800/80 border border-white/10 hover:border-emerald-500/40 flex items-center gap-3 transition-colors"
              >
                <div className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px] shrink-0">
                  WA
                </div>
                <div>
                  <div className="text-xs font-bold text-white">WhatsApp</div>
                  <div className="text-[10px] text-zinc-400">{personalInfo.phone}</div>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-zinc-900/60 hover:bg-zinc-800/80 border border-white/10 hover:border-cyan-500/40 flex items-center gap-3 transition-colors"
              >
                <LinkedinIcon className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-xs font-bold text-white">LinkedIn</div>
                  <div className="text-[10px] text-zinc-400">gemilang-lingua</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-3xl bg-zinc-900/70 border border-white/10 shadow-2xl backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-2">Tinggalkan Pesan</h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                Isi form berikut dan saya akan membalas pesan Anda sesegera mungkin.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">Terima Kasih atas Pesan Anda!</h4>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Pesan Anda telah berhasil disimpan dalam simulasi form kontak ini. Anda juga dapat menghubungi langsung via email ke{' '}
                    <span className="text-emerald-400 font-mono">{personalInfo.email}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-bold text-cyan-400 hover:underline"
                  >
                    Kirim Pesan Lainnya
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-300">Nama Lengkap *</label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: HR / Tech Recruiter"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-500 focus:outline-none text-white text-xs sm:text-sm placeholder:text-zinc-600 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-300">Alamat Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="nama@perusahaan.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-500 focus:outline-none text-white text-xs sm:text-sm placeholder:text-zinc-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-300">Subjek / Perusahaan</label>
                    <input
                      type="text"
                      placeholder="Contoh: Tawaran Magang Web Developer di PT..."
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-500 focus:outline-none text-white text-xs sm:text-sm placeholder:text-zinc-600 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-300">Pesan Anda *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tuliskan pesan, rincian kualifikasi magang, atau pertanyaan Anda..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-500 focus:outline-none text-white text-xs sm:text-sm placeholder:text-zinc-600 resize-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-fuchsia-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-cyan-500/25 transition-all disabled:opacity-50 active:scale-98"
                  >
                    {loading ? (
                      <span>Mengirimkan Pesan...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Kirim Pesan Sekarang</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
