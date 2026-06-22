import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type RevealType = "fadeUp" | "fadeLeft" | "fadeRight" | "scaleIn" | "clip"

export function useScrollReveal<T extends HTMLElement>(
  type: RevealType = "fadeUp",
  options?: { delay?: number; duration?: number; start?: string }
) {
  const ref = useRef<T>(null!)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const vars: Record<string, unknown> = {
      duration: options?.duration ?? 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: options?.start ?? "top 85%",
        toggleActions: "play none none reverse",
      },
    }

    switch (type) {
      case "fadeUp":
        gsap.from(el, { ...vars, y: 80, opacity: 0 })
        break
      case "fadeLeft":
        gsap.from(el, { ...vars, x: -80, opacity: 0 })
        break
      case "fadeRight":
        gsap.from(el, { ...vars, x: 80, opacity: 0 })
        break
      case "scaleIn":
        gsap.from(el, { ...vars, scale: 0.8, opacity: 0 })
        break
      case "clip":
        gsap.from(el, { ...vars, clipPath: "inset(0 100% 0 0)" })
        break
    }
  }, [type, options])

  return ref
}
