import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 bg-[#0D0D0D] z-[9999] flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: .8 }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: .8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl font-black text-white"
          >
            O<span className="text-orange-500">TASTY</span>
          </motion.h1>

          <p className="text-gray-400 mt-4">
            Restaurant & Bar
          </p>

          <div className="flex gap-3 mt-12">

            {[1,2,3].map((dot)=>(
              <motion.div
                key={dot}
                animate={{
                  y:[0,-10,0]
                }}
                transition={{
                  repeat:Infinity,
                  delay:dot*.2
                }}
                className="w-4 h-4 rounded-full bg-orange-500"
              />
            ))}

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;