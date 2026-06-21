import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Particles from './Particles'
import CustomCursor from './CustomCursor'
import Navbar from './Navbar'
import Hero from './Hero'
import QueEsBiopage from './QueEsBiopage'
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
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const target = document.getElementById(hash.slice(1))
    target?.scrollIntoView({ behavior: 'smooth' })
  }, [hash])

  return (
    <RegionProvider region={region}>
      <div>
        <CustomCursor />
        <Particles />
        <Navbar />
        <Hero />
        <QueEsBiopage />
        <Ticker />
        <StatsBar />
        {region === 'ES' && <Problema />}
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
