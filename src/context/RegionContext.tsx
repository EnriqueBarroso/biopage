import { createContext, useContext, useState, type ReactNode } from 'react'

export type Region = 'ES' | 'CU'

type RegionContextValue = {
  region: Region
  setRegion: (region: Region) => void
}

const RegionContext = createContext<RegionContextValue | null>(null)

export function RegionProvider({ children }: { children: ReactNode }) {
  const [region, setRegion] = useState<Region>('ES')
  return (
    <RegionContext.Provider value={{ region, setRegion }}>{children}</RegionContext.Provider>
  )
}

export function useRegion() {
  const context = useContext(RegionContext)
  if (!context) {
    throw new Error('useRegion must be used within a RegionProvider')
  }
  return context
}
