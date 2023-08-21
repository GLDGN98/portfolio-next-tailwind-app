"use client"
import { motion } from "framer-motion"
import SocialLinks from "@/components/SocialLinks"
import ResponsiveImage from "@/components/Image"
import { Inter } from "@next/font/google"
import { useEffect, useState } from "react"
const inter = Inter({ subsets: ["latin"] })

const Home = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true) 
  const textOptions = [
    "Frontend Developer",
    "Fullstack Developer",
    "Freelancer",
    "Web Developer",
  ]

  useEffect(() => {
    let interval
    if (currentTextIndex < textOptions.length) {
      const text = textOptions[currentTextIndex]
      interval = setInterval(() => {
        if (displayText.length < text.length) {
          setDisplayText(text.substring(0, displayText.length + 1))
        } else {
          clearInterval(interval)
          setTimeout(() => {
            setDisplayText("")
            setCurrentTextIndex(
              (prevIndex) => (prevIndex + 1) % textOptions.length
            )
          }, 1000) 
        }
      }, 200)
    }
    return () => clearInterval(interval)
  }, [currentTextIndex, displayText])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  const handleDownload = () => {
    const fileURL = "./Gilad's Resume3.pdf"
    const link = document.createElement("a")
    link.href = fileURL
    link.target = "_blank"
    link.download = "Gilad's Resume.pdf" // Change the name of the downloaded file
    // Simulate a click on the link to trigger the download
    link.click()
  }

  return (
    <main className="flex flex-col md:flex md:flex-row items-center justify-center mt-16 md:mt-0">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-left text-clr2 tracking-wide"
      >
        <h2 className="xl:text-5xl text-3xl">Hi there!</h2>
        <br />
        <h1 className="xl:text-7xl lg:text-5xl text-4xl">I'm Gilad Dagan</h1>
        <br />
        <h2 className="text-xl xl:text-5xl lg:text-3xl md:text-xl flex flex-row items-baseline md:items-start gap-2 md:gap-3">
          And I'm a
          <span style={{ color: "#BCAB60" }}>
            {displayText}
            {cursorVisible && <span className="cursor">|</span>}
          </span>
        </h2>

        <br />
        <p className="lg:text-2xl text-lg md:w-5/6">
          Frontend Developer with strong problem-solving abilities and a passion
          for creating impactful web applications. Collaborative team player
          with excellent communication and software design pattern knowledge.
          Proven experience in building web applications from scratch and
          optimizing for performance. Independent and proactive decision-maker,
          committed to delivering exceptional result.
        </p>
        <SocialLinks />
        <motion.button
          onClick={handleDownload}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.2 }}
          className={`border-2 font-medium rounded-lg hover:font-semibold border-clr2 p-5 text-clr3 hover:bg-clr3 hover:text-clr2 hover:border-clr3 cursor-pointer tracking-wide w-full md:w-max ${inter.className}`}
        >
          Download CV
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="md:w-full md:flex md:items-center md:justify-center mt-1"
      >
        <div
          className="md:mt-0 mt-10"
        >
          <ResponsiveImage
            className="bg-gradient-to-r from-clr1 to-clr2 rounded-full p-2 shadow-lg shadow-cyan-500/60"
            src="/last-one-img.webp"
            width={458}
            height={600}
            alt="my-image"
          />
        </div>
      </motion.div>
    </main>
  )
}

export default Home
