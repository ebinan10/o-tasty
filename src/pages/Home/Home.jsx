import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories"
import FeaturedProducts from "../../components/Products/FeaturedProducts";

const Home = () => {
  return (
    <div className="min-h-screen pt-20">
      <Hero/>
      <Categories/>
      <FeaturedProducts/>
    </div>
  );
};

export default Home;