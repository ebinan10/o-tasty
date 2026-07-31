import { motion } from "framer-motion";

const categories = [
  "All",
  "Rice",
  "Soup",
  "Grill",
  "Drink",
];

const CategoryFilter = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-14">
      {categories.map((category) => (
        <motion.button
          key={category}
          whileTap={{ scale: 0.95 }}
          whileHover={{ y: -3 }}
          onClick={() => setActiveCategory(category)}
          className={`px-6 py-3 h-[50px] w-[100Px] flex items-center justify-center rounded-full font-semibold transition-all duration-300 border

          ${
            activeCategory === category
              ? "bg-[#D4AF37] text-black border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.45)]"
              : "bg-[#1A1A1A] text-white border-gray-700 hover:border-[#D4AF37] hover:text-[#D4AF37]"
          }`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryFilter;