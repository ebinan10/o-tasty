import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import specialMenu from "../../data/specialMenu";
import MenuCard from "./MenuCard";
import CategoryFilter from "./CategoryFilter";

const SpecialMenu = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMenu = useMemo(() => {
    if (activeCategory === "All") return specialMenu;

    return specialMenu.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section className="py-28 bg-[#0D0D0D]">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="uppercase tracking-[6px] text-[#D4AF37] font-semibold">
            Our Special Menu
          </span>

          <h2 className="text-5xl font-black text-white mt-4">
            Discover Our Signature Dishes
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-8">
            From traditional Nigerian classics to chef-inspired specialties,
            every dish is carefully crafted with fresh ingredients and authentic
            flavors to deliver an unforgettable dining experience.
          </p>
        </motion.div>

        <CategoryFilter
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Menu Grid */}

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"
        >
          {filteredMenu.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
            />
          ))}
        </motion.div>

      </div>

    </section>
  );
};

export default SpecialMenu;