import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="relative w-full h-[25vh] flex items-center justify-center bg-[#171717] rounded-3xl p-8 border border-orange-500/20 hover:border-orange-500 transition-all duration-300"
    >
    <div className="h-full w-[90%] flex flex-col items-start justify-evenly ">
      <FaQuoteLeft className="text-5xl text-orange-500/20 absolute top-6 right-6" />

      <div className="flex items-center gap-4 mb-6">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-orange-500"
        />

        <div>
          <h3 className="text-white font-semibold text-lg">
            {testimonial.name}
          </h3>

          <p className="text-gray-400 text-sm">
            {testimonial.role}
          </p>

          <div className="flex gap-1 mt-2 text-yellow-400">
            {[...Array(testimonial.rating)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </div>
      </div>

      <p className="text-gray-300 leading-8 italic">
        "{testimonial.review}"
      </p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;