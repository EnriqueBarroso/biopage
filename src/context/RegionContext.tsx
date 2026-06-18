import { createContext, useContext, type ReactNode } from 'react'
import { regionConfigs, type Region, type RegionConfig } from '../config/regions'

type RegionContextValue = {
  region: Region
  config: RegionConfig
}

const RegionContext = createContext<RegionContextValue | null>(null)

export function RegionProvider({
  region,
  children,
}: {
  region: Region
  children: ReactNode
}) {
  return (
    <RegionContext.Provider value={{ region, config: regionConfigs[region] }}>
      {children}
    </RegionContext.Provider>
  )
}

export function useRegion() {
  const context = useContext(RegionContext)
  if (!context) {
    throw new Error('useRegion must be used within a RegionProvider')
  }
  return context
}
