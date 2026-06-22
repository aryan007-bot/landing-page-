import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Activity, Cpu, Workflow, BarChart3, TrendingUp, Zap } from "lucide-react"

const steps = [
  { label: "Legacy Process", icon: Activity, color: "from-red-500/40 to-orange-500/40" },
  { label: "Automation Engine", icon: Zap, color: "from-orange-500/40 to-yellow-500/40" },
  { label: "Digital Workflow", icon: Workflow, color: "from-yellow-500/40 to-green-500/40" },
  { label: "Business Intelligence", icon: BarChart3, color: "from-green-500/40 to-cyan-500/40" },
  { label: "Operational Excellence", icon: Cpu, color: "from-cyan-500/40 to-blue-500/40" },
  { label: "Business Growth", icon: TrendingUp, color: "from-blue-500/40 to-primary/40" },
]

export const TransformationEngine = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary_bg/50 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4 block">
            Transformation Engine
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Digital{" "}
            <span className="text-gradient">Transformation Journey</span>
          </h2>
          <p className="text-text_secondary max-w-2xl mx-auto text-lg">
            From legacy systems to intelligent enterprise — we engineer every phase of the transformation.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-secondary/20 to-accent/20" />

          {steps.map((step, index) => {
            const Icon = step.icon
            const progress = useTransform(scrollYProgress, [index / steps.length, (index + 1) / steps.length], [0, 1])

            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`relative flex items-center gap-8 mb-16 last:mb-0 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                  <div className={`inline-block glass-panel rounded-2xl p-6 max-w-sm ${
                    index % 2 === 0 ? "ml-auto" : "mr-auto"
                  }`}>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 ${
                      index % 2 === 0 ? "ml-auto" : "mr-auto"
                    }`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{step.label}</h3>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        style={{ scaleX: progress, transformOrigin: "left" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="relative z-10 w-10 h-10 rounded-full glass-panel flex items-center justify-center flex-shrink-0">
                  {index < steps.length - 1 ? (
                    <ArrowDown className="w-4 h-4 text-primary" />
                  ) : (
                    <div className="w-4 h-4 bg-accent rounded-full animate-pulse" />
                  )}
                </div>

                <div className="flex-1" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
