import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaAward, FaUtensils } from "react-icons/fa";

const FeaturedChef = ({ chef }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}
      className="group relative overflow-hidden rounded-[35px]
                 bg-[#171717] h-[130vh] lg:h-[70vh]
                 border border-white/10
                 hover:border-orange-500/60
                 shadow-2xl flex flex-col justify-between"
    >
      <div className="grid lg:grid-cols-2">

        {/* IMAGE */}

        <div className="relative overflow-hidden">

          <img
            src={chef.image}
            alt={chef.name}
            className="h-[650px] w-full object-cover transition duration-700 group-hover:scale-105"
          />

          {/* Overlay */}

          <div className="absolute  inset-0 bg-gradient-to-t from-black/60  via-transparent to-transparent" />

          {/* Position */}

          <span
            className="
            absolute
            top-8
            left-8
            bg-orange-500
            text-white
            px-6
            w-40
            h-10
            flex items-center justify-center
            py-3
            rounded-full
            font-bold
            shadow-xl
          "
          >
            {chef.position}
          </span>
        </div>

        {/* CONTENT */}


        <div className="w-full flex justify-center items-center  lg:h-[65vh] h-[65vh] ">
        <div className="w-[90%] flex flex-col justify-evenly lg:h-[55vh] h-[45vh] p-10 lg:p-16">

          <span className="uppercase tracking-[5px] text-orange-500">
            Meet Our Head Chef
          </span>

          <h2 className="text-5xl font-bold text-white mt-5">
            {chef.name}
          </h2>

          <div className="flex items-center gap-5 mt-8 flex-wrap">

            <div
              className="
              flex
              items-center
              gap-2
              bg-orange-500/10
              px-5
              py-3
              rounded-full
              text-orange-400
            "
            >
              ⭐⭐⭐⭐⭐
            </div>

            <div
              className="
              flex
              items-center
              gap-2
              bg-white/5
              px-5
              py-3
              rounded-full
              text-white
            "
            >
              <FaAward />

              {chef.experience}
            </div>

          </div>

          <div className="flex items-center gap-3 mt-8">

            <FaUtensils className="text-orange-500 text-xl" />

            <span className="text-orange-400 text-xl font-medium">
              {chef.specialty}
            </span>

          </div>

          <p className="text-gray-300 leading-9 mt-8 text-lg">
            {chef.bio}
          </p>

          <div className="w-45 h-1 bg-orange-500 rounded-full mt-10" />

          <div className="flex gap-4 mt-10">

            <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center transition">
              <FaFacebookF className="mx-auto text-white" />
            </button>

            <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center transition">
              <FaInstagram className="mx-auto text-white" />
            </button>

            <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center transition">
              <FaXTwitter className="mx-auto text-white" />
            </button>

          </div>

          <button
            className="
            mt-12
            w-fit
            bg-orange-500
            hover:bg-orange-600
            px-8
            py-4
            rounded-full
            font-semibold
            text-white
            transition
          "
          >

          </button>

        </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedChef;