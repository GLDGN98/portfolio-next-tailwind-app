import React, { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Inter } from "@next/font/google"
const inter = Inter({ subsets: ["latin"] })

const ProjectCard = ({ desc, title, imgSrc, url, appUrl }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative shadow-2xl shadow-cyan-500/20 rounded-xl text-center flex flex-col items-center gap-5 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ position: "relative" }}>
        <Image
          src={imgSrc}
          width={400}
          height={230}
          className="rounded-xl"
          alt="Project Image"
        />
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -100 }}
          initial={{ opacity: 0, y: -100 }}
          className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 text-white flex flex-col items-center justify-center gap-3 p-5"
        >
          <h2 className="text-lg font-bold">{title}</h2>
          <p className={`text-sm ${inter.className}`}>{desc}</p>
          <a href={url} className="text-clr3 hover:text-clr2 hover:underline">
            View on GitHub
          </a>
          {appUrl && (
            <a
              href={appUrl}
              className="text-clr3 hover:text-clr2 hover:underline"
            >
              Checkout the App
            </a>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
