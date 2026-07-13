import { Wifi, Wind, Coffee, Bell, Car, Accessibility } from 'lucide-react';

export default function Amenities() {
  const amenitiesList = [
    { icon: <Car size={28} strokeWidth={1.5} />, title: "Free Parking", desc: "Secure on-site free parking available for guests.", delayClass: "delay-100" },
    { icon: <Wind size={28} strokeWidth={1.5} />, title: "Air Conditioning", desc: "Cool and comfortable AC rooms.", delayClass: "delay-200" },
    { icon: <Wifi size={28} strokeWidth={1.5} />, title: "Free Wi-Fi", desc: "High-speed internet access throughout the property.", delayClass: "delay-300" },
    { icon: <Coffee size={28} strokeWidth={1.5} />, title: "Breakfast Available", desc: "Start your day with a delicious breakfast (extra charge).", delayClass: "delay-400" },
    { icon: <Bell size={28} strokeWidth={1.5} />, title: "24-hour Front Desk", desc: "Round-the-clock room service and assistance.", delayClass: "delay-500" },
    { icon: <Accessibility size={28} strokeWidth={1.5} />, title: "Wheelchair Accessible", desc: "Designed to be accessible and comfortable for everyone.", delayClass: "delay-600" },
  ];

  return (
    <section id="amenities" className="py-24 bg-ivory-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="lg:w-1/3 pt-4 animate-on-scroll animate-fade-up">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold-500 font-bold mb-4 block">Our Offerings</span>
            <h2 className="text-4xl font-serif text-charcoal-900 mb-6">Hotel Amenities</h2>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed font-light">
              We ensure a comfortable and spiritually enriching stay by providing all essential modern amenities paired with traditional hospitality.
            </p>
            <div className="hidden lg:block w-full h-[1px] bg-gold-500/30"></div>
          </div>
          
          <div className="lg:w-2/3 bg-ivory-100 border border-gold-500/20 p-8 md:p-12 w-full animate-on-scroll animate-fade-in">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold-500 font-bold mb-8 block">Our Amenities</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
              {amenitiesList.map((item, idx) => (
                <div 
                  key={idx}
                  className={`flex items-start gap-4 group animate-on-scroll animate-fade-scale ${item.delayClass}`}
                >
                  <div className="w-8 h-8 shrink-0 flex items-center justify-center border border-gold-500 text-maroon-800 bg-white group-hover:bg-maroon-800 group-hover:text-ivory-100 group-hover:scale-110 transition-all duration-300">
                    <div className="scale-75">{item.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-serif text-sm font-semibold text-charcoal-900 mb-1 group-hover:text-maroon-800 transition-colors">{item.title}</h3>
                    <p className="text-[11px] text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
