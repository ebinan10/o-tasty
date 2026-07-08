import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import categories from "../../data/categories";

const Categories = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold uppercase tracking-wider">
            Our Collection
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-800">
            Shop by Category
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Browse our carefully selected baby nutrition categories designed to
            support your little one's healthy development.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-2xl transition"
            >
              <div className="overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {category.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {category.description}
                </p>

                <Link
                  to="/products"
                  className="mt-6 inline-flex items-center rounded-full bg-orange-500 px-5 py-3 text-white font-medium transition hover:bg-orange-600"
                >
                  Explore
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