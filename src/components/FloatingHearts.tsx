import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const Heart = ({ delay, duration, size, left }: { delay: number; duration: number; size: number; left: number }) => {
  return (
    <motion.div
      initial={{ y: '100vh', opacity: 0, scale: 0 }}
      animate={{
        y: '-10vh',
        opacity: [0, 1, 1, 0],
        scale: [0, size, size, size],
        x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: 'linear',
      }}
      className="absolute text-rose-400/30 pointer-events-none z-0"
      style={{ left: `${left}%` }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
      </svg>
    </motion.div>
  );
};

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Array<{ id: number; delay: number; duration: number; size: number; left: number }>>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 10,
      duration: 10 + Math.random() * 10,
      size: 0.5 + Math.random() * 1.5,
      left: Math.random() * 100,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {hearts.map((heart) => (
        <Heart key={heart.id} {...heart} />
      ))}
    </div>
  );
}
