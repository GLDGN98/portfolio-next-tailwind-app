import React from "react"
import { motion } from "framer-motion"

const ProjectCard = ({ desc, title, imgSrc }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative shadow-2xl shadow-cyan-500/20 rounded-xl text-center flex flex-col items-center gap-5 overflow-hidden"
    >
      {/* The image */}
      <img
        src={imgSrc}
        width={400}
        className="rounded-xl"
        alt="Project Image"
      />

      {/* Overlay with hover effect */}
      <motion.div
        whileHover={{ opacity: 1, y: 0 }} // Show the overlay on hover
        initial={{ opacity: 0, y: -100 }} // Hide the overlay initially
        className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 text-white flex flex-col items-center justify-center gap-3 p-5"
      >
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm">{desc}</p>
        <a href="#" className="text-clr3 hover:text-clr2 hover:underline">
          View on GitHub
        </a>
      </motion.div>
    </motion.div>
  )
}

export default ProjectCard
