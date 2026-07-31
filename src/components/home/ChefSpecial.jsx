import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import specialImage from "../../assets/images/menu/chef-special.png";

const ChefSpecial = () => {
  return (
    <section className="py-24 bg-[#121212] flex item-center justify-center w-full overflow-hidden">
      <div className=" w-full max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 w-full items-center">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="lg:h-[75vh] h-[60vh] w-full flex flex-col items-center justify-center"
          >
            <div className="w-[90%] h-full flex flex-col items-start justify-evenly">
            <span className="uppercase tracking-[6px] text-[#F4A261] font-semibold">
              Chef's Special
            </span>

            <h2 className="text-5xl font-black text-white mt-6 leading-tight">
              The Taste of
              <span className="text-red-500">
                {" "}Authentic Nigeria
              </span>
            </h2>

            <p className="text-gray-300 text-justify leading-8 mt-8">
              Experience our signature Smoky Party Jollof Rice,
              prepared with carefully selected ingredients,
              slow-cooked to perfection and served with grilled
              chicken, fried plantain, fresh salad, and our
              famous homemade pepper sauce.
            </p>

            <div className="space-y-5 mt-10 mb-[40px]">

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
              className="h-[50px] w-[200px] inline-flex justify-center items-center gap-3 mt-12 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition"
            >
              View Full Menu
              <FaArrowRight />
            </Link>
            </div>
          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="relative lg:h-[60vh] "
          >

            <img
              src={specialImage}
              alt="Chef's Special"
              className="rounded-[40px] shadow-2xl h-full"
            />

            <div className="h-[100px] w-[170px] flex flex-col items-center justify-center absolute bottom-1/10 lg:-left-8 left-1/10 bg-white rounded-3xl p-6 shadow-2xl">
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