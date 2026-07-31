import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const Newsletter = () => {
  return (
    <section className="relative py-24 bg-[#111111] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-400/10 rounded-full blur-[160px]" />

      <div className="relative max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="bg-[#171717] rounded-[35px] border border-white/10 p-12 lg:p-16 text-center"
        >

          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Newsletter
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-5">
            Stay Updated
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-8">
            Subscribe to receive exclusive offers, seasonal menus,
            chef's specials, and invitations to upcoming events.
          </p>

          <form className="mt-10 flex flex-col md:flex-row gap-4">

            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-[#0D0D0D] border border-white/10 rounded-full px-7 py-5 text-white outline-none focus:border-orange-500"
            />

            <button
              className="bg-orange-500 hover:bg-orange-600 px-8 py-5 rounded-full text-white font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105"
            >
              <FaPaperPlane />

              Subscribe
            </button>

          </form>

        </motion.div>

      </div>

    </section>
  );
};

export default Newsletter;