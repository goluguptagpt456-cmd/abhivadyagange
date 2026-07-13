import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Delhi",
    text: "Very peaceful stay. The location is excellent if you want to visit Kaal Bhairav temple early in the morning. Rooms were clean and staff was polite.",
    rating: 5
  },
  {
    name: "Meera Iyer",
    location: "Chennai",
    text: "Budget friendly and safe for families. We stayed for 3 days and the AC room was very comfortable. Walking distance to the main ghats.",
    rating: 5
  },
  {
    name: "Amit Sharma",
    location: "Mumbai",
    text: "A genuine heritage feel without burning a hole in the pocket. The 24x7 support really helped us when we arrived late at night from the station.",
    rating: 4
  }
];

// Duplicate items to ensure there's enough content to fill wide screens
const baseTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="py-24 bg-ivory-100 relative overflow-hidden border-b border-gold-500/20">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-16">
        <div className="text-center">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold-500 font-bold mb-2 block">Guest Experiences</span>
          <h2 className="text-4xl font-serif text-charcoal-900">What People Say</h2>
          <div className="mt-4 w-16 h-[1px] bg-gold-500/50 mx-auto"></div>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="w-full overflow-hidden relative">
        <div className="flex w-max animate-marquee pause-on-hover">
          {/* First set of testimonials */}
          <div className="flex gap-6 pr-6">
            {baseTestimonials.map((t, idx) => (
              <div 
                key={`set1-${idx}`}
                className="bg-white p-8 border border-gold-500/20 relative w-[300px] md:w-[380px] shrink-0"
              >
                <div className="absolute top-0 right-0 p-4 opacity-50">
                  <Quote size={24} className="text-gold-500" />
                </div>
                
                <div className="flex gap-1 mb-6 text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill={i < t.rating ? "currentColor" : "none"} strokeWidth={i < t.rating ? 0 : 2} />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-8 italic text-xs leading-relaxed relative z-10">
                  "{t.text}"
                </p>
                
                <div>
                  <h4 className="font-serif text-sm font-bold text-charcoal-900">{t.name}</h4>
                  <span className="text-[10px] uppercase tracking-widest text-gold-500">{t.location}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Second identical set for seamless loop */}
          <div className="flex gap-6 pr-6">
            {baseTestimonials.map((t, idx) => (
              <div 
                key={`set2-${idx}`}
                className="bg-white p-8 border border-gold-500/20 relative w-[300px] md:w-[380px] shrink-0"
              >
                <div className="absolute top-0 right-0 p-4 opacity-50">
                  <Quote size={24} className="text-gold-500" />
                </div>
                
                <div className="flex gap-1 mb-6 text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill={i < t.rating ? "currentColor" : "none"} strokeWidth={i < t.rating ? 0 : 2} />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-8 italic text-xs leading-relaxed relative z-10">
                  "{t.text}"
                </p>
                
                <div>
                  <h4 className="font-serif text-sm font-bold text-charcoal-900">{t.name}</h4>
                  <span className="text-[10px] uppercase tracking-widest text-gold-500">{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
