import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const ChefCard = ({ chef, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * .15 }}
      whileHover={{ y: -12 }}
      className="group rounded-[30px] overflow-hidden bg-[#171717] border border-white/10 hover:border-orange-500/60 transition-all duration-500 shadow-xl"
    >
      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={chef.image}
          alt={chef.name}
          className="w-full h-[430px] object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Position */}

        <span className="absolute top-5 left-5 bg-orange-500 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-lg">
          {chef.position}
        </span>

        {/* Social */}

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition duration-500">

          <button className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md hover:bg-orange-500 text-white transition">
            <FaFacebookF />
          </button>

          <button className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md hover:bg-orange-500 text-white transition">
            <FaInstagram />
          </button>

          <button className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md hover:bg-orange-500 text-white transition">
            <FaXTwitter />
          </button>

        </div>

      </div>

      {/* Content */}

      <div className="p-7">

        <h3 className="text-2xl font-bold text-white">
          {chef.name}
        </h3>

        <p className="text-orange-400 mt-2">
          {chef.specialty}
        </p>

        <div className="inline-flex items-center gap-2 mt-5 bg-orange-500/10 text-orange-400 px-4 py-2 rounded-full">

          <span>⭐</span>

          <span className="text-sm">
            {chef.experience}
          </span>

        </div>

        <div className="w-full h-px bg-white/10 my-6" />

        <p className="text-gray-400 leading-7">
          {chef.bio}
        </p>

        <button className="mt-7 text-orange-500 font-semibold hover:text-orange-400 transition flex items-center gap-2">
          View Profile
          <span>→</span>
        </button>

      </div>

    </motion.div>
  );
};

export default ChefCard;