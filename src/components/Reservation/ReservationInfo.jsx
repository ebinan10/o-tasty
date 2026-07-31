import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaClock,
} from "react-icons/fa6";

const ReservationInfo = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-[#171717] w-full flex  items-center justify-center rounded-3xl p-10 h-full"
    >
    <div className=" w-[90%] h-[85vh] flex flex-col items-start justify-evenly">
      <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
        {data.subtitle}
      </span>

      <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">
        {data.title}
      </h2>

      <p className="text-gray-400 mt-6 leading-8">
        {data.description}
      </p>

      <div className="h-[25vh]flex flex-col items-center justify-evenly space-y-6 mt-10">

        <div className="flex gap-4">
          <FaPhone className="text-orange-500 mt-1" />

          <div>
            <h4 className="text-white font-semibold">Phone</h4>
            <p className="text-gray-400">{data.phone}</p>
          </div>
        </div>

        <div className="flex gap-4">
          <FaEnvelope className="text-orange-500 mt-1" />

          <div>
            <h4 className="text-white font-semibold">Email</h4>
            <p className="text-gray-400">{data.email}</p>
          </div>
        </div>

        <div className="flex gap-4">
          <FaLocationDot className="text-orange-500 mt-1" />

          <div>
            <h4 className="text-white font-semibold">Address</h4>
            <p className="text-gray-400">{data.address}</p>
          </div>
        </div>

      </div>

      <div className="mt-12">

        <div className="flex items-center gap-3 mb-5">
          <FaClock className="text-orange-500" />

          <h3 className="text-white text-xl font-semibold">
            Opening Hours
          </h3>
        </div>

        <div className="space-y-4 h-[16vh] flex flex-col justify-evenly">
          {data.openingHours.map((item, index) => (
            <div
              key={index}
              className="flex justify-between border-b border-white/10 pb-3"
            >
              <span className="text-gray-300">
                {item.day}
              </span>

              <span className="text-orange-400">
                {item.time}
              </span>
            </div>
          ))}
        </div>

      </div>
      </div>
    </motion.div>
  );
};

export default ReservationInfo;