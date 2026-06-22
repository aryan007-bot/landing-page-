import { motion } from "framer-motion"
import { stats } from "@/constants/data"
import { AnimatedCounter } from "@/components/AnimatedCounter"

export const Stats = () => {
  return (
    <section className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary_bg/50 to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4 block">
            By the Numbers
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Enterprise{" "}
            <span className="text-gradient">Impact Metrics</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <div className="glass-panel rounded-3xl p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="text-5xl md:text-6xl font-bold font-display mb-3 text-transparent bg-clip-text bg-gradient-to-br from-primary via-secondary to-accent tabular-nums">
                    <AnimatedCounter end={parseFloat(stat.value)} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-text_secondary font-medium">{stat.label}</p>
                </div>

                <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
