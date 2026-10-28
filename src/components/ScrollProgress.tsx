import { useLenis } from '../context/LenisContext'

export function ScrollProgress() {
  const { scrollProgress } = useLenis()

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 transition-all duration-75 ease-out shadow-[0_0_12px_rgba(56,189,248,0.7)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}
