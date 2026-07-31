import { motion } from "framer-motion";
import testimonialData from "./testimonialData";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="py-24 w-full flex items-center justify-center bg-[#0D0D0D] overflow-hidden">
     <div className="w-[90%] max-w-7xl  flex flex-col justify-evenly items-center ">
      <div className="w-full  mx-auto px-6 lg:px-10">
        <div className="h-[30px]"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center justify-evenly min-h-[25vh] mb-16"
        >
          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Testimonials
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            What Our Customers Say
          </h2>
          <div className="w-full flex justify-center items-center">
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-8 text-justify">
            We take pride in creating unforgettable dining experiences.
            Here's what our valued guests have to say about Otasty.
          </p>
          </div>
        </motion.div>
        <div className="h-[30px]"></div>
        <div className="grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
        <div className="h-[30px]"></div>
      </div>
      </div>
    </section>
  );
};

export default Testimonials;