import { useRef } from "react"
import { motion, useMotionValue } from "framer-motion"
import { features } from "@/constants/data"
import { Building2, Zap, Users, Cpu, TrendingUp, Globe, ArrowRight } from "lucide-react"

type WhyIconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>
const iconMap: Record<string, WhyIconComponent> = {
  Building2, Zap, Users, Cpu, TrendingUp, Globe,
}

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const dx = (e.clientX - rect.left) / rect.width - 0.5
    const dy = (e.clientY - rect.top) / rect.height - 0.5
    rotateX.set(-dy * 8)
    rotateY.set(dx * 8)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  const Icon = iconMap[feature.icon]

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass-panel rounded-3xl p-8 group cursor-pointer relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-secondary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          {Icon && <Icon className="w-7 h-7 text-primary" />}
        </div>
        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
        <p className="text-text_secondary leading-relaxed text-sm">{feature.description}</p>
        <div className="mt-6 flex items-center gap-2 text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
          Learn More <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  )
}

export const WhyChooseUs = () => {
  return (
    <section className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary_bg/30 to-background" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4 block">
            Why Excelsior
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Built for{" "}
            <span className="text-gradient">Enterprise Excellence</span>
          </h2>
          <p className="text-text_secondary max-w-2xl mx-auto text-lg">
            What sets us apart is not just what we do, but how we do it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
