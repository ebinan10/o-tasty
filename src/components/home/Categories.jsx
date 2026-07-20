import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaUtensils,
} from "react-icons/fa";
import categories from "../../data/categories";

const Categories = () => {
  return (
    <section className="py-24 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[6px] text-red-600 font-semibold">
            Our Menu
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
            Explore Nigerian Delicacies
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-gray-600 text-lg leading-8">
            Carefully prepared Nigerian meals using fresh ingredients,
            authentic recipes, and unforgettable flavors.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {categories.map((category, index) => (

            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl duration-500"
            >

              {/* Image */}
              <div className="relative overflow-hidden h-72">

                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <span className="absolute top-5 left-5 bg-red-600 text-white text-sm px-4 py-2 rounded-full">
                  {category.meals}
                </span>

              </div>

              {/* Content */}
              <div className="p-8">

                <div className="flex items-center gap-3 mb-4">

                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">

                    <FaUtensils className="text-red-600" />

                  </div>

                  <h3 className="text-2xl font-bold text-gray-900">
                    {category.title}
                  </h3>

                </div>

                <p className="text-gray-600 leading-7 mb-8">
                  {category.description}
                </p>

                <Link
                  to="/menu"
                  className="inline-flex items-center gap-3 font-semibold text-red-600 hover:text-red-700"
                >
                  Explore Menu

                  <FaArrowRight className="group-hover:translate-x-2 duration-300" />

                </Link>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Categories;