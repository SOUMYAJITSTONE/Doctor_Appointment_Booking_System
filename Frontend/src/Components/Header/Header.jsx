import { useEffect, useRef } from "react";
import logo from "../../assets/images/logo.png";
import userImg from "../../assets/images/avatar-icon.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

const navLinks = [
  { path: "/home", display: "Home" },
  { path: "/doctors", display: "Find a Doctor" },
  { path: "/services", display: "Services" },
  { path: "/contact", display: "Contact" },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    if (window.scrollY > 80) {
      headerRef.current.classList.add("sticky__header");
    } else {
      headerRef.current.classList.remove("sticky__header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyHeader);

    return () => {
      window.removeEventListener("scroll", handleStickyHeader);
    };
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  return (
    <header
      className="header flex items-center transition-all duration-300 ease-in-out"
      ref={headerRef}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="logo flex items-center gap-2">
            {/* <img src={logo} alt="Logo" className="w-[40px] h-[40px]" /> */}
            <span className="text-xl font-bold text-primaryColor">
              HealthCare
            </span>
          </div>

          {/* Menu */}
          <div
            className="navigation hidden md:block transition-transform duration-300 ease-in-out"
            ref={menuRef}
          >
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600] underline"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor transition-colors duration-200"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav Right */}
          <div className="flex items-center gap-4">
            <Link to="/">
              <figure className="w-[40px] h-[40px] rounded-full cursor-pointer overflow-hidden hidden md:block border-2 border-primaryColor">
                <img
                  src={userImg}
                  className="w-full h-full object-cover"
                  alt="User"
                />
              </figure>
            </Link>

            <Link to="/Login">
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] shadow-lg hover:shadow-xl hover:shadow-secondaryColor/50 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primaryColor focus:ring-offset-2">
                Login
              </button>
            </Link>

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-8 h-8 cursor-pointer text-primaryColor hover:rotate-180 transition-transform duration-300" />
            </span>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className="navigation__mobile absolute top-full left-0 w-full bg-white shadow-md py-4 px-6 md:hidden transform -translate-y-full transition-transform duration-300"
          ref={menuRef}
        >
          <ul className="flex flex-col items-start gap-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={(navClass) =>
                    navClass.isActive
                      ? "text-primaryColor text-[16px] font-[600]"
                      : "text-textColor text-[16px] font-[500] hover:text-primaryColor transition-colors duration-200"
                  }
                  onClick={toggleMenu}
                >
                  {link.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
