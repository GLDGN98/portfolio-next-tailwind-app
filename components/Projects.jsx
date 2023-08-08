"use client"
import React, { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import ProjectCard from "@/components/ProjectCard"
import { Element } from "react-scroll"
import { useInView } from "react-intersection-observer"
import { prefix } from "@/prefix"

const Projects = () => {
  const headerControls = useAnimation()
  const cardControls = useAnimation()
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true })

  useEffect(() => {
    // Hide the header initially
    headerControls.start({ y: -100, opacity: 0 })

    // Trigger animation for the header and cards when the projects section is in view
    if (projectsInView) {
      headerControls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
        },
      })

      cardControls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
          delay: 0.5, // Add a slight delay to make the cards animation start after the header animation
        },
      })
    }
  }, [headerControls, cardControls, projectsInView])

  const projectData = [
    {
      title: "Web Design",
      desc: "just a random for now",
      imgSrc: "./coding-7-min.jpg",
    },
    {
      title: "Web Design",
      desc: "just a random for now",
      imgSrc: "./coding-2-min.jpg",
    },
    {
      title: "Web Design",
      desc: "just a random for now",
      imgSrc: "./coding-4-min.jpg",
    },
    {
      title: "Web Design",
      desc: "just a random for now",
      imgSrc: "./coding-6-min.jpg",
    },
    {
      title: "Web Design",
      desc: "just a random for now",
      imgSrc: "./coding-5-min.jpg",
    },
    {
      title: "Web Design",
      desc: "just a random for now",
      imgSrc: "./coding-3-min.jpg",
    },
  ]

  return (
    <Element name="projects">
      <div
        className={`flex flex-col items-center justify-center text-clr2 mt-20 md:mt-0`}
      >
        <motion.div initial={{ y: -100, opacity: 0 }} animate={headerControls}>
          <h1 className="text-5xl md:text-7xl">
            My <span className="text-clr3">Projects</span>
          </h1>
        </motion.div>
        <div className="my-20" ref={projectsRef}>
          <motion.ul
            className="flex flex-wrap gap-10 items-center justify-center m-auto"
            initial={{ opacity: 0 }}
            animate={cardControls}
          >
            {projectData.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                desc={project.desc}
                imgSrc={project.imgSrc}
              />
            ))}
          </motion.ul>
        </div>
      </div>
    </Element>
  )
}

export default Projects
