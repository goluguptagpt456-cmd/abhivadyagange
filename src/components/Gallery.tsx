import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const galleryImages = [
  "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&q=80&w=800", // Room 1
  "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=800", // Room 2
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800", // Bed Detail
  "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800", // Reception/Lobby
  "https://images.unsplash.com/photo-1707343843982-f8270f130d22?auto=format&fit=crop&q=80&w=800", // Varanasi Ghats
  "https://images.unsplash.com/photo-1627894483161-1c390500d075?auto=format&fit=crop&q=80&w=800", // Washroom
];

const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500', 'delay-600'];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-charcoal-900 text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 animate-on-scroll animate-fade-in">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold-500 font-bold mb-4 block">Take A Look</span>
            <h2 className="text-4xl font-serif">Photo Gallery</h2>
          </div>
          <div className="hidden md:block w-32 h-[1px] bg-gold-500/50 mb-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {galleryImages.map((src, index) => (
            <div 
              key={index}
              className={`aspect-square overflow-hidden cursor-pointer relative group border border-transparent hover:border-gold-500/50 transition-colors animate-on-scroll animate-fade-scale ${delays[index]}`}
              onClick={() => setSelectedImg(src)}
            >
              <div className="absolute inset-0 bg-charcoal-900/40 group-hover:bg-transparent transition-colors z-10"></div>
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out grayscale-[30%] group-hover:grayscale-0"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal-900/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={selectedImg} 
              alt="Enlarged view" 
              className="max-w-full max-h-full object-contain shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
