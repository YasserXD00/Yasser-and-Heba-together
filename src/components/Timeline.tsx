import { motion } from 'motion/react';
import { CalendarHeart, Star, Coffee, MessageCircleHeart } from 'lucide-react';

const milestones = [
  {
    icon: <MessageCircleHeart className="w-5 h-5" />,
    title: "The First Hello",
    description: "When our story began. The moment that changed everything.",
    date: "Day 1"
  },
  {
    icon: <Coffee className="w-5 h-5" />,
    title: "First Date",
    description: "Nervous smiles, endless conversations, and the feeling of knowing.",
    date: "Week 1"
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: "Falling Fast",
    description: "Realizing that this is something incredibly special.",
    date: "Week 2"
  },
  {
    icon: <CalendarHeart className="w-5 h-5" />,
    title: "One Month",
    description: "30 days of joy, laughter, and growing closer every single day.",
    date: "Today"
  }
];

export default function Timeline() {
  return (
    <section className="py-24 px-4 bg-white/50 backdrop-blur-sm relative z-10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-rose-950 mb-4">Our First Chapter</h2>
          <p className="text-rose-700/70">A look back at our first 30 days together.</p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-rose-200 md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col md:flex-row gap-6 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
                
                {/* Icon */}
                <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-rose-100 rounded-full border-4 border-white flex items-center justify-center text-rose-500 shadow-sm md:-translate-x-1/2 z-10">
                  {milestone.icon}
                </div>

                {/* Content */}
                <div className={`pl-20 md:pl-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                }`}>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-rose-50 hover:shadow-md transition-shadow">
                    <span className="text-xs font-bold tracking-wider text-rose-400 uppercase mb-2 block">
                      {milestone.date}
                    </span>
                    <h3 className="text-xl font-serif text-rose-900 mb-2">{milestone.title}</h3>
                    <p className="text-rose-700/80 leading-relaxed text-sm">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
