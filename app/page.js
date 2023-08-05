"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Typewriter from "typewriter-effect"
import SocialLinks from "@/components/SocialLinks"
import { Inter } from "next/font/google"
import { motion } from "framer-motion"
import Loader from "@/components/Loader"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const [isAnimated, setIsAnimated] = useState(false)
  const [isLoading, setIsLoading] = useState(true) // Add a loading state

  useEffect(() => {
    // Simulate an async task or data fetching
    const timer = setTimeout(() => {
      setIsLoading(false)
      setIsAnimated(true)
    }, 500)

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="py-4 flex justify-between items-center mt-40">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={isAnimated ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.5 }}
            className="flex-1 w-50 text-clr2 tracking-wide"
          >
            <h2 className="text-5xl">Hi there!</h2>
            <br />
            <h1 className="text-7xl"> I'm Gilad Dagan </h1>
            <br />
            <h2 className="text-5xl flex gap-5">
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
            <p className="text-3xl">
              A passionate and creative frontend developer, bringing life to the
              web one line of code at a time. I love crafting stunning and
              intuitive user experiences that make the web a better place.
            </p>
            <SocialLinks />
            <motion.button
              whileHover={{ scale: 1.1 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              whileTap={{ scale: 1.2 }}
              className={`border-2 font-medium rounded-lg hover:font-semibold  border-clr2 p-5 text-clr3 hover:bg-clr3 hover:text-clr2 hover:border-clr3 cursor-pointer ${inter.className} tracking-wide `}
            >
              <a
                href="/resume.pdf" // Replace with the actual path to your PDF file
                download // Add the "download" attribute to prompt the user to download the file
              >
                Download CV
              </a>
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={isAnimated ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.5 }}
            className="flex-1 w-50 flex align-center justify-center"
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
              >
                <Image
                  className="bg-gradient-to-r from-clr1 to-clr2 rounded-full p-2 shadow-lg shadow-cyan-500/60"
                  src="/portfolio-img-hd-cut.png"
                  width={400}
                  height={350}
                  alt="Your Image"
                />
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </main>
  )
}
