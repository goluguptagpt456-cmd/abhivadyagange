import { PhoneCall, CalendarCheck } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [heroImage, setHeroImage] = useState<string>("/kashi.png");

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-charcoal-900 pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${heroImage}')` }}
      >
        {/* Deep maroon/charcoal gradient overlay for readability and heritage mood */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/95 via-charcoal-900/80 to-maroon-800/80"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start pt-12 pb-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-8 animate-load-fade-up">
            <div className="h-[1px] w-16 bg-gold-500 opacity-50"></div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold-500 font-bold">Stay Close to Kashi Vishwanath</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-8 animate-load-fade-up delay-load-100">
            A Spiritual Retreat<br />
            Near <span className="italic text-gold-500">Kashi Vishwanath</span>
          </h1>
          
          <p className="text-sm md:text-base text-gray-300 mb-12 max-w-xl font-light leading-relaxed animate-load-fade-up delay-load-200">
            Comfortable homestay just minutes from Kaal Bhairav Temple and Kashi Vishwanath, offering luxury, family, and group rooms in the heart of Varanasi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-load-fade-up delay-load-300">
            <a 
              href="#contact"
              className="inline-flex justify-center items-center gap-2 bg-maroon-800 hover:bg-charcoal-900 border border-maroon-800 hover:border-charcoal-900 text-white hover:shadow-lg hover:-translate-y-1 px-8 py-3 text-[11px] uppercase tracking-widest font-semibold transition-all duration-300"
            >
              Check Availability
            </a>
            <a 
              href="tel:+919129244828"
              className="inline-flex justify-center items-center gap-2 bg-transparent border border-white/20 hover:border-gold-500 hover:text-gold-500 text-white hover:shadow-lg hover:-translate-y-1 px-8 py-3 text-[11px] uppercase tracking-widest font-semibold transition-all duration-300"
            >
              +91 91292 44828
            </a>
          </div>
        </div>
      </div>

      {/* Decorative vertical text (editorial style) */}
      <div className="hidden lg:block absolute top-1/2 right-12 z-20 transform -translate-y-1/2 animate-load-fade-in delay-load-300">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gold-500" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Est. 2024</span>
      </div>
    </section>
  );
}
