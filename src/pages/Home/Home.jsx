import { BrowserRouter } from "react-router-dom";

import Navbar from "../../components/NavBar/Navbar";
import Hero from "../../components/home/Hero";
import GoldenSparkles from "../../components/ui/GoldenSparkles";
import Stats from "../../components/home/Stats";
import FeaturedDishes from "../../components/home/FeaturedDishes";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import ChefSpecial from "../../components/home/ChefSpecial";
import SpecialMenu from "../../components/SpecialMenu/SpecialMenu";
import Testimonials from "../../components/testimonials/Testimonials";
import Reservation from "../../components/Reservation/Reservation";
import Gallery from "../../components/Gallery/Gallery";
import Chef from "../../components/Chef/Chef";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
     <GoldenSparkles/>


           {/* Main content starts below the fixed navbar */}
           <main className="relative">
             <Hero />
             <Stats />
             <FeaturedDishes />
             <WhyChooseUs/>
             <ChefSpecial/>
             <SpecialMenu/>
             <Testimonials/>
             <Reservation/>
             <Gallery/>
             <Chef/>
             <Contact/>
             <Footer/>
           </main>
    </>
  );
};

export default Home;