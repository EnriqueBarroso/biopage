import Particles from './Particles'
import CustomCursor from './CustomCursor'
import Navbar from './Navbar'
import Hero from './Hero'
import Ticker from './Ticker'
import StatsBar from './StatsBar'
import Problema from './Problema'
import Planes from './Planes'
import Portfolio from './Portfolio'
import FAQ from './FAQ'
import CTAFinal from './CTAFinal'
import Footer from './Footer'
import { RegionProvider } from '../context/RegionContext'
import type { Region } from '../config/regions'

function Landing({ region }: { region: Region }) {
  return (
    <RegionProvider region={region}>
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

export default Landing
