import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-load-fade-in ${
        isScrolled
          ? 'bg-charcoal-900/95 backdrop-blur-md border-b border-gold-500/20 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className={`mx-auto flex justify-between items-center ${isScrolled ? 'h-[70px] px-8' : 'px-8 max-w-7xl'}`}>
        <a href="#home" className="flex items-center group">
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-tight leading-none text-white transition-colors group-hover:text-gold-500">
              Abhivadya Gange
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-gold-500 mt-1">
              Home Stay
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8 text-[11px] uppercase tracking-widest font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-gold-500 transition-colors text-white/90"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="tel:+919129244828"
            className="flex items-center gap-2 bg-maroon-800 hover:bg-white text-white hover:text-maroon-800 hover:shadow-md hover:-translate-y-0.5 px-6 py-2.5 text-[11px] uppercase tracking-widest font-semibold transition-all duration-300"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2 hover:text-gold-500 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-charcoal-900/95 backdrop-blur-md shadow-xl border-t border-gold-500/20 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] uppercase tracking-widest font-semibold text-white/90 hover:text-gold-500 py-3 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+919129244828"
              className="mt-4 flex items-center justify-center gap-2 bg-maroon-800 text-white p-3 text-[11px] uppercase tracking-widest font-semibold hover:bg-white hover:text-maroon-800 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Call Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
