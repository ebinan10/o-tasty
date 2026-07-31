import { motion } from "framer-motion";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaArrowUp,
} from "react-icons/fa6";

import footerData from "./footerData";

const Footer = () => {
  const scrollTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <footer className="relative min-h-[60vh] w-full flex flex-col items-center justify-center bg-black overflow-hidden">
        <div className="h-[50px]"></div>
      {/* Background Glow */}

      <div className="absolute -top-40 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[180px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-400/10 rounded-full blur-[200px]" />

      <div className="relative  max-w-7xl w-[90%] mx-auto px-6 lg:px-10 py-24">

        <div className="grid  lg:grid-cols-4 md:grid-cols-2 gap-14">

          {/* Brand */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center"
          >
            <img
              src="/logo.png"
              alt="Otasty"
              className="w-28 mb-6"
            />

            <p className="text-gray-400 leading-8">
              {footerData.description}
            </p>

            <div className="flex gap-4 mt-8">

              {footerData.socials.map((social, index) => {
                const Icon = social.icon;

                return (
                  <a
                    key={index}
                    href={social.link}
                    className="w-12 h-12 rounded-full bg-[#171717] hover:bg-orange-500 transition flex items-center justify-center text-white"
                  >
                    <Icon />
                  </a>
                );
              })}

            </div>

          </motion.div>

          {/* Quick Links */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className = " flex flex-col items-center justify-start"
          >
            <h3 className="text-white text-2xl font-bold mb-8">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {footerData.quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}

            </ul>

          </motion.div>

          {/* Menu */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className=" flex flex-col items-center justify-start"
          >
            <h3 className="text-white text-2xl font-bold mb-8">
              Our Menu
            </h3>

            <ul className="space-y-4">

              {footerData.menu.map((item) => (
                <li
                  key={item}
                  className="text-gray-400 hover:text-orange-500 transition cursor-pointer"
                >
                  {item}
                </li>
              ))}

            </ul>

          </motion.div>

          {/* Contact */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="flex flex-col items-center justify-start"
          >
            <h3 className="text-white text-2xl font-bold mb-8">
              Contact
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">
                <FaLocationDot className="text-orange-500 mt-1" />
                <p className="text-gray-400">
                  152 Ikorodu Road,
                  <br />
                  Agric Bus Stop,
                  <br />
                  Lagos.
                </p>
              </div>

              <div className="flex gap-4">
                <FaPhone className="text-orange-500 mt-1" />
                <p className="text-gray-400">
                  +234 802 591 3457
                </p>
              </div>

              <div className="flex gap-4">
                <FaEnvelope className="text-orange-500 mt-1" />
                <p className="text-gray-400">
                  info@otasty.com
                </p>
              </div>

              <div className="flex gap-4">
                <FaClock className="text-orange-500 mt-1" />
                <p className="text-gray-400">
                  Mon – Sun
                  <br />
                  10:00 AM – 10:00 PM
                </p>
              </div>

            </div>

          </motion.div>

        </div>
        <div className="h-[40px]"></div>

        {/* Divider */}

        <div className=" h-[20vh] border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-evenly items-center gap-5">

          <p className="text-gray-500 text-center">
            © {new Date().getFullYear()} Otasty Restaurant & Bar. All Rights Reserved.
          </p>

          <button
            onClick={scrollTop}
            className="w-14 h-14 rounded-full bg-orange-500 hover:bg-orange-600 transition flex items-center justify-center text-white"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
};

export default Footer;