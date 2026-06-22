import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export const CursorGlow = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }
    const handleMouseLeave = () => setVisible(false)
    const handleMouseEnter = () => setVisible(true)

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [visible])

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null

  return (
    <motion.div
      className="fixed top-0 left-0 w-96 h-96 pointer-events-none z-[9999] mix-blend-screen"
      style={{
        background: "radial-gradient(circle at center, rgba(0,229,255,0.08) 0%, transparent 70%)",
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", damping: 30, stiffness: 150, mass: 0.5 }}
    />
  )
}
