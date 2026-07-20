import { motion } from "framer-motion";
import { FaStar, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import popularMeals from "../../data/popularMeals";

const PopularMeals = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[6px] text-red-600 font-semibold">
            Customer Favorites
          </span>

          <h2 className="text-5xl font-extrabold mt-4 text-gray-900">
            Popular Nigerian Dishes
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-8">
            Discover our most-loved meals, freshly prepared by our experienced chefs
            using authentic Nigerian recipes.
          </p>
        </motion.div>

        {/* Meals */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {popularMeals.map((meal, index) => (

            <motion.div
              key={meal.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .1
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl duration-500 group"
            >

              <div className="overflow-hidden h-72">

                <img
                  src={meal.image}
                  alt={meal.name}
                  className="w-full h-full object-cover group-hover:scale-110 duration-700"
                />

              </div>

              <div className="p-8">

                <div className="flex justify-between items-center mb-3">

                  <span className="text-red-600 text-sm font-semibold uppercase">
                    {meal.category}
                  </span>

                  <span className="flex items-center gap-1 text-yellow-500">
                    <FaStar />
                    {meal.rating}
                  </span>

                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {meal.name}
                </h3>

                <p className="text-gray-600 leading-7 mb-6">
                  {meal.description}
                </p>

                <div className="flex justify-between items-center">

                  <h4 className="text-3xl font-bold text-red-600">
                    {meal.price}
                  </h4>

                  <Link
                    to="/menu"
                    className="flex items-center gap-2 text-red-600 font-semibold hover:text-red-700"
                  >
                    View Menu
                    <FaArrowRight />
                  </Link>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default PopularMeals;