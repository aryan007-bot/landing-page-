import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { caseStudies } from "@/constants/data"
import { ArrowRight, TrendingUp, Clock, DollarSign } from "lucide-react"

const metricIcons = [TrendingUp, Clock, DollarSign]

export const CaseStudies = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"])

  return (
    <section id="cases" ref={containerRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary_bg/50 to-background" />

      <div className="sticky top-0">
        <div className="container mx-auto px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4 block">
              Case Studies
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Proven{" "}
              <span className="text-gradient">Enterprise Impact</span>
            </h2>
            <p className="text-text_secondary max-w-2xl text-lg">
              Real results from real transformations across industries.
            </p>
          </motion.div>
        </div>

        <div className="relative h-[550px]">
          <motion.div className="absolute left-0 top-0 flex gap-8 px-6" style={{ x }}>
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className="w-[480px] flex-shrink-0 glass-panel rounded-3xl overflow-hidden group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-30`} />

                <div className="relative p-10">
                  <span className="text-xs font-bold tracking-[0.15em] uppercase text-primary mb-3 block">
                    {study.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                  <p className="text-text_secondary leading-relaxed mb-8">{study.description}</p>

                  <div className="grid grid-cols-3 gap-6 mb-8">
                    {study.metrics.map((metric, i) => {
                      const MetricIcon = metricIcons[i] || TrendingUp
                      return (
                        <div key={metric.label} className="text-center">
                          <MetricIcon className="w-5 h-5 text-primary mx-auto mb-2" />
                          <div className="text-2xl font-bold text-primary">{metric.value}</div>
                          <div className="text-xs text-text_secondary">{metric.label}</div>
                        </div>
                      )
                    })}
                  </div>

                  <button className="flex items-center gap-2 text-primary font-bold group/btn">
                    Read Case Study <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
