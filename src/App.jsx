import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/home/Hero";
import GoldenSparkles from "./components/ui/GoldenSparkles";
import Stats from "./components/home/Stats";
import FeaturedDishes from "./components/home/FeaturedDishes";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";

function App() {
  return (
    <>
    <GoldenSparkles/>
      <Navbar />

      {/* Main content starts below the fixed navbar */}
      <main className="relative">
        <Hero />
        <Stats />
        <FeaturedDishes />
        <WhyChooseUs/>
      </main>
    </>
  );
}

export default App;