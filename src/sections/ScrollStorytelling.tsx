import { useRef, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { scenes } from "@/constants/data"
import { Code2, Brain, Network, Users, KanbanSquare, Zap, MessageSquare, ArrowRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const iconMap: Record<string, React.ElementType> = {
  Brain, Code2, Network, Users, KanbanSquare, Zap, MessageSquare,
}

export const ScrollStorytelling = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const panels = section.querySelectorAll(".story-panel")
    if (!panels.length) return

    const ctx = gsap.context(() => {
      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveIndex(i),
          onEnterBack: () => setActiveIndex(i),
        })
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section id="solutions" ref={sectionRef} className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary_bg/50 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            End-to-End{" "}
            <span className="text-gradient">Enterprise Capabilities</span>
          </h2>
          <p className="text-text_secondary max-w-2xl mx-auto text-lg">
            From strategy to execution, we deliver across the entire digital transformation lifecycle.
          </p>
        </motion.div>

        <div className="relative">
          {/* Progress Bar */}
          <div className="sticky top-32 z-10 mb-16">
            <div className="max-w-3xl mx-auto">
              <div className="h-px bg-white/10 relative">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-secondary to-accent"
                  initial={{ width: "0%" }}
                  animate={{ width: `${(activeIndex / (scenes.length - 1)) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="flex justify-between mt-2">
                {scenes.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      i <= activeIndex ? "bg-primary shadow-lg shadow-primary/50" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {scenes.map((scene, index) => {
            const Icon = iconMap[scene.icon] || Brain
            const isActive = index === activeIndex

            return (
              <div key={scene.id} className="story-panel min-h-[80vh] flex items-center py-16">
                <div className="w-full">
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40 }}
                        transition={{ duration: 0.6 }}
                        className="grid lg:grid-cols-2 gap-16 items-center"
                      >
                        <div>
                          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-panel mb-6">
                            <Icon className="w-4 h-4 text-primary" />
                            <span className="text-xs font-bold tracking-wider uppercase text-primary">
                              Scene {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>
                          <h3 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                            {scene.subtitle}
                          </h3>
                          <p className="text-2xl md:text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r mb-6"
                             style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}>
                            {scene.title}
                          </p>
                          <p className="text-text_secondary text-lg leading-relaxed mb-8 max-w-lg">
                            {scene.description}
                          </p>
                          <button className="flex items-center gap-2 text-primary font-bold group">
                            Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                        <div className="relative">
                          <div className="relative w-full aspect-square max-w-md mx-auto">
                            <div className={`absolute inset-0 bg-gradient-to-br ${scene.gradient} rounded-3xl opacity-30 blur-3xl`} />
                            <div className="relative glass-panel rounded-3xl p-8 aspect-square flex items-center justify-center">
                              <div className="text-center">
                                <Icon className="w-24 h-24 text-primary mx-auto mb-6 opacity-80" />
                                <div className="flex items-center justify-center gap-3">
                                  {[1, 2, 3].map((n) => (
                                    <div
                                      key={n}
                                      className="w-3 h-3 rounded-full bg-primary/30 animate-bounce"
                                      style={{ animationDelay: `${n * 0.2}s` }}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
