import logo from "../assets/TFLORENTINA.svg";
import { useState } from "react";
import { GrLanguage } from "react-icons/gr";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ];
  return (
    <>
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 left-0 right-0 z-50">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          {/* Left side */}
          <div className="flex space-x-12 items-center">
            <a href="/">
              <img src={logo} alt="logo" className="lg:w-50 md:w-30 sm:w-50" />
            </a>

            <ul className="md:flex hidden space-x-12">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-100}
                    activeClass="active"
                    to={item.path}
                    className="block hover:text-gray-300 cursor-pointer"
                  >
                    {item.link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side */}
          <div className="space-x-12 hidden md:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center hover:text-secondary"
            >
              <GrLanguage className="mr-2" />
              Language
            </a>
            <button className=" bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">
              Sign Up
            </button>
          </div>

          <div className="md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300 text-lg"
            >
              {isMenuOpen ? (
                <FaXmark className="text-primary w-6 h-6" />
              ) : (
                <FaBars className="text-primary w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* nav bar for mobile */}
      <div
        className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl ${
          isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        {navItems.map((item) => (
          <ul key={item.path}>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              activeClass="active"
              to={item.path}
              className="block text-white hover:text-gray-300 cursor-pointer"
              onClick={toggleMenu}
            >
              {item.link}
            </Link>
          </ul>
        ))}
      </div>
    </>
  );
};

export default Navbar;
