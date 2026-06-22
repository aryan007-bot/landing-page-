import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { processSteps } from "@/constants/data"
import { Search, LineChart, Hammer, Rocket, Settings2, Expand, ArrowRight } from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  Search, LineChart, Hammer, Rocket, Settings2, Expand,
}

export const ProcessJourney = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"])

  return (
    <section id="process" ref={containerRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary_bg/30 to-background" />

      <div className="sticky top-0">
        <div className="container mx-auto px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4 block">
              Our Process
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              From Discovery to{" "}
              <span className="text-gradient">Global Scale</span>
            </h2>
            <p className="text-text_secondary max-w-2xl text-lg">
              A proven methodology refined across hundreds of enterprise engagements.
            </p>
          </motion.div>
        </div>

        <div className="relative h-[500px]">
          <motion.div className="absolute left-0 top-0 flex gap-8 px-6" style={{ x }}>
            {processSteps.map((step, index) => {
              const Icon = iconMap[step.icon] || Search

              return (
                <div
                  key={step.id}
                  className="w-[400px] flex-shrink-0 glass-panel rounded-3xl p-8 relative group hover:bg-white/[0.08] transition-colors"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs font-bold tracking-wider text-primary/60 text-[10px] uppercase">
                        Step {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-text_secondary leading-relaxed">{step.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-all translate-x-[-8px] group-hover:translate-x-0">
                    Explore Phase <ArrowRight className="w-4 h-4" />
                  </div>
                  <div className="absolute top-8 right-8 text-8xl font-bold text-white/[0.02] select-none">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
