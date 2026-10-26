import { useState } from 'react'
import { LenisProvider } from './context/LenisContext'
import { ScrollProgress } from './components/ScrollProgress'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Achievements } from './components/Achievements'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { FloatingActions } from './components/FloatingActions'
import { CVModal } from './components/CVModal'
import { InteractiveBackground } from './components/InteractiveBackground'

export function App() {
  const [isCVOpen, setIsCVOpen] = useState(false)

  return (
    <LenisProvider>
      <div className="relative min-h-screen bg-[#090a0f] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/25 selection:text-cyan-200">
        {/* Interactive Cursor-Revealed Background Grid */}
        <InteractiveBackground />

        {/* Top Scroll Indicator */}
        <ScrollProgress />

        {/* Global Navigation Bar */}
        <Navbar />

        {/* Main Sections */}
        <main className="relative z-10 flex-1">
          <Hero onOpenCV={() => setIsCVOpen(true)} />
          <About />
          <Skills />
          <Experience />
          <Achievements />
          <Projects />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Quick Navigation */}
        <FloatingActions />

        {/* Resume Modal */}
        <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
      </div>
    </LenisProvider>
  )
}

export default App
