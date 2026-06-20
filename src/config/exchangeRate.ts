export const EXCHANGE_RATE = {
  usdToCup: 693, // ACTUALIZAR MANUALMENTE según tasa informal del día
  lastUpdated: '2026-06-20', // fecha de la última actualización
}

export function convertUsdToCup(usdAmount: number): number {
  return Math.round(usdAmount * EXCHANGE_RATE.usdToCup)
}

export function formatCup(amount: number): string {
  return amount.toLocaleString('es-CU') + ' CUP'
}
