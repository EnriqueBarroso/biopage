export type Region = 'ES' | 'CU'

export interface PlanInfo {
  number: string
  name: string
  description: string
  price: string
  priceNote: string
  featured: boolean
  features: string[]
}

export interface ComboInfo {
  title: string
  price: string
  note: string
}

export interface PaymentMethod {
  icon: string
  title: string
  description: string
}

export interface RegionConfig {
  contactUrl: string
  navCtaLabel: string
  ctaFinalLabel: string
  heroNote?: string
  plans: PlanInfo[]
  combo: ComboInfo
  paymentMethods: PaymentMethod[] | null
  priceEquivalenceNote?: string
  crossLink?: { text: string; url: string }
}

const descriptions = {
  Creator: 'Biopage personalizada + hosting 1 año',
  Business: 'Biopage + integraciones básicas + SEO',
  Portfolio: 'Biopage avanzada + analíticas + soporte',
  Mantenimiento: 'Actualizaciones, soporte y backups',
}

const features = {
  Creator: [
    'Página de enlaces a medida',
    'Diseño responsive',
    'Hasta 8 enlaces',
    'Entrega en 5 días',
  ],
  Business: [
    'Todo lo del plan Creator',
    'Enlaces y bloques ilimitados',
    'Integración con analytics',
    'Optimización para conversión',
    'Soporte prioritario 30 días',
  ],
  Portfolio: [
    'Todo lo del plan Business',
    'Galería de proyectos',
    'Formulario de contacto',
    'Dominio personalizado',
  ],
  Mantenimiento: ['Actualizaciones continuas', 'Soporte técnico', 'Backups periódicos'],
}

export const esConfig: RegionConfig = {
  contactUrl: 'https://enrique-barroso-dev.vercel.app',
  navCtaLabel: 'Empezar →',
  ctaFinalLabel: 'Hablar con nosotros →',
  plans: [
    {
      number: '01',
      name: 'Creator',
      description: descriptions.Creator,
      price: '297€',
      priceNote: 'Pago único',
      featured: false,
      features: features.Creator,
    },
    {
      number: '02',
      name: 'Business',
      description: descriptions.Business,
      price: '597€',
      priceNote: 'Pago único',
      featured: true,
      features: features.Business,
    },
    {
      number: '03',
      name: 'Portfolio',
      description: descriptions.Portfolio,
      price: '897€',
      priceNote: 'Pago único',
      featured: false,
      features: features.Portfolio,
    },
    {
      number: '04',
      name: 'Mantenimiento',
      description: descriptions.Mantenimiento,
      price: '29€',
      priceNote: 'Por mes',
      featured: false,
      features: features.Mantenimiento,
    },
  ],
  combo: {
    title: 'Biopage Business + Automatización Básica',
    price: '997€',
    note: 'Ahorras 100€ frente a contratarlo por separado',
  },
  paymentMethods: null,
}

export const cubaConfig: RegionConfig = {
  contactUrl: 'https://t.me/biopagecuba_bot',
  navCtaLabel: 'Empezar →',
  ctaFinalLabel: 'Escríbeme por Telegram',
  heroNote: 'Precios adaptados para Cuba. Pago en USD, CUP o efectivo.',
  plans: [
    {
      number: '01',
      name: 'Creator',
      description: descriptions.Creator,
      price: '240 USD',
      priceNote: '~72.000 CUP',
      featured: false,
      features: features.Creator,
    },
    {
      number: '02',
      name: 'Business',
      description: descriptions.Business,
      price: '480 USD',
      priceNote: '~144.000 CUP',
      featured: true,
      features: features.Business,
    },
    {
      number: '03',
      name: 'Portfolio',
      description: descriptions.Portfolio,
      price: '720 USD',
      priceNote: '~216.000 CUP',
      featured: false,
      features: features.Portfolio,
    },
    {
      number: '04',
      name: 'Mantenimiento',
      description: descriptions.Mantenimiento,
      price: '23 USD',
      priceNote: '~6.900 CUP/mes',
      featured: false,
      features: features.Mantenimiento,
    },
  ],
  combo: {
    title: 'Biopage Business + Automatización Básica',
    price: '800 USD',
    note: '~240.000 CUP — ahorro de 120 USD frente a contratarlo por separado',
  },
  paymentMethods: [
    {
      icon: '💵',
      title: 'Transferencia USD/EUR',
      description: 'Zelle, PayPal, Western Union.',
    },
    {
      icon: '🏦',
      title: 'Transferencia CUP',
      description: 'Enzona o Transfermóvil.',
    },
    {
      icon: '🤝',
      title: 'Efectivo en Cuba',
      description: 'Coordinado por persona de confianza.',
    },
  ],
  priceEquivalenceNote:
    'Equivalencia orientativa. Precio base en USD. La tasa CUP puede variar.',
  crossLink: { text: '¿Estás en España? → biopage.es', url: '/' },
}

export const regionConfigs: Record<Region, RegionConfig> = {
  ES: esConfig,
  CU: cubaConfig,
}
