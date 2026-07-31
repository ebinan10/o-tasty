import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";

const GalleryCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={`group relative overflow-hidden rounded-3xl cursor-pointer ${item.rowSpan}`}
    >
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center">

        <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center mb-4">
          <FaPlus className="text-white" />
        </div>

        <h3 className="text-white text-xl font-semibold">
          {item.title}
        </h3>

      </div>

    </motion.div>
  );
};

export default GalleryCard;