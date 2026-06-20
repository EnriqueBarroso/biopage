import { convertUsdToCup, formatCup, EXCHANGE_RATE } from './exchangeRate'

export type Region = 'ES' | 'CU'

export interface PlanInfo {
  number: string
  name: string
  description: string
  price: string
  priceNote: string
  featured: boolean
  features: string[]
  example?: string
  telegramStart?: string
  forWhom?: string
  highlightFeature?: string
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

export interface HeroContent {
  eyebrow: string
  line1: string
  line2: string
  line3: string
  subtitle: string
}

export interface RegionConfig {
  contactUrl: string
  navCtaLabel: string
  ctaFinalLabel: string
  hero: HeroContent
  heroNote?: string
  plans: PlanInfo[]
  combo: ComboInfo
  paymentMethods: PaymentMethod[] | null
  priceEquivalenceNote?: string
  exchangeRateNote?: string
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

const cubaFeatures = {
  Creator: [
    'Diseño a medida con tu identidad',
    'Listado de enlaces y servicios',
    'Botón directo de contacto (WhatsApp/Telegram)',
    'Carga rápida optimizada para datos móviles',
  ],
  Business: [
    'Todo lo del Plan Creator',
    'Catálogo de productos con fotos y precios',
    'Captación de contactos/pedidos',
    'Botón de pedido directo por mensaje',
  ],
}

const cubaHostingHighlight = 'Dominio y hosting incluidos el primer año — sin coste extra'

export const esConfig: RegionConfig = {
  contactUrl: 'https://enrique-barroso-dev.vercel.app',
  navCtaLabel: 'Empezar →',
  ctaFinalLabel: 'Hablar con nosotros →',
  hero: {
    eyebrow: 'La alternativa premium a Linktree',
    line1: 'Tu enlace',
    line2: 'en bio,',
    line3: 'convertido.',
    subtitle:
      'Páginas de enlaces a medida, rápidas y sin plantillas genéricas. Diseñadas para convertir seguidores en clientes.',
  },
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
  hero: {
    eyebrow: 'Tu negocio, visible y serio desde el primer clic',
    line1: 'Una página propia.',
    line2: 'Para que te tomen',
    line3: 'en serio.',
    subtitle:
      'Todo lo que ofreces, en un solo lugar — sin depender de tu perfil de Facebook. Lista en días, no en semanas, y pensada para que la gente confíe en ti desde que la abre.',
  },
  heroNote: 'Precios adaptados para Cuba. Pago en USD, CUP o efectivo.',
  plans: [
    {
      number: '01',
      name: 'Creator',
      description: '¿Dónde te encuentro?',
      forWhom: 'Negocios que necesitan presencia profesional',
      price: '240 USD',
      priceNote: `~${formatCup(convertUsdToCup(240))}`,
      featured: false,
      features: cubaFeatures.Creator,
      highlightFeature: cubaHostingHighlight,
      example:
        'Ejemplo: Tu peluquería con fotos, servicios, precios y WhatsApp en un solo lugar.',
      telegramStart: 'creator',
    },
    {
      number: '02',
      name: 'Business',
      description: '¿Qué vendes y cómo te compro?',
      forWhom: 'Negocios con productos o catálogo para mostrar',
      price: '480 USD',
      priceNote: `~${formatCup(convertUsdToCup(480))}`,
      featured: true,
      features: cubaFeatures.Business,
      highlightFeature: cubaHostingHighlight,
      example:
        'Ejemplo: Tu tienda con catálogo de productos y pedidos por mensaje directo.',
      telegramStart: 'business',
    },
    {
      number: '03',
      name: 'Mantenimiento',
      description: descriptions.Mantenimiento,
      price: '23 USD',
      priceNote: `~${formatCup(convertUsdToCup(23))}/mes`,
      featured: false,
      features: features.Mantenimiento,
    },
  ],
  combo: {
    title: 'Biopage Business + Automatización Básica',
    price: '800 USD',
    note: `~${formatCup(convertUsdToCup(800))} — ahorro de 120 USD frente a contratarlo por separado`,
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
  exchangeRateNote: `Tasa informal aproximada: actualizada el ${EXCHANGE_RATE.lastUpdated}`,
  crossLink: { text: '¿Estás en España? → biopage.es', url: '/' },
}

export const regionConfigs: Record<Region, RegionConfig> = {
  ES: esConfig,
  CU: cubaConfig,
}
