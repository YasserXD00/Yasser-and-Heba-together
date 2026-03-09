import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mb-6"
      >
        <div className="inline-flex items-center justify-center p-3 bg-rose-100 rounded-full mb-8 shadow-sm">
          <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
        </div>
        <h2 className="text-rose-500 font-medium tracking-widest uppercase text-sm mb-4">Happy 1 Month Anniversary</h2>
        <h1 className="text-6xl md:text-8xl font-serif text-rose-950 mb-6">
          Yasser <span className="text-rose-400 italic font-light">&</span> Heba
        </h1>
        <p className="text-lg md:text-xl text-rose-800/80 max-w-xl mx-auto font-light leading-relaxed">
          One month down, a lifetime of beautiful moments to go. Every day with you is a celebration.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-px h-16 bg-gradient-to-b from-rose-400 to-transparent mx-auto"></div>
      </motion.div>
    </section>
  );
}
