import React, { useState } from "react"
import { Waypoint } from "react-waypoint"
import { motion } from "framer-motion"
import SocialLinks from "@/components/SocialLinks"
import ResponsiveImage from "@/components/Image"
import Typewriter from "typewriter-effect"

const Home = () => {
  const [isAnimated, setIsAnimated] = useState(false)

  const handleWaypointEnter = () => {
    setIsAnimated(true)
  }

  const handleDownload = () => {
    // Replace the URL with the correct path to your PDF file
    const fileURL = "/resume.pdf"
    // Create a link element
    const link = document.createElement("a")
    link.href = fileURL
    link.target = "_blank"
    link.download = "resume.pdf" // Change the name of the downloaded file
    // Simulate a click on the link to trigger the download
    link.click()
  }

  return (
    <main className="flex flex-col md:flex md:flex-row items-center justify-center mt-16 md:mt-0">
      <Waypoint onEnter={handleWaypointEnter} />
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={isAnimated ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
        className="md:px-10 md:py-4 text-left text-clr2 tracking-wide"
      >
        <h2 className="xl:text-5xl text-3xl">Hi there!</h2>
        <br />
        <h1 className="xl:text-7xl lg:text-5xl text-4xl">I'm Gilad Dagan</h1>
        <br />
        <h2 className="text-xl xl:text-5xl lg:text-3xl md:text-xl flex flex-row items-baseline md:items-start gap-2 md:gap-3">
          And I'm a
          <span style={{ color: "#BCAB79" }}>
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "Fullstack Developer",
                  "Freelancer",
                  "Web Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h2>

        <br />
        <p className="lg:text-2xl xl:text-3xl text-lg">
          A passionate and creative frontend developer, bringing life to the web
          one line of code at a time. I love crafting stunning and intuitive
          user experiences that make the web a better place.
        </p>
        <SocialLinks />
        <motion.button
          onClick={handleDownload}
          whileHover={{ scale: 1.1 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          whileTap={{ scale: 1.2 }}
          className={`border-2 font-medium rounded-lg hover:font-semibold border-clr2 p-5 text-clr3 hover:bg-clr3 hover:text-clr2 hover:border-clr3 cursor-pointer tracking-wide w-full md:w-max`}
        >
          Download CV
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={isAnimated ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
        className="md:w-full md:flex md:items-center md:justify-center mt-1"
      >
        {isAnimated && (
          <motion.div
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{
              repeat: Infinity,
              duration: 2,
              repeatType: "reverse",
            }}
            className="md:mt-0 mt-10"
          >
            <ResponsiveImage
              className="bg-gradient-to-r from-clr1 to-clr2 rounded-full p-2 shadow-lg shadow-cyan-500/60"
              src="/last-one-img.webp"
              width={458}
              height={600}
            />
          </motion.div>
        )}
      </motion.div>
    </main>
  )
}

export default Home
