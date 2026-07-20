import { motion } from "framer-motion";

const sparkles = [
  { top: "8%", left: "10%", size: 4, delay: 0 },
  { top: "18%", left: "82%", size: 5, delay: 1 },
  { top: "30%", left: "45%", size: 3, delay: 2 },
  { top: "42%", left: "90%", size: 4, delay: 1.5 },
  { top: "55%", left: "15%", size: 5, delay: 0.5 },
  { top: "70%", left: "75%", size: 3, delay: 2.5 },
  { top: "85%", left: "55%", size: 4, delay: 1.8 },
  { top: "92%", left: "25%", size: 3, delay: 3 },
];

export default function GoldenSparkles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {sparkles.map((sparkle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-yellow-300"
          style={{
            top: sparkle.top,
            left: sparkle.left,
            width: sparkle.size,
            height: sparkle.size,
            boxShadow: "0 0 12px rgba(255,215,0,.9)",
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: sparkle.delay,
          }}
        />
      ))}
  <div className="absolute top-20 left-32 w-52 h-52 rounded-full bg-yellow-400/5 blur-[120px]" />

  <div className="absolute bottom-32 right-24 w-72 h-72 rounded-full bg-orange-500/5 blur-[140px]" />
    </div>

  );
}