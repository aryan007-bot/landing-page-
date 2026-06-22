import { motion } from "framer-motion"
import { EnterpriseEcosystem } from "@/components/EnterpriseEcosystem"
import { MagneticButton } from "@/components/MagneticButton"
import { ArrowRight, Play } from "lucide-react"

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#050816]" />
      <div className="absolute inset-0 hero-gradient opacity-60" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-[0.02] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />



      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-accent">
                Pioneering Digital Transformation
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-8 tracking-tight"
            >
              Engineering
              <br />
              <span className="text-gradient">Digital Excellence</span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text_secondary/50">for Modern Enterprises</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-text_secondary mb-10 max-w-xl leading-relaxed"
            >
              We combine software engineering, intelligent automation, enterprise consulting, and business process solutions to help organizations scale faster.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4"
            >
              <MagneticButton className="group relative px-8 py-4 bg-primary text-background font-bold rounded-xl overflow-hidden shadow-xl shadow-primary/20">
                <span className="relative z-10 flex items-center gap-2 text-sm tracking-wide">
                  Schedule Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              </MagneticButton>

              <MagneticButton className="flex items-center gap-3 px-8 py-4 glass-panel rounded-xl font-bold hover:bg-white/10 transition-all">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Play className="w-4 h-4 fill-white" />
                </div>
                Explore Solutions
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <div className="flex -space-x-4">
                {[1, 3, 5, 8, 12].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-background bg-secondary_bg flex items-center justify-center overflow-hidden ring-2 ring-primary/20">
                    <img src={`https://i.pravatar.cc/100?img=${i}`} alt="client" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-white">Trusted by 100+ Enterprises</p>
                <div className="flex items-center gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-accent text-xs">★</span>
                  ))}
                  <span className="text-xs text-text_secondary ml-2">5.0 Rating</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl" />
              
              {/* Animation constrained to the orbit container */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <EnterpriseEcosystem className="absolute inset-0 w-full h-full z-0" />
              </div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="text-center">
                  <div className="w-72 h-72 mx-auto relative">
                    <div className="absolute inset-0 border border-primary/20 rounded-full animate-pulse" />
                    <div className="absolute inset-4 border border-secondary/20 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
                    <div className="absolute inset-8 border border-accent/20 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-text_secondary">Scroll to Discover</span>
        <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  )
}
