import { ArrowUpRight, Globe2, Mail, MapPin, Phone } from "lucide-react"
import { MagneticButton } from "@/components/MagneticButton"

const footerLinks = {
  Company: ["About Us", "Leadership", "Careers", "Press", "Partners"],
  Solutions: ["Digital Transformation", "Enterprise Automation", "Cloud Services", "Data Analytics", "Cybersecurity"],
  Services: ["IT Consulting", "Software Development", "IT Recruitment", "Managed Services", "BPO Services"],
  Industries: ["Financial Services", "Healthcare", "Technology", "Manufacturing", "Retail"],
}

export const Footer = () => {
  return (
    <footer className="relative py-20 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary_bg" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-primary mb-6">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-text_secondary hover:text-white transition-colors flex items-center gap-1 group"
                    >
                      {link}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 py-10 border-y border-white/5 mb-10">
          <div>
            <h4 className="text-lg font-bold mb-4">Stay Updated</h4>
            <p className="text-sm text-text_secondary mb-6">
              Get the latest insights on digital transformation and enterprise technology.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button className="px-6 py-3 bg-primary text-background font-bold rounded-xl hover:scale-105 transition-transform text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
          <div className="lg:text-right">
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-text_secondary">
              <div className="flex items-center gap-3 lg:justify-end">
                <Mail className="w-4 h-4 text-primary" />
                contact@excelsior.com
              </div>
              <div className="flex items-center gap-3 lg:justify-end">
                <Phone className="w-4 h-4 text-primary" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center gap-3 lg:justify-end">
                <MapPin className="w-4 h-4 text-primary" />
                San Francisco, CA
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-primary/20">
              E
            </div>
            <span className="font-display font-bold text-xl tracking-tight">EXCELSIOR</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-text_secondary hover:text-primary transition-colors">
              <Globe2 className="w-5 h-5" />
            </a>
            <a href="#" className="text-text_secondary hover:text-primary transition-colors">
              <Globe2 className="w-5 h-5" />
            </a>
            <a href="#" className="text-text_secondary hover:text-primary transition-colors">
              <Globe2 className="w-5 h-5" />
            </a>
          </div>

          <p className="text-xs text-text_secondary">
            &copy; {new Date().getFullYear()} Excelsior. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
