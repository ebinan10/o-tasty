import { motion } from "framer-motion";

export default function FloatingCard({
  icon,
  title,
  subtitle,
  className = "",
}) {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-5 py-4 shadow-2xl ${className}`}
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white text-xl">
          {icon}
        </div>

        <div>
          <h4 className="text-white font-semibold">{title}</h4>
          <p className="text-gray-300 text-sm">{subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
}