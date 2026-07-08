import ProductCard from "./ProductCard";
import products from "../../data/products";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const featured = products.filter((item) => item.featured);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-[#6BBE44]">
            Featured Products
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Best Sellers Loved by Parents
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Carefully crafted meals made from wholesome ingredients to nourish
            your little one through every stage of growth.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/shop"
            className="rounded-full bg-[#6BBE44] px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-700"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;