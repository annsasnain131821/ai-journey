import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'

interface ServiceCardProps {
  title: string
  description: string
  Icon: IconType
}

const ServiceCard = ({ title, description, Icon }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group rounded-[2rem] border border-transparent bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-slate-950/80 p-[1px] shadow-[0_30px_90px_-60px_rgba(14,165,233,0.65)]"
    >
      <div className="h-full rounded-[1.9rem] bg-slate-950/90 px-8 py-9 backdrop-blur-xl transition duration-300 group-hover:bg-slate-900/95">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300 shadow-[inset_0_0_0_1px_rgba(34,211,238,0.12)]">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>
      </div>
    </motion.div>
  )
}

export default ServiceCard
