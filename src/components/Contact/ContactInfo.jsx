import { motion } from "framer-motion";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa6";

const ContactInfo = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 70 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full min-h-[85vh] flex  flex-col items-center justify-center space-y-6"
    >
    <div className="w-[90%] h-full gap-7 flex flex-col justify-evenly">
      {/* Address */}

      <div className="w-full bg-[#171717] rounded-3xl p-7 border border-white/10 hover:border-orange-500 transition">

        <div className="w-[90%] flex h-[140px] w-full items-center justify-center  gap-5">
            <div className="w-[90%] flex justify-between gap-5">
          <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center">
            <FaLocationDot className="text-white text-xl" />
          </div>

          <div className = "w-full ">

            <h3 className="text-white text-xl font-semibold">
              Visit Us
            </h3>

            <p className="text-gray-400 mt-3 leading-7">
              {data.address}
            </p>

          </div>

        </div>
        </div>
      </div>

      {/* Phone */}

      <div className="bg-[#171717] w-full flex items-center justify-center rounded-3xl p-7 border border-white/10 hover:border-orange-500 transition">

      <div className="w-[90%] flex  items-start   gap-5">

        <div className="flex h-[90px] w-full items-center  gap-5">

          <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center">
            <FaPhone className="text-white text-xl" />
          </div>

          <div>

            <h3 className="text-white text-xl font-semibold">
              Call Us
            </h3>

            <p className="text-gray-400 mt-3">
              {data.phone}
            </p>

          </div>

        </div>
        </div>

      </div>

      {/* Email */}

      <div className="w-full bg-[#171717] flex items-center justify-center  rounded-3xl p-7 border border-white/10 hover:border-orange-500 transition">

        <div className="flex items-center w-[90%] h-[90px] gap-5">

          <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center">
            <FaEnvelope className="text-white text-xl" />
          </div>

          <div>

            <h3 className="text-white text-xl font-semibold">
              Email
            </h3>

            <p className="text-gray-400 mt-3">
              {data.email}
            </p>

          </div>

        </div>

      </div>

      {/* Opening Hours */}

      <div className="w-full h-[250px]  flex items-center justify-center bg-[#171717] rounded-3xl p-7 border border-white/10 hover:border-orange-500 transition">
        <div className="w-[90%] flex items-center  ">
            <div className="flex flex-col justify-center w-2/5 items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center">
            <FaClock className="text-white text-xl" />
          </div>

          <h3 className="text-white text-center text-xl font-semibold">
            Opening Hours
          </h3>

        </div>

        <div className="w-full space-y-4">

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
       </div>
    </motion.div>
  );
};

export default ContactInfo;