import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const navigate = useNavigate();
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

  return (
    <nav
      className={`flex justify-center bg-white/40 backdrop-blur-md h-[70px] md:h-[50px] px-6 fixed right-0 top-0 left-0 z-10 xl:h-[70px] xl:px-20 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="flex w-full items-center justify-between">
        <Link
          className={({ isActive }) => `${isActive ? "active" : ""}`}
          to="/"
        >
          <p className="font-light text-MD text-orange-900 xl:text-md">
            JUST<span className="font-bold">ME</span>
          </p>
        </Link>

        <button className="sm:hidden" onClick={onShowMenu}>
          <img
            className="w-6 h-6 min-w-4 xl:w-6 xl:h-6 brightness-0 invert"
            src={`./assets/icons/menu.svg`}
            alt="arrow-left"
          />
        </button>

        <div className="sm:flex items-center gap-4 text-sm xl:text-md xl:gap-6 hidden">
          <NavLink
            className={({ isActive }) => `${isActive ? "active" : ""}`}
            to="/about"
          >
            About Me
          </NavLink>

          <NavLink
            className={({ isActive }) => `${isActive ? "active" : ""}`}
            to="/portfolio"
          >
            Portfolio
          </NavLink>

          <button
            className="px-4 py-2 rounded-full bg-orange-900 hover:bg-orange-800 text-white sm:w-fit text-sm xl:text-md"
            onClick={onContact}
          >
            Contact Me
          </button>
        </div>

        {menuOpen && (
          <div className="absolute top-[70px] right-0 left-0 bg-white shadow-md p-4 flex flex-col items-center gap-4 sm:hidden">
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
