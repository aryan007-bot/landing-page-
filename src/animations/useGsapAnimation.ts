import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function useGsapAnimation(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.from(el, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })
    }, el)

    return () => ctx.revert()
  }, [ref])
}
