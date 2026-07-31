import { motion } from "framer-motion";
import {
  FaLeaf,
  FaUserTie,
  FaMotorcycle,
  FaUtensils,
  FaArrowRight,
} from "react-icons/fa";

import restaurantImg from "../../assets/images/whychooseus/restaurant-interior.png";

const features = [
  {
    icon: <FaLeaf />,
    title: "Fresh Ingredients",
    description:
      "Every meal is prepared daily using carefully selected fresh vegetables, premium meats, and authentic Nigerian spices.",
  },
  {
    icon: <FaUserTie />,
    title: "Expert Chefs",
    description:
      "Our experienced chefs blend traditional Nigerian recipes with modern culinary techniques for unforgettable flavors.",
  },
  {
    icon: <FaMotorcycle />,
    title: "Fast Service",
    description:
      "Whether dining in or ordering takeaway, we pride ourselves on prompt and professional service.",
  },
  {
    icon: <FaUtensils />,
    title: "Luxury Dining",
    description:
      "Enjoy a cozy, elegant atmosphere designed for families, friends, and special celebrations.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full flex justify-center items-center py-24 bg-[#0D0D0D] overflow-hidden">
      <div className="md:max-w-7xl w-full flex items-center justify-center  px-6 lg:px-10">
        <div className="h-[60px]"></div>
        <div className=" flex flex-col justify-center gap-20 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={restaurantImg}
              alt="Restaurant"
              className="rounded-3xl shadow-2xl w-full lg:h-[90vh] object-cover"
            />

            <div className="absolute -bottom-6 -right-6 w-[200px] h-[85px] bg-[#D4AF37] flex flex-col items-center justify-center  text-black px-8 py-5 rounded-2xl shadow-xl">
              <h2 className="text-4xl font-extrabold">10+</h2>
              <p className="font-medium">Years of Excellence</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
           className="flex lg:w-full w-[90%] items-center justify-center flex-col"
          >
            <span className="text-[#D4AF37] w-[90%] text-center  uppercase tracking-[5px] font-semibold">
              Why Choose Us
            </span>

            <h2 className="text-5xl w-[90%] text-center font-black text-white leading-tight mt-4">
              Experience the True Taste of Nigeria
            </h2>

            <p className="text-gray-400 mt-8 w-[90%] text-justify leading-8 text-lg">
              At Otasty Restaurant & Bar, every meal is prepared with passion,
              authentic recipes, and the freshest ingredients. Whether you're
              enjoying a family dinner, celebrating a special occasion, or
              grabbing a quick bite, we promise exceptional food and outstanding
              hospitality.
            </p>

            <div className="h-[4vh]"></div>
            {/* Features */}
            <div className="grid sm:grid-cols-2 w-[90%] xl:w-full gap-6 mt-12">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#181818] w-full flex flex-col items-center justify-center  p-6 rounded-2xl h-[260px] w-[280px] border border-gray-800 hover:border-[#D4AF37] duration-300"
                >
                <div className="w-[90%] h-[80%] flex-col items-start  text-justify gap-8">
                  <div className="w-14 h-14 rounded-full bg-[#D4AF37] text-black flex items-center justify-center text-2xl mb-5">
                    {item.icon}
                  </div>

                  <h3 className="text-white flex items-center justify-start h-[50px] text-xl font-bold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-7 w-[90%]">
                    {item.description}
                  </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="h-[60px]"></div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-10 bg-[#D4AF37] h-[50px] w-[170px] flex items-center justify-center text-black px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition"
            >
              Learn More
              <FaArrowRight />
            </motion.button>
          </motion.div>
        <div className="h-[10px]"></div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;