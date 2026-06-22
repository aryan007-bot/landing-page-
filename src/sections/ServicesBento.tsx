import { useRef } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { services } from "@/constants/data"
import {
  Brain, Code2, Network, Users, KanbanSquare, HeadphonesIcon,
  Zap, MessageSquare, FileText, ClipboardList, Phone, Mail,
  ArrowRight,
} from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  Brain, Code2, Network, Users, KanbanSquare, HeadphonesIcon,
  Zap, MessageSquare, FileText, ClipboardList, Phone, Mail,
}

const TiltCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const dx = (e.clientX - centerX) / rect.width
    const dy = (e.clientY - centerY) / rect.height
    rotateX.set(-dy * 10)
    rotateY.set(dx * 10)
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  const Icon = iconMap[service.icon]
  const background = useMotionTemplate`radial-gradient(300px circle at ${x}px ${y}px, rgba(0,229,255,0.06), transparent 80%)`

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className={`relative glass-panel rounded-3xl p-8 overflow-hidden group cursor-pointer
        ${service.colSpan === 2 ? "lg:col-span-2" : ""}
        ${service.rowSpan === 2 ? "lg:row-span-2" : ""}
      `}
    >
      <div className="absolute inset-0" style={{ background }} />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${service.gradient.split(" ")[1].replace("/20", "/10")}, transparent)`,
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          {Icon && <Icon className="w-7 h-7 text-primary" />}
        </div>
        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
        <p className="text-text_secondary text-sm leading-relaxed flex-grow">{service.description}</p>
        <div className="mt-6 flex items-center gap-2 text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
          Learn More <ArrowRight className="w-4 h-4" />
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="absolute inset-0 rounded-3xl ring-1 ring-primary/20" />
      </div>
    </motion.div>
  )
}

export const ServicesBento = () => {
  return (
    <section id="services" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary_bg/30 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4 block">
            What We Do
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive{" "}
            <span className="text-gradient">Enterprise Services</span>
          </h2>
          <p className="text-text_secondary max-w-2xl text-lg">
            A full spectrum of capabilities delivered with enterprise maturity and startup velocity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]">
          {services.map((service, index) => (
            <TiltCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
