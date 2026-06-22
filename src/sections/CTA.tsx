import { motion } from "framer-motion"
import { MagneticButton } from "@/components/MagneticButton"
import { ArrowRight } from "lucide-react"

export const CTA = () => {
  return (
    <section id="contact" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[#050816]" />
      <div className="absolute inset-0 hero-gradient opacity-80" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-[0.02] pointer-events-none" />

      {/* Animated gradient orbs */}
      <div className="hidden sm:block absolute top-1/3 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-[150px] animate-pulse" />
      <div className="hidden sm:block absolute bottom-1/3 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-secondary/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-[600px] sm:h-[600px] bg-accent/5 rounded-full blur-[200px] animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-10"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-xs font-bold tracking-[0.15em] uppercase text-accent">
              Let&apos;s Build Together
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            Transform Operations.
            <br />
            <span className="text-gradient">Accelerate Growth.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-text_secondary mb-12 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s build the next generation of your digital enterprise.
          </p>

          <MagneticButton className="group relative px-8 py-4 sm:px-10 sm:py-5 bg-primary text-background font-bold rounded-2xl overflow-hidden text-base sm:text-lg shadow-2xl shadow-primary/30">
            <span className="relative z-10 flex items-center gap-3">
              Book a Strategy Call <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
