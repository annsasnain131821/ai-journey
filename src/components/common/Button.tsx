import { motion } from 'framer-motion'
import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import { ImSpinner9 } from 'react-icons/im'

type Variant = 'primary' | 'secondary' | 'outline'
type Size = 'sm' | 'md'

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'href' | 'onDrag' | 'onDragStart' | 'onDragEnd'> {
  variant?: Variant
  size?: Size
  loading?: boolean
  className?: string
  href?: string
  children: ReactNode
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-cyan-500 text-slate-950 hover:bg-cyan-400 focus-visible:ring-cyan-400',
  secondary:
    'bg-slate-900/90 text-white border border-slate-700 hover:bg-slate-800 focus-visible:ring-slate-600',
  outline:
    'border border-slate-700 text-slate-100 hover:border-cyan-400 hover:text-cyan-300 focus-visible:ring-cyan-400',
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-xs',
  md: 'px-6 py-3 text-sm',
}

const Button = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  className = '',
  href,
  children,
  ...props
}: ButtonProps) => {
  const baseClasses = `inline-flex items-center justify-center rounded-full ${sizeStyles[size]} font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${variantStyles[variant]} ${className}`
  const content = (
    <>
      {loading && (
        <ImSpinner9 className="mr-2 h-4 w-4 animate-spin text-current opacity-80" />
      )}
      {children}
    </>
  )

  if (href) {
    return (
      <motion.div whileHover={{ y: -3, scale: 1.01 }} whileTap={{ scale: 0.98 }}>
        <a href={href} className={baseClasses}>
          {content}
        </a>
      </motion.div>
    )
  }

  return (
    <motion.div whileHover={{ y: -3, scale: 1.01 }} whileTap={{ scale: 0.98 }}>
      <button className={baseClasses} disabled={loading || props.disabled} {...props}>
        {content}
      </button>
    </motion.div>
  )
}

export default Button
