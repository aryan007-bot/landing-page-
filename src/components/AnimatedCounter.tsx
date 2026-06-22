import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"

interface AnimatedCounterProps {
  end: number
  suffix?: string
  duration?: number
  decimals?: number
}

export const AnimatedCounter = ({ end, suffix = "", duration = 2, decimals = 0 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true

    const startTime = Date.now()
    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(eased * end)
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [inView, end, duration])

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  )
}
