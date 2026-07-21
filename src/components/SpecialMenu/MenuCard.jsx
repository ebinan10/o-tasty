import { motion } from "framer-motion";
import { FaStar, FaArrowRight } from "react-icons/fa";

const MenuCard = ({ item }) => {
  return (
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ duration: 0.3 }}
      className="group bg-[#161616] rounded-3xl overflow-hidden border border-gray-800 hover:border-[#D4AF37] duration-300 shadow-xl"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-72 object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Category */}
        <span className="absolute top-5 left-5 bg-[#D4AF37] text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
          {item.category}
        </span>

        {/* Rating */}
        <div className="absolute top-5 right-5 flex items-center gap-2 bg-black/70 px-3 py-2 rounded-full backdrop-blur-sm">
          <FaStar className="text-yellow-400" />
          <span className="text-white font-semibold">
            {item.rating}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-7">

        <h3 className="text-white text-2xl font-bold mb-3">
          {item.name}
        </h3>

        <p className="text-gray-400 leading-7 mb-6">
          {item.description}
        </p>

        <div className="flex items-center justify-between">

          <h2 className="text-[#D4AF37] text-3xl font-black">
            {item.price}
          </h2>

          <motion.button
            whileHover={{ x: 6 }}
            className="flex items-center gap-2 text-white font-semibold hover:text-[#D4AF37] duration-300"
          >
            View Details
            <FaArrowRight />
          </motion.button>

        </div>

      </div>
    </motion.div>
  );
};

export default MenuCard;