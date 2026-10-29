import { useState } from 'react'
import { Mail, Copy, Check, Phone, MapPin } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'
import { LinkedinIcon, GithubIcon } from './Icons'
import { useReveal } from '../hooks/useGsap'

export function Contact() {
  const [copied, setCopied] = useState(false)
  const revealRef = useReveal({
    childSelector: '[data-gsap="reveal"]',
    y: 18,
  })

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section ref={revealRef} id="contact" className="py-16 relative">
      <div className="content-container">
        {/* Section Header */}
        <div data-gsap="reveal" className="text-left space-y-2 mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Kontak
          </h2>
          <p className="text-zinc-400 text-sm">
            Berikut informasi kontak dan tautan profil saya.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Email Card */}
          <div data-gsap="reveal" className="p-5 rounded-2xl bg-zinc-900/80 border border-white/10 space-y-3 col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Email</span>
            </div>
            <div className="p-3 rounded-xl bg-zinc-900/80 border border-white/5 flex items-center justify-between gap-3 text-xs text-cyan-300 font-mono">
              <span className="truncate">{personalInfo.email}</span>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors shrink-0"
                title="Salin Email"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
            {copied && (
              <p className="text-xs text-emerald-400">Email berhasil disalin ✓</p>
            )}
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              Kirim Email
            </a>
          </div>

          {/* WhatsApp Card */}
          <a
            data-gsap="reveal"
            href={personalInfo.phoneUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-zinc-900/80 border border-white/10 hover:border-emerald-500/40 hover:bg-zinc-900/80 transition-all group space-y-3"
          >
            <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </div>
            <p className="text-white font-semibold text-sm font-mono">{personalInfo.phone}</p>
            <span className="inline-block text-xs text-emerald-400 group-hover:underline">
              Buka WhatsApp →
            </span>
          </a>

          {/* LinkedIn Card */}
          <a
            data-gsap="reveal"
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-zinc-900/80 border border-white/10 hover:border-cyan-500/40 hover:bg-zinc-900/80 transition-all group space-y-3"
          >
            <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
              <LinkedinIcon className="w-4 h-4 text-cyan-400" />
              <span>LinkedIn</span>
            </div>
            <p className="text-white font-semibold text-sm">gemilang-lingua</p>
            <span className="inline-block text-xs text-cyan-400 group-hover:underline">
              Lihat Profil →
            </span>
          </a>

          {/* GitHub Card */}
          <a
            data-gsap="reveal"
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-zinc-900/80 border border-white/10 hover:border-white/30 hover:bg-zinc-900/80 transition-all group space-y-3"
          >
            <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
              <GithubIcon className="w-4 h-4 text-zinc-300" />
              <span>GitHub</span>
            </div>
            <p className="text-white font-semibold text-sm">Gilang-Lingua</p>
            <span className="inline-block text-xs text-zinc-400 group-hover:underline group-hover:text-white">
              Lihat Profil GitHub →
            </span>
          </a>

          {/* Location Pill */}
          <div data-gsap="reveal" className="p-5 rounded-2xl bg-zinc-900/80 border border-white/5 space-y-3">
            <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>Lokasi</span>
            </div>
            <p className="text-white font-semibold text-sm">Surabaya, Indonesia</p>
            <p className="text-xs text-zinc-400">Departemen Teknologi Informasi — ITS</p>
          </div>
        </div>
      </div>
    </section>
  )
}
