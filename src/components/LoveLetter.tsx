import { motion } from 'motion/react';
import { Quote, Heart } from 'lucide-react';

export default function LoveLetter() {
  return (
    <section className="py-24 px-4 bg-rose-50 relative z-10">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-10 md:p-16 rounded-[2rem] shadow-xl shadow-rose-100/50 relative"
        >
          <Quote className="absolute top-8 left-8 w-12 h-12 text-rose-100 rotate-180" />
          <Quote className="absolute bottom-8 right-8 w-12 h-12 text-rose-100" />
          
          <h2 className="text-3xl font-serif text-rose-950 mb-8">My wife Heba,</h2>
          
          <div className="space-y-6 text-rose-800/80 font-light leading-relaxed text-lg">
            <p>
              It's hard to believe it's only been a month, because it feels like I've known you for a lifetime. Your presence is so incredibly heartwarming. Just having you around improves my mood instantly and makes me a better person every single day.
            </p>
            <p>
              I am absolutely obsessed with everything about you. I love how you smile, how you laugh, how you act crazy, and just how effortlessly funny you are. I love the way you hold my hands, and the gentle way you touch my hair.
            </p>
            <p>
              And your body... it is absolutely perfect. Every single inch of you is for me to admire, to touch. You are flawlessly beautiful inside and out.
            </p>
            <p>
              This is just the beginning of our beautiful journey. We are going to get married, and we are going to make kids together that will be just as pretty as you are. I can't wait for our future together.
            </p>
          </div>

          <div className="text-rose-500 font-bold text-2xl md:text-3xl my-10 space-y-4 flex flex-col items-center">
            <p className="flex items-center gap-2">I LOVE YOUUUUUUUU <Heart className="w-8 h-8 fill-rose-500 text-rose-500 animate-pulse" /></p>
            <p className="flex items-center gap-2">I LOVE YOUUUUUUUU <Heart className="w-10 h-10 fill-rose-500 text-rose-500 animate-pulse delay-75" /></p>
            <p className="flex items-center gap-2">I LOVE YOUUUUUUUU <Heart className="w-12 h-12 fill-rose-500 text-rose-500 animate-pulse delay-150" /></p>
          </div>
          
          <div className="mt-12 pt-12 border-t border-rose-100 flex flex-col items-center">
            <p className="text-rose-500 font-serif italic text-2xl mb-8">Forever yours and you're forever mine,</p>
            
            <div className="relative flex items-center justify-center py-8 w-full max-w-md mx-auto">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Heart className="w-48 h-48 fill-rose-50 text-rose-100" />
              </div>
              <div className="flex items-center justify-center w-full z-10">
                <span className="text-rose-950 font-serif text-3xl md:text-4xl flex-1 text-right">Yasser</span>
                <div className="flex items-center px-2 md:px-4">
                  <div className="w-4 md:w-8 h-px bg-rose-300"></div>
                  <Heart className="w-5 h-5 md:w-6 md:h-6 text-rose-500 fill-rose-500 mx-1 md:mx-2 animate-pulse" />
                  <div className="w-4 md:w-8 h-px bg-rose-300"></div>
                </div>
                <span className="text-rose-950 font-serif text-3xl md:text-4xl flex-1 text-left">Heba</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
