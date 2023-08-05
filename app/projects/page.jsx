"use client"

import React, { useEffect } from "react"
import { Inter } from "next/font/google"
import { motion, useAnimation } from "framer-motion"
import ProjectCard from "@/components/ProjectCard"

const inter = Inter({ subsets: ["latin"] })

const Projects = () => {
  const headerControls = useAnimation()
  const cardControls = useAnimation()

  useEffect(() => {
    // Trigger animation for the header when the component mounts
    headerControls.start({
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    })

    // Trigger animation for the cards when the component mounts
    cardControls.start({
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5, // Add a slight delay to make the cards animation start after the header animation
      },
    })
  }, [headerControls, cardControls])

  return (
    <div
      className={`flex flex-col items-center justify-center text-clr2 mt-40  w-5/6 m-auto`}
    >
      <motion.div initial={{ y: -100, opacity: 0 }} animate={headerControls}>
        <h1 className="text-7xl">
          My <span className="text-clr3">Projects</span>
        </h1>
      </motion.div>
      <div className="my-20">
        <ul className="flex flex-wrap gap-10  items-center justify-center m-auto">
          <ProjectCard
            title="Web Design"
            desc="just a random for now"
            imgSrc={"/coding-7.jpg"}
          />
          <ProjectCard
            title="Web Design"
            desc="just a random for now"
            imgSrc={"/coding-2.jpg"}
          />
          <ProjectCard
            title="Web Design"
            desc="just a random for now"
            imgSrc={"/coding-3.jpg"}
          />
          <ProjectCard
            title="Web Design"
            desc="just a random for now"
            imgSrc={"/coding-4.jpg"}
          />
          <ProjectCard
            title="Web Design"
            desc="just a random for now"
            imgSrc={"/coding-5.jpg"}
          />
          <ProjectCard
            title="Web Design"
            desc="just a random for now"
            imgSrc={"/coding-6.jpg"}
          />
        </ul>
      </div>
    </div>
  )
}

export default Projects
