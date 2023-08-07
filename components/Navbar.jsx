"use client"
import React, { useState } from "react"
import { Link as ScrollLink } from "react-scroll"
import { motion, AnimatePresence } from "framer-motion"
import { RxHamburgerMenu } from "react-icons/rx"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false) // State for mobile menu toggle

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const handleNavLinkClick = () => {
    setIsMenuOpen(false)
  }

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
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="link cursor-pointer px-6 relative group hover:text-clr1"
            onClick={handleNavLinkClick}
          >
            Home
            <span className="border-b-2 border-transparent absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2/3 transition-all duration-700 ease-out group-hover:w-full group-hover:border-clr1" />
          </ScrollLink>
          <ScrollLink
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="link cursor-pointer px-6 relative group hover:text-clr1"
            onClick={handleNavLinkClick}
          >
            Services
            <span className="border-b-2 border-transparent absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2/3 transition-all duration-700 ease-out group-hover:w-full group-hover:border-clr1" />
          </ScrollLink>
          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="link cursor-pointer px-6 relative group hover:text-clr1"
            onClick={handleNavLinkClick}
          >
            Projects
            <span className="border-b-2 border-transparent absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2/3 transition-all duration-700 ease-out group-hover:w-full group-hover:border-clr1" />
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="link cursor-pointer px-6 relative group hover:text-clr1"
            onClick={handleNavLinkClick}
          >
            Contact
            <span className="border-b-2 border-transparent absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2/3 transition-all duration-700 ease-out group-hover:w-full group-hover:border-clr1" />
          </ScrollLink>
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
                <ScrollLink
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:bg-clr1 text-clr3 block rounded-md px-3 py-2 text-base"
                  onClick={handleNavLinkClick}
                >
                  Home
                </ScrollLink>
                <ScrollLink
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:bg-clr1 text-clr3 hover:text-white block rounded-md px-3 py-2 text-base"
                  onClick={handleNavLinkClick}
                >
                  Services
                </ScrollLink>
                <ScrollLink
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-clr3 hover:bg-clr1 hover:text-white block rounded-md px-3 py-2 text-base"
                  onClick={handleNavLinkClick}
                >
                  Projects
                </ScrollLink>
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-clr3 hover:bg-clr1 hover:text-white block rounded-md px-3 py-2 text-base"
                  onClick={handleNavLinkClick}
                >
                  Contact
                </ScrollLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Navbar
