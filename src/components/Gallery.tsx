import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

const memories = [
  {
    title: "After Math Class",
    text: "Our very first interaction after your math class. The moment that sparked it all."
  },
  {
    title: "A Sweet Surprise",
    text: "You bringing me a gift and kissing me on my cheek. I'll never forget how special that made me feel."
  },
  {
    title: "Valentine's Day",
    text: "February 14th. Making out, deep kissing, and enjoying beautiful intimacy together at your house."
  },
  {
    title: "More Than Words",
    text: "When we started walking together and meeting up more often, moving beyond just texts and truly connecting."
  },
  {
    title: "Our First Ramadan",
    text: "Sharing our first Iftar together, followed by a beautiful night walk where we just talked about life."
  },
  {
    title: "Looking Forward",
    text: "Right now. Seeing how much stronger our bond is getting every day, and dreaming of a beautiful future together."
  }
];

export default function Gallery() {
  return (
    <section className="py-24 px-4 bg-white relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-rose-950 mb-4">Moments to Remember</h2>
          <p className="text-rose-700/70">The beautiful memories we've created so far.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-rose-50/50 border border-rose-100 p-8 rounded-3xl shadow-sm hover:shadow-md hover:bg-rose-50 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center mb-6 text-rose-400 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <h3 className="text-xl font-serif text-rose-900 mb-4">{memory.title}</h3>
              <p className="text-rose-700/80 leading-relaxed font-light">
                {memory.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
