import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheck,
  FaHeart,
  FaLeaf,
  FaUtensils,
  FaStar,
  FaUsers,
  FaWineGlassAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import about from "./about.jpg";
import chefgabriel from "./chefgabriel.jpg";

const values = [
  {
    icon: <FaHeart />,
    title: "Passion",
    description:
      "Every plate at Otasty is prepared with genuine passion for Nigerian food and hospitality.",
  },
  {
    icon: <FaLeaf />,
    title: "Fresh Ingredients",
    description:
      "We carefully select fresh ingredients to preserve the authentic taste and quality of every meal.",
  },
  {
    icon: <FaUtensils />,
    title: "Authentic Flavours",
    description:
      "Our menu celebrates the rich spices, recipes and culinary traditions that make Nigerian cuisine special.",
  },
  {
    icon: <FaUsers />,
    title: "Great Hospitality",
    description:
      "We believe exceptional food should always be accompanied by warm, memorable service.",
  },
];

const highlights = [
  "Authentic Nigerian cuisine",
  "Premium dining experience",
  "Freshly prepared meals",
  "Warm Nigerian hospitality",
  "Professional culinary team",
  "Beautiful dining atmosphere",
];

const About = () => {
  return (

    <div className="min-h-screen w-full flex justify-center items-center overflow-hidden bg-[#0D0D0D] text-white">
    <div className="w-[100%] flex flex-col justify-center   ">
      {/* ================= HERO ================= */}
      <section className="relative flex min-h-[75vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={about}
            alt="Otasty restaurant dining experience"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/30" />
        </div>

        <div className="relative z-10 w-full flex justify-center items-center mx-auto w-full max-w-7xl px-6 py-32 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl w-[90%]"
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-orange-400">
              Welcome to Otasty
            </p>

            <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              More Than a Restaurant.
              <span className="block text-orange-400">
                It&apos;s an Experience.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-justify leading-8 text-gray-300">
              Discover a celebration of Nigerian cuisine where traditional
              flavours meet modern presentation, exceptional hospitality and
              an atmosphere designed to make every visit memorable.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/reservation"
                className="group h-[35px] w-[200px] flex items-center justify-center gap-3 rounded-full bg-orange-500 px-7 py-4 font-semibold text-white transition hover:bg-orange-600"
              >
                Reserve a Table
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/menu"
                className="rounded-full border h-[35px] w-[200px] flex items-center justify-center border-white/20 bg-white/5 px-7 py-4 font-semibold backdrop-blur-md transition hover:border-orange-400 hover:text-orange-400"
              >
                Explore Our Menu
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="relative bg-[#111111] flex items-center justify-center lg:h-[100vh] px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[55vh] items-center flex justify-center"
          >
            <div className="w-[95%] h-[50vh] overflow-hidden rounded-3xl border border-orange-400/20">
              <img
                src={about}
                alt="Otasty Nigerian restaurant"
                className="h-[550px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className=" absolute -bottom-6 -right-4 rounded-2xl border border-orange-400/30 bg-[#171717]/95 p-6 shadow-2xl backdrop-blur-xl sm:right-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500/10 text-2xl text-orange-400">
                  <FaStar />
                </div>

                <div>
                  <p className="text-2xl font-bold">4.9</p>
                  <p className="text-sm text-gray-400">
                    Customer Rating
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }} className=" w-full flex h-[65vh] text-justify flex-col justify-center items-center "
          >
          <div  className="w-[90%]">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
              Our Story
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              A Taste of Nigeria,
              <span className="block text-orange-400">
                Served With Passion.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Otasty Restaurants and Bar was created from a simple idea:
              Nigerian food deserves to be celebrated, beautifully presented
              and enjoyed in an unforgettable environment.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              From richly flavoured jollof rice and aromatic native rice to
              comforting pepper soups, banga dishes and carefully prepared
              grilled specialties, our kitchen brings together the flavours
              that make Nigerian cuisine unique.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              At Otasty, we combine these familiar flavours with contemporary
              presentation and attentive hospitality to create an experience
              that feels both proudly Nigerian and distinctly modern.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-sm text-orange-400">
                    <FaCheck />
                  </span>

                  <span className="text-sm text-gray-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="relative w-full flex-col justify-center items-center  lg:px-10">
        <div className=" w-full flex flex-col justify-center items-center">

          <div className=" w-[90%] flex justify-center items-center h-[40vh] lg:h-[30vh] text-center">
              <div className="  flex flex-col justify-center items-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
              Our Philosophy
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Where Tradition Meets
              <span className="text-orange-400"> Creativity</span>
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              We respect the recipes and traditions that came before us while
              continuously exploring new ways to present Nigerian cuisine.
            </p>
            </div>
          </div>

          <div className="mt-14 w-[90%] grid gap-6 md:grid-cols-3">

            <motion.div
              whileHover={{ y: -8 }}
              className="rounded-3xl w-full h-[27vh] flex flex-col justify-center items-center border border-orange-400/10 bg-[#151515] p-8"
            >
            <div className="w-[90%] flex flex-col gap-5 justify-evenly">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-2xl text-orange-400">
                <FaLeaf />
              </div>

              <h3 className="text-2xl font-bold">
                Fresh Ingredients
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Quality begins with the ingredients. We focus on fresh,
                carefully selected produce and proteins.
              </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="rounded-3xl w-full h-[27vh] flex flex-col justify-center items-center border border-orange-400/10 bg-[#151515] p-8"
            >
            <div className="w-[90%] flex flex-col gap-5 justify-evenly">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-2xl text-orange-400">
                <FaUtensils />
              </div>

              <h3 className="text-2xl font-bold">
                Culinary Craft
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Every dish is thoughtfully prepared to deliver rich flavour,
                beautiful presentation and consistency.
              </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="rounded-3xl w-full h-[27vh] flex flex-col justify-center items-center border border-orange-400/10 bg-[#151515] p-8"
            >
            <div className="w-[90%] flex flex-col gap-5 justify-evenly">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-2xl text-orange-400">
                <FaWineGlassAlt />
              </div>

              <h3 className="text-2xl font-bold">
                Memorable Moments
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                From intimate dinners to celebrations, we create an atmosphere
                where good food and good company come together.
              </p>
              </div>
            </motion.div>
            <div className="h-4"></div>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="bg-[#111111] px-6 py-24 lg:px-10">
        <div className="mx-auto w-full flex flex-col justify-center items-center">

          <div className="text-center h-[15vh] flex flex-col justify-center items-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
              What We Stand For
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Our Core Values
            </h2>
          </div>

          <div className="mt-14 w-[90%] grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="rounded-3xl h-[25vh] w-full text-justify flex flex-col justify-center items-center border border-white/5 bg-[#171717] p-7 text-center"
              >
             <div className="w-[90%] gap-5 flex flex-col justify-center items-start">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/10 text-2xl text-orange-400">
                  {value.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {value.description}
                </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="h-6"></div>
        </div>
      </section>

      {/* ================= CHEF ================= */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-orange-400/10 bg-[#151515] lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={chefgabriel}
              alt="Chef Emeka Okoro"
              className="h-full min-h-[500px] w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-[50vh] w-full justify-center items-center text-justify p-8 sm:p-12 lg:p-16"
          >
          <div className="w-[90%] flex flex-col gap-5">
            <span className="w-fit rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
              Executive Chef
            </span>

            <h2 className="mt-6 text-4xl font-bold sm:text-5xl">
              Chef Gabriel
              <span className="block text-orange-400">
                Obaro
              </span>
            </h2>

            <div className="mt-4 flex items-center gap-1 text-orange-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} />
              ))}

              <span className="ml-2 text-sm text-gray-400">
                Culinary Excellence
              </span>
            </div>

            <p className="mt-7 leading-8 text-gray-400">
              With more than 15 years of culinary experience, Chef Emeka
              brings a deep appreciation for Nigerian ingredients, traditional
              cooking techniques and contemporary presentation to the Otasty
              kitchen.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              His approach is simple: respect the ingredients, honour the
              culture and make every plate worth remembering.
            </p>

            <Link
              to="/menu"
              className="group mt-8 flex w-[250px] h-[40px] items-center justify-center gap-3 rounded-full bg-orange-500 px-7 py-4 font-semibold transition hover:bg-orange-600"
            >
              Discover Our Menu
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className=" relative h-[45vh] flex justify-center items-center gap-7 overflow-hidden bg-[#111111] px-6 py-28 text-center lg:px-10">

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl" />

        <div className=" relative z-10 flex flex-col justify-center items-center gap-7 mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
            Your Table Awaits
          </p>

          <h2 className="mt-5 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Come Taste the
            <span className="block text-orange-400">
              Otasty Experience.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
            Gather your loved ones, discover authentic Nigerian flavours and
            create moments worth remembering.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/reservation"
              className="group flex items-center justify-center gap-3 w-[220px] h-[40px] rounded-full bg-orange-500 px-8 py-4 font-semibold transition hover:bg-orange-600"
            >
              Reserve Your Table
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/contact"
              className="rounded-full border flex items-center justify-center border-white/10 w-[170px] h-[40px] px-8 py-4 font-semibold transition hover:border-orange-400 hover:text-orange-400"
            >
              Contact Otasty
            </Link>
          </div>
          <div className="h-8"></div>
        </div>
      </section>

    </div>
    </div>
  );
};

export default About;

