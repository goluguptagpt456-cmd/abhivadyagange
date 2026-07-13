import { Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-ivory-100/60 py-12 border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 animate-on-scroll animate-fade-in">
        
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-serif text-2xl font-bold tracking-tight text-white">Abhivadya Gange Home Stay</span>
          </div>
          <p className="text-[10px] uppercase tracking-widest text-gold-500">A Spiritual Retreat in Kashi</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://instagram.com/stayatabhivadyagange" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold text-gold-500 hover:text-white transition-colors">
            <Instagram size={16} />
            Instagram
          </a>
          <a href="mailto:info@abhivadyagange.com" className="flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold text-gold-500 hover:text-white transition-colors">
            <Mail size={16} />
            Email Us
          </a>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 pt-8 border-t border-gold-500/10 text-center md:text-left flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-widest font-light text-white/40">
        <p>&copy; {new Date().getFullYear()} Abhivadya Gange Home Stay. All Rights Reserved.</p>
        <p className="mt-2 md:mt-0">A20/64A, Lahurabir, Chetganj, Varanasi, UP 221001</p>
      </div>
    </footer>
  );
}
