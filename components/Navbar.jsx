"use client"
import React, { useState } from "react"
import { Link } from "react-scroll"
import { motion, AnimatePresence } from "framer-motion"
import { RxHamburgerMenu } from "react-icons/rx"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const handleNavLinkClick = () => {
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: "home", name: "Home" },
    { id: "services", name: "Services" },
    { id: "projects", name: "Projects" },
    { id: "contact", name: "Contact" },
  ]

  return (
    <header className="py-4">
      <nav className="text-clr2 relative flex justify-between items-center">
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
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isMenuOpen ? 0 : 45 }}
            transition={{ duration: 0.3 }}
            className="w-8 h-8 flex flex-col items-center justify-center"
          >
            <motion.div
              className={`w-6 h-1 bg-clr3 border rounded-full transform ${
                isMenuOpen ? "rotate-90" : ""
              }`}
              initial={false}
              animate={{
                rotate: isMenuOpen ? 45 : -45,
                y: isMenuOpen ? 4 : -1,
                x: isMenuOpen ? 2.5 : -3,
              }}
              transition={{ duration: 0.3 }}
            ></motion.div>
            <motion.div
              className={`w-6 h-1 bg-clr3 border rounded-full transform -rotate-45 ${
                isMenuOpen ? "hidden" : "block"
              }`}
              animate={{ rotate: isMenuOpen ? 45 : -45, x: isMenuOpen ? 0 : 2 }}
            ></motion.div>
            <motion.div
              className={`w-6 h-1 bg-clr3 border rounded-full transform ${
                isMenuOpen ? "-rotate-40" : "0"
              }`}
              initial={false}
              animate={{
                rotate: isMenuOpen ? -45 : -45,
                y: isMenuOpen ? 0 : 1,
                x: isMenuOpen ? 2 : 7,
              }}
              transition={{ duration: 0.3 }}
            ></motion.div>
          </motion.div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ scaleY: 0, opacity: 0, y: -100 }} // Slide from top to bottom
              animate={{ scaleY: 1, opacity: 1, y: 0 }} // Slide to bottom
              exit={{ scaleY: 0, opacity: 0, y: -100 }} // Slide back to top
              transition={{ duration: 0.3 }}
              className={`sm:hidden border-b-2 border-clr3 absolute  right-0 top-8 bg-primary text-center rounded-xl w-full ${inter.className}`}
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
                    className="hover:bg-clr3 hover:text-primary text-clr3 block rounded-md px-3 py-2 text-base"
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
  )
}

export default Navbar
