import { useState } from 'react'
import { AuroraBackground } from './components/common/AuroraBackground'
import { Header } from './components/layout/Header'
import { Hero } from './components/sections/Hero'
import { WhySection } from './components/sections/WhySection'
import { ConceptSection } from './components/sections/ConceptSection'
import { FeaturesSection } from './components/sections/FeaturesSection'
import { ProcessSection } from './components/sections/ProcessSection'
import { CompareSection } from './components/sections/CompareSection'
import { KakaSection } from './components/sections/KakaSection'
import { FoundersSection } from './components/sections/FoundersSection'
import { ContactSection } from './components/sections/ContactSection'
import { DownloadModal } from './components/DownloadModal'
import { usePageSnap } from './hooks/usePageSnap'

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  usePageSnap()

  return (
    <>
      <AuroraBackground />
      <Header onDownloadClick={() => setModalOpen(true)} />
      <main>
        <Hero onDownloadClick={() => setModalOpen(true)} />
        <WhySection />
        <ConceptSection />
        <FeaturesSection />
        <ProcessSection />
        <CompareSection />
        <KakaSection />
        <FoundersSection />
        <ContactSection />
      </main>
      <DownloadModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}

export default App
