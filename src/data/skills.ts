import { FiCode, FiLayers, FiShield, FiSmartphone, FiZap } from 'react-icons/fi'
import { SiFramer, SiTailwindcss, SiTypescript } from 'react-icons/si'
import type { TechItem } from '../components/common/TechStackSection'

export const skills: TechItem[] = [
  { name: 'React', icon: FiCode },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Framer Motion', icon: SiFramer },
  { name: 'Design Systems', icon: FiLayers },
  { name: 'Responsive Layouts', icon: FiSmartphone },
  { name: 'Accessibility', icon: FiShield },
  { name: 'Performance Optimization', icon: FiZap },
]
