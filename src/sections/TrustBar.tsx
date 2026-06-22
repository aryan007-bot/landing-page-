import { motion } from "framer-motion"
import { trustKeywords } from "@/constants/data"

export const TrustBar = () => {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      <div className="container mx-auto px-6">
        <div className="glass-panel rounded-2xl p-8 overflow-hidden">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <motion.div
              className="flex gap-16 flex-shrink-0"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {[...trustKeywords, ...trustKeywords].map((word, i) => (
                <div key={i} className="flex items-center gap-16 flex-shrink-0">
                  <span className="text-sm font-bold tracking-widest uppercase text-text_secondary/60 whitespace-nowrap">
                    {word}
                  </span>
                  <div className="w-1.5 h-1.5 bg-primary/40 rounded-full flex-shrink-0" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
