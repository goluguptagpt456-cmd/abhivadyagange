import { Users, Wind, Check, BedDouble } from 'lucide-react';

const rooms = [
  {
    id: 'standard',
    name: 'Standard Room',
    price: 'Contact Us',
    capacity: '2 Persons',
    features: ['Air Conditioned', 'Free Wi-Fi', 'Breakfast Optional', 'Attached Washroom'],
    highlight: false,
    delayClass: 'delay-100'
  },
  {
    id: 'family',
    name: 'Family Room',
    price: 'Contact Us',
    capacity: '3-4 Persons',
    features: ['Extra Space', 'Air Conditioned', 'Free Wi-Fi', 'Breakfast Optional'],
    highlight: true,
    delayClass: 'delay-200'
  },
  {
    id: 'group',
    name: 'Group Room',
    price: 'Contact Us',
    capacity: '5+ Persons',
    features: ['Multiple Beds', 'Air Conditioned', 'Attached Washroom', 'Free Wi-Fi'],
    highlight: false,
    delayClass: 'delay-300'
  },
  {
    id: 'luxury',
    name: 'Luxury Room',
    price: 'Contact Us',
    capacity: '2-3 Persons',
    features: ['Premium Bedding', 'Air Conditioned', 'Premium Amenities', 'Free Wi-Fi'],
    highlight: false,
    delayClass: 'delay-400'
  }
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-24 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 animate-on-scroll animate-fade-in">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold-500 font-bold mb-2 block">Select Your Sanctuary</span>
          <h2 className="text-4xl font-serif text-maroon-800 mb-4">Rooms & Pricing</h2>
          <p className="text-sm text-gray-600 font-light">Starting from <span className="font-semibold text-charcoal-900">₹1,721/night</span><br/><span className="text-xs">Rates vary by room type and dates — contact us for best deals.</span></p>
          <div className="mt-6 w-16 h-[1px] bg-gold-500/50 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.map((room) => (
            <div
              key={room.id}
              className={`animate-on-scroll animate-fade-up ${room.delayClass} ${
                room.highlight ? 'border-maroon-800 bg-maroon-800 text-ivory-100' : 'border border-gold-500/20 bg-white hover:border-maroon-800 hover:shadow-lg text-charcoal-900 hover:-translate-y-1'
              } p-6 transition-all duration-300 cursor-pointer group flex flex-col`}
            >
              <div className="flex-grow">
                <div className="flex justify-between items-center mb-2">
                  <h3 className={`text-sm group-hover:text-gold-500 transition-colors ${room.highlight ? 'italic' : ''}`}>{room.name}</h3>
                  <span className={`${room.highlight ? 'text-gold-500' : 'text-maroon-800'} font-semibold text-sm font-serif`}>{room.price !== 'Contact Us' && '₹'}{room.price}</span>
                </div>
                
                <p className={`text-[10px] ${room.highlight ? 'text-gray-300' : 'text-gray-500'} mb-6`}>
                  {room.features.join(' • ')}
                </p>
                
                <div className={`w-full h-[1px] ${room.highlight ? 'bg-white/10' : 'bg-charcoal-800/5'} mb-6`}></div>
              </div>

              <div className="mt-auto pt-4">
                <a 
                  href={`#contact?room=${room.id}`}
                  className={`block w-full text-left text-[9px] uppercase tracking-widest font-bold transition-colors ${
                    room.highlight 
                      ? 'text-gold-500 hover:text-white' 
                      : 'text-gold-500 group-hover:text-maroon-800'
                  }`}
                >
                  {room.highlight ? 'Popular Choice →' : 'Book This Room →'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
