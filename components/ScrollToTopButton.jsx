"use client"
import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FiArrowUpCircle } from "react-icons/fi"

const ScrollToTopButton = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false)

  const handleScroll = () => {
    setShowScrollToTop(window.scrollY > 200) 
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {showScrollToTop && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.2 }}
          className="fixed bottom-6 right-6 z-50 text-3xl text-clr2 bg-clr3 rounded-full p-2 shadow-lg cursor-pointer"
          onClick={handleScrollToTop}
        >
          <FiArrowUpCircle />
        </motion.button>
      )}
    </>
  )
}

export default ScrollToTopButton
