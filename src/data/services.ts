import type { IconType } from 'react-icons'
import { FiBarChart2, FiFeather, FiLock, FiSmartphone } from 'react-icons/fi'

export interface ServiceItem {
  title: string
  description: string
  icon: IconType
}

export const services: ServiceItem[] = [
  {
    title: 'Product Design',
    description: 'High-fidelity UI systems, polished workflows, and design patterns built for scale.',
    icon: FiFeather,
  },
  {
    title: 'Frontend Development',
    description: 'Modern React interfaces with TypeScript, Tailwind, and performance-first best practices.',
    icon: FiSmartphone,
  },
  {
    title: 'Analytics & Growth',
    description: 'Data-informed improvements that support conversion, retention, and product confidence.',
    icon: FiBarChart2,
  },
  {
    title: 'Trust & Security',
    description: 'Stable, maintainable implementations with thoughtful accessibility and security controls.',
    icon: FiLock,
  },
]
