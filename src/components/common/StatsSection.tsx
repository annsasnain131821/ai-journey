import { animate, motion, useMotionValue } from 'framer-motion'
import { useEffect, useState } from 'react'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

interface StatItem {
  value: number
  suffix?: string
  label: string
}

interface StatsSectionProps {
  items: StatItem[]
  title: string
  subtitle: string
  description: string
  className?: string
}

const AnimatedCounter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const motionValue = useMotionValue(0)
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    })

    return controls.stop
  }, [motionValue, value])

  return <motion.span>{displayValue}{suffix}</motion.span>
}

const StatsSection = ({ items, title, subtitle, description, className = '' }: StatsSectionProps) => {
  return (
    <div className={className}>
      <Reveal>
        <SectionTitle title={title} subtitle={subtitle} description={description} />
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => (
          <Reveal key={item.label} delay={0.08 + index * 0.06}>
            <motion.div
              whileHover={{ y: -8, scale: 1.02, boxShadow: '0 20px 60px -30px rgba(34,211,238,0.35)' }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="rounded-[1.8rem] border border-white/10 bg-white/10 p-7 backdrop-blur-xl"
            >
              <p className="text-4xl font-semibold text-white sm:text-5xl">
                <AnimatedCounter value={item.value} suffix={item.suffix} />
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.26em] text-cyan-300">{item.label}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default StatsSection
export type { StatItem }
