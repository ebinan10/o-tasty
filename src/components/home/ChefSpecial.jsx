import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import specialImage from "../../assets/images/meals/chef-special.jpg";

const ChefSpecial = () => {
  return (
    <section className="py-24 bg-[#121212] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <span className="uppercase tracking-[6px] text-[#F4A261] font-semibold">
              Chef's Special
            </span>

            <h2 className="text-5xl font-black text-white mt-6 leading-tight">
              The Taste of
              <span className="text-red-500">
                {" "}Authentic Nigeria
              </span>
            </h2>

            <p className="text-gray-300 leading-8 mt-8">
              Experience our signature Smoky Party Jollof Rice,
              prepared with carefully selected ingredients,
              slow-cooked to perfection and served with grilled
              chicken, fried plantain, fresh salad, and our
              famous homemade pepper sauce.
            </p>

            <div className="space-y-5 mt-10">

              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-[#F4A261]" />
                <span className="text-white">
                  Premium Fresh Ingredients
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-[#F4A261]" />
                <span className="text-white">
                  Prepared Fresh Daily
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-[#F4A261]" />
                <span className="text-white">
                  Authentic Nigerian Recipes
                </span>
              </div>

            </div>

            <Link
              to="/menu"
              className="inline-flex items-center gap-3 mt-12 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition"
            >
              View Full Menu
              <FaArrowRight />
            </Link>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="relative"
          >

            <img
              src={specialImage}
              alt="Chef's Special"
              className="rounded-[40px] shadow-2xl"
            />

            <div className="absolute -bottom-8 -left-8 bg-white rounded-3xl p-6 shadow-2xl">
              <h3 className="text-red-600 text-4xl font-black">
                ₦5,500
              </h3>

              <p className="text-gray-600 mt-2">
                Signature Meal
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ChefSpecial;