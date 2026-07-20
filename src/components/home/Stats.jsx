import {
  FaUsers,
  FaUtensils,
  FaAward,
  FaStar,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaAward />,
    value: 25,
    suffix: "+",
    title: "Years Experience",
  },
  {
    icon: <FaUtensils />,
    value: 120,
    suffix: "+",
    title: "Delicious Dishes",
  },
  {
    icon: <FaUsers />,
    value: 15000,
    suffix: "+",
    title: "Happy Customers",
  },
  {
    icon: <FaStar />,
    value: 4.9,
    title: "Customer Rating",
  },
];

export default function Stats() {
  return (
    <section className=" min-h-[120vh] sm:min-h-[65vh] w-full xl:min-h-[40vh] md:min-h-[55vh] lg:min-h-[60vh] items-center flex justify-center bg-gradient-to-r from-black via-black/80 to-black/40 py-27">
      <div className="mx-auto mt-16 xl:grid flex justify-evenly gap-5 flex-wrap max-w-7xl  items-center lg:justify-center gap-8 px-6 lg:grid-cols-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className=" rounded-3xl border border-white/10 bg-white/5 h-[170px] w-[300px] flex flex-col gap-2 items-center justify-center text-center"
          >
            <div className=" flex justify-center text-4xl text-orange-500">
              {item.icon}
            </div>

            <h2 className="text-4xl font-black text-white">
              {item.value}
              {item.suffix}
            </h2>

            <p className="mt-2 text-gray-400">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}