import FeaturedChef from "./FeaturedChef";
import ChefCard from "./ChefCard";
import chefData from "./chefData";

const featuredChef = chefData[0];
const otherChef = chefData.slice(1);

const Chef = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-[#0D0D0D]">

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

          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Culinary Experts
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold text-white mt-5">
            Meet Our Professional Chefs
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-8 leading-8">
            Passionate professionals dedicated to bringing authentic Nigerian
            flavours to your table through creativity, excellence, and years of
            culinary experience.
          </p>

          <div className="w-28 h-1 rounded-full bg-orange-500 mx-auto mt-8" />
          <div className="w-12 h-1 rounded-full bg-white mx-auto mt-3" />

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
          {otherChef.map((chef, index) => (
              <ChefCard
                key={chef.id}
                chef={chef}
                index={index}
              />
            ))}

        </div>

      </div>

    </section>
  );
};

export default Chef;