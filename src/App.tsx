import Particles from './components/Particles'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import StatsBar from './components/StatsBar'
import Problema from './components/Problema'
import Planes from './components/Planes'
import Portfolio from './components/Portfolio'
import FAQ from './components/FAQ'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'
import { RegionProvider } from './context/RegionContext'

function App() {
  return (
    <RegionProvider>
      <div>
        <CustomCursor />
        <Particles />
        <Navbar />
        <Hero />
        <Ticker />
        <StatsBar />
        <Problema />
        <Planes />
        <Portfolio />
        <FAQ />
        <CTAFinal />
        <Footer />
      </div>
    </RegionProvider>
  )
}

export default App
