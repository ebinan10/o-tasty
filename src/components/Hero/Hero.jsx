import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero/herobabyfeeding.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-cyan-50">
      {/* Decorative Blobs */}
      <div className="absolute top-10 left-10 h-28 w-28 rounded-full bg-orange-200/30 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 h-36 w-36 rounded-full bg-sky-200/30 blur-3xl"></div>

      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col-reverse items-center gap-12 px-6 pt-24 pb-12 lg:flex-row lg:px-10">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            🌱 Healthy • Safe • Nutritious
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-800 md:text-6xl">
            Healthy Food for
            <span className="block text-orange-500">
              Growing Little Smiles
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Discover nutritious baby foods carefully selected to support
            healthy growth, happy tummies, and brighter futures. We provide
            trusted baby nutrition for every stage of your child's journey.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/products"
              className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-orange-600 hover:shadow-xl"
            >
              Explore Products
            </Link>

            <Link
              to="/about"
              className="rounded-full border-2 border-orange-500 px-8 py-4 font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white"
            >
              Learn More
            </Link>
          </div>

          {/* Statistics */}
          <div className="mt-14 grid grid-cols-3 gap-6">
            <div>
              <h3 className="text-3xl font-bold text-orange-500">
                500+
              </h3>
              <p className="text-gray-500">
                Healthy Products
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-orange-500">
                10K+
              </h3>
              <p className="text-gray-500">
                Happy Families
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-orange-500">
                15+
              </h3>
              <p className="text-gray-500">
                Trusted Brands
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex-1"
        >
          <img
            src={heroImage}
            alt="Healthy baby eating nutritious food"
            className="mx-auto w-full max-w-lg rounded-[40px] shadow-2xl"
          />

          {/* Floating Card 1 */}
          <div className="absolute left-0 top-10 rounded-2xl bg-white p-4 shadow-xl">
            <h4 className="font-bold text-orange-500">
              100% Natural
            </h4>

            <p className="text-sm text-gray-500">
              Carefully selected ingredients
            </p>
          </div>

          {/* Floating Card 2 */}
          <div className="absolute bottom-10 right-0 rounded-2xl bg-white p-4 shadow-xl">
            <h4 className="font-bold text-orange-500">
              Quality Assured
            </h4>

            <p className="text-sm text-gray-500">
              Safe for growing babies
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;