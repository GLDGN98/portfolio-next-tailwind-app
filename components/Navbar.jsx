"use client"
import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", name: "Home" },
    { id: "services", name: "Services" },
    { id: "projects", name: "Projects" },
    { id: "contact", name: "Contact" },
  ];

  return (
    <header className="py-4">
      <nav className="text-clr2 relative flex justify-between align-baseline">
        <div className="relative group cursor-pointer">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.4 }}
            className="text-xl font-semibold text-clr3"
          >
            GLDGN.
          </motion.div>
        </div>
        <div className={`hidden sm:flex ${inter.className}`}>
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="link cursor-pointer px-6 relative group hover:text-clr1"
              onClick={handleNavLinkClick}
            >
              {item.name}
              <span className="border-b-2 border-transparent absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2/3 transition-all duration-700 ease-out group-hover:w-full group-hover:border-clr1" />
            </Link>
          ))}
        </div>
        <div className="sm:hidden" onClick={handleMenuClick}>
          <RxHamburgerMenu />
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              exit={{ scaleY: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="sm:hidden absolute right-0 top-8 bg-primary border text-center rounded-xl border-clr1 w-full"
              id="mobile-menu"
            >
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="hover:bg-clr1 text-clr3 block rounded-md px-3 py-2 text-base"
                    onClick={handleNavLinkClick}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
