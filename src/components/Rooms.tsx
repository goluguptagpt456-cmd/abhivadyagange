import { Users, Wind, Check, BedDouble, Phone } from 'lucide-react';

const rooms = [
  {
    id: 'standard',
    name: 'Standard Room',
    price: '1,200',
    capacity: '2 Persons',
    imagePath: '/1200.jpg',
    features: ['AC', 'Free Wi-Fi', 'Breakfast Optional', 'Clean Linen'],
    delayClass: 'delay-100'
  },
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    price: '2,000',
    capacity: '4-5 Persons',
    imagePath: '/2000.jpg',
    features: ['AC', 'Free Wi-Fi', 'Family-friendly', 'Breakfast Optional'],
    delayClass: 'delay-200'
  },
  {
    id: 'group',
    name: 'Group/Family Suite',
    price: '2,500',
    capacity: '6-8 Persons',
    imagePath: '/2500.jpg',
    features: ['AC', 'Free Wi-Fi', 'Attached Washroom', 'Clean Linen'],
    delayClass: 'delay-300'
  },
  {
    id: 'premium',
    name: 'Premium Room',
    price: '1,800',
    capacity: '2-3 Persons',
    imagePath: '/1800.jpg',
    features: ['AC', 'Free Wi-Fi', 'Modern Furnishing', 'Premium Amenities'],
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
          <div className="mt-6 w-16 h-[1px] bg-gold-500/50 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.map((room) => (
            <div
              key={room.id}
              className={`animate-on-scroll animate-fade-up ${room.delayClass} border border-gold-500/20 bg-white hover:border-maroon-800 hover:shadow-lg text-charcoal-900 hover:-translate-y-1 transition-all duration-300 group flex flex-col overflow-hidden`}
            >
              <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">
                {/* CLIENT: replace with actual room photo */}
                <img 
                  src={room.imagePath} 
                  alt={room.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = `https://placehold.co/600x450/2A2522/F1EFE7?text=${room.name.replace(/\s+/g, '+')}`; }}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-maroon-800 flex items-center gap-1.5 shadow-sm">
                  <Users size={12} />
                  {room.capacity}
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="mb-4">
                  <h3 className="text-lg font-serif group-hover:text-gold-500 transition-colors mb-1">{room.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-serif font-bold text-gold-500">₹{room.price}</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest">/ night</span>
                  </div>
                </div>
                
                <ul className="text-[11px] text-gray-600 space-y-2 mb-8 flex-grow">
                  {room.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check size={12} className="text-gold-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <a 
                    href="tel:+919129244828"
                    className="flex items-center justify-center gap-2 w-full bg-charcoal-900 hover:bg-maroon-800 text-gold-500 hover:text-white py-3 px-4 text-[10px] uppercase tracking-widest font-bold transition-all duration-300"
                  >
                    <Phone size={14} />
                    Book This Room
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
