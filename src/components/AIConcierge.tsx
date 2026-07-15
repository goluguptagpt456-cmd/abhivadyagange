import { useState, useRef, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, Map, Image as ImageIcon } from 'lucide-react';

type Message = {
  role: 'user' | 'assistant';
  text: string;
  links?: { uri: string; title: string }[];
};

export default function AIConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: 'Namaste! I am the Abhivadya Gange Concierge. How can I assist you with your trip to Varanasi today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const res = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userMessage })
      });
      
      if (res.ok) {
        const data = await res.json();
        setMessages(prev => [...prev, { role: 'assistant', text: data.text, links: data.links }]);
      } else if (res.status === 429) {
        setMessages(prev => [...prev, { role: 'assistant', text: "I'm receiving too many requests right now. Please call us at +91 91292 44828 for immediate assistance!" }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', text: "I'm having trouble connecting right now. Please try calling us instead!" }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', text: "An error occurred. Please contact reception." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-charcoal-900 text-gold-500 border border-gold-500/30 shadow-2xl flex items-center justify-center hover:bg-maroon-800 hover:scale-105 transition-all z-40 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Open AI Concierge"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 w-full max-w-sm h-[500px] max-h-[80vh] bg-ivory-100 shadow-2xl z-50 flex flex-col border border-gold-500/50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-charcoal-900 p-4 flex justify-between items-center text-white border-b border-gold-500/30">
              <div className="flex items-center gap-2">
                <Bot size={20} className="text-gold-500" />
                <span className="font-serif font-medium tracking-wide">Kashi Guide AI</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Features hint */}
            <div className="bg-charcoal-900 px-4 py-2 flex items-center justify-center gap-4 text-[10px] uppercase tracking-widest text-gold-500/80 border-b border-gold-500/20">
              <span className="flex items-center gap-1"><Bot size={12}/> AI Powered</span>
              <span className="flex items-center gap-1"><Map size={12}/> Live Maps</span>
              <span className="flex items-center gap-1"><ImageIcon size={12}/> Gallery</span>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-ivory-200">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 text-sm ${msg.role === 'user' ? 'bg-maroon-800 text-ivory-100 border border-transparent' : 'bg-white border border-gold-500/20 text-charcoal-900'}`}>
                    <p className="leading-relaxed whitespace-pre-wrap font-light">{msg.text}</p>
                    
                    {/* Render Grounding Links if available */}
                    {msg.links && msg.links.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-gold-500/20">
                        <p className="text-[9px] uppercase tracking-widest text-gold-500 font-bold mb-2">Sources</p>
                        <ul className="space-y-1">
                          {msg.links.map((link, lIdx) => (
                            <li key={lIdx}>
                              <a href={link.uri} target="_blank" rel="noreferrer" className="text-[11px] text-maroon-800 hover:text-charcoal-900 hover:underline line-clamp-1 transition-colors">
                                {link.title || link.uri}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gold-500/20 p-4 flex gap-1">
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-gold-500/40 rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-gold-500/70 rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gold-500/20">
              <form onSubmit={handleSubmit} className="flex items-center gap-3 relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Varanasi..."
                  className="flex-1 bg-ivory-200 border border-gold-500/20 focus:border-maroon-800 px-4 py-3 text-sm outline-none transition-colors rounded-none placeholder-gray-400 font-light"
                />
                <button 
                  type="submit" 
                  disabled={!input.trim() || isLoading}
                  className="w-12 h-12 flex-shrink-0 bg-maroon-800 text-gold-500 flex items-center justify-center hover:bg-charcoal-900 transition-colors disabled:opacity-50 border border-maroon-800 disabled:border-transparent"
                >
                  <Send size={18} className="ml-1" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
