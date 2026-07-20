import logo from "../../assets/images/logo/otastylogo.jpg";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaPhoneAlt,
} from "react-icons/fa";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/about" },
  { name: "Reservation", path: "/reservation" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    < >
     <motion.header
       initial={{ y: -120 }}
       animate={{ y: 0 }}
       transition={{ duration: 0.7 }}
       className="sticky top-10 z-[100] w-full py-5"
     >
       <div className="mx-auto flex justify-center px-4">
         <div
           className={`w-full max-w-7xl rounded-full border border-white/10 transition-all duration-500 ${
             scrolled
               ? "bg-none backdrop-blur-xl shadow-2xl"
               : "bg-none backdrop-blur-lg"
           }`}
         >
            <div className="grid h-20 grid-cols-[1fr_2fr_1fr] items-center px-6 lg:px-8">
              {/* Logo */}
              <div className="flex justify-center items-center">
                <Link to="/" className="flex items-center">
                  <img
                    src={logo}
                    alt="OTasty Restaurants & Bar"
                    className="h-14 w-14 rounded-full object-cover border-2 border-orange-500"
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-8">

                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `transition font-medium ${
                        isActive
                          ? "text-orange-400"
                          : "text-white hover:text-orange-400"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}

              </nav>

              {/* Right Side */}
              <div className="hidden lg:flex items-center gap-3">

                <button className="flex h-[50px] w-[80px] items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-orange-500">
                  <FaSearch />
                </button>

                <a
                  href="tel:07033132382"
                  className="flex items-center justify-center h-[50px] w-[130px] gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 font-semibold text-white transition hover:scale-105"
                >
                  <FaPhoneAlt />
                  Call Now
                </a>

              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-xl flex justify-end items-end text-white lg:hidden"
              >
                {mobileOpen ? <FaTimes /> : <FaBars />}
              </button>

            </div>
          </div>

        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 top-15 z-[99] bg-black/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-10">

              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="text-xl font-semibold text-white transition hover:text-orange-400"
                >
                  {item.name}
                </NavLink>
              ))}

              <a
                href="tel:07033132382"
                className="mt-6 flex items-center justify-center h-[50px] w-[130px] gap-3 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-8 py-4 text-white font-semibold"
              >
                <FaPhoneAlt />
                Call Now
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}