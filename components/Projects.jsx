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
    headerControls.start({ y: -100, opacity: 0 })

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
          delay: 0.5, 
        },
      })
    }
  }, [headerControls, cardControls, projectsInView])

  const projectData = [
    {
      title: "MrBitcoin",
      desc: "Digital wallet app for keeping and transferring Bitcoins",
      img: "/bitcoinVue.png",
      url: "https://github.com/GLDGN98/MrBitcoin",
    },
    {
      title: "Workflow",
      desc: "List-making application, Trello clone",
      imgSrc: "/Workflow.png",
      url: "https://github.com/GLDGN98/Workflow-trello_clone",
    },
    {
      title: "myteam",
      desc: "Design challenge: Crafting user-centric solutions with innovation.",
      imgSrc: "/myteam.png",
      url: "https://github.com/GLDGN98/myteam-design",
    },
    {
      title: "Football App",
      desc: "Football app highlighting leagues, teams, and an interactive experience with customizable content administration.",
      imgSrc: "/football-app2.png",
      url: "https://github.com/GLDGN98/football-app",
    },
    {
      title: "Blogin",
      desc: "Design challenge: Crafting user-centric solutions with innovation",
      imgSrc: "/Blogin.png",
      url: "https://github.com/GLDGN98/Blogin",
    },
    {
      title: "Meme Generator",
      desc: "Meme Generator app – choose from a library of images, add witty captions, and share your creations.",
      imgSrc: "/MemeGenerator.png",
      url: "https://github.com/GLDGN98/meme-generator",
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
            className="flex flex-wrap gap-3 lg:gap-5 2xl:gap-10 items-center justify-center m-auto"
            initial={{ opacity: 0 }}
            animate={cardControls}
          >
            {projectData.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                desc={project.desc}
                imgSrc={project.imgSrc}
                url={project.url}
              />
            ))}
          </motion.ul>
        </div>
      </div>
    </Element>
  )
}

export default Projects
