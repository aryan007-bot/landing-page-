import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Case Studies', href: '#cases' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down
        gsap.to(navRef.current, { y: -100, duration: 0.3, ease: 'power2.inOut' });
      } else {
        // Scrolling up
        gsap.to(navRef.current, { y: 0, duration: 0.3, ease: 'power2.inOut' });
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <nav
        ref={navRef}
        className={`pointer-events-auto w-[90%] max-w-7xl transition-all duration-300 relative ${
          scrolled ? 'top-4' : 'top-8'
        }`}
      >
        <div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-primary/20">
            E
          </div>
          <span className="font-display font-bold text-xl tracking-tight">EXCELSIOR</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-text_secondary hover:text-primary transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:block px-6 py-2 bg-primary text-background font-bold rounded-full hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-primary/20">
            Consult Now
          </button>
          <button 
            className="md:hidden text-text_primary p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 md:hidden glass-panel rounded-3xl p-6 overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-text_secondary hover:text-primary"
                >
                  {item.name}
                </a>
              ))}
              <button className="mt-4 w-full py-4 bg-primary text-background font-bold rounded-2xl">
                Consult Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </nav>
    </div>
  );
};
