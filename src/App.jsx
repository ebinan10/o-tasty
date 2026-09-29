import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import Navbar from "./components/NavBar/Navbar";

import Footer from "./components/Footer/Footer";
// Pages
import ScrollProgress from "./components/ui/ScrollProgress";
import BackToTop from "./components/ui/BackToTop";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import GalleryPage from "./pages/Gallery/Gallery";
import About from "./pages/About/About";
import Reservation from "./pages/Reservation/Reservation";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <ScrollProgress />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer />
      <BackToTop/>
    </BrowserRouter>
  );
}

export default App;