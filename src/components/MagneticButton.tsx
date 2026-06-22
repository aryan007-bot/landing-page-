import { useRef, type ReactNode } from "react"
import { motion } from "framer-motion"

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  href?: string
}

export const MagneticButton = ({ children, className, onClick, href }: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    ref.current.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`
  }

  const handleMouseLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = "translate(0px, 0px)"
  }

  const btn = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`inline-flex items-center cursor-pointer transition-all duration-300 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  )

  if (href) {
    return <a href={href}>{btn}</a>
  }

  return btn
}
