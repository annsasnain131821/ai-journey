interface SectionTitleProps {
  title: string
  subtitle: string
  description: string
  className?: string
}

const SectionTitle = ({ title, subtitle, description, className = '' }: SectionTitleProps) => {
  return (
    <div className={`max-w-3xl ${className}`}>
      <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">{subtitle}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-slate-400">{description}</p>
    </div>
  )
}

export default SectionTitle
