import { useRef, type ReactNode } from "react"
import { motion } from "framer-motion"

interface SectionWrapperProps {
  children: ReactNode
  id?: string
  className?: string
}

export const SectionWrapper = ({ children, id, className = "" }: SectionWrapperProps) => {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  )
}
