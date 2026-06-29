import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

interface TechItem {
  name: string
  icon: IconType
}

interface TechStackSectionProps {
  items: TechItem[]
  title: string
  subtitle: string
  description: string
  className?: string
  gridClassName?: string
}

const TechStackSection = ({
  items,
  title,
  subtitle,
  description,
  className = '',
  gridClassName = 'sm:grid-cols-2 lg:grid-cols-4',
}: TechStackSectionProps) => {
  return (
    <div className={className}>
      <Reveal>
        <SectionTitle title={title} subtitle={subtitle} description={description} />
      </Reveal>

      <div className={`mt-14 grid gap-4 ${gridClassName}`}>
        {items.map((item, index) => {
          const Icon = item.icon

          return (
            <Reveal key={item.name} delay={0.08 + index * 0.05}>
              <motion.div
                whileHover={{ y: -8, scale: 1.03, boxShadow: '0 0 0 1px rgba(34,211,238,0.18), 0 24px 70px -28px rgba(34,211,238,0.35)' }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="group rounded-[1.8rem] border border-slate-800/80 bg-slate-900/80 p-6 text-center shadow-[0_20px_60px_-40px_rgba(2,6,23,0.9)] hover:border-cyan-400/60"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition duration-300 group-hover:scale-110 group-hover:bg-cyan-400/20">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-4 text-base font-semibold text-slate-100">{item.name}</p>
              </motion.div>
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}

export default TechStackSection
export type { TechItem }
