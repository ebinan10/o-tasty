import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaPlay,
  FaStar,
  FaMotorcycle,
  FaUtensils,
} from "react-icons/fa";

import image from "../../assets/images/hero/hero-image.png";
import FloatingCard from "../ui/FloatingCard";

export default function Hero() {
  return (
    <section className="relative overflow-hidden ">

      {/* Background Overlay */}
      <div className="absolute flex items-center inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />

      {/* Background Glow */}
      <div className="absolute flex items-center top-30 left-20 w-72 h-96 rounded-full bg-orange-500/20 blur-[120px]" />
      <div className="absolute flex items-center bottom-20 right-20 w-96 h-96 rounded-full bg-yellow-500/10 blur-[150px]" />

      {/* Main Content */}
      <div className="relative flex items-center  mx-auto px-6 lg:px-10">

        <div className="w-full grid lg:min-h-[calc(110vh-8rem)] min-h-[150vh] justify-between items-center lg:gap-6 gap:0 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full items-center justify-center lg:min-h-screen h-[100vh] p-[20px] gap-10 top-20 flex flex-col items-center text-center lg:items-center lg:text-left"

          >
            <span className="inline-flex items-center justify-center rounded-full border border-orange-500 h-[80px] w-[280px] bg-orange-500/10 px-5 py-2 text-sm uppercase tracking-widest text-orange-400">
              Authentic Nigerian Cuisine
            </span>

            <h1 className="mt-8 lg:text-5xl text-3xl font-black leading-tight text-white lg:text-7xl">
              Experience
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Rich Taste
              </span>
              <br />
              of Nigeria
            </h1>
            <div className =" w-4/5 text-justify flex items-center justify-center">
            <p className="mt-8 p-[5px] max-w-xl text-lg leading-8 text-gray-300">
              At <span className="font-semibold text-orange-400">OTasty Restaurants & Bar</span>,
              we prepare authentic Nigerian delicacies using premium ingredients,
              exceptional recipes and unforgettable hospitality.
            </p>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-5">

              <button className="flex items-center justify-center h-[50px] w-[170px] gap-3 rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105">
                Explore Menu
                <FaArrowRight />
              </button>

              <button className="flex items-center justify-center h-[50px] w-[180px] gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20">
                <FaPlay />
                Watch Story
              </button>

            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >

            {/* Glow */}
            <div className="absolute h-[550px] w-[550px] rounded-full bg-gradient-to-r from-orange-500/30 via-yellow-500/20 to-red-500/20 blur-[120px]" />

            {/* Decorative Rings */}
            <div className="absolute h-[430px] w-[430px] rounded-full border border-orange-400/20 animate-pulse" />
            <div className="absolute h-[520px] w-[520px] rounded-full border border-yellow-400/10" />

            {/* Sparkles */}
            <div className="absolute top-16 left-20 h-2 w-2 rounded-full bg-yellow-400 animate-ping" />
            <div className="absolute right-16 top-40 h-2 w-2 rounded-full bg-white animate-pulse" />
            <div className="absolute bottom-20 left-12 h-3 w-3 rounded-full bg-orange-500 animate-ping" />

            {/* Hero Image */}
            <motion.img
              src={image}
              alt="OTasty Signature Dish"
              className="relative z-10 lg:min-h-screen  w-full lg:max-w-xl drop-shadow-2xl"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />


          </motion.div>

        </div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-b from-transparent to-[#0D0D0D]" />

    </section>
  );
}