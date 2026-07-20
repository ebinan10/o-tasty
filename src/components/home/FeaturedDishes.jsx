import { motion } from "framer-motion";
import { FaArrowRight, FaStar } from "react-icons/fa";
import dishes from "../../data/featuredDishes";

export default function FeaturedDishes() {
  return (
    <section className="relative w-full flex justify-center p-[100px] bg-[#0D0D0D] py-28">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className=" h-[40vh] flex lg:items-start items-center justify-center flex-col gap-4 text-center mb-20">

          <span className="flex items-center justify-center h-[50px] w-[260px] rounded-full border border-orange-500 bg-orange-500/10 px-6 py-2 text-sm uppercase tracking-widest text-orange-400">
            Signature Collection
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-white">
            Featured Dishes
          </h2>

          <h2 className=" lg:w-full w-4/5 flex items-start   text-lg text-gray-400">
            Experience the authentic flavours of Nigeria with our most
            loved meals prepared by expert chefs.
          </h2>

        </div>

        {/* Cards */}

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">

          {dishes.map((dish, index) => (

            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .15
              }}
              className="group w-full overflow-hidden flex flex-col items-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-orange-500 transition-all duration-500"
            >

              {/* Image */}

              <div className="relative w-full overflow-hidden ">

                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <span className="absolute h-[40px] w-[95px] flex items-center justify-center top-4 left-4 rounded-full bg-orange-500 px-4 py-2 text-xs font-bold uppercase text-white">
                  {dish.category}
                </span>

              </div>

              {/* Content */}

              <div className="p-6 h-[30vh] flex flex-col justify-center w-4/5 gap-1">

                <div className="flex h-[80px] items-center gap-2 text-yellow-400">

                  <FaStar />

                  <span>{dish.rating}</span>

                </div>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  {dish.name}
                </h3>

                <p className="mt-3 text-gray-400">
                  {dish.description}
                </p>

                <div className="w-full h-[100px] mt-6 flex justify-center items-start">

                <div className="w-full  flex  items-center justify-between ">
                  <span className="text-2xl font-black text-orange-500">
                    {dish.price}
                  </span>

                  <button className="rounded-full flex items-center justify-center w-[35px] h-[35px] bg-gradient-to-r from-orange-500 to-red-600 p-4 text-white transition hover:scale-110">
                    <FaArrowRight />
                  </button>
                </div>
                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Button */}

        <div className="mt-16 h-[20vh] flex items-center justify-center text-center">

          <button className="rounded-full h-[50px] w-[160px] bg-gradient-to-r from-orange-500 to-red-600 px-10 py-4 font-semibold text-white transition hover:scale-105">
            View Full Menu
          </button>

        </div>

      </div>

    </section>
  );
}