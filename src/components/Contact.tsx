import { Phone, Mail, MessageCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    roomType: 'standard',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Normally this would send an email or save to DB.
    alert("Thank you! Your booking request has been received. We will call you shortly to confirm.");
  };

  return (
    <section id="contact" className="py-24 bg-maroon-800 text-ivory-100 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-5/12 animate-on-scroll animate-fade-in">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold-500 font-bold mb-4 block">Reservations</span>
            <h2 className="text-4xl font-serif mb-6">Book Your Stay</h2>
            <p className="text-sm text-ivory-100/70 mb-10 font-light leading-relaxed">
              Plan your spiritual retreat in Varanasi. Fill out the form or contact us directly via Phone or WhatsApp for instant bookings.
            </p>

            <div className="space-y-4">
              <a href="tel:+919129244828" className="flex items-center gap-4 bg-charcoal-900/40 p-4 border border-gold-500/20 hover:border-gold-500/50 transition-colors group">
                <div className="w-10 h-10 border border-gold-500/50 flex items-center justify-center text-gold-500 shrink-0 group-hover:bg-gold-500 group-hover:text-maroon-800 transition-all duration-300">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-gold-500/80 mb-1">Call Us (24x7)</span>
                  <span className="text-xl font-serif tracking-wide text-white group-hover:text-gold-500 transition-colors">+91 91292 44828</span>
                </div>
              </a>

              <a href="https://wa.me/919129244828" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-charcoal-900/40 p-4 border border-gold-500/20 hover:border-gold-500/50 transition-colors group">
                <div className="w-10 h-10 border border-[#25D366]/50 flex items-center justify-center text-[#25D366] shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-gold-500/80 mb-1">WhatsApp</span>
                  <span className="text-xl font-serif tracking-wide text-white group-hover:text-[#25D366] transition-colors">+91 91292 44828</span>
                </div>
              </a>

              <a href="mailto:info@abhivadyagange.com" className="flex items-center gap-4 p-4 border border-transparent hover:border-gold-500/20 transition-colors group">
                <div className="w-10 h-10 flex items-center justify-center text-gold-500 shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-gold-500/80 mb-1">Email</span>
                  <span className="text-sm tracking-wide text-white/90 group-hover:text-white transition-colors">info@abhivadyagange.com</span>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:w-7/12 bg-ivory-100 p-8 md:p-12 lg:p-16 text-charcoal-900 relative shadow-2xl animate-on-scroll animate-fade-up">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-maroon-800"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-maroon-800"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-maroon-800"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-maroon-800"></div>
            
            <h3 className="font-serif text-3xl text-maroon-800 mb-8 text-center">Reservation Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-maroon-800/70 mb-2 font-bold">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full bg-transparent border-b border-charcoal-800/20 py-2 text-sm text-charcoal-900 focus:outline-none focus:border-maroon-800 transition-colors placeholder:text-charcoal-800/30"
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="relative">
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-maroon-800/70 mb-2 font-bold">Phone Number</label>
                  <input 
                    type="tel" 
                    required 
                    className="w-full bg-transparent border-b border-charcoal-800/20 py-2 text-sm text-charcoal-900 focus:outline-none focus:border-maroon-800 transition-colors placeholder:text-charcoal-800/30"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-maroon-800/70 mb-2 font-bold">Check-in Date</label>
                  <input 
                    type="date" 
                    required 
                    className="w-full bg-transparent border-b border-charcoal-800/20 py-2 text-sm text-charcoal-900 focus:outline-none focus:border-maroon-800 transition-colors uppercase tracking-wider"
                    value={formData.checkIn}
                    onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
                  />
                </div>
                <div className="relative">
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-maroon-800/70 mb-2 font-bold">Check-out Date</label>
                  <input 
                    type="date" 
                    required 
                    className="w-full bg-transparent border-b border-charcoal-800/20 py-2 text-sm text-charcoal-900 focus:outline-none focus:border-maroon-800 transition-colors uppercase tracking-wider"
                    value={formData.checkOut}
                    onChange={(e) => setFormData({...formData, checkOut: e.target.value})}
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-maroon-800/70 mb-2 font-bold">Room Type</label>
                <select 
                  className="w-full bg-transparent border-b border-charcoal-800/20 py-2 text-sm text-charcoal-900 focus:outline-none focus:border-maroon-800 transition-colors font-serif italic"
                  value={formData.roomType}
                  onChange={(e) => setFormData({...formData, roomType: e.target.value})}
                >
                  <option value="standard">Standard Room (2 Persons)</option>
                  <option value="family">Family Room (3-4 Persons)</option>
                  <option value="group">Group Room (5+ Persons)</option>
                  <option value="luxury">Luxury Room (2-3 Persons)</option>
                </select>
              </div>

              <div className="relative">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-maroon-800/70 mb-2 font-bold">Special Requests (Optional)</label>
                <textarea 
                  rows={2} 
                  className="w-full bg-transparent border-b border-charcoal-800/20 py-2 text-sm text-charcoal-900 focus:outline-none focus:border-maroon-800 transition-colors resize-none placeholder:text-charcoal-800/30"
                  placeholder="Any specific needs?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full bg-charcoal-900 hover:bg-maroon-800 text-gold-500 hover:text-white py-5 text-[11px] uppercase tracking-[0.3em] font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-gold-500/30"
                >
                  Send Booking Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
