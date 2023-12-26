// Importing icons from React Icons library
import { FaSearch } from "react-icons/fa";
import { PiDiamondsFourFill } from "react-icons/pi";
import { IoStatsChart } from "react-icons/io5";
import { MdShoppingBasket } from "react-icons/md";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowBack } from "react-icons/io";

import { useContext, useRef, useState } from "react";
import { MenuContext } from "../context"; // Importing context for menu state management
import { motion } from "framer-motion"; // Importing animation components from Framer Motion library

const Header = () => {
  // Destructuring menu and setMenu from the context
  const { menu, setMenu } = useContext(MenuContext);

  // State for handling sub-menu visibility
  const [subMenu, setSubMenu] = useState(false);

  // Ref for accessing the document body
  const body = useRef(document.body);

  // Event handler for toggling the main menu
  const handleMenuShow = () => {
    // Toggle overflow property based on menu state
    menu
      ? (body.current.style.overflowY = "auto")
      : (body.current.style.overflowY = "hidden");
    setMenu(!menu); // Toggle menu state
  };

  // Event handler for toggling the sub-menu
  const handleSubMenuShow = () => {
    setSubMenu(!subMenu); // Toggle subMenu state
  };

  // JSX structure for the Header component
  return (
    <header>
      {menu && (
        // Conditional rendering of the menu using Framer Motion for animations
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute left-0 top-0 z-10 h-full w-[80%] bg-[#1E1E2D] px-8 py-4 text-white md:w-[23%]"
        >
          {/* Main menu content */}
          <div className="flex items-center justify-between md:flex-wrap">
            <h3 className="text-3xl font-extrabold uppercase">Dashboard</h3>
            <IoIosArrowBack
              className="h-7 w-7 cursor-pointer text-[#6993FF] hover:scale-95"
              onClick={handleMenuShow}
            />
          </div>
          {/* ... (unchanged) */}
        </motion.div>
      )}
      {/* Header content (outside the main menu) */}
      <div className="flex h-20 items-center justify-between gap-4 bg-white px-4">
        <button onClick={handleMenuShow}>
          {/* Hamburger menu button */}
          <GiHamburgerMenu className="h-7 w-7 cursor-pointer text-[#6993FF] hover:scale-95" />
        </button>
        <div className="flex items-center gap-4">
          {/* Icons for search, diamonds, stats, shopping basket, and layout grid */}
          <div className="flex gap-5">
            <FaSearch className="h-5 w-5 cursor-pointer text-[#6993FF] hover:scale-95" />
            <PiDiamondsFourFill className="h-5 w-5 cursor-pointer text-[#6993FF] hover:scale-95" />
            <IoStatsChart className="h-5 w-5 cursor-pointer text-[#6993FF] hover:scale-95" />
            <MdShoppingBasket className="h-5 w-5 cursor-pointer text-[#6993FF] hover:scale-95" />
            <TfiLayoutGrid2Alt className="h-5 w-5 cursor-pointer text-[#6993FF] hover:scale-95" />
          </div>
          {/* User information and icon */}
          <p className="text-xs capitalize text-[#959CB6]">Raushan Raj</p>
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#D7F9EF] text-[#0BB783]">
            RR
          </div>
        </div>
      </div>
      {/* Bottom border */}
      <div className="border-b"></div>
    </header>
  );
};

export default Header;
