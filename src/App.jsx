import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import Navbar from "./components/NavBar/Navbar";
// import Footer from "./components/Footer/Footer";
// import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

// Pages
import Home from "./pages/Home/Home";
// import Menu from "./pages/Menu";
// import Gallery from "./pages/Gallery";
// import About from "./pages/About";
// import Reservation from "./pages/Reservation";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
{/*       <ScrollToTop /> */}

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
{/*         <Route path="/menu" element={<Menu />} /> */}
{/*         <Route path="/gallery" element={<Gallery />} /> */}
{/*         <Route path="/about" element={<About />} /> */}
{/*         <Route path="/reservation" element={<Reservation />} /> */}
{/*         <Route path="/contact" element={<Contact />} /> */}
{/*         <Route path="*" element={<NotFound />} /> */}
      </Routes>

{/*       <Footer /> */}
    </BrowserRouter>
  );
}

export default App;