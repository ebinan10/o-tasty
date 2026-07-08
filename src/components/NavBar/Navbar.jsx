import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-20">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-amber-400 flex items-center justify-center text-white font-bold text-xl">
            🌱
          </div>

          <div>
            <h2 className="font-bold text-xl text-gray-800">
              Little Sprouts
            </h2>

            <p className="text-xs text-gray-500">
              Baby Nutrition
            </p>
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive
                    ? "text-amber-500"
                    : "text-gray-700 hover:text-amber-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <NavLink
            to="/contact"
            className="bg-amber-400 hover:bg-amber-500 text-white px-6 py-3 rounded-full transition"
          >
            Get in Touch
          </NavLink>
        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-3xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-lg px-6 py-6">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-500 font-semibold"
                    : "text-gray-700"
                }
              >
                {link.name}
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="bg-amber-400 text-white py-3 rounded-full text-center"
            >
              Get in Touch
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;