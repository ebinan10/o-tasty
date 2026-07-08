import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-[#8BC34A] px-3 py-1 text-xs font-semibold text-white">
          {product.age}
        </span>
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center gap-1 text-amber-400">
          {[...Array(product.rating)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        <h3 className="text-xl font-bold text-gray-900">
          {product.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {product.description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-2xl font-bold text-[#6BBE44]">
            ₦{product.price.toLocaleString()}
          </span>

          <Link
            to={`/shop/${product.id}`}
            className="rounded-full bg-[#6BBE44] p-3 text-white transition hover:bg-green-700"
          >
            <FiShoppingCart size={20} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;