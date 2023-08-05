"use client"

import Link from "next/link"
import React, { useState } from "react"
import { motion } from "framer-motion"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

const Navbar = () => {
  const [currentColor, setCurrentColor] = useState("#000000") // Initial color
  const [isMenuOpen, setIsMenuOpen] = useState(false) // State for mobile menu toggle

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev)
  }

  console.log(isMenuOpen)

  return (
    <header className="py-4">
      <nav className="text-clr2 relative flex justify-between align-baseline">
        <div className="relative group cursor-pointer">
          <motion.div
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            whileTap={{ scale: 1.4 }}
            className="text-xl font-semibold text-clr3"
          >
            GLDGN.
          </motion.div>
        </div>
        <div className={`hidden sm:block ${inter.className}`}>
          <Link className="link px-6 relative group hover:text-clr1" href="/">
            Home
            <span className="border-b-2 border-transparent absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2/3 transition-all duration-700 ease-out group-hover:w-full group-hover:border-clr1" />
          </Link>
          <Link className="link px-6 relative group hover:text-clr1" href="/services">
            Services
            <span className="border-b-2 border-transparent absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2/3 transition-all duration-700 ease-out group-hover:w-full group-hover:border-clr1" />
          </Link>
          <Link className="link px-6 relative group hover:text-clr1" href="/projects">
            Projects
            <span className="border-b-2 border-transparent absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2/3 transition-all duration-700 ease-out group-hover:w-full group-hover:border-clr1" />
          </Link>
          <Link className="link px-6 relative group hover:text-clr1" href="/contact">
            Contact
            <span className="border-b-2 border-transparent absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2/3 transition-all duration-700 ease-out group-hover:w-full group-hover:border-clr1" />
          </Link>
        </div>
        <div className="sm:hidden" onClick={handleMenuClick}>
          🔘
        </div>
        {isMenuOpen && (
          <div
            className="sm:hidden absolute right-10 top-8 w-full"
            id="mobile-menu"
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                href="#"
                className="hover:bg-clr1 text-white block rounded-md px-3 py-2 text-base"
              >
                About
              </Link>
              <Link
                href="#"
                className="hover:bg-clr1 hover:text-white block rounded-md px-3 py-2 text-base"
              >
                Contact
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:bg-clr1 hover:text-white block rounded-md px-3 py-2 text-base"
              >
                Projects
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:bg-clr1 hover:text-white block rounded-md px-3 py-2 text-base"
              >
                Home
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
