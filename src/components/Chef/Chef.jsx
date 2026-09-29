import FeaturedChef from "./FeaturedChef";
import ChefCard from "./ChefCard";
import chefData from "./chefData";
import { motion, AnimatePresence } from "framer-motion";
const featuredChef = chefData[0];
const otherChef = chefData.slice(1);

const Chef = () => {
  return (
    <section className="relative py-28 w-full  flex flex-row justify-center overflow-hidden bg-[#0D0D0D]">
        <div className="h-[20vh]"></div>
        <div className="max-w-7xl w-[90%] mx-auto px-6 lg:px-10">
       <FeaturedChef chef={featuredChef} />

      {/* Background Glow */}

      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-orange-500/10 blur-[160px]" />

      <div className="absolute -bottom-40 right-0 w-[500px] h-[500px] rounded-full bg-orange-400/10 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center mb-20"
        >
        <div className=" h-[10vh]  mx-auto mt-8" />
          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Culinary Experts
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold text-white mt-5">
            Meet Our Professional Chefs
          </h2>

          <p className="text-gray-400 text-center max-w-3xl mx-auto mt-8 leading-8">
            Passionate professionals dedicated to bringing authentic Nigerian
            flavours to your table through creativity, excellence, and years of
            culinary experience.
          </p>

           <div className=" h-[10vh]  mx-auto mt-8" />

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mt-16">
          {otherChef.map((chef, index) => (
              <ChefCard
                key={chef.id}
                chef={chef}
                index={index}
              />
            ))}

        </div>

      </div>

      </div>

    </section>
  );
};

export default Chef;