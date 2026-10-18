import { useState } from 'react'
import { LenisProvider } from './context/LenisContext'
import { ScrollProgress } from './components/ScrollProgress'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { FloatingActions } from './components/FloatingActions'
import { CVModal } from './components/CVModal'

export function App() {
  const [isCVOpen, setIsCVOpen] = useState(false)

  return (
    <LenisProvider>
      <div className="relative min-h-screen bg-[#090a0f] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/25 selection:text-cyan-200">
        {/* Top Scroll Indicator */}
        <ScrollProgress />

        {/* Global Navigation Bar */}
        <Navbar />

        {/* Main Sections */}
        <main className="flex-1">
          <Hero onOpenCV={() => setIsCVOpen(true)} />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Quick Navigation & Progress */}
        <FloatingActions />

        {/* Resume Modal */}
        <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
      </div>
    </LenisProvider>
  )
}

export default App
