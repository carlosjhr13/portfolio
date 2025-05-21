import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

export const Navbar = () => {
  const navigate = useNavigate();
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onContact = () => {
    navigate("/contact");
  };

  const onShowMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const t = translations[language];

  return (
    // xl:bg-red-300 lg:bg-yellow-300 md:bg-blue-300 sm:bg-pink-500
    <nav
      className={`flex justify-center backdrop-blur-md h-[70px] px-6 fixed right-0 top-0 left-0 z-10 xl:h-[70px] xl:px-20 ${
        isScrolled ? "shadow-md bg-white/40" : ""
      }`}
    >
      <div className="flex w-full items-center justify-between">
        <Link className="text-gray-950" to="/">
          <p className="font-light text-MD text-gray-950 xl:text-md">
            JUST<span className="font-bold">ME</span>
          </p>
        </Link>
        <div className="flex items-center gap-4">
          <div className="flex items-center p-[2px] rounded-full bg-white/40 shadow-md hover:bg-white/50 lg:hidden">
            <span
              onClick={toggleLanguage}
              className={`px-2 py-1 rounded-full transition-all duration-600 cursor-pointer text-xs ${
                language === "en" ? "bg-orange-900 text-white" : ""
              }`}
            >
              EN
            </span>
            <span
              onClick={toggleLanguage}
              className={`px-2 py-1 rounded-full transition-all duration-600 cursor-pointer text-xs ${
                language === "es" ? "bg-orange-900 text-white" : ""
              }`}
            >
              ES
            </span>
          </div>
          <button className="lg:hidden" onClick={onShowMenu}>
            <img
              className="w-6 h-6 min-w-4 xl:w-6 xl:h-6"
              src={`./assets/icons/menu.svg`}
              alt="menu"
            />
          </button>
        </div>

        <div className="lg:flex items-center gap-4 text-sm lg:text-md lg:gap-6 hidden text-gray-950">
          <NavLink
            className={({ isActive }) => `${isActive ? "active" : ""}`}
            to="/about"
          >
            {t.nav.aboutMe}
          </NavLink>

          <NavLink
            className={({ isActive }) => `${isActive ? "active" : ""}`}
            to="/portfolio"
          >
            {t.nav.portfolio}
          </NavLink>

          <NavLink
            className={({ isActive }) => `${isActive ? "active" : ""}`}
            to="/contact"
          >
            {t.nav.contactMe}
          </NavLink>

          <div className="flex items-center p-[2px] rounded-full bg-white/40 shadow-md hover:bg-white/50">
            <span
              onClick={toggleLanguage}
              className={`px-2 py-1 rounded-full transition-all duration-600 cursor-pointer text-xs ${
                language === "en" ? "bg-orange-900 text-white" : ""
              }`}
            >
              EN
            </span>
            <span
              onClick={toggleLanguage}
              className={`px-2 py-1 rounded-full transition-all duration-600 cursor-pointer text-xs ${
                language === "es" ? "bg-orange-900 text-white" : ""
              }`}
            >
              ES
            </span>
          </div>
        </div>

        {menuOpen && (
          <div className="absolute top-[70px] right-0 left-0 bg-white shadow-md p-4 flex flex-col items-center gap-4 lg:hidden">
            <NavLink
              className={({ isActive }) => `${isActive ? "active" : ""}`}
              to="/about"
              onClick={() => setMenuOpen(false)}
            >
              About Me
            </NavLink>

            <NavLink
              className={({ isActive }) => `${isActive ? "active" : ""}`}
              to="/portfolio"
              onClick={() => setMenuOpen(false)}
            >
              Portfolio
            </NavLink>

            <button
              className="px-4 py-2 rounded-full bg-orange-900 hover:bg-orange-800 text-white sm:w-fit text-sm xl:text-md"
              onClick={() => {
                setMenuOpen(false);
                onContact();
              }}
            >
              Contact Me
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
