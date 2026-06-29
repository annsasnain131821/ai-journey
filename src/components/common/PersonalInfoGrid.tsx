import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import type { ReactNode } from 'react'

interface PersonalInfoItem {
  label: string
  value: ReactNode
  icon: IconType
}

interface PersonalInfoGridProps {
  items: PersonalInfoItem[]
}

const PersonalInfoGrid = ({ items }: PersonalInfoGridProps) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => {
        const Icon = item.icon
        return (
          <motion.div
            key={item.label}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="rounded-[1.75rem] border border-slate-800/80 bg-slate-900/80 p-5"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
              <Icon className="h-5 w-5" />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.28em] text-slate-500">{item.label}</p>
            <p className="mt-2 text-sm font-semibold text-white">{item.value}</p>
          </motion.div>
        )
      })}
    </div>
  )
}

export default PersonalInfoGrid
export type { PersonalInfoItem }
